<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <navigation />
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
                Ver.1.0<br>
                (c) {{ $moment().locale('ja').format('YYYY') }} IT Solution Room, Shizuoka University
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
                (c) {{ $moment().locale('ja').format('YYYY') }} IT Solution Room, Shizuoka University
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
import navigation from '~/components/navigation'
export default {
  components: {
    navigation
  },
  fetch ({ store }) {
    store.dispatch('version/info')
  },
  computed: {
    ...mapGetters({
      API_Version: 'version/apiVersion'
    })
  }
}
</script>
