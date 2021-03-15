<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        CSV形式でダウンロード
      </p>
    </div>
    <div class="card-content">
      <b-tabs
        v-model="activeTab"
        type="is-toggle"
        expanded
      >
        <b-tab-item
          label="2か月分"
          icon="file-download"
        >
          <p>直近2ヶ月分の入退室ログをCSV形式でダウンロードできます。</p><br>
          <p>
            <b-button
              size="is-medium"
              icon-left="file-download"
              label="ダウンロード"
              type="is-success"
              @click="download()"
            />
          </p>
        </b-tab-item>
        <b-tab-item
          label="自分で設定する"
          icon="download-multiple"
        >
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
            type="is-primary"
            @click="download()"
          />
        </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start_date: null,
      end_date: null,
      activeTab: 0
    }
  },
  methods: {
    download () {
       this.$buefy.snackbar.open(`ダウンロードしました。`)
    }
  }
}
</script>
