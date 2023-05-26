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
    <AboutTitle
      :zh-title="$t('pages.about_us.awards.awards')"
      :en-ttitle="'awards'"
      class="title"
    />
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
