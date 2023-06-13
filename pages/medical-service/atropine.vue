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
    anchorName: '介紹',
    anchorLink: '/medical-service/atropine#introduce',
  },
  {
    anchorName: '作用',
    anchorLink: '/medical-service/atropine#effect',
  },
  {
    anchorName: '好處',
    anchorLink: '/medical-service/atropine#benefit',
  },
  {
    anchorName: '適用',
    anchorLink: '/medical-service/atropine#congruency',
  },
  {
    anchorName: '注意事項',
    anchorLink: '/medical-service/atropine#matters',
  },
  {
    anchorName: '使用方法/療程',
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
          <div>阿托品眼藥水</div>
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
        <div class="atropine_title_text">介紹阿托品眼藥水</div>
        <div>
          <div>
            <p>
              除了光學控制兒童近視，由眼科醫生處方的阿托品眼藥水已被證明是目前控制近視有效之方法1。阿托品藥水是屬於抗膽鹼藥品，有擴大瞳孔的作用，能抑制鞏膜纖維組織生長、防止或減慢眼球進一步延長，以減慢小朋友近視加深速度。阿托品的副作用是令眼睛內的睫狀體肌肉放鬆，使得看近變得困難。
              <span>阿托品眼藥水有不同的劑量，分為</span>
              <span
                >低濃度阿托品眼藥水及高濃度阿托品眼藥水，包括0.01%，0.05%，0.125%及1%等，低濃度阿托品眼藥水的副作用較輕微同時能更有效控制近視。</span
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
            阿托品眼藥水有不同的劑量，低濃度阿托品眼藥水的副作用較輕微同時能更有效控制近視
          </div>
        </div>
      </div>
      <div id="effect">
        <div class="atropine_title_text">阿托品眼藥水作用</div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/c6f1efe65818cbf7.png"
              alt=""
            />
          </div>
          <div>
            <p>
              根據最新一期美國醫學會雜誌的研究2，發現0.05%濃度的阿托品眼藥水對於減低近視發生率效果明顯。兒童使用0.05%濃度的阿托品眼藥水後，有67%的使用者出現減慢近視加深的成效。
            </p>
            <p>
              有研究數據顯示0.05%濃度比起0.01%濃度的阿托品眼藥水更有效減慢近視加深速度：使用0.05%濃度阿托品眼藥水兩年累積的近視發病率是最低，為28.4%3，使用0.01%濃度的近視發病率是45.9%。此外，使用0.05%濃度阿托品眼藥水的近視加深度數和眼球增長速度也比較低，由此
              <span>可見</span
              ><span
                >低濃度阿托品眼藥水，尤其是0.05%濃度控制近視眼效果較為理想。</span
              >
            </p>
          </div>
        </div>
      </div>
      <div id="benefit">
        <div class="atropine_title_text">阿托品眼藥水好處</div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/22f52a2cd4375972.png"
              alt=""
            />
            <div>幫助控制發育期間眼球拉長</div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/7e6f87e0e87fa03b.png"
              alt=""
            />
            <div>減低每年近視度數增加的速度</div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/e8f9777b29a81b26.png"
              alt=""
            />
            <div>
              <span>減低深近視的機會</span
              >（尤其是有深近視家族病史的兒童），降低患上近視相關眼疾的風險
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/cc985146128cd086.png"
              alt=""
            />
            <div>使用簡單，一般只需每天睡前滴一次眼藥水</div>
          </div>
        </div>
      </div>
      <div id="congruency">
        <div class="atropine_title_text">誰適合使用阿托品眼藥水？</div>
        <div>
          <div>
            <div>1</div>
            <div>
              阿托品眼藥水適合患近視兒童用作近視控制，但需根據每個兒童的眼睛及近視發展調整，或可能需要配合其他近視控制產品一併使用。
            </div>
          </div>
          <div>
            <div>2</div>
            <div>
              如果父母一方有深度近視，年紀小且遠視度數低於100度以下的兒童也可咨詢醫生意見，看是否適合使用阿托品眼藥水。
            </div>
          </div>
          <div>
            <div>3</div>
            <div>
              此外，小朋友對戴近視控制隱形眼鏡有抗拒或不適應，亦可考慮使用阿托品眼藥水控制近視，使用方法簡單只需每日滴眼藥水即可有效減慢近視加深。
            </div>
          </div>
          <div>
            <div>4</div>
            <div>
              若小朋友有斜視或有眼睛協調問題，用阿托品眼藥水會比其他近視控制產品較為適合。
            </div>
          </div>
        </div>
      </div>
      <div id="matters">
        <div class="atropine_title_text">使用阿托品眼藥水注意事項</div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/8d3b7b0927abdb0f.png"
              alt=""
            />
            <div>
              部分兒童可能對阿托品藥物敏感及出現不良反應，如發燒、皮膚泛紅、心跳過快等
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/5735636447fd5cfc.png"
              alt=""
            />
            <div>瞳孔放大導致會有畏光或視力模糊的情況出現</div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/4eea04dbe4e4b1f1.png"
              alt=""
            />
            <div>
              控制晶體調節的睫狀肌可能<span>出現麻痺，失去調節能力</span>
              <span>（兒童或因此需要另配眼鏡）</span>
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/f840c8d3291767f8.png"
              alt=""
            />
            <div>
              使用阿托品眼藥水不能矯正近視或散光，兒童仍需要佩戴眼鏡才能看清楚
            </div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/21fd778043f6cfcb.png"
              alt=""
            />
            <div>
              如果小朋友使用後出現不適或畏光的徵狀，可以選擇佩戴太陽眼鏡或漸進眼鏡以幫助近距離事物的觀察
            </div>
          </div>
        </div>
      </div>
      <div id="method">
        <div class="atropine_title_text">阿托品眼藥水的使用方法/療程</div>
        <div>
          <div>
            <div>
              <div>使用頻率以及次數</div>
              <div>
                阿托品眼藥水只需<span>每日一次，每次一滴</span>
                便可，使用後需要定期由醫生監察及調整份量。阿托品眼藥水需要在發育期間使用，一般醫生會建議使用藥物直到度數穩定，使用者需要和醫生商量何時適合停用阿托品眼藥水。
              </div>
            </div>
            <div>
              <div>用量（如有）</div>
              <div>
                一般醫生會先處方一個月用量的阿托品眼藥水再作評估，測量瞳孔及視力的變化以確定小朋友是否適合繼續使用。一般使用第一年，需要每4個月覆診一次，之後可每半年覆診一次，醫生也會再評估是否需要調整用量。
              </div>
            </div>
          </div>
          <div>
            一旦發現子女有近視，就應該盡快帶子女去眼科醫生進行眼睛檢查，制定近視控制方案以預防他們患有深度近視，並減慢近視加深的速度。
          </div>
          <div class="medicalOptometry_title_btn" @click="goWhatsApp">
            立即查詢阿托品眼藥水
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
  max-width: 1320px;
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
}

.medicalOptometry_title_btn {
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
