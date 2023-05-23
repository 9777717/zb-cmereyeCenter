<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '護眼宣傳片',
}))
// 眼疾影片
const eyeDisease = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/040da0e4cbb6878a.png',
    title: '天氣轉變提防結膜炎',
    text: '轉天氣時，有些人會出現眼睛過敏徵狀，包括︰結膜充血、眼瞼紅腫及痕癢、多流眼水、畏光、分泌物增多等，十分影響日常生活。這些可能是季節性過敏性結膜炎引起的，本身有過敏體質，例如︰氣喘、過敏性鼻炎等，會更容易患上此種結膜炎。馬上去片',
    link: 'https://youtu.be/0pN3E5ewLjE',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
    title: '眼睛乾可以點解決？',
    text: '乾眼症是一種長期疾病，需要長期治療才能改善。患上乾眼症想舒緩病情，可以用暖毛巾熱敷眼睛。平日盡量少吃煎炸和食物，以及吃一些omega3補充劑魚肝油丸，可以令眼睛的油質分泌更健康，有助舒緩乾眼症的症狀。馬上去片了解更多啦！',
    link: 'https://youtu.be/fM2cCC5zxWw',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
    title: '眼睛乾可以點解決？',
    text: '乾眼症是一種長期疾病，需要長期治療才能改善。患上乾眼症想舒緩病情，可以用暖毛巾熱敷眼睛。平日盡量少吃煎炸和食物，以及吃一些omega3補充劑魚肝油丸，可以令眼睛的油質分泌更健康，有助舒緩乾眼症的症狀。馬上去片了解更多啦！',
    link: 'https://youtu.be/fM2cCC5zxWw',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/040da0e4cbb6878a.png',
    title: '天氣轉變提防結膜炎',
    text: '轉天氣時，有些人會出現眼睛過敏徵狀，包括︰結膜充血、眼瞼紅腫及痕癢、多流眼水、畏光、分泌物增多等，十分影響日常生活。這些可能是季節性過敏性結膜炎引起的，本身有過敏體質，例如︰氣喘、過敏性鼻炎等，會更容易患上此種結膜炎。馬上去片',
    link: 'https://youtu.be/0pN3E5ewLjE',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
    title: '眼睛乾可以點解決？',
    text: '乾眼症是一種長期疾病，需要長期治療才能改善。患上乾眼症想舒緩病情，可以用暖毛巾熱敷眼睛。平日盡量少吃煎炸和食物，以及吃一些omega3補充劑魚肝油丸，可以令眼睛的油質分泌更健康，有助舒緩乾眼症的症狀。馬上去片了解更多啦！',
    link: 'https://youtu.be/fM2cCC5zxWw',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
    title: '眼睛乾可以點解決？',
    text: '乾眼症是一種長期疾病，需要長期治療才能改善。患上乾眼症想舒緩病情，可以用暖毛巾熱敷眼睛。平日盡量少吃煎炸和食物，以及吃一些omega3補充劑魚肝油丸，可以令眼睛的油質分泌更健康，有助舒緩乾眼症的症狀。馬上去片了解更多啦！',
    link: 'https://youtu.be/fM2cCC5zxWw',
  },
]
</script>

<template>
  <div>
    <div class="publicity">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/0a1c4d8feced8bdf.png"
            alt="護眼宣傳片"
          />
        </div>
        <div>
          <div>
            <div>護眼宣傳片</div>
            <div>promotional video</div>
          </div>
          <div>我們用心製作</div>
          <div>
            <div>透過拍攝訪問醫生</div>
            <div>希望令大眾更加了解眼疾</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>眼疾影片</div>
          <div class="videoBorder">
            <PageVideoSwiper :eye-disease="eyeDisease" />
          </div>
        </div>
        <div>
          <div>希瑪這一家</div>
          <div class="videoBorder household">
            <PageVideoSwiper :eye-disease="eyeDisease" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <PageInformation />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.publicity {
  & > div:nth-child(1) {
    margin-top: 102px;
    margin-left: 417px;
    display: flex;
    position: relative;
    flex-direction: column;

    & > div:nth-child(2) {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 66.65px;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 5;

      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 49.14px;
        line-height: 46px;
        text-align: center;
        letter-spacing: 0.2em;

        color: #ffffff;

        & > div:nth-child(2) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 44px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8ad8dd;
        }
      }

      & > div:nth-child(2) {
        margin-top: 34px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 60px;
        /* identical to box height, or 200% */

        text-align: right;
        letter-spacing: 0.3em;

        color: #ffffff;
      }

      & > div:nth-child(3) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        /* or 150% */

        text-align: center;
        letter-spacing: 0.3em;

        color: #ffffff;
      }
    }

    & > div:nth-child(1) {
      & > img {
        position: relative;
        z-index: 5;
      }
    }

    & > div:nth-child(1)::after {
      content: '';
      background: #f2f2f2;
      width: 1044px;
      height: 725px;
      position: absolute;
      right: 56px;
      bottom: -73.35px;
      z-index: 1;
    }
  }

  & > div:nth-child(2) {
    margin-top: 240px;
    margin-left: 450px;
    margin-bottom: 277px;

    & > div {
      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 35px;
        /* identical to box height, or 100% */

        letter-spacing: 0.05em;

        color: #515151;
      }
    }
  }
}

.videoBorder {
  width: 1190px;
  border-top: 1.75771px solid #8ad8dd;
  padding-top: 73px;
  padding-bottom: 63px;
  margin-top: 25px;
}

:deep(.swiper-wrapper) {
  & > div:nth-child(n) {
    & > div:nth-child(1) {
      margin: 0 75px;
    }
  }
}

.household {
  border-bottom: 1.75771px solid #8ad8dd;
}
</style>
