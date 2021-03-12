<template>
  <div class="section">
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          静岡大学 ITソルーション室
        </p>
      </div>
      <div class="card-content">
        <div id="user-count" class="content">
          現在、 {{ roomUser.length }} 人 が在室中です。
        </div>
        <div v-for="user in roomUser" :key="user.id" class="has-shadow">
          <User :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '~/components/userInfo'
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
