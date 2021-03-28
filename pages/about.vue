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
                Ver.{{ PKG_VERSION }}<br>
                (c) 2021 IT Solution Room, Shizuoka University
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
                Ver.{{ BACKEND_VERSION }}<br>
                (c) 2021 IT Solution Room, Shizuoka University
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
    store.dispatch('version/getBackendVersion')
  },
  head: {
    title: 'このシステムについて'
  },
  computed: {
    ...mapGetters({
      BACKEND_VERSION: 'version/backendVersion',
      PKG_VERSION: 'version/pkgVersion'
    })
  }
}
</script>
