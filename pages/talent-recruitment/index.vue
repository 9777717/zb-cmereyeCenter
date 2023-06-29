<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: '人才招聘｜香港希瑪眼科中心',
  meta: [
    {
      name: 'description',
      content:
        '香港希瑪眼科中心有強大的眼科醫療團隊，共有20多名經驗豐富的眼科醫生、視光師及醫療護理人員組成，提供專業眼科醫療服務。香港希瑪眼科中心於2022年一度獲得2022開心工作間的獎項，成為開心企業為員工建設開心的工作環境。希瑪眼科中心以人為本，注重員工的團隊合作，致力培訓員工，希望吸納更多醫護專才，為客人提供度身訂造的服務，加入希瑪眼科中心，盡展所長。希瑪眼科中心提供多個職位空缺，有診所護士和註冊視光師的空缺。',
    },
    {
      name: 'keywords',
      content:
        '人才招聘 應聘崗位 希瑪眼科招聘 招聘人事 最新職位空缺 職位空缺 揾工 護士招聘 全職招聘  招聘工作 護理員招聘 招聘全職 希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 眼科專科 矯視 眼科診所 香港希瑪眼科林順潮眼科醫生 眼科 眼睛科 眼科醫生 香港眼科 眼科醫生 兒童眼科 香港眼科 眼科醫院 眼科服務',
    },
  ],
}))
</script>

<template>
  <div id="careers" class="careers">
    <div>
      <div>
        <img
          src="https://static.cmereye.com/imgs/2023/06/383e41e9408dc74f.jpg"
          alt="加入我們，攜手未來"
        />
      </div>
      <div>
        <p class="">{{ $t('pages.talent_recruitment.text1') }}</p>
        <img
          class=""
          src="https://static.cmereye.com/imgs/2023/03/f47c6bf2d4a3693a.png"
          alt=""
        />
      </div>
      <svg
        width="9"
        height="144"
        viewBox="0 0 9 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-v-1d8b93bf=""
        data-v-a125a221=""
      >
        <path
          d="M1 1V143L7.5 130.5"
          stroke="#2958A3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-v-1d8b93bf=""
          data-v-a125a221=""
        ></path>
      </svg>
    </div>

    <div class="mianConten mainCon pb-64 flex items-center justify-between">
      <div class="desBox mt-52 mr-10">
        <h1 class="text-4xl mb-10">
          {{ $t('pages.talent_recruitment.text2') }}
        </h1>
        <p class="leading-8">
          {{ $t('pages.talent_recruitment.p1') }}<br />
          {{ $t('pages.talent_recruitment.p2') }}<br />
          {{ $t('pages.talent_recruitment.p3') }}
        </p>
        <a
          href="https://cmermedical.com/joinus/careers?departmentOptions=cmerEyeCenter"
          target="_blank"
          rel="noopener noreferrer"
          class="linkBtn text-white mt-12 inline-block"
          >{{ $t('pages.talent_recruitment.apply') }}</a
        >
      </div>

      <div class="imgBox">
        <img
          src="https://static.cmereye.com/imgs/2023/02/833b5617b3c72216.png"
          alt=""
          class="right1"
        />
        <img
          src="https://static.cmereye.com/imgs/2023/02/f7e9031c1b6f047d.png"
          alt=""
          class="right2"
        />
        <img class="right3" src="https://static.cmereye.com/imgs/2023/06/677dce366a5a1e7c.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.careers {
  width: 100%;
  // max-width: 1884px;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    position: relative;
    &::before{
      content: '';
      top: 56px;
      left: 0;
      width: calc((100vw - 1080px)/2 + 800px);
      position: absolute;
      background: #f1f1f1;
      height: 880px;
    }
    & > div:nth-child(1) {
      width: 100%;
      max-width: 1080px;
      margin: 245px auto 0;
      position: relative;
      & > img {
        width: 100%;
        // padding-left: 160px;
        // padding-top: 50px;
        // background: #f7fcff;
      }
    }

    & > div:nth-child(2),
    & > div:nth-child(3) {
      position: absolute;
    }

    & > div:nth-child(2) {
      z-index: 5;
      left: 50%;
      transform: translateX(-50%);
      right: 0;
      bottom: 10px;
      width: max-content;
      & > p {
        font-size: 55px;
        color: #fff;
        margin-bottom: 30px;
         display: inline-block;
      }
    }

    & > svg:nth-child(3) {
      position: absolute;
      bottom: -150px;
      left: 50%;
    }
  }
}

.desBox {
  h1 {
    font-size: 45px;
    color: #515151;
  }

  p {
    font-size: 20px;
    line-height: 2;
    color: #515151;
  }

  a {
    background: #8ad8dd;
    font-size: 22px;
    padding: 10px 30px;
  }
}

.mianConten {
  width: 100%;
  max-width: 1080px;
  margin: auto;
  font-family: 'Noto Sans HK';

  .imgBox {
    background-color: #f2f2f2;
    width: 55%;
    height: 370px;
    position: relative;
    margin-top: 390px;

    img {
      position: absolute;
    }

    .right1 {
      left: 20px;
      top: -150px;
      z-index: 10;
    }

    .right2 {
      right: 20px;
      top: 50px;
      z-index: 11;
      width: 44%;
    }
    .right3 {
      left: 40px;
      bottom: -35%;
      z-index: 12;
      width: 50%;
    }
  }
}
</style>
