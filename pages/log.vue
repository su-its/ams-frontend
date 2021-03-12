<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <navigation />
      </div>
      <div class="column is-9 section">
        <div>
          <AccessLogCard :log_data="log_data" />
          <b-pagination
            v-model="current_page"
            :total="log_meta"
            :order="is-centered"
            :per-page="10"
            :range-before="3"
            :range-after="1"
          />
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
import accessLogCard from '~/components/access_log_card'
import navigation from '~/components/navigation'
export default {
  components: {
    navigation,
    accessLogCard
  },
  data () {
    return {
      current_page: 1
    }
  },
  fetch ({ store }) {
    store.dispatch('logging/getAccessLogs')
  },
  computed: {
    ...mapGetters({
      log_data: 'logging/access_logs',
      log_meta: 'logging/access_log_metadata'
    })
  }
}
</script>
