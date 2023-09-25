<script lang="ts" setup>
import { useRoute } from 'vue-router'
const router = useRoute()
// compiler macro
definePageMeta({
  layout: 'page',
})

// useHead({
//   script: [
//     { 
//       src: 'https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&lng=big5'
//     }
//   ],
// })

const locale = useState<string>('locale.setting')

function chat(p?: string): void {
  var host = window.location.host;
  p = p ? p : host;
  // console.log(window)
  // openZoosUrl('chatwin', `&e=${host}[${p}]`)
  // wangyePCyoucezixun
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
      <a class="topitem ga-pc-right-ljyy" id="ga-pc-right-ljyy" href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=7f3c58ea65c34d9d82c1f6455384212f&lng=big5&sid=cd5457bae7eb4c9db0534553310cb509&p=https%3A//hkcmereye.com/&rf1=&rf2=&msg=&e=hkcmereye.com[youce-goutong]&d=1692676040714">
        <img class="ga-pc-right-ljyy" v-if="locale !== 'en'" id="ga-pc-right-ljyy" src="https://static.cmereye.com/imgs/2023/07/5e1ee955594fae19.png" alt="">
        <img class="ga-pc-right-ljyy" v-if="locale === 'en'" id="ga-pc-right-ljyy" src="https://static.cmereye.com/imgs/2023/09/a216a8f766bc0d89.png" alt="">
      </a>
      <a class="ocitem ga-pc-right-zxcx" id="ga-pc-right-zxcx" href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=149cdac9b31444cd81512a1ce54d1ae9&lng=big5&sid=6ac3c6650aef4b099f1018a3cd8a7887&p=https//www.hkcmereye.com/&rf1=&rf2=&msg=&e=www.hkcmereye.com[youce-goutong]&d=1692675682853">
        <div class="ga-pc-right-zxcx">
          <div class="ga-pc-right-zxcx">
            <div class="ga-pc-right-zxcx">{{$t('components.content.onlinContact.chatNow')}}</div>
            <div class="ga-pc-right-zxcx">{{$t('components.content.onlinContact.chatNow3')}}</div>
          </div>
          <div class="ga-pc-right-zxcx"><img class="ga-pc-right-zxcx" src="https://static.cmereye.com/imgs/2023/07/80e19816d1bcd08e.png" alt=""></div>
        </div>
      </a>
      <a class="ocitem ga-pc-right-WhatsApp" id="ga-pc-right-WhatsApp" href="https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2" target="_blank">
        <div class="ga-pc-right-WhatsApp">
          <div class="ga-pc-right-WhatsApp">
            <div class="ga-pc-right-WhatsApp">WhatsApp</div>
            <div class="ga-pc-right-WhatsApp">9345 1508</div>
          </div>
          <div class="ga-pc-right-WhatsApp"><img class="ga-pc-right-WhatsApp" src="https://static.cmereye.com/imgs/2023/07/b5c111de8fe784c4.png" alt=""></div>
        </div>
      </a>
      <a class="ocitem ga-pc-right-ljzd" id="ga-pc-right-ljzd" href="tel:+(852)3956 2025">
        <div class="ga-pc-right-ljzd">
          <div class="ga-pc-right-ljzd">
            <div class="ga-pc-right-ljzd">{{$t('components.content.onlinContact.callNow')}}</div>
            <div class="ga-pc-right-ljzd">(852) 3956 2026</div>
          </div>
          <div class="ga-pc-right-ljzd"><img class="ga-pc-right-ljzd" src="https://static.cmereye.com/imgs/2023/07/eb96c8fed21aa580.png" alt=""></div>
        </div>
      </a>
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
      display: block;
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
      display: block;
      &>div{
        display: flex;
        height: 100%;
        transition: all .3s;
        &>div:nth-of-type(1){
          text-align: center;
          flex: 1;
          line-height: 34px;
          position: relative;
          transition: all .3s;
          border-right: 1px solid rgba(143, 210, 228, .5);
          transition: all .3s;
          &>div{
            position: relative;
            z-index: 2;
            font-size: 18px;
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
      &:nth-of-type(2){
        &>div{
          &>div:nth-of-type(1){
            &>div:nth-of-type(2){
              font-size: 16px;
            }
          }
        }
      }
      &:nth-of-type(4){
        &>div{
          &>div:nth-of-type(1){
            &>div:nth-of-type(2){
              font-size: 14px;
            }
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
              margin-top: -1px;
              padding-top: 0px;
              transform: translateY(-100%);
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
@media (min-width: 768px) and (max-width: 1920px){
  .onlinContact{
    bottom: 100px;
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .onlinContact {
    // top: 700px;
    right: 12%;
  }
}
</style>
