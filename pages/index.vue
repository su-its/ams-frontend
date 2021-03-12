<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <navigation />
      </div>
      <div class="column is-9 section">
        <div>
          <inRoomUser :room-user="room_user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import navigation from '~/components/navigation'
import inRoomUser from '~/components/inRoomUsers'
export default {
  components: {
    navigation,
    inRoomUser
  },
  fetch ({ store }) {
    store.dispatch('logging/getInRoomUsers')
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
