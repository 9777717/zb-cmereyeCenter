<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
// compiler macro
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.medical_service.medical_service_glaucoma_head'),
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心提供全面青光眼檢查及治療。一般青光眼患者會出現眼睛脹痛、充血、突然視力模糊、頭痛/ 偏頭痛、噁心/嘔吐、視野收窄等症狀，嚴重青光眼的患者視力可能快速退化，甚至有機會在幾天內失明。希瑪眼科中心提供全面青光眼診斷，並會建議合適您的青光眼治療方案。青光眼成因: 包括: 年齡超過40歲(60歲以上患青光眼機會增加6倍)、有青光眼家族遺傳病史、深近視或嚴重遠視、患糖尿病、高血壓患者、患心血管疾病、眼曾受過眼創傷、 長期使用類固醇，都較大機會患上青光眼。治療青光眼以減輕不適的症狀為主，以藥物控制青光眼病情，若用藥後仍無法控制病情，醫生會考慮採用手術治療。',
    },
    {
      name: 'keywords',
      content:
        '青光眼 眼壓高 青光眼手術 青光眼症狀 青光眼成因 青光眼治療 青光眼前兆 眼壓 眼壓高原因 急性青光眼 慢性青光眼 青光眼手術 青光眼測試 青光眼初期 青光眼前兆 青光眼藥水 青光眼檢查 眼壓高治療方法 降眼壓藥水 急性青光眼症狀 青光眼激光治療 降眼壓 青光眼預防 預防青光眼 眼壓檢查 青光眼手術費用 急性青光眼成因 青光眼激光治療 眼壓高治療 眼睛疾病 眼科醫生 香港眼科 希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 希瑪 希瑪醫療集團 希瑪醫療',
    },
  ],
}))
// 传递背景色
const backgd = [
  '#bbe0d5;',
  '-webkit-linear-gradient(to right, #bbe0d5, #97d2c9);',
  'linear-gradient(to right, #bbe0d5, #97d2c9);',
]
// FQA问答
const meetArr = [
  {
    title:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_meetArr.meetArr_title1',
    agree:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_meetArr.meetArr_agree1',
  },
  {
    title:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_meetArr.meetArr_title2',
    agree:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_meetArr.meetArr_agree2',
  },
  {
    title:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_meetArr.meetArr_title3',
    agree:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_meetArr.meetArr_agree3',
  },
  {
    title:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_meetArr.meetArr_title4',
    agree:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_meetArr.meetArr_agree4',
  },
]
const symptoms = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/53e4d8c79f82e4a6.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_symptoms.symptoms_text1',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a58ec7eb4f43f6a4.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_symptoms.symptoms_text2',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/b452ba8e2b783f02.png',
    text: [
      'pages.medical_service.service_glaucoma_title.service_glaucoma_symptoms.symptoms_text3_1',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_symptoms.symptoms_text3_2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/e2b8896e55129333.png',
    text: [
      'pages.medical_service.service_glaucoma_title.service_glaucoma_symptoms.symptoms_text4_1',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_symptoms.symptoms_text4_2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4c2daf21d82713ee.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_symptoms.symptoms_text5',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/376c7e6cf5bda7ef.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_symptoms.symptoms_text6',
  },
]
const worsen = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/f751ce73a8968035.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_worsen.worsen_text1',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/68c8066d950ed985.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_worsen.worsen_text2',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/b2b1e3c11112c405.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_worsen.worsen_text3',
  },
]
const congenital = [
  {
    id: '1',
    title:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_congenital.congenital_title1',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_congenital.congenital_text1',
    img: 'https://static.cmereye.com/imgs/2023/05/14c6771dcd344e18.png',
  },
  {
    id: '2',
    title:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_congenital.congenital_title2',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_congenital.congenital_text2',
    img: 'https://static.cmereye.com/imgs/2023/05/d63a41599833af19.png',
  },
  {
    id: '3',
    title:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_congenital.congenital_title3',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_congenital.congenital_text3',
    img: 'https://static.cmereye.com/imgs/2023/05/422b6918adf2680a.png',
  },
]
const kind = [
  {
    id: '1',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_text1',
    detail:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_detail1',
    img: 'https://static.cmereye.com/imgs/2023/05/3fed11ffa5e46d5a.png',
  },
  {
    id: '2',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_text2',
    detail:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_detail2',
    img: '',
  },
  {
    id: '3',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_text3',
    detail:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_detail3',
    img: '',
  },
  {
    id: '4',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_text4',
    detail:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_detail4',
    img: '',
  },
  {
    id: '5',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_text5',
    detail: [
      'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_detail5_1',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_detail5_2',
    ],
    img: '',
  },
  {
    id: '6',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_text6',
    detail:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_detail6',
    img: '',
  },
  {
    id: '7',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_text7',
    detail: [
      'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_detail7_1',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_detail7_2',
    ],
    img: '',
  },
  {
    id: '8',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_text8',
    detail:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_kind.kind_detail8',
    img: '',
  },
]
// 动态展示先天性青光眼模块
const action = ref(0)
const kindSelect = (i: number) => {
  action.value = i
}
// 青光眼高危人群
const crowd = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/5d8b794484273cbe.png',
    text: [
      'pages.medical_service.service_glaucoma_title.service_glaucoma_crowd.crowd_text1_1',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_crowd.crowd_text1_2',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_crowd.crowd_text1_3',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/5064b37ea2ec1236.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_crowd.crowd_text2',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/600a6ca70769660d.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_crowd.crowd_text3',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/bc02fc8bab322c86.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_crowd.crowd_text4',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/3d99ac56efdb9366.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_crowd.crowd_text5',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/8a90c79bd5022fbf.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_crowd.crowd_text6',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/1a86d61e93b74709.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_crowd.crowd_text7',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/03f99346138862e1.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_crowd.crowd_text8',
  },
]
// 青光眼主要診斷方法
const diagnostic = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/e399ba83f28b9812.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_diagnostic.diagnostic_text1',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/bdc9d326f529ed42.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_diagnostic.diagnostic_text2',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/997263179e4722a8.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_diagnostic.diagnostic_text3',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2c03b6364947c4c5.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_diagnostic.diagnostic_text4',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/b098baaa8a2cbdbc.png',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_diagnostic.diagnostic_text5',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/eef206cba5ab506d.png',
    text: [
      'pages.medical_service.service_glaucoma_title.service_glaucoma_diagnostic.diagnostic_text6_1',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_diagnostic.diagnostic_text6_2',
    ],
  },
]
// 青光眼的治療
const treat = [
  {
    remedy:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_remedy1',
    name: 'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_name1',
    range:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_range1',
  },
  {
    remedy:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_remedy2',
    name: [
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_name2_1',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_name2_2',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_name2_3',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_name2_4',
    ],
    range: [
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_range2_1',
      [
        'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_range2_2',
        'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_range2_3',
      ],
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_range2_4',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_range2_5',
    ],
  },
  {
    remedy: [
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_remedy3_1',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_remedy3_2',
    ],
    name: [
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_name3_1',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_name3_2',
    ],
    range: [
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_range3_1',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_range3_2',
    ],
  },
  {
    remedy: [
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_remedy4_1',
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_remedy4_2',
    ],
    name: 'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_name4',
    range:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_treat.treat_range4',
  },
]
// 青光眼预防
const guardAgainst = [
  {
    id: '1',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_guardAgainst.guardAgainst_text1',
    detail:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_guardAgainst.guardAgainst_detail1',
  },
  {
    id: '2',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_guardAgainst.guardAgainst_text2',
    detail:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_guardAgainst.guardAgainst_detail2',
  },
  {
    id: '3',
    text: 'pages.medical_service.service_glaucoma_title.service_glaucoma_guardAgainst.guardAgainst_text3',
    detail:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_guardAgainst.guardAgainst_detail3',
  },
]
// 内部导航
const serviceNavigation = [
  {
    anchorName:
      'pages.medical_service.glaucoma',
    anchorLink: '/medical-service/glaucoma#glaucoma',
  },
  {
    anchorName:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_navgation.navgation_text1',
    anchorLink: '/medical-service/glaucoma#factor',
  },
  {
    anchorName:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_navgation.navgation_text2',
    anchorLink: '/medical-service/glaucoma#symptoms',
  },
  {
    anchorName:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_navgation.navgation_text3',
    anchorLink: '/medical-service/glaucoma#category',
  },
  {
    anchorName:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_navgation.navgation_text4',
    anchorLink: '/medical-service/glaucoma#crowd',
  },
  {
    anchorName:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_navgation.navgation_text5',
    anchorLink: '/medical-service/glaucoma#diagnostic',
  },
  {
    anchorName:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_navgation.navgation_text6',
    anchorLink: '/medical-service/glaucoma#treat',
  },
  {
    anchorName:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_navgation.navgation_text7',
    anchorLink: '/medical-service/glaucoma#guardAgainst',
  },
  {
    anchorName:
      'pages.medical_service.service_glaucoma_title.service_glaucoma_navgation.navgation_text8',
    anchorLink: '/medical-service/glaucoma#faq',
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
  <div>
    <div class="glaucoma_heaf">
      <div>
        <div>{{ $t('pages.medical_service.glaucoma') }}</div>
        <div>GLAUCOMA</div>
      </div>
      <div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="568px"
            height="52px"
          >
            <image
              x="0px"
              y="0px"
              width="568px"
              height="52px"
              xlink:href="data:img/png;base64,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"
            />
          </svg>
        </div>
        <div style="margin-top: 5px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="570px"
            height="39px"
          >
            <image
              x="0px"
              y="0px"
              width="570px"
              height="39px"
              xlink:href="data:img/png;base64,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"
            />
          </svg>
        </div>
        <!-- <img src="https://static.cmereye.com/imgs/2023/05/fb9e1aefd79e4a11.png" />
          <img src="https://static.cmereye.com/imgs/2023/05/c3b55dfc41770b3d.png" /> -->
      </div>
    </div>
    <div class="glaucoma">
      <!-- 青光眼 -->
      <div>
        <!-- 请勿删除 -->
      </div>
      <!-- 什麼是青光眼？ -->
      <div id="glaucoma">
        <div>
          {{
            $t(
              'pages.medical_service.service_glaucoma_title.service_glaucoma_title1'
            )
          }}
        </div>
        <div>
          {{
            $t(
              'pages.medical_service.service_glaucoma_title.service_glaucoma_text1'
            )
          }}
        </div>
      </div>
      <!-- 青光眼成因 -->
      <div id="factor">
        <div>
          {{
            $t(
              'pages.medical_service.service_glaucoma_title.service_glaucoma_title2'
            )
          }}
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/b687a1dc53df1fe7.png"
              :alt="`${$t(
                'pages.medical_service.service_glaucoma_title.service_glaucoma_title2'
              )}`"
            />
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_text2'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_text3'
                )
              }}
            </div>
          </div>
        </div>
        <div @click="goWhatsApp()">
          <div>
            {{
              $t(
                'pages.medical_service.service_glaucoma_title.service_glaucoma_btn1_1'
              )
            }}
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_glaucoma_title.service_glaucoma_btn1_2'
              )
            }}
          </div>
        </div>
      </div>
      <!-- 青光眼的症狀 -->
      <div id="symptoms">
        <div>
          {{
            $t(
              'pages.medical_service.service_glaucoma_title.service_glaucoma_title3'
            )
          }}
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_glaucoma_title.service_glaucoma_text4'
              )
            }}
          </div>
          <div>
            <div v-for="(item, index) in symptoms" :key="index">
              <img :src="item.img" srcset="" />
              <div>
                <div v-if="Array.isArray(item.text)">
                  <div v-for="(ele, i) in item.text" :key="i">
                    {{ $t(ele) }}
                  </div>
                </div>
                <div v-else>{{ $t(item.text) }}</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="83px"
                height="83px"
              >
                <image
                  x="0px"
                  y="0px"
                  width="83px"
                  height="83px"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABaFBMVEXtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtoqbtpKj2ztD88vL//v72ztHto6f65uf////1zM7vq67++vr43N7xtbjxtrr76+v77O30xcf0xsnup6v99vf31dfwsbT//f365efzv8Lxubzupan98/PzxMbyvL720NLvrK/++/zvrbD53uD1y830xMb54OHxuLv20dP1ysz87e7319n0yMv53d/319juqa3++Pj64+T43d742dr76erwtLf88PD99vb87/Dzw8X+/Pzupqn99PXtpaj99fbupqr209TvrrLvqq754uPxt7ryvcD88PH66On20tTws7bwsrXzw8b++/v0xcjzwcPyur3zwsXzwML99/fzvsH76On//P342Nr42dvuqq3mdJwxAAAAH3RSTlMAB0+Uy+r6lVARg+0SXOsEm5wFA66vnluFCO6XxvkGzxWqqgAAAAFiS0dEJy0PqCMAAAAHdElNRQfnBQsOOQzV2GVwAAACvklEQVRYw8XZ61cSQRQA8KVECZSyB1Zas0I4KGEkCD7C6KlkoYmhmJVp2vuBFf77Me0uzMzOWXZn7xzvJ+buub/DYYZhuKNpVgTOnO0L9iOJ6A/2DYQCGh/nwhEZrRuR8CArDkX9gSSiQxR4/oJ/kMTwRUu8dBlGROiKZQ5DiQjFDHEETkRohIiDQUgySuY9DCkidFXTrl2HJSMBLQQrIhTSRqHJUW0MmhzTAL6JbES1G9BkvwYtInSKpD4eT8Rv6YBkcgKTmEjCkSlsRAqMnJwyyalJKDKNrUgDkbdxNzIw5DRF3uk5Q27ILKbjLgA5k2PI3Ix/Mo/ZyPsmZwscWZj1Sxb/O3Pk5bxhFn2Sc9hGGgNpcmHRUO6RQckkFxf8kEumkqXeMcZLPsj7ZXo1dsjyA3nyoYU8IqPHnVl/Ik0+7RjLZLjSXUnzkmSy0iGe0R9sOypJOXK1Szwn4xfUgl+VIqtrXWGdJF5S5FpVhtyghBpJrNPfyw0JcjNBAa9IpkaTiU3vJAPUSWaL2T5qnsltpr5BUnV2S9r2SO68Zut327kym3rz1hu5zO2S7V9bnUvhd57IvQZX3t533/NkY88Luc+XH7T3dz6H9z2QJVv1B4QObElcck3qh7biraOjip081N2SKew2Ui7JzqmqdwjOXUIy7VoUnbtEZEZQWfj46fN4Q2Rm3JDTgsIV8uCLiLSduwRkVlS4Q54kv4oefetJcqcqM4y3Ipw2/txlJ/OiMvydPPohnqF8D9J2qjIXy89d/VdTTHLnLhtZdLV02Cg6kscSIsbHTmRNivztRP6RIgtOZF2KzDmRf6XIlhNZjUuI8RPHRXTSanoEmy1GPM2/+F5IBe0SBU0dBa0nBQ0yBW08Bc1GBS1RFY1b2Pay2a6PwYkxq/kP16q/qe5CQcW1h5LLGXKFFBqAuUL6B2mwXEc2v3ODAAAAAElFTkSuQmCC"
                />
              </svg>
              <div>
                {{
                  $t(
                    'pages.medical_service.service_glaucoma_title.service_glaucoma_text5'
                  )
                }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="18px"
              height="24px"
            >
              <image
                x="0px"
                y="0px"
                width="18px"
                height="24px"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAMAAADAi10DAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEX///9Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo57///+3G/yLAAAAKXRSTlMAAJkGwhXi4zL1WP6IiQO1D7KnqBLkRpMK2DX7Nn+ABMnKJ2wBuRvtV8Na3ggAAAABYktHRACIBR1IAAAAB3RJTUUH5wULDjk49GyRxQAAAJhJREFUGNOd0EkSgjAURdE8GgWigEorKkhr9r9BISGdQ+/o1xm9+oQQh+kcwnM9JZ4rCP5hl6OPnRCEXMIAihDRVWgEg3Ba6QyL4oQlsU1ILyk0/dmV/XQjWW5LnhEU1BRaYJ1QmlRio6rWUleccG+kNA8IwlPSC5LaTsi7VYSePyzsoQnDRgNMGifGptEizMsywyZ8Inl9AfVQG4htGbFwAAAAAElFTkSuQmCC"
              />
            </svg>
            <div>
              {{
                $t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_title4'
                )
              }}
            </div>
          </div>
          <div>
            <div v-for="(item, index) in worsen" :key="index">
              <div><img :src="item.img" srcset="" /></div>
              <div>{{ $t(item.text) }}</div>
            </div>
          </div>
        </div>
        <div @click="callTel()">
          <div>
            {{
              $t(
                'pages.medical_service.service_glaucoma_title.service_glaucoma_btn2_1'
              )
            }}
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_glaucoma_title.service_glaucoma_btn2_2'
              )
            }}
          </div>
        </div>
        <div></div>
      </div>
      <!-- 青光眼的類別 -->
      <div id="category">
        <div>青光眼的類別</div>
        <!-- 慢性青光眼 -->
        <div>
          <div>
            <div>
              <div>Chronic Glaucoma</div>
              <div>
                {{
                  $t(
                    'pages.medical_service.service_glaucoma_title.service_glaucoma_title5'
                  )
                }}
              </div>
            </div>
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_text6'
                )
              }}
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/8bbf23a05ed24544.png"
                alt="青光眼種類"
                srcset=""
              />
            </div>
          </div>
        </div>
        <!-- 急性青光眼 -->
        <div>
          <div>
            <div>
              <div>Acute Glaucoma</div>
              <div>
                {{
                  $t(
                    'pages.medical_service.service_glaucoma_title.service_glaucoma_title6'
                  )
                }}
              </div>
            </div>
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_text7'
                )
              }}
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/a23816f98522475c.png"
                :alt="`${$t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_title6'
                )}`"
                srcset=""
              />
            </div>
          </div>
        </div>
        <!-- button -->
        <div @click="callTel()">
          <div>
            {{
              $t(
                'pages.medical_service.service_glaucoma_title.service_glaucoma_btn3_1'
              )
            }}
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_glaucoma_title.service_glaucoma_btn3_2'
              )
            }}
          </div>
        </div>
        <!-- 先天性青光眼 -->
        <div>
          <div>
            <div>
              <div>Congenital Glaucoma</div>
              <div>
                {{
                  $t(
                    'pages.medical_service.service_glaucoma_title.service_glaucoma_title7'
                  )
                }}
              </div>
            </div>
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_text8'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_text9'
                )
              }}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="18px"
                height="24px"
              >
                <image
                  x="0px"
                  y="0px"
                  width="18px"
                  height="24px"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAMAAADAi10DAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEX///9Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo57///+3G/yLAAAAKXRSTlMAAJkGwhXi4zL1WP6IiQO1D7KnqBLkRpMK2DX7Nn+ABMnKJ2wBuRvtV8Na3ggAAAABYktHRACIBR1IAAAAB3RJTUUH5wULDjk49GyRxQAAAJhJREFUGNOd0EkSgjAURdE8GgWigEorKkhr9r9BISGdQ+/o1xm9+oQQh+kcwnM9JZ4rCP5hl6OPnRCEXMIAihDRVWgEg3Ba6QyL4oQlsU1ILyk0/dmV/XQjWW5LnhEU1BRaYJ1QmlRio6rWUleccG+kNA8IwlPSC5LaTsi7VYSePyzsoQnDRgNMGifGptEizMsywyZ8Inl9AfVQG4htGbFwAAAAAElFTkSuQmCC"
                />
              </svg>
              {{
                $t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_title8'
                )
              }}
            </div>
            <div>
              <div v-for="item in congenital" :key="item.id">
                <div>
                  <span>{{ item.id }}</span
                  >{{ $t(item.title) }}
                </div>
                <div>
                  <div>{{ $t(item.text) }}</div>
                </div>
                <div><img :src="item.img" :alt="item.title" /></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 原發性青光眼 -->
        <div>
          <div>
            <div>
              <div>Primary Glaucoma</div>
              <div>
                {{
                  $t(
                    'pages.medical_service.service_glaucoma_title.service_glaucoma_title9'
                  )
                }}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                {{
                  $t(
                    'pages.medical_service.service_glaucoma_title.service_glaucoma_text10'
                  )
                }}
              </div>
              <div>
                {{
                  $t(
                    'pages.medical_service.service_glaucoma_title.service_glaucoma_text11'
                  )
                }}
              </div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/380b332741dacedb.png"
                alt="眼科急症"
                srcset=""
              />
            </div>
          </div>
        </div>
        <!-- 先天性青光眼 -->
        <div>
          <div>
            <div>
              <div>Secondary Glaucoma</div>
              <div>
                {{
                  $t(
                    'pages.medical_service.service_glaucoma_title.service_glaucoma_title10'
                  )
                }}
              </div>
            </div>
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_text12'
                )
              }}
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="18px"
                height="24px"
              >
                <image
                  x="0px"
                  y="0px"
                  width="18px"
                  height="24px"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAYCAMAAADAi10DAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEX///9Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo55Zo57///+3G/yLAAAAKXRSTlMAAJkGwhXi4zL1WP6IiQO1D7KnqBLkRpMK2DX7Nn+ABMnKJ2wBuRvtV8Na3ggAAAABYktHRACIBR1IAAAAB3RJTUUH5wULDjk49GyRxQAAAJhJREFUGNOd0EkSgjAURdE8GgWigEorKkhr9r9BISGdQ+/o1xm9+oQQh+kcwnM9JZ4rCP5hl6OPnRCEXMIAihDRVWgEg3Ba6QyL4oQlsU1ILyk0/dmV/XQjWW5LnhEU1BRaYJ1QmlRio6rWUleccG+kNA8IwlPSC5LaTsi7VYSePyzsoQnDRgNMGifGptEizMsywyZ8Inl9AfVQG4htGbFwAAAAAElFTkSuQmCC"
                />
              </svg>
              {{
                $t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_title16'
                )
              }}
            </div>
            <div>
              <div v-for="(item, index) in kind" :key="item.id">
                <div
                  :class="{ bground: index === action }"
                  @click="kindSelect(index)"
                >
                  <span :class="{ font: index === action }">{{ item.id }}</span>
                  <div>{{ $t(item.text) }}</div>
                </div>
                <div :class="{ action: index === action }">
                  <div>
                    <div v-if="Array.isArray(item.detail)">
                      <div v-for="(ele, index) in item.detail" :key="index">
                        {{ $t(ele) }}
                      </div>
                    </div>
                    <div v-else>
                      {{ $t(item.detail) }}
                    </div>
                  </div>
                  <div v-if="item.img">
                    <img :src="item.img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 青光眼高危人士 -->
      <div id="crowd">
        <div>
          {{
            $t(
              'pages.medical_service.service_glaucoma_title.service_glaucoma_title11'
            )
          }}
        </div>
        <div>
          <div v-for="(item, index) in crowd" :key="index">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="277px"
                height="321px"
              >
                <path
                  fill-rule="evenodd"
                  stroke="rgb(158, 213, 209)"
                  stroke-width="4px"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  fill="none"
                  d="M137.493,316.812 L1.985,238.344 L1.985,81.409 L137.493,2.942 L273.000,81.409 L273.000,238.344 L137.493,316.812 Z"
                />
              </svg>
              <img :src="item.img" />
            </div>
            <div>
              <div v-if="Array.isArray(item.text)">
                <div v-for="(ele, i) in item.text" :key="i">{{ $t(ele) }}</div>
              </div>
              <div v-else>{{ $t(item.text) }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 青光眼主要診斷方法 -->
      <div id="diagnostic">
        <div>
          {{
            $t(
              'pages.medical_service.service_glaucoma_title.service_glaucoma_title12'
            )
          }}
        </div>
        <div>
          {{
            $t(
              'pages.medical_service.service_glaucoma_title.service_glaucoma_text13'
            )
          }}
        </div>
        <div>
          <div v-for="(item, index) in diagnostic" :key="index">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="392px"
                height="387px"
              >
                <defs>
                  <filter id="Filter_0">
                    <feFlood
                      flood-color="rgb(161, 215, 207)"
                      flood-opacity="1"
                      result="floodOut"
                    />
                    <feComposite
                      operator="atop"
                      in="floodOut"
                      in2="SourceGraphic"
                      result="compOut"
                    />
                    <feBlend mode="normal" in="compOut" in2="SourceGraphic" />
                  </filter>
                </defs>
                <g filter="url(#Filter_0)">
                  <path
                    fill-rule="evenodd"
                    fill="rgb(178, 223, 216)"
                    d="M391.396,234.665 C391.396,342.651 303.856,386.376 195.870,386.376 C87.883,386.376 0.343,342.651 0.343,234.665 C0.343,231.136 0.442,227.629 0.627,224.146 C0.455,223.099 0.343,222.033 0.343,220.938 L0.343,20.553 C0.343,9.644 9.186,0.800 20.093,0.800 L371.641,0.800 C382.548,0.800 391.391,9.644 391.391,20.553 L391.391,220.938 C391.391,222.025 391.280,223.084 391.111,224.123 C391.296,227.614 391.396,231.128 391.396,234.665 Z"
                  />
                </g>
              </svg>
            </div>
            <div>
              <div><img :src="item.img" /></div>
              <div>
                <div v-if="Array.isArray(item.text)">
                  <div v-for="(ele, i) in item.text" :key="i">
                    {{ $t(ele) }}
                  </div>
                </div>
                <div v-else>{{ $t(item.text) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 青光眼的治療 -->
      <div id="treat">
        <div>
          {{
            $t(
              'pages.medical_service.service_glaucoma_title.service_glaucoma_title13'
            )
          }}
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_glaucoma_title.service_glaucoma_text14'
              )
            }}
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_glaucoma_title.service_glaucoma_text15'
              )
            }}
          </div>
        </div>
        <div>
          <div v-for="(item, index) in treat" :key="index">
            <div>
              <div v-if="Array.isArray(item.remedy)">
                <div v-for="(ele, i) in item.remedy" :key="i">
                  {{ $t(ele) }}
                </div>
              </div>
              <div v-else>{{ $t(item.remedy) }}</div>
            </div>
            <div>
              <div v-if="Array.isArray(item.name)">
                <div v-for="(con, index) in item.name" :key="index">
                  {{ $t(con) }}
                </div>
              </div>
              <div v-else>{{ $t(item.name) }}</div>
            </div>
            <div>
              <div v-if="Array.isArray(item.range)">
                <div v-for="(con, index) in item.range" :key="index">
                  <div>
                    <div v-if="Array.isArray(con)">
                      <div v-for="(el, i) in con" :key="i">{{ $t(el) }}</div>
                    </div>
                    <div v-else>{{ $t(con) }}</div>
                  </div>
                </div>
              </div>
              <div v-else>{{ $t(item.range) }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 預防青光眼 -->
      <div id="guardAgainst">
        <div>
          {{
            $t(
              'pages.medical_service.service_glaucoma_title.service_glaucoma_title14'
            )
          }}
        </div>
        <div>
          <div>
            <div v-for="item in guardAgainst" :key="item.id">
              <div>
                <div>{{ item.id }}</div>
                <div>{{ $t(item.text) }}</div>
              </div>
              <div>{{ $t(item.detail) }}</div>
            </div>
          </div>
          <div>
            <img data-cfsrc="https://static.cmereye.com/imgs/2023/05/a4fa152ef992618f.png" 
              srcset="https://static.cmereye.com/imgs/2023/07/06d2169ed76e2f38.jpg 768w, https://static.cmereye.com/imgs/2023/05/a4fa152ef992618f.png"  
              alt="預防青光眼" 
              src="https://static.cmereye.com/imgs/2023/05/a4fa152ef992618f.png"/>
          </div>
        </div>
      </div>
      <!-- 青光眼誤區 -->
      <div id="faq">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="106px"
            height="67px"
          >
            <image
              x="0px"
              y="0px"
              width="106px"
              height="67px"
              xlink:href="data:img/png;base64,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"
            />
          </svg>
          <div>
            {{
              $t(
                'pages.medical_service.service_glaucoma_title.service_glaucoma_title15'
              )
            }}
          </div>
        </div>
        <div>
          <PageCollapse
            :answer="meetArr"
            :downarr="'glaucoma'"
            :style="{ '--subassembly-color': '#58a49f' }"
          />
        </div>
      </div>
    </div>
    <div>
      <rightSidesNavigation :service-navigation="serviceNavigation" />
    </div>
    <!-- 下载和公共脚部 -->
    <!-- 下载 -->
    <div class="dow">
      <div>
        <div>
          <div @click.stop="getPdf('glaucoma.pdf',$t('pages.medical_service.service_glaucoma_title.service_glaucoma_down'))">
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt=""
              srcset=""
            />
          </div>
          <div @click.stop="getPdf('glaucoma.pdf',$t('pages.medical_service.service_glaucoma_title.service_glaucoma_down'))">
            <p>
              {{
                $t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_down'
                )
              }}
            </p>
            <p>
              {{
                $t(
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_down_text'
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#bbe0d5;'}`"
    />
    <PageFooterMenu />
  </div>
</template>

<style lang="scss" scoped>
.glaucoma_heaf {
  position: relative;
  top: 202px;
  right: 0;
  width: 40vw;
  margin-left: 60vw;
  height: 288px;
  background-color: #f2f2f2;

  & > div {
    position: absolute;
    top: -110px;
    left: -18vw;
    text-align: right;
  }

  & > div:first-child {
    font-family: 'NotoSansCJKtc-Bold';
    font-size: 107px;
    font-weight: bold;
    line-height: 1;
    font-stretch: normal;
    letter-spacing: 12px;
    color: #9bcfcc;

    & > div:nth-child(2) {
      font-family: 'DINCondensed';
      display: block;
      font-size: 140px;
      letter-spacing: 13px;
    }
  }

  & > div:nth-child(2) {
    top: 120px;

    & > img:nth-child(2) {
      margin-top: 5px;
    }
  }
}

.glaucoma {
  position: relative;
  max-width: 1200px;
  margin: auto;
  transform: scale(0.85);
  margin-top: -50%;

  // 什麼是青光眼？
  & > div:nth-child(2) {
    padding-top: 360px;

    & > div:nth-child(1) {
      margin: auto;
      font-family: 'NotoSansHK-Medium';
      font-size: 50px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 48px;
      letter-spacing: 0px;
      color: #58a49f;
      text-align: center;
      margin-bottom: 50px;
    }

    & > div:nth-child(2) {
      font-family: 'NotoSansHK-Regular';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 46px;
      letter-spacing: 0px;
      color: #515151;
      box-sizing: border-box;
      padding: 47px 44px 51px;

      border-radius: 15px;
      border: solid 3px #9ed5d1;
    }
  }

  // 青光眼成因
  & > div:nth-child(3) {
    & > div:nth-child(1) {
      text-align: center;
      margin-bottom: 100px;
      font-family: 'NotoSansHK-Bold';
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
    }

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div:nth-child(1) {
        border-radius: 30px;
        width: 520px;
        height: 385px;
        background-color: #ffffff;
        border: solid 10px #9ed5d1;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
      }

      & > :nth-child(2) {
        width: 765px;
        height: 448px;
        border-radius: 30px;
        background-image: linear-gradient(#e9f8f7, #e9f8f7),
          linear-gradient(#eef9fe, #eef9fe);
        background-blend-mode: normal, normal;
        z-index: 1;
        position: absolute;
        right: 0;
        padding-left: 96px;
        padding-top: 44px;
        padding-bottom: 46px;
        padding-right: 20px;

        font-family: 'NotoSansHK-Regular';
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #515151;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    & > div:nth-child(3) {
      cursor: pointer;
      margin: auto;
      margin-top: 150px;
      width: 508px;
      height: 140px;
      background-image: linear-gradient(-90deg, #7fdbd5 0%, #93ded5 100%),
        linear-gradient(#eda2a6, #eda2a6);
      background-blend-mode: normal, normal;
      box-shadow: -2px 2px 7px 0px rgba(0, 0, 0, 0.35);
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      & > div {
        font-family: 'NotoSansHK-Regular';
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 50px;
        letter-spacing: 0px;
        color: #ffffff;
      }
    }
  }

  // 青光眼的症狀
  & > div:nth-child(4) {
    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
      text-align: center;
    }

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        margin-top: 71px;
        font-family: 'NotoSansHK-Regular';
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(2) {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        & > div {
          padding: 13px;
          width: 172px;
          height: 289px;
          background-image: linear-gradient(#a1d7cf, #a1d7cf),
            linear-gradient(#b2dfd8, #b2dfd8);
          background-blend-mode: normal, normal;
          box-shadow: inset -3px 4px 5px 0px rgba(178, 223, 216, 0.8);
          border-radius: 85px;

          & > div {
            white-space: pre-wrap !important;
            font-family: 'NotoSansHK-Bold';
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #ffffff;
            text-align: center;
            margin-top: 19px;
          }
        }
      }

      & > div:nth-child(3) {
        position: relative;
        margin-top: 85px;

        & > div {
          & > svg {
            position: absolute;
            left: -1px;
            top: -5px;
          }

          & > div {
            height: 72px;
            border: solid 4px #9ed5d1;
            font-family: 'NotoSansHK-Regular';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 2.8;
            letter-spacing: 0px;
            color: #63a89f;
            text-align: right;
            padding-right: 18px;
            border-radius: 18px;
          }
        }
      }
    }

    & > div:nth-child(3) {
      margin-top: 85px;

      & > div:nth-child(1) {
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-bottom: 26px;

        & > div {
          margin-left: 10px;
          font-family: 'NotoSansHK-Bold';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #58a49f;
        }
      }

      & > div:nth-child(2) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > div {
          position: relative;

          & > div:nth-child(2) {
            margin-top: 34px;
            font-family: 'NotoSansHK-Medium';
            font-size: 32px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #63a89f;
            text-align: center;
          }
        }

        & > div:nth-child(1)::after {
          content: '';
          position: absolute;
          top: 30%;
          right: -15%;
          z-index: 5;
          width: 80px;
          height: 80px;
          background-image: url('https://static.cmereye.com/imgs/2023/05/bb28c65c794254b0.png');
        }

        & > div:nth-child(2)::after {
          content: '';
          position: absolute;
          top: 30%;
          right: -15%;
          z-index: 5;
          width: 80px;
          height: 80px;
          background-image: url('https://static.cmereye.com/imgs/2023/05/bb28c65c794254b0.png');
        }
      }
    }

    & > div:nth-child(4) {
      cursor: pointer;
      margin: auto;
      margin-top: 104px;
      width: 508px;
      height: 140px;
      background-image: linear-gradient(-90deg, #7fdbd5 0%, #93ded5 100%),
        linear-gradient(#eda2a6, #eda2a6);
      background-blend-mode: normal, normal;
      box-shadow: -2px 2px 7px 0px rgba(0, 0, 0, 0.35);
      border-radius: 20px;

      font-family: 'NotoSansHK-Regular';
      text-align: center;
      font-size: 32px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 50px;
      letter-spacing: 0px;
      color: #ffffff;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  // 青光眼的類別
  & > div:nth-child(5) {
    &>div:nth-of-type(1){
      text-align: center;
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      // line-height: 36px;
      margin-bottom: 100px;
      letter-spacing: 0px;
      color: #58a49f;
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      position: relative;

      & > div:nth-child(1) {
        width: 446px;
        height: 340px;
        background-image: linear-gradient(#a1d7cf, #a1d7cf),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        border-radius: 10px;
        position: absolute;
        top: -50px;
        left: 0;
        z-index: 1;
        writing-mode: vertical-lr;

        & > div {
          margin-top: 50px;
          margin-left: 37px;

          & > div:nth-child(1) {
            font-family: 'Metropolis-Regular';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Medium';
            font-size: 42px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 2px;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        width: 1050px;
        height: 350px;
        background-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.29);
        border-radius: 10px;
        z-index: 3;
        position: relative;
        right: 0;
        // 子元素布局
        display: flex;
        align-items: center;
        padding: 36px 40px;

        & > div:nth-child(1) {
          width: calc(100% - 280px);
          margin-right: 26px;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 44px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
    }

    & > div:nth-child(3) {
      margin-top: 150px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      position: relative;

      & > div:nth-child(1) {
        width: 446px;
        height: 340px;
        background-image: linear-gradient(#a1d7cf, #a1d7cf),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        border-radius: 10px;
        position: absolute;
        top: -50px;
        left: 0;
        z-index: 1;
        writing-mode: vertical-lr;

        & > div {
          margin-top: 50px;
          margin-left: 37px;

          & > div:nth-child(1) {
            font-family: 'Metropolis-Regular';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Medium';
            font-size: 42px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 2px;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        width: 1050px;
        height: 350px;
        background-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.29);
        border-radius: 10px;
        z-index: 3;
        position: relative;
        right: 0;
        // 子元素布局
        display: flex;
        align-items: center;
        padding: 36px 40px;

        & > div:nth-child(1) {
          width: calc(100% - 280px);
          margin-right: 26px;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 44px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
    }

    & > div:nth-child(4) {
      cursor: pointer;
      margin: 100px auto;

      width: 508px;
      height: 140px;
      background-image: linear-gradient(-90deg, #7fdbd5 0%, #93ded5 100%),
        linear-gradient(#eda2a6, #eda2a6);
      background-blend-mode: normal, normal;
      border-radius: 20px;
      font-family: 'NotoSansHK-Regular';
      font-size: 32px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 50px;
      letter-spacing: 0px;
      color: #ffffff;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    & > div:nth-child(5) {
      margin-top: 150px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      position: relative;

      & > div:nth-child(1) {
        width: 446px;
        height: 340px;
        background-image: linear-gradient(#a1d7cf, #a1d7cf),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        border-radius: 10px;
        position: absolute;
        top: -50px;
        left: 0;
        z-index: 1;
        writing-mode: vertical-lr;

        & > div {
          margin-top: 50px;
          margin-left: 37px;

          & > div:nth-child(1) {
            font-family: 'Metropolis-Regular';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Medium';
            font-size: 42px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 2px;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        width: 1050px;
        background-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.29);
        border-radius: 10px;
        z-index: 3;
        position: relative;
        right: 0;
        // 子元素布局
        display: flex;
        flex-direction: column;
        padding: 60px 44px 77px 41px;

        & > div:nth-child(1), &>div:nth-child(2) {
          margin-right: 26px;

          font-family: 'NotoSansHK-Regular';
          font-size: 23px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 2;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(2) {
          margin-top: 30px;
        }

        & > div:nth-child(3) {
          & > svg {
            margin-right: 10px;
          }

          margin-top: 69px;
          display: flex;
          align-items: center;

          font-family: 'NotoSansHK-Bold';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #58a49f;
        }

        & > div:nth-child(4) {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding-left: 16px;
          margin-top: 45px;

          & > div {
            // width: 312px;
            flex: 1;
            &:not(:last-child){
              margin-right: 20px;
            }
            & > div:nth-child(1) {
              display: flex;
              justify-content: center;
              flex-direction: row;
              margin-bottom: 8px;

              font-family: 'NotoSansHK-Medium';
              font-size: 26px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 36px;
              letter-spacing: 0px;
              color: #515151;

              & > span {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                background: #63a89f;
                text-align: center;
                margin-right: 10px;

                font-family: 'SourceHanSansCN-Bold';
                font-size: 24px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 36px;
                letter-spacing: 0px;
                color: #ffffff;
              }
            }

            & > div:nth-child(2)::before {
              content: '';
              width: 100%;
              border-top: 1px solid #959595;
              display: block;
            }

            & > div:nth-child(2) {
              width: 100%;
              height: 230px;
              font-family: 'NotoSansHK-Regular';
              font-size: 24px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 36px;
              letter-spacing: -2px;
              color: #515151;
            }
          }
        }
      }
    }

    & > div:nth-child(6) {
      margin-top: 150px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      position: relative;

      & > div:nth-child(1) {
        width: 446px;
        height: 340px;
        background-image: linear-gradient(#a1d7cf, #a1d7cf),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        border-radius: 10px;
        position: absolute;
        top: -50px;
        left: 0;
        z-index: 1;
        writing-mode: vertical-lr;

        & > div {
          margin-top: 50px;
          margin-left: 37px;

          & > div:nth-child(1) {
            font-family: 'Metropolis-Regular';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Medium';
            font-size: 42px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 2px;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        width: 1050px;
        // height: 350px;
        background-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.29);
        border-radius: 10px;
        z-index: 3;
        position: relative;
        right: 0;
        // 子元素布局
        display: flex;
        align-items: center;
        padding: 36px 40px;

        & > div:nth-child(1) {
          width: calc(100% - 280px);
          margin-right: 26px;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 44px;
          letter-spacing: 0px;
          color: #515151;

          & > div:nth-child(2) {
            margin-top: 16px;
          }
        }
      }
    }

    & > div:nth-child(7) {
      margin-top: 150px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      position: relative;

      & > div:nth-child(1) {
        width: 446px;
        height: 340px;
        background-image: linear-gradient(#a1d7cf, #a1d7cf),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        border-radius: 10px;
        position: absolute;
        top: -50px;
        left: 0;
        z-index: 1;
        writing-mode: vertical-lr;

        & > div {
          margin-top: 50px;
          margin-left: 37px;

          & > div:nth-child(1) {
            font-family: 'Metropolis-Regular';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Medium';
            font-size: 42px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 2px;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        width: 1050px;
        background-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(#f2f2f2, #f2f2f2);
        background-blend-mode: normal, normal;
        box-shadow: 3px 4px 10px 0px rgba(0, 0, 0, 0.29);
        border-radius: 10px;
        z-index: 3;
        position: relative;
        right: 0;
        // 子元素布局
        display: flex;
        flex-direction: column;
        padding: 60px 44px 77px 41px;

        & > div:nth-child(1) {
          margin-right: 26px;

          font-family: 'NotoSansHK-Regular';
          font-size: 23px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 2;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(2) {
          margin-bottom: 48px;

          & > svg {
            margin-right: 10px;
          }

          margin-top: 57px;
          display: flex;
          align-items: center;

          font-family: 'NotoSansHK-Bold';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #58a49f;
        }

        & > div:nth-child(3) {
          & > div {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            position: relative;

            & > div:nth-child(1) {
              &.bground {
                background: #63a89f;
                color: #fff;
              }

              cursor: pointer;
              width: 427px;
              margin-right: 32px;
              position: relative;
              // background: #79b2ae;
              display: flex;
              font-family: 'NotoSansHK-Bold';
              font-size: 26px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 38px;
              letter-spacing: 0px;
              padding: 18px 0 18px 20px;
              color: #79b2ae;

              & > span {
                margin-right: 10px;
                border-radius: 50%;
                background: #fff;
                width: 40px;
                height: 40px;
                background-color: #79b2ae;
                font-family: 'NotoSansHK-Bold';
                font-size: 29px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 38px;
                letter-spacing: 0px;
                color: #fff;
                text-align: center;
              }

              .font {
                background: #fff;
                color: #63a89f;
              }
            }

            & > div:nth-child(2) {
              width: 480px;
              position: absolute;
              right: 30px;
              font-family: 'NotoSansHK-Regular';
              font-size: 24px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 38px;
              letter-spacing: 0px;
              color: #515151;
              border-left: 7px solid #79b2ae;
              padding-left: 11px;

              & > div > div:nth-child(1) {
                & > div:nth-child(1) {
                  margin-bottom: 30px;
                }
              }

              & > div:nth-child(2) {
                position: absolute;
              }

              display: none;

              &.action {
                display: block;
              }
            }

            .bground::after {
              content: '';
              width: 22px;
              height: 25px;
              background-image: url('https://static.cmereye.com/imgs/2023/05/9ead3fb225e93049.png');
              position: absolute;
              right: -32px;
            }
          }

          & > div:nth-child(7) {
            & > div:nth-child(2) {
              bottom: 0;
            }
          }

          & > div:nth-child(8) {
            & > div:nth-child(2) {
              bottom: 0;
            }
          }
        }
      }
    }
  }

  // 青光眼高危人士
  & > div:nth-child(6) {
    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
      text-align: center;
    }

    & > div:nth-child(2) {
      margin-top: 87px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > div:nth-child(n + 5) {
        margin-top: 42px;
      }

      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;

          & > img {
            z-index: 6;
            position: absolute;
          }
        }

        & > div:nth-child(2) {
          margin-top: 15px;

          width: 252px;
          white-space: pre-wrap;
          text-align: center;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
    }
  }

  // 青光眼主要診斷方法
  & > div:nth-child(7) {
    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
      text-align: center;
    }

    & > div:nth-child(2) {
      margin-top: 74px;

      font-family: 'NotoSansHK-Regular';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 38px;
      letter-spacing: 0px;
      color: #515151;
    }

    & > div:nth-child(3) {
      margin-top: 80px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > div:nth-child(n + 3) {
        margin-bottom: 52px;
      }

      & > div {
        position: relative;
        display: flex;
        justify-content: center;

        & > div:nth-child(2) {
          position: absolute;
          z-index: 5;

          & > div:nth-child(1) {
            padding: 18px 17px;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Bold';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 0px;
            color: #ffffff;
            text-align: center;
            margin-top: 20px;
            white-space: pre-wrap;
          }
        }
      }
    }
  }

  // 青光眼的治療
  & > div:nth-child(8) {
    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
      text-align: center;
    }

    & > div:nth-child(2) {
      margin-top: 75px;
      font-family: 'NotoSansHK-Regular';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 38px;
      letter-spacing: -1px;
      color: #515151;

      & > div:nth-child(2) {
        margin-top: 30px;
      }
    }

    & > div:nth-child(3) {
      margin: 0 auto;
      max-width: 1200px;
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      border: 1px solid #939c9b;

      & > div {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #939c9b;

        & > div:nth-child(1) {
          width: 314px;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: pre-wrap;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(2) {
          width: 384px;

          & > div > div {
            height: 106px;
            display: flex;
            align-items: center;
            justify-content: center;
            white-space: pre-wrap;

            font-family: 'NotoSansHK-Medium';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 0px;
            color: #515151;
            border-top: 1px solid #939c9b;
            border-left: 1px solid #939c9b;
          }
        }

        & > div:nth-child(3) {
          width: 640px;

          & > div > div {
            height: 106px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 48px;
            white-space: pre-wrap;

            font-family: 'NotoSansHK-Regular';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 38px;
            letter-spacing: 0px;
            color: #515151;
            border-top: 1px solid #939c9b;
            border-left: 1px solid #939c9b;
          }
        }
      }

      & > div:nth-child(1) {
        border-bottom: none;
        background-color: #5bbaac;
        height: 106px;

        & > div:nth-child(1) {
          color: #fff;
        }

        & > div:nth-child(2) {
          border: none;
          border-left: 1px solid #939c9b;
          display: flex;
          align-items: center;
          justify-content: center;

          font-family: 'NotoSansHK-Medium';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;

          & > div {
            border: none;
            color: #fff;
          }
        }

        & > div:nth-child(3) {
          width: 640px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-left: 1px solid #939c9b;
          font-family: 'NotoSansHK-Regular';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;

          & > div {
            border: none;
            color: #fff;
          }
        }
      }

      & > div:nth-child(2) {
        border-bottom: none;

        & > div:nth-child(1) {
          background-color: #6bc8ba;
          color: #fff;
        }
      }

      & > div:nth-child(3) {
        border-bottom: none;

        & > div:nth-child(1) {
          background-color: #7dcec2;
          color: #fff;
        }
      }

      & > div:nth-child(4) {
        border-bottom: none;

        & > div {
          height: 106px;
          border-top: 1px solid #939c9b;
          border-left: 1px solid #939c9b;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        & > div:nth-child(1) {
          background-color: #a1d7cf;
          color: #fff;
        }

        & > div:nth-child(2) {
          width: 384px;
          font-family: 'NotoSansHK-Medium';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(3) {
          width: 640px;
          font-family: 'NotoSansHK-Regular';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #515151;
          justify-content: flex-start;
          &>div{
            padding-left: 48px;
          }
        }
      }
    }
  }

  // 預防青光眼
  & > div:nth-child(9) {
    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 52px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
      text-align: center;
    }

    & > div:nth-child(2) {
      margin-top: 150px;
      display: flex;
      justify-content: space-between;

      & > div:nth-child(1) {
        width: 43%;

        & > div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 48px;

          & > div:nth-child(1) {
            display: flex;
            flex-direction: row;
            position: relative;

            & > div:nth-child(1) {
              width: 108px;
              height: 108px;
              border-radius: 50%;
              border: 6px solid #57a39f;
              background: #fff;
              z-index: 5;

              display: flex;
              align-items: center;
              justify-content: center;

              font-family: 'NotoSansHK-Bold';
              font-size: 55px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 38px;
              letter-spacing: 0px;
              color: #57a39f;
            }

            & > div:nth-child(2) {
              width: 518px;
              height: 85px;
              background-color: #91cfca;
              border-radius: 85px;
              position: absolute;
              left: 18px;
              bottom: 0;
              padding-left: 130px;

              display: flex;
              align-items: center;
              justify-content: flex-start;

              font-family: 'NotoSansHK-Regular';
              font-size: 40px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 38px;
              letter-spacing: 1px;
              color: #ffffff;
            }
          }

          & > div:nth-child(2) {
            margin-top: 30px;
            font-family: 'NotoSansHK-Regular';
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 31px;
            letter-spacing: 0px;
            color: #515151;
          }
        }

        & > div:nth-child(3) {
          margin-bottom: 0;
        }
      }

      & > div:nth-child(2) {
        width: 50%;
      }
    }
  }

  // 青光眼誤區
  & > div:last-child {
    margin-top: 260px;

    & > div:nth-child(1) {
      margin-bottom: 60px;
      width: 384px;
      height: 76px;
      border: solid 4px #8ed4cc;
      background-image: linear-gradient(#dbfffb, #dbfffb),
        linear-gradient(#b3e2fa, #b3e2fa);
      background-blend-mode: normal, normal;
      border-radius: 76px;

      font-family: 'NotoSansHK-Bold';
      font-size: 46px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #58a49f;
      display: flex;
      align-items: center;

      & > svg {
        margin-left: -18px;
        margin-top: -25px;
        margin-right: 15px;
      }
    }
  }

  // 公共使用
  & > div {
    margin-top: 180px;
  }

  & > div:first-child {
    margin: 0;
  }

  & > div:nth-child(2) {
    margin: 0;
  }
}

.action {
  display: block;
}

.dow {
  margin-top: -40%;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    & > div {
      width: 62.5%;
      height: 202px;
      background: #9ccfc8;
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
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .glaucoma_heaf {
    width: calc(100% - 60px);
    top: auto;
    right: auto;
    margin: 150px auto 0;
    background-color: #fff;
    &::before{
      content: '';
      position: absolute;
      bottom: 50px;
      right: -30px;
      width: 150px;
      height: 200px;
      background: #f2f2f2;
    }
    &>div{
      position: relative;
      top: auto;
      right: 0;
      left: 0;
    }
    & > div:first-child {
      font-size: 40px;
      letter-spacing: .05em;
      & > div:nth-child(2) {
        font-size: 45px;
        letter-spacing: .05em;
      }
    }
    & > div:nth-child(2) {
      top: 0;
      &>div{
        display: flex;
        justify-content: flex-end;
        svg{
          width: 170px;
          height: auto;
          image{
            width: 170px;
            height: auto;
          }
        }
      }
      // & > img:nth-child(2) {
      //   margin-top: 5px;
      // }
    }
  }
  .glaucoma {
    transform: scale(1);
    margin-top: 0;
    & > div:nth-child(2) {
      padding-top: 0;
      width: calc(100% - 60px);
      margin: 30px auto 0;
      & > div:nth-child(1) {
        font-size: 24px;
         margin-bottom: 30px;
      }
      & > div:nth-child(2) {
        font-size: 14px;
        line-height: 1.6;
        padding: 20px;
      }
    }
    & > div:nth-child(3) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        font-size: 24px;
        margin-bottom: 30px;
      }
      & > div:nth-child(2) {
        flex-direction: column;
        position: relative;
        & > div:nth-child(1) {
          width: calc(100% - 20px);
          margin: 0 auto;
          height: auto;
          border: solid 5px #9ed5d1;
          padding: 20px;
        }
        & > :nth-child(2) {
          width: 100%;
          height: auto;
          padding: 90px 20px 20px;
          margin-top: -70px;
          position: initial;
          font-size: 14px;
          line-height: 2;
        }
      }
      & > div:nth-child(3) {
        width: max-content;
        margin: 50px auto 0;
        height: auto;
        padding:  10px 30px 5px;
        border-radius: 10px;
        & > div {
          font-size: 18px;
          line-height: 1.6;
        }
      }
    }
    & > div:nth-child(4) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        font-size: 24px;
        margin-bottom: 30px;
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          margin-top: 25px;
          font-size: 14px;
          line-height: 2;
        }
        & > div:nth-child(2) {
          margin-top: 30px;
          flex-wrap: wrap;
          & > div {
            padding: 6px;
            width: 28%;
            height: 160px;
            max-width: 100px;
            margin-bottom: 40px;
            & > div {
              font-size: 14px;
              line-height: 1.6;
              margin-top: 10px;
            }
          }
        }
        & > div:nth-child(3) {
          margin-top: 0;
          
          & > div {
            & > svg {
              position: absolute;
              left: -20px;
              top: 50%;
              transform: translateY(-50%) scale(.6);
            }
            & > div {
              height: auto;
              font-size: 14px;
              border: solid 2px #9ed5d1;
              width: calc(100% - 20px);
              margin-left: 20px;
              line-height: 2;
              padding: 20px 20px 20px 40px;
              text-align: left;
            }
          }
        }
      }
      & > div:nth-child(3) {
        margin-top: 45px;
        & > div:nth-child(1) {
          &>div{
            font-size: 20px;
          }
        }
        & > div:nth-child(2) {
          & > div {
            width: 30%;
            & > div:nth-child(2) {
              margin-top: 10px;
              font-size: 14px;
              line-height: 1.6;
            }
          }
          & > div:nth-child(1)::after {
            width: 22px;
            height: 22px;
            background-size: 100% 100%;
            top: 20%;
            right: -20%;
          }
          & > div:nth-child(2)::after {
            top: 20%;
            width: 22px;
            height: 22px;
            background-size: 100% 100%;
            right: -20%;
          }
        }
      }
      & > div:nth-child(4) {
        width: max-content;
        height: auto;
        padding: 0 30px;
        line-height: 1.6;
        font-size: 18px;
        margin-top: 50px;
        padding: 10px 40px 5px;
        border-radius: 10px;
      }
    }
    & > div:nth-child(5) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        font-size: 24px;
        margin-bottom: 30px;
      }
      & > div:nth-child(2) {
        flex-direction: column;
        & > div:nth-child(1) {
          top: 0;
          writing-mode: initial;
          height: 80px;
          position: relative;
          width: 100%;
          &>div{
            height: 100%;
            margin-top: 0px;
            margin-left: 15px;
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            &>div:nth-child(1){
              font-size: 12px;
              margin-top: -5px;
            }
            &>div:nth-child(2){
              font-size: 22px;
            }
          }
        }
        & > div:nth-child(2) {
          width: 100%;
          height: auto;
          box-shadow: none;
          padding: 27px 0 0 0;
          & > div:nth-child(1) {
            width: 100%;
            font-size: 14px;
            line-height: 2;
            margin-right: 0;
          }
          & > div:nth-child(2) {
            position: absolute;
            right: 20px;
            top: -100px;
            width: 100px;
            height: 100px;
            img{
              width: 100%;
              
            }
          }
        }
      }
      & > div:nth-child(3) {
        margin-top: 90px;
        flex-direction: column;
        & > div:nth-child(1) {
          top: 0;
          writing-mode: initial;
          height: 80px;
          position: relative;
          width: 100%;
          &>div{
            height: 100%;
            margin-top: 0px;
            margin-left: 15px;
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            &>div:nth-child(1){
              font-size: 12px;
              margin-top: -5px;
            }
            &>div:nth-child(2){
              font-size: 22px;
            }
          }
        }
        & > div:nth-child(2) {
          width: 100%;
          height: auto;
          box-shadow: none;
          padding: 27px 0 0 0;
          & > div:nth-child(1) {
            width: 100%;
            font-size: 14px;
            line-height: 2;
            margin-right: 0;
          }
          & > div:nth-child(2) {
            position: absolute;
            right: 20px;
            top: -100px;
            width: 100px;
            height: 100px;
            img{
              width: 100%;
              
            }
          }
        }
      }
      & > div:nth-child(4) {
        width: max-content;
        height: auto;
        padding: 0 30px;
        line-height: 1.6;
        font-size: 18px;
        margin-top: 50px;
        padding: 10px 40px 5px;
        border-radius: 10px;
      }
      & > div:nth-child(5) {
        margin-top: 90px;
        flex-direction: column;
        & > div:nth-child(1) {
          top: 0;
          writing-mode: initial;
          height: 80px;
          position: relative;
          width: 100%;
          &>div{
            height: 100%;
            margin-top: 0px;
            margin-left: 15px;
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            &>div:nth-child(1){
              font-size: 12px;
              margin-top: -5px;
            }
            &>div:nth-child(2){
              font-size: 22px;
            }
          }
        }
        & > div:nth-child(2) {
          width: 100%;
          height: auto;
          box-shadow: none;
          padding: 27px 0 0 0;
          & > div:nth-child(1) {
            width: 100%;
            font-size: 14px;
            line-height: 2;
            margin-right: 0;
          }
          & > div:nth-child(2) {
            width: 100%;
            font-size: 14px;
            line-height: 2;
            margin-right: 0;
            margin-top: 20px;
          }
          & > div:nth-child(3) {
            font-size: 20px;
            margin-top: 40px;
          }
          & > div:nth-child(4) {
            flex-direction: column;
            padding-left: 0;
            margin-top: 20px;
            &>div{
              background: #F5F5F5;
              padding: 16px 10px 30px;
              margin-bottom: 30px;
              &:not(:last-child){
                margin-right: 0;
              }
              & > div:nth-child(1) {
                font-size: 18px;
                line-height: 25px;
                padding-bottom: 15px;
                margin-bottom: 20px;
                border-bottom: 1px solid #959595;
                & > span {
                  font-size: 16px;
                  width: 25px;
                  height: 25px;
                  line-height: 25px;
                }
              }
              & > div:nth-child(2)::before {
                display: none;
              }
              & > div:nth-child(2) {
                width: calc(100% - 110px);
                float: right;
                font-size: 14px;
                padding: 0 10px;
                line-height: 2;
                height: auto;
              }
              & > div:nth-child(3) {
                width: 110px;
                float: left;
              }
            }
          }
        }
      }
      & > div:nth-child(6) {
        margin-top: 90px;
        flex-direction: column;
        & > div:nth-child(1) {
          top: 0;
          writing-mode: initial;
          height: 80px;
          position: relative;
          width: 100%;
          &>div{
            height: 100%;
            margin-top: 0px;
            margin-left: 15px;
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            &>div:nth-child(1){
              font-size: 12px;
              margin-top: -5px;
            }
            &>div:nth-child(2){
              font-size: 22px;
            }
          }
        }
        & > div:nth-child(2) {
          width: 100%;
          height: auto;
          box-shadow: none;
          padding: 27px 0 0 0;
          & > div:nth-child(1) {
            width: 100%;
            font-size: 14px;
            line-height: 2;
            margin-right: 0;
          }
          & > div:nth-child(2) {
            position: absolute;
            right: 20px;
            top: -100px;
            width: 100px;
            height: 100px;
            img{
              width: 100%;
              
            }
          }
        }
      }
      & > div:nth-child(7) {
        margin-top: 90px;
        flex-direction: column;
        & > div:nth-child(1) {
          top: 0;
          writing-mode: initial;
          height: 80px;
          position: relative;
          width: 100%;
          &>div{
            height: 100%;
            margin-top: 0px;
            margin-left: 15px;
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            &>div:nth-child(1){
              font-size: 12px;
              margin-top: -5px;
            }
            &>div:nth-child(2){
              font-size: 22px;
            }
          }
        }
        & > div:nth-child(2) {
          width: 100%;
          height: auto;
          box-shadow: none;
          padding: 27px 0 0 0;
          & > div:nth-child(1) {
            width: 100%;
            font-size: 14px;
            line-height: 2;
            margin-right: 0;
          }
          & > div:nth-child(2) {
            margin-top: 40px;
            font-size: 20px;
            margin-bottom: 20px;
          }
          & > div:nth-child(3) {
            &>div{
              flex-direction: column;
              margin-bottom: 50px;
              & > div:nth-child(1) {
                width: 100%;
                margin-right: 0;
                padding: 0;
                font-size: 20px;
                color: #515151;
                line-height: 32px;
                & > span {
                  width: 25px;
                  height: 25px;
                  line-height: 25px;
                  font-size: 16px;
                }
                .font {
                  background: #79b2ae;
                  color: #fff;
                }
                &.bground {
                  background: #fff;
                  color: #515151;
                }
              }
              & > div:nth-child(2) {
                position: relative;
                font-size: 16px;
                width: 100%;
                display: block;
                border-left: none;
                padding-left: 0;
                right: 0;
                line-height: 2;
                margin-top: 15px;
                & > div:nth-child(2) {
                  position: relative;
                }
              }
              .bground::after {
                display: none;
              }
            }
          }
        }
      }
    }
    & > div:nth-child(6) {
      width: calc(100% - 60px);
      margin: 20px auto 0;
      & > div:nth-child(1) {
        font-size: 24px;
        margin-bottom: 30px;
      }
      & > div:nth-child(2) {
        margin-top: 40px;
        & > div:nth-child(n + 5) {
          margin-top: 0px;
        }
        &>div{
          width: 50%;
          margin-bottom: 40px;
          & > div:nth-child(1) {
            width: 100%;
            svg{
              width: 145px;
              height: 170px;
              path{
                transform: scale(.53);
              }
            }
            & > img {
              width: 130px;
              height: auto;
            }
          }
          & > div:nth-child(2) {
            font-size: 14px;
            line-height: 2;
            width: 100%;
          }
        }
      }
    }
    & > div:nth-child(7) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        font-size: 24px;
      }
      & > div:nth-child(2) {
        font-size: 14px;
        line-height: 2;
        margin-top: 15px;
      }
      & > div:nth-child(3) {
        margin-top: 30px;
        & > div:nth-child(n + 3) {
          margin-bottom: 40px;
        }
        & > div {
          width: 50%;
          margin-bottom: 40px;
          & > div:nth-child(1) {
            svg{
              width: 160px;
              height: 160px;
              path{
                transform: scale(.4)
              }
            }
          }
          & > div:nth-child(2) {
            z-index: 5;
            & > div:nth-child(1) {
              width: 100%;
              max-width: 160px;
              padding: 10px;
              img{
                width: calc(100% - 10px);
                margin: 0 auto;
              }
            }
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.6;
              margin-top: 0px;
              width: 70%;
              margin: 0 auto;
            }
          }
        }
      }
    }
    & > div:nth-child(8) {
      width: calc(100% - 60px);
      margin: 20px auto 0;
      & > div:nth-child(1) {
        font-size: 24px;
        margin-bottom: 30px;
      }
      & > div:nth-child(2) {
        font-size: 14px;   
        line-height: 2;
        margin-top: 25px;
        & > div:nth-child(2) {
          margin-top: 20px;
        }
      }
      & > div:nth-child(3) {
        margin-top: 30px;
        & > div {
          &>div:nth-child(1){
            width: 26%;
            font-size: 16px;
            line-height: 1.8;
            text-align: center;
            &>div{
              div{
                display: inline;
              }
            }
          }
          &>div:nth-child(2){
            width: 32%;
            & > div > div {
              font-size: 14px;
              line-height: 1.8;
              padding: 0 5px;
            }
          }
          &>div:nth-child(3){
            width: 42%;
            & > div > div {
              font-size: 14px;
              padding-left: 5px;
              line-height: 1.8;
              div{
                display: inline;
              }
            }
          }
        }
        &>div:nth-child(1){
          height: 56px;
          &>div:nth-child(2){
            font-size: 16px;
            line-height: 1.8;
          }
          &>div:nth-child(3){
            width: 42%;
            font-size: 16px;
            line-height: 1.8;
          }
        }
        &>div:nth-child(4){
          &>div:nth-child(2){
            width: 32%;
            font-size: 14px;
            line-height: 1.8;
          }
          &>div:nth-child(3){
            width: 42%;
            font-size: 14px;
            line-height: 1.8;
            &>div{
              padding-left: 5px;
            }
          }
        }
      }
    }
    & > div:nth-child(9) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        font-size: 24px;
        margin-bottom: 30px;
      }
      & > div:nth-child(2) {
        margin-top: 50px;
        flex-direction: column;
        & > div:nth-child(1) {
          width: 100%;
          & > div {
            margin-bottom: 30px;
            & > div:nth-child(1) {
              & > div:nth-child(1) {
                width: 40px;
                height: 40px;
                font-size: 20px;
                border: 3px solid #57a39f;
              }
              & > div:nth-child(2) {
                width: 200px;
                height: 30px;
                line-height: 1.6;
                padding: 3px 0 0 40px;
                font-size: 16px;
                left: 10px;
              }
            }
            & > div:nth-child(2) {
              font-size: 14px;
              margin-top: 15px;
              line-height: 1.6;
            }
          }
          & > div:nth-child(3) {
            margin-bottom: 30px;
          }
        }
        & > div:nth-child(2) {
          width: 100%;
          img{
            width: 100%;
          }
        }
      }
    }
    & > div:last-child {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      
      & > div:nth-child(1) {
        font-size: 20px;
        line-height: 40px;
        padding-top: 5px;
        width: 200px;
        height: 40px;
        margin-bottom: 35px;
        & > svg {
          margin-left: -18px;
          margin-top: -20px;
          margin-right: 15px;
          width: 63px;
          height: 40px;
          image{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .dow {
    margin-top: 50px;
    margin-bottom: 130px;
    font-size: 14px;
    & > div:nth-child(1) {
      & > div {
        width: 80%;
        height: 94px;
        & > div:nth-child(1) {
          & > img {
            width: 55px;
            height: auto;
          }
        }
        & > div:nth-child(2) {
          padding-top: 5px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .glaucoma {
    margin: auto;
    margin-top: -30%;

    & > div:nth-child(2) {
      padding-top: 350px;
    }
  }

  .glaucoma_heaf > div {
    top: -110px;
    left: -12vw;
  }

  .dow {
    margin-top: -23%;

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
