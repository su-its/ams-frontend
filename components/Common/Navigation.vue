<template>
  <aside class="menu">
    <ul class="menu-list">
      <li>
        <a class="isActiveRoutePage">
          <NuxtLink to="/"><font-awesome-icon icon="house" />現在の在室状況</NuxtLink>
        </a>
      </li>
      <li>
        <a class="isActiveLogPage">
          <NuxtLink to="/log"><font-awesome-icon icon="table-cells-large" />入退室ログの表示</NuxtLink>
        </a>
      </li>
      <li><a class="isActiveInfoPage">
          <NuxtLink to="/about"><font-awesome-icon icon="info" />このシステムについて</NuxtLink>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup>
onMounted(() => {
  if (useRoute().name === "index") {
    let elem = document.getElementsByClassName("isActiveRoutePage");
    elem[0].classList.toggle("is-active");
  }
  if (useRoute().name === "log") {
    let elem = document.getElementsByClassName("isActiveLogPage");
    elem[0].classList.toggle("is-active");
  }
  if (useRoute().name === "about") {
    let elem = document.getElementsByClassName("isActiveInfoPage");
    elem[0].classList.toggle("is-active");
  }
});
</script>
