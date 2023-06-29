<script lang="ts" setup>
import { Anchor } from '~~/.nuxt/components'

// compiler macro
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: '希瑪小劇場｜眼科資訊 | 香港希瑪眼科中心',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心有提供眼科健康資訊，講解不同的眼科知識，內容主要分為不同的系列﹕視在希瑪、希瑪小知識、護眼食物字典、放眼逐格睇、關你眼事。眼科資訊文章會提及與不同眼疾內容相關的護眼知識，眼科資訊文章提及多種眼疾知識，包括﹕白內障、青光眼、乾眼症、飛蚊症、結膜炎、黃斑病變、兒童斜視及弱視、眼表疾病、眼角膜疾病、視網膜脫落、眼眶、眼整形、眼腫瘤。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 眼科知識 眼科資訊 眼科保健 香港眼科 眼科醫生 眼科診所 眼疾 老人眼疾 眼睛疾病 眼科專科中心 眼科檢查 白內障 青光眼 乾眼症 飛蚊症 結膜炎 黃斑病變 兒童斜視及弱視 眼表疾病 眼角膜疾病 視網膜脫落 眼眶 眼整形 眼腫瘤 希瑪醫療集團 希瑪醫療 眼科服務',
    },
  ],
}))
// 视频列表
const videoList = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/72ff84195ac84ec5.png',
    title:
      'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_videoList.videoList1_title',
    text: [
      'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_videoList.videoList1_text_1',
      'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_videoList.videoList1_text_2',
    ],
    link: 'https://youtu.be/oYTtMkqVK4w',
  },
]
</script>

<template>
  <div class="currentpage">
    <div class="theatre">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/06/d038f9bf53fdb0d9.png"
            alt="希碼小劇場"
          />
          <div>
            <svg
              width="9"
              height="144"
              viewBox="0 0 9 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-1d8b93bf=""
              data-v-a125a221=""
            >
              <path
                d="M1 1V143L7.5 130.5"
                stroke="#2958A3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-v-1d8b93bf=""
                data-v-a125a221=""
              ></path>
            </svg>
          </div>
        </div>
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_text1'
                )
              }}
            </div>
            <div>c-MEr theater</div>
          </div>
          <div>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_p1'
                )
              }}
            </p>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_p2'
                )
              }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div v-for="(item, index) in videoList" :key="index">
          <div>
            <img :src="item.img" :alt="item.title" srcset="" />
          </div>
          <div>
            <div>{{ $t(item.title) }}</div>
            <div v-if="Array.isArray(item.text)">
              <div v-for="(ele, i) in item.text" :key="i">{{ $t(ele) }}</div>
            </div>
            <div>
              <a :href="item.link" target="_blank" rel="noopener noreferrer">{{
                $t(
                  'pages.ophthalmic_information.ophthalmic_little_theatre_text.little_theatre_a1'
                )
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <PageInformation />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.theatre {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    &::before{
      content: '';
      background:#f1f1f1;
      position: absolute;
      top: 70px;
      left: 0;
      height: 800px;
      width: calc( (100vw - 1490px )/2 + 1300px);
    }
    & > div:nth-child(1) {
      width: 100%;
      max-width: 1490px;
      margin: 150px auto 0;
      & > img {
        width: 100%;
        z-index: 5;
        position: relative;
      }

      & > div:nth-child(2) {
        z-index: 6;
        position: absolute;
        left: 50%;
        bottom: -60px;
      }
    }

    & > div:nth-child(1)::after {
      content: '';
      background: #f2f2f2;
      // width: 1700px;
      height: 858px;
      display: inline-block;
      position: absolute;
      top: 0;
      z-index: 1;
    }

    & > div:nth-child(2) {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 160px;
      z-index: 5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 49.14px;
        line-height: 46px;
        /* identical to box height, or 94% */

        text-align: center;
        letter-spacing: 0.2em;

        color: #ffffff;

        & > div:nth-child(2) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 500;
          font-size: 25.64px;
          line-height: 44px;
          /* identical to box height, or 173% */

          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: #8ad8dd;
        }
      }

      & > div:nth-child(2) {
        margin-top: 42px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;

        text-align: center;
        letter-spacing: 0.3em;

        color: #ffffff;
      }
    }
  }

  & > div:nth-child(2) {
    // margin: 0 392px;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    min-height: 900px;
    margin-top: 150px;

    & > div {
      display: flex;

      & > div:nth-child(1) {
        margin-right: 72px;
        width: 518px;
        height: 308px;
        background: #f2f2f2;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      & > div:nth-child(2) {
        width: 518px;
        position: relative;

        & > div:nth-child(1) {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 24.608px;
          letter-spacing: 0.05em;
          padding-bottom: 8px;
          color: #515151;
          position: relative;
        }

        & > div:nth-child(1)::after {
          content: '';
          width: 65.04px;
          border-bottom: 1.75771px solid #8ad8dd;
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: 0;
        }

        & > div:nth-child(2) {
          margin-top: 34.3px;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 13.1828px;
          line-height: 26px;
          /* or 200% */

          text-align: justify;
          letter-spacing: 0.1em;
          text-indent: 30px;
          text-transform: uppercase;

          color: #232323;

          & > div:nth-child(1) {
            margin-bottom: 40px;
          }
        }

        & > div:nth-child(3) {
          position: absolute;
          bottom: 15px;
          right: 0;

          width: 95px;
          height: 37.27px;
          background: #8ad8dd;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 500;
          font-size: 13.1538px;
          line-height: 26px;
          text-align: center;
          letter-spacing: 0.1em;
          color: #ffffff;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
