<template>
  <b-menu>
    <b-menu-list label="Navigation">
      <b-menu-item
        icon="home-circle"
        label="現在の在室状況"
        :active="isActiveRoutePage"
        tag="NuxtLink"
        to="/"
      />
      <b-menu-item
        icon="table-large"
        label="入退室ログの表示"
        :active="isActiveLogPage"
        tag="NuxtLink"
        to="/log"
      />
      <b-menu-item
        icon="information"
        label="このシステムについて"
        :active="isActiveInfoPage"
        tag="NuxtLink"
        to="/about"
      />
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  data () {
    return {
      isActiveRoutePage: this.$route.name === 'index',
      isActiveLogPage: this.$route.name === 'log',
      isActiveInfoPage: this.$route.name === 'about'
    }
  }
}
</script>
