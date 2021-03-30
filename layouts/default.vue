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
import Header from '~/components/Common/Header'
import Footer from '~/components/Common/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
