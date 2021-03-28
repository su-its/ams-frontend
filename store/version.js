export const state = () => ({
  api_version: {},
  pkg_version: process.env.PKG_VERSION
})

export const mutations = {

  /**
  * API情報をセットする
  * (ただし、バージョン情報が変わることを動的に通知しなければならないか
  * 甚だ疑問なので、axios経由させるべきなのかは検討しても良いかも)
  * @param {*} state
  * @param {*} payLoad
  */
  SET_API_VERSION (state, payLoad) {
    state.api_version = payLoad
  }
}

export const getters = {
  /**
   * API_VERSION情報のゲッタ
   * @param state
   * @returns {*}
   */
  apiVersion: (state) => {
    return state.api_version
  },
  /**
   * package.jsonに書いてあるversionのゲッタ
   * @param {*} state
   * @returns {string}
   */
  pkgVersion: (state) => {
    return state.pkg_version
  }
}

export const actions = {

  // version情報を取得する
  // ミューテーション経由で、情報を取得または更新している
  info ({ commit }) {
    // 完成したらコメントアウトを外して使ってください
    // return this.$axios.get('info').then((Response) => {
    //   commit('SET_API_VERSION', Response.data.data)
    // })
    commit('SET_API_VERSION', '2.0.1')
  }
}
