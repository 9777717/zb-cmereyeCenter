<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '阿托品滴眼液｜希瑪眼科｜醫療服務',
}))
// 传递背景色
const backgd = [
  '#99d3dd;',
  '-webkit-linear-gradient(to right, #e3f8fc, #99d3dd);',
  'linear-gradient(to right, #e3f8fc, #99d3dd);',
]
// 内部导航
const serviceNavigation = [
  {
    anchorName:
      'pages.medical_service.atropine_serviceNavigation.serviceNavigation_anchorName1',
    anchorLink: '/medical-service/atropine#introduce',
  },
  {
    anchorName:
      'pages.medical_service.atropine_serviceNavigation.serviceNavigation_anchorName2',
    anchorLink: '/medical-service/atropine#effect',
  },
  {
    anchorName:
      'pages.medical_service.atropine_serviceNavigation.serviceNavigation_anchorName3',
    anchorLink: '/medical-service/atropine#benefit',
  },
  {
    anchorName:
      'pages.medical_service.atropine_serviceNavigation.serviceNavigation_anchorName4',
    anchorLink: '/medical-service/atropine#congruency',
  },
  {
    anchorName:
      'pages.medical_service.atropine_serviceNavigation.serviceNavigation_anchorName5',
    anchorLink: '/medical-service/atropine#matters',
  },
  {
    anchorName:
      'pages.medical_service.atropine_serviceNavigation.serviceNavigation_anchorName6',
    anchorLink: '/medical-service/atropine#method',
  },
]
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=咨询阿托品眼藥水',
    '_blank'
  )
}
</script>

<template>
  <div class="atropine">
    <div class="atropine_head">
      <div>
        <div>
          <div>
            {{ $t('pages.medical_service.atropine_text.atropine_text1') }}
          </div>
          <div>ATROPINE EYE DROPS</div>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/06/10f1717cd6906298.png"
          />
          <img
            src="https://static.cmereye.com/imgs/2023/06/527dfa1a9d012d5b.png"
          />
        </div>
      </div>
    </div>
    <div class="atropine_nav">
      <div id="introduce">
        <div class="atropine_title_text">
          {{ $t('pages.medical_service.atropine_text.atropine_title1_text1') }}
        </div>
        <div>
          <div>
            <p>
              {{ $t('pages.medical_service.atropine_text.atropine_title1_p1') }}
              <span class="up_bid">1</span>
              {{ $t('pages.medical_service.atropine_text.atropine_title1_p2') }}
              <span>
                {{
                  $t(
                    'pages.medical_service.atropine_text.atropine_title1_span1'
                  )
                }}</span
              >
              <span>
                {{
                  $t(
                    'pages.medical_service.atropine_text.atropine_title1_span2'
                  )
                }}</span
              >
            </p>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/5974955c8c92b875.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/38efdda5cb231155.png"
              alt=""
            />
            <img
              src="https://static.cmereye.com/imgs/2023/06/ffc7c17a1db82cb1.png"
              alt=""
            />
            <img
              src="https://static.cmereye.com/imgs/2023/06/e90e688e9ad179b6.png"
              alt=""
            />
            <img
              src="https://static.cmereye.com/imgs/2023/06/e28eccacc0101197.png"
              alt=""
            />
          </div>
          <div>
            {{
              $t('pages.medical_service.atropine_text.atropine_title1_text2')
            }}
          </div>
        </div>
      </div>
      <div id="effect">
        <div class="atropine_title_text">
          {{ $t('pages.medical_service.atropine_text.atropine_title2_text2') }}
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/c6f1efe65818cbf7.png"
              alt=""
            />
          </div>
          <div>
            <p>
              {{ $t('pages.medical_service.atropine_text.atropine_title2_p1')
              }}<span class="up_bid">2</span>
              {{ $t('pages.medical_service.atropine_text.atropine_title2_p2') }}
            </p>
            <p>
              {{ $t('pages.medical_service.atropine_text.atropine_title2_p3')
              }}<span class="up_bid">3</span
              >{{
                $t('pages.medical_service.atropine_text.atropine_title2_p4')
              }}
              <span>{{
                $t('pages.medical_service.atropine_text.atropine_title2_span1')
              }}</span
              ><span>{{
                $t('pages.medical_service.atropine_text.atropine_title2_span2')
              }}</span>
            </p>
          </div>
        </div>
      </div>
      <div id="benefit">
        <div class="atropine_title_text">
          {{ $t('pages.medical_service.atropine_text.atropine_title3_text3') }}
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/22f52a2cd4375972.png"
              alt=""
            />
            <div>
              >{{
                $t('pages.medical_service.atropine_text.atropine_title3_p1')
              }}
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/7e6f87e0e87fa03b.png"
              alt=""
            />
            <div>
              >{{
                $t('pages.medical_service.atropine_text.atropine_title3_p2')
              }}
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/e8f9777b29a81b26.png"
              alt=""
            />
            <div>
              <span
                >>{{
                  $t('pages.medical_service.atropine_text.atropine_title3_p3_1')
                }}</span
              >>{{
                $t('pages.medical_service.atropine_text.atropine_title3_p3_2')
              }}
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/cc985146128cd086.png"
              alt=""
            />
            <div>
              >{{
                $t('pages.medical_service.atropine_text.atropine_title3_p4')
              }}
            </div>
          </div>
        </div>
      </div>
      <div id="congruency">
        <div class="atropine_title_text">
          {{ $t('pages.medical_service.atropine_text.atropine_title4_text4') }}
        </div>
        <div>
          <div>
            <div>1</div>
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title4_p1') }}
            </div>
          </div>
          <div>
            <div>2</div>
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title4_p2') }}
            </div>
          </div>
          <div>
            <div>3</div>
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title4_p3') }}
            </div>
          </div>
          <div>
            <div>4</div>
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title4_p4') }}
            </div>
          </div>
        </div>
      </div>
      <div id="matters">
        <div class="atropine_title_text">
          {{ $t('pages.medical_service.atropine_text.atropine_title5_text5') }}
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/8d3b7b0927abdb0f.png"
              alt=""
            />
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title5_p1') }}
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/5735636447fd5cfc.png"
              alt=""
            />
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title5_p2') }}
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/4eea04dbe4e4b1f1.png"
              alt=""
            />
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title5_p3')
              }}<span>{{
                $t('pages.medical_service.atropine_text.atropine_title5_span1')
              }}</span>
              <span>{{
                $t('pages.medical_service.atropine_text.atropine_title5_span2')
              }}</span>
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/f840c8d3291767f8.png"
              alt=""
            />
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title5_p4') }}
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/21fd778043f6cfcb.png"
              alt=""
            />
            <div>
              {{ $t('pages.medical_service.atropine_text.atropine_title5_p5') }}
            </div>
          </div>
        </div>
      </div>
      <div id="method">
        <div class="atropine_title_text">
          {{ $t('pages.medical_service.atropine_text.atropine_title6_text6') }}
        </div>
        <div>
          <div>
            <div>
              <div>
                {{
                  $t('pages.medical_service.atropine_text.atropine_title6_p1')
                }}
              </div>
              <div>
                {{ $t('pages.medical_service.atropine_text.atropine_title6_p2')
                }}<span>{{
                  $t(
                    'pages.medical_service.atropine_text.atropine_title6_span1'
                  )
                }}</span>
                {{
                  $t('pages.medical_service.atropine_text.atropine_title6_p3')
                }}
              </div>
            </div>
            <div>
              <div>
                {{
                  $t('pages.medical_service.atropine_text.atropine_title6_p4')
                }}
              </div>
              <div>
                {{
                  $t('pages.medical_service.atropine_text.atropine_title6_p5')
                }}
              </div>
            </div>
          </div>
          <div>
            {{ $t('pages.medical_service.atropine_text.atropine_title6_p6') }}
          </div>
          <div class="atropine_title_btn" @click="goWhatsApp">
            {{ $t('pages.medical_service.atropine_text.atropine_title6_btn') }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <rightSidesNavigation :service-navigation="serviceNavigation" />
    </div>
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#99d3dd;'}`"
    />
  </div>
</template>
<style lang="scss" scoped>
.atropine_nav {
  max-width: 1280px;
  margin: auto;
  margin-top: 138px;

  & > #introduce {
    margin-bottom: 264px;

    & > div:nth-child(2) {
      margin-top: 100px;
      display: flex;
      justify-content: space-between;

      & > div:nth-child(1) {
        width: 737px;

        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 48px;
        letter-spacing: 0px;
        color: #7e9da3;

        text-indent: 50px;
        letter-spacing: 0;
        text-align: justify;

        & > p {
          & > span {
            font-family: 'NotoSansHK-Medium';
            font-weight: 550;
          }

          & > span:nth-child(2) {
            letter-spacing: -1px;
          }
        }
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(1) {
        margin-top: 165px;
        padding: 0 182px;
        display: flex;
        justify-content: space-between;
      }

      & > div:nth-child(2) {
        margin-top: 48px;
        font-family: 'NotoSansHK-Regular';
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 48px;
        letter-spacing: 0px;
        color: #999999;
        text-align: center;
      }
    }
  }

  & > #effect {
    margin-bottom: 200px;

    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      margin-top: 110px;
      padding: 104px 50px;
      box-shadow: 0px 0px 10px 8px #5151518f;

      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 759px;

        & > p {
          text-indent: 50px;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 50px;
          letter-spacing: 0px;
          color: #777777;
          text-align: justify;
        }

        & > p:nth-child(2) {
          letter-spacing: -1px;

          & > span:nth-child(2) {
            font-family: 'NotoSansHK-Medium';
            font-size: 24px;
            font-weight: bold;
            color: #555555;
          }
        }
      }
    }
  }

  & > #benefit {
    margin-bottom: 200px;

    & > div:nth-child(2) {
      margin-top: 100px;
      padding: 0 162px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > div {
        max-width: 359px;
        font-family: 'NotoSansHK-Regular';
        font-size: 26px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0;
        color: #777777;
        text-align: center;

        & > div:nth-child(2) {
          margin-top: 50px;

          & > span {
            letter-spacing: 2px;
          }
        }
      }

      & > div:nth-child(n + 3) {
        margin-top: 110px;
      }
    }
  }

  & > #congruency {
    margin-bottom: 200px;

    & > div:nth-child(2) {
      & > div {
        display: flex;
        border-bottom: 2px solid #c1e8f3;
        height: 210px;
        align-items: center;

        & > div:nth-child(1) {
          font-family: 'OPPOSans-B';
          font-size: 80px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 48px;
          letter-spacing: 0px;
          color: #7bbfcb;
          margin-right: 59px;
        }

        & > div:nth-child(2) {
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 48px;
          letter-spacing: 0px;
          color: #777777;
        }
      }

      & > div:nth-child(even) {
        flex-direction: row-reverse;

        & > div:nth-child(1) {
          margin-left: 59px;
          margin-right: 0;
        }
      }
    }
  }

  & > #matters {
    & > div:nth-child(2) {
      margin-top: 132px;
      margin-bottom: 200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > div {
        & > div:nth-child(2) {
          width: 289px;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 46px;
          letter-spacing: 0px;
          color: #777777;
          text-align: center;
          margin: auto;
          margin-top: 49px;
        }
      }

      & > div:nth-child(3) {
        & > div {
          & > span:nth-child(1) {
            letter-spacing: 1px;
          }

          & > div:nth-child(2) {
            letter-spacing: -2px;
          }
        }
      }

      & > div:nth-child(n + 4) {
        margin-top: 138px;
      }

      & > div:nth-child(4) {
        margin-left: 240px;
      }

      & > div:nth-child(5) {
        margin-right: 240px;
      }
    }
  }

  & > #method {
    margin-bottom: 442px;

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        margin-top: 163px;
        display: flex;
        justify-content: space-between;

        & > div {
          width: 610px;
          height: 378px;
          border-radius: 10px;
          border: solid 2px #c1e8f3;
          position: relative;

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Regular';
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 48px;
            letter-spacing: 0px;
            color: #777777;
            padding: 84px 37px 78px;
          }

          & > div:nth-child(1) {
            position: absolute;
            width: 410px;
            height: 76px;
            background-color: #99d3dd;
            border-radius: 38px 38px 38px 0px;
            top: -36px;
            font-family: 'NotoSansHK-Bold';
            font-size: 36px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

      & > div:nth-child(2) {
        margin-top: 120px;
        margin-bottom: 178px;
        width: 1314px;
        height: 145px;
        border-radius: 73px;
        border: solid 1px #98ccef;
        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: 0px;
        color: #777777;
        padding: 42px 62px 31px;
        position: relative;
      }

      & > div:nth-child(2)::after {
        content: '';
        position: absolute;
        z-index: -1;
        display: inline-block;
        width: 1314px;
        height: 145px;
        background-image: linear-gradient(#e8f5f9, #e8f5f9),
          linear-gradient(#daf0f7, #daf0f7);
        background-blend-mode: normal, normal;
        border-radius: 73px;
        top: -8px;
        left: -6px;
      }

      & > div:nth-child(3) {
        margin-top: 170px;
      }
    }
  }

  .up_bid {
    font-size: 12px !important;
    vertical-align: super !important;
  }
}

.atropine_title_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  margin: auto;
  width: 580px;
  height: 136px;
  border-radius: 20px;
  background-image: linear-gradient(-90deg, #92d0db 0%, #d2f1f6 100%),
    linear-gradient(#529fd3, #529fd3);
  background-blend-mode: normal, normal;

  font-family: 'NotoSansHK-Regular';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;
}

.atropine_title_text {
  font-family: 'NotoSansHK-Bold';
  font-size: 42px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0px;
  color: #7bbfcb;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

.atropine_head {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 100px;
    margin-right: 300px;

    & > div:nth-child(1) {
      & > div:nth-child(1) {
        font-family: 'NotoSansCJKtc-Bold';
        font-size: 119px;
        font-weight: Bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #99d4dd;
        z-index: 5;
        position: relative;
        top: -20px;
      }

      & > div:nth-child(2) {
        position: relative;
        z-index: 5;
        font-family: 'DINCondensed-Bold';
        font-size: 126px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: 3.4px;
        color: #99d4dd;
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

    & > div:nth-child(1)::after {
      content: '';
      background: #f2f2f2;
      width: 550px;
      height: 300px;
      position: absolute;
      top: 211px;
      right: 0;
    }

    & > div:nth-child(2) {
      position: relative;
      top: 0;
      left: -5px;

      & > img {
        position: relative;
        z-index: 5;
      }

      & > img:nth-child(1) {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
