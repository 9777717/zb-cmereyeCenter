<script lang="ts" setup>
import { Anchor } from '~~/.nuxt/components'

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '希碼小劇場',
}))
// 视频列表
const videoList = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/72ff84195ac84ec5.png',
    title: '情人節男生勿踩地雷!!!',
    text: [
      '2月14日情人節~ 諗好點同另一半慶祝未呢？😍咁開心和重要嘅日子真係要特別小心，唔好激嬲女朋友啊…',
      '如果一唔小心，搞喊另一半，點算好？一齊去片睇睇喇~ 睇完鍾意嘅話記得畀個Like我哋啊👍',
    ],
    link: 'https://youtu.be/oYTtMkqVK4w',
  },
]
</script>

<template>
  <div class="currentpage">
    <div class="theatre">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/d9be37a46c8cd037.png"
            alt="希碼小劇場"
          />
          <div>
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
        </div>
        <div>
          <div>
            <div>希瑪小劇場</div>
            <div>c-MEr theater</div>
          </div>
          <div>
            <p>透過小劇場</p>
            <p>利用生動的方法讓大眾了解眼疾</p>
          </div>
        </div>
      </div>
      <div>
        <div v-for="(item, index) in videoList" :key="index">
          <div>
            <img :src="item.img" :alt="item.title" srcset="" />
          </div>
          <div>
            <div>{{ item.title }}</div>
            <div v-if="Array.isArray(item.text)">
              <div v-for="(ele, i) in item.text" :key="i">{{ ele }}</div>
            </div>
            <div>
              <a :href="item.link" target="_blank" rel="noopener noreferrer"
                >立即播放</a
              >
            </div>
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
.theatre {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    position: relative;

    & > div:nth-child(1) {
      & > img {
        margin: 0 auto;
        z-index: 5;
        position: relative;
      }

      & > div:nth-child(2) {
        z-index: 6;
        position: absolute;
        left: 50%;
        bottom: -115px;
      }
    }

    & > div:nth-child(1)::after {
      content: '';
      background: #f2f2f2;
      width: 1781px;
      height: 1080px;
      display: inline-block;
      position: absolute;
      bottom: -75px;
      z-index: 1;
    }

    & > div:nth-child(2) {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 73.51px;
      z-index: 5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 49.14px;
        line-height: 46px;
        /* identical to box height, or 94% */

        text-align: center;
        letter-spacing: 0.2em;

        color: #ffffff;

        & > div:nth-child(2) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 500;
          font-size: 25.64px;
          line-height: 44px;
          /* identical to box height, or 173% */

          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: #8ad8dd;
        }
      }

      & > div:nth-child(2) {
        margin-top: 52px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;

        text-align: center;
        letter-spacing: 0.3em;

        color: #ffffff;
      }
    }
  }

  & > div:nth-child(2) {
    margin: 0 392px;
    min-height: 900px;
    margin-top: 363.49px;

    & > div {
      display: flex;

      & > div:nth-child(1) {
        margin-right: 72px;
        width: 518px;
        height: 308px;
        background: #f2f2f2;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      & > div:nth-child(2) {
        width: 518px;
        position: relative;

        & > div:nth-child(1) {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 24.608px;
          letter-spacing: 0.05em;
          padding-bottom: 8px;
          color: #515151;
          position: relative;
        }

        & > div:nth-child(1)::after {
          content: '';
          width: 65.04px;
          border-bottom: 1.75771px solid #8ad8dd;
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: 0;
        }

        & > div:nth-child(2) {
          margin-top: 34.3px;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 13.1828px;
          line-height: 26px;
          /* or 200% */

          text-align: justify;
          letter-spacing: 0.1em;
          text-indent: 30px;
          text-transform: uppercase;

          color: #232323;

          & > div:nth-child(1) {
            margin-bottom: 40px;
          }
        }

        & > div:nth-child(3) {
          position: absolute;
          bottom: 15px;
          right: 0;

          width: 95px;
          height: 37.27px;
          background: #8ad8dd;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 500;
          font-size: 13.1538px;
          line-height: 26px;
          text-align: center;
          letter-spacing: 0.1em;
          color: #ffffff;

          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .currentpage {
    width: 1920px;
    margin: auto;
  }
}
</style>
