<template>
  <div>
    <b-field grouped>
      <b-field
        label="集計開始日"
        expanded
      >
        <b-datepicker
          v-model="start_date"
          locale="ja-JP"
          placeholder="集計開始日を指定してください"
          icon="calendar-today"
          :append-to-body="true"
        >

          <b-button
            label="クリア"
            type="is-danger"
            icon-left="close"
            outlined
            @click="start_date = null"
          />

        </b-datepicker>
      </b-field>
      <b-field
        label="集計終了日"
        expanded
      >
        <b-datepicker
          v-model="end_date"
          locale="ja-JP"
          placeholder="集計終了日を指定してください"
          icon="calendar-today"
          :append-to-body="true"
          aria-expanded
        >
          <b-button
            label="本日"
            type="is-primary"
            icon-left="calendar-today"
            @click="end_date=new Date()"
          />

          <b-button
            label="クリア"
            type="is-danger"
            icon-left="close"
            outlined
            @click="end_date = null"
          />
        </b-datepicker>
      </b-field>
    </b-field>
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
import common from '~/plugins/common'
import nuxtend from 'nuxtend'
export default nuxtend({
  mixins:[common],
  data() {
    return {
      start_date: null,
      end_date: null,
    }
  },
  methods: {
    getCSV () {
      if(!this.$moment(this.start_date).isValid()) {
        this.$buefy.snackbar.open({
          message: '開始日を設定してください',
          type: 'is-warning',
          position: 'is-top',
        })
      }
      else if(!this.$moment(this.end_date).isValid()) {
        this.$buefy.snackbar.open({
          message: '終了日を設定してください',
          type: 'is-warning',
          position: 'is-top',
        })
      }
      else if(this.$moment(this.start_date) > this.$moment(this.end_date)) {
        this.$buefy.snackbar.open({
          message: '開始日は必ず終了日より前に設定してください',
          type: 'is-warning',
          position: 'is-top',
        })
      }
      else {
        this.download()
      }
    }
  },
})
</script>
