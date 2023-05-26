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
const goFaceBook = (type: string) => {
  if (type === 'eye') {
    window.open('https://www.facebook.com/cmereyecenter/', '_blank')
  } else if (type === 'smile') {
    window.open('https://www.facebook.com/CMER.SMILE', '_blank')
  } else {
    window.open('https://www.facebook.com/cmervision', '_blank')
  }
}
// instagram
const goInstagram = (type: string) => {
  if (type === 'eye') {
    window.open('https://www.instagram.com/cmer_eye_center/', '_blank')
  } else if (type === 'smile') {
    window.open('https://www.instagram.com/cmer_smile/', '_blank')
  } else {
    window.open('https://www.instagram.com/cmervision/', '_blank')
  }
}
</script>
<template>
  <div id="centreIntro" class="centreIntro">
    <!-- 中心簡介 -->
    <div>
      <AboutTitle
        :zh-title="$t('pages.about_us.center_profile')"
        :en-ttitle="'introduction'"
      />
      <p class="preface text-justify my-16 px-9 py-12">
        {{ $t('pages.about_us.profile_centent.profile_text') }}
      </p>

      <div class="mianText">
        <p>{{ $t('pages.about_us.profile_centent.profile_subjection') }}</p>
        <p>
          {{ $t('pages.about_us.profile_centent.profile_group_start')
          }}<span class="color1 font-semibold">{{
            $t('pages.about_us.profile_centent.profile_group_name')
          }}</span
          >{{ $t('pages.about_us.profile_centent.profile_group_idea') }}
        </p>
        <p class="color1 font-semibold">
          {{ $t('pages.about_us.profile_centent.profile_group_C') }}
        </p>
        <p class="color1 font-semibold">
          {{ $t('pages.about_us.profile_centent.profile_group_M') }}
        </p>
        <p class="color1 font-semibold">
          {{ $t('pages.about_us.profile_centent.profile_group_E') }}
        </p>
        <p class="color1 font-semibold">
          {{ $t('pages.about_us.profile_centent.profile_group_R') }}
        </p>
        <p>{{ $t('pages.about_us.profile_centent.profile_group_hema') }}</p>
      </div>
    </div>

    <!-- 希瑪眼科中心 -->
    <div>
      <div>
        <div class="float-right">
          {{ $t('pages.about_us.hema_eye.hema_eye') }}
        </div>
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
          <p>{{ $t('pages.about_us.hema_eye.hema_eye_introduce_one') }}</p>
          <p>{{ $t('pages.about_us.hema_eye.hema_eye_introduce_two') }}</p>
        </div>
      </div>
      <div>
        <div @click="goFaceBook('eye')">
          <img
            src="https://static.cmereye.com/imgs/2023/05/43503bcd2b483bdc.png"
          />
          {{ $t('pages.about_us.hema_eye.hema_eye_facebooke') }}
        </div>
        <div @click="goInstagram('eye')">
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
        <div class="float-right">
          {{ $t('pages.about_us.hema_smile.hema_smile') }}
        </div>
      </div>
      <div>
        <div>
          <p>{{ $t('pages.about_us.hema_smile.hema_smile_introduce_one') }}</p>
          <p>{{ $t('pages.about_us.hema_smile.hema_smile_introduce_two') }}</p>
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
        <div @click="goFaceBook('smile')">
          <img
            src="https://static.cmereye.com/imgs/2023/05/43503bcd2b483bdc.png"
          />
          {{ $t('pages.about_us.hema_smile.hema_smile_facebooke') }}
        </div>
        <div @click="goInstagram('smile')">
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
        <div class="float-right">
          {{ $t('pages.about_us.hema_vision.hema_vision') }}
        </div>
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
            {{ $t('pages.about_us.hema_vision.hema_vision_introduce_one') }}
          </p>
          <p>
            {{ $t('pages.about_us.hema_vision.hema_vision_introduce_two') }}
          </p>
        </div>
      </div>
      <div>
        <div @click="goFaceBook('vision')">
          <img
            src="https://static.cmereye.com/imgs/2023/05/43503bcd2b483bdc.png"
          />
          {{ $t('pages.about_us.hema_vision.hema_vision_facebooke') }}
        </div>
        <div @click="goInstagram('vision')">
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
          {{ $t('pages.about_us.media.media_redbook') }}
        </a>
        <a
          href="https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg"
          target="_blank"
        >
          <img
            src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/yt.png"
            alt=""
          />
          {{ $t('pages.about_us.media.media_youtube') }}
        </a>
        <a href="javascript:void(0)" class="isWechat">
          <img
            src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/wecha.png"
            alt=""
          />
          {{ $t('pages.about_us.media.media_wechat') }}
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
          :download="`${$t('pages.about_us.download.download')}.pdf`"
          >{{ $t('pages.about_us.download.download') }}</a
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
