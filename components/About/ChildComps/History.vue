<script setup lang="ts">
const historyList = ref([
  {
    year: 'pages.about_us.course_year.year_22',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_22.child22_month_1',
        info: 'pages.about_us.course_year.child_22.child22_info_1',
      },
      {
        month: 'pages.about_us.course_year.child_22.child22_month_2',
        info: 'pages.about_us.course_year.child_22.child22_info_2',
      },
      {
        month: 'pages.about_us.course_year.child_22.child22_month_3',
        info: [
          'pages.about_us.course_year.child_22.child22_info_3_1',
          'pages.about_us.course_year.child_22.child22_info_3_2',
        ],
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_21',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_21.child21_month_1',
        info: 'pages.about_us.course_year.child_21.child21_info_1',
      },
      {
        month: 'pages.about_us.course_year.child_21.child21_month_2',
        info: [
          'pages.about_us.course_year.child_21.child21_info_2_1',
          'pages.about_us.course_year.child_21.child21_info_2_2',
        ],
      },
      {
        month: 'pages.about_us.course_year.child_21.child21_month_3',
        info: 'pages.about_us.course_year.child_21.child21_info_3',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_20',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_20.child_month',
        info: [
          'pages.about_us.course_year.child_20.child_info_1',
          'pages.about_us.course_year.child_20.child_info_2',
          'pages.about_us.course_year.child_20.child_info_3',
        ],
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_19',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_19.child_month_1',
        info: 'pages.about_us.course_year.child_19.child_info_1',
      },
      {
        month: 'pages.about_us.course_year.child_19.child_month_2',
        info: 'pages.about_us.course_year.child_19.child_info_2',
      },
      {
        month: 'pages.about_us.course_year.child_19.child_month_3',
        info: 'pages.about_us.course_year.child_19.child_info_3',
      },
      {
        month: 'pages.about_us.course_year.child_19.child_month_4',
        info: 'pages.about_us.course_year.child_19.child_info_4',
      },
    ],
  },
  {
    year: '2018',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_18.child_month_1',
        info: 'pages.about_us.course_year.child_18.child_info_1',
      },
      {
        month: 'pages.about_us.course_year.child_18.child_month_2',
        info: 'pages.about_us.course_year.child_18.child_info_2',
      },
      {
        month: 'pages.about_us.course_year.child_18.child_month_3',
        info: 'pages.about_us.course_year.child_18.child_info_3',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_17',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_17.child_month',
        info: 'pages.about_us.course_year.child_17.child_info',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_16',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_16.child_month_1',
        info: 'pages.about_us.course_year.child_16.child_info_1',
      },
      {
        month: 'pages.about_us.course_year.child_16.child_month_2',
        info: 'pages.about_us.course_year.child_16.child_info_2',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_14',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_14.child_month',
        info: 'pages.about_us.course_year.child_14.child_info',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_13',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_13.child_month',
        info: 'pages.about_us.course_year.child_13.child_info',
      },
    ],
  },
  {
    year: 'pages.about_us.course_year.year_12',
    contentList: [
      {
        month: 'pages.about_us.course_year.child_12.child_month',
        info: 'pages.about_us.course_year.child_12.child_info',
      },
    ],
  },
])
</script>
<template>
  <div id="history">
    <AboutTitle
      :zh-title="$t('pages.about_us.development_course')"
      :en-ttitle="'our history'"
      class="title relative z-50"
    />
    <div class="mainHistoryBox">
      <div
        v-for="(years, i) in historyList"
        :key="i"
        class="historyContent relative z-50 mb-14"
      >
        <h1 class="year en-font text-center pb-2 mb-5">{{ $t(years.year) }}</h1>
        <div
          v-for="(item, index) in years.contentList"
          :key="index"
          class="content flex items-start justify-start"
        >
          <p class="month">{{ $t(item.month) }}</p>
          <div v-if="Array.isArray(item.info)">
            <div v-for="(ele, i) in item.info" :key="i" class="info">
              <p>{{ $t(ele) }}</p>
            </div>
          </div>
          <div v-else>
            <p class="info">{{ $t(item.info) }}</p>
          </div>
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
  margin-left: 34.3854%;
  margin-top: 12.75rem;
  background: #f2f2f2;
  position: relative;
}

.title {
  margin-left: -4.58333%;
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
        width: 13%;
        padding-right: 10%;
        // text-align: right;
        box-sizing: content-box;
        min-width: 45px;
      }

      .info {
        width: 360px;
        max-width: 400px;
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
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  #history {
    margin-left: 36.3%;
  }
}
</style>
