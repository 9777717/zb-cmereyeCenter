<script setup lang="ts">
const anchorList = ref([
  {
    anchorName: 'pages.about_us.about_us',
    anchorLink: '/about-us#centreIntro',
  },
  {
    anchorName: 'pages.about_us.development_course',
    anchorLink: '/about-us#history',
  },
  // {
  //   anchorName: '企業願景',
  //   anchorLink: '/about-us#corporateVision',
  // },
  // {
  //   anchorName: '中心設備',
  //   anchorLink: '/about-us#medicalEquipment',
  // },
  {
    anchorName: 'pages.about_us.enterprise_awards',
    anchorLink: '/about-us#awards',
  },
  {
    anchorName: 'pages.process_cost.cost',
    anchorLink: '/process-and-cost',
  },
  {
    anchorName: 'pages.process_cost.process',
    anchorLink: '/process-and-cost#process',
  },
])
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
  <div class="aboutHead maxCon">
    <div class="title">{{ $t('pages.about_us.about_us') }}</div>
    <div class="imgBox">
      <img
        src="https://static.cmereye.com/imgs/2023/06/8095216b29f693c7.jpg"
        alt=""
      />
      <img
        src="https://static.cmereye.com/imgs/2023/05/fcbe60b94457087b.png"
        alt=""
      />
      <img
        src="https://static.cmereye.com/imgs/2023/06/d72dad915e01bf72.jpg"
        alt=""
      />
    </div>
    <div class="dow">
      <svg
        width="9"
        height="144"
        viewBox="0 0 9 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1V143L7.5 130.5"
          stroke="#2958A3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
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
          {{ $t(item.anchorName) }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.aboutHead {
  z-index: 99;
  position: relative;
}

.title {
  position: absolute;
  top: 102px;
  left: 100px;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
  // left: 24.416667%;
  // top: -105px;
  font-family: 'Noto Sans HK';
  font-style: normal;
  font-weight: 400;
  font-size: 40.1431px;
  line-height: 46px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #515151;

  &::after {
    content: 'About Us';
    position: absolute;
    // left: -80.08333%;
    bottom: 0;
    text-transform: uppercase;
    left: -50px;
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 500;
    font-size: 23.0172px;
    line-height: 55px;
    /* identical to box height, or 238% */

    text-align: center;
    letter-spacing: 0.1em;

    color: #8ad8dd;
  }
}

.imgBox {
  width: 100%;
  max-width: 606px;
  position: relative;
  background: #f2f2f2;
  // width: 41.9%;
  height: 840px;
  margin-bottom: 30px;
  margin-left: 30%;
  // padding-top: 200px;

  img {
    position: absolute;

    &:nth-child(1) {
      left: -146px;
      top: 350px;
    }

    &:nth-child(2) {
      right: -30px;
      top: 130px;
    }

    &:nth-child(3) {
      right: 20px;
      bottom: -50px;
    }
  }
}

.dow {
  position: absolute;
  left: 3.69792%;
}

.anchor {
  top: 310px;

  a {
    border: 0.5px solid #515151;
    margin: 5px 0;
    padding: 10px 40px 5px;
    font-size: 15px;
    background: #ffffff;
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
