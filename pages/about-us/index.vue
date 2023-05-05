<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <div>
    <div class="header mainCon">
      <AboutChildCompsHead />
    </div>

    <div class="textbg en-font whitespace-nowrap -ml-10 overflow-hidden">
      OUR VISION FOR A BETTER FUTURE.
    </div>

    <!-- <div class="mainContents mainCon flex items-end flex-col justify-start"> -->
    <!-- <AboutChildCompsCentreIntro /> -->

    <!-- <AboutChildCompsHistory /> -->

    <!-- <AboutChildCompsCorporateVision /> -->

    <!-- <AboutChildCompsMedicalEquipment /> -->

    <!-- <AboutChildCompsAwards /> -->
    <!-- </div> -->
  </div>
</template>
<style lang="scss" scoped>
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
</style>
