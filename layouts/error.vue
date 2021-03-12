<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <navigation />
      </div>
      <div class="column is-9 section">
        <div>
          <errorCard :error="error" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from '~/components/navigation'
import errorCard from '~/components/errorCard'
export default {
  components: {
    navigation,
    errorCard
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
