<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '醫生小教室｜眼科資訊｜香港希瑪眼科中心',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心是一家提供眼科診療服務的機構，提供不同的眼科資訊影片，提供豐富的影片內容，包括眼科醫生講解眼疾知識、預防眼疾、眼疾治療方法，讓觀眾可以更加深入地了解各種眼疾的病因、症狀和治療方法。通過眼科醫生訪問影片，公眾可以學會如何保護眼睛，識別和預防眼疾，並瞭解診療技術和眼疾手術方法。這些知識可以幫助人們更好地照顧自己的眼睛，減少眼睛疾病的發生風險，提高對眼睛健康的關注和重視，從而達到預防和治療眼疾的目的。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科林順潮眼科醫生 希瑪林順潮眼科中心  眼科醫生 香港眼科 眼科醫生 眼科診所 希瑪眼科 眼科資訊 眼科知識 眼疾 眼疾種類 眼疾症狀 全面眼睛檢查 眼科新聞 眼科專科 希瑪醫療集團 希瑪醫療 眼睛疾病 眼科服務',
    },
  ],
}))

// 内容
const mainContent = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/68d06f9abbaa270e.png',
    link: 'https://youtu.be/6QMK-B_WKvk',
    title:
      'pages.ophthalmic_information.ophthalmic_information_text.information_mainContent.mainContent1_title',
    doctor:
      'pages.ophthalmic_information.ophthalmic_information_text.information_mainContent.mainContent1_doctor',
    text: 'pages.ophthalmic_information.ophthalmic_information_text.information_mainContent.mainContent1_text',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/ae11245a90ee4dfe.png',
    link: 'https://youtu.be/gsFpvvDkJiE',
    title:
      'pages.ophthalmic_information.ophthalmic_information_text.information_mainContent.mainContent2_title',
    doctor:
      'pages.ophthalmic_information.ophthalmic_information_text.information_mainContent.mainContent2_doctor',
    text: 'pages.ophthalmic_information.ophthalmic_information_text.information_mainContent.mainContent2_text',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2d88b98970f31ba1.png',
    link: 'https://youtu.be/zMoqXZgXDsk',
    title:
      'pages.ophthalmic_information.ophthalmic_information_text.information_mainContent.mainContent3_title',
    doctor:
      'pages.ophthalmic_information.ophthalmic_information_text.information_mainContent.mainContent3_doctor',
    text: 'pages.ophthalmic_information.ophthalmic_information_text.information_mainContent.mainContent3_text',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/f3aab3c7f7cec643.png',
    link: 'https://youtu.be/XbWbpVc-39k',
    title:
      'pages.ophthalmic_information.ophthalmic_information_text.information_mainContent.mainContent4_title',
    doctor:
      'pages.ophthalmic_information.ophthalmic_information_text.information_mainContent.mainContent4_doctor',
    text: 'pages.ophthalmic_information.ophthalmic_information_text.information_mainContent.mainContent4_text',
  },
]
</script>

<template>
  <div class="doctorClass">
    <!-- 起始 -->
    <div>
      <div>
        <img
          src="https://static.cmereye.com/imgs/2023/06/0a3d8c4682dfbc3e.png"
          alt="醫生小教室"
        />
      </div>
      <div>
        <div>
          <p>
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_information_text.information_p_text1'
              )
            }}
          </p>
          <p>doctor videos</p>
        </div>
        <div>
          <div>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_information_text.information_p_text2'
                )
              }}
            </p>
          </div>
          <div>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_information_text.information_p_text3'
                )
              }}
            </p>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_information_text.information_p_text4'
                )
              }}
            </p>
          </div>
        </div>
      </div>
      <svg
        width="9"
        height="144"
        viewBox="0 0 9 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-v-1d8b93bf=""
      >
        <path
          d="M1 1V143L7.5 130.5"
          stroke="#2958A3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-v-1d8b93bf=""
        ></path>
      </svg>
    </div>
    <!-- 内容 -->
    <div>
      <div v-for="(item, index) in mainContent" :key="index">
        <div>
          <div>{{ $t(item.title) }}</div>
          <div>
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.62378 1.35986L7.77577 7.51186L1.62378 13.6639"
                stroke="#8AD8DD"
                stroke-width="1.75771"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>{{ $t(item.doctor) }}</div>
          </div>
          <div>{{ $t(item.text) }}</div>
          <div>
            <a :href="item.link" target="_blank" rel="noopener noreferrer">{{
              $t(
                'pages.ophthalmic_information.ophthalmic_information_text.information_a_text1'
              )
            }}</a>
          </div>
        </div>
        <div><img :src="item.img" :alt="item.title" /></div>
      </div>
    </div>
    <!-- 可能是切数据 -->
    <div>
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
.doctorClass {
  margin-left: 94px;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    position: relative;

    & > div:nth-child(1) {
      & > img {
        z-index: 5;
        position: relative;
      }
    }

    & > div:nth-child(1)::before {
      content: '';
      background: #f2f2f2;
      width: 1780px;
      height: 1080px;
      display: inline-block;
      z-index: 1;
      position: absolute;
      left: -94px;
    }

    & > div:nth-child(2) {
      z-index: 5;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      left: 0;
      right: 0;
      bottom: 50px;

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

        & > p:nth-child(2) {
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
        margin-top: 26px;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-child(1) {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 60px;
          /* identical to box height, or 200% */

          text-align: right;
          letter-spacing: 0.3em;

          color: #ffffff;
        }

        & > div:nth-child(2) {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          /* or 150% */

          text-align: center;
          letter-spacing: 0.3em;

          color: #ffffff;
        }
      }
    }

    & > svg {
      position: absolute;
      bottom: -122px;
      z-index: 5;
      left: 50%;
    }
  }

  & > div:nth-child(2) {
    margin-top: 288px;
    margin-left: 281px;
    margin-right: 375px;

    & > div {
      max-width: 1163px;
      margin-bottom: 70px;
      background: #f2f2f2;
      height: 386px;
      position: relative;
      padding-top: 46px;
      padding-left: 22.2476%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      & > div:nth-child(1) {
        width: 490px;
        display: flex;
        flex-direction: column;
        margin-right: 52px;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 24.608px;
        line-height: 44px;

        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #515151;

        & > div:nth-child(1) {
          padding-bottom: 2px;
          position: relative;
        }

        & > div:nth-child(1)::after {
          content: '';
          width: 65.04px;
          border-bottom: 1.75771px solid #8ad8dd;
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: 0;
        }

        & > div:nth-child(2) {
          display: flex;
          align-items: center;
          margin-top: 22px;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 17.5771px;
          line-height: 25px;

          & > svg {
            margin-right: 10px;
          }
        }

        & > div:nth-child(3) {
          margin-left: 30px;
          margin-top: 7.5px;
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
        }

        & > div:nth-child(4) {
          cursor: pointer;
          background: #8ad8dd;
          width: 95px;
          height: 37.27px;
          margin-top: 18px;

          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 500;
          font-size: 13.1538px;
          line-height: 26px;
          /* identical to box height, or 194% */

          text-align: center;
          letter-spacing: 0.1em;

          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      & > div:nth-child(2) {
        position: absolute;
        right: 0;
        margin-right: 64px;
        margin-top: 39px;
      }
    }

    & > div:nth-child(2n) {
      flex-direction: row-reverse;
      justify-content: flex-start;

      & > div:nth-child(2) {
        right: 511px;
      }
    }
  }

  & > div:nth-child(3) {
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
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .doctorClass {
    width: 1780px;
    margin: auto;
    margin-left: 26vw;
  }

  .doctorClass > div:nth-child(2) {
    margin-left: 5.20833%;
  }

  .doctorClass > div:nth-child(2) > div {
    padding-left: 22.2476%;
  }

  .doctorClass > div:nth-child(2) > div > div:nth-child(1) {
    width: 53%;
  }
}
</style>
