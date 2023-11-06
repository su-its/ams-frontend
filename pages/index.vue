<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3 section">
        <CommonNavigation />
      </div>
      <div class="column is-9 section">
        <div>
          <InRoomUsers :room-user="room_user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// fetch ({ store }) {
//   store.dispatch('logging/getInRoomUsers')
//   store.dispatch('logging/setUpSSE')
// },
const room_user = ref([])
room_user.value = $fetch('/users_in_room')
useHead({
  title: "ITS-AMS コントロールパネル",
  titleTemplate: "",
});
// computed: {
//   ...mapGetters({
//     room_user: 'logging/inRoomUsers'
//   })
// },
onMounted(() => {
  // ラズパイを長時間動かしているとServer Sent Eventを受信しなくなることがあるので定期的にリロードする
  setTimeout(() => location.reload(), 60000);
});
</script>
