export const state = () => ({
  backend_version: '',
  pkg_version: process.env.PKG_VERSION
})

export const mutations = {

  /**
   * バックエンドのバージョンのセッタ
   * @param {*} state
   * @param {*} payLoad
   */
  SET_BACKEND_VERSION (state, payload) {
    state.backend_version = payload
  }
}

export const getters = {
  /**
   * バックエンドのバージョンのゲッタ
   * @param state
   * @returns {*}
   */
  backendVersion: (state) => {
    return state.backend_version
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
  /**
   * バックエンドのversion情報を取得する
   */
  getBackendVersion ({ commit }) {
    return this.$axios.get('/').then((Response) => {
      commit('SET_BACKEND_VERSION', Response.data.version)
    }).catch(() => {
      commit('SET_BACKEND_VERSION', 'バージョンの取得に失敗しました')
    })
  }
}
