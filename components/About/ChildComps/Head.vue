<script setup lang="ts">
const anchorList = [
  {
    anchorName: '中心簡介',
    anchorLink: '/about-us#centreIntro',
  },
  {
    anchorName: '發展歷程',
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
    anchorName: '企業榮譽',
    anchorLink: '/about-us#awards',
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
  <div class="aboutHead">
    <div class="title">關於我們</div>
    <div class="imgBox">
      <img
        src="https://static.cmereye.com/imgs/2023/05/042c0e54e896002f.jpg"
        alt=""
      />
      <img
        src="https://static.cmereye.com/imgs/2023/05/fcbe60b94457087b.png"
        alt=""
      />
      <img
        src="https://static.cmereye.com/imgs/2023/05/4bcb9773a45f1d35.jpg"
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
          {{ item.anchorName }}
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
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr;
  left: 680px;
  top: -105px;
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
    left: -40px;
    top: 3px;
    text-transform: uppercase;

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
  position: relative;
  background: #f2f2f2;
  width: 41.9%;
  height: 640px;
  margin-left: 752px;
  margin-top: 203px;

  img {
    position: absolute;

    &:nth-child(1) {
      left: -6.8%;
      top: 17.5%;
    }

    &:nth-child(2) {
      right: 9.18%;
      top: -13.8%;
    }

    &:nth-child(3) {
      right: 12%;
      bottom: -8.14%;
    }
  }
}

.dow {
  position: absolute;
  left: 71px;
}

.anchor {
  top: 510px;

  & > div {
    background: #fff;
  }

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
