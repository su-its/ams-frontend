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
            <div class="card-header">
              <p class="card-header-title">
                入退室ログ
              </p>
              <b-dropdown aria-role="list">
                <template #trigger="{ active }">
                  <b-button
                    :label="'表示件数: ' + log_meta.contains"
                    type="is-success is-light"
                    :icon-right="active ? 'menu-up' : 'menu-down'"
                  />
                </template>
                <div v-for="i in per_page" :key="i.value">
                  <b-dropdown-item aria-role="listitem" @click="changePerPagePagination(i.value)">{{ i.label }}</b-dropdown-item>
                </div>
              </b-dropdown>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import nuxtend from 'nuxtend'
import CommonMixin from '~/plugins/common'
import Navigation from '~/components/Common/Navigation'
import AccessLogCard from '~/components/AccessLogCard'
import CSVDownload from '~/components/CSV/CSVDownload'
export default nuxtend({
  components: {
    Navigation,
    AccessLogCard,
    CSVDownload
  },
  mixins: [CommonMixin],
  data () {
    return {
      current_page: 1,
      per_page: [
        {label: 5, value: 5},
        {label: 10, value: 10},
        {label: 15, value: 15},
        {label: 20, value: 20}
        ]
    }
  },
  fetch ({ store, query }) {
    // page情報のヴァリデーション
    const page = this.checkNullPageData(query.page)
    store.dispatch('logging/getAccessLogs', {page: page})
  },
  head: {
    title: '入退室ログ'
  },
  computed: {
    ...mapGetters({
      log_data: 'logging/accessLogs',
      log_meta: 'logging/accessLogMetaData'
    })
  },
  methods: {
    /**
     * @param {Number} 切り替えたいper_page
     * @returns {*} vuexが書き換わっているけど、一ページ目に遷移する
     * (じゃないと参照したい情報が正しく表示されない)
    */
    changePerPagePagination (perPage) {
      // パラメータ用のObjectを用意
      let params = {}
      // ページは強制的に1ページ目
      const page = 1
      // ページ情報を代入
      params.page = page
      // perPageを代入
      params.perPage = perPage
      // データのフェッチ
      this.$store.dispatch('logging/getAccessLogs', params)
      this.current_page = 1
    },
    /**
     * @param null
     * @returns {*} vuexが書き換わっている
    */
    pagination () {
      // パラメータ用のObjectを用意
      let params = {}
      // page情報のヴァリデーション
      const page = this.checkNullPageData(this.current_page)
      // ページ情報を代入
      params.page = page
      // perPageを代入
      params.perPage = this.log_meta.contains
      // データのフェッチ
      this.$store.dispatch('logging/getAccessLogs', params)
    }
  }
})
</script>
