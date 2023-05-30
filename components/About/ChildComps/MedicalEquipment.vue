<script setup lang="ts">
import { Navigation, Virtual } from 'swiper'
const swiperList = [
  {
    eqImgUrl:
      'http://static.cmereye.com/imgs/hkcmereye-newstyle/about/equipment1.jpg',
    eqName: 'pages.about_us.equipment.equipment_name.equipment_name_1',
    eqDes: 'pages.about_us.equipment.equipment_des.equipment_des_1',
  },
  {
    eqImgUrl:
      'http://static.cmereye.com/imgs/hkcmereye-newstyle/about/equipment2.jpg',
    eqName: 'pages.about_us.equipment.equipment_name.equipment_name_2',
    eqDes: 'pages.about_us.equipment.equipment_des.equipment_des_2',
  },
  {
    eqImgUrl:
      'http://static.cmereye.com/imgs/hkcmereye-newstyle/about/equipment3.jpg',
    eqName: 'pages.about_us.equipment.equipment_name.equipment_name_3',
    eqDes: 'pages.about_us.equipment.equipment_des.equipment_des_3',
  },
  {
    eqImgUrl:
      'http://static.cmereye.com/imgs/hkcmereye-newstyle/about/equipment4.jpg',
    eqName: 'pages.about_us.equipment.equipment_name.equipment_name_4',
    eqDes: 'pages.about_us.equipment.equipment_des.equipment_des_4',
  },
  {
    eqImgUrl:
      'http://static.cmereye.com/imgs/hkcmereye-newstyle/about/equipment5.jpg',
    eqName: 'pages.about_us.equipment.equipment_name.equipment_name_5',
    eqDes: 'pages.about_us.equipment.equipment_des.equipment_des_5',
  },
  {
    eqImgUrl:
      'http://static.cmereye.com/imgs/hkcmereye-newstyle/about/equipment6.jpg',
    eqName: 'pages.about_us.equipment.equipment_name.equipment_name_6',
    eqDes: 'pages.about_us.equipment.equipment_des.equipment_des_6',
  },
]
const show = false
</script>
<template>
  <div id="medicalEquipment">
    <AboutTitle
      :zh-title="$t('pages.about_us.equipment_centre')"
      :en-ttitle="'MEDICAL EQUIPMENT'"
      class="title"
    />

    <!-- 轮播图 -->
    <div class="mainText">
      <swiper
        :modules="[Navigation, Virtual]"
        :slides-per-view="3"
        :centered-slides="true"
        :space-between="30"
        :pagination="{
          type: 'fraction',
        }"
        :navigation="true"
        :virtual="true"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(slideContent, index) in swiperList"
          :key="index"
          :virtual-index="index"
        >
          <img
            :src="slideContent.eqImgUrl"
            :alt="`${$t(slideContent.eqName)}`"
          />
          <p class="info pr-3">{{ $t(slideContent.eqName) }}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div>
      <div>
        <svg
          width="52"
          height="53"
          viewBox="0 0 52 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="2"
            y1="51"
            x2="2"
            y2="3"
            stroke="#9D9B9B"
            stroke-width="4"
            stroke-linecap="round"
          />
          <line
            x1="2"
            y1="2"
            x2="50"
            y2="2"
            stroke="#9D9B9B"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div>
        {{ $t('pages.about_us.equipment.equipment_des.equipment_des_1') }}
        <div>資料及圖片來源： Carl Zeiss</div>
      </div>
      <div>
        <svg
          width="52"
          height="53"
          viewBox="0 0 52 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="50"
            y1="2"
            x2="50"
            y2="50"
            stroke="#9D9B9B"
            stroke-width="4"
            stroke-linecap="round"
          />
          <line
            x1="50"
            y1="51"
            x2="2"
            y2="51"
            stroke="#9D9B9B"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#medicalEquipment {
  margin-top: 130px;
  margin-left: 14.0625%;
  width: 63.7%;
  height: 770px;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  position: relative;
  background: #f2f2f2;

  & > div:nth-child(3) {
    position: relative;
    margin: auto;
    margin-top: 100px;
    margin-left: 21.77083%;
    width: 16.82292%;
    height: 220px;
    background-color: #fff;

    & > div:nth-child(2) {
      box-sizing: border-box;
      padding: 30px;
      padding-bottom: 20px;

      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      /* or 167% */

      text-align: justify;
      letter-spacing: 0.1em;
      text-indent: 28px;
      text-transform: uppercase;

      color: #515151;

      & > div {
        margin-top: 20px;
      }
    }

    & > div:last-child,
    div:first-child {
      position: absolute;
    }

    & > div:first-child {
      top: -12px;
      left: -12px;
    }

    & > div:last-child {
      right: -12px;
      bottom: -12px;
    }
  }
}

.swiper {
  margin-left: 12.65625%;
  overflow: revert;
}

:deep(.swiper-slide) {
  width: 10.416667% !important;
  height: 200px;
}

:deep(.swiper-button-prev:after) {
  background: #8ad8dd;
  color: #fff;
  padding: 5px;
  width: 100%;
  height: 58px;
  padding-top: 8px;
}

:deep(.swiper-button-next::after) {
  background: #8ad8dd;
  color: #fff;
  padding: 5px;
  width: 100%;
  height: 58px;
  padding-top: 8px;
}

:deep(.swiper-button-next) {
  top: 50%;
  right: 60px;
}

:deep(.swiper-button-prev) {
  top: 50%;
  left: 3px;
}

.title {
  margin-left: 12.3958%;
  margin-top: -22px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.info {
  white-space: pre-wrap !important;
  margin-top: 10px;
}

.mainText {
  width: 100%;
  position: relative;

  & > P {
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    /* or 133% */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #515151;
  }

  & > img {
    width: 100%;
  }
}
</style>
