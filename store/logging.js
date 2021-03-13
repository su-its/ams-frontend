export const state = () => ({
  // ページネーションのためにmeta情報とデータ本体を分離
  access_logs: {
    data: {},
    meta: {}
  },
  in_room_users: {}
})

export const mutations = {

  /**
  * 入退室ログをセット
  * (アクションのメソッドを呼び出し、コンポーネント上の話だったら更新できる(と思う))
  * @param {*} state
  * @param {*} payLoad
  */
  SET_ACCESS_LOGS (state, payLoad) {
    state.access_logs.data = payLoad
  },

  /**
  * 入退室ログはページネーションするのでメタ情報を記載
  * @param {*} state
  * @param {*} payLoad
  */
  SET_ACCESS_LOG_METADATA (state, payLoad) {
    state.access_logs.meta = payLoad
  },

  /**
  * 現在入室している生徒の一覧をセットする
  * @param {*} state
  * @param {*} payLoad
  */
  SET_IN_ROOM_USERS (state, payLoad) {
    state.in_room_users = payLoad
  }
}

export const getters = {
  /**
   * 入退室ログの一覧を取得
   * (ただしページネーションしていることに注意)
   * @param state
   * @returns {*}
   */
  accessLogs: (state) => {
    return state.access_logs.data
  },

  /**
   * 入退室ログのメタ情報を取得
   * ページネーション等
   * @param state
   * @returns {*}
   */
  accessLogMetaData: (state) => {
    return state.access_logs.meta
  },

  /**
   * 現在入室している生徒の一覧を取得する
   * @param state
   * @returns {*}
   */
  inRoomUsers: (state) => {
    return state.in_room_users
  }
}

export const actions = {

  /**
   * 現在入室している生徒の一覧を取得する
   */
  getInRoomUsers ({ commit }) {
    return this.$axios.get('/users_in_room').then((Response) => {
      commit('SET_IN_ROOM_USERS', Response.data.data)
    })
  },
  /**
   * 現在入室している生徒の一覧を取得する
   * @param state
   */
  getAccessLogs ({ commit }) {
    return this.$axios.get('/access_logs').then((Response) => {
      commit('SET_ACCESS_LOGS', Response.data.data)
      commit('SET_ACCESS_LOG_METADATA', Response.data.meta)
    })
  },
  /**
   * バックエンドからのイベント通知に対するリスナーを設定する
   * @param state
   */
  setUpSSE ({ commit }) {
    const baseUrl = process.env.baseUrl
    const evtSrc = new EventSource(baseUrl + '/users_updated_event')

    evtSrc.addEventListener('usersUpdated', (e) => {
      try {
        const json = JSON.parse(e.data)
        commit('SET_IN_ROOM_USERS', json.data)
      } catch (error) {
        // console.log('error in parse mesg:', error)
      }
    })
  }
}
