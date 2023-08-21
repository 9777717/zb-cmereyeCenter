<script lang="ts" setup>
import { Grid,Navigation } from 'swiper';
import { defineProps } from "vue";
defineProps({
  str:{
    type: String,
    default: ''
  }
})
let windowWidth = ref(1920)

const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})
</script>

<template>
  <div class="feedback">
        <div class="feedback-in">
          <div class="feedback-in-title">
            <AboutTitle
              :zh-title="'客戶評分'"
              :en-ttitle="'FEEDBACK'"
              class="title"
            />
          </div>
        </div>
        <div class="feedback-swiper">
          <swiper
            :slidesPerView="windowWidth>768?3:1"
            :grid="{
              rows: 2,
            }"
            :navigation="true"
            :spaceBetween="30"
            :modules="[Grid,Navigation]"
            class="feedbackSwiper"
          >
            <swiper-slide v-for="feedback in 25" :key="feedback">
              <img :src="`https://static.cmereye.com/static/hkcmereye/imgs/${feedback>=10? feedback: '0'+String(feedback)}.png`" alt="">
            </swiper-slide>
          </swiper>
        </div>
      </div>
</template>


<style lang="scss" scoped>
.feedback{
  width: 100%;
  max-width: 960px;
  margin: 93px auto 0;
  &-in{
    &-title{
      :deep(h1){
        width: max-content !important;
      }
    }
    margin-bottom: 65px;
  }
  &-swiper{
    .feedbackSwiper{
      padding: 0 70px;
    }
    :deep(.swiper-wrapper){
      // width: 100% !important;
      flex-direction: row !important;
    }
    :deep(.swiper-slide){
      margin-top: 0px !important;
      margin-bottom: 30px !important;
    }
    :deep(.swiper-button-prev:after) {
      background: #8ad8dd;
      color: #fff;
      padding: 5px;
      width: 34px;
      height: 52px;
      padding-top: 8px;
      font-size: 24px;
      line-height: 38px;
      text-align: center;
    }

    :deep(.swiper-button-next::after) {
      background: #8ad8dd;
      color: #fff;
      padding: 5px;
      width: 34px;
      height: 52px;
      padding-top: 8px;
      font-size: 24px;
      line-height: 38px;
      text-align: center;
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {

}
@media screen and (max-width: 768px) {
  .feedback{
    &-in{
      &-title{
        padding-left: 30px;
      }
    }
  }
}
</style>