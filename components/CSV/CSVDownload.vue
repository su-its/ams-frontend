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
          <li v-bind:class="{ 'is-active': isActive == 'default' }"><a v-on:click="isActive = 'default'"><font-awesome-icon icon="file-arrow-down" />3か月分</a>
          </li>
          <li v-bind:class="{ 'is-active': isActive == 'custom' }"><a v-on:click="isActive = 'custom'"><font-awesome-icon icon="download" />自分で設定する</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="tab-contents">
      <div
        class="content"
        v-bind:class="{ 'is-active': isActive == 'default'}"
      >
        <CSVDefaultCSV />
      </div>
      <div
        class="content"
        v-bind:class="{ 'is-active': isActive == 'custom'}"
      >
        <CSVCustomCSV />
      </div>
    </div>
  </div>
</template>

<script setup>
const isActive = ref("default");
</script>

<style scoped>
.tab-contents .content {
  display: none;
}
.tab-contents .content.is-active {
  display: block;
}
</style>
