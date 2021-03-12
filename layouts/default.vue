<template>
  <div id="app">
    <section class="main-content">
      <Header />
      <Nuxt />
    </section>
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
