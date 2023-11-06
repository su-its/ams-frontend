<template>
  <div class="section">
    <!-- Client Error -->
    <!-- 400 BAD REQUEST -->
    <div v-if="error.statusCode === 400" class="card">
      <div class="card-header">
        <p class="card-header-title">
          400 Bad Request
        </p>
      </div>
      <div class="card-content">
        申し訳ございません。<br>
        リクエストが不正です。
      </div>
    </div>
    <!-- 401 UNAUTHORIZED -->
    <div v-else-if="error.statusCode === 401" class="card">
      <div class="card-header">
        <p class="card-header-title">
          401 Unauthorized
        </p>
      </div>
      <div class="card-content">
        申し訳ございません。<br>
        認証が必要です。ログインしてください。
      </div>
    </div>
    <!-- 403 FORBIDDEN -->
    <div v-else-if="error.statusCode === 403" class="card">
      <div class="card-header">
        <p class="card-header-title">
          403 Forbidden
        </p>
      </div>
      <div class="card-content">
        申し訳ございません。<br>
        禁止されたアクセスです。
      </div>
    </div>
    <!-- 404 NOT FOUND -->
    <div v-else-if="error.statusCode === 404" class="card">
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
    <!-- 407 PROXY AUTHENTICATION REQUIRED -->
    <div v-else-if="error.statusCode === 407" class="card">
      <div class="card-header">
        <p class="card-header-title">
          407 Proxy Authentication Required
        </p>
      </div>
      <div class="card-content">
        申し訳ございません。<br>
        プロキシの認証が必要です。
      </div>
    </div>
    <!-- 408 REQUEST TIMEOUT -->
    <div v-else-if="error.statusCode === 408" class="card">
      <div class="card-header">
        <p class="card-header-title">
          408 Request Timeout
        </p>
      </div>
      <div class="card-content">
        申し訳ございません。<br>
        リクエストがタイムアウトになりました。
      </div>
    </div>
    <!-- Server Error -->
    <!-- 500 INTERNAL SERVER ERROR -->
    <div v-else-if="error.statusCode === 500" class="card">
      <div class="card-header">
        <p class="card-header-title">
          500 Internal Server Error
        </p>
      </div>
      <div class="card-content">
        申し訳ございません。<br>
        サーバ内でエラーが発生しています。<br>
        システム管理者に報告してください。
      </div>
    </div>
    <!-- 502 BAD GATEWAY -->
    <div v-else-if="error.statusCode === 502" class="card">
      <div class="card-header">
        <p class="card-header-title">
          502 Bad Gateway
        </p>
      </div>
      <div class="card-content">
        申し訳ございません。<br>
        不正なゲートウェイです。<br>
        プロキシ等の設定を見直してください。<br>
        それでも治らない場合、システム管理者に報告してください。
      </div>
    </div>
    <!-- 503 SERVICE UNAVAILABLE -->
    <div v-else-if="error.statusCode === 503" class="card">
      <div class="card-header">
        <p class="card-header-title">
          503 Service Unavaileable
        </p>
      </div>
      <div class="card-content">
        申し訳ございません。<br>
        現在サービスを利用することが出来ません。<br>
        システム管理者に報告してください。
      </div>
    </div>
    <!-- 504 GATEWAY TIMEOUT -->
    <div v-else-if="error.statusCode === 504" class="card">
      <div class="card-header">
        <p class="card-header-title">
          504 Gateway Timeout
        </p>
      </div>
      <div class="card-content">
        申し訳ございません。<br>
        ゲートウェイタイムアウトしました。<br>
        プロキシ等の設定を見直して下さい。<br>
        それでも治らない場合、システム管理者に報告してください。
      </div>
    </div>
    <!-- その他 -->
    <div v-else class="card">
      <div class="card-header">
        <p class="card-header-title">
          その他エラーが発生しています。
        </p>
      </div>
      <div class="card-content">
        申し訳ございません。<br>
        何かのエラーが発生しています<br>
        システム管理者に報告してください<br>
        エラーコード: {{ error.statusCode }}<br>
        エラーメッセージ: {{ error.message }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})
</script>
