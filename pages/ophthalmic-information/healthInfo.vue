<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
// const { t } = useLang()
useHead(() => ({
  title: '健康資訊｜眼科資訊 | 香港希瑪眼科中心',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心有提供眼科健康資訊，講解不同的眼科知識，內容主要分為不同的系列﹕視在希瑪、希瑪小知識、護眼食物字典、放眼逐格睇、關你眼事。眼科資訊文章會提及與不同眼疾內容相關的護眼知識，眼科資訊文章提及多種眼疾知識，包括﹕白內障、青光眼、乾眼症、飛蚊症、結膜炎、黃斑病變、兒童斜視及弱視、眼表疾病、眼角膜疾病、視網膜脫落、眼眶、眼整形、眼腫瘤。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 眼科知識 眼科資訊 眼科保健 香港眼科 眼科醫生 眼科診所 眼疾 老人眼疾 眼睛疾病 眼科專科中心 眼科檢查 白內障 青光眼 乾眼症 飛蚊症 結膜炎 黃斑病變 兒童斜視及弱視 眼表疾病 眼角膜疾病 視網膜脫落 眼眶 眼整形 眼腫瘤 希瑪醫療集團 希瑪醫療 眼科服務',
    },
  ],
}))

const toLinkPage = (_data: any) => {
  // console.log(_data)
  window.location.href = `/ophthalmic-information/detail?id=${_data.id}`
}
let healthList = ref([
  {
    id: '',
    img: '',
    title: '',
    text: [],
    link: '',
    date: ''
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
  const { data }:any = await useFetch(`https://hkcmereye.com/api.php/list/194/page/${actPageNum.value}/num/4`)
  let res = JSON.parse(data.value)
  // console.log(res)
  totalPageNum.value = Math.ceil(res.rowtotal / 4)
  healthList.value = res.data.map((item:any) => {
    let date = new Date(item.date);
    let y = date.getFullYear();
    let MM:any = date.getMonth() + 1;
    MM = MM < 10 ? ('0' + MM) : MM;
    let d = date.getDate();
    return {
      id: item.id,
      img: `https://hkcmereye.com${item.ico}`,
      title: item.title,
      text: [item.description],
      link: `/ophthalmic-information/detail?id=${item.id}`,
      date: y+'-'+MM+'-'+d
    }
  })
  loading.close()
}

const subNum = () => {
  if(actPageNum.value > 1){
    actPageNum.value --
    sessionStorage.setItem('healthInfoPage',JSON.stringify(actPageNum.value))
    getMainContent()
  }
}

const addNum = () => {
  if(actPageNum.value < totalPageNum.value){
    actPageNum.value ++
    sessionStorage.setItem('healthInfoPage',JSON.stringify(actPageNum.value))
    getMainContent()
  }
}

onMounted(()=>{
  setTimeout(()=>{
    actPageNum.value = Number(sessionStorage.getItem('healthInfoPage')) || 1
    getMainContent()
  },0)
})

</script>

<template>
  <div>
    <div class="healthInfo">
      <div>
        <div>
          <div>
            <div>
              {{
                $t(
                  'pages.ophthalmic_information.ophthalmic_message_text.message_text1'
                )
              }}
            </div>
            <div>
              <div>Health topics</div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/30b46ae600698254.png"
                />
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/06/5e6b4f26cb2593f4.png"
                />
              </div>
            </div>
          </div>
          <img data-cfsrc="https://static.cmereye.com/imgs/2023/06/59966d0b8622f785.png" 
            srcset="https://static.cmereye.com/imgs/2023/07/bcfa01146d3bc4d6.jpg 768w, https://static.cmereye.com/imgs/2023/06/59966d0b8622f785.png"  
            alt="健康資訊" 
            src="https://static.cmereye.com/imgs/2023/06/59966d0b8622f785.png"/>
        </div>
        <div><span></span> BLOG</div>
        <div>
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
          {{
            $t(
              'pages.ophthalmic_information.ophthalmic_message_text.message_text2'
            )
          }}
        </div>
        <div>
          {{
            $t(
              'pages.ophthalmic_information.ophthalmic_message_text.message_text3'
            )
          }}
        </div>
      </div>
    </div>
    <div class="content_health">
      <div
        v-for="(item, index) in healthList"
        :key="index"
        @click="toLinkPage(item)"
      >
        <div>
          <img :src="item.img" :alt="item.title" />
          <div>{{ item.date }}</div>
        </div>
        <div>
          <div>{{ $t(item.title) }}</div>
          <div>
            <div v-for="(ele, i) in item.text" :key="i">{{ $t(ele) }}</div>
          </div>
          <div>
            {{
              $t(
                'pages.ophthalmic_information.ophthalmic_message_text.message_text4'
              )
            }}
          </div>
        </div>
      </div>
    </div>
    <!-- 预计分页 -->
    <div class="paging">
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
  </div>
</template>
<style lang="scss" scoped>
.healthInfo {
  width: 100vw;
  position: relative;
  &::before{
    content: '';
    background:#f1f1f1;
    position: absolute;
    top: 315px;
    left: 0;
    height: 644px;
    width: 100%;
  }
  & > div:nth-child(1) {
    width: 100%;
    padding: 284px 0 0;
    position: relative;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    & > div:nth-child(1) {
      position: relative;
      width: 100%;
      & > div:nth-child(1) {
        position: relative;
        z-index: 2;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 62.14px;
        line-height: 1;
        letter-spacing: 0.2em;
        color: #3e3a39;
        align-items: center;

        & > div:nth-child(2) {
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 700;
          font-size: 44.48px;
          line-height: 100%;
          letter-spacing: 0.023em;
          text-transform: uppercase;
          margin-top: 20px;
          color: #ffffff;
          div:first-child{
            margin-left: -6px;
          }
          div:last-child{
            margin-top: 10px;
          }
        }
      }
      &>img{
        position: relative;
        z-index: 1;
        margin-left: 25%;
        margin-top: -56px;
      }
    }

    & > div:nth-child(2) {
      & > span {
        border-top: 2px solid;
        width: 121px;
        display: inline-block;
      }

      position: absolute;
      bottom: 80px;
      left: 10%;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 46px;
      text-align: center;
      letter-spacing: 0.2em;
      color: #b7b7b7;
      transform: rotate(90deg);
    }

    & > div:nth-child(3) {
      position: absolute;
      left: 50%;
      bottom: -300px;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;
    position: relative;
    width: 100%;
    max-width: 1080px;
    margin-left: calc((100% - 1080px)/2 + 200px);
    margin-top: -80px;
    & > div:nth-child(1) {
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 1;
      text-align: right;
      letter-spacing: 0.3em;
      color: #2958a3;
    }

    & > div:nth-child(2) {
      margin-top: 42px;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 1;
      text-align: center;
      letter-spacing: 0.3em;
      color: #8ad8dd;
    }
  }
}

.content_health {
  margin-top: 403px;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > div {
    cursor: pointer;
    width: 1120px;
    background: #f2f2f2;
    margin-bottom: 61px;

    display: flex;
    align-items: center;
    padding: 38px 33px 38px 52px;
    position: relative;
    & > div:nth-child(1) {
      width: 321px;
      min-height: 321px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 40px;
      position: relative;

      & > div {
        position: absolute;
        bottom: -21px;
        left: -36px;
        font-family: 'Metropolis';
        font-style: normal;
        font-weight: 500;
        font-size: 17.7815px;
        line-height: 2.4;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        color: #8ad8dd;
        width: 141px;
        height: 38px;
        background: #ffffff;
      }
    }

    & > div:nth-child(2) {
      width: 650px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      & > div:nth-child(1) {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 28.61px;
        line-height: 44px;
        letter-spacing: 0;
        color: #515151;
        position: relative;
        padding-bottom: 20px;
      }

      & > div:nth-child(1)::after {
        content: '';
        border-bottom: solid #8ad8dd;
        width: 312px;
        height: 1.75771px;
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 0;
      }

      & > div:nth-child(2) {
        margin-top: 31px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 350;
        font-size: 13.1828px;
        line-height: 26px;
        letter-spacing: 0.1em;
        text-indent: 30px;
        text-transform: uppercase;

        color: #232323;

        & > div:nth-child(2) {
          text-indent: 0;
        }
      }

      & > div:nth-child(3) {
        position: absolute;
        bottom: 38px;
        right: 38px;
        width: 95px;
        height: 37.27px;
        background: #8ad8dd;

        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 500;
        font-size: 13.1538px;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 0.1em;
        color: #ffffff;
        cursor: pointer;
      }
    }
  }
}

.paging {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #2958a3;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto 256px;
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
@media screen and (max-width: 768px) {
  .healthInfo {
    &::before{
      height: 300px;
      top: 0;
      left: 30px;
      width: calc(100% - 30px);
    }
    & > div:nth-child(1){
      margin-top: 78px;
      padding: 0;
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          position: absolute;
          font-size: 26px;
          line-height: 160%;
          color: #ffffff;
          left: 40%;
          text-align: center;
          top: 100px;
          & > div:nth-child(2) {
            font-size: 18px;
            margin-top: 0;
            img{
              width: 148px;
              margin: 0 auto;
            }
            div:first-child{
              margin-left: 0px;
            }
            div:nth-of-type(2){
              opacity: .6;
            }
            div:last-child{
              margin-top: 5px;
              opacity: .3;
            }
          }
        }
        
        &>img{
          width: 70%;
          margin-left: 30%;
          margin-top: 0;
        }
      }
      & > div:nth-child(2) {
        bottom: 125px;
        left: 65px;
        transform-origin: left top;
        font-size: 16px;
      }
      & > div:nth-child(3) {
        transform: scale(.5);
        bottom: -90px;
        left: 60%;
      }
    }
    
    & > div:nth-child(2){
      position: relative;
      margin-left: 30px;
      margin-top: 40px;
      width: max-content;
      & > div:nth-child(1) {
        font-size: 20px;
      }
      & > div:nth-child(2) {
        font-size: 18px;
        margin-top: 5px;
      }
    }
  }
  .content_health {
    margin-top: 100px;
    &>div{
      width: calc(100% - 60px);
      padding: 25px 20px;
      flex-direction: column-reverse;
      & > div:nth-child(1) {
        width: 100%;
        margin-right: 0;
        min-height: 200px;
        margin-top: 28px;
        &>div{
          bottom: 0;
          left: 0;
          font-size: 14px;
          padding-top: 5px;
          height: auto;
          line-height: 2;
          width: 100px;
          letter-spacing: 0.03;
        }
        img{
          width: 80%;
          margin: 0 auto;
        }
      }
      & > div:nth-child(2) {
        width: 100%;
        & > div:nth-child(1) {
          font-size: 18px;
          line-height: 1.6;
          padding-bottom: 10px;
        }
        & > div:nth-child(1)::after {
          width: 140px;
          height: 1.5px;
          border: none;
          background: #8ad8dd;
        }
        & > div:nth-child(2) {
          margin-top: 26px;
        }
        & > div:nth-child(3) {
          position: initial;
          margin: 25px auto 0;
        }
      }
    }
  }
  .paging{
    justify-content: center;
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .healthInfo {
    margin: auto;
  }
}
</style>
