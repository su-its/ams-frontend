<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <CommonNavigation />
      </div>
      <div class="column is-9 section">
        <div>
          <CSVDownload />
          <br>
          <div class="card">
            <div class="card-header">
              <p class="card-header-title">
                入退室ログ
              </p>
            </div>
          </div>

          <span class="dropdown is-active">
            <div class="dropdown-trigger">
              <button
                class="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>表示件数: {{ perPage }}</span>
              </button>
            </div>
            <div
              class="dropdown-menu"
              id="dropdown-menu"
              role="menu"
            >
              <div class="dropdown-content">
                <div
                  v-for="i in per_page"
                  class="dropdown-item"
                >
                  <button @click="changePerPagePagination(i.value)">
                    {{ i.value }}
                  </button>
                </div>
              </div>
            </div>
          </span>
          <AccessLogCard :log-data="log_data" />
          <b-pagination
            v-model="current_page"
            :total="log_meta.total"
            order="is-centered"
            :per-page="log_meta.per_page"
            :range-before="3"
            :range-after="1"
            @change="pagination"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * pageの情報を追加、あるいはチェックするメソッド
 * @param {*} data 数字のデータ(違うデータを入れた場合1扱いになります)
 * @returns {Number} page 何もなければ1、そうでなければ該当するページが帰ってきます
 */
function checkNullPageData(data) {
  if (Number.isInteger(data)) {
    return data;
  } else {
    return 1;
  }
}
const current_page = ref(1);
const page = ref(1);
const per_page = [{ value: 5 }, { value: 10 }, { value: 15 }, { value: 20 }];
const perPage = ref(20);
useHead({
  title: "入退室ログ",
});

const log_data = ref();
const log_meta = ref();
log_data.value = await $fetch(
  useRuntimeConfig().public.BaseURL +
    "/access_logs" +
    "?page=" +
    page.value +
    "&per_page=" +
    perPage.value
).then((Response) => Response.data);
log_meta.value = await $fetch(
  useRuntimeConfig().public.BaseURL +
    "/access_logs" +
    "?page=" +
    page.value +
    "&per_page=" +
    perPage.value
).then((Response) => Response.meta);
// computed: {
//   ...mapGetters({
//     log_data: 'logging/accessLogs',
//     log_meta: 'logging/accessLogMetaData'
//   })
// }
/**
 * @param {Number} 切り替えたいper_page
 * @returns {*} vuexが書き換わっているけど、1ページ目に遷移する
 * (じゃないと参照したい情報が正しく表示されない)
 */
async function changePerPagePagination(perPage_) {
  // データのフェッチ
  log_data.value = await $fetch(
  useRuntimeConfig().public.BaseURL +
    "/access_logs" +
    "?page=" +
    page.value +
    "&per_page=" +
    perPage_
).then((Response) => Response.data);
log_meta.value = await $fetch(
  useRuntimeConfig().public.BaseURL +
    "/access_logs" +
    "?page=" +
    page.value +
    "&per_page=" +
    perPage_
).then((Response) => Response.meta);

  // ページネーションも1ページ目に戻す
  current_page.value = 1;
  perPage.value = perPage_
}

async function pagination() {
  // パラメータ用のObjectを用意
  const params = {
    // v-model経由の外部入力なのでvalidationする
    page: checkNullPageData(current_page.value),
    perPage: per_page,
  };

  // データのフェッチ
  log_data.value = await $fetch(
  useRuntimeConfig().public.BaseURL +
    "/access_logs" +
    "?page=" +
    page.value +
    "&per_page=" +
    perPage.value
).then((Response) => Response.data);
log_meta.value = await $fetch(
  useRuntimeConfig().public.BaseURL +
    "/access_logs" +
    "?page=" +
    page.value +
    "&per_page=" +
    perPage.value
).then((Response) => Response.meta);
}
</script>
