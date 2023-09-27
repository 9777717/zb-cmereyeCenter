<script lang="ts" setup>

// compiler macro
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: `${t('pages.about_us.center_profile')} | ${t('pages.about_us.about_us')}｜${t('pages.index.title')}`,
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科由林順潮醫生於2012年創辦，首間診所位於香港中環。2013年希瑪林順潮眼科醫院於深圳成立。其後陸續在中港兩地開設多個眼科中心和眼科醫院。2019年，希瑪微笑激光矯視中心開始營運，2021年希瑪眼科視光中心成立。現在，希瑪眼科中心已經在中港兩地建立了11間眼科中心、6間眼科醫院、3間矯視中心、2間視光中心和6間希瑪醫療旗下的視光師驗眼中心，為患者提供全方位的眼科醫療服務。',
    },
    {
      name: 'keywords',
      content:
        '眼睛疾病 眼科醫生 眼科診所 兒童眼科 香港眼科 希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科收費 全面眼科檢查 眼睛檢查 希瑪眼科香港 希瑪林順潮眼科中心 林順潮眼科中心 沙田眼科 中環眼科 旺角眼科 元朗眼科 觀塘眼科 荃灣眼科 尖沙咀眼科 將軍澳眼科 銅鑼灣眼科 希瑪醫療集團 希瑪醫療 希瑪微笑矯視中心 希瑪視光中心 眼科服務',
    },
    {
      name: 'description',
      content:
        '希瑪眼科致力以客人需求為依歸，提供國際水準級眼科醫療服務。希瑪眼科中心以人為本，注重細節，團隊合作，精益求精，並提供一站式眼科醫療服務中心，包括驗光、眼科檢查、眼疾治療、矯視及配鏡。我們擁有20多位眼科專長且經驗豐富的眼科醫生，提供眼科九大眼科專科服務，為患者提供針對性的眼疾治療。',
    },
    {
      name: 'keywords',
      content:
        '眼科服務 眼睛疾病 眼科醫生 兒童眼科 香港眼科 希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科治療 希瑪眼科收費 全面眼科檢查 希瑪眼科香港 希瑪眼科治療 希瑪林順潮眼科中心 林順潮眼科中心 眼睛檢查 眼疾治療 希瑪醫療集團 希瑪醫療',
    },
    {
      name: 'description',
      content:
        '希瑪眼科中心建立國際認可的眼科醫療診所，引入多部先進眼科醫療設備，為客人提供先進、安全、全面的眼科醫療技術及眼科檢查服務，包括白內障超聲乳化儀、光學眼科手術顯微鏡、全視網膜掃描器、微笑激光矯視儀等等。 眼科設備可用於眼疾診斷和眼科治療，眼疾包括: 如白內障、青光眼、黃斑病變等。希瑪眼科中心提供眼科手術設備及服務，由日常眼科檢查至手術治療的眼部疾病，希瑪眼科中心亦可為客人提供專業、優質的眼科醫療服務。',
    },
    {
      name: 'keywords',
      content:
        '眼睛疾病 眼科醫生 兒童眼科 香港眼科 希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科治療 希瑪眼科收費 希瑪眼科治療 全面眼科檢查 希瑪眼科香港 希瑪眼科治療方案 希瑪林順潮眼科中心 林順潮眼科中心 林順潮眼科診所 眼科檢查 眼底檢查 視網膜掃描 角膜掃描 眼壓 屈光 散光 視神經 眼底相 視網膜 白內障 青光眼 希瑪醫療集團 希瑪醫療 眼睛檢查 眼疾治療',
    },
    {
      hid: 'description',
      name: 'description',
      content:
        'Hong Kong CMER Eye Center provides optometry and comprehensive eye examinations. Medical services include: cataract, glaucoma, strabismus, amblyopia, ocular surface diseases, corneal diseases, macular degeneration, retinal detachment, orbital, ophthalmic plastic surgery and eye tumors, myopia control and ophthalmic services. CMER Eye Center has a total of 10 eye clinics, with 22 ophthalmologists, providing professional eye medical services, eye examinations and eye medical services in Hong Kong. The ophthalmologist team consists of 22 ophthalmologists, led by ophthalmologist Dr. LAM Shun Chiu, Dennis.',
    },
    {
      name: 'keywords',
      content:
        'CMER Eye Center Hong Kong CMER Eye Center Ophthalmology Specialist Clinic Ophthalmology Specialist Center Vision Center Comprehensive Eye Exam CMER Eye Hong Kong Eye Treatment Solutions Eye Clinic',
    }
  ],
}))

const locale = useState<string>('locale.setting')

const CORPORATE_Lists = [
  {
    name: 'pages.about_us.enterprise_vision_con.name3_1',
    text: 'pages.about_us.enterprise_vision_con.name3_1'
  },
  {
    name: 'pages.about_us.enterprise_vision_con.name3_2',
    text: 'pages.about_us.enterprise_vision_con.name3_2'
  },
  {
    name: 'pages.about_us.enterprise_vision_con.name3_3',
    text: 'pages.about_us.enterprise_vision_con.name3_3'
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
              :zh-title="'pages.about_us.enterprise_vision'"
              :en-ttitle="'CORPORATE VISION'"
              class="title"
            />
          </div>
          <div class="CORPORATE_VISION-in-content">
            <div>
              <div class="name">{{$t('pages.about_us.enterprise_vision_con.name1')}}</div>
              <div class="text">{{$t('pages.about_us.enterprise_vision_con.text1')}}</div>
            </div>
            <div>
              <div class="name">{{$t('pages.about_us.enterprise_vision_con.name2')}}</div>
              <div class="text">{{$t('pages.about_us.enterprise_vision_con.text2')}}</div>
            </div>
            <div>
              <div class="name">{{$t('pages.about_us.enterprise_vision_con.name3')}}</div>
              <div class="textLists">
                <div v-for="(item,index) in CORPORATE_Lists" :key="index">
                  <div>{{$t(item.name)}}</div>
                  <div>{{$t(item.text)}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutChildCompsMedicalEquipment />

      <feedback-con />
      <AboutChildCompsAwards />

      <PageFooterMenu />
    </div>
    <!-- </div> -->
  </div>
</template>
<style lang="scss" scoped>
.about {
  padding-bottom: 50px;
  overflow: hidden;
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
  animation: textbgAnim 30s linear infinite;
  color: rgba(138, 216, 221, 0.3);
  width: max-content;
  position: relative;
}
@keyframes textbgAnim {
  0%{
    left: 100%;
    transform: translateX(0)
  }
  100%{
    left: 0;
    transform: translateX(-100%);
  }
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
    margin-top: 0px;
    padding-top: 72px;
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
