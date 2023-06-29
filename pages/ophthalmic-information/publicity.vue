<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.ophthalmic_information.ophthalmic_publicity'),
}))
// 眼疾影片
const eyeDisease = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/040da0e4cbb6878a.png',
    title:
      'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease1_title',
    text: 'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease1_text',
    link: 'https://youtu.be/0pN3E5ewLjE',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
    title:
      'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease2_title',
    text: 'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease2_text',
    link: 'https://youtu.be/fM2cCC5zxWw',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
    title:
      'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease3_title',
    text: 'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease3_text',
    link: 'https://youtu.be/fM2cCC5zxWw',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/040da0e4cbb6878a.png',
    title:
      'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease4_title',
    text: 'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease4_text',
    link: 'https://youtu.be/0pN3E5ewLjE',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
    title:
      'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease5_title',
    text: 'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease5_text',
    link: 'https://youtu.be/fM2cCC5zxWw',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/195b3f6dc0ff23b9.png',
    title:
      'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease6_title',
    text: 'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_eyeDisease.eye_disease6_text',
    link: 'https://youtu.be/fM2cCC5zxWw',
  },
]
</script>

<template>
  <div>
    <div class="publicity">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/06/d14944870b7cfec7.png"
            alt="護眼宣傳"
          />
        </div>
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_text1'
                )
              }}
            </div>
            <div>promotional video</div>
            <div>
            </div>
          </div>
          <div>
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_text2'
              )
            }}
          </div>
          <div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_text3'
                )
              }}
            </div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_text4'
                )
              }}
            </div>
          </div>
          <svg
              width="9"
              height="144"
              viewBox="0 0 9 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-v-1d8b93bf=""
              data-v-a125a221=""
              data-v-4b343dd3=""
              data-v-ee7ab105=""
              data-v-040e870e=""
            >
              <path
                d="M1 1V143L7.5 130.5"
                stroke="#2958A3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                data-v-1d8b93bf=""
                data-v-a125a221=""
                data-v-4b343dd3=""
                data-v-ee7ab105=""
                data-v-040e870e=""
              ></path>
            </svg>
        </div>
      </div>
      <div>
        <div>
          <div>
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_text5'
              )
            }}
          </div>
          <div class="videoBorder">
            <PageVideoSwiper :eye-disease="eyeDisease" />
          </div>
        </div>
        <div>
          <div>
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_publicity_text.publicity_text6'
              )
            }}
          </div>
          <div class="videoBorder household">
            <PageVideoSwiper :eye-disease="eyeDisease" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <PageInformation />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.publicity {
  position: relative;
  &::before{
    content: '';
    background: #f1f1f1;
    position: absolute;
    top: -146px;
    left: 0;
    width: calc((100vw - 1493px)/2 + 1427px);
    height: 706px;
  }
  & > div:nth-child(1) {
    margin: 179px auto 0;
    display: flex;
    position: relative;
    flex-direction: column;
    // background: #f1f1f1;
    height: 706px;
    width: 100%;
    max-width: 1493px;

    & > div:nth-child(1) {
      position: absolute;
      // top: 179px;
      width: 100%;
      img{
        width: 100%;
      }
      // bottom: -3vw;/
      // right: -2vw;
    }

    & > div:nth-child(2) {
      position: absolute;
      bottom: -50px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 5;
      // margin-left: 28vw;

      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 49.14px;
        line-height: 46px;
        text-align: center;
        letter-spacing: 0.2em;

        color: #ffffff;

        & > div:nth-child(2) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 44px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8ad8dd;
        }
      }

      & > div:nth-child(2) {
        margin-top: 34px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 60px;
        text-align: right;
        letter-spacing: 0.3em;

        color: #ffffff;
      }

      & > div:nth-child(3) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.3em;

        color: #ffffff;
      }
      &>svg{
        margin-top: 100px;
      }
    }

    & > div:nth-child(1) {
      & > img {
        position: relative;
        z-index: 5;
      }
    }
  }

  & > div:nth-child(2) {
    margin-top: 108px;
    margin-bottom: 277px;

    & > div {
      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 35px;
        letter-spacing: 0.05em;
        color: #515151;
        width: 100%;
        max-width: 1190px;
        margin: 0 auto;
      }
    }
  }
}

.videoBorder {
  width: 1190px;
  border-top: 1.75771px solid #8ad8dd;
  padding-top: 73px;
  padding-bottom: 63px;
  margin: 25px auto 0;
}

:deep(.swiper-wrapper) {
  & > div:nth-child(n) {
    & > div:nth-child(1) {
      margin: 0 75px;
    }
  }
}

.household {
  border-bottom: 1.75771px solid #8ad8dd;
}
</style>
