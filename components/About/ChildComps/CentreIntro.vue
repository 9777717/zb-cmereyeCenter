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
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03653.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03624-1024x682.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03921.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03907.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03680.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03600.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03741.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03809-2.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03735.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03692-2.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03998.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03949.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03977.jpg',
  'https://smilecms.hkcmereye.com/wp-content/uploads/2021/09/CAM03968.jpg',
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
// 跳转Facebook
const goFaceBook = () => {
  window.open('https://www.facebook.com/cmereyecenter/', '_blank')
}
// instagram
const goInstagram = () => {
  window.open('https://www.instagram.com/cmer_eye_center/', '_blank')
}
</script>
<template>
  <div id="centreIntro" class="centreIntro">
    <!-- 中心簡介 -->
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

    <!-- 希瑪眼科中心 -->
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
        <div @click="goFaceBook">
          <img
            src="https://static.cmereye.com/imgs/2023/05/43503bcd2b483bdc.png"
          />
          希瑪眼科
        </div>
        <div @click="goInstagram">
          <img
            src="https://static.cmereye.com/imgs/2023/05/9e4f401e2f0bc647.png"
          />
          CMER_EYE_CENTER
        </div>
      </div>
    </div>

    <!-- 希瑪微笑矯視中心 -->
    <div>
      <div>
        <div class="float-right">希瑪微笑矯視中心</div>
      </div>
      <div>
        <div>
          <p>
            中心秉持「度身訂造」原則，提供優質服務包括：SMILE微笑激光矯視、LASIK激光矯視、植入式隱形眼鏡（ICL）及人工晶體置換術，為有近視、遠視、散光及老花的市民解決視力問題帶來的困擾。
          </p>
          <p>
            作為率先引入激光矯視技術的眼科中心，至今全港有4間微笑矯視中心。中心符合FDA激光矯視標準：設有符合國際標準的無菌手術室，配備先進的眼科檢查和矯視儀器；為客人作全面、準確的眼科檢查，並根據不同情況定制嚴格且有針對性的矯視方案。
          </p>
        </div>
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
            <SwiperSlide v-for="(slide, idx) in smileImgList" :key="idx">
              <div class="eyeList"><img :src="slide" /></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <div @click="goFaceBook">
          <img
            src="https://static.cmereye.com/imgs/2023/05/43503bcd2b483bdc.png"
          />
          希瑪微笑矯視中心
        </div>
        <div @click="goInstagram">
          <img
            src="https://static.cmereye.com/imgs/2023/05/9e4f401e2f0bc647.png"
          />
          CMER_SMILE
        </div>
      </div>
    </div>

    <!-- 希瑪視光中心 -->
    <div>
      <div>
        <div class="float-right">希瑪視光中心</div>
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
            <SwiperSlide v-for="(slide, idx) in visionImgList" :key="idx">
              <div class="eyeList"><img :src="slide" /></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <p>
            希瑪8間視光中心致力為市民提供全面眼科檢查及眼睛護理，秉持「度身訂造」的原則，根據不同年齡層的眼睛狀況及個人實際所需，制定專屬的眼睛檢查及護眼建議，並提供一站式安全、準確及可靠的改善視力方案，做到預防眼疾、及早治療。
          </p>
          <p>
            面對著香港兒童近視問題，希瑪視光希望能幫助兒童把握控制近視的黃金治療期。為兒童提供詳細眼睛檢查服務，為有需要小孩建議針對性的兒童近視控制方案︰包括︰角膜矯形鏡
            (OK鏡)、兒童近視控制鏡片、近視控制1 Day隱形眼鏡等。
          </p>
        </div>
      </div>
      <div>
        <div @click="goFaceBook">
          <img
            src="https://static.cmereye.com/imgs/2023/05/43503bcd2b483bdc.png"
          />
          希瑪視光中心
        </div>
        <div @click="goInstagram">
          <img
            src="https://static.cmereye.com/imgs/2023/05/9e4f401e2f0bc647.png"
          />
          CMERVISION
        </div>
      </div>
    </div>
  </div>
  <!-- 社交媒体 -->
  <div class="media">
    <div>
      <div>
        <img
          src="https://static.cmereye.com/imgs/2023/03/87bec646d374d093.png"
          alt=""
        />
        <img
          src="https://static.cmereye.com/imgs/2023/03/13753bf3c5149f9b.png"
          alt=""
        />
      </div>
      <div>
        <a
          href="https://www.xiaohongshu.com/user/profile/620520830000000010006034"
          target="_blank"
        >
          <img
            src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/redbook.png"
            alt=""
          />
          香港希瑪眼科中心
        </a>
        <a
          href="https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg"
          target="_blank"
        >
          <img
            src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/yt.png"
            alt=""
          />
          CMER SMILE Eye Center 香港希瑪眼科
        </a>
        <a href="javascript:void(0)" class="isWechat">
          <img
            src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/wecha.png"
            alt=""
          />香港希瑪眼科中心
          <div class="isShow">
            <img
              src="https://static.cmereye.com/imgs/2023/05/12bb443b3f92a0d8.jpg"
              alt="香港希瑪眼科中心"
            />
          </div>
        </a>
      </div>
    </div>
    <div>
      <div>
        <img
          src="https://static.cmereye.com/imgs/2023/03/730235c6f84d2dee.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://static.cmereye.com/imgs/2023/03/84174afa22901c0b.png"
          alt=""
        />
        <a
          class="downloadpdf"
          href="../../../assets/pdf/cmer.pdf"
          download="希瑪眼科業務小冊子(電子版).pdf"
          >下載希瑪眼科業務小冊子</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.centreIntro {
  margin-left: 450px;
  margin-bottom: 320px;

  // 简介
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

  // 希瑪眼科中心
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
        cursor: pointer;
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

  // 希瑪微笑矯視中心
  & > div:nth-child(3) {
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
      justify-content: flex-start;

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

      & > div:nth-child(1) {
        margin-right: 50px;
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
      justify-content: flex-end;

      & > div {
        cursor: pointer;
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

  // 希瑪視光中心
  & > div:nth-child(4) {
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
        background: #00a4cf;
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
        cursor: pointer;
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

.media {
  margin-bottom: 50px;

  & > div:nth-child(1) {
    position: relative;
    background: #f2f2f2;
    width: 1668px;
    height: 337px;

    & > div > img {
      position: absolute;
    }

    & > div > img:nth-child(1) {
      top: -95px;
      left: 690px;
    }

    & > div > img:nth-child(2) {
      bottom: -17px;
      left: 510px;
    }

    & > div:nth-child(2) {
      color: red;
      margin-left: 1100px;
      padding-top: 65px;

      & > a {
        & > img {
          width: 55px;
          height: 55px;
        }

        display: flex;
        align-items: center;
        margin-bottom: 26px;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
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
    position: relative;
    background: #f2f2f2;
    width: 1668px;
    height: 150px;
    margin-top: 30px;

    & > div:nth-child(1) {
      margin-left: 780px;
    }

    & > div:nth-child(2) {
      position: absolute;
      top: 28px;
      margin-left: 1196px;
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
      text-indent: 45px;
      text-transform: uppercase;

      color: #515151;
    }
  }

  .isWechat:hover .isShow {
    display: block;
  }

  .isWechat {
    position: relative;
  }

  .isShow {
    display: none;
  }

  .isShow {
    position: absolute;
    bottom: auto;
    background: #ffffff;
    padding: 20px 10px;
    border-radius: 0 0 15px 15px;
    left: 20px;
    top: 50px;
    z-index: 5;
  }
}
</style>
