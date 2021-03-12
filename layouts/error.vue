<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <Navigation />
      </div>
      <div class="column is-9 section">
        <div>
          <ErrorCard :error="error" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
import ErrorCard from '~/components/ErrorCard'
export default {
  components: {
    Navigation,
    ErrorCard
  },
  props: {
    error: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
