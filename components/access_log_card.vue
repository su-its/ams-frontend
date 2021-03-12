<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        入退室ログ
      </p>
    </div>
    <div class="card-content">
      <b-table
        :data="log_data"
        :hoverable="true"
        :mobile-cards="true"
      >
        <b-table-column
          v-slot="props"
          field="user_id"
          label="学籍番号"
          width="50"
          numeric
        >
          {{ props.row.user_id }}
        </b-table-column>
        <b-table-column
          v-slot="props"
          field="entered_at"
          label="入室時刻"
          width="50"
        >
          {{ props.row.entered_at }}
        </b-table-column>
        <b-table-column
          v-slot="props"
          field="exited_at"
          label="退室時刻"
          width="50"
        >
          {{ props.row.exited_at }}
        </b-table-column>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    log_data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      test_data: [
        {
          user_id: 1000000,
          entired_at: '12:00',
          exit_at: '13:00'
        }
      ]
    }
  }
}
</script>
