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
        <a ref="startDateTrigger" />
      </label>
      <label
        class="label"
        expanded
      >集計終了日
        <a ref="endDateTrigger" />
      </label>
    </div>
    <br>
    <button
      class="button is-medium is-info"
      @click="getCSV()"
    ><font-awesome-icon icon="file-arrow-down" />ダウンロード</button>
  </div>
</template>

<script setup>
import bulmaCalendar from "bulma-calendar";

const startDate = ref(new Date());
const endDate = ref(new Date());
const snackbar = ref();
const startDateTrigger = ref(false);
const endDateTrigger = ref(false);
// CSVのファイル名が年2桁なのでambiguousにならないようにしておく
const minDate = new Date("2000-01-01");
const maxDate = new Date("2099-12-31");

onMounted(() => {
  const startCalender = bulmaCalendar.attach(startDateTrigger.value, {
    startDate: new Date(),
    lang: "ja",
    type: "date",
  })[0];
  startCalender.on("select", (e) => (startDate.value = e.start || null));
  const endCalender = bulmaCalendar.attach(endDateTrigger.value, {
    startDate: new Date(),
    lang: "ja",
    type: "date",
  })[0];
  endCalender.on("select", (e) => (endDate.value = e.start || null));
});

function getCSV() {
  const startDate_ = moment(startDate.value);
  const endDate_ = moment(endDate.value);
  if (!startDate_.isValid()) {
    snackbar.value.open({
      message: "開始日を設定してください",
      type: "is-warning",
      position: "is-top",
    });
  } else if (!endDate_.isValid()) {
    snackbar.value.open({
      message: "終了日を設定してください",
      type: "is-warning",
      position: "is-top",
    });
  } else if (startDate_ > endDate_) {
    snackbar.value.open({
      message: "開始日は必ず終了日より前に設定してください",
      type: "is-warning",
      position: "is-top",
    });
  } else {
    // UseUtils().download(startDate_, endDate_);
  }
}
</script>
