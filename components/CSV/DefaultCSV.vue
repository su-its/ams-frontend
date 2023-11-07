<template>
  <div>
    <p>直近3ヶ月分（90日）の入退室ログをCSV形式でダウンロードできます。</p><br>
    <p>
      <button
        class="button is-success is-medium"
        @click="getCSV()"
      ><font-awesome-icon icon="file-arrow-down" />ダウンロード</button>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    getCSV () {
      // バックエンドのデフォルトの期間指定に任せる
      this.download()
    }
  }
}
</script>
