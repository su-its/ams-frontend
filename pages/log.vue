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
                  <b-dropdown-item aria-role="listitem">{{ i.label }}</b-dropdown-item>
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
import CSVDownload from '~/components/CSVDownload'
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
    store.dispatch('logging/getAccessLogs', page)
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
     * @param null
     * @returns {*} vuexが書き換わっている
    */
    pagination () {
      // page情報のヴァリデーション
      const page = this.checkNullPageData(this.current_page)
      // データのフェッチ
      this.$store.dispatch('logging/getAccessLogs', page)
    }
  }
})
</script>
