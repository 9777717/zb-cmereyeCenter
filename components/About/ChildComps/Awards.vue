<script setup lang="ts">
import { Autoplay } from 'swiper'

import { ref, onMounted } from 'vue'
const awardsList = [
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards1.jpg',
    year: '2020-2021',
    des: '香港星級品牌企業獎',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards2.jpg',
    year: '2020/2021',
    des: '商界展關懷',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards3.jpg',
    year: '2020',
    des: '亞洲最佳價值服務大獎',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards4.jpg',
    year: '2020',
    des: '香港旅遊業十優推介',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards5.jpg',
    year: '2020',
    des: '香港最優秀企業大獎',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards6.jpg',
    year: '2020',
    des: '香港服務名牌',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards7.jpg',
    year: '2019',
    des: '香港健康產業大獎',
  },
]
</script>
<template>
  <div id="awards" class="">
    <AboutTitle :zh-title="'企業榮譽'" :en-ttitle="'awards'" class="title" />
    <div v-if="awardsList.length" class="awardslide">
      <swiper
        :loop="true"
        :space-between="30"
        :centered-slides="true"
        :modules="[Autoplay]"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        class="mySwiper"
      >
        <swiper-slide v-for="(item, index) in awardsList" :key="index">
          <div class="brand">
            <div><img :src="item.imgUrl" :alt="item.des" /></div>
            <div>
              <div>{{ item.year }}</div>
              <div>{{ item.des }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style scoped lang="scss">
#awards {
  margin-left: 650px;
  margin-top: 253px;
  margin-bottom: 160px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;

  & > .title {
    margin-left: -25px;
  }

  & > .awardslide {
    width: 100%;
    overflow: hidden;
  }

  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:nth-child(1) {
      width: 224px;
      height: 224px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;

      & > div:nth-child(1) {
        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        /* identical to box height, or 133% */

        letter-spacing: 0.05em;
        text-transform: uppercase;

        color: #8ad8dd;
      }

      & > div:nth-child(2) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        /* identical to box height, or 133% */

        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #515151;
      }
    }
  }
}

:deep(.swiper) {
  width: 224px;
  overflow: initial;
  margin-left: auto;
  margin-right: 0;
}
</style>
