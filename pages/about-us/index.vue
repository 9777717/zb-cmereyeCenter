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

      <AboutChildCompsMedicalEquipment />

      <AboutChildCompsAwards />
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
  /* identical to box height, or 384% */

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  
  color: rgba(138, 216, 221, 0.3);
}
@media screen and (max-width: 768px) {
  .textbg {
    width: 100%;
    font-size: 50px;
    line-height: 160px;
  }
}
</style>
