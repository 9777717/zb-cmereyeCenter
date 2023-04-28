<template>
  <div id="centreIntro">
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
      <p class="color1 font-semibold">「Ｒ」：開創性科研 Pioneering Research</p>
      <p>
        「希瑪」：「希」望為眼睛帶來希望之光；「希瑪」 與 「喜馬」
        同音，喜馬拉雅山脈為世界海拔最高的山脈，寓意「希瑪眼科」憑着優質臨床服務、現代化管理、優質教學與培訓以及領先研究，不斷追求卓越，攀登高峰的理念。
      </p>
    </div>

    <!-- 眼科介绍 -->
    <ul class="cmerEyeList">
      <!-- 眼科中心 -->
      <li class="eyeItem">
        <div class="title justify-end"><span>希瑪眼科中心</span></div>
        <div class="content flex items-start justify-between">
          <div class="sec1">
            <div
              v-swiper:eyeCenterSwiper="eyeCenterSwiperOption"
              class="swiper"
            >
              <div class="swiper-wrapper">
                <div
                  v-for="(item, index) in eyeCenterImgList"
                  :key="index"
                  class="swiper-slide"
                >
                  <img :src="item" />
                </div>
              </div>
              <div class="swiper-pagination eyeCenterswiper-pagination"></div>
            </div>

            <div class="socail">
              <a href="https://www.facebook.com/cmereyecenter">
                <img
                  class="mr-4"
                  src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/fb.jpg"
                  alt=""
                />希瑪眼科</a
              >
              <a href="https://www.instagram.com/cmer_eye_center/">
                <img
                  class="mr-4"
                  src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/ig.jpg"
                  alt=""
                />cmer_eye_center</a
              >
            </div>
          </div>
          <div class="sec2">
            <p class="mb-8">
              現時全港有12間希瑪眼科中心，選址遍佈港、九、新界。由從事眼科臨床30多年林順潮醫生帶領，加上21名豐富經驗的眼科專科醫生，以及專業的醫療護理人員組成團隊，為市民提供全面眼科專科醫療服務。
            </p>
            <p>
              眼科中心嚴格遵守香港及國際醫療技術操作規範，設有多間符合國際標準的無菌手術室，配備先進尖端的眼科醫療儀器，秉持「度身訂造」的原則，為病人提供安全、準確、可靠的眼科檢查及治療。
            </p>
          </div>
        </div>
      </li>

      <!-- smile -->
      <li class="eyeItem">
        <div class="title justify-start"><span>希瑪微笑矯視中心</span></div>
        <div class="content flex items-start justify-between">
          <div class="sec2">
            <p class="mb-8">
              中心秉持「度身訂造」原則，提供優質服務包括：SMILE微笑激光矯視、LASIK激光矯視、植入式隱形眼鏡（ICL）及人工晶體置換術，為有近視、遠視、散光及老花的市民解決視力問題帶來的困擾。
            </p>
            <p>
              作為率先引入激光矯視技術的眼科中心，至今全港有4間微笑矯視中心。中心符合FDA激光矯視標準：設有符合國際標準的無菌手術室，配備先進的眼科檢查和矯視儀器；為客人作全面、準確的眼科檢查，並根據不同情況定制嚴格且有針對性的矯視方案。
            </p>
          </div>

          <div class="sec1">
            <div v-swiper:smileSwiper="smileSwiperOption" class="swiper">
              <div class="swiper-wrapper">
                <div
                  v-for="(item, index) in smileImgList"
                  :key="index"
                  class="swiper-slide"
                >
                  <img :src="item" />
                </div>
              </div>
              <div class="swiper-pagination smileswiper-pagination"></div>
            </div>

            <div class="socail">
              <a href="https://www.facebook.com/cmereyecenter">
                <img
                  class="mr-4"
                  src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/fb.jpg"
                  alt=""
                />希瑪微笑矯視中心</a
              >
              <a href="https://www.instagram.com/cmer_eye_center/">
                <img
                  class="mr-4"
                  src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/ig.jpg"
                  alt=""
                />cmer_smile</a
              >
            </div>
          </div>
        </div>
      </li>

      <!-- 视光 -->
      <li class="eyeItem">
        <div class="title justify-end"><span>希瑪視光中心</span></div>
        <div class="content flex items-start justify-between">
          <div class="sec1">
            <div v-swiper:visionSwiper="visionSwiperOption" class="swiper">
              <div class="swiper-wrapper">
                <div
                  v-for="(item, index) in visionImgList"
                  :key="index"
                  class="swiper-slide"
                >
                  <img :src="item" />
                </div>
              </div>
              <div class="swiper-pagination visionswiper-pagination"></div>
            </div>

            <div class="socail">
              <a href="https://www.facebook.com/cmereyecenter">
                <img
                  class="mr-4"
                  src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/fb.jpg"
                  alt=""
                />希瑪視光中心</a
              >
              <a href="https://www.instagram.com/cmer_eye_center/">
                <img
                  class="mr-4"
                  src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/ig.jpg"
                  alt=""
                />cmervision</a
              >
            </div>
          </div>
          <div class="sec2">
            <p class="mb-8">
              希瑪8間視光中心致力為市民提供全面眼科檢查及眼睛護理，秉持「度身訂造」的原則，根據不同年齡層的眼睛狀況及個人實際所需，制定專屬的眼睛檢查及護眼建議，並提供一站式安全、準確及可靠的改善視力方案，做到預防眼疾、及早治療。
            </p>
            <p>
              面對著香港兒童近視問題，希瑪視光希望能幫助兒童把握控制近視的黃金治療期。為兒童提供詳細眼睛檢查服務，為有需要小孩建議針對性的兒童近視控制方案︰包括︰角膜矯形鏡
              (OK鏡)、兒童近視控制鏡片、近視控制1 Day隱形眼鏡等。
            </p>
          </div>
        </div>
      </li>
    </ul>

    <!-- 社交媒体 -->
    <div class="social mt-40 mb-40">
      <div class="socialItem sec1">
        <div class="imgBox">
          <img
            class="ml-40 mb-5"
            src="https://static.cmereye.com/imgs/2023/03/87bec646d374d093.png"
            alt=""
          />
          <img
            src="https://static.cmereye.com/imgs/2023/03/13753bf3c5149f9b.png"
            alt=""
          />
        </div>
        <div class="socialBox">
          <a
            href="https://www.xiaohongshu.com/user/profile/620520830000000010006034"
          >
            <img
              src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/redbook.png"
              alt=""
            />
            香港希瑪眼科中心
          </a>

          <a href="https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg">
            <img
              src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/yt.png"
              alt=""
            />
            CMER SMILE Eye Center 香港希瑪眼科
          </a>

          <a href="javascript:void(0)" class="">
            <img
              src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/wecha.png"
              alt=""
            />香港希瑪眼科中心

            <!-- <div class="hover_hide">
            <small class=""><strong>Wechat 公眾號</strong> </small>

            <h2 class="blue fs-lg-20"><strong>香港希瑪眼科中心</strong></h2>

            <img src="/template/default/picture/wechat.jpg" style="max-width: ;">

            <small class="d-block blue">使用微信應用程式掃描二維碼</small>
          </div> -->
          </a>

          <!-- <a href="http://weixin.qq.com/r/4hGOlnfESio1rTP190Tw" target="_blank" class="">
          <img src="/template/default/picture/mainIntroImg/wecha.png" alt="">香港希瑪眼科中心
        </a> -->
        </div>
      </div>
      <div class="socialItem sec2">
        <div class="imgBox mr-20 relative z-10">
          <img
            class="ml-56"
            src="https://static.cmereye.com/imgs/2023/03/730235c6f84d2dee.png"
            alt=""
          />
        </div>

        <div class="downPdf relative z-10">
          <img
            src="https://static.cmereye.com/imgs/2023/03/84174afa22901c0b.png"
            alt=""
          />
          <a
            class="btn btn-info downloadpdf"
            href="https://www.hkcmereye.com/template/default/pdf/希瑪眼科業務小冊子(電子版).pdf"
            download="https://www.hkcmereye.com/template/default/pdf/希瑪眼科業務小冊子(電子版).pdf"
            >下載希瑪眼科業務小冊子</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
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
const eyeCenterSwiperOption = {
  pagination: {
    el: '.eyeCenterswiper-pagination',
    type: 'bullets',
  },
  loop: true,
  autoplay: false,
  slidesPerView: 1,
  spaceBetween: 0,
}

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
const smileSwiperOption = {
  pagination: {
    el: '.smileswiper-pagination',
    type: 'bullets',
  },
  loop: true,
  autoplay: false,
  slidesPerView: 1,
  spaceBetween: 0,
}

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
const visionSwiperOption = {
  pagination: {
    el: '.visionswiper-pagination',
    type: 'bullets',
  },
  loop: true,
  autoplay: false,
  slidesPerView: 1,
  spaceBetween: 0,
}
</script>
<style scoped lang="scss">
#centreIntro {
  width: 85%;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: start;
}

.preface {
  background: linear-gradient(90deg, #fbfdff 0%, #f5fbfe 100%);
  box-shadow: 1px 2px 4px rgba(170, 169, 166, 0.2);
  border-radius: 20px;
  line-height: 35px;
}

.mianText {
  width: 90%;

  p {
    margin: 30px 0;
    text-transform: uppercase;
    text-indent: 45px;
  }
}

.cmerEyeList {
  margin-top: 150px;

  .eyeItem {
    margin-bottom: 120px;

    .content {
      .sec1 {
        width: 45%;

        .swiper {
          filter: drop-shadow(6px 7px 4px rgba(128, 123, 123, 0.25));
          margin-bottom: 25px;

          img {
            border-radius: 20px;
          }
        }

        .socail {
          display: flex;
          align-items: center;
          justify-content: end;

          a {
            display: flex;
            text-transform: uppercase;
            justify-content: center;
            align-items: center;
            margin-left: 50px;

            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }

      .sec2 {
        width: 50%;
        margin-top: 30px;

        p {
          text-indent: 45px;
        }
      }
    }

    .title {
      display: flex;
      align-items: center;

      span {
        display: inline-block;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px 0px;
        color: #fff;
        padding: 8px 30px;
        font-size: 30px;
      }
    }

    &:nth-child(1) .title span {
      background: #1b407a;
    }

    &:nth-child(2) .title span {
      background: #4570b6;
    }

    &:nth-child(3) .title span {
      background: #00a4cf;
    }
  }
}

.social {
  width: 100%;

  .socialItem {
    display: flex;
    justify-content: start;
    align-items: start;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .sec1 {
    margin-bottom: 10px;
    position: relative;

    .imgBox {
      margin-right: 30px;
      position: relative;
      z-index: 10;
    }

    .socialBox {
      margin-top: 180px;
      position: relative;
      z-index: 10;

      a {
        margin-bottom: 30px;

        img {
          margin-right: 20px;
        }
      }
    }

    &::before {
      content: '';
      position: absolute;
      width: 150%;
      height: 78%;
      background-color: #f2f2f2;
      left: -50%;
      top: 15%;
      z-index: 0;
    }
  }

  .sec2 {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 150%;
      height: 78%;
      background-color: #f2f2f2;
      left: -50%;
      top: 0%;
      z-index: 0;
    }

    .downPdf {
      display: flex;
      align-items: center;
      justify-content: start;
      margin-top: 25px;
    }
  }
}
</style>

<style lang="scss">
#centreIntro {
  .swiper-slide {
    width: 100% !important;
  }
}
</style>
