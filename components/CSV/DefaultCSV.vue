<template>
  <div>
    <p>直近3ヶ月分（90日）の入退室ログをCSV形式でダウンロードできます。</p><br>
    <p>
      <b-button
        size="is-medium"
        icon-left="file-download"
        label="ダウンロード"
        type="is-link"
        @click="getCSV()"
      />
    </p>
  </div>
</template>

<script>
import nuxtend from 'nuxtend'
import common from '~/plugins/common'
export default nuxtend({
  mixins: [common],
  methods: {
    getCSV () {
      // バックエンドのデフォルトの期間指定に任せる
      this.download()
    }
  }
})
</script>
