<template>
  <div>
    <b-field grouped>
      <b-field
        label="集計開始日"
        expanded
      >
        <b-datepicker
          v-model="startDate"
          locale="ja-JP"
          placeholder="集計開始日を指定してください"
          icon="calendar-today"
          :append-to-body="true"
          :min-date="minDate"
          :max-date="maxDate"
        >
          <b-button
            label="クリア"
            type="is-danger"
            icon-left="close"
            outlined
            @click="startDate = null"
          />
        </b-datepicker>
      </b-field>
      <b-field
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
    </b-field>
    <br>
    <b-button
      size="is-medium"
      icon-left="file-download"
      label="ダウンロード"
      type="is-info"
      @click="getCSV()"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      startDate: null,
      endDate: null,
      // CSVのファイル名が年2桁なのでambiguousにならないようにしておく
      minDate: new Date('2000-01-01'),
      maxDate: new Date('2099-12-31')
    }
  },
  methods: {
    getCSV () {
      const startDate = this.$moment(this.startDate)
      const endDate = this.$moment(this.endDate)
      if (!startDate.isValid()) {
        this.$buefy.snackbar.open({
          message: '開始日を設定してください',
          type: 'is-warning',
          position: 'is-top'
        })
      } else if (!endDate.isValid()) {
        this.$buefy.snackbar.open({
          message: '終了日を設定してください',
          type: 'is-warning',
          position: 'is-top'
        })
      } else if (startDate > endDate) {
        this.$buefy.snackbar.open({
          message: '開始日は必ず終了日より前に設定してください',
          type: 'is-warning',
          position: 'is-top'
        })
      } else {
        this.download(startDate, endDate)
      }
    }
  }
}
</script>
