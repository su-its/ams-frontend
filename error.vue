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
import Navigation from '~/components/Common/Navigation'
import ErrorCard from '~/components/Common/ErrorCard'
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
