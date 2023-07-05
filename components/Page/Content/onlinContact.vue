<script lang="ts" setup>
import { useRoute } from 'vue-router'

const router = useRoute()
// compiler macro
definePageMeta({
  layout: 'page',
})
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}
const toquery = () =>{
  location.href = 'tel:+(852) 3956 2026'
}
  
const route = useRoute()
const rt = ref(route)
</script>

<template>
  <div
    v-if="router.name !== 'index'"
    class="onlinContact"
    :class="[
      rt.name === 'medical-service-eyeOrthopaedicDisease'
        ? 'onlinContact_top'
        : 'onlinContact',
    ]">
    <div>
      <div class="topitem">
        <img src="https://static.cmereye.com/imgs/2023/07/5e1ee955594fae19.png" alt="">
      </div>
      <div class="ocitem" @click="toquery">
        <div>
          <div><div>在線查詢</div></div>
          <div><img src="https://static.cmereye.com/imgs/2023/07/80e19816d1bcd08e.png" alt=""></div>
        </div>
      </div>
      <div class="ocitem" @click="goWhatsApp">
        <div>
          <div><div>WhatApp</div></div>
          <div><img src="https://static.cmereye.com/imgs/2023/07/b5c111de8fe784c4.png" alt=""></div>
        </div>
      </div>
      <div class="ocitem">
        <div>
          <div><div>立即致電</div></div>
          <div><img src="https://static.cmereye.com/imgs/2023/07/eb96c8fed21aa580.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.onlinContact{
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 83px;
  // top: 520px;
  bottom: 150px;
  &>div{
    .topitem{
      width: 160px;
      img{
        width: 100%;
        cursor: pointer;
        // animation: ss 3s linear infinite;
        transform-origin: bottom center;
        &:hover{
          transform-origin: bottom center;
          animation: ss 3s linear infinite;
        }
      }
    }
    .ocitem{
      width: 160px;
      height: 38px;
      border: 2px solid #8FD2E4;
      margin-top: 20px;
      border-radius: 5px;
      cursor: pointer;
      overflow: hidden;
      transition: all .3s;
      background: #fff;
      &>div{
        display: flex;
        height: 100%;
        transition: all .3s;
        &>div:nth-of-type(1){
          text-align: center;
          flex: 1;
          line-height: 38px;
          position: relative;
          transition: all .3s;
          border-right: 1px solid rgba(143, 210, 228, .5);
          &>div{
            position: relative;
            z-index: 2;
            font-size: 20px;
            padding-top: 2px;
            color: #8FD2E4;
            transition: all .3s;
          }
          &::before{
            content: "";
            width: 100%;
            height: 51%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(255, 255, 255, 1);
            z-index: 1;
            transition: all .3s;
          }
          &::after{
            content: "";
            width: 100%;
            height: 51%;
            position: absolute;
            bottom: 0;
            left: 0;
            background: rgba(239, 239, 239, 1);
            z-index: 1;
            transition: all .3s;
          }
        }
        &>div:nth-of-type(2){
          width: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-left: 1px solid rgba(143, 210, 228, 1);
          position: relative;
          transition: all .3s;
          &::before{
            content: "";
            width: 100%;
            height: 51%;
            position: absolute;
            top: 0;
            left: 0;
            background: rgba(143, 210, 228, .5);
            z-index: 1;
          }
          &::after{
            content: "";
            width: 100%;
            height: 51%;
            position: absolute;
            bottom: 0;
            left: 0;
            background: #8FD2E4;
            z-index: 1;
          }
          img{
            position: relative;
            width: 60%;
            z-index: 2;
          }
        }
      }
      &:hover{
        border: 2px solid #fff;
        &>div{
          border: 1px solid #8FD2E4;
          &>div:nth-of-type(1){
            &>div{
              color: #fff;
              padding-top: 0px;
            }
            &::before{
              background: rgba(143, 210, 228, .5);
            }
            &::after{
              background: #8FD2E4;
            }
          }
        }
      }
    }
  }
}
.onlinContact_top{
  bottom: 50px;
  &>div{
    .topitem{
      // width: 160px;
      width: 80%;
      margin: 0 auto;
    }
    .ocitem{
      margin-top: 10px;
    }
  }
}
@keyframes ss {
  0%{
    transform: rotate(0deg);
  }
  33%{
    transform: rotate(10deg);
  }
  66%{
    transform: rotate(-10deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .onlinContact {
    // top: 700px;
    right: 12%;
  }
  .onlinContact_top {
    // top: 900px;
  }
}
</style>
