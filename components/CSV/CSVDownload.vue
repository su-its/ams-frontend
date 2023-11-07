<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        CSV形式でダウンロード
      </p>
    </div>
    <div class="card-content">
      <div class="tabs is-boxed is-toggle">
        <ul>
          <li class="is-active"><a><font-awesome-icon icon="file-arrow-down" />3か月分</a>
            <CSVDefaultCSV />
          </li>
          <li><a><font-awesome-icon icon="download" />自分で設定する</a>
            <CSVCustomCSV />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref(0);
</script>
