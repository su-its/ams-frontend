<template>
  <div class="section">
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          404 Not Found
        </p>
      </div>
      <div class="card-content">
        申し訳ございません。<br>
        指定されたファイルまたはディレクトリは存在いたしません。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
