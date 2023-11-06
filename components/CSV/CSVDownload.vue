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
          label="3か月分"
          icon="file-download"
        >
          <CSVDefaultCSV />
        </b-tab-item>
        <b-tab-item
          label="自分で設定する"
          icon="download-multiple"
        >
          <CSVCustomCSV />
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script>
const activeTab = ref(0)
</script>
