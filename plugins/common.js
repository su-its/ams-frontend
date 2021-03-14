import _ from 'lodash'

/**
 * dispatchされたデータをqueryにする関数
 * (不要な場合消して良い)
 * (現段階では使う予定はないっぽい)
 * @param {*} data formであることが多い。
 * @returns {string} query化されたデータが帰ってきます ex: hoge=111&tmp=333 一番最初の?がつかないことに注意してください
 */
const convertParamsToQuery = (data) => {
  let query = ''
  _.each(data, (value, key) => {
    if (key !== 'page' && value !== '' && value !== undefined) {
      query += `&${key}=${value}`
    }
  })
  return query
}

/**
 * dispatchする前にデータ(form)を一つの変数にする関数
 * v-model等を使う場合はこれを使うことで、関数を省略できる
 * (不要な場合消して良い)
 * (現段階では使う予定はないっぽい)
 * @param {Object} form formデータ
 * @returns {*} 変数化されて帰ってきます。主にstoreのactions向けに使います。
 */
const vonvertDaraToParams = (form) => {
  const data = _.cloneDeep(form)
  return _.pickBy(
    _.transform(data, function (result, value, key) {
      result[key] = _.trim(value)
    }),
    v => !_.isEmpty(v)
  )
}

export default ({}, inject) => {
  inject('convertParamsToQuery', convertParamsToQuery)
  inject('vonvertDaraToParams', vonvertDaraToParams)
}
