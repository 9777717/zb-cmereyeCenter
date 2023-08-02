<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '結膜炎｜希瑪眼科｜醫療服務',
  meta: [
    {
      name: 'description',
      content:
        '結膜炎又稱紅眼症，患者會出現眼睛乾澀、紅、腫及分泌物增多等症狀，嚴重紅眼症的患者會角膜破皮和視力模糊。結膜炎種類分為病毒性結膜炎、細菌性結膜炎、季節性過敏性結膜炎、常年性過敏性結膜炎、巨柱狀敏感性結膜炎，紅眼症傳播途徑主要透過與患者親密接觸，或間接接觸到受污染的物品感染。希瑪眼科中心提供全面結膜炎(紅眼症)診斷，會建議合適患者結膜炎治療方案。導致結膜炎成因包括:長時間配戴隱形眼鏡、注視電子螢幕、處於乾燥環境、有免疫系統疾病，以及更年期婦女。治療結膜炎以減輕不適的症狀為主，使用人工淚液是有效治療結膜炎方法。',
    },
    {
      name: 'keywords',
      content:
        '結膜炎 紅眼症 結膜炎症狀 結膜炎原因 眼角膜發炎 紅眼症初期 紅眼症傳染 結膜炎先兆 眼發炎 急性結膜炎 紅眼症症狀 慢性結膜炎 眼睛發炎 病毒性結膜炎 角膜發炎 紅眼症治療 結膜炎傳染 結膜炎初期 結膜發炎 紅眼症原因 紅眼症治療 結膜炎角膜炎 眼角膜發炎 眼紅症 急性結膜炎症狀 結膜炎治療 眼睛紅 眼睛紅腫 眼睛檢查 眼睛疾病 眼科醫生 香港眼科  希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 希瑪 希瑪醫療集團 希瑪醫療 ',
    },
  ],
}))
// 传递背景色
const backgd = [
  '#c0c0e6;',
  '-webkit-linear-gradient(to right, #c0c0e6, #dedef3);',
  'linear-gradient(to right, #c0c0e6, #dedef3);',
]
// 結膜炎症狀
const symptom = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/49f77c5d99a7780b.png',
    text: '結膜充血',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d926dc7d76ec029f.png',
    text: '眼瞼紅腫、沉重',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/850716323d310472.png',
    text: '眼睛痕癢、疼痛',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/bcda02c1c5bf937d.png',
    text: '異物感、燒灼感',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/ccacc25f729b2461.png',
    text: '流眼水、畏光',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d329a39c077ff928.png',
    text: '分泌物增多',
  },
]
const kind = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/748e5bcb92254caf.png',
    title: '病毒性結膜炎',
    text: '通常與上呼吸道感染有關，由病毒引起，主要病原體為腺病毒及腸病毒。這種結膜炎傳染性很高，但通常在數日內，不需要治療的情況下自行復原。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/701397f097eef96c.png',
    title: '細菌性結膜炎',
    text: '由多種細菌引起，最常見有流感嗜血桿菌和肺炎鏈球菌，其中衣原體感染會令初生嬰兒和成人患上細菌性結膜炎。若不及時治療，細菌性結膜炎所感染的細菌可造成眼睛嚴重的傷害。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/ef14a865c31942b9.png',
    title: '過敏性結膜炎',
    text: '過敏性結膜炎是較常見的眼疾。當眼睛受致敏原、微生物及環境中的刺激物而發炎時，免疫系統會針對致敏原產生過度的免疫反應，使結膜裡的血管腫脹，以致眼睛發紅。',
    detail: [
      '以下是常見過敏性結膜炎的種類︰',
      {
        caption: '- 季節性過敏性結膜炎',
        content:
          '多數發生於季節轉換時，常見致敏原是秋冬季的霉菌孢子及春夏交替時的植物花粉。本身有過敏體質的會更容易患上此病，例如︰氣喘、過敏性鼻炎等。',
      },
      {
        caption: '- 常年性過敏性結膜炎',
        content:
          '致敏原多數是空氣中的污染物、灰塵、塵蟎或動物毛屑等，過敏症狀一年四季都可能發生，但症狀多較輕微。',
      },
      {
        caption: '- 巨柱狀敏感性結膜炎',
        content:
          '屬長期使用隱形眼鏡常見引起的併發症。由於隱形眼鏡對眼睛來說，屬於異物，長期配戴有可能使得結膜表面發生改變，變得凹凸不平，引起不適症狀。所以若在選擇、驗配、配戴或護理上處理不當，便有機會出現併發和後遺症。',
      },
    ],
  },
]
// 傳播途徑
const approach = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/0d05a89369200317.png',
    text: '雙手接觸患者的眼睛或上呼吸道的分泌物傳播',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/f0bec1c3ab794f68.png',
    text: '透過患者的個人日用品，如毛巾、衣物、眼部化妝品或眼藥水等交叉感染',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4d61a6761a07123c.png',
    text: '如游泳人士在受污染的水源游泳，也有機會受感染',
  },
]
// 高危人士
const highRisk = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/1a586d997866355f.png',
    text: '5歲或以下兒童及嬰幼兒',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/044719c0b3767bdf.png',
    text: '有眼或鼻敏感患者',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/9210325662456759.png',
    text: '抵抗力較差人士',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/0820acef48ffd428.png',
    text: '經常觸摸雙眼人士',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/42fba00cccac8fd8.png',
    text: '長時間配戴隱形眼鏡人士',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d4a7e8890a9e4e9d.png',
    text: '長時間注視電子螢幕人士',
  },
]
// 預防結膜炎
const prevent = [
  {
    title: '避免共用個人物品',
    img: 'https://static.cmereye.com/imgs/2023/05/6f78b53bc80256f1.png',
    text: '不要與他人共用毛巾、枕頭、眼藥水、眼部化妝品、隱形眼鏡和其他可能接觸到眼睛的物品。',
  },
  {
    title: '觸摸眼睛前要先洗手',
    img: 'https://static.cmereye.com/imgs/2023/05/477c1cc938e1c255.png',
    text: '觸摸眼睛前應以梘液和清水徹底清潔雙手，並經常保持雙手乾淨衛生。',
  },
  {
    title: '避免出入高危地方',
    img: 'https://static.cmereye.com/imgs/2023/05/9bdb93a2e7d6cdda.png',
    text: '結膜炎流行期間，應避免使用公共設施，如游泳池、浴室、桑拿室、遊樂場等高危地方，以減低感染風險。',
  },
  {
    title: '徹底清潔隱形眼鏡',
    img: 'https://static.cmereye.com/imgs/2023/05/f72bd496b4dd4560.png',
    text: '使用隱形眼鏡護理液清洗鏡片，仔細清洗鏡片的兩面，建議讓鏡片浸泡在新鮮的護理液至少6小時。',
  },
  {
    title: '避免接觸過敏原',
    img: 'https://static.cmereye.com/imgs/2023/05/324f7391c1f7706f.png',
    text: '季節交替時，注意小心接觸花粉、塵蟎、動物毛屑等有機會引起結膜炎的過敏原。',
  },
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: '結膜炎',
    anchorLink: '/medical-service/conjunctivitis#conjunctivitisInfo',
  },
  {
    anchorName: '症狀',
    anchorLink: '/medical-service/conjunctivitis#symptom',
  },
  {
    anchorName: '類別',
    anchorLink: '/medical-service/conjunctivitis#kind',
  },
  {
    anchorName: '傳播途徑',
    anchorLink: '/medical-service/conjunctivitis#approach',
  },
  {
    anchorName: '高危人士',
    anchorLink: '/medical-service/conjunctivitis#highRisk',
  },
  {
    anchorName: '治療',
    anchorLink: '/medical-service/conjunctivitis#means',
  },
  {
    anchorName: '預防方法',
    anchorLink: '/medical-service/conjunctivitis#prevent',
  },
]
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}
// 拨打电话
const callTel = () => {
  location.href = 'tel://+(852) 3956 2025'
}
</script>

<template>
  <div class="conjunctivitis">
    <div class="conjun_header">
      <!-- 头部 -->
      <div>
        <div>
          <div>結膜炎</div>
          <div>CONJUNCTIVITIS</div>
          <div>CONJUNCTIVITIS</div>
          <div>CONJUNCTIVITIS</div>
        </div>
      </div>
    </div>
    <!-- 結膜炎 -->
    <div class="conjunctivitis_nav">
      <!-- 什麼是結膜炎？ -->
      <div id="conjunctivitisInfo">
        <div>
          <div>什麼是結膜炎？</div>
          <div>
            結膜炎俗稱「紅眼症」，指覆蓋著眼白、眼瞼內方及眼球表面的半透明薄膜發生炎症，薄膜會變成粉紅色或紅色。較常見由病毒引起，細菌性感染或過敏反應亦是造成結膜炎的原因。任何人均可能染上結膜炎，兒童更較常受到感染。
          </div>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/3ce6dbff76e16a32.png"
            alt="結膜炎"
          />
        </div>
      </div>
      <!-- 結膜炎症狀 -->
      <div id="symptom">
        <div class="conjun_text_color">結膜炎症狀</div>
        <div>
          <div v-for="(item, index) in symptom" :key="index">
            <div><img :src="item.img" :alt="item.text" /></div>
            <div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div class="conjun_button_bg_color" @click="callTel()">
          <p>已有結膜炎症狀？</p>
          <p>致電立即治療</p>
        </div>
      </div>
      <!-- 結膜炎種類 -->
      <div id="kind">
        <div class="conjun_text_color">結膜炎種類</div>
        <div>
          <div v-for="(item, index) in kind" :key="index">
            <div>
              <div><img :src="item.img" alt="" /></div>
              <div>
                <div>{{ item.title }}</div>
              </div>
            </div>
            <div>
              <div>{{ item.text }}</div>
              <div v-for="(ele, i) in item.detail" :key="i">
                <div v-if="typeof ele === 'string'">{{ ele }}</div>
                <div v-else>
                  <div v-for="(el, index) in ele" :key="index">
                    {{ el }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="conjun_button_bg_color" @click="goWhatsApp()">
          <p>結膜炎經常復發？</p>
          <p>預約見醫生對症下藥！</p>
        </div>
      </div>
      <!-- 傳播途徑 -->
      <div id="approach">
        <div class="conjun_text_color">傳播途徑</div>
        <div>
          結膜炎分為傳染性及非傳染性。病毒性和細菌性結膜炎屬傳染性，傳染力極高，主要透過與患者親密接觸，或間接接觸到受污染的物品均可致病。
        </div>
        <div>
          <div>常見的傳染途徑︰</div>
          <div>
            <div v-for="(item, index) in approach" :key="index">
              <div><img :src="item.img" :alt="item.text" /></div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="68px"
            height="68px"
          >
            <image
              x="0px"
              y="0px"
              width="68px"
              height="68px"
              xlink:href="data:img/png;base64,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"
            />
          </svg>
          <div>
            當病毒入侵眼睛，會經過一段潛伏期後才發病，潛伏期為1至12天不等，由病發至康復需要大約10天至數星期。
          </div>
        </div>
        <div class="conjun_button_bg_color" @click="callTel()">
          <p>治療結膜炎，避免傳染家人！</p>
          <p>致電預約診治</p>
        </div>
      </div>
      <!-- 高危人士 -->
      <div id="highRisk">
        <div class="conjun_text_color">高危人士</div>
        <div>
          <div>任何人士都有機會感染結膜炎，但以下人士較為高危：</div>
          <div>
            <div v-for="(item, index) in highRisk" :key="index">
              <div><img :src="item.img" :alt="item.text" /></div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 結膜炎治療 -->
      <div id="means">
        <div class="conjun_text_color">結膜炎治療</div>
        <div>
          <div>
            <div>病毒性結膜炎</div>
            <div>
              一般情況下，病毒性結膜炎患者會在大約1星期內痊癒，毋須特別治療。如要紓緩不適的症狀，患者可多作休息，將冷濕的毛巾敷在眼睛上，一日數次。
            </div>
          </div>
          <div>
            <div>細菌性結膜炎</div>
            <div>
              治療細菌性結膜炎，一般以醫生處方藥物作治療，例如︰含抗生素的眼藥水或眼膏。
            </div>
          </div>
          <div>
            <div>過敏性結膜炎</div>
            <div>
              如屬於因接觸致敏源而導致的結膜炎，避免接觸致敏源可減輕症狀或減少發作。若因配戴隱形眼鏡所引起則需要停戴。此外，臨床上亦可透過用藥控制過敏性結膜炎的反應。
            </div>
          </div>
        </div>
      </div>
      <!-- 預防結膜炎 -->
      <div id="prevent">
        <div class="conjun_text_color">預防結膜炎</div>
        <div>
          <div v-for="(item, i) in prevent" :key="i">
            <div>{{ item.title }}</div>
            <div><img :src="item.img" :alt="item.title" /></div>
            <div>{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <rightSidesNavigation :service-navigation="serviceNavigation" />
    </div>
    <!-- 下载 -->
    <div class="dow">
      <div>
        <div>
          <div @click.stop="getPdf('conjunctivitis.pdf','結膜炎')">
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt=""
              srcset=""
            />
          </div>
          <div @click.stop="getPdf('conjunctivitis.pdf','結膜炎')">
            <p>結膜炎</p>
            <p>下載小冊子</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#c0c0e6;'}`"
    />
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
@keyframes bgposition {
    0% {
        transform: translate(30%, 30%);
    }
    25% {
        transform: translate(30%, -30%);
    }
    50% {
        transform: translate(-30%, -30%);
    }
    75% {
        transform: translate(-30%, 30%);
    }
    100% {
        transform: translate(30%, 30%);
    }
}
.conjunctivitis_nav {
  // margin: 0 300px;
  max-width: 1200px;
  margin: auto;
  transform: scale(0.85);
  margin-top: -34%;

  // 什麼是結膜炎？
  & > div:nth-child(1) {
    margin-top: 130px;
    display: flex;
    justify-content: flex-end;
    position: relative;

    & > div:nth-child(1) {
      position: absolute;
      padding-right: 787px;
      margin-top: 185px;

      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 50px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 48px;
        letter-spacing: 0px;
        color: #6b709e;
      }

      & > div:nth-child(2) {
        margin-top: 38px;
        font-family: 'Noto Sans HK';
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 42px;
        letter-spacing: 0px;
        color: #6b709e;
      }
    }

    & > div:nth-child(2) {
      transform: scale(0.85);

      & > img {
        z-index: 5;
        position: relative;
      }
    }

    & > div:nth-child(2)::before {
      content: '';
      width: 663px;
      height: 569px;
      background-color: #f2f2f2;
      border-radius: 20px;
      display: inline-block;
      top: 0;
      right: 70px;
      top: 80px;
      position: absolute;
      z-index: 1;
    }
  }

  // 結膜炎症狀
  & > div:nth-child(2) {
    margin-top: 260px;

    & > div:nth-child(2) {
      margin-top: 62px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > div {
        margin-right: 105px;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-child(2) {
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #6b709e;
        }
      }

      & > div:nth-child(n + 4) {
        margin-top: 55px;
      }

      & > div:nth-child(3),
      & > div:nth-child(6) {
        margin-right: 0;
      }
    }

    & > div:nth-child(3) {
      width: 580px;
      height: 140px;
      margin-top: 120px;
    }
  }

  // 結膜炎種類
  & > div:nth-child(3) {
    margin-top: 180px;

    & > div:nth-child(2) {
      margin-top: 200px;

      & > div {
        margin-bottom: 180px;

        & > div:nth-child(1) {
          position: relative;

          & > div:nth-child(1) {
            border-radius: 50%;
            width: 170px;
            height: 170px;
            background-color: #ffffff;
            border: solid 6px #c0c0e6;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: -125px;
            left: 40px;
            z-index: 5;
          }

          & > div:nth-child(2) {
            width: 445px;
            height: 80px;
            background-color: #ffffff;
            border-radius: 20px;
            border: solid 4px #c0c0e6;
            position: absolute;
            left: 110px;
            bottom: -25px;

            font-family: 'NotoSansHK-Bold';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #6b709e;

            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        & > div:nth-child(2) {
          border-radius: 20px;
          border: solid 2px #c0c0e6;
          padding: 80px 41px 80px 32px;

          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.8;
          letter-spacing: 0px;
          color: #6a6e8e;
        }
      }

      & > :last-child {
        margin-bottom: 0;

        & > div:nth-child(2) {
          & > div:nth-child(2) {
            margin-bottom: 50px;
          }

          & > div:nth-child(3),
          & > div:nth-child(4),
          & > div:nth-child(5) {
            font-family: 'Noto Sans HK';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.8;
            letter-spacing: -1px;
            color: #6a6e8e;

            & > div > div:nth-child(1) {
              font-family: 'NotoSansHK-Medium';
              font-size: 22px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 34px;
              letter-spacing: 0px;
              color: #232967;

              margin-bottom: 18px;
              margin-top: 50px;
            }
          }
        }
      }
    }

    & > div:nth-child(3) {
      width: 580px;
      height: 140px;
      margin-top: 100px;
    }
  }

  // 傳播途徑
  & > div:nth-child(4) {
    margin-top: 180px;

    & > div:nth-child(2) {
      margin-top: 60px;
      font-family: 'Noto Sans HK';
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #515151;
    }

    & > div:nth-child(3) {
      margin-top: 50px;

      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 34px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(2) {
        margin-top: 50px;
        padding: 0 72px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > div {
          & > div:nth-child(2) {
            width: 260px;
            margin-top: 40px;

            font-family: 'Noto Sans HK';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #515151;
          }
        }
      }
    }

    & > div:nth-child(4) {
      position: relative;
      margin-top: 100px;
      margin-left: 32px;
      border-radius: 60px;
      border: solid 2px #c0c0e6;
      padding: 27px 61px;

      font-family: 'Noto Sans HK';
      font-size: 26px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 34px;
      letter-spacing: 0px;
      color: #515151;

      & > svg {
        position: absolute;
        left: -32px;
      }
    }
  }

  // 高危人士
  & > div:nth-child(5) {
    margin-top: 180px;

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(2) {
        margin-top: 56px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        & > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          & > div:nth-child(2) {
            margin-top: 39px;
            font-family: 'Noto Sans HK';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #515151;
          }
        }

        & > div:nth-child(n + 4) {
          margin-top: 77px;
        }
      }
    }
  }

  // 結膜炎治療
  & > div:nth-child(6) {
    margin-top: 180px;

    & > div:nth-child(2) {
      & > div {
        margin-top: 100px;

        & > div:nth-child(1) {
          width: 280px;
          height: 70px;
          margin-bottom: 30px;
          background-color: #c0c0e6;
          border-radius: 35px;

          font-family: 'NotoSansHK-Bold';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #ffffff;

          display: flex;
          justify-content: center;
          align-items: center;
        }

        & > div:nth-child(2) {
          font-family: 'Noto Sans HK';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 42px;
          letter-spacing: 0px;
          color: #515151;
        }
      }

      & > div:first-child {
        margin-top: 80px;
      }
    }
  }

  // 預防結膜炎
  & > div:nth-child(7) {
    margin-top: 180px;

    & > div:nth-child(2) {
      margin-top: 150px;
      margin-bottom: 266px;
      padding: 0 45px 0 49px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > div {
        width: 290px;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Bold';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(2) {
          height: 180px;
          padding: 50px 0;
          display: flex;
          align-items: center;
          justify-content: center;

          & > img {
            width: 100%;
          }
        }

        & > div:nth-child(3) {
          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;
        }
      }

      & > div:nth-child(4) {
        margin-left: 180px;
      }

      & > div:nth-child(5) {
        margin-right: 180px;
      }

      & > div:nth-child(n + 4) {
        margin-top: 120px;
      }
    }
  }
}

.conjun_text_color {
  font-family: 'NotoSansHK-Bold';
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #545989;
  text-align: center;
  position: relative;
  padding-bottom: 20px;
}

.conjun_text_color::after {
  content: '';
  width: 57px;
  height: 3px;
  background-color: #c0c0e6;
  border-radius: 1px;
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}

// 圆角 矩形按钮样式
.conjun_button_bg_color {
  cursor: pointer;
  // background-image: linear-gradient(-90deg, #c0c0e6 0%, #d8d8f4 100%),
  //   linear-gradient(#eda2a6, #eda2a6);
  background-blend-mode: normal, normal;

  font-family: 'Noto Sans HK';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;

  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
  width: 580px;
  height: 140px;
  position: relative;
  overflow: hidden;
  text-shadow: 0 2px 5px #d8d8f4;
  &::before {
    content: "";
    position: absolute;
    top: -100%;
    left: -100%;
    bottom: -100%;
    right: -100%;
    background: linear-gradient(45deg,  #fce7e8 0%, #a9a8d0 100%);
    background-size: 100% 100%;
    animation: bgposition 5s infinite linear alternate;
    z-index: -1;
  }
}

.conjun_header {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 100px;
    margin-left: 42vw;

    & > div:nth-child(1) {
      & > div:nth-child(1) {
        font-family: 'NotoSansCJKtc-Bold';
        font-size: 119px;
        font-weight: 700;
        font-stretch: normal;
        line-height: 0.9;
        letter-spacing: 1px;
        color: #c0c0e6;
        position: sticky;
      }

      & > div:nth-child(2) {
        font-family: 'DINCondensed-Bold';
        position: relative;
        z-index: 5;
      }
       & > div:nth-child(3),& > div:nth-child(4) {
        font-family: 'DINCondensed-Bold';
        display: block;
        position: relative;
        z-index: 5;
        -webkit-text-stroke: 1.5px #c0c0e6;
        color: transparent;
        clip-path: polygon(0 30%, 100% 30%, 100% 100% ,0 100%);
        transform: translateY(-45%);
      }
      & > div:nth-child(4){
        clip-path: polygon(0 55%, 100% 55%, 100% 100% ,0 100%);
        transform: translateY(-115%);
      }
      font-size: 131px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 1.2;
      text-align: right;
      letter-spacing: -3.5px;
      color: #c0c0e6;
      margin-left: -15px;
    }

    & > div:nth-child(1)::after {
      content: '';
      background: #f2f2f2;
      width: 40vw;
      height: 300px;
      position: absolute;
      top: 211px;
      right: 0;
    }

    & > div:nth-child(2) {
      position: relative;
      top: -20px;
      left: -5px;

      & > img {
        position: relative;
        z-index: 5;
      }

      & > img:nth-child(1) {
        margin-bottom: 20px;
      }
    }
  }
}

// 下载
.dow {
  margin-top: -40%;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    & > div {
      width: 62.5%;
      height: 202px;
      background: #c0c0e6;
      position: relative;
      display: flex;
      align-items: center;

      & > div:nth-child(1) {
        margin-left: 37.28433%;
        margin-right: 3.90625%;
        cursor: pointer;
        & > img {
          width: 120px;
          height: 135px;
        }
      }

      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .conjun_header {
    &>div:nth-child(1) {
      width: calc(100% - 60px);
      justify-content: flex-end;
      align-items: flex-end;
      display: flex;
      margin: 150px auto 0;
      &>div:nth-child(1) {
        &>div:nth-child(1) {
          font-size: 40px;
          text-align: right;
        }
        &>div:nth-child(2) {
          font-size: 42px;
          letter-spacing: 0.01em;
          margin-top: 0;
          text-align: right;
          line-height: 1;
        }
        & > div:nth-child(3),& > div:nth-child(4) {
          font-size: 42px;
          letter-spacing: 0.01em;
          -webkit-text-stroke: 1px #c0c0e6;
          clip-path: polygon(0 0, 100% 0, 100% 50% ,0 50%);
          transform: translateY(-20%);
        }
        & > div:nth-child(4) {
          clip-path: polygon(0 0, 100% 0, 100% 40% ,0 40%);
          transform: translateY(-77%);
        }
      }
      &>div:nth-child(1)::after {
        width: 160px;
        height: 200px;
        top: 190px;
      }
      &>div:nth-child(2) {
        top: 0;
        width: 207px;
        &>img:nth-child(1){
          margin-bottom: 5px;
        }
      }
    }
  }
  .conjunctivitis_nav {
    transform: scale(1);
    margin-top: 190px;
    & > div:nth-child(1) {
      width: calc(100% - 60px);
      margin: 0 auto;
      flex-direction: column;
      & > div:nth-child(1) {
        position: relative;
        margin-top: 0;
        padding-right: 0;
        & > div:nth-child(1) {
          font-size: 24px;
          text-align: center;
        }
        & > div:nth-child(2) {
          font-size: 14px;
          line-height: 1.8;
          margin-top: 20px;
        }
      }
      & > div:nth-child(2) {
        width: calc(100% - 30px);
        margin-top: 30px;
        transform: scale(1);
        img{
          width: 100%;
          margin-left: 30px;
        }
      }
      & > div:nth-child(2)::before {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        top: 30px;
        right: 0px;
      }
    }
    & > div:nth-child(2) {
      width: calc(100% - 60px);
      margin: 100px auto 0;
      & > div:nth-child(2) {
        margin-top: 25px;
        & > div{
          width: calc(50% - 25px);
          margin-right: 0;
          margin-bottom: 25px;
          & > div:nth-child(2) {
            font-size: 16px;
          }
        }
        & > div:nth-child(n + 4) {
          margin-top: 0;
        }
      }
      & > div:nth-child(3) {
        margin-top: 30px;
        width: max-content;
        height: 85px;
        font-size: 18px;
        line-height: 1.6;
        padding: 5px 50px 0;
      }
    }
    & > div:nth-child(3) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 50px;
        & > div {
          margin-bottom: 50px;
          & > div:nth-child(1) {
            & > div:nth-child(1) {
              width: 90px;
              height: 90px;
              border: solid 5px #c0c0e6;
              position: relative;
              left: 25px;
              top: 0;
            }
            & > div:nth-child(2) {
              width: 210px;
              border: solid 3px #c0c0e6;
              height: 45px;
              font-size: 16px;
              font-weight: 600;
              position: absolute;
              left: 70px;
              bottom: 15px;
              padding-left: 30px;
              padding-top: 7px;
              border-radius: 15px;
            }
          }
          & > div:nth-child(2) {
            margin-top: -30px;
            font-size: 14px;
            line-height: 1.8;
            padding: 40px 15px 25px;
          }
        }
        & > :last-child {
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              margin-bottom: 0;
            }
            & > div:nth-child(3),
            & > div:nth-child(4),
            & > div:nth-child(5){
              font-size: 14px;
              line-height: 1.8;
              & > div > div:nth-child(1) {
                font-size: 16px;
                margin-bottom: 0;
                margin-top: 20px;
                line-height: 1.8;
              }
            }
          }
        }
      }
      & > div:nth-child(3) {
        margin-top: 55px;
        width: max-content;
        height: 85px;
        font-size: 18px;
        line-height: 1.6;
        padding: 5px 50px 0;
      }
    }
    // 傳播途徑
    & > div:nth-child(4) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 35px;
        font-size: 14px;
        line-height: 1.8;
      }
      & > div:nth-child(3) {
        margin-top: 20px;
        & > div:nth-child(1) {
          font-size: 14px;
        }
        & > div:nth-child(2) {
          flex-direction: column;
          padding: 0;
          margin-top: 25px;
          & > div {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            & > div:nth-child(1) {
              width: 90px;
              position: relative;
              z-index: 2;
            }
            & > div:nth-child(2) {
              position: relative;
              z-index: 1;
              width: auto;
              flex: 1;
              margin-left: -40px;
              padding: 10px 15px 5px 50px;
              font-size: 13px;
              line-height: 1.6;
              border-radius: 15px;
              border: 2px solid #E5E5E5;
              margin-top: 0;
            }
          }
        }
      }
      & > div:nth-child(4) {
        font-size: 14px;
        line-height: 1.8;
        padding: 25px 20px 20px 30px;
        border-radius: 30px;
        margin-left: 22px;
        margin-top: 0;
        &>svg{
          width: 45px;
          height: 45px;
          top: 50%;
          transform: translate(-50%,-50%);
          left: 0;
          image{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    & > div:nth-child(5) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          font-size: 13px;
          margin-top: 35px;
          line-height: 1.8;
        }
        & > div:nth-child(2) {
          margin-top: 32px;
          & > div {
            width: calc(50% - 20px);
            margin-bottom: 50px;
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.6;
              margin-top: 15px;
              width: 120%;
              text-align: center;
            }
          }
          & > div:nth-child(n + 4) {
            margin-top: 0;
          }
        }
      }
    }
    & > div:nth-child(6) {
      width: calc(100% - 60px);
      margin: 20px auto 0;
      & > div:nth-child(2) {
        & > div {
          margin-top: 35px;
          & > div:nth-child(1) {
            width: 160px;
            height: 40px;
            font-size: 16px;
            margin-bottom: 10px;
          }
          & > div:nth-child(2) {
            font-size: 14px;
            margin-top: 5px;
            line-height: 1.8;
          }
        }
        & > div:first-child {
          margin-top: 35px;
        }
      }
    }
    & > div:nth-child(7) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 45px;
        margin-bottom: 0px;
        padding: 0;
        justify-content: center;
        & > div {
          width: 50%;
          margin-bottom: 60px;
          align-content: flex-start;
          & > div:nth-child(1) {
            font-size: 15px;
            font-weight: 600;
            width: calc(100% - 25px);
            text-align: center;
          }
          & > div:nth-child(2) {
            width: calc(100% - 25px);
            padding: 20px 0 25px;
            height: 120px;
            img{
              width: 50%;
            }
          }
          & > div:nth-child(3) {
            width: calc(100% - 25px);
            font-size: 13px;
            line-height: 1.7;
          }
        }
        & > div:nth-child(4) {
          margin-left: 0;
        }
        & > div:nth-child(5) {
          margin-right: 0;
        }
        & > div:nth-child(n + 4) {
          margin-top: 0;
        }
        &>div:last-child{
          width: 80%;
          & > div:nth-child(1) {
            width: 100%;
          }
          & > div:nth-child(2) {
            width: 60%;
          }
          & > div:nth-child(3) {
            width: 100%;
          }
        }
        & > div:nth-child(2n) {
          align-items: flex-end;
        }
      }
    }
  }
  .conjun_text_color {
    font-size: 24px;
    padding-bottom: 5px;
  }
  .conjun_button_bg_color {
    margin-top: 55px;
    width: max-content;
    height: 70px;
    font-size: 16px;
    line-height: 1.6;
    padding: 5px 30px 0;
  }
  .conjun_text_color::after {
    width: 50px;
    height: 2px;
  }
  .dow {
    margin-top: 40px;
    margin-bottom: 100px;
    font-size: 16px;
    & > div:nth-child(1) {
      & > div {
        width: 80%;
        height: 90px;
        & > div:nth-child(1) {
          margin-left: 30%;
          margin-right: 30px;
          &>img{
            width: 55px;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .conjunctivitis_nav {
    margin-top: -20%;
  }

  .conjun_header {
    & > div:nth-child(1) {
      margin-left: 48vw;
    }
  }

  .dow {
    margin-top: -25%;

    & > div:nth-child(1) {
      & > div {
        & > div:nth-child(1) {
          margin-left: 32.2vw;
        }
      }
    }
  }
}
</style>
