<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '白内障｜醫療服務｜眼科專科醫生',
}))
</script>

<template>
  <div class="cataract">
    <div>
      <div>
        <div>白内障</div>
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
    <div>
      <div>
        <div>
          <div>白內障影響日常生活？</div>
          <div>即按為你解決煩惱</div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/54ae049d3ec05868.png"
              alt="白內障"
            />
          </div>
        </div>
      </div>
      <div>
        <p>
          白內障是香港常見眼疾之一，初期幾乎沒有症狀，病情發展到中期常被誤以為只是眼睛老化現象。當發展到嚴重階段，患者看東西時會模糊不清，嚴重者甚至會完全失去視力。故此，及早發現，相當重要。
        </p>
        <p>
          患有白內障，視力變模糊，看事物時會有疊層、殘影的感覺。病患影響你的視野，更使你的生活變得十分不便？
        </p>
      </div>
      <div>別再遲疑！立即查詢白內障治療方案</div>
    </div>
    <div>
      <div>
        <div><span>為什麼會患上白內障？</span></div>
        <div>
          香港有九成患者都是因為年紀大﹑眼內晶體退化的原因而患上白內障。但其實小朋友或年輕人都有機會患上白內障，而近年白內障更有年輕化趨勢。
        </div>
      </div>
      <div>
        <div>白內障形成的成因</div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.cataract {
  margin: auto 300px;
  margin-bottom: 80px;
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

          position: absolute;
          top: 27px;
          width: 450px;
          background: #fff;
          left: -65px;
        }
      }

      & > div:nth-child(2) {
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
    }
  }
}
</style>
