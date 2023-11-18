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

<script setup>
import moment from "moment";

function getCSV() {
  // バックエンドのデフォルトの期間指定に任せる
  // TODO: 有効化する
  // UseUtils().download(moment().day(-90), moment());
}
</script>
