<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: '健康資訊｜眼科資訊 | 香港希瑪眼科中心',
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
const healthList = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/44ab119d3622daa3.png',
    title:
      'pages.ophthalmic_information.ophthalmic_message_text.message_healthList.healthList1_title',
    text: [
      'pages.ophthalmic_information.ophthalmic_message_text.message_healthList.healthList1_text_1',
    ],
    link: '',
    date: '2022.11.30',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a57e87d973cd0587.png',
    title:
      'pages.ophthalmic_information.ophthalmic_message_text.message_healthList.healthList2_title',
    text: [
      'pages.ophthalmic_information.ophthalmic_message_text.message_healthList.healthList2_text_1',
      'pages.ophthalmic_information.ophthalmic_message_text.message_healthList.healthList2_text_2',
    ],
    link: '',
    date: '2022.11.30',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/0d5743383f2c8242.png',
    title:
      'pages.ophthalmic_information.ophthalmic_message_text.message_healthList.healthList3_title',
    text: [
      'pages.ophthalmic_information.ophthalmic_message_text.message_healthList.healthList3_text_1',
      'pages.ophthalmic_information.ophthalmic_message_text.message_healthList.healthList3_text_2',
    ],
    link: '',
    date: '2022.11.30',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/fd41adf9b658e7aa.png',
    title:
      'pages.ophthalmic_information.ophthalmic_message_text.message_healthList.healthList4_title',
    text: [
      'pages.ophthalmic_information.ophthalmic_message_text.message_healthList.healthList4_text_1',
      'pages.ophthalmic_information.ophthalmic_message_text.message_healthList.healthList4_text_2',
    ],
    link: '',
    date: '2022.11.30',
  },
]
const mmmmm = (num: any) => {
  console.log(num)
}
</script>

<template>
  <div>
    <div class="healthInfo">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/06/c6dfc14c28ac7105.png"
            alt="健康資訊"
          />
          <div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_message_text.message_text1'
                )
              }}
            </div>
            <div>
              <div>Health topics</div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/30b46ae600698254.png"
                />
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/a918e24576d0b392.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div><span></span> BLOG</div>
        <div>
          <svg
            width="9"
            height="144"
            viewBox="0 0 9 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-1d8b93bf=""
            data-v-a125a221=""
            data-v-4b343dd3=""
            data-v-ee7ab105=""
            data-v-040e870e=""
          >
            <path
              d="M1 1V143L7.5 130.5"
              stroke="#2958A3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              data-v-1d8b93bf=""
              data-v-a125a221=""
              data-v-4b343dd3=""
              data-v-ee7ab105=""
              data-v-040e870e=""
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <div>
          {{
            $t(
              'pages.ophthalmic_information.ophthalmic_message_text.message_text2'
            )
          }}
        </div>
        <div>
          {{
            $t(
              'pages.ophthalmic_information.ophthalmic_message_text.message_text3'
            )
          }}
        </div>
      </div>
    </div>
    <div class="content_health">
      <div
        v-for="(item, index) in healthList"
        :key="index"
        @click="mmmmm(index + 1)"
      >
        <div>
          <img :src="item.img" :alt="item.title" />
          <div>{{ item.date }}</div>
        </div>
        <div>
          <div>{{ $t(item.title) }}</div>
          <div>
            <div v-for="(ele, i) in item.text" :key="i">{{ $t(ele) }}</div>
          </div>
          <div>
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_message_text.message_text4'
              )
            }}
          </div>
        </div>
      </div>
    </div>
    <!-- 预计分页 -->
    <div class="paging">
      <div>
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.15198 13.3037L0.999984 7.15172L7.15198 0.999723"
            stroke="#2958A3"
            stroke-width="1.75771"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>1/5</div>
      <div>
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7.15199 7.15199L1 13.304"
            stroke="#2958A3"
            stroke-width="1.75771"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div>
      <PageInformation />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.healthInfo {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > div:nth-child(1) {
    background: #f2f2f2;
    width: 1333px;
    height: 640px;
    margin-top: 315px;
    position: relative;

    & > div:nth-child(1) {
      position: relative;

      & > img {
        top: -103px;
        position: absolute;
        right: 0;
      }

      & > div:nth-child(2) {
        width: 500.49px;
        position: relative;
        left: -81px;
        top: -31px;
        text-align: center;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 62.14px;
        line-height: 1;
        text-align: center;
        letter-spacing: 0.2em;
        color: #3e3a39;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-child(1) {
          margin-bottom: 10px;
          position: relative;
          left: -45px;
        }

        & > div:nth-child(2) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 700;
          font-size: 44.48px;
          line-height: 56px;
          text-align: center;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #ffffff;

          display: flex;
          flex-direction: column;
          align-items: center;

          & > div:nth-child(2) {
            padding-right: 5px;
          }

          & > div:nth-child(2),
          & > div:nth-child(3) {
            display: flex;
            justify-content: center;
            padding-top: 5px;
          }
        }
      }
    }

    & > div:nth-child(2) {
      & > span {
        border-top: 2px solid;
        width: 121px;
        display: inline-block;
      }

      position: absolute;
      bottom: 100px;
      left: -6%;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 46px;
      text-align: center;
      letter-spacing: 0.2em;
      color: #b7b7b7;
      transform: rotate(90deg);
    }

    & > div:nth-child(3) {
      position: absolute;
      left: 31%;
      bottom: -33%;
    }
  }

  & > div:nth-child(2) {
    position: absolute;
    left: 18%;
    bottom: -140px;

    & > div:nth-child(1) {
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 1;
      text-align: right;
      letter-spacing: 0.3em;
      color: #2958a3;
    }

    & > div:nth-child(2) {
      margin-top: 42px;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 1;
      text-align: center;
      letter-spacing: 0.3em;
      color: #8ad8dd;
    }
  }
}

.content_health {
  margin-top: 403px;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > div {
    width: 1120px;
    height: 410px;
    background: #f2f2f2;
    margin-bottom: 61px;

    display: flex;
    align-items: center;
    padding: 38px 33px 38px 52px;

    & > div:nth-child(1) {
      width: 321px;
      height: 321px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 40px;
      position: relative;

      & > div {
        position: absolute;
        bottom: -21px;
        left: -36px;
        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 17.7815px;
        line-height: 2.4;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #8ad8dd;
        width: 141px;
        height: 38px;
        background: #ffffff;
      }
    }

    & > div:nth-child(2) {
      width: 650px;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding-top: 55px;
      position: relative;

      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 28.61px;
        line-height: 44px;
        letter-spacing: 0;
        color: #515151;
        position: relative;
        padding-bottom: 20px;
      }

      & > div:nth-child(1)::after {
        content: '';
        border-bottom: solid #8ad8dd;
        width: 312px;
        height: 1.75771px;
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 0;
      }

      & > div:nth-child(2) {
        margin-top: 31px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 350;
        font-size: 13.1828px;
        line-height: 26px;
        letter-spacing: 0.1em;
        text-indent: 30px;
        text-transform: uppercase;

        color: #232323;

        & > div:nth-child(2) {
          text-indent: 0;
        }
      }

      & > div:nth-child(3) {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 95px;
        height: 37.27px;
        background: #8ad8dd;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 500;
        font-size: 13.1538px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.1em;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
}

.paging {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 281px;
  margin-right: 375px;
  color: #2958a3;
  margin-bottom: 256px;

  & > div:nth-child(2) {
    margin: 0 33px;
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 500;
    font-size: 18.6441px;
    letter-spacing: 0.5em;
  }

  & > div:nth-child(1),
  & > div:nth-child(3) {
    cursor: pointer;
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .healthInfo {
    width: 1920px;
    margin: auto;
  }
}
</style>
