import _ from 'lodash'
import { Parser } from 'json2csv'

export default {
  methods: {
    /**
     * dispatchされたデータをqueryにする関数
     * @param {*} data formであることが多い。
     * @returns {string} query化されたデータが帰ってきます ex: hoge=111&tmp=333 一番最初の?がつかないことに注意してください
     */
    convertParamsToQuery (data) {
      let query = ''
      _.each(data, (value, key) => {
        if (key !== 'page' && value !== '' && value !== undefined) {
          query += `&${key}=${value}`
        }
      })
      return query
    },

    /**
     * dispatchする前にデータ(form)を一つの変数にする関数
     * v-model等を使う場合はこれを使うことで、関数を省略できる
     * @param {Object} form formデータ
     * @returns {*} 変数化されて帰ってきます。主にstoreのactions向けに使います。
     */
    convertDaraToParams (form) {
      const data = _.cloneDeep(form)
      return _.pickBy(
        _.transform(data, function (result, value, key) {
          result[key] = _.trim(value)
        }),
        v => !_.isEmpty(v)
      )
    },

    /**
     * pageの情報を追加、あるいはチェックするメソッド
     * @param {*} data 数字のデータ(違うデータを入れた場合1扱いになります)
     * @returns {Number} page 何もなければ1、そうでなければ該当するページが帰ってきます
    */
    checkNullPageData (data) {
      let page = 1
      if (_.isNumber(data)) {
        page = data
      } else {
        page = 1
      }
      return page
    },

    /**
     * バックエンドから指定期間の入退室ログを取得し
     * CSVファイルに変換してダウンロードする
     * @param {moment=} startDate 取得期間の始まり
     * @param {moment=} endDate 取得期間の終わり
    */
    download (startDate, endDate) {
      /* クエリを構築 */
      const queries = []
      if (startDate) {
        queries.push('since=' + startDate.format('YYYY-MM-DD'))
      }
      if (endDate) {
        queries.push('until=' + endDate.format('YYYY-MM-DD'))
      }
      // 手元にある情報だけをクエリに載せる
      const queryStr = (queries.length === 0) ? '' : ('?' + queries.join('&'))

      /* APIからデータを持ってきて、生成したCSVをダウンロードさせる */
      /* eslint-disable no-console */
      this.$axios.get('/access_logs/bulk' + queryStr)
        .then((resp) => {
          try {
            this._generateAndDownloadCSV(resp.data)
            this.$buefy.snackbar.open('ダウンロードしました。')
          } catch (err) {
            console.debug(err)
            this.$buefy.snackbar.open('ダウンロード失敗（パースエラー）')
          }
        })
        .catch((err) => {
          console.debug(err)
          this.$buefy.snackbar.open('ダウンロード失敗（APIエラー）')
        })
    },

    /* 入退室ログのオブジェクトからCSVを生成し
     * ダウンロードさせる
     * @param {object} obj 入退室ログオブジェクト
     * @example: { 'meta': {...}, data: [...] }
     */
    _generateAndDownloadCSV (obj) {
      /* オブジェクトからCSVを構築 */
      const parser = new Parser({
        fields: ['user_id', 'entered_at', 'exited_at'],
        eol: '\r\n', // 行末はDOS
        withBOM: true, // BOM付き
        transforms: [(item) => {
          // Excelで読めるように時刻をフォーマットする
          return {
            user_id: item.user_id,
            entered_at: this.$moment(item.entered_at).format('YYYY-MM-DD HH:mm:ss'),
            exited_at: this.$moment(item.exited_at).format('YYYY-MM-DD HH:mm:ss')
          }
        }]
      })
      const csv = parser.parse(obj.data)

      /* CSVのファイル名生成 */
      const sinceStr = this.$moment(obj.meta.since).format('YYMMDD')
      const untilStr = this.$moment(obj.meta.until).format('YYMMDD')
      const filename = sinceStr + '_' + untilStr + '.csv'

      /* CSVダウンロード処理 */
      const a = window.document.createElement('a')
      a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
      a.download = filename
      a.click()
    }
  }
}
