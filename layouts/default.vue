<template>
  <div id="app">
    <section class="main-content">
      <Header />
      <div class="container">
        <div class="columns">
          <div class="column is-3 section">
            <navigation />
          </div>
          <div class="column is-9 section">
            <Nuxt />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import navigation from '~/components/navigation'
import Header from '~/components/header'
import Footer from '~/components/footer'
export default {
  components: {
    navigation,
    Header,
    Footer
  }
}
</script>
