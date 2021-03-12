<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <navigation />
      </div>
      <div class="column is-9 section">
        <div>
          <errorCard :error="error" />
        </div>
      </div>
    </div>
  </div>
  <!--
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
    </h1> -->
</template>

<script>
import navigation from '~/components/navigation'
import errorCard from '~/components/error_card'
export default {
  components: {
    navigation,
    errorCard
  },
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
