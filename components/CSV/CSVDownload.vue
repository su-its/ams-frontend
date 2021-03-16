<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        CSV形式でダウンロード
      </p>
    </div>
    <div class="card-content">
      <b-tabs
        v-model="activeTab"
        type="is-toggle"
        expanded
      >
        <b-tab-item
          label="2か月分"
          icon="file-download"
        >
          <DefaultCSV />
        </b-tab-item>
        <b-tab-item
          label="自分で設定する"
          icon="download-multiple"
        >
          <CustomCSV />
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import DefaultCSV from '~/components/CSV/DefaultCSV'
import CustomCSV from '~/components/CSV/CustomCSV'
export default {
  components: {
    DefaultCSV,
    CustomCSV
  },
  data () {
    return {
      activeTab: 0
    }
  }
}
</script>
