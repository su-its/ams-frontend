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
import Header from '~/components/Header'
import Footer from '~/components/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
