<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
// compiler macro
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.medical_service.medical_service_cataract_head'),
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心提供全面白內障檢查及微創治療。白內障屬眼疾之一，白內障的症狀包括︰視力模糊、視力下降、眩光、重影、日盲癥、事物顏色變得暗淡、變形、事物顏色變得暗淡、變形。白內障的成因一般包括︰紫外線、吸煙習慣、深度近視、糖尿病、使用某些藥物如類固醇、先天性白內障、眼睛曾經受過外傷。手術是治療白內障的唯一方法，白內障手術以植入人工晶體治療白內障，白內障人工晶體有不同種類，例如︰單焦點人工晶體、散光型人工晶體、多焦點人工晶體。希瑪林順潮眼科中心提供白內障無刀飛秒激光治療，過程安全可靠，精準度高。',
    },
    {
      name: 'keywords',
      content:
        '白內障 白內障收費 白內障成因 白內障晶體 白內障病徵 白內障預防 白內障價錢 白內障先兆 白內障手術 白內障矯視 白內障症狀 白內障種類 白內障眼藥水 白內障青光眼 白內障微創 白內障激光 白內障治療 白內障手術費用 白內障檢查 眼睛退化 眼睛玻璃體退化人工晶體 超聲乳化白內障切除術 單焦點人工晶體 散光型人工晶體 多焦點人工晶體 眼睛檢查 眼睛疾病 眼科醫生 香港眼科 希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪 希瑪 希瑪醫療集團 希瑪醫療',
    },
  ],
}))
// 传递背景色
const backgd = [
  '#64bcd1;',
  '-webkit-linear-gradient(to right, #83cdd3, #64bcd1);',
  'linear-gradient(to right, #83cdd3, #64bcd1);',
]
// 白內障形成的成因
const fatorArr = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/5b88e2c3d5a24717.png',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator1',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/77092ee46cf226d9.png',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator2',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a83300c944834450.png', 
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator3_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator3_2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/fc3c0ecda42d6dca.png',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator4',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/8e4d13a54786cdcc.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator5_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator5_2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/027fbbc52748d448.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator6_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator6_2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/6f9105c7d9aeefa2.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator7_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator7_2',
    ],
  },
]
const symptomArr = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/e493e6f5a154cd97.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom1_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom1_2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/c864d708858a3f2e.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom2_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom2_2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/848679d9bcce652d.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom3_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom3_2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a4f207cfb55a0903.png',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom4',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/03c86d6ac63e3454.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom5_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom5_2',
    ],
  },
]
const surgeryArr = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/6657fc39bf0d020c.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery1_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery1_2',
    ],
    lineText: '步驟一'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/55d34019e98d8e65.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery2_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery2_2',
    ],
    lineText: '步驟二'
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/7b14a5086daa3610.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery3_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery3_2',
    ],
    lineText: '步驟三'
  },
]
const iclArr = [
  {
    img: '',
    type: 'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_type',
    monofocal: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_monofocal1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_monofocal2',
    ],
    astigmatism: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_astigmatism1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_astigmatism2',
    ],
    multipleFocus: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_multipleFocus1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl1.icl1_multipleFocus2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/47e6f09498b91509.png',
    type: 'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl2.icl2_type',
    monofocal:
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl2.icl2_monofocal',
    astigmatism: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl2.icl2_astigmatism1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl2.icl2_astigmatism2',
    ],
    multipleFocus:
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl2.icl2_multipleFocus',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/88fe9f4dae4a48d6.png',
    type: 'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl3.icl3_type',
    monofocal:
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl3.icl3_monofocal',
    astigmatism: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl3.icl3_astigmatism1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl3.icl3_astigmatism2',
    ],
    multipleFocus:
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl3.icl3_multipleFocus',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/0fb789bc099b4c7e.png',
    type: 'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl4.icl4_type',
    monofocal:
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl4.icl4_monofocal',
    astigmatism: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl4.icl4_astigmatism1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl4.icl4_astigmatism2',
    ],
    multipleFocus:
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl4.icl4_multipleFocus',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/5cc8f1f288c60d39.png',
    type: 'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_type',
    monofocal: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_monofocal1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_monofocal2',
    ],
    astigmatism: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_astigmatism1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_astigmatism2',
    ],
    multipleFocus: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_multipleFocus1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl5.icl5_multipleFocus2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/c08795d5179afc22.png',
    type: 'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_type',
    monofocal: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_monofocal1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_monofocal2',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_monofocal3',
    ],
    astigmatism: [
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_monofocal1',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_monofocal2',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_monofocal3',
    ],
    multipleFocus: [
      [
        'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_multipleFocus1_1',
        'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_multipleFocus1_2',
      ],
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_multipleFocus2',
      'pages.medical_service.service_cataract_title.service_cataract_array_icl.cataract_array_icl6.icl6_multipleFocus3',
    ],
  },
]
const announcementsArr = [
  {
    id: '01',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements1',
    img: 'https://static.cmereye.com/imgs/2023/05/28e797c56a574cce.png',
  },
  {
    id: '02',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements2',
    img: 'https://static.cmereye.com/imgs/2023/05/37962e24ec481c1c.png',
  },
  {
    id: '03',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements3',
    img: 'https://static.cmereye.com/imgs/2023/05/63d616d8816fc14d.png',
  },
  {
    id: '04',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements4',
    img: 'https://static.cmereye.com/imgs/2023/05/d1539d09a4afe49a.png',
  },
  {
    id: '05',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements5',
    img: 'https://static.cmereye.com/imgs/2023/05/04c51b9d4cdf56e9.png',
  },
  {
    id: '06',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements6',
    img: 'https://static.cmereye.com/imgs/2023/05/56cd1f34a7c0da6e.png',
  },
  {
    id: '07',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_announcements.cataract_array_announcements7',
    img: 'https://static.cmereye.com/imgs/2023/05/aa98a33175063fa3.png',
  },
]
// 折叠问答
const meetArr = [
  {
    title:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_q1',
    agree: [
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a1_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a1_2',
    ],
  },
  {
    title:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_q2',
    agree:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a2',
  },
  {
    title:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_q3',
    agree:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a3',
  },
  {
    title:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_q4',
    agree:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a4',
  },
  {
    title:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_q5',
    agree: [
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a5_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a5_2',
    ],
  },
  {
    title:
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_q6',
    agree: [
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a6_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a6_2',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a6_3',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a6_4',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a6_5',
    ],
  },
]
// 内部导航
const serviceNavigation = [
  {
    anchorName:
      'pages.medical_service.service_cataract_title.service_cataract_array_Navigation.cataract_array_Navigation1',
    anchorLink: '/medical-service/cataract#fatorArr',
  },
  {
    anchorName:
      'pages.medical_service.service_cataract_title.service_cataract_array_Navigation.cataract_array_Navigation2',
    anchorLink: '/medical-service/cataract#symptomArr',
  },
  {
    anchorName:
      'pages.medical_service.service_cataract_title.service_cataract_array_Navigation.cataract_array_Navigation3',
    anchorLink: '/medical-service/cataract#surgeryArr',
  },
  {
    anchorName:
      'pages.medical_service.service_cataract_title.service_cataract_array_Navigation.cataract_array_Navigation4',
    anchorLink: '/medical-service/cataract#iclArr',
  },
  {
    anchorName:
      'pages.medical_service.service_cataract_title.service_cataract_array_Navigation.cataract_array_Navigation5',
    anchorLink: '/medical-service/cataract#announcementsArr',
  },
  {
    anchorName:
      'pages.medical_service.service_cataract_title.service_cataract_array_Navigation.cataract_array_Navigation6',
    anchorLink: '/medical-service/cataract#faq',
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
  location.href = 'tel://+(852) 3956 2026'
}
</script>

<template>
  <div>
    <div class="cataract_head">
      <div>
        <div>
          <div>{{ $t('pages.medical_service.cataract') }}</div>
          <div>CATARACT</div>
        </div>
        <div>
          <div>
            <!-- CATARACT -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="421px"
              height="79px"
            >
              <image
                x="0px"
                y="0px"
                width="421px"
                height="79px"
                xlink:href="data:img/png;base64,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"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="418px"
              height="35px"
            >
              <image
                x="0px"
                y="0px"
                width="418px"
                height="35px"
                xlink:href="data:img/png;base64,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"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="cataract">
      <!-- 白內障 -->
      <div>
        <!-- 请勿删除 -->
      </div>
      <!-- 白內障影響日常生活？ -->
      <div>
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son1'
                )
              }}
            </div>
            <div @click="goWhatsApp()">
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_btn1'
                )
              }}
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/306305535d5e270b.png"
                :alt="`${$t('pages.medical_service.cataract')}`"
              />
            </div>
          </div>
        </div>
        <div>
          <p>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text1'
              )
            }}
          </p>
          <p>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text2'
              )
            }}
          </p>
        </div>
        <div @click="goWhatsApp()">
          {{
            $t(
              'pages.medical_service.service_cataract_title.service_cataract_btn2'
            )
          }}
        </div>
      </div>
      <!-- 白內障形成的成因 -->
      <div id="fatorArr">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son2'
                )
              }}
            </div>
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text3'
              )
            }}
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_btn3'
              )
            }}
          </div>
          <div>
            <div>
              <div v-for="(item, index) in fatorArr.slice(0, 3)" :key="index">
                <img :src="item.img" />
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
              <div v-for="(item, index) in fatorArr.slice(3, 7)" :key="index">
                <img :src="item.img" />
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
      </div>
      <!-- 白內障會引起哪些症狀？ -->
      <div id="symptomArr">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son3'
                )
              }}
            </div>
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text4'
              )
            }}
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_btn4'
              )
            }}
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_text12'
                )
              }}
            </div>
            <div>
              <div v-for="(item, index) in symptomArr" :key="index">
                <img :src="item.img" />
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
                  width="37px"
                  height="35px"
                >
                  <path
                    fill-rule="evenodd"
                    fill="rgb(101, 196, 218)"
                    d="M7.117,34.346 L32.201,15.478 L36.862,25.544 L7.117,34.346 ZM14.018,0.341 L27.049,4.716 L0.848,34.890 L14.018,0.341 Z"
                  />
                </svg>
              </div>
              <div>
                {{
                  $t(
                    'pages.medical_service.service_cataract_title.service_cataract_text5'
                  )
                }}
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="34px"
                  height="37px"
                >
                  <path
                    fill-rule="evenodd"
                    fill="rgb(101, 196, 218)"
                    d="M0.413,17.247 L33.150,0.061 L6.306,29.665 L0.413,17.247 ZM28.153,36.931 L17.604,33.501 L33.356,6.351 L28.153,36.931 Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div @click="callTel()">
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_btn5'
              )
            }}
          </div>
        </div>
      </div>
      <!-- 白內障治療，手術 -->
      <div id="surgeryArr">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son4'
                )
              }}
            </div>
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text6'
              )
            }}
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/e018dee96aa2c911.png"
                alt=""
              /><img
                src="https://static.cmereye.com/imgs/2023/05/3f1897286d36f0c5.png"
                alt=""
              />
            </div>
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text7'
              )
            }}
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text11'
              )
            }}
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text8'
              )
            }}
          </div>
          <div>
            <div v-for="(item, index) in surgeryArr" :key="index">
              <img :src="item.img" />
              <div>
                <div v-if="Array.isArray(item.text)">
                  <div v-for="(ele, i) in item.text" :key="i">
                    {{ $t(ele) }}
                  </div>
                </div>
                <div v-else>{{ $t(item.text) }}</div>
              </div>
              <div class="lineText">
                <div>{{item.lineText}}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_title_son5'
              )
            }}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="847px"
              height="100px"
            >
              <defs>
                <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
                  <stop
                    offset="0%"
                    stop-color="rgb(44,79,147)"
                    stop-opacity="1"
                  />
                  <stop
                    offset="100%"
                    stop-color="rgb(255,255,255)"
                    stop-opacity="1"
                  />
                </linearGradient>
              </defs>
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M422.000,84.749 C424.468,84.749 426.469,86.756 426.469,89.234 C426.469,91.710 424.468,93.718 422.000,93.718 C419.532,93.718 417.531,91.710 417.531,89.234 C417.531,86.756 419.532,84.749 422.000,84.749 Z"
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M422.000,0.874 C424.468,0.874 426.469,2.875 426.469,5.342 C426.469,7.811 424.468,9.812 422.000,9.812 C419.532,9.812 417.531,7.811 417.531,5.342 C417.531,2.875 419.532,0.874 422.000,0.874 Z"
              />
              <path
                fill-rule="evenodd"
                stroke="rgb(102, 197, 220)"
                stroke-width="2px"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                d="M423.118,7.578 L423.118,88.111 "
              />
              <path
                fill-rule="evenodd"
                stroke="rgb(102, 197, 220)"
                stroke-width="2px"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                fill="none"
                d="M501.413,59.030 L820.184,59.030 C832.538,59.030 842.553,69.044 842.553,81.398 L842.553,95.939 "
              />
              <image
                x="473px"
                y="8px"
                width="30px"
                height="53px"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA1CAMAAABhhatlAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA21BMVEVmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdz////wSmGtAAAAR3RSTlMAGzMYh3iFemOjQckT/fYH0ECKkjHqBtNhW9sFBNl2R/MnzwoO2rEDLfA99LY77dw2JPuREIzvHi65wQmk4cy+u1iZ1fkiRGqOvdsAAAABYktHREjwAtTqAAAAB3RJTUUH5wUJCjEd2rGv3QAAAKlJREFUOMvt0McOggAQBFBFUEHB3hEVsTfE3rvz/3+kCYkXZa5emOub3Ww2EBRCARIRks8++/w/DiPCWILIOAqZsYIY47iqJZgnkWKcRoZxFrk88wKKjEsoVwjrVRhsvIZ6g7kMs0nYaqHdId7tQWbn9QcYWsRHY0xs4lMTzmzu7YmFg2V45V1YbwB1a9g7r4K91/CuHI6ns5uvF1yutzs++bVDfwjK080LaLMgvUNGYT8AAAAASUVORK5CYII="
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M841.437,89.218 C843.905,89.218 845.906,91.226 845.906,93.702 C845.906,96.179 843.905,98.187 841.437,98.187 C838.969,98.187 836.969,96.179 836.969,93.702 C836.969,91.226 838.969,89.218 841.437,89.218 Z"
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M474.562,0.874 C477.031,0.874 479.031,2.875 479.031,5.342 C479.031,7.811 477.031,9.812 474.562,9.812 C472.094,9.812 470.094,7.811 470.094,5.342 C470.094,2.875 472.094,0.874 474.562,0.874 Z"
              />
              <path
                fill-rule="evenodd"
                stroke="rgb(102, 197, 220)"
                stroke-width="2px"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                fill="none"
                d="M344.493,59.030 L25.723,59.030 C13.368,59.030 3.353,69.044 3.353,81.398 L3.353,95.939 "
              />
              <image
                x="343px"
                y="8px"
                width="30px"
                height="53px"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA1CAMAAABhhatlAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA21BMVEVmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdz////wSmGtAAAAR3RSTlMAGDMbeId6haNjyUEH9v0TQNCSigbqMWHTBdtbdtkEJ/NHCs8DsdoO8C229D023O07EJH7JB7vjAnBuS67vszhpPnVmVhEIk9eauwAAAABYktHREjwAtTqAAAAB3RJTUUH5wUJCjEd2rGv3QAAAK5JREFUOMvt0NcOggAMBVBEUFTAvXGi4sKFe+/7/3+kiYnRSPvqC/exJ23aCgIdn+hnVJAge+yxx//jAIIcy5A4VhDiOIwIo6qmRxmOIc7NTiDJaCqNDMNZ5BjNF1Bk2ECpTGulihqtdRMKrY0mWha9loJ2h1Sri16fVHuA4YjC8cSBOSVwFpzDWahutLSNlQ6sN5/F7Su7/eFJ0I72dw/eOZ0v159jb69ExLvbix9DiSCdm1IkDAAAAABJRU5ErkJggg=="
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M4.469,89.218 C2.001,89.218 0.000,91.226 0.000,93.702 C0.000,96.179 2.001,98.187 4.469,98.187 C6.937,98.187 8.938,96.179 8.938,93.702 C8.938,91.226 6.937,89.218 4.469,89.218 Z"
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M371.344,0.874 C368.876,0.874 366.875,2.875 366.875,5.342 C366.875,7.811 368.876,9.812 371.344,9.812 C373.812,9.812 375.813,7.811 375.813,5.342 C375.813,2.875 373.812,0.874 371.344,0.874 Z"
              />
            </svg>
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_text1'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_text2'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_text3'
                )
              }}
              <br />{{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_text4'
                )
              }}
            </div>
          </div>
        </div>
        <div @click="callTel()">
          {{
            $t(
              'pages.medical_service.service_cataract_title.service_cataract_btn6'
            )
          }}
        </div>
      </div>
      <!-- 選擇人工晶體須知 -->
      <div id="iclArr">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son6'
                )
              }}
            </div>
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text9'
              )
            }}
          </div>
          <div>
            <div v-for="(item, index) in iclArr" :key="index">
              <div>
                <img v-if="item.img" :src="item.img" alt="" srcset="" />
                <div>{{ $t(item.type) }}</div>
              </div>
              <div>
                <div v-if="Array.isArray(item.monofocal)">
                  <div v-for="(ele, eleIndex) in item.monofocal" :key="eleIndex">
                    <img
                      v-if="index"
                      src="https://static.cmereye.com/imgs/2023/05/5be0ff77c88a5626.png"
                    />
                    <div v-if="Array.isArray(ele)">
                      <div v-for="(el, i) in ele" :key="i">{{ $t(el) }}</div>
                    </div>
                    <div v-else><strong v-if="index === 5" >· </strong>{{ $t(ele) }}</div>
                  </div>
                </div>
                <div v-else>
                  {{ $t(item.monofocal) }}
                </div>
              </div>
              <div>
                <div v-if="Array.isArray(item.astigmatism) && index === 4">
                  <div v-for="(ele, eleIndex) in item.astigmatism" :key="eleIndex">
                    <img
                      src="https://static.cmereye.com/imgs/2023/05/5be0ff77c88a5626.png"
                    />
                    <div v-if="Array.isArray(ele)">
                      <div v-for="(el, i) in ele" :key="i">{{ $t(el) }}</div>
                    </div>
                    <div v-else>{{ $t(ele) }}</div>
                  </div>
                </div>
                <div v-else>
                  <div v-for="(ele, eleIndex) in item.astigmatism" :key="eleIndex">
                    <div v-if="Array.isArray(ele)">
                      <div v-for="(el, i) in ele" :key="i">{{ $t(el) }}</div>
                    </div>
                    <div v-else><strong v-if="index === 5" >· </strong>{{ $t(ele) }}</div>
                  </div>
                </div>
              </div>
              <div>
                <div v-if="Array.isArray(item.multipleFocus) && index === 4">
                  <div v-for="(ele, eleIndex) in item.multipleFocus" :key="eleIndex">
                    <img
                      src="https://static.cmereye.com/imgs/2023/05/5be0ff77c88a5626.png"
                    />
                    <div v-if="Array.isArray(ele)">
                      <div v-for="(el, i) in ele" :key="i">{{ $t(el) }}</div>
                    </div>
                    <div v-else>{{ $t(ele) }}</div>
                  </div>
                </div>
                <div v-else-if="Array.isArray(item.multipleFocus)">
                  <div v-for="(ele, eleIndex) in item.multipleFocus" :key="eleIndex">
                    <div v-if="Array.isArray(ele)">
                      <div v-for="(el, i) in ele" :key="i"><strong v-if="index === 5" >· </strong>{{ $t(el) }}</div>
                    </div>
                    <div v-else><strong v-if="index === 5" >· </strong>{{ $t(ele) }}</div>
                  </div>
                </div>
                <div v-else>
                  {{ $t(item.multipleFocus) }}
                </div>
              </div>
            </div>
          </div>
          <div>
            {{
              $t(
                'pages.medical_service.service_cataract_title.service_cataract_text10'
              )
            }}
          </div>
        </div>
        <div @click="goWhatsApp()">
          {{
            $t(
              'pages.medical_service.service_cataract_title.service_cataract_btn7'
            )
          }}
        </div>
      </div>
      <!-- 白內障的術後注意事項 -->
      <div id="announcementsArr">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son7'
                )
              }}
            </div>
          </div>
        </div>
        <div>
          <div v-for="item in announcementsArr" :key="item.id">
            <div>
              <div>{{ item.id }}</div>
              <img :src="item.img" :alt="item.text" />
            </div>
            <div class="announ">{{ $t(item.text) }}</div>
          </div>
        </div>
      </div>
      <!-- 你認識白內障手術嗎？ -->
      <div id="faq">
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_title_son8'
                )
              }}
            </div>
          </div>
        </div>
        <div>
          <PageCollapse
            :answer="meetArr"
            :downarr="'cataract'"
            :style="{ '--subassembly-color': '#66c5dc' }"
          />
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
          <div @click.stop="getPdf('cataract2.pdf',$t(
            'pages.medical_service.service_cataract_title.service_cataract_down1'
          ))">
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt=""
              srcset=""
            />
          </div>
          <div @click.stop="getPdf('cataract2.pdf',$t(
            'pages.medical_service.service_cataract_title.service_cataract_down1'
          ))">
            <p>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_down1'
                )
              }}
            </p>
            <p>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_down_text'
                )
              }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div @click.stop="getPdf('cataract1.pdf',$t(
            'pages.medical_service.service_cataract_title.service_cataract_down2'
          ))">
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt=""
              srcset=""
            />
          </div>
          <div @click.stop="getPdf('cataract1.pdf',$t(
            'pages.medical_service.service_cataract_title.service_cataract_down2'
          ))">
            <p>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_down2'
                )
              }}
            </p>
            <p>
              {{
                $t(
                  'pages.medical_service.service_cataract_title.service_cataract_down_text'
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 公共底部表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#64bcd1;'}`"
    />
  </div>
</template>
<style lang="scss" scoped>
.cataract_head {
  position: relative;
  &::before{
    content: '';
    background-color: #f2f2f2;
    width: calc((100% - 1080px) / 2 + 300px);
    height: 288px;
    bottom: -50px;
    right: 0;
    position: absolute;
  }
  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    
    width: 100%;
    max-width: 1080px;
    margin: 202px auto 100px;
    & > div:first-child {
      font-family: 'NotoSansCJKtc-Bold';
      font-size: 107px;
      font-weight: bold;
      line-height: 1;
      font-stretch: normal;
      letter-spacing: 12px;
      color: #63bacc;

      & > div:nth-child(2) {
        font-family: 'DINCondensed';
        display: block;
        font-size: 140px;
        letter-spacing: 2px;
      }
    }
    &>div:last-child{
      margin-right: 10px;
    }
  }
}

.cataract {
  position: relative;
  max-width: 1200px;
  margin: auto;
  transform: scale(0.9);
  margin-top: -40%;

  & > div:nth-child(2) {
    padding-top: 165px;

    & > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 78px;
      position: relative;

      & > div:nth-child(1) {
        margin-top: 191px;
      }

      & > div {
        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Medium';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
        }

        & > div:nth-child(2) {
          cursor: pointer;
          margin-top: 77px;
          margin-left: 8px;
          width: 375px;
          height: 85px;
          font-family: 'NotoSansHK-Bold';
          font-size: 36px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 2.2;
          letter-spacing: 0px;
          color: #ffffff;
          background-image: linear-gradient(90deg, #a0e3f2 0%, #65c4da 100%),
            linear-gradient(90deg, #accbee 0%, #e7f0fd 100%);
          background-blend-mode: normal, normal;
          border-radius: 85px;
          text-align: center;
        }
      }

      & > div:nth-child(2) {
        position: relative;

        & > div > {
          img {
            position: relative;
            z-index: 3;
          }
        }

        & > div::after {
          content: '';
          background-color: #f2f2f2;
          position: absolute;
          width: 653px;
          height: 472px;
          bottom: -30px;
          left: -30px;
          z-index: 1;
          border-radius: 20px;
        }
      }
    }

    & > div:nth-child(2) {
      margin-top: 122px;
      padding-left: 3px;
      font-family: 'NotoSansHK-Regular';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 35px;
      letter-spacing: 0px;
      color: #515151;

      & > p {
        margin-bottom: 41px;
      }
    }

    & > div:nth-child(3) {
      cursor: pointer;
      display: flex;
      justify-content: center;
      margin: auto;
      margin-top: 103px;
      width: 695px;
      height: 85px;
      background-image: linear-gradient(90deg, #a0e3f2 0%, #65c4da 100%),
        linear-gradient(90deg, #edd32c 0%, #fe7c76 100%);
      background-blend-mode: normal, normal;
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 2.2;
      letter-spacing: 0px;
      color: #ffffff;
      border-radius: 85px;
    }
  }

  & > div:nth-child(3) {
    & > div:nth-child(1) {
      position: relative;

      & > div:nth-child(1) {
        width: 260px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;

        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          position: absolute;
          top: 27px;
          width: 450px;
          background: #fff;
          left: -65px;
        }
      }

      & > div:nth-child(2) {
        margin: 0 auto;
        margin-top: 78px;
        width: 1280px;
        height: 133px;
        border: solid 2px #66c5dc;

        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #515151;
        border-radius: 133px 0 133px 0;

        padding-top: 31px;
        padding-left: 75px;
        margin-left: -35px;
      }
    }

    & > div:nth-child(2) {
      margin-top: 94px;

      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 30px;
        font-weight: bold;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #ffffff;

        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 312px;
        height: 66px;
        background-image: linear-gradient(#5ab7d5, #5ab7d5),
          linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
        background-blend-mode: normal, normal;
        box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.35);
        border-radius: 20px;
      }

      & > div:nth-child(2) {
        margin-top: 97px;
        display: flex;
        flex-wrap: wrap;

        & > div {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          justify-content: space-evenly;

          & > div {
            & > img {
              box-shadow: 8px 8px 8px 2px #d8f1f7;
              border-radius: 50%;
              margin-bottom: 37px;
            }

            & > div {
              white-space: pre-wrap !important;
              text-align: center;
              height: 54px;

              font-family: 'NotoSansHK-Medium';
              font-size: 24px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 35px;
              letter-spacing: 0px;
              color: #515151;
            }
          }
        }

        & > div:nth-child(2) {
          justify-content: space-between;
        }
      }
    }
  }

  & > div:nth-child(4) {
    margin-top: 200px;

    & > div:nth-child(1) {
      position: relative;

      & > div:nth-child(1) {
        width: 260px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;

        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;

          position: absolute;
          top: 27px;
          width: 462px;
          left: -66px;
        }
      }

      & > div:nth-child(2) {
        margin-top: 81px;
        padding-left: 4px;
        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #515151;
      }
    }

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        margin: auto;
        text-align: center;
        margin-top: 75px;

        font-family: 'NotoSansHK-Medium';
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 2.2;
        letter-spacing: 0px;
        color: #fff;

        width: 501px;
        height: 75px;
        background-image: linear-gradient(#5ab7d5, #5ab7d5),
          linear-gradient(#f6fbfe, #f6fbfe);
        background-blend-mode: normal, normal;
        box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.35);
        border-radius: 20px;
      }

      & > div:nth-child(2) {
        margin-top: 52px;

        & > div:nth-child(1) {
          padding-left: 3px;
          font-family: 'NotoSansHK-Bold';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 35px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(2) {
          display: flex;
          justify-content: space-between;
          padding: 0 10px;

          & > div {
            transform: scale(0.85);

            & > div {
              margin-top: 31px;

              white-space: pre-wrap !important;
              height: 51px;
              display: flex;
              align-items: center;
              justify-content: center;

              font-family: 'NotoSansHK-Medium';
              font-size: 22px;
              letter-spacing: 0px;
              color: #515151;
            }
          }
        }

        & > div:nth-child(3) {
          position: relative;
          margin-top: 102px;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 35px;
          letter-spacing: 0px;
          color: #515151;

          border: solid 2px #65c4da;
          border-radius: 143px;
          box-sizing: border-box;
          padding: 27px 80px;

          & > div:first-child {
            position: absolute;
            background: #fff;
            padding: 20px;
            right: 70px;
            top: -50px;
          }

          & > div:last-child {
            position: absolute;
            background: #fff;
            padding: 20px;
            bottom: -50px;
            left: 70px;
          }
        }
      }

      & > div:nth-child(3) {
        cursor: pointer;
        margin: auto;
        margin-top: 103px;
        width: 556px;
        height: 86px;
        background-image: linear-gradient(90deg, #a0e3f2 0%, #65c4da 100%),
          linear-gradient(90deg, #edd22d 0%, #fe7d76 100%);
        background-blend-mode: normal, normal;

        font-family: 'NotoSansHK-Bold';
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 2.2;
        letter-spacing: 0px;
        color: #ffffff;
        border-radius: 86px;
        text-align: center;
      }
    }
  }

  & > div:nth-child(5) {
    & > div:nth-child(1) {
      position: relative;

      & > div:nth-child(1) {
        width: 829px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;

        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;

          position: absolute;
          top: 27px;
          width: 980px;
          left: -66px;
        }
      }
    }

    & > div:nth-child(2) {
      margin-top: 81px;

      & > div:nth-child(1) {
        padding-left: 7px;
        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(2) {
        margin-top: 77px;
        margin-bottom: 171px;
        padding-left: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: scale(0.85);
        margin-left: -60px;

        & > div {
          display: flex;

          & > img:nth-child(1) {
            width: 847px;
            z-index: 5;
          }

          & > img:nth-child(2) {
            width: 565px;
            position: relative;
            z-index: 2;
            bottom: -80px;
            left: -115px;
          }
        }
      }

      & > div:nth-child(3) {
        border-radius: 20px;
        border: solid 2px #66c5dc;
        padding: 51px 61px;

        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #515151;
      }
    }

    & > div:nth-child(3) {
      margin-top: 123px;

      & > div:nth-child(1) {
        background: linear-gradient(to right, #51d6d8, #2296bb);
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(#51d6d8),
          to(#2296bb)
        );
        background: -moz-linear-gradient(to right, #51d6d8, #2296bb);
        background: -ms-linear-gradient(to right, #51d6d8, #2296bb);
        background: -o-linear-gradient(to right, #51d6d8, #2296bb);
        background-clip: text;
        color: transparent;

        font-family: 'NotoSansHK-Bold';
        font-size: 38px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        text-align: center;
        line-height: 1;
      }

      & > div:nth-child(2) {
        margin-top: 68px;
        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(3) {
        margin: 48px 30px;
        display: flex;
        justify-content: space-between;

        &  > div > div {
          margin-top: 37px;
          white-space: pre-wrap !important;
          text-align: center;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 32px;
          letter-spacing: 0px;
          color: #515151;
        }
        .lineText{
          display: none;    
        }
      }
    }

    & > div:nth-child(4) {
      max-width: 1530px;
      margin: 0 auto;

      & > div:nth-child(1) {
        width: 557px;
        height: 98px;
        margin: auto;
        border-radius: 43px;
        border: solid 2px #66c5dc;

        font-family: 'NotoSansHK-Medium';
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #66c5dc;
        line-height: 2.5;
        text-align: center;
      }

      & > div:nth-child(2) {
        margin: 10px auto 7px auto;
        display: flex;
        justify-content: center;
      }

      & > div:nth-child(3) {
        display: flex;
        margin: auto 57px;
        justify-content: space-between;

        & > div {
          width: 369px;
          height: 175px;
          border-radius: 17px;
          border: solid 2px #66c5dc;

          display: flex;
          align-items: center;
          justify-content: center;

          font-family: 'NotoSansHK-Medium';
          font-size: 34px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #66c5dc;
          transform: scale(0.85);
          margin-top: -15px;
        }
      }
    }

    & > div:nth-child(5) {
      cursor: pointer;
      font-family: 'NotoSansHK-Bold';
      margin: auto;
      margin-top: 126px;
      font-size: 36px;
      text-align: center;
      border-radius: 86px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 2.2;
      letter-spacing: 0px;
      color: #f8fcff;

      width: 556px;
      height: 86px;
      background-image: linear-gradient(90deg, #a0e3f2 0%, #65c4da 100%),
        linear-gradient(90deg, #edd22d 0%, #fe7d76 100%);
      background-blend-mode: normal, normal;
    }
  }

  & > div:nth-child(6) {
    & > div:nth-child(1) {
      position: relative;

      & > div:nth-child(1) {
        width: 204px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;

        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;

          position: absolute;
          top: 27px;
          width: 350px;
          left: -66px;
        }
      }
    }

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        padding-left: 2px;
        padding-right: 6px;
        margin: 61px auto;
        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 42px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(2) {
        max-width: 1530px;
        margin: 0 auto;
        border: #21a1c1 solid 2px;
        border-radius: 20px;
        overflow: hidden;

        font-family: 'NotoSansHK-Medium';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 31px;
        letter-spacing: 0px;
        color: #515151;

        & > div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 142px;
          background: #f6fbfe;
          border-bottom: 2px solid #21a1c1;
          white-space: pre-wrap !important;
          text-align: center;

          & > div {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 2px solid #21a1c1;

            & > div {
              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                &>div{
                  padding-top: 5px;
                }
                & > img {
                  margin-right: 5px;
                }
              }
            }
          }

          & > div:last-child {
            border-right: none;
          }
        }

        & > div:nth-child(1) {
          background: #64bcd1;

          font-family: 'NotoSansHK-Bold';
          font-size: 28px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 42px;
          letter-spacing: 0px;
          color: #ffffff;
          text-align: center;
        }

        & > div:nth-child(5) {
          & > div:nth-child(2) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: center;

              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;
              }

              & > div:nth-child(2) {
                font-family: 'NotoSansHK-Regular';
                font-size: 18px;

                & > img {
                  display: none;
                }
              }
            }
          }

          & > div:nth-child(3) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;

                & > img {
                  margin-right: 5px;
                }
              }

              & > div:nth-child(2) {
                margin-top: 20px;
              }
            }
          }

          & > div:nth-child(4) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;

                & > img {
                  margin-right: 5px;
                }
              }

              & > div:nth-child(2) {
                margin-top: 20px;
              }
            }
          }
        }

        & > div:nth-child(6) {
          height: 275px;
          font-family: 'NotoSansHK-Medium';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.8;
          letter-spacing: 0px;
          color: #515151;

          & > div:nth-child(2) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              
              & > div {
                & > img {
                  display: none;
                }
              }
            }
          }

          & > div:nth-child(3) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

              & > div {
                & > img {
                  display: none;
                }
              }
            }
          }

          & > div:nth-child(4) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;

                & > img {
                  margin-right: 5px;
                }
              }
            }

            & > div:nth-child(1) {
              & > div:nth-child(1) {
                & > div:nth-child(1) {
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  text-align: left;
                }
              }
            }
          }
        }

        & > div:last-child {
          border-bottom: none;
        }
      }

      & > div > div > div:nth-child(1) {
        width: 245px;
        margin-left: 44px;
        flex: none;
        display: flex;
        justify-content: flex-start;
        &>div{
          padding-top: 8px;
        }
        & > img {
          margin-right: 10px;
        }
      }

      & > div:nth-child(3) {
        margin-top: 45px;

        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 32px;
        letter-spacing: 0px;
        color: #515151;
      }
    }

    & > div:nth-child(3) {
      width: 556px;
      height: 86px;
      background-image: linear-gradient(90deg, #a0e3f2 0%, #65c4da 100%),
        linear-gradient(90deg, #edd12e 0%, #fe7e76 100%);
      background-blend-mode: normal, normal;
      margin: auto;

      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 52px;
      letter-spacing: 0px;
      color: #f8fcff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 85px;
      margin-top: 105px;
      cursor: pointer;
    }
  }

  & > div:nth-child(7) {
    & > div:nth-child(1) {
      position: relative;

      & > div:nth-child(1) {
        width: 306px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;

        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;

          position: absolute;
          top: 27px;
          width: 420px;
          left: -66px;
        }
      }
    }

    & > div:nth-child(2) {
      margin-top: 90px;

      & > div {
        display: flex;
        align-items: center;
        margin: 60px;
      }

      & > div:nth-child(2n) {
        flex-direction: row-reverse;

        & > div:nth-child(2) {
          margin-right: 40px;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 41px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div > div:nth-child(1) {
          position: absolute;
          top: -27px;
          right: -43px;
        }
      }

      & > div:nth-child(2n + 1) {
        & > div:nth-child(2) {
          margin-left: 40px;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 41px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div > div:nth-child(1) {
          position: absolute;
          top: -27px;
          left: -40px;
        }
      }

      & > div > div:nth-child(1) {
        position: relative;

        & > div:nth-child(1) {
          font-family: 'AcuminVariableConcept';
          font-size: 120px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 41px;
          letter-spacing: 0px;
          color: #ffffff;
          text-shadow: 0px 0px 5px #66c5dc;
          font-style: oblique;
        }
      }
    }
  }

  & > div:nth-child(8) {
    & > div:nth-child(1) {
      position: relative;

      & > div:nth-child(1) {
        width: 306px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;

        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;

          position: absolute;
          top: 27px;
          width: 430px;
          left: -62px;
        }
      }
    }

    & > div:nth-child(2) {
      margin-top: 100px;
    }
  }

  // 公共使用
  & > div {
    margin-top: 200px;
  }

  & > div:first-child {
    margin: 0;
  }

  & > div:nth-child(2) {
    margin: 0;
  }
}

.dow {
  margin-top: -350px;
  margin-bottom: 150px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    & > div {
      width: 62.93%;
      height: 202px;
      background: #64bcd1;
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

  & > div:nth-child(2) {
    & > div {
      margin-top: 88px;
      width: 58.2%;
      height: 202px;
      background: #64bcd1;
      position: relative;
      display: flex;
      align-items: center;

      & > div:nth-child(1) {
        margin-left: 30vw;
        margin-right: 3vw;
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
  .cataract_head {
    position: relative;
    &::before{
      width: 150px;
      height: 200px;
      bottom: -100px;
    }
    & > div {
      margin: 150px auto 100px;
      & > div:first-child {
        font-size: 50px;
        letter-spacing: 0.05em;
        padding-right: 40px;
        & > div:nth-child(2) {
          font-size: 52px;
        }
      }
      &>div:last-child{
        margin-right: 47px;
        svg{
          width: 162px;
          height: auto;
          image{
            width: 162px;
            height: auto;
          }
        }
      }
    }
  }
  .cataract{
     transform: scale(1);
    & > div:nth-child(2) {
      width: calc(100% - 60px);
      margin: 0 auto;
      & > div:nth-child(1) {
        width: 100%;
        flex-direction: row-reverse;
        align-items: center;
        margin-left: 0;
        margin-top: 50px;
        & > div:nth-child(1){
          margin-top: 0;
          flex: 1;
          margin-left: 10px;
        }
        &>div{
          & > div:nth-child(1) {
            font-size: 16px;
            line-height: 1.6;
            text-align: center;
          }
          & > div:nth-child(2) {
            font-size: 14px;
            line-height: 1.6;
            width: auto;
            height: 35px;
            line-height: 35px;
            padding: 0 10px;
            margin-top: 20px;
          } 
        }
        & > div:nth-child(2){
          width: 45%;
          & > div::after {
            width: 100%;
            height: 100%;
            top: 10px;
            left: -10px;
            border-radius: 5px;
          }
        }
      }
      & > div:nth-child(2) {
        width: 100%;
        font-size: 14px;
        line-height: 160%;
        margin-top: 50px;
        & > p {
          margin-bottom: 20px;
        }
      }
      & > div:nth-child(3) {
        width: 100%;
        font-size: 18px;
        height: 40px;
        line-height: 40px;
        margin-top: 30px;
      }
    }
    & > div:nth-child(3) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 120px;
          height: 70px;
          border-radius: 15px;
          &>div{
            width: max-content;
            font-size: 22px;
            line-height: 30px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
        & > div:nth-child(2) {
          margin-top: 30px;
          width: 100%;
          border-radius: 60px 10px 60px 10px;
          margin-left: 0px;
          font-size: 14px;
          line-height: 1.6;
          padding: 25px 30px 20px;
          height: auto;
        }
      }
      & > div:nth-child(2) {
        margin-top: 30px;
        & > div:nth-child(1) {
          font-size: 18px;
          line-height: 35px;
          height: auto;
          width: max-content;
          padding: 0 15px 2px;
          border-radius: 10px;
        }
        & > div:nth-child(2) {
          margin-top: 50px;
          & > div {
            align-items: flex-start;
            margin-bottom: 20px;
            & > div {
              width: 65px;
              & > img {
                box-shadow: 2px 2px 2px 2px #d8f1f7;
                margin-bottom: 10px;
              }
              & > div {
                // white-space: initial !important;
                font-size: 14px;
                line-height: 1.6;
                height: auto;
                text-align: center;
                &>div{
                  div{
                    display: inline;
                  }
                }
              }
            }
            &:nth-of-type(1){
              &>div:nth-of-type(3){
                &>div{
                  width: 120px;
                  margin-left: -25px;
                  &>div{
                    div{
                      display: inline-block;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    & > div:nth-child(4) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 120px;
          height: 70px;
          border-radius: 15px;
          &>div{
            width: max-content;
            font-size: 22px;
            line-height: 30px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
        & > div:nth-child(2) {
          margin-top: 30px;
          font-size: 14px;
          line-height: 1.6;
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          width: max-content;
          margin-top: 40px;
          height: auto;
          padding: 10px 30px;
          font-size: 16px;
          line-height: 1.6;
          border-radius: 10px;
        }
        & > div:nth-child(2) {
          margin-top: 30px;
          & > div:nth-child(1) {
            font-size: 16px;
            line-height: 1.6;
            padding-left: 0;
          }
          & > div:nth-child(2) {
            margin-top: 20px;
            flex-wrap: wrap;
            justify-content: center;
            padding: 0;
            width: calc(100% + 20px);
            margin-left: -10px;
            &>div{
              transform: scale(1);
              width: 33.33%;
              padding: 0 10px;
              margin-bottom: 30px;
              img{
                filter: drop-shadow(2px 1px 7px rgba(0, 0, 0, 0.45));
              }
              &>div{
                text-align: center;
                font-size: 12px;
                margin-top: 5px;
              }
            }
          }
          & > div:nth-child(3) {
            margin-top: 0;
            padding: 20px 30px;
            font-size: 14px;
            line-height: 1.6;
            & > div:first-child {
              right: 50px;
              padding: 5px;
              top: -30px;
              svg{
                transform: scale(.7);
              }
            }
            & > div:last-child {
              left: 50px;
              padding: 5px;
              bottom: -30px;
              svg{
                transform: scale(.7);
              }
            }
          }
        }
        & > div:nth-child(3) {
          width: max-content;
          height: 44px;
          padding: 0 30px;
          line-height: 44px;
          font-size: 22px;
          margin-top: 50px;
        }
      }
    }
    & > div:nth-child(5){
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 200px;
          height: 130px;
          border-radius: 15px;
          &>div{
            width: 330px;
            font-size: 22px;
            line-height: 40px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
      }
      & > div:nth-child(2) {
        margin-top: 30px;
        & > div:nth-child(1) {
          font-size: 14px;
          line-height: 2;
        }
        & > div:nth-child(2) {
          transform: scale(1);
          margin-top: 30px;
          margin-left: 0px;
          padding-left: 0;
          margin-bottom: 0;
          width: 100%;
          & > div {
            & > img:nth-child(1) {
              width: 210px;
            }
            & > img:nth-child(2) {
              width: 150px;
              bottom: -20px;
              left: -30px;
            }
          }
        }
        & > div:nth-child(3) {
          font-size: 14px;
          line-height: 2;
          padding: 15px 20px;
          margin-top: 40px;
          border: solid 1px #66c5dc;
        }
      }
      & > div:nth-child(3) {
        margin-top: 55px;
        & > div:nth-child(1) {
          font-size: 24px;
        }
        & > div:nth-child(2) {
          margin-top: 30px;
          line-height: 2;
          font-size: 14px;
        }
        & > div:nth-child(3) {
          margin: 48px auto;
          flex-direction: column;
          & > div {
            display: flex;
            align-items: center;
            position: relative;
            &:not(:first-child){
              margin-top: 30px;
            }
            img{
              width: 150px;
              position: relative;
              z-index: 2;
              margin-left: 20px;
            }
          }
          & > div > div:nth-of-type(1) {
            font-size: 16px;
            border: 2px solid #A6DEF0;
            border-radius: 20px;
            width: 230px;
            justify-content: flex-end;
            padding-right: 10px;
            margin-left: -60px;
            height: 120px;
            display: flex;
            align-items: center;
            margin-top: 0;
            position: relative;
            z-index: 1;
            div{
              width: 130px;
              display: initial;
            }
          }
          .lineText{
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
            color: #fff;
            font-size: 12px;
            border: 1px solid #51D6D8;
            padding: 5px;
            border-radius: 50%;
            margin-top: 10px;
            &>div{
              width: 45px;
              height: 45px;
              background: linear-gradient(270deg, #2296BB 0%, #51D6D8 100%);
              line-height: 45px;
              padding-top: 2px;
              text-align: center;
              border-radius: 50%;
            }
          }
        }
      }
      & > div:nth-child(4) {
        max-width: 330px;
        & > div:nth-child(1) {
          width: max-content;
          font-size: 18px;
          height: auto;
          line-height: 1.6;
          padding: 5px 30px;
        }
        & > div:nth-child(2) {
          display: none;
        }
        & > div:nth-child(3) {
          flex-direction: column;
          font-size: 16px;
          margin: 0 0 0 40px;
          padding-left: 20px;
          border-left: solid 2px #66c5dc;
          &>div{
            width: 100%;
            height: auto;
            border: none;
            margin-top: 20px;
            font-size: 16px;
            transform: scale(1);
            justify-content: flex-start;
            position: relative;
            &::before{
              content: '';
              position: absolute;
              top: 0;
              top: 50%;
              transform: translateY(-50%);
              left: -32px;
              width: 20px;
              height: 20px;
              background: url(https://static.cmereye.com/imgs/2023/07/5f0bd54a3df3bf8f.png);
              background-size: 100% 100%;
            }
            br{
              display: none;
            }
          }
        }
      }
      & > div:nth-child(5) {
        font-size: 18px;
        margin-top: 55px;
        width: max-content;
        height: auto;
        padding: 5px 30px;
        line-height: 1.6;
      }
    }
    & > div:nth-child(6){
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 120px;
          height: 70px;
          border-radius: 15px;
          &>div{
            width: max-content;
            font-size: 22px;
            line-height: 30px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
      }
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          margin: 30px auto 10px;
          font-size: 14px;
          line-height: 2;
        }
        & > div:nth-child(2) {
          font-size: 12px;
          line-height: 1.4;
          &>div{
            height: auto;
            & > div {
              & > div {
                & > div {
                  & > img {
                    width: 15px;
                    margin-left: 10px;
                  }
                }
              }
            }
          }
          & > div:nth-child(1) {
            font-size: 16px;
            line-height: 1.2;
            &>div{
              padding: 10px 0;
            }
          }
          & > div:nth-child(5) {
            & > div:nth-child(2) {
              &>div{
                padding: 15px 0;
                &>div{
                  align-items: flex-start;
                  &>img{
                    margin-top: 3px;
                  }
                }
                &>div:nth-child(2){
                  font-size: 12px;
                }
              }
            }
            & > div:nth-child(3) {
              & > div {
                & > div {
                  align-items: flex-start;
                  &>img{
                    margin-top: 3px;
                  }
                }
                & > div:nth-child(2) {
                  margin-top: 0px;
                }
              }
            }
            & > div:nth-child(4) {
              & > div {
                & > div {
                  align-items: flex-start;
                  &>img{
                    margin-top: 3px;
                  }
                }
                & > div:nth-child(2) {
                  margin-top: 0px;
                }
              }
            }
          }
          & > div:nth-child(6) {
            height: auto;
            font-size: 12px;
            &>div{
              padding: 15px 5px;
            }
          }
        }
        & > div > div > div:nth-child(1) {
          width: 70px;
          margin-left: 0;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
          & > img {
            margin-right: 0;
          }
        }
        & > div:nth-child(3) {
          margin-top: 14px;
          font-size: 14px;
          line-height: 1.6;
        }
      }
      & > div:nth-child(3) {
        font-size: 18px;
        margin-top: 55px;
        width: max-content;
        height: auto;
        padding: 5px 30px;
        line-height: 1.6;
      }
    }
    & > div:nth-child(7){
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 120px;
          height: 70px;
          border-radius: 15px;
          &>div{
            width: max-content;
            font-size: 22px;
            line-height: 30px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
      }
      & > div:nth-child(2) {
        margin-top: 50px;
        &>div{
          margin: 60px 0;
        }
        & > div:nth-child(2n) {
          & > div:nth-of-type(1){
            width: 120px;
            img{
              width: 100%;
            }
          }
          & > div:nth-child(2) {
            margin-right: 15px;
            font-size: 14px;
            line-height: 1.6;
            flex: 1;
          }
          & > div > div:nth-child(1) {
            top: -15px;
            right: 0px;
          }
        }
        & > div:nth-child(2n + 1) {
          & > div:nth-of-type(1){
            width: 120px;
            img{
              width: 100%;
            }
          }
          & > div:nth-child(2) {
            margin-left: 15px;
            font-size: 14px;
            line-height: 1.6;
            flex: 1;
          }
          & > div > div:nth-child(1) {
            left: 0;
            top: -15px;
          }
        }
        & > div > div:nth-child(1) {
          & > div:nth-child(1) {
            font-style: initial;
            font-size: 70px;
          }
        }
      }
    }
    & > div:nth-child(8){
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: 120px;
          height: 70px;
          border-radius: 15px;
          &>div{
            width: max-content;
            font-size: 22px;
            line-height: 30px;
            text-align: center;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
      }
      & > div:nth-child(2) {
        margin-top: 50px;
      }
    }
    & > div {
      margin-top: 70px;
    }
  }
  .dow {
    margin-top: 70px;
    font-size: 14px;
    & > div:nth-child(1) {
      &>div{
        width: calc(100% - 30px);
        height: 90px;
        & > div:nth-child(1) {
          cursor: pointer;
          margin-left: 20%;
          margin-right: 8%;
          & > img {
            width: 55px;
            height: auto;
          }
        }
      }
    }
    & > div:nth-child(2) {
      &>div{
        height: 90px;
        width: 65%;
        margin-top: 40px;
        & > div:nth-child(1) {
          cursor: pointer;
          margin-left: 18%;
          margin-right: 8%;
          & > img {
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
  .cataract {
    margin-top: -20%;
  }

  .dow {
    & > div:nth-child(1) {
      & > div {
        & > div:nth-child(1) {
          margin-left: 32.2vw;
        }
      }
    }

    & > div:nth-child(2) {
      & > div {
        & > div:nth-child(1) {
          margin-left: 36.6vw;
        }
      }
    }
  }
}
</style>
