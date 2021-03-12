export const state = () => ({
  apiVersion: {}
})

export const mutations = {

  /**
  *
  * @param {*} state
  * @param {*} payLoad
  */
  SET_API_VERSION (state, payLoad) {
    state.apiVersion = payLoad
  }
}

export const getters = {
  /**
   *
   * @param state
   * @returns {*}
   */
  apiVersion: (state) => {
    return state.apiVersion
  }
}

export const actions = {

  // version情報を取得する
  info ({ commit }) {
    // 完成したらコメントアウトを外して使ってください
    // return this.$axios.get('info').then((Response) => {
    //   commit('SET_API_VERSION', Response.data)
    // })
    commit('SET_API_VERSION', '2.0.1')
  }
}
