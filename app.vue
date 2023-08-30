<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'
AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
const app = useAppConfig() as AppConfigInput
useHead({
  title: app.name,
  titleTemplate: '%s - 希瑪眼科',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content:
        '香港希瑪眼科中心提供全面眼科檢查及眼疾治療，醫療服務包括：白內障、青光眼、乾眼症、飛蚊症、結膜炎、黃斑病變、兒童斜視及弱視、眼表疾病、眼角膜疾病、視網膜脫落、眼眶、眼整形、眼腫瘤、醫學驗光配鏡、屈光矯視。眼科專科診症和治療由經營豐富的醫療團隊主理，包括︰林順潮眼科醫生、李佑榮眼科醫生、范愷眼科醫生、黃俊華眼科醫生、劉凱珊眼科醫生、李煒業眼科醫生、邱俊源眼科醫生、李琬微眼科醫生、胡偉君眼科醫生、李少雄眼科醫生、黎浩樺眼科醫生、李德倫眼科醫生、黃禮文眼科醫生、張瀞之眼科醫生、林寶生眼科醫生、林己明眼科醫生、張明權眼科醫生、陳偉樂眼科醫生、梁苑珊眼科醫生、鄒樞韻眼科醫生、尹浩柟醫生、鄒樂韻醫生。',
    },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  // script: [
  //   {
  //     src: 'https://cdn.userway.org/widget.js',
  //     'data-account': 'eSwu5OqOdn'
  //   }
  // ],
})
let cookieBoxShow = ref(false)
const handleSetCookie = () =>{
  cookieBoxShow.value = false
  localStorage.setItem('userCookie','1');
}
onMounted(()=>{
  try{
    let getCookie = localStorage.getItem('userCookie');
    if(!getCookie){
      cookieBoxShow.value = true
    }
  }catch(e){
    console.log(3)
  }
})
</script>

<template>
  <Html class="light" lang="zh-hk">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 overscroll-y-none"
    >
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
