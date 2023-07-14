<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '視網膜脫落｜希瑪眼科｜醫療服務',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心提供視網膜疾病檢查及治療。視網膜疾病高危成因包括有深近視、視網膜脫落家族遺傳史、眼睛曾受外傷、眼內發炎、糖尿上眼、眼內發炎、眼部有腫瘤等。視網膜疾病先兆包括飛蚊症、眼前出現閃光及黑影飄動、出現固定黑影以及視力明顯突然下降。視網膜脫落治療包括: 充氣性視網膜固定術、鞏膜外墊壓術、微創玻璃體切除術（PPV）。立即查詢治療視網膜詳細及相關費用。',
    },
    {
      name: 'keywords',
      content:
        '視網膜疾病 視網膜檢查 視網膜治療 視網膜脫落 糖尿上眼 飛蚊症 視網膜剝離 糖尿上眼初期 視網膜脫落手術 視網膜病變 視網膜脫落症狀 視網膜剝離手術 眼科醫生 眼科診所 眼科中心 希瑪眼科中心 希瑪眼科 希瑪 林順潮 眼疾 眼睛疾病  眼睛檢查 希瑪 希瑪醫療集團 希瑪醫療',
    },
  ],
}))
// 传递背景色
const backgd = [
  '#f7d6cf;',
  '-webkit-linear-gradient(to right, #eeb8ae, #f7d6cf);',
  'linear-gradient(to right, #eeb8ae, #f7d6cf);',
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
    anchorName: '視網膜脫落',
    anchorLink: '/medical-service/amotioRetinae#intro',
  },
  {
    anchorName: '高危因素',
    anchorLink: '/medical-service/amotioRetinae#factor',
  },
  {
    anchorName: '先兆及症狀',
    anchorLink: '/medical-service/amotioRetinae#styptom',
  },
  {
    anchorName: '治療',
    anchorLink: '/medical-service/amotioRetinae#treat',
  },
  {
    anchorName: '糖尿上眼',
    anchorLink: '/medical-service/amotioRetinae#diabetes',
  },
  {
    anchorName: '預防方法',
    anchorLink: '/medical-service/amotioRetinae#prevent',
  },
  {
    anchorName: '常見問題',
    anchorLink: '/medical-service/amotioRetinae#faq',
  },
]
// 常見問題
const meetArr = [
  {
    title: 'Q：飛蚊症會引致視網膜脫落？',
    agree:
      '隨著眼睛老化、玻璃體逐步收縮、液化。部分退化的細胞逐漸積聚成塊，便會形成不同形狀的黑點或暗影，飛舞飄動，就會好像有蚊子在眼前飛舞。飛蚊可分為良性飛蚊和惡性飛蚊。良性飛蚊屬於生理現象，一般不用擔心。惡性飛蚊若表現為飛蚊數量在短時間內明顯增加，面積擴大，或者眼前閃光出現（或明顯增多），則有機會是眼睛出現視網膜脫落。',
  },
  {
    title: 'Q：揉眼睛會致視網膜脫落？',
    agree:
      '不能簡單認為揉眼睛這個動作就是會導致視網膜脫落。這個動作在部位高危病人中（例如超高度數近視患者），有可能是一個危險的動作。因為深近視人士的眼軸變得很長，視網膜因此被拉得很薄，於是很容易會破裂或穿洞，這個情況下，大力揉眼就有可能對眼睛造成很大的傷害。',
  },
  {
    title: 'Q：視網膜脫落一定要做手術嗎？',
    agree:
      '視網膜脫落屬於眼科急症，患者有可能永久失去視力，因此必須盡快治療。治療以激光或手術為主︰如果視網膜脫落範圍較小，沒有內液通過裂孔進入視網膜後方，則眼部激光已經可以固定視網膜；但若範圍較大，手術是主要的醫治方法。',
  },
  {
    title: 'Q：視網膜脫落會復發嗎？',
    agree:
      '視網膜脫落是有機會復發，而由眼部外傷、糖尿上眼引起的視網膜脫落復發風險相對更高。所以，建議曾經歷視網膜脫落人士要養成正確用眼習慣如︰不要長時間及近距離看電子螢幕和閱讀；使用電子產品時要留意有足夠光線；讓眼睛有足夠時間休息等。',
  },
]
const factorList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/fc6ff4f8cb23dfcf.png',
    text: ['近視：度數愈深，', '風險愈高'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/1c56f997c3d97b23.png',
    text: ['有視網膜脫落', '家族遺傳史'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/04455c1207c08c9c.png',
    text: ['眼睛曾受外傷'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/88711def3ed108f7.png',
    text: ['眼內手術史'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/ec5a01a0dbf9f84a.png',
    text: ['眼部有腫瘤'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/01900705430260c3.png',
    text: ['眼內發炎'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/dab35b2868797ff6.png',
    text: ['糖尿上眼', '（糖尿性視網膜病變）'],
  },
]
const styptomList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/395082110044babb.png',
    title: 'STEP 1',
    text: ['見到大量飛蚊，', ' 數量異常地多'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/2a00453f60e048e1.png',
    title: 'STEP 2',
    text: [' 見到閃光或', '黑影飄動'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/01642ceb7961423f.png',
    title: 'STEP 3',
    text: ['眼前固定黑影'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/fa60690b4b991bda.png',
    title: 'STEP 4',
    text: ['視野缺失、視力', '突然明顯下降'],
  },
]
const treatList1 = [
  {
    id: 0o1,
    img: 'https://static.cmereye.com/imgs/2023/06/d596509569404157.png',
    title: '充氣性視網膜固定術',
    text: '在玻璃體內注入特別的氣泡，再輔以冷凍或視網膜激光治療， 術後病人採用俯臥位，利用氣泡向上浮的特性，將脫落的視網膜頂壓在正常位置，這治療適合視網膜範圍較少、視網膜脫落範圍在眼球內上的三分之一及玻璃體較健康的患者。',
  },
  {
    id: 0o2,
    img: 'https://static.cmereye.com/imgs/2023/06/8a3b0247791f8510.png',
    title: '鞏膜外墊壓術',
    text: '利用特殊硅膠或海綿墊，對視網膜脫落位置的鞏膜產生壓力，使鞏膜向內凸起，頂住脫落的視網膜，使其復位以及封閉撕裂處，讓脫落的視網膜組織與下方的色素上皮層再黏合，有時會再輔以冷凍或視網膜激光治療。這種方法一般適用於發生在較周邊的視網膜脫離。墊壓術在眼球外進行，減少了發生眼內感染的風險。',
  },
  {
    id: 0o3,
    img: 'https://static.cmereye.com/imgs/2023/06/e445afd7a354ce54.png',
    title: '微創玻璃體切除術（PPV）',
    text: '以微創模式，在眼球表面開三個直徑小於一毫米的小洞，直接在眼球內進行玻璃體切除，之後注入擴充性氣體（或者注入硅油），將視網膜頂壓回復到原來正常位置，使得神經視網膜層和色素上皮層重新貼合，術前還會以冷凍或激光的方式把視網膜破孔封上。術後病人需要採取俯臥的位置，保持對視網膜頂壓的力量。',
  },
]
const preventList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/13de992a2503809a.png',
    title: '定期進行眼科檢查',
    text: '如果你有近視（尤其是高度近視，600度或以上），眼科檢查是很重要。因為近視使你更容易發生視網膜脫離。而且眼睛檢查中應包含散瞳檢查，以發現有沒有視網膜撕裂先兆。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/273a3786c416e9c5.png',
    title: '注意戶外活動安全',
    text: '在進行劇烈運動或進行其他高風險活動（例如過山車、碰碰車、潛水、跳傘、蹦極）時，請使用護目鏡或其他保護眼睛的裝備。 ',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/2af412dd5ff25eb6.png',
    title: '有需要時及時治療',
    text: '如果你發現視網膜脫落症狀（突然看到很多飛蚊症和閃光），請立即諮詢您的眼科醫生進行全面的眼科檢查',
  },
]
</script>

<template>
  <div class="amotioRetinae">
    <div class="amotioRetinae_head">
      <!-- 头部 -->
      <div>
        <div>
          <div>視網膜脫落</div>
          <div>RETINAL DETACHMENT</div>
        </div>
        <div>
          <img src="https://static.cmereye.com/imgs/2023/06/98c0c654ac2b16f3.png" />
          <img src="https://static.cmereye.com/imgs/2023/06/af7656b552044873.png" />
        </div>
      </div>
    </div>
    <div class="amotioRetinae_nav">
      <div id="intro">
        <div class="amotioRetinae_title_text">什麼是視網膜脫落？</div>
        <div>
          <p>
            視網膜是一片厚度不到0.5毫米的透明薄膜，是眼球壁的最內層，佈滿感光神經細胞。視網膜是眼內最重要、最複雜但又最脆弱的部分。視網膜一面與玻璃體接觸，另一面緊貼著脈胳膜。視網膜的作用像是相機的菲林，將接收到的光線和影像轉化成神經電信號，再傳送到大腦的視覺中樞，讓我們可以「看見」。視網膜共有十層，第一至九層稱為「感覺神經視網膜」，第十層則稱為「視網膜色素上皮層」，其中色素上皮層主要負責血液及營養供應以及處理代謝所產生的“廢料”。
          </p>
          <p>
            視網膜脫落是一種較嚴重的<span>眼科急症</span>>，泛指「感覺神經視網膜」和「視網膜色素上皮層」互相分離，令「感覺神經視網膜」無法得到足夠的血液和營養，新陳代謝產生的廢料也無法被運走。如果脫離狀態持續，「感覺神經視網膜」上的神經細胞會逐漸死亡，看上去原本柔軟而透明的視網膜變得僵硬而發白，情況好比相機的菲林走了光一樣，視網膜無法再正常感應影像的光影信號，也無法將信號傳送到大腦。
          </p>
        </div>
        <div>
          <img src="https://static.cmereye.com/imgs/2023/06/51ccf70864582211.png" />
        </div>
        <div class="amotioRetinae_title_btn" @click="goWhatsApp">
          <span>懷疑視網膜脫落？</span><span>立即致電求醫！</span>
        </div>
      </div>
      <div id="factor">
        <div class="amotioRetinae_title_text_bg amotioRetinae_title_text">
          視網膜脫落高危因素
        </div>
        <div>
          <div v-for="(item, index) in factorList1" :key="index">
            <div><img :src="item.img" /></div>
            <div>
              <p v-for="(ele, eleIndex) in item.text" :key="eleIndex">{{ ele }}</p>
            </div>
          </div>
        </div>
      </div>
      <div id="styptom">
        <div class="amotioRetinae_title_text_bg amotioRetinae_title_text">
          視網膜脫落先兆及症狀
        </div>
        <div class="amotioRetinae_text_p_span">
          早期視網膜脫落可能沒有任何症狀，或者出現以下情況︰
        </div>
        <div>
          <div v-for="(item, index) in styptomList1" :key="index">
            <div>{{ item.title }}</div>
            <div>
              <p v-for="(ele, eleIndex) in item.text" :key="eleIndex">{{ ele }}</p>
            </div>
            <div>
              <img :src="item.img" />
            </div>
          </div>
        </div>
        <div class="amotioRetinae_text_p_span">
          如果飛蚊症患者眼前飛蚊（不同形狀的黑點或暗影）突然明顯增加，或者眼前閃光突然出現或者明顯增加，很大機會是視網膜脫落的先兆。<span>若懷疑出現視網膜脫落的先兆或症狀，必須盡快求醫，向眼科醫生查詢，若確診視網膜脫離，很可能需要緊急手術。</span>
          視網膜脫落如沒有及時治療，視網膜脫離的範圍可能會越來越大，一旦脫離到黃斑位置，<span>將嚴重影響視力，不及時治療將會造成永久性的損害。</span>
        </div>
      </div>
      <div id="treat">
        <div class="amotioRetinae_title_text_bg amotioRetinae_title_text">
          視網膜脫落治療
        </div>
        <div>
          <div v-for="(item, index) in treatList1" :key="index">
            <div class="amotioRetinae_img"><img :src="item.img" /></div>
            <div>
              <div>
                <p>
                  <span>{{ item.id }}</span><span>{{ item.title }}</span>
                </p>
              </div>
              <div class="amotioRetinae_text_p_span amotioRetinae_text_top">{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div class="amotioRetinae_title_btn" @click="goWhatsApp">
          <p>視網膜脫落需要哪一種治療？</p>
          <p>立即WhatsApp了解更多</p>
        </div>
      </div>
      <div id="diabetes">
        <div class="amotioRetinae_title_text_bg amotioRetinae_title_text">
          糖尿上眼（糖尿性視網膜病變）
        </div>
        <div>
          <div>
            <img src="https://static.cmereye.com/imgs/2023/06/87ca0bef9c2de97f.png" />
          </div>
          <div class="amotioRetinae_text_p_span">
            <p>
              糖尿上眼學名為「糖尿性視網膜病變」，是糖尿病的併發症，會影響患者眼睛健康。不論是一型糖尿病或二型糖尿病的患者，長期血糖偏高都會損傷血管內皮細胞，都有機會引起糖尿上眼。幾乎所有一型糖尿病患者在發病後15至20年後都會受到視網膜病變影響，其中兩至三成的患者更有失明之虞，而超過六成的二型患者會有不同程度的視網膜病變。
            </p>
            <p>
              糖尿病視網膜病變初期通常是無聲無息，多數病人沒有明顯症狀，視功能不受影響。但若血糖控制不穩定，血管內皮細胞就會受到永久破壞，引起一連串的眼底病變，如：微血管瘤、糖尿黃斑水腫、視網膜新生血管，甚至視網膜脫落或繼發性青光眼，嚴重者更有失明的危機。如能及早發現並進行針對性治療，病人的視功能大多能保持。因此糖尿病患者應定期檢查眼底，以免視力受損。
            </p>
          </div>
        </div>
      </div>
      <div id="prevent">
        <div class="amotioRetinae_title_text_bg amotioRetinae_title_text">
          預防視網膜脫落
        </div>
        <div>預防視網膜脫離可以採取措施降低風險：</div>
        <div>
          <div v-for="(item, index) in preventList1" :key="index">
            <div>
              <img :src="item.img" />
            </div>
            <div>
              <div>{{ item.title }}</div>
              <div class="amotioRetinae_text_p_span">{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div class="amotioRetinae_text_p_span">
          視網膜脫落可發生於任何年齡，高危人士應該定期接受詳細眼睛檢查。<span>一旦發現病徵，如大量飛蚊和閃光，就要盡早向眼科專科醫生求醫。</span>
        </div>
      </div>
      <div id="faq">
        <div class="amotioRetinae_title_text_bg amotioRetinae_title_text">
          常見問題
        </div>
        <div>
          <PageCollapse :answer="meetArr" :downarr="'amotioRetinae'" :style="{ '--subassembly-color': '#eab1a6' }" />
        </div>
      </div>
    </div>
    <div>
      <rightSidesNavigation :service-navigation="serviceNavigation" />
    </div>
    <!-- 下载 -->
    <div class="dow">
      <div>
        <div>
          <div @click.stop="getPdf('amotioRetinae.pdf', '視網膜脫落')">
            <img src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png" alt="" srcset="" />
          </div>
          <div @click.stop="getPdf('amotioRetinae.pdf', '視網膜脫落')">
            <p>視網膜脫落</p>
            <p>下載小冊子</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 表单 -->
    <FormFooterInfo :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#eab1a6;'}`" />
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.amotioRetinae_nav {
  max-width: 1200px;
  margin: auto;
  transform: scale(0.85);
  margin-top: -39.5%;

  &>#intro {
    margin-top: 220px;

    &>div:nth-child(1) {
      font-size: 50px;
    }

    &>div:nth-child(2) {
      margin-top: 64px;
      margin-bottom: 99px;

      font-family: 'NotoSansHK-Regular';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 46px;
      letter-spacing: 3px;
      color: #988a89;
      text-indent: 54px;

      &>p {
        margin-bottom: 80px;

        &>span {
          color: #e8a89b;
          font-family: 'NotoSansHK-Bold';
        }
      }
    }

    &>div:nth-child(3) {
      width: 824px;
      height: 507px;
      background-color: #f2f2f2;
      border-radius: 20px;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 100px;
    }
  }

  &>#factor {
    margin-top: 160px;
    margin-bottom: 160px;

    &>div:nth-child(1) {
      margin-bottom: 120px;
    }

    &>div:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      &>div {
        width: 260px;
        height: 308px;
        background-color: #ffffff;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
        // margin-right: 94px;
        border-radius: 75px 0;

        &>div:nth-child(2) {
          max-width: 240px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin: auto;
          margin-top: 20px;
          flex-direction: column;

          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #515151;
        }
      }

      &>div:nth-child(4) {
        margin-right: 0;
      }

      &>div:nth-child(5) {
        margin-left: 156px;
      }

      &>div:last-child {
        margin-right: 156px;
      }

      &>div:nth-child(n + 5) {
        margin-top: 96px;
      }
    }
  }

  &>#styptom {
    margin-bottom: 160px;

    &>div:nth-child(2) {
      margin: 100px auto 60px;
    }

    &>div:nth-child(3) {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-bottom: 112px;

      &>div {
        width: 268px;
        height: 309px;
        border: solid 1px #eed3cf;
        position: relative;

        &>div:nth-child(1) {
          height: 50px;
          font-family: 'HelveticaNeue-MediumItalic';
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 33px;
          letter-spacing: 0px;
          color: #eed3cf;
          font-style: oblique;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }

        &>div:nth-child(2) {
          height: 99px;
          width: 100%;
          background-color: #eab1a6;

          font-family: 'NotoSansHK-Regular';
          font-size: 21px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 27px;
          letter-spacing: 0px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        &>div:nth-child(3) {
          height: 160px;
        }
      }

      &>div::after {
        content: '';
        background: url('https://static.cmereye.com/imgs/2023/06/3c18092d03feec4c.png');
        width: 14px;
        height: 25px;
        display: inline-block;
        position: absolute;
        right: -50px;
        top: 50%;
        transform: translateY(-50%);
      }

      &>div:last-child::after {
        content: '';
        width: 0;
      }
    }

    &>div:nth-child(4) {
      background: url('https://static.cmereye.com/imgs/2023/06/938b5475f5e9caea.png');
      width: 1200px;
      height: 304px;
      padding: 70px;
      line-height: 46px;
      background-size: 100% 100%;

      &>span {
        color: #e8a89b;
      }
    }
  }

  &>#treat {
    margin: 160px auto;

    &>div:nth-child(2) {
      margin: 100px auto 140px;

      &>div {
        margin-bottom: 140px;
        display: flex;
        flex-direction: row;

        &>div:nth-child(1) {
          &>img {
            width: 100%;
          }
        }

        &>div:nth-child(2) {
          width: 732px;
          margin-left: 50px;

          &>div:nth-child(1) {
            font-family: 'NotoSansHK-Medium';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #e8a89b;

            &>p {
              display: flex;
              flex-direction: row;
              margin-bottom: 34px;

              >span:nth-child(1) {
                color: #fff;
                background: #eab1a6;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 15px;
              }
            }
          }

          &>div:nth-child(2) {
            line-height: 48px;
            text-indent: 54px;
          }
        }
      }

      &>div:nth-child(2) {
        flex-direction: row-reverse;

        &>div:nth-child(2) {
          margin-left: 0;
          margin-right: 50px;
        }
      }
    }
  }

  &>#diabetes {
    margin: 160px auto;

    &>div:nth-child(2) {
      margin: 100px auto 160px;
      display: flex;
      flex-direction: row;

      &>div:nth-child(2) {
        width: 776px;
        margin-left: 60px;
        line-height: 48px;
        text-indent: 54px;

        &>p:nth-child(2) {
          margin-top: 80px;
        }
      }
    }
  }

  &>#prevent {
    margin: 160px auto;

    &>div:nth-child(2) {
      margin: 100px auto 60px;
    }

    &>div:nth-child(3) {
      margin-bottom: 100px;
      display: flex;
      justify-content: space-between;

      &>div {
        width: 385px;
        border-radius: 30px 0 30px 0;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);

        &>div:nth-child(2) {
          background: url('https://static.cmereye.com/imgs/2023/06/e26c60861f4311e0.png');
          background-size: 100% 100%;
          height: 456px;
          margin-top: -67px;
          z-index: 5;
          position: relative;
          padding: 0 36px;
          padding-top: 78px;

          &>div:nth-child(1) {
            width: 273px;
            height: 44px;
            background-color: #eab1a6;
            border-radius: 22px;

            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #ffffff;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          &>div:nth-child(2) {
            font-family: 'NotoSansHK-Regular';
            line-height: 46px;
            color: #555555;
          }
        }
      }
    }

    &>div:nth-child(4) {
      background: url('https://static.cmereye.com/imgs/2023/06/a20a2ddf4c85a5f2.png');
      width: 1200px;
      height: 185px;
      padding-top: 65px;
      padding-left: 48px;
      padding-right: 2px;
      background-size: 100% 100%;

      &>span {
        color: #e8a89b;
        text-indent: 54px;
      }
    }
  }

  &>#faq {
    margin-bottom: 260px;

    &>div:nth-child(2) {
      margin-top: 120px;
    }
  }
}

.amotioRetinae_text_p_span {
  font-family: 'NotoSansHK-Regular';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #515151;
}

.amotioRetinae_title_text {
  font-family: 'NotoSansHK-Bold';
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0px;
  color: #e8a89b;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

.amotioRetinae_title_text_bg {
  background: url('https://static.cmereye.com/imgs/2023/06/b808208feaa07e38.png');
  background-size: 100%;
  width: 609px;
  height: 106px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.amotioRetinae_title_btn {
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
  background-image: linear-gradient(-90deg, #f1c0b6 0%, #fbddd8 100%),
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
.amotioRetinae_head {
  &>div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 100px;
    margin-left: 28vw;

    &>div:nth-child(1) {
      &>div:nth-child(1) {
        font-family: 'NotoSansCJKtc-Bold';
        font-size: 119px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #eab1a6;
        z-index: 5;
        position: relative;
      }

      &>div:nth-child(2) {
        position: relative;
        z-index: 5;
        line-height: 27px;
        font-family: 'DINCondensed-Bold';
        font-weight: normal;
        font-stretch: normal;
        line-height: 1;
        color: #eab1a6;
        margin-top: 15px;
        font-size: 126px;
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

// 下载
.dow {
  margin-top: -40%;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;

  &>div:nth-child(1) {
    &>div {
      width: 62.5%;
      height: 202px;
      background: #f7d6cf;
      position: relative;
      display: flex;
      align-items: center;

      &>div:nth-child(1) {
        margin-left: 37.28433%;
        margin-right: 3.90625%;
        cursor: pointer;

        &>img {
          width: 120px;
          height: 135px;
        }
      }

      &>div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .amotioRetinae_head {
    &>div:nth-child(1) {
      align-items: self-end;
      max-width: 100%;
      margin: 150px auto 0;
      padding-right: 45px;

      &>div:nth-child(1) {
        &>div:nth-child(1) {
          font-size: 45px;
          letter-spacing: 0px;
        }

        &>div:nth-child(2) {
          font-size: 31px;
          letter-spacing: 4.7px;
          text-align: justify;
        }
      }

      &>div:nth-child(1)::after {
        width: 250px;
        height: 200px;
      }

      &>div:nth-child(2) {
        width: 85%;
        left: 0;
      }
    }
  }

  .amotioRetinae_nav {
    max-width: 100%;
    margin: auto;
    transform: scale(1);
    margin-top: 0;
    padding: 0 40px 0 40px;

    &>#intro {
      margin-top: 180px;

      &>div:nth-child(1) {
        font-size: 25px;
      }

      &>div:nth-child(2) {
        margin-top: 25px;
        margin-bottom: 30px;

        font-family: 'NotoSansHK-Regular';
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.8;
        letter-spacing: 0;
        color: #988a89;
        text-indent: 0;
        text-align: justify;

        &>p {
          margin-bottom: 30px;

          &>span {
            color: #e8a89b;
            font-family: 'NotoSansHK-Bold';
          }
        }
      }

      &>div:nth-child(3) {
        width: 100%;
        height: auto;
        background-color: #f2f2f2;
        border-radius: 20px;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
        padding: 25px 22px 25px 40px;

        &>img {
          width: 80%;
        }
      }
    }

    &>#factor {
      margin-top: 80px;
      margin-bottom: 90px;

      &>div:nth-child(1) {
        margin-bottom: 0;
      }

      &>div:nth-child(2) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        &>div {
          width: 145px;
          height: auto;

          background-color: #ffffff;
          box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
          // margin-right: 94px;
          border-radius: 45px 0;

          &>div:nth-child(2) {
            max-width: 240px;
            padding: 10px;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: auto;
            margin-top: 5px;
            flex-direction: column;

            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.4;
            letter-spacing: 0px;
            color: #515151;
          }
        }

        &>div:nth-child(4) {
          margin-right: 0;
        }

        &>div:nth-child(5) {
          margin-left: 0;
        }

        &>div:last-child {
          margin-right: 0;
          margin-left: 25%;
        }

        &>div:nth-child(n) {
          margin-top: 50px;
        }
      }
    }

    &>#styptom {
      margin-bottom: 80px;

      &>div:nth-child(2) {
        margin: 40px auto 25px;
      }

      &>div:nth-child(3) {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-direction: column;
        margin-bottom: 60px;

        &>div {
          width: 100%;
          height: auto;
          border: solid 1px #eed3cf;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 45px;

          &>div:nth-child(1) {
            width: 100%;
            height: 50px;
            font-family: 'HelveticaNeue-MediumItalic';
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            line-height: 1.6;
            letter-spacing: 0px;
            color: #eed3cf;
            font-style: oblique;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }

          &>div:nth-child(2) {
            height: auto;
            width: 40%;
            background-color: #eab1a6;

            font-family: 'NotoSansHK-Regular';
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.6;
            letter-spacing: 0px;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding-left: 15px;
          }

          &>div:nth-child(3) {
            width: 60%;
            height: auto;
          }
        }

        &>div:nth-child(1) {
          &>div:nth-child(2) {
            background: #3360a8;
          }
        }

        &>div::after {
          content: '';
          background: url('https://static.cmereye.com/imgs/2023/06/3c18092d03feec4c.png');
          width: 14px;
          height: 25px;
          display: inline-block;
          position: absolute;
          left: 50%;
          right: auto;
          top: auto;
          bottom: -30%;
          transform: translateY(-50%) rotate(90deg);
        }

        &>div:last-child::after {
          content: none;
        }
      }

      &>div:nth-child(4) {
        background: url('https://static.cmereye.com/imgs/2023/07/5b7d7027ccc3fc0d.png') no-repeat;
        width: 100%;
        height: auto;
        padding: 28px 24px 24px 24px;
        line-height: 1.9;
        background-size: 100%;

        &>span {
          color: #e8a89b;
        }
      }
    }

    &>#treat {
      margin: 80px auto;

      &>div:nth-child(2) {
        margin: 30px auto 55px;

        &>div {
          margin-bottom: 60px;
          display: flex;
          flex-direction: column;
          position: relative;

          &>div:nth-child(1) {
            &>img {
              width: 100%;
            }
          }

          .amotioRetinae_text_top {
            margin-top: 260px;
          }

          .amotioRetinae_img {
            position: absolute;
            top: 60px;
          }

          &>div:nth-child(2) {
            width: 100%;
            margin-left: 0;

            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Medium';
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 36px;
              letter-spacing: 0px;
              color: #e8a89b;

              &>p {
                display: flex;
                flex-direction: row;
                margin-bottom: 34px;

                &>span:nth-child(1) {
                  padding-top: 4px;
                  color: #fff;
                  background: #eab1a6;
                  width: 30px;
                  height: 30px;
                  border-radius: 50%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-right: 10px;
                }
              }
            }

            &>div:nth-child(2) {
              line-height: 1.8;
              text-indent: 0;
            }
          }
        }

        &>div:nth-child(2) {
          flex-direction: column-reverse;

          &>div:nth-child(2) {
            margin-left: 0;
            margin-right: 50px;
          }
        }
      }

      &>div:nth-child(3) {
        padding: 16px 20px;

        &>p {
          font-size: 16px;
          line-height: 1.8;
        }
      }
    }

    &>#diabetes {
      margin: 80px auto;

      &>div:nth-child(2) {
        margin: 40px auto 60px;
        display: flex;
        flex-direction: column-reverse;

        &>div:nth-child(2) {
          width: 100%;
          margin-left: 0;
          line-height: 1.8;
          text-indent: 0;
          font-size: 12px;

          &>p:nth-child(2) {
            margin-top: 34px;
          }
        }

        &>div:nth-child(1) {
          padding: 20px 7px 0 7px;
          width: 80%;
          margin: auto;
        }
      }
    }

    &>#prevent {
      margin: 80px auto;

      &>div:nth-child(2) {
        margin: 30px auto 25px;
        font-size: 12px;
      }

      &>div:nth-child(3) {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        &>div {
          width: 100%;
          border-radius: 25px 25px 25px 25px;
          overflow: hidden;
          box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: row;
          position: relative;
          padding: 10px;
          padding-top: 70px;
          margin-bottom: 30px;

          &>div:nth-child(1) {
            width: 40%;
          }

          &>div:nth-child(2) {
            width: 60%;
            background: #fff;
            background-size: 100% 100%;
            height: auto;
            margin-top: -67px;
            z-index: 5;
            position: static;
            padding: 0;
            padding-top: 28px;


            &>div:nth-child(1) {
              width: 70%;
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              height: auto;
              font-size: 18px;
              height: auto;
              padding: 4px 10px;
              padding-top: 8px;
              background-color: #eab1a6;
              border-radius: 22px;

              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.6;
              letter-spacing: 0px;
              color: #ffffff;
              margin-bottom: 0;
              margin: auto;
              margin-top: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            &>div:nth-child(2) {
              font-family: 'NotoSansHK-Regular';
              line-height: 1.8;
              color: #555555;
              margin-top: 35px;
              margin-left: 10px;
              text-align: justify;
            }
          }
        }
      }

      &>div:nth-child(4) {
        background: url('https://static.cmereye.com/imgs/2023/07/7030a59cf91a8775.png') no-repeat;
        width: 100%;
        height: auto;
        padding: 28px;
        background-size: 100% 100%;
        text-align: justify;

        &>span {
          color: #e8a89b;
          text-indent: 0;
        }
      }
    }

    &>#faq {
      margin-bottom: 260px;

      &>div:nth-child(2) {
        margin-top: 40px;
      }
    }
  }

  .amotioRetinae_text_p_span {
    font-family: 'NotoSansHK-Regular';
    font-size: 12px;
    font-weight: 400;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #515151;
  }

  .amotioRetinae_title_text {
    font-family: 'NotoSansHK-Bold';
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 2;
    letter-spacing: 0px;
    color: #e8a89b;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .amotioRetinae_title_text_bg {
    background: url('https://static.cmereye.com/imgs/2023/06/b808208feaa07e38.png') no-repeat;
    background-size: 100%;
    width: 100%;
    height: auto;
    min-height: 54px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .amotioRetinae_title_btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    margin: auto;
    width: 100%;
    padding: 16px 40px;
    height: auto;
    border-radius: 20px;
    background-blend-mode: normal, normal;
    background-image: linear-gradient(-90deg, #f1c0b6 0%, #fbddd8 100%),
      linear-gradient(#eda2a6, #eda2a6);

    font-family: 'NotoSansHK-Regular';
    font-size: 22px;
    text-align: center;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: 0px;
    color: #ffffff;
  }

  .dow {
    margin-top: -160px;
    margin-bottom: 130px;
    font-size: 14px;

    &>div:nth-child(1) {
      &>div {
        width: 80%;
        height: 94px;

        &>div:nth-child(1) {
          &>img {
            width: 55px;
            height: auto;
          }
        }

        &>div:nth-child(2) {
          padding-top: 5px;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .amotioRetinae_nav {
    margin-top: -23.7%;
  }

  .amotioRetinae_head {
    &>div:nth-child(1) {
      margin-left: 39vw;
    }
  }

  .dow {
    margin-top: -25%;

    &>div:nth-child(1) {
      &>div {
        &>div:nth-child(1) {
          margin-left: 32.2vw;
        }
      }
    }
  }
}
</style>
