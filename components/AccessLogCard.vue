<template>
  <div>
    <div class="card-content">
      <div v-if="logData.length != 0">
        <b-table
          :data="logData"
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
            {{ $moment(props.row.entered_at).format('YYYY-MM-DD HH:mm:ss') }}
          </b-table-column>
          <b-table-column
            v-slot="props"
            field="exited_at"
            label="退室時刻"
            width="50"
          >
            {{ $moment(props.row.exited_at).format('YYYY-MM-DD HH:mm:ss') }}
          </b-table-column>
        </b-table>
      </div>
      <div v-else>
        <NoContent />
      </div>
    </div>
  </div>
</template>

<script>
import NoContent from '~/components/Common/NoContent'
export default {
  components: {
    NoContent
  },
  props: {
    logData: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
