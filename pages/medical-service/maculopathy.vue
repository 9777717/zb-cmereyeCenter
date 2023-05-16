<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '黃斑病變',
}))
// 传递背景色
const backgd = [
  '#dec692;',
  '-webkit-linear-gradient(to right, #dec692, #eedaaf);',
  'linear-gradient(to right, #dec692, #eedaaf);',
]
// 常見問題
const meetArr = [
  {
    title: 'Q：青光眼是老年人專屬，年輕人好少機會患上嗎？',
    agree:
      '青光眼是一種視神經病變，主要是由於眼球內壓力（眼壓）上升所致。年齡超過40歲是青光眼高危一族，但是年輕人也有患青光眼的風險。深近視、有青光眼家族遺傳病史，患糖尿病、高血壓、心血管疾病，眼曾受過眼創傷，又或者長期使用類固醇，都有機會增加眼壓，從而增加青光眼風險。',
  },
  {
    title: 'Q：青光眼無法醫治嗎？',
    agree:
      '青光眼的治療以控制眼壓、防止或減慢青光眼的惡化為目標。雖然青光眼是無法根治，但只要及早診斷，加以適當治療，仍可以降低眼壓、預防或減慢視力流失。',
  },
  {
    title: 'Q：青光眼患者雙眼真的會發光嗎？',
    agree:
      '在一般情況，青光眼患者的眼睛不會發光或變成青綠色。青光眼患者症狀以眼睛脹痛、眼睛充血，突然視力模糊為主，部分患者還有機會出現頭痛或偏頭痛，噁心甚至嘔吐，隨病情惡化視野會不斷收窄。',
  },
  {
    title: 'Q：視力未下降就不用求醫嗎？',
    agree:
      '慢性青光眼患者通常沒有明顯徵狀，當出現視力模糊、視野受損，很可能屬晚期階段。如出現視力下降才求醫，視力可能永久受損，所以建議青光眼高危人士定期檢查眼睛，以免青光眼偷走視力。而急性青光眼有明顯徵狀，包括︰眼痛、視力模糊、眼紅、頭痛、嘔吐等，眼壓會在短時間內上升，建議患者立即向眼科醫生求診，以保存視力。',
  },
]
</script>

<template>
  <div class="maculopathy">
    <!-- 头部 -->
    <div class="maculopathy_header">
      <div>
        <div>
          <div>黃斑病變</div>
          <div>MACULAR DEGENERATION</div>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/228b1b2296c9c93d.png"
          />
          <img
            src="https://static.cmereye.com/imgs/2023/05/6a3241d38332501f.png"
          />
        </div>
      </div>
    </div>
    <div class="maculopathy_nav">
      <div>
        <div>什麼是黃斑病變？</div>
        <div>
          黃斑區域位於視網膜中央，集中九成的感光神經細胞，負責中心視力和顏色視力。因此，健康黃斑點對人看清事物尤其重要。黃斑病變是指黃斑點出現了病徵，引起視力下降、視物扭曲變形及中心視力變差。
        </div>
      </div>
      <div></div>
      <div></div>
      <div>
        <div class="maculopathy_color_title">常見問題</div>
        <div>
          <PageCollapse
            :answer="meetArr"
            :style="{ '--subassembly-color': '#cfb278' }"
          />
        </div>
      </div>
    </div>
    <!-- 下载 -->
    <div class="dow">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <p>黃斑病變</p>
          <p>下載小冊子</p>
        </div>
      </div>
    </div>
    <!-- 表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#dec692;'}`"
    />
  </div>
</template>
<style lang="scss" scoped>
.maculopathy_nav {
  margin: 0 300px;

  & > div:nth-child(1) {
    margin-top: 253px;
    margin-left: 41px;

    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Medium';
      font-size: 50px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 52px;
      letter-spacing: 0px;
      color: #a49b88;
      margin-bottom: 100px;
    }

    & > div:nth-child(2) {
      margin-left: 13px;
      font-family: 'NotoSansHK-Regular';
      font-size: 25px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 42px;
      letter-spacing: -1px;
      color: #a49b88;
    }
  }

  & > :last-child {
    margin-top: 180px;

    & > div:first-child {
      margin-bottom: 90px;
    }
  }
}

.maculopathy_color_title {
  text-align: center;
  font-family: NotoSansHK-Bold;
  font-size: 38px;
  font-weight: 700;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0px;
  color: #a18a5a;
}

.maculopathy_header {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 100px;
    margin-right: 300px;

    & > div:nth-child(1) {
      & > div:nth-child(1) {
        font-family: 'NotoSansCJKtc-Bold';
        font-size: 119px;
        font-weight: 700;
        font-stretch: normal;
        line-height: 0.9;
        letter-spacing: 1px;
        color: #dec692;
        position: sticky;
      }

      & > div:nth-child(2) {
        position: relative;
        z-index: 5;
      }

      font-family: 'DINCondensed-Bold';
      font-size: 131px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 1.2;
      text-align: right;
      letter-spacing: -4px;
      color: #dec692;
    }

    & > div:nth-child(1)::after {
      content: '';
      background: #f2f2f2;
      width: 550px;
      height: 300px;
      position: absolute;
      top: 211px;
      right: 0;
    }

    & > div:nth-child(2) {
      position: relative;
      top: -20px;
      left: -5px;

      & > img {
        position: relative;
        z-index: 5;
      }

      & > img:nth-child(1) {
        margin-bottom: 20px;
      }
    }
  }
}

.dow {
  margin-top: 150px;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    width: 62.5%;
    height: 202px;
    background: #dec692;
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
</style>
