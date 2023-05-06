<script>
export default {
  data() {
    return {
      historyList: [
        {
          year: '2022',
          contentList: [
            { month: '9月', info: '將軍澳 希瑪眼科中心成立' },
            { month: '8月', info: '揭陽希瑪眼科醫院成立' },
            {
              month: '3月',
              info: '廣州 希瑪眼科醫院成立\n福州 希瑪眼科醫院成立',
            },
          ],
        },
        {
          year: '2021',
          contentList: [
            {
              month: '11月',
              info: '尖沙咀 希瑪醫療集團成立 (眼科、牙科、醫美)',
            },
            {
              month: '7月',
              info: '中環 希瑪眼科視光中心成立\n旺角 希瑪眼科視光中心成立',
            },
            { month: '3月', info: '惠州希瑪眼科醫院成立' },
          ],
        },
        {
          year: '2020',
          contentList: [
            {
              month: '11月',
              info: '荃灣希瑪眼科中心成立\n珠海希瑪林順潮眼科醫院成立\n深圳新安林順潮眼科門診部升級為醫院',
            },
          ],
        },
        {
          year: '2019',
          contentList: [
            { month: '12月', info: '元朗(第二間)希瑪眼科中心成立' },
            { month: '11月', info: '上海希瑪瑞視眼科醫院' },
            { month: '10月', info: '希瑪微笑激光矯視中心成立' },
            { month: '6月', info: '昆明 希瑪林順潮眼科醫院成立' },
          ],
        },
        {
          year: '2018',
          contentList: [
            { month: '11月', info: '深圳新安希瑪林順潮眼科門診部成立' },
            { month: '3月', info: '觀塘 希瑪眼科中心成立' },
            { month: '1月', info: '北京 希瑪林順潮眼科醫院成立' },
          ],
        },
        {
          year: '2017',
          contentList: [{ month: '2月', info: '銅鑼灣 希瑪眼科中心成立' }],
        },
        {
          year: '2016',
          contentList: [
            { month: '6月', info: '沙田 希瑪眼科中心成立' },
            { month: '1月', info: '元朗 希瑪眼科中心成立' },
          ],
        },
        {
          year: '2014',
          contentList: [{ month: '1月', info: '深圳 希瑪林順潮眼科醫院成立' }],
        },
        {
          year: '2013',
          contentList: [{ month: '3月', info: '深圳 希瑪林順潮眼科醫院成立' }],
        },
        {
          year: '2012',
          contentList: [{ month: '1月', info: '中環 希瑪眼科中心成立' }],
        },
      ],
    }
  },
}
</script>
<template>
  <div id="history">
    <AboutTitle
      :zh-title="'發展歷程'"
      :en-ttitle="'our history'"
      class="title relative z-50"
    />

    <div class="mainHistoryBox">
      <div
        v-for="(years, i) in historyList"
        :key="i"
        class="historyContent relative z-50 mb-14"
      >
        <h1 class="year en-font text-center pb-2 mb-5">{{ years.year }}</h1>
        <div
          v-for="(item, index) in years.contentList"
          :key="index"
          class="content flex items-start justify-start"
        >
          <p class="month">{{ item.month }}</p>
          <p class="info">{{ item.info }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#history {
  width: 41.5%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  margin-left: 593px;
  margin-top: 12.75rem;
  background: #f2f2f2;
  position: relative;
}

.title {
  margin-left: -88px;
  margin-top: 45px;
}

.mainHistoryBox {
  width: 91%;
  position: relative;
  margin-bottom: 34px;

  .historyContent {
    padding: 0 8%;

    .year {
      font-family: 'Metropolis';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      letter-spacing: 0.05em;
      text-transform: uppercase;

      color: #515151;
      border-bottom: 1.5px solid #515151;
      line-height: 32px;
    }

    .content {
      font-family: 'Metropolis';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.5;
      /* or 140% */

      letter-spacing: 0.05em;
      text-transform: uppercase;

      color: #515151;

      width: 90%;
      margin: 0 auto;
      margin-bottom: 15px;

      .month {
        width: 10%;
        padding-right: 10%;
        text-align: right;
        box-sizing: content-box;
      }

      .info {
        white-space: pre-wrap !important;
      }
    }
  }

  // &::before {
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   height: 112%;
  //   background: #f2f2f2;
  //   top: -7%;
  // }
}
</style>
