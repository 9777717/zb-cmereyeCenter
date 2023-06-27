<script setup lang="ts">
import { Autoplay } from 'swiper'
const awardsList = [
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards1.jpg',
    year: 'pages.about_us.awards.awards_year_1',
    des: 'pages.about_us.awards.awards_des_1',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards2.jpg',
    year: 'pages.about_us.awards.awards_year_2',
    des: 'pages.about_us.awards.awards_des_2',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards3.jpg',
    year: 'pages.about_us.awards.awards_year_3',
    des: 'pages.about_us.awards.awards_des_3',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards4.jpg',
    year: 'pages.about_us.awards.awards_year_4',
    des: 'pages.about_us.awards.awards_des_4',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards5.jpg',
    year: 'pages.about_us.awards.awards_year_5',
    des: 'pages.about_us.awards.awards_des_5',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards6.jpg',
    year: 'pages.about_us.awards.awards_year_6',
    des: 'pages.about_us.awards.awards_des_6',
  },
  {
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/about/awards7.jpg',
    year: 'pages.about_us.awards.awards_year_7',
    des: 'pages.about_us.awards.awards_des_7',
  },
]
</script>
<template>
  <div id="awards" class="">
    <div class="awards-title">
      <AboutTitle
        :zh-title="$t('pages.about_us.awards.awards')"
        :en-ttitle="'awards'"
        class="title"
      />
    </div>
    <div v-if="awardsList.length" class="awardslide">
      <swiper
        :space-between="40"
        :slides-per-view="4"
        :modules="[Autoplay]"
        :loop="true"
        :autoplay="{ delay: 0 }"
        speed="3000"
      >
        <swiper-slide
          v-for="(item, index) in awardsList"
          :key="index"
          class="ccSwiper-slide"
        >
          <div class="brand">
            <div><img :src="item.imgUrl" :alt="item.des" /></div>
            <div>
              <div>{{ $t(item.year) }}</div>
              <div>{{ $t(item.des) }}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style scoped lang="scss">
#awards {
  width: 100%;
  max-width: 1080px;
  margin: 253px auto 160px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  .awards-title {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    :deep(h1) {
      text-align: left;
    }
  }

  & > .awardslide {
    width: 100%;
    // overflow: hidden;
  }

  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    & > div:nth-child(1) {
      // width: 224px;
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

:deep(.ccSwiper > .swiper-wrapper) {
  transition-timing-function: linear;
}
</style>
