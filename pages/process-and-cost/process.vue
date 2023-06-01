<script lang="ts" setup>
const props = defineProps({
  dd: {
    type: String,
    default: '0',
  },
})
// 流程及費用
const serviceNavigation = [
  {
    anchorName: '費用一覽',
    anchorLink: '/process-and-cost/#cost',
  },
  {
    anchorName: '就診流程',
    anchorLink: '/process-and-cost/#process',
  },
]
</script>

<template>
  <div class="process">
    <div class="processMain mainCon relative flex items-start justify-center">
      <div class="content mt-20 ml-20 relative">
        <div class="titleBox">
          <h1 class="text-3xl font-normal">就診流程</h1>
          <h2>Outpatient Services</h2>
        </div>
        <div class="py-10 px-8 mt-12 mb-40">
          <div class="processItem mb-20">
            <p>登記</p>
          </div>
          <div class="processItem itemdes mb-14">
            <p>基本檢查</p>
            <div>
              <h3 class="text-xl pb-3 mb-3">初步眼睛檢查</h3>
              <p>
                為全面了解您的眼睛狀況，<br />
                我們會先為您進行3-5項基本眼睛檢查。
              </p>
            </div>
          </div>
          <div class="processItem itemdes mb-14">
            <p>醫生診症</p>
            <div>
              <h3 class="text-xl pb-3 mb-3">詳細眼睛檢查</h3>
              <p>
                醫生會根據您的眼睛狀況，<br />
                進行詳細眼睛檢查，<br />
                以準確診斷並作出相應治療。
              </p>
            </div>
          </div>
          <div class="processItem mb-20">
            <p>詳細檢查</p>
          </div>
          <div class="processItem processItem5 mb-20">
            <p>
              門診 / 針灸 <br />
              手術
            </p>
          </div>
          <div class="processItem processItem6 itemdes mb-20">
            <p>付款及取藥</p>
            <div>
              <p>其他服務-配鏡</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PageInformation :service-navigation="serviceNavigation" />
  </div>
</template>
<style scoped lang="scss">
// .process {
//   background: url(https://static.cmereye.com/imgs/2023/06/dd5e64b3b4bf5bdb.png);
//   background-size: 100% 100%;
//   background-repeat: no-repeat;
// }

.processMain {
  // background-image: url(https://static.cmereye.com/imgs/2023/02/a6d4d2ee3661fcf9.jpg);
  // background-size: cover;
  // background-repeat: no-repeat;

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

  .processItem {
    display: flex;
    align-items: flex-start;
    text-align: center;
    position: relative;

    &::before {
      content: '🠗';
      color: #1b407a;
      position: absolute;
      top: 50px;
      font-size: 56px;
      left: 80px;
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
}
</style>
