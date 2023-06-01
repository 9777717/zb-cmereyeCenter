<script lang="ts" setup></script>

<template>
  <div>
    <div class="content">
      <div class="titleBox">
        <h1 class="text-3xl font-normal">費用一覽</h1>
        <h2>PRICE LIST</h2>
        <h3>眼科</h3>
        <p>本診所價目清晰，絕無其他額外收費</p>
      </div>

      <div class="costsTable py-10 px-8 mt-12 mb-40">
        <h3 class="text-2xl text-center font-bold mb-8">特殊檢查項目</h3>
        <table class="table">
          <thead>
            <tr class="firstRow">
              <td colspan="2"></td>
              <td class="text-center text-xl">單眼</td>
              <td class="text-center text-xl">雙眼</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">光學相干斷層掃描（前房）</td>
              <td class="text-center">$420</td>
              <td class="text-center">$700</td>
            </tr>
            <tr>
              <td colspan="2">光學相干斷層掃描（青光眼）</td>
              <td class="text-center">$900</td>
              <td class="text-center">$1,650</td>
            </tr>
            <tr>
              <td colspan="2">光學相干斷層掃描（黃斑）</td>
              <td class="text-center">$900</td>
              <td class="text-center">$1,650</td>
            </tr>
            <tr>
              <td colspan="2">光學相干斷層掃描（青光眼+黃斑）</td>
              <td class="text-center">$1,300</td>
              <td class="text-center">$2,000</td>
            </tr>
            <tr>
              <td colspan="2">人工晶體測量/ A 超聲波掃描</td>
              <td class="text-center">$360</td>
              <td class="text-center">$600</td>
            </tr>
            <tr>
              <td colspan="2">角膜內皮細胞檢查</td>
              <td class="text-center">$300</td>
              <td class="text-center">$500</td>
            </tr>
            <tr>
              <td colspan="2">視野分析</td>
              <td class="text-center">$550</td>
              <td class="text-center">$900</td>
            </tr>
            <tr>
              <td colspan="2">掃描激光眼底檢查</td>
              <td class="text-center">$300</td>
              <td class="text-center">$500</td>
            </tr>
            <tr>
              <td colspan="2">眼底照相</td>
              <td class="text-center">$400</td>
              <td class="text-center">$800</td>
            </tr>
            <tr>
              <td colspan="2">眼前節分析 / 角膜厚度測量 / 角膜地形分析</td>
              <td class="text-center">$300</td>
              <td class="text-center">$600</td>
            </tr>
            <tr>
              <td colspan="2">眼底照相 + 眼底熒光血管造影（包藥費）</td>
              <td class="text-center">/</td>
              <td class="text-center">$3,900</td>
            </tr>
            <tr>
              <td colspan="2">眼底照相 + 靛青綠血管造影（包藥費）</td>
              <td class="text-center">/</td>
              <td class="text-center">$3,900</td>
            </tr>
            <tr>
              <td colspan="2">
                眼底照相 + 眼底熒光血管造影 + 靛青綠血管造影（包藥費）
              </td>
              <td class="text-center">/</td>
              <td class="text-center">$5,500</td>
            </tr>
            <tr>
              <td colspan="2">B 超聲波掃描</td>
              <td class="text-center">$500</td>
              <td class="text-center">$1,000</td>
            </tr>
            <tr>
              <td colspan="2">白內障超聲乳化矯視術前檢查</td>
              <td class="text-center">/</td>
              <td class="text-center">$600/$800</td>
            </tr>
            <tr>
              <td rowspan="2">隱形眼鏡驗配</td>
              <td class="text-center text-left">八歲以上</td>
              <td class="text-center">/</td>
              <td class="text-center">$350</td>
            </tr>
            <tr>
              <td class="text-center border-0 text-left">八歲或以下</td>
              <td class="text-center border-0">/</td>
              <td class="text-center border-0">$750</td>
            </tr>
          </tbody>
        </table>
        <p class="text-center mt-20 mb-16 leading-10">
          以上價格<span class="font-bold">港幣</span>以結算<br />
          每份詳細眼睛檢查複本將收取<span class="font-bold">行政費</span
          >，詳情請向職員查詢。<br />
          (視野分析HK$10/張、光學相干斷層掃描HK$30/張、眼底照相 HK$100/張)<br />
          每份醫療報告將收取<span class="font-bold">HK$1,500-HK$6,000</span>不等
          (每份報告的實際價錢以報價為準)。<br />
          特殊儀器檢查需預見醫生判斷，由醫生決定檢查項目。<br />
          最後更新: 07/12/2022
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
    padding: 5px 40px;
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
