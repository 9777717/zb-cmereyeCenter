<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '醫學驗光配鏡｜希瑪眼科｜醫療服務',
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
// 传递背景色
const backgd = [
  '#bcd09c;',
  '-webkit-linear-gradient(to right, #ddeac8, #bcd09c);',
  'linear-gradient(to right, #ddeac8, #bcd09c);',
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: '醫學驗光配鏡',
    anchorLink: '/medical-service/medicalOptometry#brief_introduction',
  },
  {
    anchorName: '原因',
    anchorLink: '/medical-service/medicalOptometry#cause',
  },
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
  location.href = 'tel://+(852) 3956 2025'
}
const toCmer = () => {
  location.href = 'https://www.cmervision.com/'
}
const goVision = () => {
  location.href = 'https://www.cmervision.com/myopia-control-programme-2/'
}
</script>

<template>
  <div>
    <div class="medicalOptometry_head">
      <div>
        <div>
          <div>醫學驗光配鏡</div>
          <div>MYOPIA CONTROL AND OPHTHALMIC SERVICES</div>
          <div>MYOPIA CONTROL AND OPHTHALMIC SERVICES</div>
          <div>MYOPIA CONTROL AND OPHTHALMIC SERVICES</div>
        </div>
      </div>
    </div>
    <div class="medicalOptometry-nav">
      <serviceNav :arrData="serviceNavigation" :pageName="'medicalOptometry'" />
    </div>
    <div class="medicalOptometry_nav">
      <div id="brief_introduction">
        <div>
          <div class="medicalOptometry_text_p_span">
            <p>
              現代人生活模式改變，每天花大量時間看電子螢幕，雙眼休息不足，容易加速眼睛老化，還造成各種視力甚至眼疾問題。我們相信預防勝於治療。為了預防眼疾，無論任何年齡，都需要定期進行眼睛健康檢查，保持良好視力和擁有健康眼睛。
            </p>
            <p>
              希瑪眼科中心旗下的視光中心──
              <span style="cursor: pointer;" @click="toCmer">希瑪眼科視光中心CMER VISION</span>，提供
              <span>成人眼睛檢查、兒童眼睛檢查、近視控制檢查</span>
              等，照顧不同客人的需要。在視光檢查後，如發現有任何眼疾先兆或問題，我們會立即轉介予
              <span>眼科專科醫生</span> 跟進，務求令患者得到最合適的治療。
            </p>
          </div>
          <div>
            <img src="https://static.cmereye.com/imgs/2023/06/d9926065ec859a5a.png" alt="" srcset="" />
          </div>
        </div>
        <div @click="toVision">
          <div>立即預約</div>
          <div>全面眼睛檢查</div>
        </div>
      </div>
      <div id="cause">
        <div>為何人生中不同階段都需要眼睛健康檢查？</div>
        <div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/ba743f1d36fe18f5.png" alt="" srcset="" />
            </div>
            <div>
              <div>3-6歲</div>
              <div class="medicalOptometry_text_p_span">
                這個階段的兒童大概能夠理解及配合許多眼科檢查，能夠在註冊視光師和眼科專科醫生指導下完成檢查。兒童能在這段時期透過定期檢查，及早發現和治療弱視、斜視，以及控制近視等。
              </div>
              <div class="medicalOptometry_btn_bg" @click="toVision">
                <div>3 - 6歲兒童眼睛檢查</div>
                <div>立即預約</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/b992cc721e68809f.png" alt="" srcset="" />
            </div>
            <div>
              <div>6-18歲</div>
              <div class="medicalOptometry_text_p_span">
                青少年時期的眼睛及身體發育較快，若用眼習慣不良，近視、散光等度數也增加得較快。定期檢查可觀察眼睛屈光度數的變化，及時控制近視等度數。
              </div>
              <div class="medicalOptometry_btn_bg" @click="toVision">
                <div>6-18歲兒童眼睛檢查</div>
                <div>立即預約</div>
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
                希瑪視光中心十分重視兒童近視控制。視力發育不良會影響孩子日後發展和眼睛健康。所以，希瑪視光中心十分關注學童近視率偏高的問題，並提供詳細眼睛檢查服務及針對性的兒童近視控制方案，包括︰角膜矯形術、每日即棄近視控制隱形眼鏡、兒童近視控制鏡片（DIMS鏡片、MyoVision鏡片），希望能助兒童把握控制近視的黃金治療期。
              </div>
              <div class="medicalOptometry_btn_bg" @click="goVision">
                <div>了解更多</div>
                <div>兒童近視控制方案</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/8cc2d1658a7cb0f6.png" alt="" srcset="" />
            </div>
            <div>
              <div>18-55歲</div>
              <div class="medicalOptometry_text_p_span">
                這時期的眼部檢查，主要針對家族有眼疾病史及患眼疾的高危人士，例如︰青光眼。除了常規眼科檢查外，還有相應的特殊檢查。如中高度近視及糖尿病患者應定期檢查眼底，及早發現眼疾。
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
              <div>55歲以上</div>
              <div class="medicalOptometry_text_p_span">
                隨著年齡增長，患上與年齡相關眼疾的機會也會增加，如白內障、老年黃斑病變等，透過眼底檢查能及早發現眼疾，需要時能及早治療。
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div class="medicalOptometry_btn_bg" @click="goWhatsApp">
          <div>18 - 55歲以上 成人眼睛檢查</div>
          <div>立即預約</div>
        </div>
      </div>
      <div id="cause-mb">
        <div>&nbsp;&nbsp;為何人生中不同階段都需要眼睛健康檢查？</div>
        <div>
          <div>
            <div>3-6歲</div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/5e23052605a6a862.png  " alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  這個階段的兒童大概能夠理解及配合許多眼科檢查，能夠在註冊視光師和眼科專科醫生指導下完成檢查。兒童能在這段時期透過定期檢查，及早發現和治療弱視、斜視，以及控制近視等。
                </div>
              </div>
              <div class="medicalOptometry_btn_bg" @click="goWhatsApp">
                <div>3 - 6歲兒童眼睛檢查</div>
                <div>立即預約</div>
              </div>
            </div>
          </div>
          <div>
            <div>6-18歲</div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/143a8a47246f1fb5.png  " alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  青少年時期的眼睛及身體發育較快，若用眼習慣不良，近視、散光等度數也增加得較快。定期檢查可觀察眼睛屈光度數的變化，及時控制近視等度數。
                </div>
              </div>
              <div class="medicalOptometry_btn_bg" @click="goWhatsApp">
                <div>6-18歲兒童眼睛檢查</div>
                <div>立即預約</div>
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
                  希瑪視光中心十分重視兒童近視控制。視力發育不良會影響孩子日後發展和眼睛健康。所以，希瑪視光中心十分關注學童近視率偏高的問題，並提供詳細眼睛檢查服務及針對性的兒童近視控制方案，包括︰角膜矯形術、每日即棄近視控制隱形眼鏡、兒童近視控制鏡片（DIMS鏡片、MyoVision鏡片），希望能助兒童把握控制近視的黃金治療期。
                </div>
              </div>
              <div class="medicalOptometry_btn_bg" @click="goVision">
                <div>了解更多</div>
                <div>兒童近視控制方案</div>
              </div>
            </div>
          </div>
          <div>
            <div>18-55歲</div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/3379ff699f2869d0.png  " alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  這時期的眼部檢查，主要針對家族有眼疾病史及患眼疾的高危人士，例如︰青光眼。除了常規眼科檢查外，還有相應的特殊檢查。如中高度近視及糖尿病患者應定期檢查眼底，及早發現眼疾。
                </div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
          <div>
            <div>55歲以上</div>
            <div>
              <div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/07/3e8d41f263dc003f.png" alt="" srcset="" />
                </div>
                <div class="medicalOptometry_text_p_span">
                  隨著年齡增長，患上與年齡相關眼疾的機會也會增加，如白內障、老年黃斑病變等，透過眼底檢查能及早發現眼疾，需要時能及早治療。
                </div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div class="medicalOptometry_btn_bg" @click="goWhatsApp">
          <div>18 - 55歲以上 成人眼睛檢查</div>
          <div>立即預約</div>
        </div>
      </div>
    </div>
    <div>
      <!-- <rightSidesNavigation :service-navigation="serviceNavigation" /> -->
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
  margin-top: 150px;
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
            letter-spacing: -1px;
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
        // background-image: linear-gradient(-90deg, #aac086 0%, #cde0af 100%),
        //   linear-gradient(#eda2a6, #eda2a6);
        background-blend-mode: normal, normal;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        position: relative;
        overflow: hidden;
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
    // background-image: linear-gradient(-90deg, #aac086 0%, #cde0af 100%),
    //   linear-gradient(#eda2a6, #eda2a6);
    background-blend-mode: normal, normal;
    border-radius: 30px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 33px 47px;
    position: relative;
    overflow: hidden;
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

// 头部样式
.medicalOptometry_head {
  &>div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    max-width: 1080px;
    margin: 100px auto 0;
    // margin-top: 100px;
    // margin-left: 40vw;

    &>div:nth-child(1) {
      &>div:nth-child(1) {
        font-family: 'NotoSansCJKtc-Bold';
        font-size: 119px;
        font-weight: Bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #bcd09c;
        z-index: 5;
        position: relative;
        top: -20px;
      }

      &>div:nth-child(2) {
        position: relative;
        z-index: 5;
        font-family: 'DINCondensed-Bold';
        font-size: 72px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: 0;
        color: #bcd09c;
        margin-top: 15px;
      }
       & > div:nth-child(3),& > div:nth-child(4) {
        font-family: 'DINCondensed-Bold';
        display: block;
        position: relative;
        z-index: 5;
        font-size: 72px;
        letter-spacing: 0;
        -webkit-text-stroke: 1.5px #bcd09c;
        color: transparent;
        clip-path: polygon(0 30%, 100% 30%, 100% 100% ,0 100%);
        transform: translateY(-35%);
      }
      & > div:nth-child(4){
        clip-path: polygon(0 55%, 100% 55%, 100% 100% ,0 100%);
        transform: translateY(-105%);
      }
      font-family: 'DINCondensed-Bold';
      font-size: 131px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 1.2;
      text-align: right;
      letter-spacing: 3px;
      color: #9cc4e2;
    }

    &>div:nth-child(1)::after {
      content: '';
      background: #f2f2f2;
      width: 40vw;
      height: 300px;
      position: absolute;
      top: 211px;
      right: 0;
    }

    &>div:nth-child(2) {
      position: relative;
      top: 0;
      left: -5px;

      &>img {
        position: relative;
        z-index: 5;
      }

      &>img:nth-child(1) {
        margin-bottom: 10px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .medicalOptometry_head {
    margin-top: 150px;
    margin-right: 40px;

    &>div:nth-child(1) {
      &>div:nth-child(1) {
        &>div:nth-child(1) {
          font-size: 45.916px;
        }

        &>div:nth-child(2) {
          font-size: 21.6px;
          margin-top: 0;
        }
        & > div:nth-child(3),& > div:nth-child(4) {
          font-size: 21.6px;
          -webkit-text-stroke: 1px #bcd09c;
          clip-path: polygon(0 0, 100% 0, 100% 50% ,0 50%);
          transform: translateY(-20%);
        }
        & > div:nth-child(4) {
          clip-path: polygon(0 0, 100% 0, 100% 40% ,0 40%);
          transform: translateY(-73%);
        }
      }

      &>div:nth-child(1)::after {
        width: 50%;
        height: 200px;
        top: 190px;
      }

      &>div:nth-child(2) {
        width: 86.2%;
      }
    }
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
      // padding-top: 13px;
    }

    &>div:nth-child(2) {
      height: auto;
      min-width: auto;
      padding: 13px 20px;
      border-radius: 16px;
    }
  }

}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .medicalOptometry_head {
    &>div:nth-child(1) {
      // margin-left: 50vw;
    }
  }

  .medicalOptometry_nav {
    margin-bottom: -20%;
  }

  .fromTable {
    // margin-top: -15%;
  }
}
</style>
