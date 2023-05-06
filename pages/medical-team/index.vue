<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
const head = () => {
  return {
    title: '醫療團隊｜希瑪眼科｜眼科專科醫生',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '希瑪眼科中心有強大的眼科醫生醫療團隊，一共有22位眼科醫生，包括：林順潮眼科醫生、李佑榮眼科醫生、范愷眼科醫生、黃俊華眼科醫生、劉凱珊眼科醫生、李煒業眼科醫生、邱俊源眼科醫生、李琬微眼科醫生、胡偉君眼科醫生、李少雄眼科醫生、黎浩樺眼科醫生、李德倫眼科醫生、黃禮文眼科醫生、張瀞之眼科醫生、林寶生眼科醫生、林己明眼科醫生、張明權眼科醫生、陳偉樂眼科醫生、梁苑珊眼科醫生、鄒樞韻眼科醫生、尹浩柟醫生、鄒樂韻醫生。希瑪的每位眼科專科醫生會精心評估及治療患者眼疾問題，致力為大眾提供提供安全、準確、可靠的眼科檢查及醫療服務。',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '',
      },
    ],
  }
}
const doctorList = [
  {
    doctorName: '林順潮醫生',
    doctorIntro: '香港希瑪國際眼科醫療集團創辦人',
    doctorEnName: 'Dr. Dennis Lam',
    doctorEducation:
      '香港大學內外全科醫學士\n香港醫學專科學院院士(眼科)\n香港眼科醫學院院士\n英國愛丁堡皇家外科醫學院院士(眼科)\n英國皇家眼科學院院士\n香港中文大學醫學博士',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor01.jpg',
  },
  {
    doctorName: '李佑榮醫生',
    doctorEnName: 'Dr. Vincent Lee',
    doctorEducation:
      '香港中文大學內外全科醫學士\n香港醫學專科學院院士(眼科)\n香港眼科醫學院院士\n英國愛丁堡皇家外科醫學院院士\n香港外科醫學院院士\n香港中文大學流行病學與生物統計學理學碩士\n香港中文大學流行病學與生物統計學士後文憑',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor02.jpg',
  },
  {
    doctorName: '范愷醫生',
    doctorEnName: 'Dr. Alex Fan',
    doctorEducation:
      '香港大學內外全科醫學士\n香港醫學專科學院院士(眼科)\n香港眼科醫學院院士\n英國愛丁堡皇家外科醫學院院士(眼科)\n英國皇家眼科學院院士\n新加坡國立大學醫學碩士(眼科)',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor03.jpg',
  },
  {
    doctorName: '黃俊華醫生',
    doctorEnName: 'Dr. Alex Wong',
    doctorEducation:
      '香港大學內外全科醫學士\n香港醫學專科學院院士(眼科)\n香港眼科醫學院院士\n英國愛丁堡皇家外科醫學院院員\n英國格拉斯哥皇家外科醫學院院士',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor04.jpg',
  },
  {
    doctorName: '劉凱珊醫生',
    doctorEnName: 'Dr. Flora Lau',
    doctorEducation:
      '香港大學內外全科醫學士\n香港醫學專科學院院士(眼科)\n香港眼科醫學院院士\n英國愛丁堡皇家外科醫學院院員\n香港大學醫療科學碩士\n澳洲悉尼大學兒科文憑',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor05.jpg',
  },
  {
    doctorName: '李煒業醫生',
    doctorEnName: 'Dr. Jacky Lee',
    doctorEducation:
      '香港大學內外全科醫學士\n英國皇家眼科醫學院院士\n香港醫學專科學院院士(眼科)\n香港眼科醫學院院士\n英國愛丁堡皇家外科醫學院院士(眼科)\n英國愛丁堡皇家外科醫學院院員\n英國格拉斯哥皇家醫學院外科院士',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor06.jpg',
  },
  {
    doctorName: '邱俊源醫生',
    doctorEnName: 'Dr. Jackey Yau',
    doctorEducation:
      '香港中文大學內外全科醫學士\n香港眼科醫學院院士\n英國愛丁堡皇家外科醫學院院員\n香港醫學專科學院院士(眼科)',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor07.jpg',
  },
  {
    doctorName: '李琬微醫生',
    doctorEnName: 'Dr. Emmy Li',
    doctorEducation:
      '香港大學內外全科醫學士\n英國愛丁堡皇家外科醫學院院士(眼科)\n香港醫學專科學院院士(眼科)\n香港眼科醫學院院士\n英國愛丁堡皇家外科醫學院院員\n香港大學公共衛生科碩士',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor08.jpg',
  },
  {
    doctorName: '胡偉君醫生',
    doctorEnName: 'Dr. Wu Wai Kwan',
    doctorEducation:
      '香港中文大學內外全科醫學士\n英國愛丁堡皇家外科醫學院院士\n香港醫學專科學院院士(眼科)\n香港眼科醫學院院士(眼科)',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor09.jpg',
  },
  {
    doctorName: '李少雄醫生',
    doctorEnName: 'Dr. Patrick Li',
    doctorEducation:
      '香港中文大學內外全科醫學士\n香港眼科醫學院院士\n香港醫學專科學院院士(眼科)\n英國愛丁堡皇家外科醫學院院士\n英國格拉斯哥皇家外科醫學院院士\n新加坡國立大學眼科醫學碩士\n香港中文大學內科醫學文憑\n澳洲蒙納殊大學家庭醫學文憑',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor10.jpg',
  },
  {
    doctorName: '黎浩樺醫生',
    doctorEnName: 'Dr. Kenny Lai',
    doctorEducation:
      '香港中文大學內外全科醫學士\n香港眼科醫學院院士\n香港醫學專科學院院士(眼科)\n英國愛丁堡皇家外科醫學院院員',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor11.jpg',
  },
  {
    doctorName: '李德倫醫生',
    doctorEnName: 'Dr. Stephen Li',
    doctorEducation:
      '香港大學內外全科醫學士\n英國愛丁堡皇家外科醫學院院員\n香港眼科醫學院院士\n香港醫學專科學院院士(眼科)',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor12.jpg',
  },
  {
    doctorName: '黃禮文醫生',
    doctorEnName: 'Dr. Raymond Wong',
    doctorEducation:
      '香港大學內外全科醫學士\n英國愛丁堡皇家外科醫學院院員(眼科)\n香港眼科醫學院院士\n香港醫學專科學院院士(眼科)',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor13.jpg',
  },
  {
    doctorName: '張瀞之醫生',
    doctorEnName: 'Dr. Janice Cheung',
    doctorEducation:
      '香港大學內外全科醫學士\n香港眼科醫學院院士\n香港醫學專科學院院士(眼科)\n英國愛丁堡皇家外科醫學院院士(眼科)\n英國格拉斯哥皇家外科醫學院院士\n英國愛丁堡皇家外科醫學院院員',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor14.jpg',
  },
  {
    doctorName: '林寶生醫生',
    doctorEnName: 'Dr. Carol Lam',
    doctorEducation:
      '香港中文大學內外全科醫學士 \n英國愛丁堡皇家外科醫學院院員\n香港眼科醫學院院士\n香港醫學專科學院院士(眼科)',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor15.jpg',
  },
  {
    doctorName: '林己明醫生',
    doctorEnName: 'Dr. Jasmine Lam',
    doctorEducation:
      '香港大學內外全科醫學士\n英國愛丁堡皇家外科醫學院院員\n香港醫學專科學院院士(眼科)\n香港眼科醫學院院士',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor16.jpg',
  },
  {
    doctorName: '張明權醫生',
    doctorEnName: 'Dr. Paul Cheung',
    doctorEducation:
      '香港大學內外全科醫學士\n愛爾蘭皇家內外科醫學院\n英國格拉斯哥皇家外科醫學院眼科文憑\n香港眼科醫學院院士\n香港醫學專科學院院士(眼科)',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor17.jpg',
  },
  {
    doctorName: '陳偉樂醫生',
    doctorEnName: 'Dr. Leo Chan',
    doctorEducation:
      '香港大學內外全科醫學士\n英國愛丁堡皇家外科醫學院院員(眼科)\n香港眼科醫學院院士\n香港醫學專科學院院士(眼科)\n香港中文大學醫療管理學理學碩士',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor18.jpg',
  },
  {
    doctorName: '梁苑珊醫生',
    doctorEnName: 'Dr. Gloria Leung',
    doctorEducation:
      '澳洲雪梨大學內外全科醫學士\n新加坡國立大學醫學眼科碩士\n英國愛丁堡皇家外科醫學院院員\n香港眼科醫學院院士\n香港醫學專科學院院士(眼科)',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor19.jpg',
  },
  {
    doctorName: '鄒樞韻醫生',
    doctorEnName: 'Dr. Sharon Chow',
    doctorEducation:
      '香港大學內外全科醫學士\n英國愛丁堡皇家外科醫學院院員\n香港眼科醫學院院士\n香港醫學專科學院院士(眼科)',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor20.jpg',
  },
  {
    doctorName: '尹浩柟醫生',
    doctorEnName: 'Dr. Kelvin Wan',
    doctorEducation:
      '香港中文大學內外全科醫學士\n英國愛丁堡皇家外科醫學院院員\n英國皇家外科醫學院院員\n英國格拉斯哥皇家醫學院外科院員\n香港眼科醫學院院士\n香港醫學專科學院院士(眼科)',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor21.jpg',
  },
  {
    doctorName: '鄒樂韻醫生',
    doctorEnName: 'Dr. Loraine Chow',
    doctorEducation:
      '香港大學內外全科醫學士\n英國愛丁堡皇家外科醫學院院員\n香港醫學專科學院院士(眼科)\n香港眼科醫學院院士',
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor22.jpg',
  },
]
</script>
<template>
  <div id="medical-team" class="medical-team">
    <div>
      <div class="title">醫 療 團 隊</div>
      <div></div>
    </div>
    <div class="mainCon">
      <ul>
        <li v-for="(item, index) in doctorList" :key="index" class="docList">
          <div class="docDes">
            <div class="docName">{{ item.doctorName }}</div>
            <p v-if="item.doctorIntro" class="doctorIntro">
              {{ item.doctorIntro }}
            </p>
            <div class="docEducation">
              <div class="edutitle">學歷</div>
              <div class="eduDes">{{ item.doctorEducation }}</div>
            </div>
          </div>
          <div class="docImg">
            <div><img :src="item.doctorImgUrl" :alt="item.doctorEnName" /></div>
            <div class="docEnName">{{ item.doctorEnName }}</div>
          </div>
          <nuxt-link class="orderLink text-white inline-block" to=""
            >預約</nuxt-link
          >
        </li>
      </ul>
    </div>
    <Footer class="-mt-24" />
  </div>
</template>
<style lang="scss" scoped>
@import url(~/assets/font/font.css);

.medical-team {
  margin-bottom: 455px;
  & > div:first-child {
    margin-left: 650px;
    margin-top: 98px;

    & > .title {
      position: relative;
      -ms-writing-mode: tb-lr;
      writing-mode: vertical-lr;
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
        content: 'medical team';
        color: #8ad8dd;
        text-transform: uppercase;
        font-size: 26px;
        white-space: nowrap;
        position: absolute;
        top: 0;
        left: -40px;
      }
    }

    & > div:last-child {
      background: #f2f2f2;
      width: 738px;
      height: 543px;
      position: absolute;
      top: 0;
      left: 752px;
    }
  }

  .mainCon {
    margin-left: 668px;
    z-index: 2;
    position: relative;
    margin-top: 71px;

    .docList {
      display: flex;
      flex-direction: row;
      position: relative;
      margin-bottom: 177px;
      width: 745px;
      justify-content: space-between;

      .docDes {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: -45px;
        position: relative;
        z-index: 9;
      }

      .docImg {
        position: relative;

        & > div:first-child {
          & > img {
            z-index: 9;
            position: relative;
          }
        }

        .docEnName {
          font-family: 'ButterTangXin';
          font-style: normal;
          font-weight: 400;
          font-size: 32.3948px;
          line-height: 108px;
          /* identical to box height, or 333% */

          text-align: center;

          color: #2958a3;
          position: absolute;
          z-index: 10;
        }
      }

      .orderLink {
        position: absolute;
        width: 130px;
        height: 51px;
        background: #8ad8dd;
        line-height: 51px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #ffffff;
        bottom: 0;
        left: 225px;
        cursor: pointer;
      }

      .docName {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 50px;
        /* identical to box height, or 167% */

        text-align: center;
        letter-spacing: 0.05em;

        color: #515151;
      }

      .doctorIntro {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 350;
        font-size: 15px;
        line-height: 32px;
        /* identical to box height, or 333% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #515151;
      }

      .docEducation {
        display: flex;
        flex-direction: row;
        margin-top: 29px;

        & > div:first-child {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 15px;
          line-height: 35px;
          /* identical to box height, or 333% */

          text-align: center;
          letter-spacing: 0.1em;

          color: #515151;
          margin-right: 36px;
        }

        & > div:last-child {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 15px;
          line-height: 35px;
          /* or 233% */

          letter-spacing: 0.1em;

          color: #515151;
          white-space: pre-wrap !important;
        }
      }
    }
  }

  ul > li:nth-child(10) {
    & > a {
      bottom: -20px;
    }
  }

  ul > li:nth-child(1) {
    & > div:nth-child(1) {
      margin-top: 65px !important;
    }

    & > div:nth-child(2) {
      & > div:nth-child(2) {
        top: 74px;
        left: -37px;
      }
    }
  }

  ul > li:nth-child(2) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 102px;
        left: -116px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -153px;
        bottom: -86px;
        width: 418px;
        height: 316px;
      }
    }
  }

  ul > li:nth-child(3) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 37px;
        left: -53px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -84px;
        bottom: -68px;
        width: 312px;
        height: 284px;
      }
    }
  }

  ul > li:nth-child(4) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 129px;
        left: -107px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -221px;
        top: 83px;
        width: 449px;
        height: 202px;
      }
    }
  }

  ul > li:nth-child(5) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 33px;
        left: -82px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -224px;
        top: -47px;
        width: 488px;
        height: 284px;
      }
    }
  }

  ul > li:nth-child(6) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 102px;
        left: -62px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -52px;
        top: -44px;
        width: 276px;
        height: 281px;
      }
    }
  }

  ul > li:nth-child(7) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 75px;
        right: -66px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -298px;
        bottom: -55px;
        width: 515px;
        height: 322px;
      }
    }
  }

  ul > li:nth-child(8) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 69px;
        left: -40px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -59px;
        top: -47px;
        width: 276px;
        height: 284px;
      }
    }
  }

  ul > li:nth-child(9) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: -3px;
        right: -71px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -341px;
        top: 59px;
        width: 558px;
        height: 184px;
      }
    }
  }

  ul > li:nth-child(10) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 69px;
        left: -55px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -78px;
        top: -47px;
        width: 342px;
        height: 322px;
      }
    }
  }

  ul > li:nth-child(11) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 39px;
        left: -72px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -46px;
        bottom: -46px;
        width: 267px;
        height: 250px;
      }
    }
  }

  ul > li:nth-child(12) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 86px;
        right: -68px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -54px;
        top: -47px;
        width: 275px;
        height: 273px;
      }
    }
  }

  ul > li:nth-child(13) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 135px;
        left: -136px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -222px;
        top: 44px;
        width: 443px;
        height: 211px;
      }
    }
  }

  ul > li:nth-child(14) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 83px;
        right: -92px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -72px;
        top: -57px;
        width: 336px;
        height: 283px;
      }
    }
  }

  ul > li:nth-child(15) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 15px;
        right: -43px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -111px;
        bottom: -50px;
        width: 336px;
        height: 283px;
      }
    }
  }

  ul > li:nth-child(16) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 13px;
        left: -86px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -53px;
        top: -39px;
        width: 277px;
        height: 283px;
      }
    }
  }

  ul > li:nth-child(17) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 129px;
        left: -111px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -297px;
        top: 45px;
        width: 521px;
        height: 245px;
      }
    }
  }

  ul > li:nth-child(18) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 40px;
        right: -56px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -62px;
        top: 45px;
        width: 286px;
        height: 285px;
      }
    }
  }

  ul > li:nth-child(19) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 40px;
        left: -68px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -48px;
        top: -50px;
        width: 260px;
        height: 286px;
      }
    }
  }

  ul > li:nth-child(20) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 16px;
        right: -92px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -154px;
        top: -32px;
        width: 366px;
        height: 277px;
      }
    }
  }

  ul > li:nth-child(21) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 156px;
        left: -73px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -44px;
        bottom: -45px;
        width: 252px;
        height: 277px;
      }
    }
  }

  ul > li:nth-child(22) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 7px;
        left: -103px;
      }

      & > div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -315px;
        top: 79px;
        width: 523px;
        height: 224px;
      }
    }
  }
}
</style>
