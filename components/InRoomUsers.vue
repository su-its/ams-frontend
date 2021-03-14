<template>
  <div class="section">
    <div class="card">
      <div class="card-header">
        <p class="card-header-title">
          静岡大学 ITソルーション室
        </p>
      </div>
      <div class="card-content">
        <div v-if="roomUser.length != 0" id="user-count" class="content">
          現在、 {{ roomUser.length }} 人 が在室中です。
          <div v-for="user in roomUser" :key="user.id" class="has-shadow">
            <User :user="user" />
          </div>
        </div>
        <div v-else class="has-shadow">
          現在、不在です。
          <NoContent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '~/components/UserInfo'
import NoContent from '~/components/NoContent'
export default {
  components: {
    User,
    NoContent
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
