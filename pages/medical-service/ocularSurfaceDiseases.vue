<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '眼表和眼眶疾病',
}))
// 传递背景色
const backgd = [
  '#acd9c1;',
  '-webkit-linear-gradient(to right, cfecdd, #acd9c1);',
  'linear-gradient(to right, cfecdd, #acd9c1);',
]
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}
// 拨打电话
const callTel = () => {
  location.href = 'tel://+(852) 3956 2026'
}
// 内部导航
const serviceNavigation = [
  {
    anchorName: '翼狀胬肉',
    anchorLink: '/medical-service/ocularSurfaceDiseases#intro',
  },
  {
    anchorName: '眼瞼炎',
    anchorLink: '/medical-service/ocularSurfaceDiseases#factor',
  },
  {
    anchorName: '角膜炎',
    anchorLink: '/medical-service/ocularSurfaceDiseases#styptom',
  },
  {
    anchorName: '虹膜炎',
    anchorLink: '/medical-service/ocularSurfaceDiseases#treat',
  },
  {
    anchorName: '表層鞏膜炎',
    anchorLink: '/medical-service/ocularSurfaceDiseases#diabetes',
  },
  {
    anchorName: '角膜皮上破損',
    anchorLink: '/medical-service/ocularSurfaceDiseases#prevent',
  },
  {
    anchorName: '錐形角膜',
    anchorLink: '/medical-service/ocularSurfaceDiseases#faq',
  },
  {
    anchorName: '角膜移植',
    anchorLink: '/medical-service/ocularSurfaceDiseases#faq',
  },
]
// 常見問題
const meetArr = [
  {
    title: 'Q: 角膜移植的成功率怎樣？',
    agree:
      '由於角膜沒有血管，角膜移植是所有器官移植中成功率最高的。有些病人的角膜出現新生血管增生或同時患上其他眼疾，會降低手術的成功率，但使用適當藥物，術後成功率還是較高的。',
  },
  {
    title: 'Q: 術前有什麼注意事項？',
    agree: '應該保持開朗，有充足睡眠和休息，戒煙酒，預防感冒，並保持排便通暢。',
  },
  {
    title: 'Q: 角膜移植後需注意什麼？',
    agree: [
      '1)避免揉眼、眼部外傷、體力勞動及劇烈運動。',
      '2)遵照醫囑複診（包括：視力、眼壓、裂隙燈檢查等）。',
      '3)堅持按照醫囑用藥，用藥期間如有不良反應，應及時告訴醫生，以便調整用藥。',
      '4)需緊急就診的情況：突然視物不清、眼紅、眼痛、畏光、有眼外傷等。',
    ],
  },
]
const pterygiumList1 = [
  {
    id: 0o1,
    text: '翼狀胬肉的治療為盡量避免刺激，小而沒有增大的翼狀胬肉則毋須治療。',
  },
  {
    id: 0o2,
    text: '有明顯徵狀或充血嚴重可使用類固醇眼藥水減輕炎症反應。',
  },
  {
    id: 0o3,
    text: '如果視力受到影響或翼狀胬肉有增大，可以考慮切除。',
  },
  {
    id: 0o4,
    text: '翼狀胬肉術後復發並不少見，減低復發率的方法包括自身結膜移植、使用抗代謝藥物等。',
  },
]
const blepharitisList1 = [
  {
    text: '揉擦眼睛，使細菌自腺體開口處進入眼瞼並引起感染',
  },
  {
    text: '與食物過敏有關，如：海鮮過敏、巧克力過敏等',
  },
  {
    text: '如果感染反復發作，要留意是否與全身性疾病有關，例如：糖尿病',
  },
  {
    text: '經常熬夜、作息不正常令眼睛過度疲勞，抵抗力下降',
  },
  {
    text: '患有糖尿病、習慣高脂高糖飲食',
  },
]
const blepharitisList2 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/b12fb31271ef4c0e.png',
    text: '眼瞼周圍紅腫發癢',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/2072d440153d5969.png',
    text: '眼睫毛的根部出現鱗片（脂漏性眼瞼炎的鱗片是黃色油膩物）',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/7aa1338885c18acb.png',
    text: '有時會發生眼睫毛長錯方向或倒睫的情況',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/4f1cd4190fdbe151.png',
    text: '某些感染性眼瞼炎會伴有結膜炎',
  },
]
const blepharitisList3 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/77695fe77bc38fee.png',
    text: '眼瘡出現初期可以熱敷處理，能夠改善毛囊阻塞，令受阻的油脂腺打開，幫助油脂排出。可以用連殼熟雞蛋作為熱源，用清潔的毛巾包裹，在眼瘡周圍來回按摩5至10分鐘，按摩3至4次。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/9ee874c1ff5832b4.png',
    text: '同時，醫生會處方抗生素藥水或藥膏。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/0ffb423f9bec8c60.png',
    text: '若情況沒有改善，便應諮詢眼科醫生並考慮做眼瘡刮除術－於眼瘡位置割一小傷口，將膿泡釋放出來。此治療精準度高，術後傷口極小，可減少感染或腫脹情況發生。',
  },
]
const keratitisList = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/658fd4961f627781.png',
    text: '疼痛',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/43281acecf701ee5.png',
    text: '畏光',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/43d36f1afbbadf6b.png',
    text: '流淚',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/a55f6759de9edca4.png',
    text: '眼瞼痙攣',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/ed2c9360e662c9f8.png',
    text: '睫狀充血',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/4a355851bbe49ff3.png',
    text: '角膜混濁、浸潤或潰瘍',
  },
]
</script>

<template>
  <div class="ocularSurfaceDiseases">
    <div class="ocularSurfaceDiseases_head">
      <!-- 头部 -->
      <div>
        <div>
          <div>眼表及角膜疾病</div>
          <div>OCULAR SURFACE AND CORNEAL DISEASES</div>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/06/01e16119c7ad0554.png"
          />
          <img
            src="https://static.cmereye.com/imgs/2023/06/64ee1fb8f58e6549.png"
          />
        </div>
      </div>
    </div>
    <div class="ocularSurfaceDiseases_nav">
      <div id="pterygium">
        <div class="ocularSurfaceDiseases_title">翼狀胬肉</div>
        <div class="ocularSurfaceDiseases_text_p_span">
          <div>
            翼狀胬肉是指沿著角膜生長的翼狀增生組織，一般起源於眼睛的球結膜發生變性、肥厚、增生的結膜組織，非常緩慢地向角膜內生長，呈三角形。其後日漸增大，嚴重時可能引起角膜弧度改變，引發散光；或者胬肉過大（>
            3mm）而影響視功能，因其形狀酷似昆蟲的翅膀，故名翼狀胬肉。翼狀胬肉多見於熱帶地區，與長期暴露於日光有關。
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/720e572cb2de6352.png"
            />
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            翼狀胬肉成因
          </div>
          <div>
            <div>
              <div class="ocularSurfaceDiseases_text_p_span">遺傳因素</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                營養缺乏，淚液分泌不足
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">過敏反應</div>
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              環境因素，長期受到外界刺激如風沙、煙塵、熱力、日光、花粉等過敏刺激的人群，尤其是漁民、農民、海員、砂石工人等
            </div>
          </div>
          <div class="ocularSurfaceDiseases_title_btn">
            <span>難自行分辨是否有翼狀胬肉？</span
            ><span>WhatsApp預約醫生檢查</span>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            翼狀胬肉影響
          </div>
          <div>
            <div>
              <div>
                翼狀胬肉通常較小，而且不造成影響。有時會出現眼紅、癢、燒灼感或外觀問題。
              </div>
            </div>
            <div>
              <div>
                較大的翼狀胬肉可改變角膜形狀和引起散光，導致視物模糊。部分翼狀胬肉會侵及角膜中央，造成視力喪失。
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            翼狀胬肉治療
          </div>
          <div>
            <div v-for="(item, index) in pterygiumList1" :key="index">
              <div>0{{ item.id }}</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="blepharitis">
        <div class="ocularSurfaceDiseases_title">眼瞼炎</div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/b38916f2f6699954.png"
            />
          </div>
          <div class="ocularSurfaceDiseases_text_p_span">
            眼瞼炎即是眼瘡，或俗稱「眼挑針」。最靠近眼球邊緣的皮膚就是眼瞼，因發炎或是病菌感染而引起睫毛及眼瞼邊緣處的發炎稱為「眼瞼炎」。引致眼瘡的原因大多是葡萄球菌，如：金黃葡萄球菌，是最常引起外眼部刺激的因素之一。
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            眼瞼炎成因
          </div>
          <div>
            <div>
              <div
                v-for="(item, index) in blepharitisList1"
                :key="index"
                class="ocularSurfaceDiseases_text_p_span"
              >
                <span>{{ index + 1 }}</span>
                <span>{{ item.text }}</span>
              </div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/4e605cb3a688c00c.png"
                alt=""
              />
            </div>
          </div>
          <div class="ocularSurfaceDiseases_title_btn">
            <span>眼挑針已好幾日尚未康復？</span
            ><span>WhatsApp預約對症下藥治療</span>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            眼瞼炎症狀
          </div>
          <div>
            <div v-for="(item, index) in blepharitisList2" :key="index">
              <div><img :src="item.img" alt="" /></div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            眼瞼炎治療
          </div>
          <div>
            <div v-for="(item, index) in blepharitisList3" :key="index">
              <div>
                <div><img :src="item.img" alt="" /></div>
                <div>{{ index + 1 }}</div>
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="keratitis">
        <div class="ocularSurfaceDiseases_title">角膜炎</div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            角膜炎症狀
          </div>
          <div>
            <div v-for="(item, index) in keratitisList" :key="index">
              <div>
                <img :src="item.img" alt="" />
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                {{ item.text }}
              </div>
            </div>
          </div>
          <div class="ocularSurfaceDiseases_title_btn">
            <span>已有角膜炎症狀？</span><span>立即致電預約檢查</span>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            角膜炎影響
          </div>
          <div>
            <div>
              潰瘍癒合後，瘢痕會阻礙光線進入，使角膜表面弧度和屈光折射發生改變，物體不能在視網膜上聚焦形成清晰物象，因此視力下降。
            </div>
            <div>
              較為常見的是皰疹病毒引起的角膜炎，是人類常見的一種病毒感染。當身體免疫力下降時，嘴唇周圍會出現皰疹潰瘍症狀，病毒同樣也會侵犯眼睛，引起角膜炎。由皰疹所致的病毒感染而造成的角膜炎如未能及時醫治，容易造成角膜血管增生及形成疤痕（圖A），嚴重者需要透過角膜移植（圖B）才能改善視功能。
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/ff742016ad1ea80b.png"
                alt=""
              />
              <div>圖A：角膜血管增生及出現疤痕。</div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/ac72de08eb33f8a2.png"
                alt=""
              />
              <div>圖B：接受角膜移植，換上透明清晰的角膜，有助改善視功能。</div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            角膜炎治療
          </div>
          <div class="ocularSurfaceDiseases_text_p_span">
            <div>藥物治療：包括抗病毒藥物、抗生素、皮質類固醇等</div>
            <div>手術治療</div>
            <div>散瞳</div>
          </div>
        </div>
      </div>
      <div id="iritis">
        <div class="ocularSurfaceDiseases_title">虹膜炎</div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            虹膜炎成因
          </div>
          <div>
            <div>
              <div>外傷使細菌、病毒、異物、化學物品等進入眼內</div>
              <div>全身性疾病如：結核、麻風、風濕、鉤端螺旋體病等</div>
              <div>虹膜附近眼組織的感染，如：角膜炎、鞏膜炎等</div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/2053b0709ed69a3a.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            虹膜炎症狀
          </div>
          <div>
            <div>疼痛</div>
            <div>畏光、流淚</div>
            <div>睫狀充血</div>
            <div>角膜後沉著物</div>
            <div>房水/玻璃體混濁</div>
            <div>虹膜紋理不清</div>
            <div>瞳孔縮小</div>
          </div>
          <div class="ocularSurfaceDiseases_title_btn">
            <span>不想虹膜炎有後遺症？</span
            ><span>即WhatsApp預約 及早治療</span>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            虹膜炎併發症
          </div>
          <div>
            <div>
              <div>1</div>
              <div>
                角膜混濁、虹膜後黏連、瞳孔閉鎖、虹膜周邊前黏連或房角黏連、瞳孔膜閉、虹膜膨隆
              </div>
            </div>
            <div>
              <div>2</div>
              <div>併發白內障、繼發性青光眼、眼底病變、眼球萎縮等</div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            虹膜炎治療
          </div>
          <div>
            <div>消炎眼藥水、散瞳、降眼壓眼藥水</div>
            <div>口服類固醇</div>
            <div>結膜下或眼內注射類固醇</div>
          </div>
        </div>
      </div>
      <div id="faq">
        <div
          class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
        >
          常見問題
        </div>
        <div>
          <PageCollapse
            :answer="meetArr"
            :downarr="'ocularSurfaceDiseases'"
            :style="{ '--subassembly-color': '#acd9c1' }"
          />
        </div>
      </div>
    </div>
    <div>
      <rightSidesNavigation :service-navigation="serviceNavigation" />
    </div>
    <!-- 表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#acd9c1;'}`"
    />
  </div>
</template>
<style lang="scss" scoped>
.ocularSurfaceDiseases_nav {
  max-width: 1320px;
  margin: auto;
  margin-top: 220px;

  & > #pterygium {
    margin-bottom: 160px;

    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 80px auto 120px;

      & > div:nth-child(1) {
        width: 698px;
        line-height: 46px;
        color: #acd9c1;
        margin-right: 65px;
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        margin: 60px auto 120px;
        padding: 0 30px 0 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > div:nth-child(1) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          &div {
            width: 580px;
            height: 73px;
            border-radius: 10px;
            border: solid 1px #acd9c1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 26px;
          }
        }

        & > div:nth-child(2) {
          width: 580px;
          height: 333px;
          border-radius: 10px;
          border: solid 1px #acd9c1;
          padding: 82px 66px;
          line-height: 48px;
          font-size: 26px;
        }
      }

      & > div:nth-child(3) {
        margin: 120px auto;
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        margin: 80px auto 120px;
        display: flex;
        justify-content: space-between;

        & > div {
          width: 628px;
          height: 261px;
          padding: 97px 31px 61px 290px;
          font-size: 22px;
        }

        & > div:nth-child(1) {
          background: url('https://static.cmereye.com/imgs/2023/06/6d544e0b46ceee84.png');
        }

        & > div:nth-child(2) {
          background: url('https://static.cmereye.com/imgs/2023/06/85baaef5d466b24b.png');
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        margin-top: 94px;

        & > div {
          width: 290px;
          height: 292px;
          border-radius: 10px;
          border: solid 1px #acd9c1;
          position: relative;

          & > div:nth-child(1) {
            position: absolute;
            top: -26px;
            left: 50%;
            transform: translateX(-50%);
            font-family: 'OPPOSans-H';
            font-size: 36px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #515151;
            background: #fff;
            border-left: 5px solid #fff;
            border-right: 5px solid #fff;
          }

          & > div:nth-child(2) {
            padding: 0 41px;
            padding-top: 54px;
            font-size: 22px;
            line-height: 42px;
          }
        }
      }
    }
  }

  & > #blepharitis {
    margin: 160px auto;

    & > div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 80px auto 120px;

      & > div:nth-child(2) {
        width: 627px;
        line-height: 46px;
        color: #acd9c1;
        margin-left: 65px;
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        margin: 40px auto 120px;
        padding-left: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > div:nth-child(1) {
          & > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 40px;

            & > span:nth-child(1) {
              display: flex;
              width: 42px;
              height: 42px;
              background: #acd9c1;
              border-radius: 50%;
              color: #fff;
              justify-content: center;
              align-items: center;
              line-height: 38px;
              margin-right: 20px;
              padding-top: 5px;
            }

            & > span:nth-child(2) {
              max-width: 552px;
              line-height: 42px;
            }
          }
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        margin: 60px auto 120px;
        display: flex;
        justify-content: space-between;

        & > div {
          & > div:nth-child(2) {
            width: 240px;
            padding-left: 31px;
            font-size: 22px;
            line-height: 42px;
            margin-top: 30px;
          }
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        margin: 46px auto 160px;
        display: flex;
        justify-content: space-between;

        & > div {
          width: 380px;
          position: relative;

          & > div:nth-child(1) {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;

            & > div:nth-child(2) {
              font-family: 'OPPOSans-M';
              font-size: 120px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 94px;
              letter-spacing: 0px;
              color: #acd9c1;
              margin-right: 26px;
            }
          }

          & > div:nth-child(2) {
            font-size: 22px;
            line-height: 42px;
            margin-top: 35px;
            max-width: 360px;
          }
        }

        & > div::after {
          content: '';
          background: url('https://static.cmereye.com/imgs/2023/06/897cdf641d33d96d.png');
          width: 28px;
          height: 498px;
          display: inline-block;
          top: 0;
          position: absolute;
          right: -55px;
        }

        & > div:last-child::after {
          width: 0;
        }
      }
    }
  }

  & > #keratitis {
    margin: 160px auto;

    & > div:nth-child(2) {
      & > div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin: 60px auto 100px;

        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;

          div:nth-child(2) {
            margin-top: 30px;
            max-width: 120px;
            line-height: 38px;
          }
        }
      }
    }

    & > div:nth-child(3) {
      margin: 120px auto;

      & > div:nth-child(2) {
        margin-top: 77px;
        font-size: 22px;
        line-height: 42px;

        & > div::before {
          content: '';
          width: 6px;
          height: 6px;
          margin-right: 12px;
          border-radius: 6px;
          background-color: #515151;
          display: inline-block;
          position: relative;
          top: -50%;
          transform: translateY(-50%);
        }
      }

      & > div:nth-child(3) {
        margin: 60px 0 120px;
        padding: 0 140px 0 184px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & > div {
          & > div:nth-child(2) {
            font-size: 16px;
            line-height: 50px;
            text-align: center;
          }
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & > div {
          width: 377px;
          height: 145px;
          background-color: #ffffff;
          border-radius: 20px;
          border: solid 2px #acd9c1;

          font-size: 22px;
          line-height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 43px 25px;
          text-align: center;
        }
      }
    }
  }

  & > #iritis {
    & > div:nth-child(2) {
      & > div:nth-child(2) {
        padding-left: 46px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > div:nth-child(1) {
          padding: 41px 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          font-size: 22px;
          line-height: 38px;
        }
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        padding-left: 26px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > div {
          display: flex;
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        padding-left: 42px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > div {
          display: flex;
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        padding-left: 26px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }

  & > #faq {
    margin-bottom: 260px;

    & > div:nth-child(2) {
      margin-top: 120px;
    }
  }
}

.ocularSurfaceDiseases_title {
  font-family: 'NotoSansHK-Bold';
  font-size: 50px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 48px;
  letter-spacing: 0px;
  color: #acd9c1;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.ocularSurfaceDiseases_text_p_span {
  font-family: 'NotoSansHK-Regular';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #515151;
}

.ocularSurfaceDiseases_title_text {
  font-family: 'NotoSansHK-Bold';
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0px;
  color: #acd9c1;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.ocularSurfaceDiseases_title_text::before {
  content: '';
  width: 11px;
  height: 14px;
  margin-right: 15px;
  background: url('https://static.cmereye.com/imgs/2023/06/e34a991e03e8c0a4.png');
}

.ocularSurfaceDiseases_title_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  margin: auto;
  width: 580px;
  height: 140px;
  border-radius: 20px;
  background-blend-mode: normal, normal;
  background-image: linear-gradient(-90deg, #b3dfc8 0%, #d2f1e0 100%),
    linear-gradient(#eda2a6, #eda2a6);

  font-family: 'NotoSansHK-Regular';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;
}

// 头部样式
.ocularSurfaceDiseases_head {
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
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #acd9c1;
        z-index: 5;
        position: relative;
      }

      & > div:nth-child(2) {
        position: relative;
        z-index: 5;
        line-height: 27px;
        font-family: 'DINCondensed-Bold';
        font-weight: normal;
        font-stretch: normal;
        line-height: 1;
        color: #acd9c1;
        margin-top: 15px;
        font-size: 76px;
        letter-spacing: 0px;
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
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .xerophthalmia {
    margin-left: 33%;
  }
}
</style>
