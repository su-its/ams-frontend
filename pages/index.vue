<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <Navigation />
      </div>
      <div class="column is-9 section">
        <div>
          <InRoomUser :room-user="room_user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navigation from '~/components/Common/Navigation'
import InRoomUser from '~/components/InRoomUsers'
export default {
  components: {
    Navigation,
    InRoomUser
  },
  fetch ({ store }) {
    store.dispatch('logging/getInRoomUsers')
    store.dispatch('logging/setUpSSE')
  },
  head: {
    title: 'ITS-AMS コントロールパネル',
    titleTemplate: ''
  },
  computed: {
    ...mapGetters({
      room_user: 'logging/inRoomUsers'
    })
  }
}
</script>
