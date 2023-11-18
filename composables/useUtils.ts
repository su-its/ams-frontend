import { Parser } from 'json2csv'
export function UseUtils() {
    /**
     * バックエンドから指定期間の入退室ログを取得し
     * CSVファイルに変換してダウンロードする
     * @param {moment=} startDate 取得期間の始まり
     * @param {moment=} endDate 取得期間の終わり
    */
    function download (startDate: { format: (arg0: string) => string }, endDate: { format: (arg0: string) => string }) {
      /* クエリを構築 */
      const queries = []
      if (startDate) {
        queries.push('since=' + startDate.format('YYYY-MM-DD'))
      }
      if (endDate) {
        queries.push('until=' + endDate.format('YYYY-MM-DD'))
      }
      // 手元にある情報だけをクエリに載せる
      const queryStr = (queries.length === 0) ? '' : ('?' + queries.join('&'))

      /* APIからデータを持ってきて、生成したCSVをダウンロードさせる */
      /* eslint-disable no-console */
      $fetch(useRuntimeConfig().public.BaseURL + '/access_logs/bulk' + queryStr)
        .then((resp: any) => {
          try {
          _generateAndDownloadCSV(resp.data)
            // $buefy.snackbar.open('ダウンロードしました。')
          } catch (err: any) {
            console.debug(err)
            // $buefy.snackbar.open('ダウンロード失敗（パースエラー）')
          }
        })
        .catch((err) => {
          console.debug(err)
          // $buefy.snackbar.open('ダウンロード失敗（APIエラー）')
        })
    }

    /* 入退室ログのオブジェクトからCSVを生成し
     * ダウンロードさせる
     * @param {object} obj 入退室ログオブジェクト
     * @example: { 'meta': {...}, data: [...] }
     */
    function _generateAndDownloadCSV (obj: { data: any; meta: { since: any; until: any } }) {
      /* オブジェクトからCSVを構築 */
      const parser = new Parser({
        fields: ['user_id', 'entered_at', 'exited_at'],
        eol: '\r\n', // 行末はDOS
        withBOM: true, // BOM付き
        transforms: [(item: { user_id: any; entered_at: any; exited_at: any }) => {
          // Excelで読めるように時刻をフォーマットする
          return {
            user_id: item.user_id,
            // entered_at: $moment(item.entered_at).format('YYYY-MM-DD HH:mm:ss'),
            // exited_at: $moment(item.exited_at).format('YYYY-MM-DD HH:mm:ss')
          }
        }]
      })
      const csv = parser.parse(obj.data)

      /* CSVのファイル名生成 */
      // const sinceStr = $moment(obj.meta.since).format('YYMMDD')
      // const untilStr = $moment(obj.meta.until).format('YYMMDD')
      // const filename = sinceStr + '_' + untilStr + '.csv'

      /* CSVダウンロード処理 */
      const a = window.document.createElement('a')
      a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
      // a.download = filename
      a.click()
    }
  return { download }
  }
