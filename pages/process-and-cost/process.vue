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
          <h1 class="text-3xl font-normal">
            {{ $t('pages.process_cost.process_1.process_h1') }}
          </h1>
          <h2>Outpatient Services</h2>
        </div>
        <div class="py-10 px-8 mt-12 mb-40">
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
                {{ $t('pages.process_cost.process_1.process_p3_1') }}<br />
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
                {{ $t('pages.process_cost.process_1.process_p5_1') }}<br />
                {{ $t('pages.process_cost.process_1.process_p5_2') }}<br />
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
