<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '免責條款',
}))
</script>

<template>
  <div class="disclaimer">
    <div>
      <div>免責條款</div>
      <div>
        <div>希瑪眼科中心網站內的所有資料及內容只能用作一般資訊、教育及參考。如有任何有關健康問題、醫療狀況、護理之事宜，應及時諮詢有關的醫生或醫護人員。</div>
        <div>雖然本中心致力確保此網站內所有資料及內容之準確及適時性，但不作任何擔保，此網站純粹為了方便電腦使用者使用。網站內所有資料及內容可能隨時更改而不作另行通知。</div>
        <div>本網站可能連結到其他網站之內容、服務、商品及廣告，並非由希瑪眼科中心維護或控制，希瑪眼科中心對本網站可能連結到的其他網站、服務及商品之供應，以及其內容或其準確性，概不負責。</div>
        <div>
          網上預約系統只為病人在希瑪眼科中心預約，咨询醫療服務之用。填寫及提交網上預約表格並不保證閣下之預約時間。希瑪眼科中心職員將酌情處理閣下的申請，並以電郵、電話或短訊等方式就預約，咨询結果聯絡閣下，或就所預約，咨询的日期及時間之改動聯絡閣下。希瑪眼科中心對透過此網上系統作預約申請未能如願而引致的任何後果，概不負責。在此網站提交的預約申請只作排期用途。提交網上預約表格表示閣下同意受本網站有關網上預約系統的免責聲明約束。
        </div>
        <div>本網站部分文章來自於網絡，版權僅歸原作者所有，若作者有版權聲明或從其他網站轉載而附帶原所有站的版權聲明，其版權歸屬以附帶聲明為準；文章僅代表作者個人觀點，與本網站無關。</div>
        <div>本網站部分圖片來自於網絡，如果侵犯到閣下的權益，請及時與本中心聯絡，本中心將在第一時間內整改、刪除。</div>
      </div>
    </div>
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.disclaimer {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;

  &>div:nth-child(1) {
    margin-top: 20%;
    margin-bottom: 200px;

    &>div:nth-child(1) {
      font-family: 'Noto Sans HK';
      font-size: 22px;
      color: #2958a3;
    }

    &>div:nth-child(2) {
      margin-top: 50px;
      font-family: 'Noto Sans HK';
      font-size: 16px;
      line-height: 1.5;
      color: #555555;

      &>div {
        margin: 10px 0;
      }
    }
  }
}
</style>
