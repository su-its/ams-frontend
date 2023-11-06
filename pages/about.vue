<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <CommonNavigation />
      </div>
      <div class="column is-9 section">
        <!-- フロントエンドのver表記 -->
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">
              ITS-AMS コントロールパネル
            </p>
          </div>
          <div class="card-content">
            <div class="content">
              <p>
                Version {{ PKG_VERSION }}<br>
                (c) 2021 IT Solution Room, Shizuoka University
              </p>
            </div>
          </div>
        </div>
        <br>
        <!-- バックエンドのver表記 -->
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">
              ITS-AMS バックエンドシステム
            </p>
          </div>
          <div class="card-content">
            <div class="content">
              <p>
                Version {{ BACKEND_VERSION }}<br>
                (c) 2021 IT Solution Room, Shizuoka University
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig()
useHead({
  title: "このシステムについて",
});
const BACKEND_VERSION = await $fetch(config.public.BaseURL).then(
  (Response) => Response.version
);
const PKG_VERSION = config.public.PKG_VERSION;
</script>
