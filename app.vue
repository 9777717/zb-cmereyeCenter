<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'
AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
const app = useAppConfig() as AppConfigInput
const { t } = useLang()
useHead({
  title: app.name,
  titleTemplate: `%s - ${t('app.title')}`,
  meta(){
    return [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // {
      //   hid: 'addDesc',
      //   name: 'description',
      //   content: t('tdk.app.desc'),
      // }
    ]
  },
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
})
let cookieBoxShow = ref(false)
const handleSetCookie = () =>{
  cookieBoxShow.value = false
  localStorage.setItem('userCookie','1');
}
var pageLoading = ref(true)
onMounted(()=>{
  if(window.location.pathname.includes('/en/')){
    locale.value = 'en'
  }
  try{
    let getCookie = localStorage.getItem('userCookie');
    if(!getCookie){
      cookieBoxShow.value = true
    }
  }catch(e){
    
  }
  // setTimeout(()=>{
  //   pageLoading.value = false
  // },2000)
})
</script>

<template>
  <Html class="light" :lang="locale">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 overscroll-y-none"
    >
      <!-- <div class="loading" :class="{'is-page-loading': !pageLoading}">
        <div class="loading-in">LOADING</div>
      </div> -->
      <NuxtLayout>
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
        <div v-if="cookieBoxShow" :class="['cookieBox']" @click="handleSetCookie">
          <div>我們使用 Cookies 和其他形式的網站導航信息為您提供更好的瀏覽體驗、分析網站流量、個性化內容並提供有針對性的廣告。 在我們的隱私政策中閱讀有關我們如何使用
                Cookies的信息。如果您繼續使用本網站，即表示您同意我們使用 Cookies。</div>
          <div>全部接受</div>
          <div>X</div>
        </div>
      </NuxtLayout>
    </Body>
  </Html>
</template>
<style lang="scss">
@keyframes eyeAnima{
  0%{
    border-radius: 0;
    height: 0;
  }
  24%{
    border-radius: 100%;
    height: 20vh;
  }
  48%{
    border-radius: 0;
    height: 0;
  }
  72%{
    width: 50%;
    height: 50vh;
    border-radius: 100%;
    background: radial-gradient(#fff,transparent 70%);
  }
  100%{
    width: 200%;
    height: 200%;
    background: radial-gradient(#fff,transparent 200%);
  }
}
@keyframes eyeShow {
  100%{
    opacity: 0;
    display: none;
  }
}
.loading{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  background: #fff;
  z-index: 99999999999;
  overflow: hidden;
  background: linear-gradient(-45deg,rgba(114, 158, 230, 1),rgba(76, 209, 179, 1),rgba(76, 127, 209, 1));
  // animation: eyeShow 1s forwards;
  // animation-delay: 4s;
  &-in{
    width: 50%;
    height: 0;
    color: rgba(41, 88, 163,1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    letter-spacing: 10px;
    background: radial-gradient(#fff,transparent 70%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    // animation: eyeAnima 4s forwards ease-in;
    // overflow: hidden;
    transition: all 3s ease;
  }
  &.is-page-loading{
    .loading-in{
      width: 200%;
      height: 200%;
    }
  }
}
body {
  overflow-x: hidden !important;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #ffffff;
}

/*定义滚动条轨道：内阴影+圆角*/
::-webkit-scrollbar-track {
  background-color: #cacaca;
}

/*定义滑块：内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: #ffffff;
}

.cookieBox{
  width: calc(100% - 60px);
  max-width: 880px;
  margin: 0 auto;
  height: auto;
  border-radius: 15px;
  background: #fff;
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  padding: 20px;
  display: flex;
  align-items: center;
  opacity: .9;
  transition: .5s;
  &>div{
    &:nth-of-type(1){
      font-size: 16px;
    }
    &:nth-of-type(2){
      min-width: 100px;
      margin: 0 0 0 20px;
      color: #fff;
      background: #1b407a;
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-radius: 25px;
      cursor: pointer;
      font-size:16px;
    }
    &:nth-of-type(3){
      position: absolute;
      right: 10px;
      top: 10px;
      font-family: '正体';
      transform: scaleX(1.2);
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 768px) {
  .cookieBox{
    flex-direction: column;
    padding: 10px;
    &>div{
      &:nth-of-type(1){
        font-size: 12px;
      }
      &:nth-of-type(2){
        font-size: 16px;
        height: 30px;
        line-height: 30px;
        border-radius: 15px;
        margin-left: 0;
        margin-top: 10px;
      }
      &:nth-of-type(3){
        bottom: 10px;
        top: auto;
      }
    }
  }
}
</style>
