<script setup lang="ts">
const moveStep = 0
const swiperList = [
  {
    eqImgUrl:
      'http://static.cmereye.com/imgs/hkcmereye-newstyle/about/equipment1.jpg',
    eqName: 'Carl Zeiss Visumax全飛秒激光3.0系統',
    eqDes:
      '蔡司IOLMaster 700具有掃頻生物測量技術，建立在近20年的光學生物測量經驗的基礎上。憑藉全角膜曲率測量（TK），獲得專利的角膜到視網膜掃描顯示了貫穿整個眼睛的縱向切面的解剖細節。在白內障手術過程中，獲取一個參考圖像，並將其用於術中圖像的匹配。',
  },
  {
    eqImgUrl:
      'http://static.cmereye.com/imgs/hkcmereye-newstyle/about/equipment2.jpg',
    eqName: '德國蔡司掃頻OCT生物測量儀（IOL Master 700）',
    eqDes:
      '蔡司IOLMaster 700具有掃頻生物測量技術，建立在近20年的光學生物測量經驗的基礎上。憑藉全角膜曲率測量（TK），獲得專利的角膜到視網膜掃描顯示了貫穿整個眼睛的縱向切面的解剖細節。在白內障手術過程中，獲取一個參考圖像，並將其用於術中圖像的匹配。',
  },
  {
    eqImgUrl:
      'http://static.cmereye.com/imgs/hkcmereye-newstyle/about/equipment3.jpg',
    eqName: 'Icare回彈式眼壓計',
    eqDes:
      '蔡司IOLMaster 700具有掃頻生物測量技術，建立在近20年的光學生物測量經驗的基礎上。憑藉全角膜曲率測量（TK），獲得專利的角膜到視網膜掃描顯示了貫穿整個眼睛的縱向切面的解剖細節。在白內障手術過程中，獲取一個參考圖像，並將其用於術中圖像的匹配。',
  },
  {
    eqImgUrl:
      'http://static.cmereye.com/imgs/hkcmereye-newstyle/about/equipment4.jpg',
    eqName: '日本尼德克綜合電腦驗光儀',
    eqDes:
      '蔡司IOLMaster 700具有掃頻生物測量技術，建立在近20年的光學生物測量經驗的基礎上。憑藉全角膜曲率測量（TK），獲得專利的角膜到視網膜掃描顯示了貫穿整個眼睛的縱向切面的解剖細節。在白內障手術過程中，獲取一個參考圖像，並將其用於術中圖像的匹配。',
  },
  {
    eqImgUrl:
      'http://static.cmereye.com/imgs/hkcmereye-newstyle/about/equipment5.jpg',
    eqName: '日本尼德克手持綜合電腦驗光儀',
    eqDes:
      '蔡司IOLMaster 700具有掃頻生物測量技術，建立在近20年的光學生物測量經驗的基礎上。憑藉全角膜曲率測量（TK），獲得專利的角膜到視網膜掃描顯示了貫穿整個眼睛的縱向切面的解剖細節。在白內障手術過程中，獲取一個參考圖像，並將其用於術中圖像的匹配。',
  },
  {
    eqImgUrl:
      'http://static.cmereye.com/imgs/hkcmereye-newstyle/about/equipment6.jpg',
    eqName: '天狼星三維角膜地形圖及眼前節分析系統',
    eqDes:
      '蔡司IOLMaster 700具有掃頻生物測量技術，建立在近20年的光學生物測量經驗的基礎上。憑藉全角膜曲率測量（TK），獲得專利的角膜到視網膜掃描顯示了貫穿整個眼睛的縱向切面的解剖細節。在白內障手術過程中，獲取一個參考圖像，並將其用於術中圖像的匹配。',
  },
]
// const swiperOption: {
// loop: true,
// slidesPerView: 4,
// spaceBetween: 40,
// navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
// },
// }
const show = false
</script>
<template>
  <div id="medicalEquipment" class="mt-28">
    <AboutTitle :zh-title="'中心設備'" :en-ttitle="'MEDICAL EQUIPMENT'" />

    <div class="mainText">
      <!-- 轮播图 -->
      <!-- <div v-about-us-add:mySwiper="swiperOption" ref="mySwiper" class="about-us-add-container mt-14">
                <div class="about-us-add-wrapper">
                    <div class="about-us-add-slide relative" v-for="(item, index) in swiperList" ref="">
                        <img :src="item.eqImgUrl" alt="" class="w-full">
                        <p class=" pr-3">{{ item.eqName }}</p>

                        <div class="infobox bg-white bottom-0">
                            <p class=" text-justify indent45">{{ item.eqDes }}</p>
                            <a href="#" class=" text-center w-full block mt-7">資料及圖片來源： Carl Zeiss</a>
                        </div>
                    </div>
                </div>

                <div class="about-us-add-button-prev"></div>
                <div class="about-us-add-button-next"></div>
            </div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
#medicalEquipment {
  width: 70%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: start;
  position: relative;

  margin-bottom: 50%;

  &::before {
    content: '';
    position: absolute;
    width: 130%;
    height: 240%;
    right: 10%;
    top: -20%;
    background: #f2f2f2;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: #fff;
    z-index: 5;
    transform: translate(-140%, 0px);
  }
}

.mainText {
  width: 100%;
  position: relative;

  &::before {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: #f2f2f2;
    transform: translate(-100%, 0px);
    z-index: 4;
  }
}
</style>

<style lang="scss">
.infobox {
  display: none;
  position: absolute;
  bottom: 0;
  left: -75%;
  transform: translate(0%, 115%);
  width: 250%;
  padding: 20% 20%;

  // &::before {
  //     content: "";
  //     position: absolute;
  //     top: -30px;
  //     left: 50%;
  //     transform: translate(-17.5px, 0);
  //     width: 0;
  //     height: 0;
  //     border-style: solid;
  //     border-width: 0 17.5px 30.3px 17.5px;
  //     border-color: transparent transparent #fff transparent;
  // }

  &::before {
    content: '';
    position: absolute;
    width: 65px;
    height: 65px;
    border: 4px solid #9d9b9b;
    border-right: none;
    border-bottom: none;
    top: -15px;
    left: -15px;
    border-radius: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 65px;
    height: 65px;
    border: 4px solid #9d9b9b;
    border-left: none;
    border-top: none;
    bottom: -15px;
    right: -15px;
    border-radius: 2px;
  }
}

#medicalEquipment {
  .about-us-add-container {
    overflow: unset;
    z-index: 3;

    .about-us-add-slide-next .infobox {
      display: block;
    }
  }

  .about-us-add-button-prev,
  .about-us-add-button-next {
    background: #8ad8dd;
    color: #fff;
    width: 30px;
    height: 50px;
    top: 35%;
  }

  .about-us-add-button-prev {
    left: 0px;
  }

  .about-us-add-button-next {
    right: 0;
  }

  .about-us-add-button-next:after,
  .about-us-add-button-prev:after {
    font-size: 25px;
  }

  .about-us-add-button-next.about-us-add-button-disabled,
  .about-us-add-button-prev.about-us-add-button-disabled {
    opacity: 1;
  }
}
</style>
