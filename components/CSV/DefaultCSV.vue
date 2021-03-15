<template>
  <div>
    <p>直近2ヶ月分の入退室ログをCSV形式でダウンロードできます。</p><br>
    <p>
      <b-button
        size="is-medium"
        icon-left="file-download"
        label="ダウンロード"
        type="is-success"
        @click="localDownload()"
      />
    </p>
  </div>
</template>

<script>
import common from '~/plugins/common'
import nuxtend from 'nuxtend'
export default nuxtend({
  mixins:[common],
  methods: {
    localDownload () {
      this.download()
    }
  },
})
</script>

