<script lang="ts" setup>
useHead(() => ({
  title: '費用一覽｜流程及費用 | 香港希瑪眼科中心',
  meta: [
    {
      name: 'description',
      content:
        '香港希瑪眼科中心提供的驗光及全面眼睛檢查，不同的眼睛檢查項目有不同的收費，常見眼疾檢查收費價目表、矯視收費價目表，希瑪眼科診所眼科價目清晰，絕無其他額外收費，讓患者可以放心地進行眼睛檢查和治療，常見眼疾檢查收費價目表包括眼壓測試、角膜地形圖、角膜厚度測試、視力測試、眼底檢查、視野檢查等多個項目，每個項目的收費都在價目表中有明確的標示。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 希瑪眼科收費 希瑪眼科 全面眼睛檢查 希瑪眼科價目 眼科門診收費 希瑪眼科 光學相干斷層掃描 希瑪眼科 OCT 希瑪眼科 希瑪眼科 檢查 視野 眼底檢查 希瑪眼科 眼科專科收費 眼科專科 全面眼睛檢查 眼科專科 視野分析 掃描激光眼底檢查 眼底照相 眼前節分析 角膜厚度測量 角膜地形分析 白內障超聲乳化 希瑪醫療集團 希瑪醫療 眼科服務',
    },
  ],
}))
</script>

<template>
  <div>
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
          <thead>
            <tr class="firstRow">
              <td colspan="2"></td>
              <td class="text-center text-xl">
                {{ $t('pages.process_cost.cont.cost_tr1_td1') }}
              </td>
              <td class="text-center text-xl">
                {{ $t('pages.process_cost.cont.cost_tr1_td2') }}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">
                {{ $t('pages.process_cost.cont.cost_tr2_td1') }}
              </td>
              <td class="text-center">$420</td>
              <td class="text-center">$700</td>
            </tr>
            <tr>
              <td colspan="2">
                {{ $t('pages.process_cost.cont.cost_tr3_td1') }}
              </td>
              <td class="text-center">$900</td>
              <td class="text-center">$1,650</td>
            </tr>
            <tr>
              <td colspan="2">
                {{ $t('pages.process_cost.cont.cost_tr4_td1') }}
              </td>
              <td class="text-center">$900</td>
              <td class="text-center">$1,650</td>
            </tr>
            <tr>
              <td colspan="2">
                {{ $t('pages.process_cost.cont.cost_tr5_td1') }}
              </td>
              <td class="text-center">$1,300</td>
              <td class="text-center">$2,000</td>
            </tr>
            <tr>
              <td colspan="2">
                {{ $t('pages.process_cost.cont.cost_tr6_td1') }}
              </td>
              <td class="text-center">$360</td>
              <td class="text-center">$600</td>
            </tr>
            <tr>
              <td colspan="2">
                {{ $t('pages.process_cost.cont.cost_tr7_td1') }}
              </td>
              <td class="text-center">$300</td>
              <td class="text-center">$500</td>
            </tr>
            <tr>
              <td colspan="2">
                {{ $t('pages.process_cost.cont.cost_tr8_td1') }}
              </td>
              <td class="text-center">$550</td>
              <td class="text-center">$900</td>
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
              <td class="text-center">$600/$800</td>
            </tr>
            <tr>
              <td rowspan="2">
                {{ $t('pages.process_cost.cont.cost_tr17_td1') }}
              </td>
              <td class="text-center text-left">
                {{ $t('pages.process_cost.cont.cost_tr17_td2') }}
              </td>
              <td class="text-center">/</td>
              <td class="text-center">$350</td>
            </tr>
            <tr>
              <td class="text-center border-0 text-left">
                {{ $t('pages.process_cost.cont.cost_tr18_td2') }}
              </td>
              <td class="text-center border-0">/</td>
              <td class="text-center border-0">$750</td>
            </tr>
          </tbody>
        </table>
        <p class="text-center mt-20 mb-16 leading-10">
          {{ $t('pages.process_cost.cont.cost_p2')
          }}<span class="font-bold">{{
            $t('pages.process_cost.cont.cost_p2_1')
          }}</span
          >{{ $t('pages.process_cost.cont.cost_p2_2') }}<br />
          {{ $t('pages.process_cost.cont.cost_p3')
          }}<span class="font-bold">{{
            $t('pages.process_cost.cont.cost_p3_1')
          }}</span>
          {{ $t('pages.process_cost.cont.cost_p4') }} <br />
          {{ $t('pages.process_cost.cont.cost_p5') }}<br />
          {{ $t('pages.process_cost.cont.cost_p6')
          }}<span class="font-bold">HK$1,500-HK$6,000</span
          >{{ $t('pages.process_cost.cont.cost_p6_1') }}
          {{ $t('pages.process_cost.cont.cost_p7') }}<br />
          {{ $t('pages.process_cost.cont.cost_p8') }} <br />
          {{ $t('pages.process_cost.cont.cost_p9') }}
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  // background-image: url(https://static.cmereye.com/imgs/2023/02/a6d4d2ee3661fcf9.jpg);
  // margin: 0 350px;
  padding-left: 320px;
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

      & > tr:nth-child(16) {
        & > td:nth-child(2) {
          text-align: left;
        }
      }

      position: relative;

      &::before {
        content: '';
        position: absolute;
        width: 100%;
        border-bottom: 1px dashed;
        bottom: -2%;
        left: 0;
      }
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
</style>
