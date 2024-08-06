<script setup lang="ts">
import { getPdf } from '@/assets/js/common'
import { url } from '@nuxt/test-utils-edge'
import { Autoplay } from 'swiper'
const { t } = useLang()
const locale = useState<string>('locale.setting')
// 眼科中心
const eyeCenterImgList = [
  {
    img: 'https://hkcmereye.com/template/default/picture/centre_introduction/sli1.jpg',
    alt: '希瑪眼科中心_將軍澳診所接待區',
    title: '希瑪眼科中心_將軍澳診所'
  },
  {
    img: 'https://hkcmereye.com/template/default/picture/centre_introduction/2.jpg',
    alt: '希瑪眼科中心_觀塘診所明亮寬敞的接待區',
    title: '希瑪眼科中心_觀塘診所'
  },
  {
    img: 'https://hkcmereye.com/template/default/picture/centre_introduction/1.jpg',
    alt: '希瑪眼科中心_觀塘診所接待區環境',
    title: '希瑪眼科中心_觀塘診所'
  },
  // {
  //   img: 'https://hkcmereye.com/template/default/picture/centre_introduction/3.jpg',
  //   alt: '希瑪眼科中心_尖沙咀診所座落維多利亞海旁的候診區',
  //   title: '希瑪眼科中心_尖沙咀診所'
  // },
  // {
  //   img: 'https://hkcmereye.com/template/default/picture/centre_introduction/4.jpg',
  //   alt: '希瑪眼科中心_尖沙咀診所舒適寬敞的候診區',
  //   title: '希瑪眼科中心_尖沙咀診所'
  // },
  {
    img: 'https://static.cmereye.com/imgs/2023/02/edf32e5449c237d9.jpg',
    alt: '希瑪眼科中心_將軍澳診所入口',
    title: '希瑪眼科中心_將軍澳診所'
  },
  {
    img: 'https://hkcmereye.com/template/default/picture/centre_introduction/5.jpg',
    alt: '希瑪眼科中心_眼科診所候診區',
    title: '希瑪眼科中心_眼科診所'
  },
  // {
  //   img: 'https://hkcmereye.com/template/default/picture/centre_introduction/6.jpg',
  //   alt: '希瑪眼科中心提供舒適的眼科檢查環境',
  //   title: '希瑪眼科中心_眼科檢查'
  // },
  {
    img: 'https://hkcmereye.com/template/default/picture/centre_introduction/7.jpg',
    alt: '希瑪眼科中心配備高端的眼科檢查儀器',
    title: '希瑪眼科中心_眼科檢查儀器'
  },
  {
    img: 'https://hkcmereye.com/template/default/picture/centre_introduction/8.jpg',
    alt: '希瑪眼科中心提供優質的眼科檢查服務',
    title: '希瑪眼科中心_眼科檢查服務'
  },
  {
    img: 'https://hkcmereye.com/template/default/picture/centre_introduction/9.jpg',
    alt: '希瑪眼科中心_中環診所配備先進的眼科檢查儀器',
    title: '希瑪眼科中心_中環診所_眼科檢查儀器'
  },
]

// 微笑
const smileImgList = [
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/cca3677b22fff970.jpg',
    alt:'希瑪微笑矯視中心',
    title: '希瑪微笑矯視中心'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/2243214330d17740.jpg',
    alt:'希瑪微笑矯視中心配備先進的驗眼儀器',
    title: '希瑪微笑矯視中心_驗眼儀器'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/d9c17b2602074dc2.jpg',
    alt:'希瑪微笑矯視中心配備先進的眼科檢查儀器',
    title: '希瑪微笑矯視中心_眼科檢查儀器'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/f15f1fcddbf4480b.jpg',
    alt:'希瑪微笑矯視中心配備高端的眼科檢查儀器',
    title: '希瑪微笑矯視中心_眼科檢查儀器'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/80d662e2d6fd07b0.jpg',
    alt:'希瑪微笑矯視中心配備高端的驗眼儀器',
    title: '希瑪微笑矯視中心_驗眼儀器'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/f3577bfe421412b4.jpg',
    alt:'希瑪微笑矯視中心_中環診所舒適的候診區',
    title: '希瑪微笑矯視中心_中環診所'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/f72453a5494213f9.jpg',
    alt:'希瑪微笑矯視中心_中環診所明亮舒適的候診區',
    title: '希瑪微笑矯視中心_中環診所'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/4d8a1d48805a12e6.jpg',
    alt:'希瑪微笑矯視中心_中環診所走廊與候診區',
    title: '希瑪微笑矯視中心_中環診所'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/1e1e89b1fddf463f.jpg',
    alt:'希瑪微笑矯視中心_中環診所溫馨的燈光設計',
    title: '希瑪微笑矯視中心_中環診所'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/007ff78c5924dd4f.jpg',
    alt:'希瑪微笑矯視中心提供飲用水設施',
    title: '希瑪微笑矯視中心'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/f165cd18d4792c66.jpg',
    alt:'希瑪微笑矯視中心_手術中心牌匾',
    title: '希瑪微笑矯視中心'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/48d7de78a7b1f4c6.jpg',
    alt:'希瑪微笑矯視中心舒適的接待區',
    title: '希瑪微笑矯視中心'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/acf90a19c2a17b84.jpg',
    alt:'希瑪微笑矯視中心_眼科診所候診區',
    title: '希瑪微笑矯視中心_眼科診所'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2024/08/b4ed26bdb8949a97.jpg',
    alt:'希瑪微笑矯視中心_眼科診所舒適的候診區',
    title: '希瑪微笑矯視中心_眼科診所'
  },
]

// 视光
const visionImgList = [
  { 
    img: 'https://www.hkcmereye.com/template/default/picture/mainIntroImg/vision1.jpg',
    alt: '希瑪視光中心_旺角中心環境',
    title: '希瑪視光中心_旺角診所'
  },
  { 
    img: 'https://www.hkcmereye.com/template/default/picture/mainIntroImg/v1.png',
    alt: '希瑪視光中心_中環中心舒適的接待區',
    title: '希瑪視光中心_中環診所'
  },
  { 
    img: 'https://www.hkcmereye.com/template/default/picture/mainIntroImg/v2.png',
    alt: '希瑪視光中心提供驗配眼鏡服務',
    title: '希瑪視光中心_配眼鏡'
  },
  { 
    img: 'https://www.hkcmereye.com/template/default/picture/mainIntroImg/v3.png',
    alt: '希瑪視光中心_旺角中心提供兒童驗配眼鏡服務',
    title: '希瑪視光中心_旺角診所_配眼鏡'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2023/02/3561eb13d077d63d.jpg',
    alt: '希瑪視光中心_將軍澳中心入口及展示窗',
    title: '希瑪視光中心_將軍澳診所'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2023/02/46b2e6c9ee085ddf.jpg',
    alt: '希瑪視光中心_將軍澳中心的兒童近視控制專區',
    title: '希瑪視光中心_將軍澳中心_兒童近視控制'
  },
  { 
    img: 'https://static.cmereye.com/imgs/2023/02/2dc0bc6c85093e17.jpg',
    alt: '希瑪眼科中心配備各種先進的眼科檢查儀器',
    title: '希瑪眼科中心_眼科檢查儀器'
  },
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
<div>
  <div id="centreIntro" class="centreIntro">
    <!-- 中心簡介 -->
    <div>
      <div class="IntroCon">
        <AboutTitle
          :zh-title="$t('pages.about_us.center_profile')"
          :en-ttitle="'introduction'"
        />
      </div>
      <p class="preface" :class="{'enStyle': locale === 'en'}">
        {{ $t('pages.about_us.profile_centent.profile_text') }}
      </p>

      <div class="mianText" :class="{'enStyle': locale === 'en'}">
        
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
        <p>{{ $t('pages.about_us.profile_centent.profile_group_hema') }}
          <img class="mianImg" src="https://static.cmereye.com/imgs/2024/04/e06af078f24f2d14.png" alt="">
        </p>
        
      </div>
    </div>

    <!-- 希瑪眼科中心 -->
    <div class="maxCon">
      <div>
        <div class="float-right">
          {{ $t('pages.about_us.hema_eye.hema_eye') }}
        </div>
      </div>
      <div>
        <div>
          <Swiper
            :height="380"
            :modules="[Autoplay]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
              delay: 2500,
            }"
          >
            <SwiperSlide v-for="(slide, idx) in eyeCenterImgList" :key="idx">
              <div class="eyeList"><img :src="slide.img" :alt="slide.alt" :title="slide.title" /></div>
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
    <div class="maxCon">
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
            :modules="[Autoplay]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
              delay: 2500,
            }"
          >
            <SwiperSlide v-for="(slide, idx) in smileImgList" :key="idx">
              <div class="eyeList"><img :src="slide.img" :alt="slide.alt" :title="slide.title" /></div>
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
    <div class="maxCon">
      <div>
        <div class="float-right">
          {{ $t('pages.about_us.hema_vision.hema_vision') }}
        </div>
      </div>
      <div>
        <div>
          <Swiper
            :height="380"
            :modules="[Autoplay]"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
              delay: 2500,
            }"
          >
            <SwiperSlide v-for="(slide, idx) in visionImgList" :key="idx">
              <div class="eyeList"><img :src="slide.img" :alt="slide.alt" :title="slide.title" /></div>
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
    <div class="maxCon">
      <div>
        <img
          src="https://static.cmereye.com/imgs/2023/03/87bec646d374d093.png"
          alt="希瑪眼科中心提供高品質的眼科檢查服務"
          title="希瑪眼科中心_眼科檢查服務"
        />
        <img
          src="https://static.cmereye.com/imgs/2023/03/13753bf3c5149f9b.png"
          alt="希瑪眼科中心_將軍澳診所舒適的接待區"
          title="希瑪眼科中心_將軍澳診所"
        />
      </div>
      <div>
        <a
          href="https://www.xiaohongshu.com/user/profile/620520830000000010006034"
          target="_blank"
        >
          <img
            src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/redbook.png"
            alt="希瑪眼科中心_小紅書圖標"
            title="希瑪眼科中心_小紅書"
          />
          {{ $t('pages.about_us.media.media_redbook') }}
        </a>
        <a
          href="https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg"
          target="_blank"
        >
          <img
            src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/yt.png"
            alt="希瑪眼科中心_YouTube圖標"
            title="希瑪眼科中心_YouTube"
          />
          {{ $t('pages.about_us.media.media_youtube') }}
        </a>
        <a href="javascript:void(0)" class="isWechat">
          <img
            src="https://www.hkcmereye.com/template/default/picture/mainIntroImg/wecha.png"
            alt="希瑪眼科中心_微信圖標"
            title="希瑪眼科中心_微信"
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
      <div class="maxCon">
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/03/730235c6f84d2dee.png"
            alt="希瑪視光中心_旺角中心舒適寬敞的接待區"
            title="希瑪視光中心_旺角診所"
          />
        </div>
        <div @click.stop="getPdf('cmer.pdf',$t('pages.about_us.download.download'))">
          <img
            src="https://static.cmereye.com/imgs/2023/03/84174afa22901c0b.png"
            alt="希瑪眼科中心_業務小冊子"
            title="希瑪眼科中心"
          />
          <div
            class="downloadpdf"
            >{{ $t('pages.about_us.download.download') }}</div
          >
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.IntroCon {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  :deep(h1) {
    text-align: left !important;
  }
}
.centreIntro {
  margin-bottom: 320px;
  // 简介
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;

    & > p {
      &.enStyle{
        text-transform:initial;
      }
      width: 100%;
      max-width: 960px;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 40px;
      padding: 3rem 2.5rem;
      text-align: justify;
      letter-spacing: 0.08em;
      color: #515151;
      background: linear-gradient(90deg, #fbfdff 0%, #f5fbfe 100%);
      box-shadow: 1px 2px 4px rgba(170, 169, 166, 0.2);
      border-radius: 20px;
      margin: 100px auto;
    }

    & > div:nth-of-type(2) {
      width: 100%;
      max-width: 860px;
      margin: 0 auto;
      &.enStyle{
        &>p,& > p:last-child{
          text-transform:initial;
        }
      }
      .color1 {
        color: #8ad8dd;
      }

      & > p {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 70px;
        text-align: justify;
        letter-spacing: 0.06em;
        text-indent: 45px;
        color: #515151;
      }

      & > p:last-child {
        width: 860px;
        margin-top: 70px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 34px;
        text-align: justify;
        letter-spacing: 0.06em;
        text-indent: 45px;
        color: #515151;
        background: #F6FCFF;
        box-shadow: 0 2px 3px rgba(0,0,0,0.3);
        position: relative;
        padding: 20px;
        border-radius: 13px;
      }
    }
  }

  // 希瑪眼科中心
  & > div:nth-child(2) {
    width: 100%;
    max-width: 1080px;
    margin-top: 180px;
    position: relative;

    .swiper {
      filter: drop-shadow(6px 7px 4px rgba(128, 123, 123, 0.25));
      width: 500px;
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
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 34px;
        text-align: justify;
        letter-spacing: 0.06em;
        text-indent: 45px;

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
        img{
          margin-right: 5px;
        }
        cursor: pointer;
        display: flex;
        align-items: center;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.06em;
        color: #2958a3;
      }

      & > div:nth-child(2) {
        margin-left: 50px;
      }
    }
  }

  // 希瑪微笑矯視中心
  & > div:nth-child(3) {
    width: 100%;
    max-width: 1080px;
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
        background: #4570b6;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 30px 0px;
        width: 332px;
        height: 69px;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 34.6916px;
        line-height: 2;
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
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 34px;
        text-align: justify;
        letter-spacing: 0.06em;
        text-indent: 45px;
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
        img{
          margin-right: 5px;
        }
        cursor: pointer;
        display: flex;
        align-items: center;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.06em;
        color: #2958a3;
      }
      & > div:nth-child(2) {
        margin-left: 50px;
      }
    }
  }

  // 希瑪視光中心
  & > div:nth-child(4) {
    width: 100%;
    max-width: 1080px;
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
        img{
          margin-right: 5px;
        }
        margin-left: 50px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 34px;
        text-align: justify;
        letter-spacing: 0.06em;
        text-indent: 45px;
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
        img{
          margin-right: 5px;
        }
        cursor: pointer;
        display: flex;
        align-items: center;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.06em;
        color: #2958a3;
      }
      & > div:nth-child(2) {
        margin-left: 50px;
      }
    }
  }
}

.media {
  margin-bottom: 50px;
  position: relative;
  &::before {
    content: '';
    width: calc((100% - 1080px) / 2 + 1160px);
    background: #f2f2f2;
    height: 337px;
    position: absolute;
    top: 110px;
    left: 0;
  }
  & > div:nth-child(1) {
    position: relative;
    display: flex;

    & > div > img:nth-child(1) {
      margin-left: 150px;
      margin-right: 94px;
    }

    & > div > img:nth-child(2) {
      margin-top: 58px;
    }

    & > div:nth-child(2) {
      color: red;
      padding-top: 165px;
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
        text-align: justify;
        letter-spacing: 0.01em;
        text-indent: 30px;
        color: #515151;
      }
    }
  }

  & > div:nth-child(2) {
    position: relative;
    margin-top: 30px;
    &::before {
      content: '';
      width: calc((100% - 1080px) / 2 + 1160px);
      background: #f2f2f2;
      height: 150px;
      position: absolute;
      top: -20px;
      left: 0;
    }
    & > div {
      position: relative;
      display: flex;
      & > div:nth-child(1) {
        margin: 28px 94px 0 150px;
      }
      & > div:nth-child(2) {
        img{
          margin-right: 30px;
        }
        top: 28px;
        display: flex;
        align-items: center;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.06em;
        height: 110px;
        color: #515151;
        cursor: pointer;
      }
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

.media > div:nth-child(1) > div > img:nth-child(2) {
  left: 37%;
}

.media > div:nth-child(1) > div > img:nth-child(1) {
  left: 40%;
}
.mianText{
  position: relative;
  .mianImg{
    position: absolute;
    right: 0;
    bottom: 100%;
    width: calc(450 / 1080 * 100%);
  }
}

@media screen and (max-width: 768px) {
  .mianText{
    .mianImg{
      display: none;
    }
  }
  .centreIntro{
    padding-top: 100px;
    margin-top: -100px;
    margin-bottom: 80px;
    & > div:nth-child(1) {
      .IntroCon{
        margin-left: 30px;
        width: max-content;
      }
      &>p{
        &.enStyle{
          text-align: initial;
        }
        width: calc(100% - 74px);
        margin: 30px 44px 30px 30px;
        font-size: 14px;
        line-height: 180%;
        padding: 30px 20px;
        box-shadow: 14px 14px 0px rgba(170, 169, 166, 0.2);
      }
      & > div:nth-child(3) {
        width: calc(100% - 80px);
        .color1{
          letter-spacing: 0;
        }
        &>p{
          font-size: 14px;
          text-indent: 0;
          line-height: 200%;
          margin-top: 10px;
        }
        & > p:last-child {
          width: 100%;
          font-size: 14px;
          text-indent: 0;
          letter-spacing: 0;
          margin-top: 20px;
        }
      }
    }
    & > div:nth-child(2) {
      margin-top: 100px;
      .swiper {
        width: 100vw;
      }
      .swiper-slide {
        padding: 30px;
      }
      & > div:nth-child(1) {
        justify-content: center;
        & > div {
          width: 200px;
          height: 50px;
          line-height: 50px;
          font-size: 20px;
        }
      }
      & > div:nth-child(2) {
        flex-direction: column-reverse;
        img {
          width: 100%;
          height: auto;
        }
        & > div:nth-child(2) {
          margin: 0 30px;
          font-size: 14px;
          line-height: 25px;
          text-indent: 0;
          & > p {
            margin-top: 30px;
          }
        }
      }
      & > div:nth-child(3) {
        width: calc(100% - 60px);
        margin: 0 auto;
        justify-content: space-between;
        &>div{
          font-size: 16px;
        }
        & > div:nth-child(1) {
          margin-left: 0;
        }
        & > div:nth-child(2) {
          margin-left: 0;
        }
      }
    }
    & > div:nth-child(3) {
      margin-top: 100px;
      .swiper {
        width: 100vw;
      }
      .swiper-slide {
        padding: 30px;
      }
      & > div:nth-child(1) {
        justify-content: center;
        & > div {
          width: 200px;
          height: 50px;
          line-height: 50px;
          font-size: 20px;
        }
      }
      & > div:nth-child(2) {
        flex-direction: column;
        img {
          width: 100%;
          height: auto;
        }
        & > div:nth-child(1) {
          margin: 0 30px;
          font-size: 14px;
          line-height: 25px;
          text-indent: 0;
          & > p {
            margin-top: 30px;
          }
        }
      }
      & > div:nth-child(3) {
        width: calc(100% - 60px);
        margin: 0 auto;
        justify-content: space-between;
        &>div{
          font-size: 16px;
        }
        & > div:nth-child(1) {
          margin-left: 0;
        }
        & > div:nth-child(2) {
          margin-left: 0;
        }
      }
    }
    & > div:nth-child(4) {
      margin-top: 100px;
      .swiper {
        width: 100vw;
      }
      .swiper-slide {
        padding: 30px;
      }
      & > div:nth-child(1) {
        justify-content: center;
        & > div {
          width: 200px;
          height: 50px;
          line-height: 50px;
          font-size: 20px;
        }
      }
      & > div:nth-child(2) {
        flex-direction: column-reverse;
        img {
          width: 100%;
          height: auto;
        }
        & > div:nth-child(2) {
          margin: 0 30px;
          font-size: 14px;
          line-height: 25px;
          text-indent: 0;
          & > p {
            margin-top: 30px;
          }
        }
      }
      & > div:nth-child(3) {
        width: calc(100% - 60px);
        margin: 0 auto;
        justify-content: space-between;
        &>div{
          font-size: 16px;
        }
        & > div:nth-child(1) {
          margin-left: 0;
        }
        & > div:nth-child(2) {
          margin-left: 0;
        }
      }
    }
  }
  .media {
    &::before {
      width: 100%;
      height: 200px;
      top: 20px;
    }
    & > div:nth-child(1){
      & > div:nth-of-type(1){
        margin-left: 30px;
        width: 130px;
      }
      & > div > img:nth-child(1) {
        margin-left: 0;
      }
      & > div > img:nth-child(2) {
        margin-left: 0;
        margin-right: 0;
        margin-top: 30px;
      }
      & > div:nth-child(2) {
        padding-top: 40px;
        flex: 1;
        margin-left: 20px;
        margin-right: 30px;
        & > a {
          & > img {
            width: 35px;
            height: 35px;
            margin-right: 10px;
          }
          font-size: 12px;
          text-indent: 0;
          line-height: 16px;
        }
      }
    }
    & > div:nth-child(2){
      margin-top: 60px;
      &::before {
        width: 100%;
        height: 115px;
        top: -20px;
      }
      & > div {
        & > div:nth-child(1) {
          width: 130px;
          margin: 0 0 0 30px;
          img{
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          flex:1;
          font-size: 12px;
          margin-left: 20px;
          text-indent: 0;
          top: 0;
          height: 80px;
          img{
            width: 36px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .centreIntro {
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
          img{
            margin-right: 5px;
          }
          margin-left: 50px;

          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 34px;
          text-align: justify;
          letter-spacing: 0.06em;
          text-indent: 45px;
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
          img{
            margin-right: 5px;
          }
          cursor: pointer;
          display: flex;
          align-items: center;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 20px;
          letter-spacing: 0.06em;
          color: #2958a3;
        }

        & > div:nth-child(2) {
          margin-left: 50px;
          margin-right: 48px;
        }
      }
    }
  }

  .centreIntro {
    margin: 0 auto;
    width: 100%;
  }

  .media {
    margin-top: 210px;
  }
}
</style>
