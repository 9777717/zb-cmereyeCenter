<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '健康資訊',
}))
const healthList = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/44ab119d3622daa3.png',
    title: '#護眼食物 ！食住嚟睇世界盃⚽⚽⚽',
    text: [
      '睇波點少得零食，不過要食就要食得健康。#希瑪眼科 建議你可以食吓護眼食物，睇波雙眼唔會咁乾澀！',
    ],
    link: '',
    date: '2022.11.30',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a57e87d973cd0587.png',
    title: '【視在希瑪】捱夜睇波對眼好攰！4招預防眼乾眼澀',
    text: [
      '世界盃已經開羅！身為球迷點可以錯過每一場賽事~ 不過返咗一日工後雙眼咁攰，睇完波第二日又要一早起身返工。雙眼乾澀，點算好？',
      '#世界盃 #世界盃直播 #世界盃足球賽 #世界盃2022 #眼睛乾澀 #眼睛疲勞 #眼乾 #乾眼 #淚水 #淚液 #乾眼症 #眼罩 #熱敷眼罩 #護眼方法 #希瑪眼科',
    ],
    link: '',
    date: '2022.11.30',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/0d5743383f2c8242.png',
    title: '#護眼食物 ！食住嚟睇世界盃⚽⚽⚽',
    text: [
      '經常覺得眼乾、眼澀就係患上乾眼症嗎？乾眼症係一種都市人常見嘅眼疾，長時間唔理嘅話可能會導致角膜損傷、視力下降等。要確認自己係咪有乾眼症，初步可以接受「淚液分泌試紙測試」。',
      '#乾眼症 #眼乾 #眼澀 #乾眼症成因 #乾眼症徵狀 #眼淚 #淚水 #淚水分泌 #淚液分泌測試 #乾眼症測試 #角膜受損 #眼科醫生',
    ],
    link: '',
    date: '2022.11.30',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/fd41adf9b658e7aa.png',
    title: '【放眼逐格睇】眼妝卸乾淨！同眼挑針Say Bye~',
    text: [
      ' 出席party要化個靚妝，不過完咗後記得要卸乾淨眼妝，先可以預防到眼疾㗎！眼妝冇卸好，殘留嘅化妝品可能堵塞眼睛黏板腺，有機會導致生眼挑針，即係生眼瘡。',
      '#眼妝 #化眼妝 #卸妝 #眼挑針 #眼瘡 #眼瘡成因 #眼瘡治療 #眼瘡治療 #眼瘡放膿 #眼瘡初期 #眼睛發炎 #眼瘡放膿手術 #眼挑針治療 #希瑪眼科中心 #希瑪眼科 #希瑪醫療',
    ],
    link: '',
    date: '2022.11.30',
  },
]
const mmmmm = (num: any) => {
  console.log(num)
}
</script>

<template>
  <div>
    <div class="healthInfo">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/035c704cfcb2e2f8.png"
            alt="健康資訊"
          />
          <div>
            <div>健康資訊</div>
            <div>
              <div>Health topics</div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/30b46ae600698254.png"
                />
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/a918e24576d0b392.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div><span></span> BLOG</div>
        <div>
          <svg
            width="9"
            height="144"
            viewBox="0 0 9 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-1d8b93bf=""
            data-v-a125a221=""
            data-v-4b343dd3=""
            data-v-ee7ab105=""
            data-v-040e870e=""
          >
            <path
              d="M1 1V143L7.5 130.5"
              stroke="#2958A3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              data-v-1d8b93bf=""
              data-v-a125a221=""
              data-v-4b343dd3=""
              data-v-ee7ab105=""
              data-v-040e870e=""
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <div>你的眼睛健康嗎？</div>
        <div>關注眼睛健康</div>
      </div>
    </div>
    <div class="content_health">
      <div
        v-for="(item, index) in healthList"
        :key="index"
        @click="mmmmm(index + 1)"
      >
        <div>
          <img :src="item.img" :alt="item.title" />
          <div>{{ item.date }}</div>
        </div>
        <div>
          <div>{{ item.title }}</div>
          <div>
            <div v-for="(ele, i) in item.text" :key="i">{{ ele }}</div>
          </div>
          <div>點擊瀏覽</div>
        </div>
      </div>
    </div>
    <!-- 预计分页 -->
    <div class="paging">
      <div>
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.15198 13.3037L0.999984 7.15172L7.15198 0.999723"
            stroke="#2958A3"
            stroke-width="1.75771"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>1/5</div>
      <div>
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7.15199 7.15199L1 13.304"
            stroke="#2958A3"
            stroke-width="1.75771"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div>
      <PageInformation />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.healthInfo {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > div:nth-child(1) {
    background: #f2f2f2;
    width: 1333px;
    height: 640px;
    margin-top: 315px;
    position: relative;

    & > div:nth-child(1) {
      position: relative;

      & > img {
        top: -103px;
        position: absolute;
        right: 0;
      }

      & > div:nth-child(2) {
        width: 500.49px;
        position: relative;
        left: -81px;
        top: -31px;
        text-align: center;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 62.14px;
        line-height: 1;
        text-align: center;
        letter-spacing: 0.2em;
        color: #3e3a39;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-child(1) {
          margin-bottom: 10px;
          position: relative;
          left: -45px;
        }

        & > div:nth-child(2) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 700;
          font-size: 44.48px;
          line-height: 56px;
          text-align: center;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #ffffff;

          display: flex;
          flex-direction: column;
          align-items: center;

          & > div:nth-child(2) {
            padding-right: 5px;
          }

          & > div:nth-child(2),
          & > div:nth-child(3) {
            display: flex;
            justify-content: center;
            padding-top: 5px;
          }
        }
      }
    }

    & > div:nth-child(2) {
      & > span {
        border-top: 2px solid;
        width: 121px;
        display: inline-block;
      }

      position: absolute;
      bottom: 100px;
      left: -6%;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 46px;
      text-align: center;
      letter-spacing: 0.2em;
      color: #b7b7b7;
      transform: rotate(90deg);
    }

    & > div:nth-child(3) {
      position: absolute;
      left: 31%;
      bottom: -33%;
    }
  }

  & > div:nth-child(2) {
    position: absolute;
    left: 18%;
    bottom: -140px;

    & > div:nth-child(1) {
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 1;
      text-align: right;
      letter-spacing: 0.3em;
      color: #2958a3;
    }

    & > div:nth-child(2) {
      margin-top: 42px;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 1;
      text-align: center;
      letter-spacing: 0.3em;
      color: #8ad8dd;
    }
  }
}

.content_health {
  margin-top: 403px;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > div {
    width: 1120px;
    height: 410px;
    background: #f2f2f2;
    margin-bottom: 61px;

    display: flex;
    align-items: center;
    padding: 38px 33px 38px 52px;

    & > div:nth-child(1) {
      width: 321px;
      height: 321px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 40px;
      position: relative;

      & > div {
        position: absolute;
        bottom: -21px;
        left: -36px;
        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 17.7815px;
        line-height: 2.4;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #8ad8dd;
        width: 141px;
        height: 38px;
        background: #ffffff;
      }
    }

    & > div:nth-child(2) {
      width: 650px;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding-top: 55px;
      position: relative;

      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 28.61px;
        line-height: 44px;
        letter-spacing: 0;
        color: #515151;
        position: relative;
        padding-bottom: 20px;
      }

      & > div:nth-child(1)::after {
        content: '';
        border-bottom: solid #8ad8dd;
        width: 312px;
        height: 1.75771px;
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 0;
      }

      & > div:nth-child(2) {
        margin-top: 31px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 350;
        font-size: 13.1828px;
        line-height: 26px;
        letter-spacing: 0.1em;
        text-indent: 30px;
        text-transform: uppercase;

        color: #232323;

        & > div:nth-child(2) {
          text-indent: 0;
        }
      }

      & > div:nth-child(3) {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 95px;
        height: 37.27px;
        background: #8ad8dd;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 500;
        font-size: 13.1538px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.1em;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
}

.paging {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 281px;
  margin-right: 375px;
  color: #2958a3;
  margin-bottom: 256px;

  & > div:nth-child(2) {
    margin: 0 33px;
    font-family: 'Metropolis';
    font-style: normal;
    font-weight: 500;
    font-size: 18.6441px;
    letter-spacing: 0.5em;
  }

  & > div:nth-child(1),
  & > div:nth-child(3) {
    cursor: pointer;
  }
}
</style>
