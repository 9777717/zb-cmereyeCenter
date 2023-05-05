<script setup lang="ts">
// 眼科中心
const eyeCenterImgList = [
  'https://hkcmereye.com/template/default/picture/centre_introduction/sli1.jpg',
  'https://hkcmereye.com/template/default/picture/centre_introduction/2.jpg',
  'https://hkcmereye.com/template/default/picture/centre_introduction/1.jpg',
  'https://hkcmereye.com/template/default/picture/centre_introduction/3.jpg',
  'https://hkcmereye.com/template/default/picture/centre_introduction/4.jpg',
  'https://static.cmereye.com/imgs/2023/02/edf32e5449c237d9.jpg',
  'https://hkcmereye.com/template/default/picture/centre_introduction/5.jpg',
  'https://hkcmereye.com/template/default/picture/centre_introduction/6.jpg',
  'https://hkcmereye.com/template/default/picture/centre_introduction/7.jpg',
  'https://hkcmereye.com/template/default/picture/centre_introduction/8.jpg',
  'https://hkcmereye.com/template/default/picture/centre_introduction/9.jpg',
]

// 微笑
const smileImgList = [
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03653.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03624-1024x682.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03921.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03907.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03680.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03600.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03741.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03809-2.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03735.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03692-2.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03998.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03949.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03977.jpg',
  'https://smile.hkcmereye.com/wp-content/uploads/2021/09/CAM03968.jpg',
]

// 视光
const visionImgList = [
  'https://www.hkcmereye.com/template/default/picture/mainIntroImg/vision1.jpg',
  'https://www.hkcmereye.com/template/default/picture/mainIntroImg/v1.png',
  'https://www.hkcmereye.com/template/default/picture/mainIntroImg/v2.png',
  'https://www.hkcmereye.com/template/default/picture/mainIntroImg/v3.png',
  'https://static.cmereye.com/imgs/2023/02/3561eb13d077d63d.jpg',
  'https://static.cmereye.com/imgs/2023/02/46b2e6c9ee085ddf.jpg',
  'https://static.cmereye.com/imgs/2023/02/2dc0bc6c85093e17.jpg',
]
</script>
<template>
  <div class="centreIntro">
    <div>
      <AboutTitle :zh-title="'中心簡介'" :en-ttitle="'introduction'" />
      <p class="preface text-justify my-16 px-9 py-12">
        香港領先的一站式眼科專科醫療服務集團
        ——希瑪眼科醫療控股有限公司，是由林順潮醫生於2012年創立，並於2018年成功在香港聯合交易所主板上市。多年以來，我們的醫療團隊以守護市民視力為目標，為香港市民提供安全、準確、可靠的眼科檢查及專科醫療服務。希瑪眼科服務包括︰檢查及治療眼疾、SMILE微笑激光矯視、植入式隱形眼鏡（ICL）、人工晶體置換（IOL）、全面眼睛檢查、視光配鏡服務等。
      </p>

      <div class="mianText">
        <p>「希瑪眼科中心」是上市公司「香港希瑪眼科集團」旗下的眼科中心。</p>
        <p>
          我們的集團名稱<span class="color1 font-semibold">「C-MER」</span
          >，正正反映著我們的理念與執著：
        </p>
        <p class="color1 font-semibold">
          「C」 ：專業臨床服務 Profession al Clinical Services
        </p>
        <p class="color1 font-semibold">「Ｍ」：現代化管理 Modern Management</p>
        <p class="color1 font-semibold">「Ｅ」：優質教育 Quality Education</p>
        <p class="color1 font-semibold">
          「Ｒ」：開創性科研 Pioneering Research
        </p>
        <p>
          「希瑪」：「希」望為眼睛帶來希望之光；「希瑪」 與 「喜馬」
          同音，喜馬拉雅山脈為世界海拔最高的山脈，寓意「希瑪眼科」憑着優質臨床服務、現代化管理、優質教學與培訓以及領先研究，不斷追求卓越，攀登高峰的理念。
        </p>
      </div>
    </div>
    <div>
      <div>
        <div class="float-right">希瑪眼科中心</div>
      </div>
      <div>
        <div>
          <Swiper
            :height="380"
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
              delay: 3000,
            }"
          >
            <SwiperSlide v-for="(slide, idx) in eyeCenterImgList" :key="idx">
              <div class="eyeList"><img :src="slide" /></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <p>
            現時全港有12間希瑪眼科中心，選址遍佈港、九、新界。由從事眼科臨床30多年林順潮醫生帶領，加上21名豐富經驗的眼科專科醫生，以及專業的醫療護理人員組成團隊，為市民提供全面眼科專科醫療服務。
          </p>
          <p>
            眼科中心嚴格遵守香港及國際醫療技術操作規範，設有多間符合國際標準的無菌手術室，配備先進尖端的眼科醫療儀器，秉持「度身訂造」的原則，為病人提供安全、準確、可靠的眼科檢查及治療。
          </p>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/43503bcd2b483bdc.png"
          />
          希瑪眼科
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/9e4f401e2f0bc647.png"
          />
          CMER_EYE_CENTER
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<style scoped lang="scss">
.centreIntro {
  margin-left: 450px;
  margin-bottom: 50px;

  & > div:nth-child(1) {
    margin-left: 143px;
    display: flex;
    flex-direction: column;

    & > p {
      width: 960px;
      margin-left: 15px;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 40px;
      /* or 200% */

      text-align: justify;
      letter-spacing: 0.08em;
      text-transform: uppercase;

      color: #515151;
      background: linear-gradient(90deg, #fbfdff 0%, #f5fbfe 100%);
      box-shadow: 1px 2px 4px rgba(170, 169, 166, 0.2);
      border-radius: 20px;
    }

    & > div:nth-child(3) {
      .color1 {
        color: #8ad8dd;
      }

      & > p {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 70px;
        /* or 170% */

        text-align: justify;
        letter-spacing: 0.06em;
        text-indent: 45px;
        text-transform: uppercase;
        margin-left: 150px;

        color: #515151;
      }

      & > p:last-child {
        width: 860px;
        margin-top: 70px;
        margin-left: 78px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 34px;
        /* or 170% */

        text-align: justify;
        letter-spacing: 0.06em;
        text-indent: 45px;
        text-transform: uppercase;

        color: #515151;
      }
    }
  }

  & > div:nth-child(2) {
    width: 1186px;
    margin-top: 180px;
    position: relative;

    .swiper {
      filter: drop-shadow(6px 7px 4px rgba(128, 123, 123, 0.25));
      width: 523px;
    }

    .swiper-slide {
      width: 100% !important;
    }

    & > div:nth-child(1) {
      display: flex;
      width: 100%;
      justify-content: flex-end;

      & > div {
        background: #1b407a;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px 0px;
        width: 332px;
        height: 69px;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 34.6916px;
        line-height: 2;
        /* identical to box height, or 144% */

        text-align: center;
        letter-spacing: 0.05em;

        color: #ffffff;
      }
    }

    & > div:nth-child(2) {
      img {
        border-radius: 12px;
        width: 523px;
        height: 380px;
      }

      margin-top: 13px;
      display: flex;
      align-items: center;

      & > div:nth-child(2) {
        margin-left: 50px;
        margin-top: 43px;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 34px;
        /* or 170% */

        text-align: justify;
        letter-spacing: 0.06em;
        text-indent: 45px;
        text-transform: uppercase;

        color: #515151;

        & > p {
          margin-top: 40px;
        }
      }
    }

    & > div:nth-child(3) {
      margin-top: 10px;
      display: flex;
      align-items: center;

      & > div {
        display: flex;
        align-items: center;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 34px;
        /* or 170% */

        text-align: justify;
        letter-spacing: 0.06em;
        text-indent: 5px;
        text-transform: uppercase;

        color: #2958a3;
      }

      & > div:nth-child(1) {
        margin-left: 98px;
      }

      & > div:nth-child(2) {
        margin-left: 50px;
      }
    }
  }
}
</style>
