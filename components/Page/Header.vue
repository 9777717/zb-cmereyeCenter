<script lang="ts" setup>
// import { defineProps } from "vue";
// defineProps({
//   str:{
//     type: String,
//     default: ''
//   }
// })
const { t } = useLang()
const menus = [
  {
    type: 'link',
    text: t('pages.index.home'),
    link: '/',
  },
  {
    type: 'link',
    text: t('pages.about_us.about_us'),
    link: '/about-us', // 关于我们
    childMenuList: [
      {
        type: 'link',
        text: t('pages.about_us.center_profile'),
        route: { path: '/about-us', hash: '#centreIntro' },
      },
      {
        type: 'link', // 发展历程
        text: t('pages.about_us.development_course'),
        route: { path: '/about-us', hash: '#history' },
      },
      {
        type: 'link', // 企业愿景
        text: t('pages.about_us.enterprise_vision'),
        route: { path: '/about-us', hash: '#awards' },
      },
    ],
  },
  {
    type: 'link',
    text: t('pages.medical_team.medical_team'),
    link: '/medical-team', // 醫療團隊
  },
  {
    type: 'link',
    text: t('pages.medical_service.medical_service'),
    link: '/medical-service', // 醫療服務
    childMenuList: [
      {
        type: 'link',
        text: t('pages.medical_service.cataract'),
        route: { name: 'medical-service-cataract' }, // 白內障
      },
      {
        type: 'link',
        text: t('pages.medical_service.glaucoma'),
        route: { name: 'medical-service-glaucoma' },
      },
      {
        type: 'link',
        text: t('pages.medical_service.xerophthalmia'),
        route: { name: 'medical-service-xerophthalmia' },
      },
      {
        type: 'link',
        text: t('pages.medical_service.muscae_volitantes'),
        route: { name: 'medical-service-muscaeVolitantes' },
      },
      {
        type: 'link',
        text: t('pages.medical_service.conjunctivitis'),
        route: { name: 'medical-service-conjunctivitis' }, // 結膜炎
      },
      {
        type: 'link',
        text: t('pages.medical_service.maculopathy'),
        route: { name: 'medical-service-maculopathy' },
      },
      {
        type: 'link', // 兒童斜弱視
        text: t('pages.medical_service.strabismusAmblyopia'),
        route: { name: 'medical-service-strabismusAmblyopia' },
      },
      {
        type: 'link', // 視網膜脫落
        text: t('pages.medical_service.amotioRetinae'),
        route: { name: 'medical-service-amotioRetinae' },
      },
      {
        type: 'link', // 眼表及角膜疾病
        text: t('pages.medical_service.ocularSurfaceDiseases'),
        route: { name: 'medical-service-ocularSurfaceDiseases' },
      },
      {
        type: 'link', // 眼矯形及眼眶疾病
        text: t('pages.medical_service.eyeOrthopaedicDisease'),
        route: { name: 'medical-service-eyeOrthopaedicDisease' },
      },
      {
        type: 'link', // 醫學驗光配鏡
        text: t('pages.medical_service.medicalOptometry'),
        route: { name: 'medical-service-medicalOptometry' },
      },
      {
        type: 'link', // 阿托品滴眼液
        text: t('pages.medical_service.atropine'),
        route: { name: 'medical-service-atropine' },
      },
    ],
  },
  {
    type: 'link', // ophthalmic_information 眼科資訊
    text: t('pages.ophthalmic_information.ophthalmic_information'),
    link: '/ophthalmic-information',
    childMenuList: [
      {
        type: 'link', // 医生小课堂
        text: t('pages.ophthalmic_information.ophthalmic_class'),
        route: { name: 'ophthalmic-information' },
      },
      {
        type: 'link', // 護眼宣傳片
        text: t('pages.ophthalmic_information.ophthalmic_publicity'),
        route: { name: 'ophthalmic-information-publicity' },
      },
      {
        type: 'link', // 希瑪小劇場
        text: t('pages.ophthalmic_information.ophthalmic_little_theatre'),
        route: { name: 'ophthalmic-information-littleTheatre' },
      },
      {
        type: 'link', // 文章推薦
        text: t('pages.ophthalmic_information.ophthalmic_press'),
        route: { name: 'ophthalmic-information-press' },
      },
      {
        type: 'link', // 文章推薦
        text: t('pages.ophthalmic_information.ophthalmic_article'),
        route: { name: 'ophthalmic-information-article' },
      },
      {
        type: 'link', // 健康資訊
        text: t('pages.ophthalmic_information.ophthalmic_message'),
        route: { name: 'ophthalmic-information-healthInfo' },
      },
    ],
  },
  {
    type: 'link',
    text: t('pages.process_cost.process_cost'),
    link: '/process-and-cost',
    childMenuList: [
      {
        type: 'link', // 費用一覽
        text: t('pages.process_cost.cost'),
        route: { path: '/process-and-cost', hash: '#cost' },
      },
      {
        type: 'link', // 就診流程
        text: t('pages.process_cost.process'),
        route: { path: '/process-and-cost', hash: '#process' },
      },
    ],
  },
  {
    type: 'link',
    text: t('pages.talent_recruitment.talent_recruitment'),
    link: '/talent-recruitment',
  },
  {
    type: 'link',
    text: t('pages.contact_us.contact_us'),
    link: '/contact-us',
    childMenuList: [
      {
        type: 'link', // 診所資料
        text: t('pages.contact_us.clinic_information'),
        route: { name: 'contact-us' },
      },
      {
        type: 'link', // 電子預約表格
        text: t('pages.contact_us.appointmentForm'),
        route: { name: 'contact-us-appointmentForm' },
      },
    ],
  },
]
</script>

<template>
  <div class="mbHeader">
    <div class="mbHeader-in">
      <div class="mbHeader-in-logo">
        <!-- <img src="" alt=""> -->
      </div>
      <div class="mbHeader-in-muenBtn">
        <!-- <img src="" alt=""> -->
      </div>
    </div>
    <div class="mbHeader-content">
      <div
        v-for="(menusItem, index) in menus"
        :key="index"
        class="mbHeader-content-item"
      >
        <div>
          {{ menusItem.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mbHeader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  &-in {
    width: 100%;
    // height: 100px;
    background: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.3) 30%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0.3) 70%,
      rgba(255, 255, 255, 0)
    );
    padding: 19px 26px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-logo {
      width: 69px;
      height: 36px;
      background: url(https://static.cmereye.com/imgs/2023/06/a05a8310283f5a06.png)
        no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
    &-muenBtn {
      width: 36px;
      height: 26px;
      background: url(https://static.cmereye.com/imgs/2023/06/685b262802c0bdf1.png)
        no-repeat;
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
  &-content {
    background: #f2f2f2;
    &-item {
      & > div {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 38px;
        letter-spacing: 0px;
        color: #2958a3;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
}
@media screen and (max-width: 768px) {
}
</style>
