<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')
useHead({
  title: `${t('pages.process_cost.cost')} | ${t('pages.process_cost.process')}`,
  meta() {
    return [
      {
        hid: 'processAndCostDesc1',
        name: 'description',
        content: t('tdk.process-and-cost.desc1'),
      },
      {
        hid: 'processAndCostKey1',
        name: 'keywords',
        content: t('tdk.process-and-cost.key1'),
      },
      {
        hid: 'processAndCostDesc2',
        name: 'description',
        content: t('tdk.process-and-cost.desc2'),
      },
      {
        hid: 'processAndCostKey2',
        name: 'keywords',
        content: t('tdk.process-and-cost.key2'),
      },
    ]
  },
})
const serviceNavigation = [
  {
    anchorName: 'pages.process_cost.cost',
    anchorLink: '/process-and-cost#cost',
  },
  {
    anchorName: 'pages.process_cost.process',
    anchorLink: '/process-and-cost#processed',
  },
]
const isShowLanguageBool = ref(false)
const processBox = ref({
  offsetTop: 0,
})
onMounted(() => {
  scrollHeight()
  window.addEventListener('scroll', scrollHeight)
})
const scrollHeight = () => {
  if (window.scrollY >= processBox.value.offsetTop - 300) {
    isShowLanguageBool.value = true
  } else {
    isShowLanguageBool.value = false
  }
}
const processedLists:any = [
  {
    img: 'https://static.cmereye.com/imgs/2024/03/1c9bdc439e10d0a7.png',
    name: ['pages.process_cost.process_1.process_p1'],
    nameb: '',
    texts: [],
    img_alt: '病人登記',
    img_title: '登記'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/03/b5ea6eeffceb0e02.png',
    name: ['pages.process_cost.process_1.process_p2'],
    nameb: 'pages.process_cost.process_1.process_h3_1',
    texts: [
      {
        type: '',
        text: 'pages.process_cost.process_1.process_p3_3'
      },
      {
        type: 'color',
        text: 'pages.process_cost.process_1.process_p3_4'
      }
    ],
    img_alt: '基本眼睛檢查',
    img_title: '基本眼睛檢查'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/03/b5986c511653d126.png',
    name: ['pages.process_cost.process_1.process_p4'],
    nameb: '',
    texts: [
      {
        type: '',
        text: 'pages.process_cost.process_1.process_p5_4'
      },
      {
        type: 'color',
        text: 'pages.process_cost.process_1.process_p5_5'
      }
    ],
    img_alt: '眼科醫生診症',
    img_title: '醫生診斷'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/03/7b1d0695e319a85a.png',
    name: ['pages.process_cost.process_1.process_p6'],
    nameb: '',
    texts: [],
    img_alt: '詳細眼睛檢查',
    img_title: '詳細眼睛檢查'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/03/2c22d648c273a2fe.png',
    name: ['pages.process_cost.process_1.process_p7_3'],
    nameb: '',
    texts: [],
    img_alt: '眼科手術',
    img_title: '眼科手術'
  },
  {
    img: 'https://static.cmereye.com/imgs/2024/03/edc13bc571afe68a.png',
    name: ['pages.process_cost.process_1.process_p8_1','pages.process_cost.process_1.process_p8_2','pages.process_cost.process_1.process_p9'],
    nameb: '',
    texts: [],
    img_alt: '繳費及取藥',
    img_title: '繳費_取藥'
  },

]
</script>

<template>
  <div class="processAndCostPage">
    <div
      :class="['processAndCost']"
      :style="{
        'background-position':
          isShowLanguageBool === true ? '100% 100%' : '100% 0',
        'background-size':
          isShowLanguageBool === true ? 'auto 100%' : '100% auto',
      }"
    >
      <div>
        <div id="cost">
          <div class="content">
            <div class="titleBox">
              <h1 class="text-3xl font-normal">
                {{ $t('pages.process_cost.cont.cost_h1') }}
              </h1>
              <h2>PRICE LIST</h2>
              <h3>{{ $t('pages.process_cost.cont.cost_h3_1') }}</h3>
              <p>{{ $t('pages.process_cost.cont.cost_p1') }}</p>
            </div>
            <div class="costsTable py-10 px-8 mt-12 mb-40">
              <h3 class="text-2xl text-center font-bold mb-8">
                {{ $t('pages.process_cost.cont.cost_h3_2') }}
              </h3>
              <table class="table">
                <!-- <thead>
                  <tr class="firstRow">
                    <td colspan="2"></td>
                    <td class="text-center text-xl">
                      {{ $t('pages.process_cost.cont.cost_tr22_td1') }}
                    </td>
                    <td class="text-center text-xl">
                      {{ $t('pages.process_cost.cont.cost_tr21_td2') }}
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr23') }}
                    </td>
                    <td class="text-center">$1,600</td>
                    <td class="text-center">$1,300</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr24') }}
                    </td>
                    <td class="text-center">$1,000</td>
                    <td class="text-center">$1,000</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr25') }}
                    </td>
                    <td class="text-center">$900</td>
                    <td class="text-center">$900</td>
                  </tr>
                </tbody>
                <br /> -->
                <thead>
                  <tr class="firstRow">
                    <td colspan="2"></td>
                    <td class="text-center text-xl">
                      {{ $t('pages.process_cost.cont.cost_tr1_td1') }}<br />
                      (HK$)
                    </td>
                    <td class="text-center text-xl">
                      {{ $t('pages.process_cost.cont.cost_tr1_td2') }}<br />
                      (HK$)
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr2_td1') }}
                    </td>
                    <td class="text-center">$450</td>
                    <td class="text-center">$750</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr3_td1') }}
                    </td>
                    <td class="text-center">$1,050</td>
                    <td class="text-center">$1,850</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr4_td1') }}
                    </td>
                    <td class="text-center">$1,100</td>
                    <td class="text-center">$1,900</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr5_td1') }}
                    </td>
                    <td class="text-center">$1,600</td>
                    <td class="text-center">$2,800</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr19_td1') }}
                    </td>
                    <td class="text-center">$1,000</td>
                    <td class="text-center">$1,800</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr6_td1') }}
                    </td>
                    <td class="text-center">$400</td>
                    <td class="text-center">$800</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr18_td1') }}
                    </td>
                    <td class="text-center">$400</td>
                    <td class="text-center">$650</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr7_td1') }}
                    </td>
                    <td class="text-center">$400</td>
                    <td class="text-center">$600</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr8_td1') }}
                    </td>
                    <td class="text-center">$600</td>
                    <td class="text-center">$980</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr9_td1') }}
                    </td>
                    <td class="text-center">$300</td>
                    <td class="text-center">$500</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr10_td1') }}
                    </td>
                    <td class="text-center">$400</td>
                    <td class="text-center">$800</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr11_td1') }}
                    </td>
                    <td class="text-center">$300</td>
                    <td class="text-center">$600</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr20_td1') }}
                    </td>
                    <td class="text-center">/</td>
                    <td class="text-center">$200</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr12_td1') }}
                    </td>
                    <td class="text-center">/</td>
                    <td class="text-center">$3,900</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr13_td1') }}
                    </td>
                    <td class="text-center">/</td>
                    <td class="text-center">$3,900</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr14_td1') }}
                    </td>
                    <td class="text-center">/</td>
                    <td class="text-center">$5,500</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr15_td1') }}
                    </td>
                    <td class="text-center">$500</td>
                    <td class="text-center">$1,000</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr16_td1') }}
                    </td>
                    <td class="text-center">/</td>
                    <td class="text-center">$650/$850</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr26') }}
                    </td>
                    <td class="text-center">/</td>
                    <td class="text-center">$500</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr27') }}
                    </td>
                    <td class="text-center">/</td>
                    <td class="text-center">$500</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr28') }}
                    </td>
                    <td class="text-center">$22,500-$39,000</td>
                    <td class="text-center">/</td>
                  </tr>
                  <!-- <tr>
                    <td colspan="2">
                      {{ $t('pages.process_cost.cont.cost_tr21_td1') }}
                    </td>
                    <td class="text-center">$20,000<br/>-$38,000</td>
                    <td class="text-center">/</td>
                  </tr> -->
                </tbody>
              </table>
              <p class="text-center mt-20 mb-4 leading-10">
                {{ $t('pages.process_cost.cont.cost_p2') }}
                <span class="font-bold">{{
                  $t('pages.process_cost.cont.cost_p2_1')
                }}</span>
                {{ $t('pages.process_cost.cont.cost_p2_2') }}<br />
                {{ $t('pages.process_cost.cont.cost_p2_3') }} <br />
                {{ $t('pages.process_cost.cont.cost_p3_1_s') }}<br />
                {{ $t('pages.process_cost.cont.cost_p5') }}
                {{ $t('pages.process_cost.cont.cost_p4') }}<br />
                {{ $t('pages.process_cost.cont.cost_p6') }}
                <span class="font-bold">$1,500-$6,000</span>
                {{ $t('pages.process_cost.cont.cost_p6_1') }}
                {{ $t('pages.process_cost.cont.cost_p7') }}<br />
              </p>
              <div class="ClaimFormBox">
                <div class="title">
                  {{ $t('pages.process_cost.cont.cost_form_title') }}
                </div>
                <div>
                  <span style="text-decoration: underline">{{
                    $t('pages.process_cost.cont.cost_form_td1_1')
                  }}</span>
                  <span style="text-decoration: underline">{{
                    $t('pages.process_cost.cont.cost_form_td1_2')
                  }}</span>
                </div>
                <div>
                  <span>{{
                    $t('pages.process_cost.cont.cost_form_td2_1')
                  }}</span>
                  <span>{{
                    $t('pages.process_cost.cont.cost_form_td2_2')
                  }}</span>
                </div>
                <div>
                  <span>{{
                    $t('pages.process_cost.cont.cost_form_td3_1')
                  }}</span>
                  <span></span>
                </div>
                <div>
                  <span>{{
                    $t('pages.process_cost.cont.cost_form_td4_1')
                  }}</span>
                  <span>{{
                    $t('pages.process_cost.cont.cost_form_td4_2')
                  }}</span>
                </div>
                <div>
                  <span>{{
                    $t('pages.process_cost.cont.cost_form_td5_1')
                  }}</span>
                  <span>{{
                    $t('pages.process_cost.cont.cost_form_td5_2')
                  }}</span>
                </div>
                <div>
                  <span>{{
                    $t('pages.process_cost.cont.cost_form_td6_1')
                  }}</span>
                  <span></span>
                </div>
                <!-- <div>
                  <span>{{
                    $t('pages.process_cost.cont.cost_form_td7_1')
                  }}</span>
                  <span>{{
                    $t('pages.process_cost.cont.cost_form_td7_2')
                  }}</span>
                </div> -->
              </div>
              <div class="updateBox mt-12 mb-16">
                {{ $t('pages.process_cost.cont.cost_p10') }}
                <!-- 最後更新: 01/04/2023 -->
              </div>
            </div>
          </div>
        </div>
        <div id="processed" ref="processBox">
          <div
            class="processMain mainCon relative flex items-start justify-center"
          >
            <div class="content relative">
              <div class="titleBox">
                <h1 class="text-3xl font-normal">
                  {{ $t('pages.process_cost.process_1.process_h1') }}
                </h1>
                <h2>Outpatient Services</h2>
              </div>
              <div class="processed-in pcpocessBox">
                <div class="lists">
                  <div class="lists-in" v-for="(processedItem,processedIndex) in processedLists" :key="processedIndex">
                    <img :src="processedItem.img" :alt="processedItem.img_alt" :title="processedItem.img_title">
                    <div class="name">
                      <span v-for="(nameItem,nameIndex) in processedItem.name" :key="nameIndex">
                        {{$t(nameItem)}}
                      </span>
                    </div>
                    <div class="nameb" v-if="processedItem.nameb !== ''">{{$t(processedItem.nameb)}}</div>
                    <div class="text" v-if="processedItem.texts.length">
                      <span v-for="(spanItem,spanIndex) in processedItem.texts" :key="spanIndex" :class="spanItem.type">{{$t(spanItem.text)}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="processed-in mbpocessBox">
                <div class="lists" :class="{'lists-en':locale === 'en'}">
                  <div class="lists-in" v-for="(processedItem,processedIndex) in processedLists.filter((item:any, index:any ) => index % 2 === 0)" :key="processedIndex">
                    <img :src="processedItem.img" :alt="processedItem.img_alt" :title="processedItem.img_title">
                    <div class="name">
                      <span v-for="(nameItem,nameIndex) in processedItem.name" :key="nameIndex">
                        {{$t(nameItem)}}
                      </span>
                    </div>
                    <div class="nameb" v-if="processedItem.nameb !== ''">{{$t(processedItem.nameb)}}</div>
                    <div class="text" v-if="processedItem.texts.length">
                      <span v-for="(spanItem,spanIndex) in processedItem.texts" :key="spanIndex" :class="spanItem.type">{{$t(spanItem.text)}}</span>
                    </div>
                  </div>
                </div>
                <div class="lists" :class="{'lists-en':locale === 'en'}">
                  <div class="lists-in" v-for="(processedItem,processedIndex) in processedLists.filter((item:any, index:any) => index % 2 !== 0)" :key="processedIndex">
                    <img :src="processedItem.img" :alt="processedItem.img_alt" :title="processedItem.img_title">
                    <div class="name">
                      <span v-for="(nameItem,nameIndex) in processedItem.name" :key="nameIndex">
                        {{$t(nameItem)}}
                      </span>
                    </div>
                    <div class="nameb" v-if="processedItem.nameb !== ''">{{$t(processedItem.nameb)}}</div>
                    <div class="text" v-if="processedItem.texts.length">
                      <span v-for="(spanItem,spanIndex) in processedItem.texts" :key="spanIndex" :class="spanItem.type">{{$t(spanItem.text)}}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div
                class="py-10 px-8 mt-12 mb-40"
                :class="{ 'process-en': locale === 'en' }"
              >
                <div class="processItem mb-20">
                  <p>{{ $t('pages.process_cost.process_1.process_p1') }}</p>
                </div>
                <div class="processItem itemdes mb-14">
                  <p>{{ $t('pages.process_cost.process_1.process_p2') }}</p>
                  <div>
                    <h3 class="text-xl pb-3 mb-3">
                      {{ $t('pages.process_cost.process_1.process_h3_1') }}
                    </h3>
                    <p>
                      {{ $t('pages.process_cost.process_1.process_p3_1')
                      }}<br />
                      {{ $t('pages.process_cost.process_1.process_p3_2') }}
                    </p>
                  </div>
                </div>
                <div class="processItem itemdes mb-14">
                  <p>{{ $t('pages.process_cost.process_1.process_p4') }}</p>
                  <div>
                    <h3 class="text-xl pb-3 mb-3">
                      {{ $t('pages.process_cost.process_1.process_h3_2') }}
                    </h3>
                    <p>
                      {{ $t('pages.process_cost.process_1.process_p5_1')
                      }}<br />
                      {{ $t('pages.process_cost.process_1.process_p5_2')
                      }}<br />
                      {{ $t('pages.process_cost.process_1.process_p5_3') }}
                    </p>
                  </div>
                </div>
                <div class="processItem mb-20">
                  <p>{{ $t('pages.process_cost.process_1.process_p6') }}</p>
                </div>
                <div class="processItem processItem5 mb-20">
                  <p>
                    {{ $t('pages.process_cost.process_1.process_p7_1') }} <br />
                    {{ $t('pages.process_cost.process_1.process_p7_2') }}
                  </p>
                </div>
                <div class="processItem processItem6 itemdes mb-20">
                  <p>{{ $t('pages.process_cost.process_1.process_p8') }}</p>
                  <div>
                    <p>{{ $t('pages.process_cost.process_1.process_p9') }}</p>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <PageInformation :service-navigation="serviceNavigation" />
    </div>
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.processAndCostPage {
  margin-bottom: 50px;
}
.processAndCost {
  transition: all 0.5s;
  background-repeat: no-repeat !important;
  background: url('https://static.cmereye.com/imgs/2023/06/414012d88e3154c7.jpg')
    no-repeat;
}
.processAndCost > div:nth-child(1) {
  max-width: 1080px;
  margin: auto;
}
.titleBox {
  padding-top: 100px;
  font-family: 'Noto Sans HK';
  h1 {
    font-size: 37.5px;
  }
  h2 {
    color: #8ad8dd;
    font-size: 21px;
    font-family: 'Metropolis';
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 40px;
    letter-spacing: 5px;
  }
  h3 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
}

.costsTable {
  background-color: rgba(255, 255, 255, 0.75);
  table {
    width: 100%;
    height: auto;
    thead {
      td {
        padding-bottom: 35px;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          width: 100%;
          border-bottom: 1px dashed;
          bottom: 25%;
          left: 0;
        }
      }
    }
    tbody {
      tr {
        border-bottom: #dddddd solid 1.5px;
        width: 887.83px;
        &:nth-child(odd) {
          background-color: rgba(242, 242, 242, 0.75);
        }
        &:nth-child(even) {
          background-color: rgba(255, 255, 255, 0.55);
        }
        &:last-child {
          border: none;
        }
        td {
          padding: 15px;
          padding-left: 25px;
        }
        td:nth-child(1) {
          width: 620px;
          text-align: left;
        }
      }
      & > tr:nth-child(17) {
        & > td:nth-child(2) {
          // text-align: left;
        }
      }
    }
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      border-bottom: 1px dashed;
      bottom: -20px;
      left: 0;
    }
  }
}

.anchor {
  bottom: 450px;
  position: fixed;
  right: 2.5%;
  z-index: 99;
  a {
    border: 0.5px solid #515151;
    margin: 5px 0;
    padding: 10px 40px 5px;
    font-size: 15px;
    background-color: #fff;
    text-align: center;
  }
  .anchorActive,
  .exactActive {
    border: 0.5px solid #8ad8dd;
    background: #8ad8dd;
    color: #fff;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 12%;
      height: 100%;
      right: 0;
      top: 0;
      background-color: #ffffff;
    }
  }
}

.processMain {
  .titleBox {
    h2 {
      color: #8ad8dd;
      font-size: 21px;
      font-family: 'Metropolis';
      text-transform: uppercase;
      font-weight: 500;
      margin-bottom: 40px;
      letter-spacing: 5px;
    }
  }

  .anchor {
    bottom: 20%;
    position: fixed;
    right: 2.5%;
    z-index: 99;
    bottom: 20%;
    a {
      border: 0.5px solid #515151;
      margin: 5px 0;
      padding: 10px 40px 5px;
      font-size: 15px;
      background-color: #fff;
      text-align: center;
    }
    .anchorActive,
    .exactActive {
      border: 0.5px solid #8ad8dd;
      background: #8ad8dd;
      color: #fff;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 12%;
        height: 100%;
        right: 0;
        top: 0;
        background-color: #ffffff;
      }
    }
  }

  .processItem {
    display: flex;
    align-items: flex-start;
    text-align: center;
    position: relative;
    &::before {
      content: '';
      color: #1b407a;
      position: absolute;
      top: 60px;
      font-size: 56px;
      left: 90px;
      background: url('https://static.cmereye.com/imgs/2023/06/66b6869226b542b5.png');
      background-size: 100% 100%;
      width: 25px;
      height: 55px;
    }
    & > p,
    & > div {
      padding: 10px 20px;
      background: #5376d0;
      display: inline-block;
      color: #fff;
    }
    & > p {
      margin-right: 100px;
      width: 200px;
    }
    & > div {
      width: 500px;
    }
    h3 {
      border-bottom: 1px solid #fff;
    }
  }
  .itemdes > p:after {
    position: absolute;
    content: '';
    left: 225px;
    top: 21px;
    margin: auto 0;
    width: 50px;
    height: 1px;
    border-bottom: 2px #5376d0 dotted;
  }
  .processItem5::before {
    top: 75px;
  }
  .processItem6::before {
    display: none;
  }
  .process-en {
    .processItem {
      &:nth-of-type(3) {
        &::before {
          transform: translateY(25px);
        }
      }
      &:nth-of-type(4) {
        &::before {
          transform: translateY(20px);
        }
      }
    }
    .processItem5::before {
      top: 105px;
    }
  }
}

.ClaimFormBox {
  margin: 0 auto;
  width: 100%;
  max-width: 390px;
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    &.title {
      margin-bottom: 10px;
      font-weight: 700;
      justify-content: center;
    }
    span {
      &:nth-of-type(2) {
        text-align: right;
      }
    }
  }
}
.updateBox {
  text-align: center;
}

.processed-in{
  .lists{
    display: flex;
    // align-items: center;
    padding: 100px 0 200px;
    &-in{
      width: calc(170 / 1080 * 100%);
      border-radius: 20px;
      border: 1px solid #2c2e31;
      padding: calc(16 / 1080 * 100%);
      color: #EFAF00;
      background: #fff;
      position: relative;
      height: max-content;
      &:not(:last-child){
        margin-right: calc(14 / 1080 * 100%);
      }
      .name{
        border-bottom: 2px solid #EFAF00;
        text-align: center;
        padding: 5px 0;
        font-size: 18px;
        font-weight: 600;
        span{
          display: block;
        }
      }
      .nameb{
        font-size: 18px;
        font-weight: 600;
        text-align: center;
        padding-top: 5px;
      }
      .text{
        font-size: 15px;
        color: #2f2f2f;
        text-align: center;
        line-height: 1.6;
        padding-top: 5px;
        font-weight: bold;
        span{
          &.color{
            color: #EFAF00;
          }
        }
        &::after{
          content: '';
          width: 50%;
          height: 2px;
          background: #EFAF00;
          display: block;
          margin: 10px auto 0;
        }
      }
      &:nth-of-type(2){
        color: #5BBED9;
        margin-top: 80px;
        .name{
          border-bottom: 2px solid #5BBED9;
        }
        .text{
          span{
            &.color{
              color: #5BBED9;
            }
          }
          &::after{
            background: #5BBED9;
          }
        }
        &::before{
          content: '';
          width: calc(180 / 1080 * 100% + 100%);
          height: 140px;
          position: absolute;
          right: calc(50% - (80 / 1080 * 100%));
          bottom: calc(100% + 10px);
          background: url(https://static.cmereye.com/imgs/2024/03/670ba2ef41baec64.png) no-repeat;
          background-size: 100% auto;
          background-position: bottom right;
        }
      }
      &:nth-of-type(3){
        color: #333D7B;
        margin-top: 30px;
        .name{
          border-bottom: 2px solid #333D7B;
        }
        .text{
          letter-spacing: -0.2px;
          span{
            &.color{
              color: #333D7B;
            }
          }
          &::after{
            background: #333D7B;
          }
        }
        &::before{
          content: '';
          width: calc(180 / 1080 * 100% + 100%);
          height: 160px;
          position: absolute;
          right: calc(50% - (80 / 1080 * 100%));
          top: calc(100% + 10px);
          background: url(https://static.cmereye.com/imgs/2024/03/ab4b1bd39907498d.png) no-repeat;
          background-size: 100% auto;
          background-position: top right;
        }
      }
      &:nth-of-type(4){
        color: #07A537;
        margin-top: 170px;
        .name{
          border-bottom: 2px solid #07A537;
        }
        &::before{
          content: '';
          width: calc(180 / 1080 * 100% + 100%);
          height: 220px;
          position: absolute;
          right: calc(50% - (80 / 1080 * 100%));
          bottom: calc(100% + 10px);
          background: url(https://static.cmereye.com/imgs/2024/03/1ec719ab6fdef029.png) no-repeat;
          background-size: 100% auto;
          background-position: bottom right;
        }
      }
      &:nth-of-type(5){
        color: #EA5E8D;
        margin-top: 120px;
        .name{
          border-bottom: 2px solid #EA5E8D;
        }
        &::before{
          content: '';
          width: calc(180 / 1080 * 100% + 100%);
          height: 220px;
          position: absolute;
          right: calc(50% - (80 / 1080 * 100%));
          top: calc(100% + 10px);
          background: url(https://static.cmereye.com/imgs/2024/03/c74f2a62bb87e8d9.png) no-repeat;
          background-size: 100% auto;
          background-position: top right;
        }
      }
      &:nth-of-type(6){
        color: #AE5AF4;
        margin-top: 110px;
        .name{
          border-bottom: 2px solid #AE5AF4;
        }
        &::before{
          content: '';
          width: calc(180 / 1080 * 100% + 100%);
          height: 120px;
          position: absolute;
          right: calc(50% - (80 / 1080 * 100%));
          bottom: 100%;
          background: url(https://static.cmereye.com/imgs/2024/03/2338d65087ceff63.png) no-repeat;
          background-size: 100% auto;
          background-position: bottom right;
        }
      }
    }
  }
  &.mbpocessBox{
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .ClaimFormBox {
    div {
      span {
        &:nth-of-type(2) {
          min-width: 40%;
        }
      }
    }
  }
  .titleBox {
    width: max-content;
    color: #515151;
    h1 {
      font-size: 24px;
      padding-left: 30px;
    }
    h2 {
      padding-left: 30px;
      font-size: 18px;
      letter-spacing: -0.05em;
    }
    h3 {
      font-size: 20px;
      padding-left: 30px;
    }
    p {
      font-size: 16px;
      padding-left: 30px;
    }
  }
  .costsTable {
    width: calc(100% - 60px);
    margin: 50px auto;
    padding: 30px 20px 1px;
    & > h3 {
      font-size: 24px;
      margin-bottom: 15px;
    }
    table {
      thead {
        td {
          font-size: 16px;
          padding-bottom: 15px;

          &::before {
            border-bottom: 1px solid;
          }
        }
      }
      tbody {
        tr {
          td {
            font-size: 16px;
            padding: 10px 0 5px;
          }
          td:nth-child(1) {
            width: 140px;
            padding: 10px 10px 5px;
          }
        }
      }
    }
    & > p {
      font-size: 16px;
      line-height: 30px;
    }
  }
  .processMain {
    .titleBox {
      padding-top: 50px;
      h2 {
        font-size: 18px;
        letter-spacing: -0.05em;
      }
    }
    .processItem {
      margin-bottom: 70px;
      &::before {
        top: 50px;
        left: 45px;
        width: 10px;
        height: 30px;
      }
      &:nth-of-type(5):before {
        top: 75px;
      }
      & > p,
      & > div {
        padding: 7px 0px;
        br {
          display: none;
        }
      }
      &:not(:last-child) {
        & > div {
          padding: 7px 10px 16px;
          p {
            text-align: left;
          }
        }
      }
      & > p {
        margin-right: 50px;
        width: 100px;
      }
      & > div {
        flex: 1;
      }
      h3 {
        padding-top: 10px;
        padding-bottom: 0;
      }
    }
    & > div {
      width: 100%;
      & > div:last-child {
        margin-top: 0;
      }
    }
    .itemdes > p:after {
      left: 110px;
      top: 16px;
      margin: auto 0;
      width: 30px;
      height: 1px;
      border-bottom: 2px #5376d0 dotted;
    }
    .process-en {
      .processItem {
        &:nth-of-type(2),
        &:nth-of-type(3) {
          margin-bottom: 30px;
        }
        p {
          font-size: 12px;
        }
        &:nth-of-type(4) {
          &::before {
            transform: translateY(20px);
          }
        }
        &:nth-of-type(5) {
          &::before {
            transform: translateY(-20px);
          }
        }
      }
      .processItem5::before {
        top: 130px;
      }
    }
  }
  .processAndCost {
    background: url('https://static.cmereye.com/imgs/2023/07/c20c5728572d0992.jpg');
    background-position: top left !important;
    background-size: 100% auto !important;
  }
  #processed {
    background: url('https://static.cmereye.com/imgs/2023/07/2534e621e7024180.jpg')
      no-repeat;
  }
  .processed-in{
    padding: 0 20px;
    .lists{
      // flex: 1;
      width: 50%;
      flex-wrap: wrap;
      padding: 50px 0 100px;
      &-in{
        width: 100%;
        margin: 0 10px;
        padding: 20px;
        .name{
          font-size: 16px;
        }
        .nameb{
          font-size: 16px;
        }
        .text{
          font-size: 12px;
        }
        &:not(:last-child){
          margin-right: 10px;
        }
        &:nth-of-type(1){
          margin-top: 50px;
        }
        &:nth-of-type(2){
          margin-top: 50px;
          &::before{
            display: none;
          }
        }
        &:nth-of-type(3){
          margin-top: 50px;
          &::before{
            display: none;
          }
        }
        &:nth-of-type(4){
          margin-top: 50px;
          &::before{
            display: none;
          }
        }
        &:nth-of-type(5){
          margin-top: 50px;
          &::before{
            display: none;
          }
        }
        &:nth-of-type(6){
          margin-top: 50px;
          &::before{
            display: none;
          }
        }
      }
    }
    &.pcpocessBox{
      display: none;
    }
    &.mbpocessBox{
      display: flex;
      .lists{
        &:nth-of-type(1){
          .lists-in{
            &:nth-of-type(1){
              &::after{
                content: '1';
                position: absolute;
                left: -10px;
                top: -40px;
                font-size: 50px;
                font-weight: bold;
                text-shadow: 3px 3px 0px #fff,-3px -3px 0px #fff;
              }
            }
            &:nth-of-type(2){
              margin-top: 50px;
              color: #333D7B;
              .name{
                border-bottom: 2px solid #333D7B;
              }
              .text{
                span{
                  &.color{
                    color: #333D7B;
                  }
                }
                &::after{
                  background: #333D7B;
                }
              }
              &::before{
                display: none;
              }
              &::after{
                content: '3';
                position: absolute;
                left: -10px;
                top: -40px;
                font-size: 50px;
                font-weight: bold;
                text-shadow: 3px 3px 0px #fff,-3px -3px 0px #fff;
              }
            }
            &:nth-of-type(3){
              margin-top: 50px;
              color: #EA5E8D;
              .name{
                border-bottom: 2px solid #EA5E8D;
              }
              &::before{
                display: none;
              }
              &::after{
                content: '5';
                position: absolute;
                left: -10px;
                top: -40px;
                font-size: 50px;
                font-weight: bold;
                text-shadow: 3px 3px 0px #fff,-3px -3px 0px #fff;
              }
            }
          }
        }
        &:nth-of-type(2){
          .lists-in{
            &:nth-of-type(1){
              margin-top: 0px;
              color: #5BBED9;
              .name{
                border-bottom: 2px solid #5BBED9;
              }
              .text{
                span{
                  &.color{
                    color: #5BBED9;
                  }
                }
                &::after{
                  background: #5BBED9;
                }
              }
              &::before{
                display: none;
              }
              &::after{
                content: '2';
                position: absolute;
                right: -10px;
                top: -40px;
                font-size: 50px;
                font-weight: bold;
                text-shadow: 3px 3px 0px #fff,
                -3px -3px 0px #fff,
                3px -3px 0px #fff,
                2px 3px 0px #fff,
                1px 3px 0px #fff,
                0px 3px 0px #fff,
                -1px 3px 0px #fff,
                -2px 3px 0px #fff,
                -3px 3px 0px #fff,
                -3px -2px 0px #fff,
                -3px -1px 0px #fff,
                -3px 0px 0px #fff,
                -3px 1px 0px #fff,
                -3px 2px 0px #fff,
                1px 3px 0px #fff;
              }
            }
            &:nth-of-type(2){
              margin-top: 50px;
              color: #07A537;
              .name{
                border-bottom: 2px solid #07A537;
              }
              &::before{
                display: none;
              }
              &::after{
                content: '4';
                position: absolute;
                right: -10px;
                top: -40px;
                font-size: 50px;
                font-weight: bold;
                text-shadow: 3px 3px 0px #fff,-3px -3px 0px #fff;
              }
            }
            &:nth-of-type(3){
              margin-top: 50px;
              color: #AE5AF4;
              .name{
                border-bottom: 2px solid #AE5AF4;
              }
              &::before{
                display: none;
              }
              &::after{
                content: '6';
                position: absolute;
                right: -10px;
                top: -40px;
                font-size: 50px;
                font-weight: bold;
                text-shadow: 3px 3px 0px #fff,-3px -3px 0px #fff;
              }
            }
          }
        }
        &-en{
          .name{
            font-size: 12px;
          }
          .nameb{
            font-size: 12px;
          }
          .text{
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>