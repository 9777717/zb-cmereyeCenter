<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '醫生小教室',
}))
// 内容
const mainContent = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/68d06f9abbaa270e.png',
    link: 'https://youtu.be/6QMK-B_WKvk',
    title: '小朋友的眼睛檢查與大人有什麼不同？',
    doctor: '林寶生眼科專科醫生',
    text: '兒童年紀小檢查眼睛時，未必聽到懂指示，所以眼科專科醫生會設計不同的測試和檢查，去幫助小朋友檢查眼睛，例如︰顏色測試、眼底檢查、斜視檢查。不過，隨著小朋友年齡增加，到了幼稚園或小學階段，檢查眼睛的方法與成人類似。立即聽聽希瑪眼科中心 - 林寶生眼科專科醫生講解！ ',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/ae11245a90ee4dfe.png',
    link: 'https://youtu.be/gsFpvvDkJiE',
    title: '眼瞼內翻的症狀，眼瞼內翻要做手術嗎？',
    doctor: '張瀞之眼科專科醫生',
    text: '眼瞼內翻可分為先天性和退化性，患者的常見症狀包括︰眼睛有很多分泌物、有異物感和疼痛，甚至會常有沙入眼的感覺、流眼水和眼睛水汪汪等。如果病情嚴重，可能會影響視力和角膜的健康。眼瞼內翻一定要透過做手術治療嗎？',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2d88b98970f31ba1.png',
    link: 'https://youtu.be/zMoqXZgXDsk',
    title: '揉眼會影響視力？',
    doctor: '李德倫眼科專科醫生',
    text: '我們感到眼睛不適時可能會揉眼，其實這是一個不好的習慣。不要以為揉眼只是一個小動作，它可能造成眼角膜損傷、眼睛細菌感染，嚴重的話甚至出現眼角膜潰瘍，並會大大增加患眼疾的風險，某些人士更要特別注意。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/f3aab3c7f7cec643.png',
    link: 'https://youtu.be/XbWbpVc-39k',
    title: '怎麼知道眼乾是缺油或是缺水？',
    doctor: '李德倫眼科專科醫生',
    text: '眼乾可以分為「缺水性」和「缺油性」。缺水性是由於眨眼過少，導致淚水揮發多而分泌少，此類型眼乾較常見於中年女士、常看電腦或手機、類風濕關節炎等人士。若患者屬於缺油性眼乾，多數由瞼板腺功能障礙引起，油脂大量分泌並堵塞了油脂孔，令到淚水容易揮發出來。',
  },
]
</script>

<template>
  <div class="doctorClass">
    <!-- 起始 -->
    <div>
      <div>
        <img
          src="https://static.cmereye.com/imgs/2023/05/0b9e6ad4c0ee7ed1.png"
          alt="醫生小教室"
        />
      </div>
      <div>
        <div>
          <p>醫生小教室</p>
          <p>doctor videos</p>
        </div>
        <div>
          <div>
            <p>我們用心製作</p>
          </div>
          <div>
            <p>透過拍攝訪問醫生</p>
            <p>希望令大眾更加了解眼疾</p>
          </div>
        </div>
      </div>
      <svg
        width="9"
        height="144"
        viewBox="0 0 9 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-v-1d8b93bf=""
      >
        <path
          d="M1 1V143L7.5 130.5"
          stroke="#2958A3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-v-1d8b93bf=""
        ></path>
      </svg>
    </div>
    <!-- 内容 -->
    <div>
      <div v-for="(item, index) in mainContent" :key="index">
        <div>
          <div>{{ item.title }}</div>
          <div>
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.62378 1.35986L7.77577 7.51186L1.62378 13.6639"
                stroke="#8AD8DD"
                stroke-width="1.75771"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>{{ item.doctor }}</div>
          </div>
          <div>{{ item.text }}</div>
          <div>
            <a :href="item.link" target="_blank" rel="noopener noreferrer"
              >立即播放</a
            >
          </div>
        </div>
        <div><img :src="item.img" :alt="item.title" /></div>
      </div>
    </div>
    <!-- 可能是切数据 -->
    <div>
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
.doctorClass {
  margin-left: 94px;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    position: relative;

    & > div:nth-child(1) {
      & > img {
        z-index: 5;
        position: relative;
      }
    }

    & > div:nth-child(1)::before {
      content: '';
      background: #f2f2f2;
      width: 1780px;
      height: 1080px;
      display: inline-block;
      z-index: 1;
      position: absolute;
      left: -94px;
    }

    & > div:nth-child(2) {
      z-index: 5;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      left: 0;
      right: 0;
      bottom: 50px;

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

        & > p:nth-child(2) {
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
        margin-top: 26px;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-child(1) {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 60px;
          /* identical to box height, or 200% */

          text-align: right;
          letter-spacing: 0.3em;

          color: #ffffff;
        }

        & > div:nth-child(2) {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          /* or 150% */

          text-align: center;
          letter-spacing: 0.3em;

          color: #ffffff;
        }
      }
    }

    & > svg {
      position: absolute;
      bottom: -122px;
      z-index: 5;
      left: 50%;
    }
  }

  & > div:nth-child(2) {
    margin-top: 288px;
    margin-left: 281px;
    margin-right: 375px;

    & > div {
      max-width: 1163px;
      margin-bottom: 70px;
      background: #f2f2f2;
      height: 386px;
      position: relative;
      padding-top: 46px;
      padding-left: 24.2476%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      & > div:nth-child(1) {
        width: 490px;
        display: flex;
        flex-direction: column;
        margin-right: 52px;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 24.608px;
        line-height: 44px;

        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #515151;

        & > div:nth-child(1) {
          padding-bottom: 2px;
          position: relative;
        }

        & > div:nth-child(1)::after {
          content: '';
          width: 65.04px;
          border-bottom: 1.75771px solid #8ad8dd;
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: 0;
        }

        & > div:nth-child(2) {
          display: flex;
          align-items: center;
          margin-top: 22px;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 17.5771px;
          line-height: 25px;

          & > svg {
            margin-right: 10px;
          }
        }

        & > div:nth-child(3) {
          margin-left: 30px;
          margin-top: 7.5px;
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
        }

        & > div:nth-child(4) {
          cursor: pointer;
          background: #8ad8dd;
          width: 95px;
          height: 37.27px;
          margin-top: 18px;

          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 500;
          font-size: 13.1538px;
          line-height: 26px;
          /* identical to box height, or 194% */

          text-align: center;
          letter-spacing: 0.1em;

          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      & > div:nth-child(2) {
        position: absolute;
        right: 0;
        margin-right: 64px;
        margin-top: 39px;
      }
    }

    & > div:nth-child(2n) {
      flex-direction: row-reverse;
      justify-content: flex-start;

      & > div:nth-child(2) {
        right: 511px;
      }
    }
  }

  & > div:nth-child(3) {
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
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .doctorClass {
    width: 1780px;
    margin: auto;
  }
}
</style>
