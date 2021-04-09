<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <Navigation />
      </div>
      <div class="column is-9 section">
        <div>
          <CSVDownload />
          <br>
          <div class="card">
            <!-- <b-collapse
              class="panel"
              animation="slide"
              v-model="isOpenLog"
            > -->
            <!-- <template #trigger> -->
            <div class="card-header">
              <p class="card-header-title">
                入退室ログ
                <!-- <b-icon size="is-medium" :icon="isOpenLog ? 'menu-down' : 'menu-up'" /> -->
              </p>
              <b-dropdown aria-role="list">
                <template #trigger="{ active }">
                  <b-button
                    :label="'表示件数: ' + log_meta.contains"
                    type="is-success is-light"
                    :icon-right="active ? 'menu-up' : 'menu-down'"
                  />
                </template>
                <div
                  v-for="i in per_page"
                  :key="i.value"
                >
                  <b-dropdown-item
                    aria-role="listitem"
                    @click="changePerPagePagination(i.value)"
                  >
                    {{ i.value }}
                  </b-dropdown-item>
                </div>
              </b-dropdown>
            </div>
            <!-- </template> -->
            <AccessLogCard :log-data="log_data" />
            <b-pagination
              v-model="current_page"
              :total="log_meta.total"
              order="is-centered"
              :per-page="log_meta.contains"
              :range-before="3"
              :range-after="1"
              @change="pagination"
            />
            <!-- </b-collapse> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'
import Navigation from '~/components/Common/Navigation'
import AccessLogCard from '~/components/AccessLogCard'
import CSVDownload from '~/components/CSV/CSVDownload'

/**
 * pageの情報を追加、あるいはチェックするメソッド
 * @param {*} data 数字のデータ(違うデータを入れた場合1扱いになります)
 * @returns {Number} page 何もなければ1、そうでなければ該当するページが帰ってきます
 */
function checkNullPageData (data) {
  if (_.isNumber(data)) {
    return data
  } else {
    return 1
  }
};

export default {
  components: {
    Navigation,
    AccessLogCard,
    CSVDownload
  },
  asyncData ({ store, query }) {
    // page情報のヴァリデーション
    const page = checkNullPageData(query.page)
    return Promise.all([
      store.dispatch('logging/getAccessLogs', { page })
    ]).then(() => {
      return {
        log_meta: _.cloneDeep(store.getters['logging/accessLogMetaData'])
      }
    })
  },
  data () {
    return {
      current_page: 1,
      isOpenLog: true,
      per_page: [
        { value: 5 },
        { value: 10 },
        { value: 15 },
        { value: 20 }
      ]
    }
  },
  head: {
    title: '入退室ログ'
  },
  computed: {
    ...mapGetters({
      log_data: 'logging/accessLogs'
    })
  },
  methods: {
    /**
     * @param {Number} 切り替えたいper_page
     * @returns {*} vuexが書き換わっているけど、一ページ目に遷移する
     * (じゃないと参照したい情報が正しく表示されない)
     */
    async changePerPagePagination (perPage) {
      // パラメータ用のObjectを用意
      const params = {}
      // ページは強制的に1ページ目
      const page = 1
      // ページ情報を代入
      params.page = page
      // perPageを代入
      params.perPage = perPage
      // データのフェッチ
      await this.$store.dispatch('logging/getAccessLogs', params)
      // meta情報を更新
      this.log_meta = _.cloneDeep(this.$store.getters['logging/accessLogMetaData'])
      // 1ページ目に遷移
      this.current_page = 1
    },
    /**
     * @param null
     * @returns {*} vuexが書き換わっている
     */
    pagination () {
      // パラメータ用のObjectを用意
      const params = {}
      // page情報のヴァリデーション
      const page = checkNullPageData(this.current_page)
      // ページ情報を代入
      params.page = page
      // perPageを代入
      params.perPage = this.log_meta.contains
      // データのフェッチ
      this.$store.dispatch('logging/getAccessLogs', params)
    }
  }
}
</script>
