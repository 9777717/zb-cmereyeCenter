<script lang="ts" setup>
import { useRouter } from 'vue-router'
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '新聞推薦',
}))
// 新闻列表
const newList = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/829d049493cda56b.png',
    title: '斜視治療有方法',
    date: '2020.11.27',
    detail: '4546546546546465465',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/1156cbf4a6ece4d6.png',
    title: '視網膜脫落必須動手術嗎？',
    date: '2020.11.22',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/91e2405635ca3e7b.png',
    title: '糖尿上眼可致盲？',
    date: '2020.09.18',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/875d23d64608ef4e.png',
    title: '全港約50萬人患老年黃斑病變\n視物變形要警惕',
    date: '2020.09.16',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a4d26289335be5c0.jpg',
    title: '「微脈衝激光」拯救視力更安全',
    date: '2020.09.13',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/9276ab02f3abc115.jpg',
    title: '斜視眼影響深遠 及早糾正救視力',
    date: '2020.06.28',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/88621485630632e9.png',
    title: '嚴重濕疹患者 慎防眼睛毛病',
    date: '2020.05.29',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/1720c9a3331071b2.png',
    title: '屏幕傷眼 學童增百度近視',
    date: '2020.05.24',
  },
]
const router = useRouter()

const newDeatil = () => {
  router.push({
    name: 'test',
  })
}
</script>

<template>
  <div class="current">
    <div class="press">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/40df627f5ca7ce11.jpg"
            alt="新聞資訊"
          />
          <svg
            width="9"
            height="144"
            viewBox="0 0 9 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-v-1d8b93bf=""
            data-v-a125a221=""
            data-v-4b343dd3=""
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
            ></path>
          </svg>
        </div>
        <div>
          <div>新聞資訊</div>
          <div>
            <div>NEWS</div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/e3060c56238575c3.png"
              />
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/90e21d8b0b56ea96.png"
              />
            </div>
          </div>
          <div>
            <div>緊貼醫療新聞</div>
            <div>注重眼睛健康發展</div>
          </div>
        </div>
      </div>
      <div>
        <div v-for="(item, index) in newList" :key="index" @click="newDeatil()">
          <div><img :src="item.img" :alt="item.title" /></div>
          <div>{{ item.date }}</div>
          <div>{{ item.title }}</div>
          <div>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 16H16V0" stroke="#2958A3" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div>
      <PageInformation />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.current {
  margin-bottom: 180px;
}

.press {
  position: relative;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > div:nth-child(1) {
      position: relative;
      margin-top: 122px;
      margin-left: 268px;

      & > img {
        position: relative;
        z-index: 5;
      }

      & > svg {
        position: absolute;
        left: 50%;
        bottom: -130px;
        z-index: 5;
      }
    }

    & > div:nth-child(1)::after {
      content: '';
      background: #f2f2f2;
      width: 1386px;
      height: 912px;
      display: inline-block;
      z-index: 1;
      position: absolute;
      right: 0;
      top: 57px;
    }

    & > div:nth-child(2) {
      padding: 4.8% 0 0 10%;
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      z-index: 5;

      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 40.1431px;
        line-height: 46px;
        text-align: center;
        letter-spacing: 0.2em;
        color: #ffffff;
        margin-bottom: 12px;
      }

      & > div:nth-child(2) {
        margin-bottom: 41px;

        & > div:nth-child(1) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 700;
          font-size: 57.4776px;
          line-height: 56px;
          /* identical to box height, or 97% */
          text-align: center;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #ffffff;
        }
      }

      & > div:nth-child(3) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 23.7037px;
        line-height: 47px;
        text-align: right;
        letter-spacing: 0.3em;
        color: #ffffff;

        & > div:nth-child(2) {
          font-weight: 400;
          font-size: 15.8025px;
          line-height: 24px;
          text-align: center;
          letter-spacing: 0.45em;
        }
      }
    }
  }

  & > div:nth-child(2) {
    margin-top: 290px;
    margin-left: 38%;
    margin-right: 13.5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > div {
      width: 400px;
      height: 400px;
      background: #f2f2f2;
      margin-bottom: 120px;
      position: relative;

      & > div:nth-child(1) {
        padding: 33px 31px;
        min-height: 240px;
        padding-bottom: 0;
      }

      & > div:nth-child(2) {
        margin-top: 10px;
        width: 141px;
        height: 38px;
        background: #ffffff;

        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 17.7815px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #8ad8dd;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      & > div:nth-child(3) {
        margin-left: 31px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 34px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #515151;
        white-space: pre-wrap;
      }

      & > div:nth-child(4) {
        position: absolute;
        bottom: 20px;
        right: 20px;
      }
    }
  }
}
</style>
