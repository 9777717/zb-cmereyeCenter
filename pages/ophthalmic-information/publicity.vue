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
  & > div:nth-child(1) {
    margin-top: 102px;
    display: flex;
    position: relative;
    flex-direction: column;
    background: #f1f1f1;
    height: 706px;
    width: 1630px;
    max-width: 1630px;

    & > div:nth-child(1) {
      position: absolute;
      bottom: -3vw;
      right: -2vw;
    }

    & > div:nth-child(2) {
      position: absolute;
      left: 15vw;
      top: 26vw;
      bottom: 66.65px;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 5;
      margin-left: 28vw;

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
        /* identical to box height, or 200% */

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
        /* or 150% */

        text-align: center;
        letter-spacing: 0.3em;

        color: #ffffff;
      }
    }

    & > div:nth-child(1) {
      & > img {
        position: relative;
        z-index: 5;
      }
    }

    // & > div:nth-child(1)::after {
    //   content: '';
    //   background: #f2f2f2;
    //   width: 1544px;
    //   height: 725px;
    //   position: absolute;
    //   right: 56px;
    //   bottom: -73.35px;
    //   z-index: 1;
    // }
  }

  & > div:nth-child(2) {
    margin-top: 240px;
    margin-left: 350px;
    margin-bottom: 277px;

    & > div {
      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 35px;
        /* identical to box height, or 100% */

        letter-spacing: 0.05em;

        color: #515151;
      }
    }
  }
}

.videoBorder {
  width: 1190px;
  border-top: 1.75771px solid #8ad8dd;
  padding-top: 73px;
  padding-bottom: 63px;
  margin-top: 25px;
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
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .publicity {
    width: 1920px;
    margin: auto;

    & > div:nth-child(1) {
      width: 1630px;
      max-width: 1630px;

      & > div:nth-child(1) {
        bottom: -3vw;
        right: -2vw;
      }

      & > div:nth-child(2) {
        left: 15vw;
        top: 18vw;
        margin-left: 15vw;
      }
    }
  }
}
</style>
