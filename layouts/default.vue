<template>
  <div id="app">
    <div class="main-content">
      <Header />
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header'
import Footer from '~/components/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
