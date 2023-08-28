<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '醫生小教室｜眼科資訊｜香港希瑪眼科中心',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心是一家提供眼科診療服務的機構，提供不同的眼科資訊影片，提供豐富的影片內容，包括眼科醫生講解眼疾知識、預防眼疾、眼疾治療方法，讓觀眾可以更加深入地了解各種眼疾的病因、症狀和治療方法。通過眼科醫生訪問影片，公眾可以學會如何保護眼睛，識別和預防眼疾，並瞭解診療技術和眼疾手術方法。這些知識可以幫助人們更好地照顧自己的眼睛，減少眼睛疾病的發生風險，提高對眼睛健康的關注和重視，從而達到預防和治療眼疾的目的。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科林順潮眼科醫生 希瑪林順潮眼科中心  眼科醫生 香港眼科 眼科醫生 眼科診所 希瑪眼科 眼科資訊 眼科知識 眼疾 眼疾種類 眼疾症狀 全面眼睛檢查 眼科新聞 眼科專科 希瑪醫療集團 希瑪醫療 眼睛疾病 眼科服務',
    },
    {
      name: 'description',
      content:
        'Hong Kong CMER Eye Center provides optometry and comprehensive eye examinations. Medical services include: cataract, glaucoma, strabismus, amblyopia, ocular surface diseases, corneal diseases, macular degeneration, retinal detachment, orbital, ophthalmic plastic surgery and eye tumors, myopia control and ophthalmic services. CMER Eye Center has a total of 10 eye clinics, with 22 ophthalmologists, providing professional eye medical services, eye examinations and eye medical services in Hong Kong. The ophthalmologist team consists of 22 ophthalmologists, led by ophthalmologist Dr. LAM Shun Chiu, Dennis.',
    },
    {
      name: 'keywords',
      content:
        'CMER Eye Center Hong Kong CMER Eye Center Ophthalmology Specialist Clinic Ophthalmology Specialist Center Vision Center Comprehensive Eye Exam CMER Eye Hong Kong Eye Treatment Solutions Eye Clinic',
    },
  ],
}))

let mainContent = ref([
  {
    img: '',
    link: '',
    title: '',
    doctor: '',
    text: ''
  }
])
let totalPageNum = ref(0)
let actPageNum = ref(1) 
const getMainContent = async () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  const { data }:any = await useFetch(`https://hkcmereye.com/api.php/list/3/page/${actPageNum.value}/num/4`)
  let res = JSON.parse(data.value)
  // console.log(res)
  totalPageNum.value = Math.ceil(res.rowtotal / 4)
  // console.log(totalPageNum.value)
  mainContent.value = res.data.map((item:any) => {
    return {
      img: `https://hkcmereye.com${item.ico}`,
      link: item.source,
      title: item.title,
      doctor: item.ext_doctor_name,
      text: item.ext_context
    }
  })
  toTop()
  loading.close()
}

const subNum = () => {
  if(actPageNum.value > 1){
    actPageNum.value --
    getMainContent()
  }
}

const addNum = () => {
  if(actPageNum.value < totalPageNum.value){
    actPageNum.value ++
    getMainContent()
  }
}

const toTop = () => {
  let topHeight:number = document.getElementById('doctorClassConetnt')?.offsetTop || 0
  document.body.scrollTop = document.documentElement.scrollTop = topHeight -= 100
}

onMounted(()=>{
  setTimeout(()=>{
    getMainContent()
  },0)
})


</script>

<template>
  <div class="doctorClass">
    <!-- 起始 -->
    <div class="doctorClass-top">
      <div>
        <img data-cfsrc="https://static.cmereye.com/imgs/2023/06/b58aca7e99ace3e7.jpg" 
          srcset="https://static.cmereye.com/imgs/2023/07/8e1ebf18405f8010.jpg 768w, https://static.cmereye.com/imgs/2023/06/b58aca7e99ace3e7.jpg"  
          alt="醫生小教室" 
          src="https://static.cmereye.com/imgs/2023/06/b58aca7e99ace3e7.jpg"/>
      </div>
      <div>
        <div>
          <p>
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_information_text.information_p_text1'
              )
            }}
          </p>
          <p>doctor videos</p>
        </div>
        <div>
          <div>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_information_text.information_p_text2'
                )
              }}
            </p>
          </div>
          <div>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_information_text.information_p_text3'
                )
              }}
            </p>
            <p>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_information_text.information_p_text4'
                )
              }}
            </p>
          </div>
        </div>
      </div>
      <svg
        width="9"
        height="144"
        viewBox="0 0 9 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-v-1d8b93bf=""
      >
        <path
          d="M1 1V143L7.5 130.5"
          stroke="#2958A3"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-v-1d8b93bf=""
        ></path>
      </svg>
    </div>
    <!-- 内容 -->
    <div id="doctorClassConetnt">
      <div v-for="(item, index) in mainContent" :key="index">
        <div>
          <div>{{ $t(item.title) }}</div>
          <div>
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.62378 1.35986L7.77577 7.51186L1.62378 13.6639"
                stroke="#8AD8DD"
                stroke-width="1.75771"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>{{ $t(item.doctor) }}</div>
          </div>
          <div>{{ $t(item.text) }}</div>
          <div>
            <a :href="item.link" target="_blank" rel="noopener noreferrer">{{
              $t(
                'pages.ophthalmic_information.ophthalmic_information_text.information_a_text1'
              )
            }}</a>
          </div>
        </div>
        <div><img :src="item.img" :alt="item.title" /></div>
      </div>
    </div>
    <!-- 可能是切数据 -->
    <div>
      <div @click="subNum">
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.15198 13.3037L0.999984 7.15172L7.15198 0.999723"
            stroke="#2958A3"
            stroke-width="1.75771"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>{{actPageNum}}/{{totalPageNum}}</div>
      <div @click="addNum">
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7.15199 7.15199L1 13.304"
            stroke="#2958A3"
            stroke-width="1.75771"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div>
      <PageInformation />
    </div>
    <div class="footerMenuPom">
      <PageFooterMenu />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.doctorClass {
  &::before {
    content: '';
    background: #f2f2f2;
    width: 80%;
    height: 780px;
    display: inline-block;
    z-index: 1;
    position: absolute;
    left: 0px;
    top: 98px;
  }
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    position: relative;

    & > div:nth-child(1) {
      & > img {
        width: 100%;
        max-width: 1494px;
        z-index: 5;
        top: 261px;
        left: 50%;
        transform: translateX(-50%);
        position: relative;
      }
    }
    & > div:nth-child(2) {
      z-index: 5;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      left: 0;
      right: 0;
      bottom: -100px;
      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 49.14px;
        line-height: 46px;
        text-align: center;
        letter-spacing: 0.2em;

        color: #ffffff;

        & > p:nth-child(2) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 500;
          font-size: 25.64px;
          line-height: 44px;
          text-align: center;
          letter-spacing: 0.1em;
          text-transform: uppercase;

          color: #8ad8dd;
        }
      }

      & > div:nth-child(2) {
        margin-top: 26px;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-child(1) {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 60px;
          text-align: right;
          letter-spacing: 0.3em;

          color: #ffffff;
        }

        & > div:nth-child(2) {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          text-align: center;
          letter-spacing: 0.3em;

          color: #ffffff;
        }
      }
    }

    & > svg {
      position: absolute;
      bottom: -350px;
      z-index: 5;
      left: 50%;
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    max-width: 1080px;
    margin: 388px auto 0;
    & > div {
      max-width: 1163px;
      margin-bottom: 70px;
      background: #f2f2f2;
      min-height: 386px;
      position: relative;
      padding-left: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      & > div:nth-child(1) {
        width: 490px;
        display: flex;
        flex-direction: column;
        margin-right: 52px;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 24.608px;
        line-height: 44px;

        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #515151;

        & > div:nth-child(1) {
          padding-bottom: 2px;
          position: relative;
        }

        & > div:nth-child(1)::after {
          content: '';
          width: 65.04px;
          border-bottom: 1.75771px solid #8ad8dd;
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: 0;
        }

        & > div:nth-child(2) {
          display: flex;
          align-items: center;
          margin-top: 22px;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 17.5771px;
          line-height: 25px;

          & > svg {
            margin-right: 10px;
          }
        }

        & > div:nth-child(3) {
          margin-left: 30px;
          margin-top: 7.5px;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 13.1828px;
          line-height: 26px;

          text-align: justify;
          letter-spacing: 0.1em;
          text-indent: 30px;
          text-transform: uppercase;

          color: #232323;
        }

        & > div:nth-child(4) {
          cursor: pointer;
          background: #8ad8dd;
          width: 95px;
          height: 37.27px;
          margin-top: 18px;

          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 26px;

          text-align: center;
          letter-spacing: 0.1em;

          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      & > div:nth-child(2) {
        // position: absolute;
        right: 0;
        margin-right: 64px;
        margin-top: 39px;
        img{
          max-width: 410px;
        }
      }
    }

    & > div:nth-child(2n) {
      flex-direction: row-reverse;
      justify-content: center;

      & > div:nth-child(2) {
        right: 511px;
      }
    }
  }

  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto 256px;
    color: #2958a3;

    & > div:nth-child(2) {
      margin: 0 33px;
      font-family: 'Metropolis';
      font-style: normal;
      font-weight: 500;
      font-size: 18.6441px;
      letter-spacing: 0.5em;
    }

    & > div:nth-child(1),
    & > div:nth-child(3) {
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 768px) {
  .doctorClass {
    margin-bottom: 50px;
    &::before {
      width: calc(100% - 30px);
      height: 380px;
      top: 0;
    }
    & > div:nth-child(1) {
      margin-top: 78px;
      & > div:nth-child(1) {
        & > img {
          top: 0;
          left: 0;
          transform: none;
        }
      }
      & > div:nth-child(2) {
        bottom: 20px;
        & > div:nth-child(1) {
          font-size: 28px;
          line-height: 100%;
          & > p:nth-child(2) {
            font-size: 12px;
            line-height: 160%;
          }
        }
        & > div:nth-child(2) {
          margin-top: 20px;
          & > div:nth-child(1) {
            font-size: 16px;
            line-height: 160%;
          }
          & > div:nth-child(2) {
            font-size: 12px;
            line-height: 160%;
          }
        }
      }
      & > svg{
        bottom: -90px;
        transform: scale(0.5);
      }
    }
    & > div:nth-child(2) {
      width: calc(100% - 60px);
      margin: 100px auto 0;
      &>div{
        max-width: 100%;
        flex-direction: column;
        padding: 25px 20px 30px;
        & > div:nth-child(1) {
          width: 100%;
          margin-right: 0;
          font-size: 20px;
          line-height: 160%;
          & > div:nth-child(2) {
            font-size: 16px;
          }
          & > div:nth-child(3) {
            font-size: 14px;
            margin-left: 0;
          }
          & > div:nth-child(4) {
            font-size: 16px;
            margin: 18px auto 0;
          }
        }
        & > div:nth-child(2) {
          margin-right: 0;
          margin-top: 36px;
          img{
            width: 100%;
            max-width: 100%;
          }
        }
        &:last-child{
          margin-bottom: 30px;
        }
      }
      & > div:nth-child(2n) {
        flex-direction: column;
      }
    }
    & > div:nth-child(3) {
      justify-content: center;
    }
  }
}
</style>
