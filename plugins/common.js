import _ from 'lodash'
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
     * CSVをダウンロードするメソッド
     * @param {*} data 空or取得する期間
     * @returns {*} CSVデータ
    */
    //TODO:CSVをダウンロードする機能をつけること、また引数も持たせないといけないけど、必須ではないので後回しにしてます
    download () {
      this.$buefy.snackbar.open('ダウンロードしました。')
    }
  }
}
