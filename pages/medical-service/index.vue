<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead({
  title: '醫療服務｜希瑪眼科｜眼科專科醫生',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content:
        '香港希瑪眼科中心提供全面眼科檢查及眼疾治療，醫療服務包括：白內障、青光眼、乾眼症、飛蚊症、結膜炎、黃斑病變、兒童斜視及弱視、眼表疾病、眼角膜疾病、視網膜脫落、眼眶、眼整形、眼腫瘤、醫學驗光配鏡、屈光矯視。眼科專科診症和治療由經營豐富的醫療團隊主理，包括︰林順潮眼科醫生、李佑榮眼科醫生、范愷眼科醫生、黃俊華眼科醫生、劉凱珊眼科醫生、李煒業眼科醫生、邱俊源眼科醫生、李琬微眼科醫生、胡偉君眼科醫生、李少雄眼科醫生、黎浩樺眼科醫生、李德倫眼科醫生、黃禮文眼科醫生、張瀞之眼科醫生、林寶生眼科醫生、林己明眼科醫生、張明權眼科醫生、陳偉樂眼科醫生、梁苑珊眼科醫生、鄒樞韻眼科醫生、尹浩柟醫生、鄒樂韻醫生。',
    },
  ],
})
const SerListL = [
  {
    i: '01',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser1.png',
    des: '白內障',
    link: '/medical-service/cataract',
  },
  {
    i: '02',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser2.png',
    des: '青光眼',
    link: '/medical-service/glaucoma',
  },
  {
    i: '03',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser3.png',
    des: '乾眼症',
    link: '/medical-service/xerophthalmia',
  },
  {
    i: '04',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser4.png',
    des: '飛蚊症',
    link: '/medical-service/muscaeVolitantes',
  },
  {
    i: '05',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser5.png',
    des: '結膜炎',
    link: '/medical-service/conjunctivitis',
  },
  {
    i: '06',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser6.png',
    des: '黃斑病變',
    link: '/medical-service/maculopathy',
  },
  {
    i: '07',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser7.png',
    des: '兒童斜弱視',
    link: '',
  },
  {
    i: '08',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser8.png',
    des: '眼表及角膜疾病',
    link: '',
  },
  {
    i: '09',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser9.png',
    des: '視網膜脫落及疾病',
    link: '',
  },
  {
    i: '10',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser10.png',
    des: '眼矯形及眼眶疾病',
    link: '',
  },
  {
    i: '11',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser11.png',
    des: '醫學驗光配鏡',
    link: '',
  },
  {
    i: '12',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser12.png',
    des: '屈光矯視',
    link: '',
  },
]
</script>

<template>
  <div id="Service" class="Service">
    <div class="serContent relative">
      <div class="title">醫 療 服 務</div>

      <ul class="serList">
        <li v-for="(item, index) in SerListL" :key="index">
          <nuxt-link
            :to="item.link"
            class="flex flex-col items-center justify-center relative"
          >
            <div>
              <img :src="item.imgUrl" :alt="item.des" class="rounded-full" />
              <span class="i en-font absolute top-0 left-0 z-50">{{
                item.i
              }}</span>
            </div>
            <p class="des text-center">{{ item.des }}</p>
          </nuxt-link>
        </li>
      </ul>
    </div>

    <div class="h-32"></div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.serContent {
  .title {
    -ms-writing-mode: tb-lr;
    writing-mode: vertical-lr;
    margin-left: 33.59375%;
    position: relative;
    top: 98px;
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 400;
    font-size: 40.1431px;
    line-height: 46px;
    /* or 115% */

    text-align: center;
    letter-spacing: 0.05em;

    color: #515151;

    &::after {
      content: 'medical services';
      position: absolute;
      color: #8ad8dd;
      left: -38px;
      top: 0px;
      font-family: 'Metropolis';
      font-style: normal;
      font-weight: 500;
      font-size: 23.0172px;
      line-height: 55px;
      /* identical to box height, or 238% */

      text-align: center;
      letter-spacing: 0.1em;
      text-transform: uppercase;

      color: #8ad8dd;
      white-space: nowrap;
    }
  }

  &::before {
    content: '';
    position: absolute;
    background: #f2f2f2;
    top: 0;
    width: 600px;
    height: 642px;
    left: 880px;
    z-index: 0;
  }

  .serList {
    margin-left: 41.14583%;
    margin-right: 26.6146%;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 33.3333%;
      margin-bottom: 66px;

      img {
        width: 131px;
        margin-bottom: 15px;
      }

      p {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 50px;
        /* identical to box height, or 278% */

        text-align: center;
        letter-spacing: 0.05em;

        color: #515151;
      }

      .i {
        font-size: 50px;
        -webkit-text-stroke: 1.5px #2958a3; //文字描边
        color: transparent; //字体颜色设置为透明
        background-color: transparent;
        text-transform: uppercase;
        top: -15%;
        left: 0;

        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 45.182px;
        line-height: 108px;
      }
    }
  }
}
</style>
