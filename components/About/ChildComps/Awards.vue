<template>
  <div id="awards" class="">
    <AboutComCompsAboutTitle :zh-title="'企業榮譽'" :en-ttitle="'awards'" />
    <div class="mainText">
      <div
        ref="mySwiper2"
        v-swiper:mySwiper2="swiperOption2"
        class="swiper-container mt-14"
      >
        <div class="swiper-wrapper">
          <div
            v-for="(item, index) in awardsList"
            :key="index"
            ref=""
            class="swiper-slide relative"
          >
            <div class="imgBox flex items-center justify-center">
              <img :src="item.imgUrl" alt="" />
            </div>
            <p class="color1 year en-font text-center">{{ item.year }}</p>
            <p class="des text-center">{{ item.des }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
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
const swiperOption2 = {
  loop: true,
  autoplay: {
    delay: 1,
    reverseDirection: false,
    disableOnInteraction: false,
  },
  slidesPerView: 4,
  spaceBetween: 0,
  centeredSlides: true,
  freeMode: true,
  speed: 5000,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}
const mySwiper2 = ref<any>()
onMounted(() => {
  // const this_swiper = mySwiper2.value.swiper
  // this_swiper.$wrapperEl[0].style['transition-timing-function'] = 'linear'
  // this_swiper.el.onmouseover = function () {
  //     this_swiper.autoplay.stop()
  // }
  // this_swiper.el.onmouseout = function () {
  //     this_swiper.autoplay.start();
  // }
})
</script>
<style scoped lang="scss">
#awards {
  width: 75%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: start;
}

.mainText {
  width: 100%;

  .imgBox {
    width: 100%;
    height: 220px;
  }
}
</style>

<style lang="scss">
#awards {
  .swiper-wrapper {
    align-items: center;

    ::v-deep .swiper-container-free-mode > .swiper-wrapper {
      -webkit-transition-timing-function: linear;
      /*之前是ease-out*/
      -moz-transition-timing-function: linear;
      -ms-transition-timing-function: linear;
      -o-transition-timing-function: linear;
      transition-timing-function: linear;
      margin: 0 auto;
    }
  }

  .swiper-slide {
  }
}
</style>
