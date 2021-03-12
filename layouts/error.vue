<template>
  <div id="app">
    <h1 v-if="error.statusCode === 400">
      認証されていません
    </h1>
    <h1 v-else-if="error.statusCode === 401">
      認証してください
    </h1>
    <h1 v-else-if="error.statusCode === 403">
      アクセスすることは出来ません
    </h1>
    <h1 v-else-if="error.statusCode === 404">
      存在しないページです
    </h1>
    <h1 v-else-if="error.statusCode === 407">
      プロキシ認証してください
    </h1>
    <h1 v-else-if="error.statusCode === 408">
      タイムアウトです
    </h1>
    <h1 v-else-if="error.statusCode === 500">
      サーバ内でエラーが発生しています<br>
      システム管理者に報告してください
    </h1>
    <h1 v-else-if="error.statusCode === 502">
      不正なアクセスです
    </h1>
    <h1 v-else-if="error.statusCode === 503">
      サービスが使えません<br>
      システム管理者に報告してください
    </h1>
    <h1 v-else>
      何かのエラーが発生しています<br>
      システム管理者に報告してください<br>
      エラーコード: {{ error.statusCode }}<br>
      エラーメッセージ: {{ error.message }}
    </h1>
    <div class="buttons">
      <b-button size="is-medium" icon-left="home" label="初期ページ" tag="NuxtLink" to="/" />
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
