<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.index.title'),
  meta: [
    {
      name: 'description',
      content:
        '香港希瑪眼科中心提供各種全面眼睛檢查及眼疾治療，醫療服務包括：白內障、青光眼、兒童眼疾(斜視及弱視)、眼表疾病、眼角膜疾病、黃斑病變、視網膜脫落、眼眶、眼整形及眼腫瘤。眼科診所地點遍佈港、九、新界各區，共有10多間眼科診所。香港希瑪眼科中心有經驗豐富的眼科醫生、視光師及醫療護理人員組成，提供專業眼科醫療服務，為客人提供安全、準確、可靠的眼科檢查及眼科醫療服務。強大的眼科醫生團隊，加上先進的眼科儀器及手術設備，能為大眾提供提供安全、準確、可靠的眼科檢查及眼科治療服務。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科治療 希瑪眼科收費 希瑪眼科治療  全面眼睛檢查 希瑪林順潮眼科中心 林順潮眼科中心 林順潮眼科診所 眼睛疾病 眼科服務 眼科醫生 兒童眼科 香港眼科 眼科醫院 眼科醫生 眼科診所 希瑪醫療集團 希瑪醫療',
    },
    {
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
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}
const homeSwiperImgs = [
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/cfb698518628078c.jpg'
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/c87bbe2a6c6bffc6.jpg'
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/7bba82871272f273.jpg'
  },
  {
    imgUrl: 'https://static.cmereye.com/imgs/2023/07/4d9021988f9a4bf7.jpg'
  }
]
let currentImg = ref(0)
var timer: any = null
const setSwiperImg = () => {
  timer = setInterval(() => {
    if (currentImg.value < homeSwiperImgs.length - 1) {
      currentImg.value++
    } else {
      currentImg.value = 0
    }
  }, 5000)
}
onMounted(() => {
  setSwiperImg()
})
onUnmounted(() => {
  clearInterval(timer)
})
// 拨打电话
const callTel = () => {
  location.href = 'tel: +852 3956 2025'
}

const toLink = (a:string) => {
  location.href = a
}
</script>

<template>
  <div class="home">
    <div class="home-bottom">
      <PageFooterMenu />
    </div>

  </div>
</template>
<style lang="scss" scoped>
.home-bottom{
  display: none;
}
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  &>div:nth-of-type(1) {
    .mbHomeSwiper {
      display: none;
    }
  }
  &>div:nth-child(2) {
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    &>div:nth-child(1) {
      display: flex;
      justify-content: center;
      margin-bottom: 196px;
      flex-direction: column;
      align-items: flex-start;
      &>div:nth-child(1) {
        letter-spacing: 2.409px;
      }
      &>div:nth-child(3) {
        letter-spacing: 18.553px;
      }
      font-family: 'Metropolis';
      font-style: normal;
      font-weight: 700;
      font-size: 24.0948px;
      line-height: 28px;
      letter-spacing: 14.5px;
      text-transform: uppercase;
      color: #ffffff;
    }
    &>div:nth-child(2) {
      display: flex;
      pointer-events: initial;
      &>div,&>a {
        background: #ffffffbf;
      }
      img {
        width: 100%;
      }
      &>a {
        width: 626px;
        padding: 0 24px;
        margin-right: 53px;
        &>div:nth-child(1) {
          margin: 10px 0 9px;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          text-align: center;
          letter-spacing: 0.05em;
          color: #2958a3;
          &>div {
            margin-left: 8px;
          }
          svg {
            margin-top: -3px;
          }
        }
        &>div:nth-child(3) {
          margin: 10px 0;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          line-height: 160%;
          text-align: justify;
          letter-spacing: 0.1em;
          color: #2958a3;
        }
      }

      &>div {
        width: 530px;
        &>div:nth-child(1) {
          display: flex;
          align-items: center;
          margin: 15px 0 0 30px;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 35px;
          letter-spacing: 0.05em;
          color: #2958a3;
          &>div {
            margin-left: 12px;
          }
          svg {
            margin-top: 6px;
          }
        }
        &>div:nth-child(2) {
          display: flex;
          position: relative;
          justify-content: space-evenly;
          align-items: center;
          padding-bottom: 50px;
          height: 100%;

          &>div,&>a {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            flex: 1;
            min-height: 100px;
            
            &>div:nth-child(2) {
              margin-top: 2px;
              font-family: 'Metropolis';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 28px;
              text-align: center;
              letter-spacing: 0.05em;

              color: #2958a3;
            }
          }
          &>div{
            border-right: 0.75px solid #2958a3;
          }
        }
      }
    }
    .mbCar {
      display: none;
    }
  }
}

@media screen and (max-width: 768px) {
  .home-bottom{
    display: block;
  }
  .home {
    height: auto;
    &>div:nth-of-type(1) {
      video {
        display: none;
      }
      .pcHomeVideoBox{
        display: none;
      }
      .mbHomeSwiper {
        width: 100%;
        height: 100vh;
        transition: all 1s;
        display: block;
        background-size: 100% 100% !important;
      }
    }
    &>div:nth-child(2) {
      top: 60vh;
      pointer-events: initial;
      &>div:nth-child(1) {
        display: none;
      }
      &>div:nth-child(2) {
        display: none;
      }
      .mbCar {
        display: block;
        background: rgba($color: #fff, $alpha: .7);
        margin: 0 20px;
        width: auto;
        padding: 10px;
        &>div:nth-of-type(1) {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: #2958A3;
          font-size: 20px;
          font-weight: 400;
        }
        &>div:nth-of-type(2) {
          display: flex;

          &>div:nth-of-type(1) {
            img {
              width: 100%;
            }
          }
          &>div:nth-of-type(2) {
            flex: 1;
            color: #2958A3;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            text-align: justify;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .home {
    &>div:nth-child(2) {
      &>div:nth-child(2) {
        display: flex;
        margin-top: 5%;
      }
    }
  }
}
</style>
