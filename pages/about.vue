<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <Navigation />
      </div>
      <div class="column is-9 section">
        <!-- フロントエンドのver表記 -->
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">
              ITS-AMS コントロールパネル
            </p>
          </div>
          <div class="card-content">
            <div class="content">
              <p>
                Ver.0.1.0<br>
                (c) {{ $moment().format('YYYY') }} IT Solution Room, Shizuoka University
              </p>
            </div>
          </div>
        </div>
        <br>
        <!-- バックエンドのver表記 -->
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">
              ITS-AMS バックエンドシステム
            </p>
          </div>
          <div class="card-content">
            <div class="content">
              <p>
                Ver.{{ API_Version }}<br>
                (c) {{ $moment().format('YYYY') }} IT Solution Room, Shizuoka University
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
import Navigation from '~/components/Common/Navigation'
export default {
  components: {
    Navigation
  },
  fetch ({ store }) {
    store.dispatch('version/info')
  },
  head: {
    title: 'このシステムについて'
  },
  computed: {
    ...mapGetters({
      API_Version: 'version/apiVersion'
    })
  }
}
</script>
