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
          現在、 {{ room_user.length }} 人 が在室中です。
        </div>
        <div v-for="user in room_user" :key="user.id" class="has-shadow">
          <User :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '~/components/user_info'
export default {
  components: {
    User
  },
  props: {
    room_user: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>
