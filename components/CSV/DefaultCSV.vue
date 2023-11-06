<template>
  <div>
    <p>直近3ヶ月分（90日）の入退室ログをCSV形式でダウンロードできます。</p><br>
    <p>
      <b-button
        size="is-medium"
        icon-left="file-download"
        label="ダウンロード"
        type="is-success"
        @click="getCSV()"
      />
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
