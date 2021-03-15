<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <Navigation />
      </div>
      <div class="column is-9 section">
        <div>
          <div class="card">
            <AccessLogCard :log-data="log_data" />
            <b-pagination
              v-model="current_page"
              :total="log_meta.total_page*10"
              order="is-centered"
              :per-page="10"
              :range-before="3"
              :range-after="1"
              @change="pagination"
            />
          </div>
          <br>
          <!-- CSVでダウンロードする部分 -->
          <div class="card">
            <div class="card-header">
              <p class="card-header-title">
                CSV形式でダウンロード
              </p>
            </div>
            <div class="card-content">
              <p>直近2ヶ月分の入退室ログをCSV形式でダウンロードできます。</p><br>
              <p>
                <b-button size="is-medium" icon-left="file-download" label="ダウンロード" type="is-success" />
              </p>
            </div>
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
export default nuxtend({
  components: {
    Navigation,
    AccessLogCard
  },
  mixins: [CommonMixin],
  data () {
    return {
      current_page: 1
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
