<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '白内障｜醫療服務｜眼科專科醫生',
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
    img: 'https://static.cmereye.com/imgs/2023/05/a83300c944834450.png',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_fator.cataract_array_fator2',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/77092ee46cf226d9.png',
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
    img: 'https://static.cmereye.com/imgs/2023/05/03c86d6ac63e3454.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom1_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom1_2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a4f207cfb55a0903.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom2_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom2_2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/e493e6f5a154cd97.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom3_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom3_2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/848679d9bcce652d.png',
    text: 'pages.medical_service.service_cataract_title.service_cataract_array_symptom.cataract_array_symptom4',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/c864d708858a3f2e.png',
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
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/55d34019e98d8e65.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery2_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery2_2',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/7b14a5086daa3610.png',
    text: [
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery3_1',
      'pages.medical_service.service_cataract_title.service_cataract_array_surgery.cataract_array_surgery3_2',
    ],
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
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a1',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a2',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a3',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a4',
      'pages.medical_service.service_cataract_title.service_cataract_array_meet.cataract_array_meet_a5',
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
    <div class="cataract">
      <!-- 白內障 -->
      <div>
        <div>
          <div>{{ $t('pages.medical_service.cataract') }}</div>
          <div>CATARACT</div>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/0d9057551d0ce216.png"
          />
          <img
            src="https://static.cmereye.com/imgs/2023/05/e5ca6db9212362ab.png"
          />
        </div>
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
                src="https://static.cmereye.com/imgs/2023/05/54ae049d3ec05868.png"
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
          <div @click="callTel()"></div>
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
                {{ $t(item.type) }}
              </div>
              <div>
                <div v-if="Array.isArray(item.monofocal)">
                  <div v-for="(ele, index) in item.monofocal" :key="index">
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
                  {{ $t(item.monofocal) }}
                </div>
              </div>
              <div>
                <div v-if="Array.isArray(item.astigmatism)">
                  <div v-for="(ele, index) in item.astigmatism" :key="index">
                    <img
                      src="https://static.cmereye.com/imgs/2023/05/5be0ff77c88a5626.png"
                    />
                    <div v-if="Array.isArray(ele)">
                      <div v-for="(el, i) in ele" :key="i">{{ $t(el) }}</div>
                    </div>
                    <div v-else>{{ $t(ele) }}</div>
                  </div>
                </div>
              </div>
              <div>
                <div v-if="Array.isArray(item.multipleFocus)">
                  <div v-for="(ele, index) in item.multipleFocus" :key="index">
                    <div v-if="Array.isArray(ele)">
                      <div v-for="(el, i) in ele" :key="i">{{ $t(el) }}</div>
                    </div>
                    <div v-else>{{ $t(ele) }}</div>
                  </div>
                </div>
                <div v-else>{{ $t(item.multipleFocus) }}</div>
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
        <a
          href="../../assets/pdf/cataract2.pdf"
          :download="`${$t(
            'pages.medical_service.service_cataract_title.service_cataract_down1'
          )}.pdf`"
        >
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
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
        </a>
      </div>
      <div>
        <a
          href="../../assets/pdf/cataract1.pdf"
          :download="`${$t(
            'pages.medical_service.service_cataract_title.service_cataract_down2'
          )}.pdf`"
        >
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
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
        </a>
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
.cataract {
  margin: auto 300px;
  position: relative;

  & > div:nth-child(1) {
    position: absolute;
    top: 202px;
    right: -300px;
    width: 541px;
    height: 288px;
    background-color: #f2f2f2;

    & > div {
      position: absolute;
      top: -110px;
      right: 300px;
      text-align: right;
    }

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

    & > div:nth-child(2) {
      left: -192px;
      right: 0;
      top: 120px;
    }
  }

  & > div:nth-child(2) {
    padding-top: 689px;

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
        width: 1320px;
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
        padding-left: 93px;
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

        & > div > div {
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
  margin-top: 150px;
  margin-bottom: 150px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    & > a {
      width: 62.93%;
      height: 202px;
      background: #64bcd1;
      position: relative;
      display: flex;
      align-items: center;

      & > div:nth-child(1) {
        margin-left: 520px;
        margin-right: 75px;

        & > img {
          width: 120px;
          height: 135px;
        }
      }

      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }

  & > div:nth-child(2) {
    & > a {
      margin-top: 88px;
      width: 58.2%;
      height: 202px;
      background: #64bcd1;
      position: relative;
      display: flex;
      align-items: center;

      & > div:nth-child(1) {
        margin-left: 355px;
        margin-right: 175px;

        & > img {
          width: 120px;
          height: 135px;
        }
      }

      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
</style>
