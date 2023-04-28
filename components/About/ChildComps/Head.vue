<script setup lang="ts">
const anchorList = [
  {
    anchorName: '中心簡介',
    anchorLink: '/about#centreIntro',
  },
  {
    anchorName: '發展歷程',
    anchorLink: '/about#history',
  },
  {
    anchorName: '企業願景',
    anchorLink: '/about#corporateVision',
  },
  {
    anchorName: '中心設備',
    anchorLink: '/about#medicalEquipment',
  },
  {
    anchorName: '企業榮譽',
    anchorLink: '/about#awards',
  },
  {
    anchorName: '費用一覽',
    anchorLink: '/Costs',
  },
  {
    anchorName: '就診流程',
    anchorLink: '/Costs#process',
  },
]
const acIdex = ref(-1)
const exactIdex = ref(-1)
const changeActive = (index: any) => {
  acIdex.value = index
}
const enterActive = (index: any) => {
  exactIdex.value = index
}
const leaveActive = () => {
  exactIdex.value = -1
}
</script>
<template>
  <div class="aboutHead relative flex items-start justify-start">
    <Menu></Menu>
    <div class="title mt-28 text-3xl font-normal relative">關 於 我 們</div>
    <div class="imgBox mt-48 relative">
      <img
        src="https://static.cmereye.com/imgs/hkcmereye-newstyle/about/banner1.jpg?v=1"
        alt=""
      />
      <img
        src="https://static.cmereye.com/imgs/2023/03/bda3757b33770267.jpg?v=1"
        alt=""
      />
      <img
        src="https://static.cmereye.com/imgs/hkcmereye-newstyle/about/banner3.jpg?v=1"
        alt=""
      />
    </div>

    <div class="anchor fixed right-10">
      <div
        v-for="(item, index) in anchorList"
        :key="index"
        class="flex flex-col"
        @click="changeActive(index)"
        @mouseenter="enterActive(index)"
        @mouseleave="leaveActive"
      >
        <a
          :href="item.anchorLink"
          :class="{
            anchorActive: acIdex === index,
            exactActive: exactIdex === index,
          }"
        >
          {{ item.anchorName }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
  margin-left: 10%;
  margin-right: 3%;

  &::after {
    content: 'About Us';
    position: absolute;
    color: #8ad8dd;
    left: -40px;
    top: 3px;
    text-transform: uppercase;
    font-size: 26px;
  }
}

.imgBox {
  background: #f2f2f2;
  width: 65%;
  height: 700px;

  img {
    position: absolute;

    &:nth-child(1) {
      left: -7%;
      top: 17%;
      width: 57%;
    }

    &:nth-child(2) {
      right: 8%;
      top: -15%;
      width: 38%;
    }

    &:nth-child(3) {
      right: 12%;
      bottom: -10%;
      width: 57%;
    }
  }
}

.anchor {
  // transform: translate(100%, 0);
  // right: -10%;
  bottom: 450px;

  a {
    border: 0.5px solid #515151;
    margin: 5px 0;
    padding: 5px 40px;
    font-size: 15px;
  }

  .anchorActive,
  .exactActive {
    border: 0.5px solid #8ad8dd;
    background: #8ad8dd;
    color: #fff;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 12%;
      height: 100%;
      right: 0;
      top: 0;
      background-color: #ffffff;
    }
  }
}
</style>
