<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: 'glaucoma',
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
  location.href = 'tel://+(852) 3956 2026'
}
</script>

<template>
  <div>
    <div class="glaucoma">
      <!-- 青光眼 -->
      <div>
        <div>
          <div>{{ $t('pages.medical_service.glaucoma') }}</div>
          <div>GLAUCOMA</div>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/fb9e1aefd79e4a11.png"
          />
          <img
            src="https://static.cmereye.com/imgs/2023/05/c3b55dfc41770b3d.png"
          />
        </div>
      </div>
      <!-- 什麼是青光眼？ -->
      <div>
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
                  'pages.medical_service.service_glaucoma_title.service_glaucoma_title8'
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
            <img
              src="https://static.cmereye.com/imgs/2023/05/a4fa152ef992618f.png"
              alt="預防青光眼"
            />
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
        <a
          href="../../assets/pdf/glaucoma.pdf"
          :download="`${$t(
            'pages.medical_service.service_glaucoma_title.service_glaucoma_down'
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
        </a>
      </div>
    </div>
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#bbe0d5;'}`"
    />
  </div>
</template>

<style lang="scss" scoped>
.glaucoma {
  margin: auto 300px;
  position: relative;

  // 青光眼
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
      color: #9bcfcc;

      & > div:nth-child(2) {
        font-family: 'DINCondensed';
        display: block;
        font-size: 140px;
        letter-spacing: 13px;
      }
    }

    & > div:nth-child(2) {
      left: -334px;
      right: 0;
      top: 120px;

      & > img:nth-child(2) {
        margin-top: 5px;
      }
    }
  }

  // 什麼是青光眼？
  & > div:nth-child(2) {
    padding-top: 689px;

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
        width: 625px;
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
            padding-right: 88px;
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
    & > div:nth-child(1) {
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
        width: 1163px;
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

    & > div:nth-child(2) {
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
        width: 1163px;
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

    & > div:nth-child(4) {
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
        width: 1163px;
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

        & > div:nth-child(1),
        div:nth-child(2) {
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
            width: 312px;

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
              height: 200px;
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
        width: 1163px;
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

          & > div:nth-child(2) {
            margin-top: 16px;
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
        width: 1163px;
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
              width: 590px;
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
      max-width: 1313px;
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
            font-size: 26px;
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
            font-size: 24px;
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
          font-size: 24px;
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
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(3) {
          width: 640px;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #515151;
          justify-content: flex-start;
          padding-left: 48px;
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
              width: 588px;
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
              font-size: 49px;
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
            font-size: 24px;
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
  margin-top: 150px;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    & > a {
      width: 62.5%;
      height: 202px;
      background: #9ccfc8;
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
}
</style>
