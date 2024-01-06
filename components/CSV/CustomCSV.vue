<template>
  <div>
    <div
      class="notification is-danger is-light"
      v-bind:hidden="snackbar_1"
    >
      <button class="delete" v-on:click="closeDialog1"></button>
      開始日を設定してください
    </div>
    <div
      class="notification is-danger is-light"
      v-bind:hidden="snackbar_2"
    >
      <button class="delete" v-on:click="closeDialog2"></button>
      終了日を設定してください
    </div>
    <div
      class="notification is-danger is-light"
      v-bind:hidden="snackbar_3"
    >
      <button class="delete" v-on:click="closeDialog3"></button>
      開始日は必ず終了日より前に設定してください
    </div>
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
import moment from "moment";

const startDate = ref(new Date());
const endDate = ref(new Date());
const snackbar_1 = ref(true);
const snackbar_2 = ref(true);
const snackbar_3 = ref(true);
const startDateTrigger = ref(false);
const endDateTrigger = ref(false);
// CSVのファイル名が年2桁なのでambiguousにならないようにしておく

onMounted(() => {
  const startCalender = bulmaCalendar.attach(startDateTrigger.value, {
    startDate: startDate.value,
    minDate: new Date("2000-01-01"),
    maxDate: new Date("2099-12-31"),
    lang: "ja",
    type: "date",
  })[0];
  startCalender.on("select", (e) => (startDate.value = e.data.startDate || null));
  const endCalender = bulmaCalendar.attach(endDateTrigger.value, {
    startDate: new Date(),
    minDate: new Date("2000-01-01"),
    maxDate: new Date("2099-12-31"),
    lang: "ja",
    type: "date",
  })[0];
  endCalender.on("select", (e) => (endDate.value = e.data.startDate || null));
});

function getCSV() {
  const startDate_ = moment(startDate.value);
  const endDate_ = moment(endDate.value);
  if (!startDate_.isValid()) {
    snackbar_1.value = false;
  } else if (!endDate_.isValid()) {
    snackbar_2.value = false;
  } else if (startDate_ > endDate_) {
    snackbar_3.value = false;
  } else {
    UseUtils().download(startDate_, endDate_);
  }
}

function closeDialog1() {
  snackbar_1.value = true;
}

function closeDialog2() {
  snackbar_2.value = true;
}

function closeDialog3() {
  snackbar_3.value = true;
}
</script>
