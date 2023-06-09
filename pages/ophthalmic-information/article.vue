<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.ophthalmic_information.ophthalmic_article'),
}))
const articleList = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2a42431d5f95a077.png',
    title: [
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList1_title1',
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList1_title2',
    ],
    data: '2022.11.03',
    source: 'BowTie',
    doctor:
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList1_doctor',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d6a534735d60a396.png',
    title: [
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList2_title1',
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList2_title2',
    ],
    data: '2022.11.03',
    source: 'BowTie',
    doctor:
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList2_doctor',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4e79136cac72b4f8.png',
    title: [
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList3_title1',
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList3_title2',
    ],
    data: '2020.07.19',
    source: 'am730',
    doctor:
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList3_doctor',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2c186779c179368d.png',
    title: [
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList4_title1',
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList4_title2',
    ],
    data: '2022.05.11',
    source: 'HK01',
    doctor:
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList4_doctor',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/21eaea9d70787203.png',
    title: [
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList5_title1',
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList5_title2',
    ],
    data: '2020.04.05',
    source: 'BowTie',
    doctor:
      'pages.ophthalmic_information.ophthalmic_article_text.article_articleList.articleList5_doctor',
  },
]
</script>

<template>
  <div class="article_Out">
    <div class="article">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/06/fe976a37d9ff57f1.png"
            alt="文章推薦"
          />
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
            ></path>
          </svg>
        </div>
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_article_text.article_text1'
                )
              }}
            </div>
            <div>
              <div>Article</div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/db7171427f66f1fc.png"
                  alt="文章推薦"
                />
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/bb1dda2d4801f96b.png"
                  alt="文章推薦"
                />
              </div>
            </div>
          </div>
          <div>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_article_text.article_p1'
                )
              }}
            </p>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_article_text.article_p2'
                )
              }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div v-for="(item, index) in articleList" :key="index">
          <div><img :src="item.img" /></div>
          <div>
            <p v-for="(ele, index) in item.title" :key="index">{{ $t(ele) }}</p>
          </div>
          <div>
            <span>{{ item.data }}</span
            ><span>{{ item.source }}</span
            ><span v-if="$t(item.doctor)">{{ $t(item.doctor) }}</span>
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
.article {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 86.63px;

    & > div:nth-child(1) {
      margin-left: 10%;
      position: relative;

      & > img {
        z-index: 5;
        position: relative;
      }

      & > svg {
        z-index: 5;
        left: 45%;
        position: absolute;
      }
    }

    & > div:nth-child(1)::before {
      content: '';
      width: 1590px;
      height: 913px;
      background: #f2f2f2;
      display: inline-block;
      z-index: 1;
      position: absolute;
      left: -88.38px;
      bottom: -118.42px;
    }

    & > div:nth-child(2) {
      position: absolute;
      z-index: 5;
      left: 0;
      right: 0;
      bottom: 294.58px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 40.1431px;
        line-height: 46px;
        letter-spacing: 0.2em;
        color: #ffffff;

        & > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 52px;

          & > div:nth-child(1) {
            font-family: 'Metropolis';
            font-style: normal;
            font-weight: 700;
            font-size: 57.4776px;
            line-height: 56px;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 47px;
        letter-spacing: 0.3em;
        color: #ffffff;

        & > p:nth-child(2) {
          margin-top: 10px;
          font-weight: 400;
          font-size: 32px;
          line-height: 24px;
          letter-spacing: 0.45em;
        }
      }
    }
  }

  & > div:nth-child(2) {
    margin-top: 303.42px;
    margin-bottom: 294px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 203px;
    margin-right: 265px;

    & > div {
      width: 401px;
      height: 401px;
      background: #f2f2f2;
      margin-right: 120px;
      padding: 0;

      & > div:nth-child(1) {
        padding-top: 36px;
        padding-right: 37px;
        padding-left: 34px;
      }

      & > div:nth-child(2) {
        padding-left: 34px;
        white-space: pre-wrap;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 34px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #515151;
      }

      & > div:nth-child(3) {
        height: 38px;
        background: #ffffff;
        text-align: center;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 34px;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        & > span:nth-child(1) {
          font-family: 'Metropolis';
          font-weight: 500;
          font-size: 17.7815px;
          line-height: 36px;
          color: #8ad8dd;
        }

        & > span:nth-child(2) {
          color: #ffa88c;
        }

        & > span:nth-child(3) {
          color: #6e96d8;
        }

        & > span:nth-child(2)::before,
        & > span:nth-child(3)::before {
          content: '|';
          padding: 0 12px;
          color: #515151;
        }
      }
    }

    & > div:nth-child(3n) {
      margin-right: 0;
    }

    & > div:nth-child(n + 4) {
      margin-top: 164px;
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .article_Out {
    width: 1920px;
    margin: auto;
    margin-left: 25%;
  }
}
</style>
