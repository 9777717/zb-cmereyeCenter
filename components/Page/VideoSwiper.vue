<script lang="ts" setup>
import { Pagination, Navigation } from 'swiper'
// 眼疾影片
const eyeDisease = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/040da0e4cbb6878a.png',
    title: '天氣轉變提防結膜炎',
    text: '轉天氣時，有些人會出現眼睛過敏徵狀，包括︰結膜充血、眼瞼紅腫及痕癢、多流眼水、畏光、分泌物增多等，十分影響日常生活。這些可能是季節性過敏性結膜炎引起的，本身有過敏體質，例如︰氣喘、過敏性鼻炎等，會更容易患上此種結膜炎。馬上去片',
    link: 'https://www.youtube.com/@cmersmileeyecenter6303',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
    title: '眼睛乾可以點解決？',
    text: '乾眼症是一種長期疾病，需要長期治療才能改善。患上乾眼症想舒緩病情，可以用暖毛巾熱敷眼睛。平日盡量少吃煎炸和食物，以及吃一些omega3補充劑魚肝油丸，可以令眼睛的油質分泌更健康，有助舒緩乾眼症的症狀。馬上去片了解更多啦！',
    link: 'https://www.youtube.com/@cmersmileeyecenter6303',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
    title: '眼睛乾可以點解決？',
    text: '乾眼症是一種長期疾病，需要長期治療才能改善。患上乾眼症想舒緩病情，可以用暖毛巾熱敷眼睛。平日盡量少吃煎炸和食物，以及吃一些omega3補充劑魚肝油丸，可以令眼睛的油質分泌更健康，有助舒緩乾眼症的症狀。馬上去片了解更多啦！',
    link: 'https://www.youtube.com/@cmersmileeyecenter6303',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/040da0e4cbb6878a.png',
    title: '天氣轉變提防結膜炎',
    text: '轉天氣時，有些人會出現眼睛過敏徵狀，包括︰結膜充血、眼瞼紅腫及痕癢、多流眼水、畏光、分泌物增多等，十分影響日常生活。這些可能是季節性過敏性結膜炎引起的，本身有過敏體質，例如︰氣喘、過敏性鼻炎等，會更容易患上此種結膜炎。馬上去片',
    link: 'https://www.youtube.com/@cmersmileeyecenter6303',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
    title: '眼睛乾可以點解決？',
    text: '乾眼症是一種長期疾病，需要長期治療才能改善。患上乾眼症想舒緩病情，可以用暖毛巾熱敷眼睛。平日盡量少吃煎炸和食物，以及吃一些omega3補充劑魚肝油丸，可以令眼睛的油質分泌更健康，有助舒緩乾眼症的症狀。馬上去片了解更多啦！',
    link: 'https://www.youtube.com/@cmersmileeyecenter6303',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
    title: '眼睛乾可以點解決？',
    text: '乾眼症是一種長期疾病，需要長期治療才能改善。患上乾眼症想舒緩病情，可以用暖毛巾熱敷眼睛。平日盡量少吃煎炸和食物，以及吃一些omega3補充劑魚肝油丸，可以令眼睛的油質分泌更健康，有助舒緩乾眼症的症狀。馬上去片了解更多啦！',
    link: 'https://www.youtube.com/@cmersmileeyecenter6303',
  },
]
const props = defineProps({
  eyeDisease: {
    type: [Array, Object, String],
    default: () => ({}),
  },
})
</script>

<template>
  <swiper
    :slides-per-view="2"
    :space-between="30"
    :centered-slides="false"
    :navigation="true"
    :modules="[Pagination]"
    class="mySwiper"
  >
    <swiper-slide
      v-for="(item, index) in props.eyeDisease || eyeDisease"
      :key="index"
    >
      <div class="videoList">
        <div><img :src="item.img" :alt="item.title" /></div>
        <div>{{ item.title }}</div>
        <div>{{ item.text }}</div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<style lang="scss" scoped>
.videoList {
  cursor: pointer;
  width: 440px;
  height: 430px;

  & > div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
    padding: 13px 9px 8px;
  }

  & > div:nth-child(2) {
    margin-top: 17px;
    font-family: 'NotoSansHK';
    font-style: normal;
    font-weight: 400;
    font-size: 24.608px;
    line-height: 35px;
    letter-spacing: 0.05em;
    color: #515151;
  }

  & > div:nth-child(3) {
    margin-right: 10px;
    margin-top: 9px;
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 350;
    font-size: 13.1828px;
    line-height: 26px;
    /* or 200% */

    text-align: justify;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #232323;
  }
}

:deep(.swiper-button-prev) {
  left: var(--swiper-navigation-sides-offset, 0px);
}

:deep(.swiper-button-next) {
  right: var(--swiper-navigation-sides-offset, 0px);
}

:deep(.swiper-button-prev)::after {
  color: #f2f2f2f2;
}

:deep(.swiper-button-next)::after {
  color: #f2f2f2f2;
}
</style>
