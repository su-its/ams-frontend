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

          <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
              <button
                class="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu_"
              >
                <span>表示件数: {{ perPage }}</span>
              </button>
            </div>
            <div
              class="dropdown-menu"
              id="dropdown-menu_"
              role="menu"
            >
              <div class="dropdown-content">
                <a
                  href="#"
                  v-for="i in per_page"
                  class="dropdown-item"
                  @click="changePerPagePagination(i.value)"
                >
                  {{ i.value }}
                </a>
              </div>
            </div>
          </div>
          <AccessLogCard :log-data="log_data" />
          <nav
            class="pagination"
            role="navigation"
            aria-label="pagination"
          >
            <ul class="pagination-list">
              <li>
                <a
                  v-for="i in log_meta.total_page"
                  class="pagination-link"
                  @click="pagination(i)"
                >{{ i }}</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onUpdated(() => {
  let elem = document.getElementsByClassName("pagination-link");
  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.remove("is-current");
  }
  elem[current_page.value - 1].classList.add("is-current");
});
onMounted(() => {
  let elem = document.getElementsByClassName("pagination-link");
  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.remove("is-current");
  }
  elem[current_page.value - 1].classList.add("is-current");
});
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
  perPage.value = perPage_;
}

async function pagination(current_page_) {
  // パラメータ用のObjectを用意
  // v-model経由の外部入力なのでvalidationする
  const page_ = checkNullPageData(current_page_);
  page.value = page_;
  current_page.value = page_;
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
