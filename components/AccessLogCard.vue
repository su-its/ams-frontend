<template>
  <div>
    <div class="card-content">
      <div v-if="logData.length != 0">
        <table class="table">
          <thead>
            <tr>
              <th><abbr title="学籍番号">学籍番号</abbr></th>
              <th><abbr title="入室時刻">入室時刻</abbr></th>
              <th><abbr title="退室時刻">退室時刻</abbr></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="props in logData">
              <td>{{ props.user_id }}</td>
              <td>{{ moment(props.entered_at).format("YYYY-MM-DD HH:mm:ss") }}</td>
              <td>{{ moment(props.exited_at).format("YYYY-MM-DD HH:mm:ss") }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <CommonNoContent />
      </div>
    </div>
  </div>
</template>

<script setup>
import moment from "moment";
defineProps({
  logData: Array,
});
</script>
