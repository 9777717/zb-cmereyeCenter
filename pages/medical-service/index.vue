<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead({
  title: '眼科醫療服務｜專科服務｜香港希瑪眼科中心',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content:
        '香港希瑪眼科中心提供全面眼睛檢查及眼疾治療，醫療服務包括：白內障、青光眼、乾眼症、飛蚊症、結膜炎(紅眼症)、黃斑病變、兒童斜視及兒童弱視、眼表疾病(如眼瞼炎)、眼角膜疾病(如角膜炎)、視網膜脫落、眼眶眼矯形(如甲亢突眼、淚眼、義眼術、眼腫瘤。另外, 亦會提供屈光矯視及視光服務。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 眼科服務 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科治療 希瑪眼科收費 眼科醫生 兒童眼科 香港眼科 眼科醫院 眼科醫生 眼科診所 希瑪醫療集團 希瑪醫療  希瑪眼科香港 希瑪林順潮眼科中心 全面眼睛檢查 眼睛疾病 白內障 青光眼 乾眼症 乾眼飛蚊症 結膜炎 紅眼症 黃斑病變 斜視 弱視 眼瞼炎 角膜炎 視網膜脫落 甲亢突眼 突眼 眼整形 眼腫瘤 糖尿眼 眼睛檢查',
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
    },
  ],
})
const SerListL = [
  {
    i: '01',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser1.png',
    des: 'pages.medical_service.cataract',
    link: '/medical-service/cataract',
  },
  {
    i: '02',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser4.png',
    des: 'pages.medical_service.muscae_volitantes',
    link: '/medical-service/muscaeVolitantes',
  },
  {
    i: '03',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser6.png',
    des: 'pages.medical_service.maculopathy',
    link: '/medical-service/maculopathy',
  },
  {
    i: '04',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser2.png',
    des: 'pages.medical_service.glaucoma',
    link: '/medical-service/glaucoma',
  },
  {
    i: '05',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/18da333b4728e821.png',
    des: 'pages.medical_service.atropine',
    link: '/medical-service/atropine',
  },
  {
    i: '06',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser7.png',
    des: 'pages.medical_service.strabismusAmblyopia',
    link: '/medical-service/strabismusAmblyopia',
  },
  {
    i: '07',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser5.png',
    des: 'pages.medical_service.conjunctivitis',
    link: '/medical-service/conjunctivitis',
  },
  {
    i: '08',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser3.png',
    des: 'pages.medical_service.xerophthalmia',
    link: '/medical-service/xerophthalmia',
  },
  {
    i: '09',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser11.png',
    des: 'pages.medical_service.medicalOptometry',
    link: '/medical-service/medicalOptometry',
  },
  {
    i: '10',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser9.png',
    des: 'pages.medical_service.amotioRetinae',
    link: '/medical-service/amotioRetinae',
  },
  {
    i: '11',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser8.png',
    des: 'pages.medical_service.ocularSurfaceDiseases',
    link: '/medical-service/ocularSurfaceDiseases',
  },
  
  {
    i: '12',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser10.png',
    des: 'pages.medical_service.eyeOrthopaedicDisease',
    link: '/medical-service/eyeOrthopaedicDisease',
  },
  {
    i: '13',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser12.png',
    des: 'pages.medical_service.smileHk',
    link: 'https://smile.hkcmereye.com/',
  }
]
</script>

<template>
  <div id="Service" class="Service">
    <div class="serContent relative">
      <!-- <div class="title">醫 療 服 務</div> -->
      <div class="title">{{$t('pages.medical_service.medical_service_title')}}</div>
      <ul class="serList">
        <li v-for="(item, index) in SerListL" :key="index">
          <nuxt-link
            :to="item.link"
            class="flex flex-col items-center justify-center relative"
          >
            <div>
              <img :src="item.imgUrl" :alt="item.des" class="rounded-full" />
              <span class="i en-font absolute top-0 left-0 z-50">{{
                item.i
              }}</span>
            </div>
            <p class="des text-center">{{ $t(item.des) }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="h-32"></div>
    <Footer />
    <PageFooterMenu />
  </div>
</template>

<style scoped lang="scss">
.serContent {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  .title {
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
    position: relative;
    top: 102px;
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 400;
    font-size: 40.1431px;
    line-height: 46px;
    margin-left: 60px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #515151;
    &::after {
      content: 'medical services';
      position: absolute;
      color: #8ad8dd;
      left: -38px;
      top: 0px;
      font-family: 'Metropolis';
      font-style: normal;
      font-weight: 500;
      font-size: 23.0172px;
      line-height: 55px;
      text-align: center;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #8ad8dd;
      white-space: nowrap;
    }
  }

  &::before {
    content: '';
    position: absolute;
    background: #f2f2f2;
    top: 0;
    width: 600px;
    height: 642px;
    left: 45.8333%;
    z-index: 0;
  }
  .serList {
    margin: 150px auto 0;
    width: 100%;
    max-width: 920px;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 33.3333%;
      margin-bottom: 66px;
      img {
        width: 131px;
        margin-bottom: 15px;
      }
      p {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 50px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #515151;
      }
      .i {
        font-size: 50px;
        -webkit-text-stroke: 1.5px #2958a3; //文字描边
        color: transparent; //字体颜色设置为透明
        background-color: transparent;
        text-transform: uppercase;
        top: -23%;
        left: 20%;
        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 45.182px;
        line-height: 108px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .serContent {
    .title{
      -ms-writing-mode: initial;
      writing-mode: initial;
      letter-spacing: -.1em;
      font-size: 28px;
      margin-left: 0;
      text-align: left;
      text-indent: 30px;
      &::after {
        font-size: 16px;
        left: 0;
        top: 40px;
        line-height: 160%;
        letter-spacing: 0.01em;
      }
    }
    &::before{
      display: none;
    }
    .serList {
      margin: 150px auto 0;
      max-width: calc(100% - 40px);
      li{
        img {
          width: 80%;
          margin: 0 auto 15px;
          max-width: 130px;
        }
        p{
          font-size: 14px;
          line-height: 160%;
        }
        .i{
          top: -20px;
          font-size: 30px;
          line-height: 160%;
        }
      }
    }
  }
}
</style>
