import { Parser } from 'json2csv'
export default {
  methods: {
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
