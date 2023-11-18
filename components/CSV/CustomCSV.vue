<template>
  <div>
    <div
      class="field"
      grouped
    >
      <label
        class="label"
        expanded
      >集計開始日
        <button
          class="is-danger"
          icon-left="close"
          outlined
          @click="startDate = null"
        >クリア</button>
        <button
          ref="startDateTrigger"
          type="button"
        >集計開始日を指定してください</button>
      </label>
      <!--<b-field
        label="集計終了日"
        expanded
      >
        <b-datepicker
          v-model="endDate"
          locale="ja-JP"
          placeholder="集計終了日を指定してください"
          icon="calendar-today"
          :append-to-body="true"
          :min-date="minDate"
          :max-date="maxDate"
          aria-expanded
        >
          <b-button
            label="本日"
            type="is-primary"
            icon-left="calendar-today"
            @click="endDate=new Date()"
          />

          <b-button
            label="クリア"
            type="is-danger"
            icon-left="close"
            outlined
            @click="endDate = null"
          />
        </b-datepicker>
      </b-field>
    </div>
    <br>
    <b-button
      size="is-medium"
      icon-left="file-download"
      label="ダウンロード"
      type="is-info"
      @click="getCSV()"
    />-->
    </div>
  </div>
</template>

<script setup>
import bulmaCalendar from "bulma-calendar";

const startDate = ref(new Date());
const endDate = ref(new Date());
const snackbar = ref();
const startDateTrigger = ref(false);
// CSVのファイル名が年2桁なのでambiguousにならないようにしておく
const minDate = new Date("2000-01-01");
const maxDate = new Date("2099-12-31");

// const calender = bulmaCalendar.attach(startDateTrigger.value, {
//   startDate: new Date(),
// });
// calender.on("select", (e) => (startDate.value = e.start || null));

// const startDate = computed(() => {
//   return startDate.value.toLocaleDateString()
// })

// function getCSV() {
//   const startDate_ = moment(startDate.value);
//   const endDate_ = moment(endDate.value);
//   if (!startDate_.isValid()) {
//     snackbar.value.open({
//       message: "開始日を設定してください",
//       type: "is-warning",
//       position: "is-top",
//     });
//   } else if (!endDate_.isValid()) {
//     snackbar.value.open({
//       message: "終了日を設定してください",
//       type: "is-warning",
//       position: "is-top",
//     });
//   } else if (startDate_ > endDate_) {
//     snackbar.value.open({
//       message: "開始日は必ず終了日より前に設定してください",
//       type: "is-warning",
//       position: "is-top",
//     });
//   } else {
//     UseUtils().download(startDate_, endDate_);
//   }
// }
</script>
