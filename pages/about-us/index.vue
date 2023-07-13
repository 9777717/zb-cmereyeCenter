<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '中心簡介 | 關於我們｜希瑪眼科中心',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科醫療控股有限公司是香港領先的一站式眼科專科醫療服務集團，共有三個眼科業務，希瑪眼科中心、希瑪微笑矯視中心及希瑪視光中心。眼科業務為香港市民提供安全、準確、可靠的眼科檢查、專科醫療服務、激光矯視服務、視光配鏡服務及控制近視服務。我們秉持「度身訂造」的原則，根據客人的實際眼睛狀況制定嚴格且針對性的治療方案。',
    },
    {
      name: 'keywords',
      content:
        '眼睛疾病 眼睛檢查 眼科醫生 眼科服務 兒童眼科 香港眼科 眼科醫院 希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科治療 眼科服務 希瑪眼科收費 希瑪眼科治療 希瑪眼科矯視中心 希瑪視光中心 全面眼睛檢查 希瑪林順潮眼科中心 林順潮眼科中心 林順潮眼科醫生 林順潮眼科診所 希瑪眼科醫療控股有限公司 希瑪醫療集團 希瑪醫療',
    },
  ],
}))

const CORPORATE_Lists = [
  {
    name: '以客人需求為本，提供一站式眼科醫療服務',
    text: '中心按客人需要提供全面眼科服務，包括驗光、檢查、治療、矯視及配鏡。'
  },
  {
    name: '眼科專科診療',
    text: '除了綜合眼科服務外，我們亦提供眼科專科服務，由22位不同專長且經驗豐富的眼科醫生診治，覆蓋眼科九大專科，為患者提供針對性的治療。'
  },
  {
    name: '國際認可的先進眼科醫療技術',
    text: '中心的醫生具豐富臨床經驗，恆常與國際眼科界交流，引入最新醫療技術及設備，爲客人提供可靠的眼科醫療服務。'
  }
]

</script>

<template>
  <div class="about">
    <div class="header mainCon">
      <AboutChildCompsHead />
    </div>

    <div class="textbg en-font whitespace-nowrap overflow-hidden">
      OUR VISION FOR A BETTER FUTURE.
    </div>
    <div class="introduction">
      <!-- <div class="mainContents mainCon flex items-end flex-col justify-start"> -->
      <AboutChildCompsCentreIntro />

      <AboutChildCompsHistory />

      <!-- <AboutChildCompsCorporateVision /> -->
      <div class="CORPORATE_VISION" id="corporate">
        <div class="CORPORATE_VISION-in">
          <div class="CORPORATE_VISION-in-title">
            <AboutTitle
              :zh-title="'企業願景'"
              :en-ttitle="'CORPORATE VISION'"
              class="title"
            />
          </div>
          <div class="CORPORATE_VISION-in-content">
            <div>
              <div class="name">服務宗旨</div>
              <div class="text">以客人需求為依歸，提供針對性及達國際水準的眼科醫療服務。</div>
            </div>
            <div>
              <div class="name">服務理念</div>
              <div class="text">以人為本，注重細節，團隊合作，精益求精。</div>
            </div>
            <div>
              <div class="name">服務特色</div>
              <div class="textLists">
                <div v-for="(item,index) in CORPORATE_Lists" :key="index">
                  <div>{{item.name}}</div>
                  <div>{{item.text}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutChildCompsMedicalEquipment />

      <AboutChildCompsAwards />

      <PageFooterMenu />
    </div>
    <!-- </div> -->
  </div>
</template>
<style lang="scss" scoped>
.about {
  padding-bottom: 50px;
}

.textbg {
  font-family: 'Metropolis';
  font-style: normal;
  font-weight: 500;
  font-size: 151.846px;
  line-height: 380px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  
  color: rgba(138, 216, 221, 0.3);
}
.CORPORATE_VISION{
  margin-top: 180px;
  position: relative;
  width: 100%;
  &::before{
    content: '';
    width: calc((100% - 1080px) / 2 + 580px);
    height: 294px;
    background: #f2f2f2;
    position: absolute;
    top: 0;
    right: 0;
  }
  &::after{
    content: '';
    background: #f2f2f2;
    position: absolute;
    top: -78px;
    right: calc((100% - 860px) / 2);
    width: 395px;
    height: 263px;
    background: url(https://static.cmereye.com/imgs/2023/07/7ec583c939090e3c.jpg);
  }
  &-in{
    position: relative;
    &-title{
      width: 100%;
      max-width: 960px;
      margin: 0 auto;
      z-index: 1;
      :deep(h1){
        width: max-content !important;
      }
    }
    &-content{
      width: 100%;
      max-width: 600px;
      margin: 62px auto 0;
      &>div{
        &:not(:first-child)>.name{
          margin-top: 70px;
        }
        .name{
          font-size: 28px;
          position: relative;
          margin-bottom: 25px;
          color: #515151;
          &::after{
            content: '';
            width: 72px;
            height: 2px;
            background: #8AD8DD;
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }
        .text{
          font-size: 20px;
          line-height: 1.6;
          color: #515151;
        }
        .textLists{
          &>div{
            margin-top: 70px;
            &>div:nth-of-type(1){
              color: #515151;
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              line-height: 28px; /* 140% */
              letter-spacing: 1px;
              text-transform: uppercase;
              // text-indent: 10px;
              &::before{
                content: '>';
                color: #8AD8DD;
                margin-right: 5px;
                font-size: 24px;
              }
            }
            &>div:nth-of-type(2){
              color: #515151;
              text-align: justify;
              font-size: 18px;
              font-style: normal;
              font-weight: 300;
              line-height: 26px; /* 144.444% */
              letter-spacing: 1.44px;
              text-transform: uppercase;
              margin-left: 40px;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .textbg {
    width: 100%;
    font-size: 50px;
    line-height: 160px;
  }
  .CORPORATE_VISION{
    margin-top: 72px;
    &-in{
      &-title{
        width: calc(100% - 60px);
        margin: 0 auto;
      }
      &-content{
        width: calc(100% - 60px);
        margin: 37px auto 0;
        &>div{
          &:not(:first-child)>.name{
            margin-top: 50px;
          }
          .name{
            font-size: 19.8px;
            margin-bottom: 17.5px;
            &::after{
              content: '';
              width: 72px;
              height: 2px;
              left: 0;
              bottom: 0;
            }
          }
          .text{
            font-size: 14px;
          }
          .textLists{
            &>div{
              margin-top: 40px;
              &>div:nth-of-type(1){
                font-size: 14px;
                &::before{
                  font-size: 16px;
                  margin-right: 2px;
                }
              }
              &>div:nth-of-type(2){
                font-size: 12px;
                margin-top: 5px;
                margin-left: 30px;
              }
            }
          }
        }
      }
    }
    &::before{
      display: none;
    }
    &::after{
      display: none;
    }
  }
}
</style>
