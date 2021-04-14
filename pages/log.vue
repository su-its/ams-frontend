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
                    :label="'表示件数: ' + log_meta.per_page"
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
            <AccessLogCard :log-data="log_data" />
            <b-pagination
              v-model="current_page"
              :total="log_meta.total"
              order="is-centered"
              :per-page="log_meta.per_page"
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
import Navigation from '~/components/Common/Navigation'
import AccessLogCard from '~/components/AccessLogCard'
import CSVDownload from '~/components/CSV/CSVDownload'

/**
 * pageの情報を追加、あるいはチェックするメソッド
 * @param {*} data 数字のデータ(違うデータを入れた場合1扱いになります)
 * @returns {Number} page 何もなければ1、そうでなければ該当するページが帰ってきます
 */
function checkNullPageData (data) {
  if (Number.isInteger(data)) {
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
  async asyncData ({ store }) {
    const page = 1 // ページ読み込み時はログの1ページ目を表示
    await store.dispatch('logging/getAccessLogs', { page })
  },
  data () {
    return {
      current_page: 1,
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
      log_data: 'logging/accessLogs',
      log_meta: 'logging/accessLogMetaData'
    })
  },
  methods: {
    /**
     * @param {Number} 切り替えたいper_page
     * @returns {*} vuexが書き換わっているけど、1ページ目に遷移する
     * (じゃないと参照したい情報が正しく表示されない)
     */
    async changePerPagePagination (perPage) {
      // パラメータ用のObjectを用意
      const params = {
        page: 1, // per_pageを変えるので1ページ目に戻す
        perPage
      }

      // データのフェッチ
      await this.$store.dispatch('logging/getAccessLogs', params)

      // ページネーションも1ページ目に戻す
      this.current_page = 1
    },

    async pagination () {
      // パラメータ用のObjectを用意
      const params = {
        // v-model経由の外部入力なのでvalidationする
        page: checkNullPageData(this.current_page),
        perPage: this.log_meta.per_page
      }

      // データのフェッチ
      await this.$store.dispatch('logging/getAccessLogs', params)
    }
  }
}
</script>
