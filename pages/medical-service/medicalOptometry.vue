<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.medical_service.medicalOptometry_head'),
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心旗下的視光中心，提供成人眼睛檢查、兒童眼睛檢查、近視控制檢查等。兒童眼睛檢查方面，3至6歲兒童建議定期進行眼睛檢查，以及早發現和治療弱視、斜視等問題。6至18歲青少年則可進行近視控制檢查，以及早控制近視度數。希瑪視光中心提供兒童近視控制方案，包括角膜矯形術、每日即棄近視控制隱形眼鏡、兒童近視控制鏡片（DIMS鏡片），有助控制兒童近視加深。成人眼睛檢查主要為及早發現白內障、黃斑病變等問題。如需了解眼睛檢查詳細內容和相關費用，歡迎立即查詢。',
    },
    {
      name: 'keywords',
      content:
        '視光中心 成人眼睛檢查 兒童眼睛檢查 近視控制檢查 弱視 斜視  角膜矯形術 近視控制隱形眼鏡 兒童近視控制鏡片 DIMS鏡片 眼睛檢查 詳細內容 OK鏡 眼科醫生 眼科診所 眼科中心 希瑪眼科中心 希瑪眼科 希瑪 眼疾 眼睛疾病  眼睛檢查 林順潮 阿托品眼藥水 MyoVision鏡片 眼科檢查 眼檢查驗眼中心 驗眼 眼睛健康檢查 香港驗眼中心 眼科檢查收費 矯視隱形眼鏡 ok lens 驗眼服務 驗眼費用 驗眼價錢 驗眼收費',
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

const locale = useState<string>('locale.setting')
// 传递背景色
const backgd = [
  '#bcd09c;',
  '-webkit-linear-gradient(to right, #ddeac8, #bcd09c);',
  'linear-gradient(to right, #ddeac8, #bcd09c);',
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: 'pages.medical_service.medicalOptometry_con.navLists.name1',
    anchorLink: '/medical-service/medicalOptometry#brief_introduction',
  },
  {
    anchorName: 'pages.medical_service.medicalOptometry_con.navLists.name2',
    anchorLink: '/medical-service/medicalOptometry#cause',
  }
]
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}
const toVision = () =>{
  window.open(
    'https://api.whatsapp.com/send?phone=85269180511&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'
  )
}
// 拨打电话
const callTel = () => {
  location.href = 'tel: +852 3956 2025'
}
const toCmer = () => {
  location.href = 'https://www.cmervision.com/'
}
const goVision = () => {
  location.href = 'https://www.cmervision.com/myopia-control-programme-2/'
}
const bannerData = {
  pcSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/醫學驗光配鏡1.png',
  mbSrc: 'https://static.cmereye.com/static/hkcmereye/bannerzip/醫學驗光配鏡2.png',
  cnName: '醫學驗光配鏡',
  enName: 'MYOPIA CONTROL AND OPHTHALMIC SERVICES',
  textColor: '#B9D38F',
  pageName: 'medicalOptometry'
}
</script>

<template>
  <div>
    <PageServiceBanner :bannerData="bannerData" />
    <div class="medicalOptometry-nav">
      <serviceNav :arrData="serviceNavigation" :pageName="'medicalOptometry'" />
    </div>
    <div class="medicalOptometry_nav" :class="{'medicalOptometryNav-en': locale === 'en'}">
      <div id="brief_introduction">
        <div>
          <div class="medicalOptometry_text_p_span">
            <p>
              {{$t('pages.medical_service.medicalOptometry_con.introduction.p1')}}
            </p>
            <p>
              {{$t('pages.medical_service.medicalOptometry_con.introduction.p2')}}
              <span style="cursor: pointer;" @click="toCmer">{{$t('pages.medical_service.medicalOptometry_con.introduction.span1')}}</span>{{$t('pages.medical_service.medicalOptometry_con.introduction.span2')}}
              <span>{{$t('pages.medical_service.medicalOptometry_con.introduction.span3')}}</span>
              {{$t('pages.medical_service.medicalOptometry_con.introduction.span4')}}
              <span>{{$t('pages.medical_service.medicalOptometry_con.introduction.span5')}}</span> {{$t('pages.medical_service.medicalOptometry_con.introduction.span6')}}
            </p>
          </div>
          <div>
            <img src="https://static.cmereye.com/imgs/2023/06/d9926065ec859a5a.png" alt="" srcset="" />
          </div>
        </div>
        <div @click="toVision">
          <div>{{$t('pages.medical_service.medicalOptometry_con.introduction.btn1')}}</div>
          <div>{{$t('pages.medical_service.medicalOptometry_con.introduction.btn2')}}</div>
        </div>
      </div>
      <div id="cause">
        <div>{{$t('pages.medical_service.medicalOptometry_con.cause.name')}}</div>
        <div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/ba743f1d36fe18f5.png" alt="" srcset="" />
            </div>
            <div>
              <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title1')}}</div>
              <div class="medicalOptometry_text_p_span">
                {{$t('pages.medical_service.medicalOptometry_con.cause.span1')}}
              </div>
              <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="toVision">
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.text1')}}</div>
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn1')}}</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/b992cc721e68809f.png" alt="" srcset="" />
            </div>
            <div>
              <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title2')}}</div>
              <div class="medicalOptometry_text_p_span">
                {{$t('pages.medical_service.medicalOptometry_con.cause.span2')}}
              </div>
              <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="toVision">
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.text2')}}</div>
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn2')}}</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/21855ee228f6d562.png" alt="" srcset="" />
            </div>
            <div>
              <div></div>
              <div class="medicalOptometry_text_p_span">
                {{$t('pages.medical_service.medicalOptometry_con.cause.span3')}}
              </div>
              <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="goVision">
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn3_1')}}</div>
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn3_2')}}</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/8cc2d1658a7cb0f6.png" alt="" srcset="" />
            </div>
            <div>
              <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title4')}}</div>
              <div class="medicalOptometry_text_p_span">
                {{$t('pages.medical_service.medicalOptometry_con.cause.span4')}}
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/985c3fa5d6eadb1d.png" alt="" srcset="" />
            </div>
            <div>
              <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title5')}}</div>
              <div class="medicalOptometry_text_p_span">
                {{$t('pages.medical_service.medicalOptometry_con.cause.span5')}}
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="goWhatsApp">
          <div>{{$t('pages.medical_service.medicalOptometry_con.btn1')}}</div>
          <div>{{$t('pages.medical_service.medicalOptometry_con.btn2')}}</div>
        </div>
      </div>
      <div id="cause-mb">
        <div>&nbsp;&nbsp;{{$t('pages.medical_service.medicalOptometry_con.cause.name')}}</div>
        <div>
          <div>
            <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title1')}}</div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/5e23052605a6a862.png  " alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  {{$t('pages.medical_service.medicalOptometry_con.cause.span1')}}
                </div>
              </div>
              <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="goWhatsApp">
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.text1')}}</div>
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn1')}}</div>
              </div>
            </div>
          </div>
          <div>
            <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title2')}}</div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/143a8a47246f1fb5.png  " alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  {{$t('pages.medical_service.medicalOptometry_con.cause.span2')}}
                </div>
              </div>
              <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="goWhatsApp">
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.text2')}}</div>
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn2')}}</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/cc9aa29e72e2fe1f.png" alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  {{$t('pages.medical_service.medicalOptometry_con.cause.span3')}}
                </div>
              </div>
              <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="goVision">
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn3_1')}}</div>
                <div>{{$t('pages.medical_service.medicalOptometry_con.cause.btn3_2')}}</div>
              </div>
            </div>
          </div>
          <div>
            <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title4')}}</div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/3379ff699f2869d0.png  " alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  {{$t('pages.medical_service.medicalOptometry_con.cause.span4')}}
                </div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div>
            <div>{{$t('pages.medical_service.medicalOptometry_con.cause.title5')}}</div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/3e8d41f263dc003f.png" alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  {{$t('pages.medical_service.medicalOptometry_con.cause.span5')}}
                </div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="medicalOptometry_btn_bg" :class="{'Btn-en': locale === 'en'}" @click="goWhatsApp">
          <div>{{$t('pages.medical_service.medicalOptometry_con.btn1')}}</div>
          <div>{{$t('pages.medical_service.medicalOptometry_con.btn2')}}</div>
        </div>
      </div>
    </div>
    <div>
    </div>
    <!-- 表单 -->
    <div class="fromTable">
      <FormFooterInfo :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
        :co="`color:${'#bcd09c;'}`" />
    </div>
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
@media screen and(min-width: 768px) {
  // 隐藏手机版布局
  #cause-mb {
    display: none;
  }
}
@import url('../../assets/font/font.css');
.medicalOptometry-nav{
  margin-top: 30px;
}
.medicalOptometry_nav {
  max-width: 1200px;
  transform: scale(0.9);
  transform-origin: center top;
  margin: 100px auto -40%;
  &>#brief_introduction {
    margin-bottom: 200px;
    &>div:nth-child(1) {
      display: flex;
      justify-content: space-between;
      margin-bottom: 90px;
      &>div:nth-child(1) {
        width: 670px;
        line-height: 1.8;
        &>p {
          text-indent: 50px;
          &>span {
            color: #8ca761;
          }
        }
        &>p:nth-child(2) {
          margin-top: 80px;
        }
      }
    }
    &>div:nth-child(2) {
      width: 629px;
      height: 120px;
      border-radius: 30px;
      border: solid 2px #bcd09c;
      margin: auto;
      display: flex;
      align-items: center;
      font-family: 'NotoSansHK-Medium';
      font-size: 40px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 50px;
      letter-spacing: 0px;
      cursor: pointer;
      &>div:nth-child(1) {
        width: 290px;
        height: 120px;
        background-blend-mode: normal, normal;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        position: relative;
        overflow: hidden;
        -webkit-backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        text-shadow: 0 2px 5px #aac086;
        &::before {
          content: "";
          position: absolute;
          top: -100%;
          left: -100%;
          bottom: -100%;
          right: -100%;
          background: linear-gradient(45deg,  #b1d35f 0%, #aedbd8 100%);
          background-size: 100% 100%;
          animation: bgposition 5s infinite linear alternate;
          z-index: -1;
        }
      }
      &>div:nth-child(2) {
        font-size: 40px;
        line-height: 50px;
        letter-spacing: 0px;
        color: #8ca761;
        margin-left: 53px;
      }
    }
  }
  &>#cause {
    &>div:nth-child(1) {
      margin: 100px auto 75px;
      font-family: 'NotoSansHK-Bold';
      font-size: 42px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 52px;
      letter-spacing: 2px;
      color: #8ca761;
      text-align: center;
      width: fit-content;
      padding: 41px 66px;
      border-radius: 10px;
      border: solid 3px #bcd09c;
      position: relative;
    }
    &>div:nth-child(1)::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -5px;
      width: 5px;
      height: 40px;
      transform: translateY(-50%);
      background: #fff;
    }
    &>div:nth-child(1)::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -5px;
      width: 5px;
      height: 40px;
      transform: translateY(-50%);
      background: #fff;
    }
    &>div:nth-child(2) {
      &>div {
        padding: 100px 0;
        display: flex;
        justify-content: space-between;
        &>div:nth-child(2) {
          width: 675px;
          &>div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 38px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: #8ca761;
            display: flex;
            align-items: center;
          }
          &>div:nth-child(1)::before {
            content: '';
            width: 6px;
            display: inline-block;
            height: 56px;
            background-color: #ccdfae;
            border-radius: 3px;
            margin-right: 36px;
          }
          &>div:nth-child(2) {
            margin-top: 50px;
            margin-bottom: 60px;
            line-height: 46px;
          }
        }
      }
      &>div:nth-child(even) {
        border-top: 1px dashed #bcd09c;
        border-bottom: 1px dashed #bcd09c;
      }
      &>div:nth-child(3) {
        &>div:nth-child(2) {
          &>div:nth-child(1)::before {
            content: none;
          }
          &>div:nth-child(2) {
            margin-top: 0;
          }
        }
      }
    }
    &>div:nth-child(3) {
      margin: 60px auto 462px;
    }
  }
  &.medicalOptometryNav-en{
    &>#brief_introduction {
      &>div:nth-child(2) {
        width: max-content;
        padding-right: 30px;
      }
    }
  }
}
// 边框按钮样式
.medicalOptometry_btn_bg {
  cursor: pointer;
  font-family: 'NotoSansHK-Bold';
  font-size: 34px;
  line-height: 50px;
  letter-spacing: 0px;
  color: #8ca761;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 100px;
  border-radius: 30px;
  border: solid 2px #bcd09c;
  &>div:nth-child(1) {
    padding: 33px 60px;
  }
  &>div:nth-child(2) {
    width: fit-content;
    min-width: 223px;
    height: 100%;
    background-blend-mode: normal, normal;
    border-radius: 30px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 33px 47px;
    position: relative;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    text-shadow: 0 2px 5px #aac086;
    &::before {
      content: "";
      position: absolute;
      top: -100%;
      left: -100%;
      bottom: -100%;
      right: -100%;
      background: linear-gradient(45deg,  #b1d35f 0%, #aedbd8 100%);
      background-size: 100% 100%;
      animation: bgposition 5s infinite linear alternate;
      z-index: -1;
    }
  }
  &.Btn-en{
    font-size: 26px;
    line-height: 1.6;
    text-align: center;
  }
}
@keyframes bgposition {
    0% {
        transform: translate(30%, 30%);
    }
    25% {
        transform: translate(30%, -30%);
    }
    50% {
        transform: translate(-30%, -30%);
    }
    75% {
        transform: translate(-30%, 30%);
    }
    100% {
        transform: translate(30%, 30%);
    }
}
.medicalOptometry_text_p_span {
  font-family: 'Noto Sans HK';
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #515151;
}
.medicalOptometry_title_text {
  font-family: 'NotoSansHK-Bold';
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 48px;
  letter-spacing: 0px;
  color: #d37f66;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.medicalOptometry_title_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: auto;
  width: 580px;
  height: 140px;
  border-radius: 20px;
  background-image: linear-gradient(-90deg, #bcd09c 0%, #ffd6c1 100%),
    linear-gradient(#eda2a6, #eda2a6);
  background-blend-mode: normal, normal;
  font-family: 'Noto Sans HK';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;
}
.fromTable {
  margin-top: -28%;
}
@media screen and (max-width: 768px) {
  .medicalOptometry-nav{
    margin-top: -80px;
  }
  .medicalOptometry_nav {
    max-width: 100%;
    margin-top: 0;
    &>#brief_introduction {
      margin-bottom: 0;
      &>div:nth-child(1) {
        flex-direction: column;
        &>div:nth-child(1) {
          width: 100%;
          color: #BEAD9C;
          font-family: 'Noto Sans HK';
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.8;
          margin-bottom: 40px;
          &>p {
            text-indent: 0;
            &>span {
              letter-spacing: -1px;
              color: #8ca761;
            }
          }
          &>p:nth-child(2) {
            margin-top: 40px;
          }
        }
      }
      &>div:nth-child(2) {
        width: 100%;
        height: 70px;
        padding-right: 28px;
        font-size: 24px;
        line-height: 1.8;
        border-radius: 16px;
        &>div:nth-child(1) {
          width: 175.66px;
          height: 70px;
          border-radius: 16px;
        }
        &>div:nth-child(2) {
          font-size: 24px;
          line-height: 1.8;
          margin-left: 26px;
        }
      }
    }
    &>#cause {
      display: none;
    }
    &>#cause-mb {
      &>div:nth-child(1) {
        margin: 100px auto 15px;
        font-size: 24px;
        line-height: 1.8;
        letter-spacing: 0;
        padding: 16px 66px;
        border: 3px solid #afc58c;
        border-radius: 16px;
        color: #8CA761;
        font-family: 'Noto Sans HK';
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 1.6;
      }
      &>div:nth-child(1)::before {
        content: none;
      }
      &>div:nth-child(1)::after {
        content: none;
      }
      &>div:nth-child(2) {
        &>div {
          &>div:nth-child(1) {
            color: #8CA761;
            font-family: Noto Sans HK;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 1.6;
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          &>div:nth-child(1)::before {
            content: '';
            width: 3px;
            display: inline-block;
            height: 34px;
            background-color: #ccdfae;
            border-radius: 3px;
            margin-right: 6px;
          }
          &>div:nth-child(2) {
            width: 100%;
            &>div:nth-child(1) {
              display: flex;
              font-family: 'NotoSansHK-Bold';
              font-size: 38px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 52px;
              letter-spacing: 0px;
              color: #8ca761;
              display: flex;
              align-items: flex-start;
              margin-top: 22px;
              &>div:nth-child(1) {
                min-width: 125px;
              }
              &>div:nth-child(2) {
                color: #BEAD9C;
                font-family: 'Noto Sans HK';
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 1.6;
                margin-left: 12px;
              }
            }
            &>div:nth-child(2) {
              margin-top: 50px;
              margin-bottom: 0;
              line-height: 46px;
            }
          }
          padding: 50px 0;
          border-bottom: 1px dashed #BCD09C;
        }
        &>div:nth-child(4) {
          &>div:nth-child(2) {
            &>div:nth-child(2) {
              margin: 0;
            }
          }
        }
        &>div:last-child {
          padding-bottom: 0;
          border-bottom: none;
        }
        &>div:nth-child(3) {
          padding-top: 0;
          &>div:nth-child(1) {
            display: flex;
            flex-direction: column;
            &>div:nth-child(1) {
              width: auto;
              display: flex;
              margin-top: 48px;
              margin-bottom: 36px;
              &>div:nth-child(1) {
                min-width: 128px;
              }
              &>div:nth-child(2) {
                color: #BEAD9C;
                font-family: 'Noto Sans HK';
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 1.8;
                margin-left: 12px;
              }
            }
          }
          &>div:nth-child(1)::before {
            content: none;
          }
        }
      }
      &>div:nth-child(3) {
        margin: 60px auto 120px;
        font-size: 18px;
        font-weight: 500;
        &>div:first-child{
          padding: 13px 15px;
        }
        &>div:last-child{
          padding: 13px 15px;
          font-size: 20px;
        }
      }
    }
    &.medicalOptometryNav-en{
      &>#brief_introduction {
        &>div:nth-child(2) {
          max-width: 100%;
          text-align: center;
          &>div:nth-child(1) {
            line-height: 1.2;
          }
          &>div:nth-child(2) {
            line-height: 1.2;
          }
        }
      }
    }
  }
  .medicalOptometry_btn_bg {
    font-size: 22px;
    line-height: 1.8;
    letter-spacing: 0px;
    height: auto;
    border-radius: 18px;
    font-family: 'Noto Sans HK';
    &>div:nth-child(1) {
      padding: 8px 25px;
    }
    &>div:nth-child(2) {
      height: auto;
      min-width: auto;
      padding: 13px 20px;
      border-radius: 16px;
    }
    &.Btn-en{
      font-size: 16px;
      &>div:nth-child(1){
        line-height: 1.6;
      }
      &>div:nth-child(2){
        line-height: 1.6;
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .medicalOptometry_nav {
    margin-bottom: -20%;
  }
}
</style>
