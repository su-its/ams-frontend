<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        在室状況
      </p>
    </div>
    <div class="card-content">
      <p v-if="roomUser.length == 0" class="content">
        現在、誰も在室していません。
      </p>
      <p v-else class="content">
        現在、 {{ roomUser.length }} 人 が在室中です。
      </p>
      <div class="content">
        <div v-for="user in roomUser" :key="user.id">
          <User :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '~/components/UserInfo'
export default {
  components: {
    User
  },
  props: {
    roomUser: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
