<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '眼表及角膜疾病｜希瑪眼科｜醫療服務',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心提供眼表及角膜疾病檢查及治療。眼表疾病包括翼狀胬肉、眼瞼炎及角膜移植等。角膜疾病包括角膜炎、虹膜炎、表層鞏膜炎、角膜皮上破損、錐形角膜。一般 治療眼表及角膜疾病方法包括使用處方眼藥水、藥膏、口服藥物、注射藥物、手術治療、激光治療、角膜移植、配戴新型隱形眼鏡等。立即查詢治療詳細及相關費用。',
    },
    {
      name: 'keywords',
      content:
        '眼表疾病 眼疾病 角膜疾病 翼狀胬肉 眼瞼炎 角膜疾病 角膜炎 虹膜炎 表層鞏膜炎 鞏膜炎 錐形角膜 角膜移植 眼瘡 麥粒腫 割眼瘡 眼挑針 眼瞼發炎 生眼瘡 急性角膜炎 角膜受損症狀 眼胬肉 眼科醫生 眼科診所 眼科中心 希瑪眼科中心 希瑪眼科 希瑪 林順潮 眼疾 眼睛疾病  眼睛檢查 希瑪 希瑪醫療集團 希瑪醫療 ',
    },
  ],
}))
// 传递背景色
const backgd = [
  '#7DBE9C;',
  '-webkit-linear-gradient(to right, #cfecdd, #7DBE9C);',
  'linear-gradient(to right, #cfecdd, #7DBE9C);',
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
  location.href = 'tel://+(852) 3956 2025'
}
// 内部导航
const serviceNavigation = [
  {
    anchorName: '翼狀胬肉',
    anchorLink: '/medical-service/ocularSurfaceDiseases#pterygium',
  },
  {
    anchorName: '眼瞼炎',
    anchorLink: '/medical-service/ocularSurfaceDiseases#blepharitis',
  },
  {
    anchorName: '角膜炎',
    anchorLink: '/medical-service/ocularSurfaceDiseases#keratitis',
  },
  {
    anchorName: '虹膜炎',
    anchorLink: '/medical-service/ocularSurfaceDiseases#iritis',
  },
  {
    anchorName: '表層鞏膜炎',
    anchorLink: '/medical-service/ocularSurfaceDiseases#episcleritis',
  },
  {
    anchorName: '角膜皮上破損',
    anchorLink: '/medical-service/ocularSurfaceDiseases#damage',
  },
  {
    anchorName: '錐形角膜',
    anchorLink: '/medical-service/ocularSurfaceDiseases#keratoconus',
  },
  {
    anchorName: '角膜移植',
    anchorLink: '/medical-service/ocularSurfaceDiseases#keratoplasty',
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
const damageList1 = [
  {
    text: ['隱形眼鏡佩戴不當造成角膜刮傷'],
  },
  {
    text: ['角膜長期缺氧而水腫剝落'],
  },
  {
    text: [
      '異物直接傷害角膜，電焊或',
      '紫外線灼傷（通常在六至十二',
      '小時後角膜開始破皮）',
    ],
  },
  {
    text: ['乾眼症'],
  },
  {
    text: ['眼瞼閉合不全', '（角膜因乾燥而破皮）'],
  },
  {
    text: ['角膜病變等'],
  },
]
const damageList2 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/5a443e29bcab85f7.png',
    text: [
      '角膜上皮層底下有豐富的神',
      '經，一旦角膜破皮會使神經',
      '暴露出來，非常疼痛',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/f5488a6cf20b2bfb.png',
    text: ['怕光、流淚'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/35c768eeca793a10.png',
    text: ['眼睛幾乎睜不開'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/288f34fab3f9a8cf.png',
    text: ['角膜周圍的結膜', '會充血發紅'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/f62bc78110c0bf14.png',
    text: ['張開或閉上', '眼睛時有異物感'],
  },
]
const keratoconusList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/125b93956e0ebff8.png',
    text: '目前仍未有明確病因，可能是染色體隱性遺傳',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/efe6bc1656aef6bd.png',
    text: '過敏性疾病',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/8d7ccaa7a5447c03.png',
    text: '常見於唐氏綜合症以及嚴重過敏者',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/664bfc9e4aeef087.png',
    text: '經常揉眼',
  },
]
const keratoplastyList1 = [
  {
    therapy: '治療方式',
    involve: '涉及角膜組織',
    postoperation: '術後併發症',
  },
  {
    therapy: '全層角膜移植',
    involve: '全部5層結構',
    postoperation: [
      '對角膜內皮細胞損傷較大',
      '術後散光較多',
      '術後10年移植失敗率大於20%',
      '復原時間較長',
    ],
  },
  {
    therapy: '板層角膜移植',
    involve: ['深層前角膜移植\n前面3層結構', '後層角膜移植\n後面3層結構'],
    postoperation: [
      ['對角膜內皮細胞損傷少', '術後散光較少', '移植排斥率低，復原時間較快'],
      ['無需縫線', '術後散光少', '術後移植失敗率低', '復原時間較快'],
    ],
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
          <div>OCULAR SURFACE AND CORNEAL DISEASES</div>
          <div>OCULAR SURFACE AND CORNEAL DISEASES</div>
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
          <div class="ocularSurfaceDiseases_title_btn" @click="goWhatsApp">
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
          <div class="ocularSurfaceDiseases_title_btn" @click="goWhatsApp">
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
          <div class="ocularSurfaceDiseases_title_btn" @click="callTel">
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
          <div class="ocularSurfaceDiseases_text_p_span">
            <div>疼痛</div>
            <div>畏光、流淚</div>
            <div>睫狀充血</div>
            <div>角膜後<br />沉著物</div>
            <div>房水/<br />玻璃體混濁</div>
            <div>虹膜<br />紋理不清</div>
            <div>瞳孔縮小</div>
          </div>
          <div class="ocularSurfaceDiseases_title_btn" @click="goWhatsApp">
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
          <div class="ocularSurfaceDiseases_text_p_span">
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
          <div class="ocularSurfaceDiseases_text_p_span">
            <div>消炎眼藥水、散瞳、降眼壓眼藥水</div>
            <div>口服類固醇</div>
            <div>結膜下或眼內注射類固醇</div>
          </div>
        </div>
      </div>
      <div id="episcleritis">
        <div class="ocularSurfaceDiseases_title">表層鞏膜炎</div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            表層鞏膜炎成因
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/38bb162c73f64fc8.png"
                alt=""
              />
              <div class="ocularSurfaceDiseases_text_p_span">
                很多時無法找到明確病因，可能與壓力有關
              </div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/f978fdcd0118b62a.png"
                alt=""
              />
              <div class="ocularSurfaceDiseases_text_p_span">內分泌異常</div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/c3f67ba61c369629.png"
                alt=""
              />
              <div class="ocularSurfaceDiseases_text_p_span">
                由自身免疫類疾病引起
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            表層鞏膜炎檢查
          </div>
          <div>
            <div>
              <div>01</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                表層鞏膜炎的充血和水腫僅局限在鞏膜表層。其充血多呈暗紅色，滴腎上腺素後血管迅速變白。
              </div>
            </div>
            <div>
              <div>02</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                表層鞏膜血管相對不會移動，因此表層鞏膜炎多局限在角膜緣至直肌附著點的區域內，不影響瞼結膜。充血的血管會呈放射狀沿角膜向後延伸。
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            表層鞏膜炎併發症
          </div>
          <div>
            <div class="ocularSurfaceDiseases_text_p_span">
              <span>1</span> 前房積膿
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              <span>2</span> 鞏膜穿孔
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              <span>3</span> 角膜<br />後彈力膜膨出
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              <span>4</span> 白內障
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            表層鞏膜炎種類
          </div>
          <div>
            <div>
              <div>
                <div>單純性表層鞏膜炎（Simple Episcleritis）</div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  大多數鞏膜炎都屬於單純性表層鞏膜炎，多出現在女性。會出現眼紅、眼痛等症狀，病變部位呈塊狀的鞏膜表層和球結膜有彌漫性充血水腫，呈紫紅色（如圖）。症狀一般較輕，輕微疼痛和灼熱感，有時會出現眼瞼神經血管性水腫，視功能多不受影響，偶然出現瞳孔括約肌和睫狀肌痙攣，導致瞳孔縮小而出現暫時性近視。這類型的鞏膜炎發病較突然，週期性發作，每次持續一至數天，部分病人每隔一至三個月便會復發。
                </div>
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/06/8ed21e35080dbfa1.png"
                  alt=""
                />
                <div>
                  與流行性角結膜炎的彌漫性眼紅不同，單純表層鞏膜炎病人的眼睛局部發紅，而且多不影響角膜。
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>結節性表層鞏膜炎（Nodular Episcleritis）</div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  與單純性鞏膜炎相比，結節性表層鞏膜炎多影響年輕女性，恢復時間亦較長。病人可能出現眼紅、疼痛、畏光和流淚症狀，但一般不影響視功能。每次發病持續約2周左右，炎症逐漸消退，約2/3的病人會多次復發。
                </div>
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/06/db41b40d23dfba06.png"
                  alt=""
                />
                <div>
                  結節性表層鞏膜炎的典型表現是局部隆起的單個結節，周圍有結膜充血和水腫。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            表層鞏膜炎治療
          </div>
          <div>
            <div class="ocularSurfaceDiseases_text_p_span">
              由於表層鞏膜炎很多時候與身體其他疾病有關，並可能會復發，因此重要的治療原則是去除病因，預防復發。
            </div>
            <div>
              <div>
                <div>若症狀輕微</div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  可以考慮局部使用類固醇藥物。
                </div>
              </div>
              <div>
                <div>若病情較重或頻繁發作</div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  應仔細檢查病人是否合併有自身免疫或結締組織的疾病，以免引起嚴重的併發症。
                </div>
              </div>
              <div>
                <div>病人如若同時有虹膜或睫狀體發炎</div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  應及時滴用放大瞳孔眼藥水，減輕炎症。
                </div>
              </div>
            </div>
          </div>
          <div class="ocularSurfaceDiseases_title_btn" @click="callTel">
            <span>鞏膜炎可能伴隨其他眼疾</span><span>立即致電預約治療</span>
          </div>
        </div>
      </div>
      <div id="damage">
        <div class="ocularSurfaceDiseases_title">角膜上皮破損</div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/2a769c496ebb7f7f.png"
              alt=""
              srcset=""
            />
          </div>
          <div class="ocularSurfaceDiseases_text_p_span">
            角膜共有五層，最表面的一層稱為上皮層，這一層出現刮傷或破損剝落的情況俗稱為角膜破皮，即角膜上皮破損（Corneal
            Abrasion）。
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            角膜上皮破損成因
          </div>
          <div>
            <div v-for="(item, index) in damageList1" :key="index">
              <span>{{ index + 1 }}</span>
              <div>
                <p v-for="(ele, i) in item.text" :key="i">{{ ele }}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            角膜上皮破損症狀
          </div>
          <div>
            <div v-for="(item, index) in damageList2" :key="index">
              <div><img :src="item.img" /></div>
              <div>
                <span v-for="(ele, i) in item.text" :key="i">{{ ele }}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            角膜上皮破損治療
          </div>
          <div>
            <div>
              <div>藥物治療</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                使用抗生素眼藥水預防感染，並且在每天睡前塗藥膏，在眼皮及角膜之間形成保護膜，避免眼皮把新生角膜上皮層扯下來，並戴上繃帶式隱形眼鏡（Bandage
                Contact Lens），待傷口癒合
              </div>
            </div>
            <div>
              <div>手術治療</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                用針頭在角膜病變處刺出一些較深的傷口，使表皮與下面組織結疤而緊密黏連。但由於此方法會造成角膜瘢痕且有角膜穿孔風險，因此現時較少使用這種治療方法。
              </div>
            </div>
            <div>
              <div>激光治療</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                激光治療性角膜切割術（Photo-Therapeutic Keratectomy,
                PTK）可治療復發性角膜上皮破損，成效相當不俗，而且復發率低於10%
              </div>
            </div>
          </div>
          <div class="ocularSurfaceDiseases_title_btn" @click="goWhatsApp">
            <span>WhatsApp了解治療方案</span>
          </div>
        </div>
      </div>
      <div id="keratoconus">
        <div class="ocularSurfaceDiseases_title">錐形角膜</div>
        <div>
          <div class="ocularSurfaceDiseases_text_p_span">
            又叫圓錐角膜，是角膜擴張、中央變薄向前突出，呈圓錐形為<span
              >特徵的一種眼病。患上錐形角膜，會導致近視或散光度數不同，嚴重時可能引起角膜水腫，影響視功能。</span
            >
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/284424c8276caf65.png"
            />
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            錐形角膜成因
          </div>
          <div>
            <div v-for="(item, index) in keratoconusList1" :key="index">
              <img :src="item.img" alt="" />
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            錐形角膜症狀
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/06/5a230949595f4632.png"
              />
            </div>
            <div>
              <div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  <span>1</span>出現向前突起的圓錐，圓錐頂端的角膜基質明顯變薄
                </div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  <span>2</span>近視或散光度數變化幅度較大、較快
                </div>
                <div class="ocularSurfaceDiseases_text_p_span">
                  <span>3</span
                  >角膜變尖的部分發生水腫甚至穿孔，令視功能突然下降及疼痛
                </div>
              </div>
              <div class="ocularSurfaceDiseases_title_btn" @click="goWhatsApp">
                <span>懷疑自己有錐形角膜？</span
                ><span>WhatsApp預約檢查及治療</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            錐形角膜治療
          </div>
          <div>
            <div>
              <div>新型隱形眼鏡</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                硬式隱形眼鏡頂壓力較大，可以頂壓角膜變形，但較難適應，有機會在眼睛表面移位。新型的隱形眼鏡（Hybrid
                Contact Lens）既能提供良好的頂壓力，舒適度亦較良好。
              </div>
            </div>
            <div>
              <div>膠原交聯術（Corneal Collagen Cross-linking）</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                <span
                  >在角膜局部滴核黃素（Riboflavin，即維生素B2，用於增加能量吸收並釋出活性氧）</span
                >，再經由紫外線（UVA）照射，令角膜組織釋放一些粒子，使角膜纖維中的膠原蛋白緊扣一起，角膜因此而變得堅韌穩定。
              </div>
            </div>
            <div>
              <div>角膜基質環植入術（Intacs Implant）</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                為治療錐形角膜的方法，但若角膜疤痕較嚴重時，病人最終可能需要通過角膜移植來改善視功能
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="keratoplasty">
        <div class="ocularSurfaceDiseases_title">角膜移植</div>
        <div>
          <div class="ocularSurfaceDiseases_text_p_span">
            角膜移植是把病變的眼角膜換成正常的眼角膜，使患眼疾的眼睛恢復視力或控制角膜病變，達致增進視功能或治療某些角膜疾病的效果。一些引起患者嚴重視功能受損甚至失明的角膜疾病，或可以此法治療。因為角膜本身不含血管，不會令身體出現排斥反應，所以角膜移植的成功率是器官移植之首。
          </div>
          <div class="ocularSurfaceDiseases_title_btn" @click="callTel">
            <span>角膜移植助您重見光明</span><span>即致電約見醫生了解更多</span>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            角膜移植適合患者
          </div>
          <div>
            <div>
              <div class="ocularSurfaceDiseases_text_p_span">
                外傷如：刺傷、燒傷、燙傷或化學品灼傷角膜等
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                嚴重角膜感染如：細菌及過濾性病毒感染
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                角膜退化性疾病
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                先天性角膜疾病如：錐形角膜
              </div>
              <div class="ocularSurfaceDiseases_text_p_span">
                術後角膜退化或損傷
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/06/ff742016ad1ea80b.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/06/ac72de08eb33f8a2.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                角膜病變可嚴重影響視功能（a），而接受角膜移植，換上透明清晰的角膜後，可以重建視功能（b）
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            角膜移植併發症
          </div>
          <div>
            <div class="ocularSurfaceDiseases_text_p_span">排斥反應</div>
            <div class="ocularSurfaceDiseases_text_p_span">眼部感染</div>
            <div class="ocularSurfaceDiseases_text_p_span">青光眼</div>
            <div class="ocularSurfaceDiseases_text_p_span">
              角膜縫線<br />鬆脫
            </div>
            <div class="ocularSurfaceDiseases_text_p_span">
              術後<br />屈光不正
            </div>
          </div>
        </div>
        <div>
          <div
            class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
          >
            角膜移植術
          </div>
          <div>
            <div>
              <div>全層角膜移植</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                傳統的角膜移植多採用全層角膜移植方法，把5層角膜組織全部更換及移植。然而，並非每種病變都會損壞全層角膜。
              </div>
            </div>
            <div>
              <div>板層角膜移植</div>
              <div class="ocularSurfaceDiseases_text_p_span">
                板層眼角膜移植只更換部分角膜層，盡量保留患者仍具功能的角膜，降低治療入侵及排斥機率，更為安全、有效，術後傷口及視功能恢復也較快。
              </div>
            </div>
            <div>
              <div v-for="(item, index) in keratoplastyList1" :key="index">
                <div>{{ item.therapy }}</div>
                <div>
                  <div v-if="Array.isArray(item.involve)">
                    <div v-for="(ele, index) in item.involve" :key="index">
                      <div v-if="Array.isArray(ele)">
                        <div v-for="(e, index) in ele" :key="index">
                          {{ e }}
                        </div>
                      </div>
                      <div v-else>{{ ele }}</div>
                    </div>
                  </div>
                  <div v-else>{{ item.involve }}</div>
                </div>
                <div>
                  <div v-if="Array.isArray(item.postoperation)">
                    <div v-for="(el, index) in item.postoperation" :key="index">
                      <div v-if="Array.isArray(el)">
                        <div v-for="(e, index) in el" :key="index">{{ e }}</div>
                      </div>
                      <div v-else>{{ el }}</div>
                    </div>
                  </div>
                  <div v-else>{{ item.postoperation }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="faq">
        <div
          class="ocularSurfaceDiseases_title_text_bg ocularSurfaceDiseases_title_text"
        >
          角膜移植常見問題
        </div>
        <div>
          <PageCollapse
            :answer="meetArr"
            :downarr="'ocularSurfaceDiseases'"
            :style="{ '--subassembly-color': '#7DBE9C' }"
          />
        </div>
      </div>
    </div>
    <div>
      <rightSidesNavigation :service-navigation="serviceNavigation" />
    </div>
    <!-- 表单 -->
    <div class="fromTable">
      <FormFooterInfo
        :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
        :co="`color:${'#7DBE9C;'}`"
      />
    </div>
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.ocularSurfaceDiseases_nav {
  max-width: 1200px;
  margin: auto;
  margin-top: -76.3%;
  transform: scale(0.85);

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
        color: #419368;
        margin-right: 65px;
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        margin: 60px auto 120px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > div:nth-child(1) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          &>div {
            width: 580px;
            height: 73px;
            border-radius: 10px;
            border: solid 1px #7DBE9C;
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
          border: solid 1px #7DBE9C;
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
          padding: 97px 31px 61px 280px;
          font-size: 22px;
          transform: scale(0.85);
        }

        & > div:nth-child(1) {
          background: url('https://static.cmereye.com/imgs/2023/06/6d544e0b46ceee84.png');
          background-size: 100% 100%;
        }

        & > div:nth-child(2) {
          background: url('https://static.cmereye.com/imgs/2023/06/85baaef5d466b24b.png');
          background-size: 100% 100%;
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
          border: solid 1px #7DBE9C;
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
        color: #419368;
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
              background: #7DBE9C;
              border-radius: 50%;
              color: #fff;
              justify-content: center;
              align-items: center;
              line-height: 38px;
              margin-right: 20px;
            }

            & > span:nth-child(2) {
              max-width: 552px;
              line-height: 42px;
              font-size: 22px;
            }
          }
        }
      }
    }

    & > div:nth-child(4) {
      margin-top: 120px;
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
          width: 350px;
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
              color: #7DBE9C;
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
          border: solid 2px #7DBE9C;

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
    margin-bottom: 160px;

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

          & > div::before {
            content: '';
            background: url('https://static.cmereye.com/imgs/2023/06/4ec5fda73d711558.png');
            width: 7px;
            height: 9px;
            display: inline-block;
            margin-right: 10px;
            margin-bottom: 3px;
          }

          & > div:nth-child(2) {
            padding: 75px 0 72px;
            border-top: dashed 1px #7DBE9C;
            border-bottom: dashed 1px #7DBE9C;
            width: 667px;
          }
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
          margin: 60px auto 80px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background: url('https://static.cmereye.com/imgs/2023/06/d4f5b0e6f7aad173.png');
          width: 156px;
          height: 155px;
          text-align: center;
        }
      }
    }

    & > div:nth-child(4) {
      margin-top: 140px;

      & > div:nth-child(2) {
        padding-left: 42px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 50px auto 140px;

        & > div {
          display: flex;
          width: 520px;
          height: 140px;
          border-radius: 10px;
          border: solid 2px #7DBE9C;
          position: relative;
          padding: 40px 45px;

          & > div:nth-child(2) {
            font-size: 22px;
            line-height: 38px;
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          & > div:nth-child(1) {
            position: absolute;
            left: -24px;
            top: 50%;
            transform: translateY(-50%);
            font-family: 'OPPOSans-B';
            font-size: 70px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1;
            letter-spacing: 0px;
            color: #7DBE9C;
            background: #fff;
            border-top: 10px solid #fff;
            border-bottom: 10px solid #fff;
          }
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        margin-top: 50px;
        padding-left: 26px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        & > div {
          width: 382px;
          height: 124px;
          background-color: #ffffff;
          box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          font-size: 22px;
          line-height: 38px;
          border-top: 10px solid #7DBE9C;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  & > #episcleritis {
    margin: 160px auto;

    & > div:nth-child(2) {
      margin-top: 60px;

      & > div:nth-child(2) {
        width: 1294px;
        height: 242px;
        box-shadow: 2px 3px 21px 0px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        padding: 0 40px;
        justify-content: space-between;

        & > div {
          display: flex;
          align-items: center;
          justify-content: center;

          & > div:nth-child(2) {
            max-width: 155px;
            margin-left: 30px;
            font-size: 22px;
          }
        }

        & > div:nth-child(2) {
          width: 436px;
          border-left: 1px solid #eeeeee;
          border-right: 1px solid #eeeeee;
        }
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        justify-content: space-between;
        padding-left: 26px;
        margin-top: 50px;

        & > div {
          width: 560px;
          height: 220px;
          border-radius: 10px;
          border: solid 4px #eeeeee;
          display: flex;
          align-items: center;
          flex-direction: row;

          & > div:nth-child(1) {
            padding: 58px 42px;
            font-family: 'OPPOSans-B';
            font-size: 52px;
            line-height: 38px;
            letter-spacing: 0px;
            color: #7DBE9C;
            border-right: solid 3px #7DBE9C;
          }

          & > div:nth-child(2) {
            margin-left: 20px;
            font-size: 22px;
            line-height: 42px;
          }
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        padding-left: 26px;
        justify-content: space-between;
        text-align: center;
        margin-top: 50px;

        & > div {
          background: url('https://static.cmereye.com/imgs/2023/06/2a6caa9ee33d9d92.png');
          width: 281px;
          height: 112px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 40px;
          position: relative;

          & > span {
            position: absolute;
            left: 29px;
            top: 50%;
            transform: translateY(-50%);
            font-family: 'OPPOSans-H';
            font-size: 32px;
            line-height: 42px;
            letter-spacing: 0px;
            color: #ffffff;
          }
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        margin-top: 80px;
        flex-direction: column;

        & > div {
          display: flex;
          align-items: flex-start;
          padding-left: 25px;

          & > div:nth-child(1) {
            max-width: 836px;
            margin-right: 60px;

            & > div:nth-child(1) {
              width: 562px;
              height: 60px;
              background-color: #7DBE9C;
              border-radius: 30px;
              margin-bottom: 45px;

              display: flex;
              justify-content: center;
              align-items: center;

              font-size: 28px;
              line-height: 52px;
              color: #ffffff;
            }

            & > div:nth-child(2) {
              font-size: 22px;
              line-height: 42px;
            }
          }

          & > div:nth-child(2) {
            & > div {
              margin-top: 20px;
              font-size: 16px;
              line-height: 28px;
              letter-spacing: 0px;
              color: #999999;
            }
          }
        }

        & > div:nth-child(1) {
          margin-bottom: 140px;
        }
      }
    }

    & > div:nth-child(6) {
      & > div:nth-child(2) {
        flex-direction: column;
        margin-top: 60px;
        padding: 0 26px;

        & > div:nth-child(1) {
          line-height: 46px;
          padding-left: 3px;
          font-size: 22px;
        }

        & > div:nth-child(2) {
          display: flex;
          justify-content: space-between;
          margin-top: 60px;

          & > div {
            width: 446px;
            height: 210px;
            background-color: #ffffff;
            box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
            transform: scale(0.85);

            & > div:nth-child(1) {
              width: 100%;
              height: 68px;
              background-color: #7DBE9C;

              font-family: 'Noto Sans HK';
              font-size: 26px;
              line-height: 46px;
              letter-spacing: 0px;
              color: #ffffff;

              display: flex;
              justify-content: center;
              align-items: center;
            }

            & > div:nth-child(2) {
              font-size: 22px;
              line-height: 40px;
              margin-top: 20px;
            }
          }

          & > div:nth-child(1) {
            width: 343px;

            & > div:nth-child(2) {
              padding-left: 18px;
            }
          }

          & > div:nth-child(2) {
            & > div:nth-child(2) {
              padding: 0 25px;
            }
          }

          & > div:nth-child(3) {
            & > div:nth-child(2) {
              padding-left: 25px;
            }
          }
        }
      }
    }

    & > div {
      & > div:nth-child(2) {
        margin-top: 50px;
        margin-bottom: 140px;
        display: flex;
      }
    }

    & > div:last-child {
      & > div:nth-child(2) {
        margin-bottom: 80px;
      }
    }
  }

  & > #damage {
    margin: 160px auto;

    & > div {
      & > div:nth-child(2) {
        display: flex;
        padding-left: 25px;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      margin: 80px auto 140px;

      & > div:nth-child(2) {
        max-width: 628px;
        margin-left: 63px;

        font-size: 24px;
        line-height: 46px;
        color: #419368;
        letter-spacing: -1px;
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 40px auto 140px;

        & > div {
          background: url('https://static.cmereye.com/imgs/2023/06/88cae23e25d33512.png');
          background-size: 100% 100%;
          width: 360px;
          height: 144px;

          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;

          & > span {
            position: absolute;
            top: 10px;
            left: 19px;
            font-family: 'OPPOSans-B';
            font-size: 18px;
            line-height: 1;
            letter-spacing: 0px;
            color: #ffffff;
          }

          & > div {
            font-size: 22px;
            line-height: 40px;
            text-align: center;
          }
        }

        & > div:nth-child(n + 4) {
          margin-top: 50px;
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        flex-wrap: wrap;
        justify-content: center;
        margin: 50px auto 140px;

        & > div {
          display: flex;
          position: relative;

          & > div:nth-child(1) {
            position: absolute;
            left: -144px;
          }

          & > div:nth-child(2) {
            width: 272px;
            height: 164px;
            border-radius: 10px;
            border: solid 2px #7DBE9C;
            line-height: 1.8;
            font-size: 22px;
            font-family: 'Noto Sans HK';
          }
        }

        & > div:nth-child(1),
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            width: 373px;
          }
        }

        & > div:nth-child(1) {
          margin-left: 95px;
          margin-right: 214px;

          & > div:nth-child(2) {
            padding: 20px 41px 20px 58px;
          }
        }

        & > div:nth-child(2) {
          & > div:nth-child(2) {
            padding-left: 58px;
            display: flex;
            align-items: center;
          }
        }

        & > div:nth-child(3) {
          margin-left: 100px;

          & > div:nth-child(2) {
            padding-left: 68px;
            display: flex;
            align-items: center;
          }
        }

        & > div:nth-child(4) {
          margin-left: 150px;
          margin-right: 135px;

          & > :nth-child(1) {
            left: -113px;
          }

          & > div:nth-child(2) {
            padding-left: 68px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        }

        & > div:nth-child(5) {
          & > :nth-child(1) {
            left: -80px;
          }

          & > div:nth-child(2) {
            padding-left: 90px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
        }

        & > div:nth-child(n + 3) {
          margin-top: 80px;
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        flex-direction: column;
        margin-top: 80px;

        & > div {
          margin-bottom: 120px;

          & > div:nth-child(1) {
            font-family: 'NotoSansHK-Medium';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            padding-bottom: 10px;
            position: relative;
            color: #515151;
          }

          & > div:nth-child(1)::after {
            content: '';
            width: 357px;
            border-bottom: dashed 1px #7DBE9C;
            display: inline-block;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          & > div:nth-child(2) {
            margin-top: 30px;
            font-size: 22px;
            line-height: 40px;
          }
        }
      }
    }
  }

  & > #keratoconus {
    & > div {
      & > div:nth-child(2) {
        display: flex;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      margin: 80px auto 140px;

      & > div:nth-child(1) {
        max-width: 626px;
        margin-right: 63px;
        color: #7DBE9C;

        & > span {
          letter-spacing: -1px;
        }
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        margin: 50px auto 140px;
        justify-content: space-between;
        padding: 0 50px 0 58px;

        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;

          & > div:nth-child(2) {
            margin-top: 30px;
            max-width: 262px;
            text-align: center;
            font-family: 'Noto Sans HK';
            font-size: 22px;
            line-height: 40px;
            letter-spacing: 0px;
            color: #515151;
          }
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        margin: 50px auto 140px;
        padding-left: 52px;

        & > div:nth-child(2) {
          margin-left: 60px;
          padding-top: 20px;
          padding-bottom: 40px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          & > div:nth-child(1) {
            & > div {
              line-height: 40px;
              display: flex;
              align-items: center;
              margin-bottom: 27px;

              & > span {
                display: flex;
                width: 40px;
                height: 40px;
                background: #7DBE9C;
                border-radius: 50%;
                font-family: OPPOSans-B;
                font-size: 24px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 40px;
                letter-spacing: 0px;
                color: #ffffff;
                align-items: center;
                justify-content: center;
                margin-right: 17px;
              }
            }
          }

          & > div:nth-child(2) {
            margin: 0;
          }
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        flex-direction: column;
        margin-top: 74px;

        & > div {
          margin-bottom: 88px;
          position: relative;

          & > div:nth-child(1) {
            position: absolute;
            top: -12%;
            left: 32px;
            width: 349px;
            height: 57px;
            background: #7DBE9C;
            border-radius: 29px;

            font-family: 'NotoSansHK-Medium';
            font-size: 30px;
            line-height: 52px;
            letter-spacing: 0px;
            color: #ffffff;
            text-align: center;
          }

          & > div:nth-child(2) {
            width: 1200px;
            height: 206px;
            border-radius: 20px;
            border: solid 2px #7DBE9C;

            font-size: 22px;
            line-height: 40px;
            padding-left: 32px;
            padding-right: 32px;
            padding-top: 66px;
          }
        }

        & > div:nth-child(2) {
          & > div:nth-child(1) {
            width: 713px;
          }
        }

        & > div:nth-child(3) {
          margin-bottom: 0;

          & > div:nth-child(1) {
            width: 577px;
          }
        }
      }
    }
  }

  & > #keratoplasty {
    margin-top: 160px;
    margin-bottom: 140px;

    & > div:nth-child(2) {
      margin-top: 88px;
      margin-bottom: 140px;

      & > div:nth-child(1) {
        margin-bottom: 120px;
        line-height: 46px;
        color: #419368;
      }
    }

    & > div {
      & > div:nth-child(2) {
        padding-left: 26px;
        display: flex;
      }
    }

    & > div:nth-child(3) {
      margin-bottom: 140px;

      & > div:nth-child(2) {
        flex-direction: column;

        & > div:nth-child(1) {
          display: flex;
          justify-content: space-between;
          margin: 50px 0 70px;

          & > div {
            width: 234px;
            height: 160px;
            background-color: #ffffff;
            border-radius: 20px;
            border: solid 2px #7DBE9C;
            font-size: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            transform: scale(0.85);
          }
        }

        & > div:nth-child(2) {
          text-align: center;

          & > div:nth-child(1) {
            display: flex;
            justify-content: center;

            & > div:nth-child(1) {
              margin-right: 26px;
            }
          }

          & > div:nth-child(2) {
            font-size: 16px;
            line-height: 36px;
            margin-top: 12px;
          }
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(2) {
        justify-content: space-between;
        margin: 50px auto 140px;

        & > div {
          position: relative;
          z-index: 5;
          width: 189px;
          height: 188px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        & > div::before {
          content: '';
          width: 189px;
          height: 188px;
          background: url('https://static.cmereye.com/imgs/2023/06/d4f5b0e6f7aad173.png');
          background-size: 100% 100%;
          transform: rotate(-90deg);
          display: inline-block;
          z-index: 1;
          position: absolute;
        }
      }
    }

    & > div:nth-child(5) {
      & > div:nth-child(2) {
        flex-direction: column;

        & > div:nth-child(1) {
          margin-bottom: 60px;

          & > div:nth-child(1) {
            position: relative;
            margin-left: 12px;
            font-family: 'NotoSansHK-Medium';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: #7DBE9C;
            margin-bottom: 30px;
          }

          & > div:nth-child(2) {
            font-size: 22px;
            line-height: 36px;
          }
        }

        & > div:nth-child(2) {
          & > div:nth-child(1) {
            position: relative;
            margin-left: 12px;
            font-family: 'NotoSansHK-Medium';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: #7DBE9C;
            margin-bottom: 30px;
          }

          & > div:nth-child(2) {
            font-size: 22px;
            line-height: 36px;
            margin-bottom: 40px;
          }
        }

        & > div:nth-child(1) {
          & > div:nth-child(1)::before {
            content: '';
            width: 6px;
            height: 6px;
            background: #7DBE9C;
            border-radius: 50%;
            display: flex;
            align-items: center;
            position: absolute;
            left: -10px;
            top: 50%;
          }
        }

        & > div:nth-child(2) {
          & > div:nth-child(1)::before {
            content: '';
            width: 6px;
            height: 6px;
            background: #7DBE9C;
            border-radius: 50%;
            display: flex;
            align-items: center;
            position: absolute;
            left: -10px;
            top: 50%;
          }
        }

        & > div:nth-child(3) {
          max-width: 1294px;
          border: solid 1px #dee2e6;

          & > div {
            display: flex;

            & > div:nth-child(1) {
              width: 370px;
            }

            & > div:nth-child(2) {
              width: 410px;
              border-left: solid 1px #dee2e6;
              border-right: solid 1px #dee2e6;
            }

            & > div:nth-child(3) {
              width: 513px;
            }
          }

          & > div:nth-child(1) {
            height: 80px;
            background: #7DBE9C;

            font-family: 'NotoSansHK-Medium';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #ffffff;

            & > div {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          & > div:nth-child(2) {
            height: 250px;
            background: #ffffff;

            font-family: 'NotoSansHK-Medium';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.8;
            letter-spacing: 0px;
            color: #515151;

            & > div {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          & > div:nth-child(3) {
            height: 410px;
            background: #f8f8f9;

            font-family: 'NotoSansHK-Medium';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.8;
            letter-spacing: 0px;
            color: #515151;

            & > div:nth-child(1) {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            & > div:nth-child(2) {
              display: flex;
              flex-direction: column;

              & > div:nth-child(1) {
                & > div:nth-child(1) {
                  height: 191px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-bottom: solid 1px #dee2e6;
                }

                & > div:nth-child(2) {
                  height: 217px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
              }
            }

            & > div:nth-child(3) {
              display: flex;
              flex-direction: column;

              & > div:nth-child(1) {
                & > div:nth-child(1) {
                  height: 191px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-bottom: solid 1px #dee2e6;
                }

                & > div:nth-child(2) {
                  height: 217px;
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                  padding-left: 88px;
                }
              }
            }
          }
        }
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
  font-family: 'NotoSansHK';
  font-size: 50px;
  font-weight: Bold;
  font-stretch: normal;
  line-height: 48px;
  letter-spacing: 0px;
  color: #7DBE9C;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.ocularSurfaceDiseases_text_p_span {
  font-family: 'Noto Sans HK';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #515151;
}

.ocularSurfaceDiseases_title_text {
  font-family: 'NotoSansHK';
  font-size: 38px;
  font-weight: Bold;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0px;
  color: #7DBE9C;

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

  font-family: 'Noto Sans HK';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;
}

.fromTable {
  margin-top: -85%;
}

// 头部样式
.ocularSurfaceDiseases_head {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // margin-top: 100px;
    // margin-left: 35vw;
    width: 100%;
    max-width: 1080px;
    margin: 100px auto 0;
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        font-family: 'NotoSansCJKtc-Bold';
        font-size: 119px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #7DBE9C;
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
        color: #7DBE9C;
        margin-top: 15px;
        font-size: 76px;
        letter-spacing: 0px;
      }
      & > div:nth-child(3),& > div:nth-child(4) {
        font-family: 'DINCondensed-Bold';
        display: block;
        position: relative;
        z-index: 5;
        font-size: 76px;
        letter-spacing: 0px;
        -webkit-text-stroke: 1.5px #7DBE9C;
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

    & > div:nth-child(1)::after {
      content: '';
      background: #f2f2f2;
      width: 40vw;
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
@media screen and (max-width: 768px) {
  .ocularSurfaceDiseases_head {
    &>div:nth-child(1) {
      width: calc(100% - 60px);
      justify-content: flex-end;
      align-items: flex-end;
      display: flex;
      margin: 150px auto 0;
      &>div:nth-child(1) {
        &>div:nth-child(1) {
          font-size: 36px;
          text-align: right;
        }
        &>div:nth-child(2) {
          font-size: 24px;
          letter-spacing: 0.01em;
          margin-top: 3px;
          text-align: right;
          line-height: 1;
        }
        & > div:nth-child(3),& > div:nth-child(4) {
          font-size: 24px;
          letter-spacing: 0.01em;
          -webkit-text-stroke: 1px #7DBE9C;
          clip-path: polygon(0 0, 100% 0, 100% 50% ,0 50%);
          transform: translateY(-20%);
        }
        & > div:nth-child(4) {
          clip-path: polygon(0 0, 100% 0, 100% 40% ,0 40%);
          transform: translateY(-73%);
        }
      }
      &>div:nth-child(1)::after {
        width: 190px;
        height: 200px;
        top: 195px;
      }
      &>div:nth-child(2) {
        top: 0;
        width: 320px;
        left: -1px;
        &>img:nth-child(1){
          margin-bottom: 5px;
        }
      }
    }
  }
  .ocularSurfaceDiseases_nav {
    transform: scale(1);
    margin-top: 190px;
    & > #pterygium {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        flex-direction: column;
        margin: 25px auto 45px;
        & > div:nth-child(1) {
          width: 100%;
          line-height: 1.8;
          margin-right: 0;
          margin-bottom: 40px;
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          margin: 35px auto 50px;
          flex-direction: column;
          & > div:nth-child(1) {
            & >div {
              margin-bottom: 20px;
              width: 100%;
              font-size: 14px;
              line-height: 1.8;
              height: 40px;
            }
          }
          & > div:nth-child(2) {
            width: 100%;
            padding: 15px 12px;
            font-size: 14px;
            line-height: 1.8;
            height: auto;
          }
        }
        & > div:nth-child(3) {
          margin: 40px auto 50px;
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          flex-direction: column;
          margin: 25px auto 0;
          justify-content: flex-start;
          width: 100%;
          & > div {
            width: 100%;
            height: auto;
            font-size: 13px;
            line-height: 1.8;
            transform: scale(1);
            min-height: 180px;
          }
          & > div:nth-child(1) {
            background-repeat: no-repeat;
            background-size: 100% auto;
            padding: 14% 10px 20% 45%;
          }
          & > div:nth-child(2) {
            background-repeat: no-repeat;
            background-size: 100% auto;
            padding: 35px 10px 20% 45%;
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          flex-wrap: wrap;
          margin-top: 30px;
          & > div {
            width: calc(50% - 15px);
            height: auto;
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            & > div:nth-child(1) {
              font-size: 20px;
            }
            & > div:nth-child(2) {
              padding: 25px 15px;
              font-size: 14px;
              line-height: 1.8;
            }
          }
        }
      }
    }
    & > #blepharitis {
      width: calc(100% - 60px);
      margin: 30px auto 0;
      & > div:nth-child(2) {
        display: flex;
        flex-direction: column-reverse;
        margin: 25px auto 50px;
        & > div:nth-child(2) {
          width: 100%;
          line-height: 1.8;
          margin-left: 0;
          margin-bottom: 25px;
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          margin: 30px auto 0;
          flex-direction: column;
          padding-left: 0;
          & > div:nth-child(1) {
            & > div {
              margin-bottom: 30px;
              & > span:nth-child(1) {
                width: 22px;
                height: 22px;
                line-height: 22px;
                font-size: 14px;
                min-width: 22px;
                margin-right: 10px;
              }
              & > span:nth-child(2) {
                line-height: 1.8;
                font-size: 14px;
              }
            }
          }
          & > div:nth-child(2) {
            margin-top: 20px;
          }
        }
        & > div:last-child{
          margin-top: 50px;
        }
      }
      & > div:nth-child(4) {
        margin-top: 50px;
        & > div:nth-child(2) {
          margin: 35px 0 0;
          flex-wrap: wrap;
          & > div {
            width: calc(50% - 25px);
            margin-bottom: 25px;
            & > div:nth-child(2) {
              width: 100%;
              padding: 0;
              margin: 12px 0 0;
              font-size: 14px;
              line-height: 1.8;
            }
          }
        }
      }
      & > div:nth-child(5) {
        margin-top: 20px;
        & > div:nth-child(2) {
          margin: 35px 0 0;
          flex-direction: column;
          & > div{
            width: 100%;
            margin-bottom: 35px;
            padding-bottom: 60px;
            & > div:nth-child(1) {
              & > div:nth-child(2) {
                margin-right: 0;
              }
            }
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
              margin-top: 25px;
            }
          }
          & > div::after {
            transform: rotate(90deg);
            background-size: 100% auto;
            height: calc(100vw - 60px);
            right: 0;
            top: 100%;
            transform: rotate(90deg);
            transform-origin: top right;
            background-size: auto 100%;
            background-repeat: no-repeat;
            height: calc(100vw - 60px);
          }
        }
      }
    }
    & > #keratitis {
      width: calc(100% - 60px);
      margin: 0 auto;
      & > div:nth-child(2) {
        margin-top: 30px;
        & > div:nth-child(2) {
          margin: 35px auto 20px;
          flex-wrap: wrap;
          & > div {
            width: 26%;
            margin-bottom: 30px;
            div:nth-child(2) {
              margin-top: 15px;
              line-height: 1.8;
            }
          }
        }
      }
      & > div:nth-child(3) {
        margin: 55px auto;
        & > div:nth-child(2) {
          margin-top: 15px;
          line-height: 1.8;
          font-size: 14px;
          &>div:not(:first-child){
            margin-top: 15px;
          }
        }
        & > div:nth-child(3) {
          padding: 0;
          margin: 30px 0 0;
          align-items: flex-start;
          & > div {
            width: calc(50% - 15px);
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
              margin-top: 10px;
              text-align: left;
            }
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          margin-top: 15px;
          flex-wrap: wrap;
          & > div {
            width: 100%;
            height: auto;
            font-size: 14px;
            line-height: 1.8;
            margin-bottom: 20px;
            padding: 12px 15px;
            &:nth-of-type(2),&:nth-of-type(3){
              width: calc(50% - 10px);
            }
          }
        }
      }
    }
    & > #iritis {
      width: calc(100% - 60px);
      margin: 50px auto 0;
      & > div:nth-child(2) {
        & > div:nth-child(2) {
          flex-direction: column;
          padding-left: 0;
          & > div:nth-child(1) {
            font-size: 13px;
            line-height: 1.8;
            padding: 5px 0 15px;
            &>div{
              padding: 10px 0;
            }
            & > div::before {
              margin-right: 7px;
              margin-bottom: 0;
            }
            & > div:nth-child(2) {
              width: 100%;
              padding: 15px 0 10px;
            }
          }
           & > div:nth-child(2) {
             width: 80%;
             margin: 0 auto;
           }
        }
      }
      & > div:nth-child(3) {
        margin-top: 50px;
        & > div:nth-child(2) {
          padding-left: 0;
          margin-top: 25px;
          flex-wrap: wrap;
          justify-content: center;
          & > div {
            width: calc((100vw - 60px)/4 - 10px);
            height: calc((100vw - 60px)/4 - 10px);
            margin: 0 5px 25px;
            background-size: 100% auto;
            background-repeat: no-repeat;
            line-height: 1.4;
            font-size: 13px;
          }
        }
      }
      & > div:nth-child(4) {
        margin-top: 55px;
        & > div:nth-child(2) {
          margin: 25px auto 0;
          padding-left: 0;
          flex-direction: column;
          & > div {
            width: calc(100% - 10px);
            margin-bottom: 30px;
            margin-left: 10px;
            height: auto;
            padding: 15px 20px;
            & > div:nth-child(2) {
              font-size: 14px;
              margin-left: 10px;
              line-height: 1.8;
            }
            & > div:nth-child(1) {
              left: -30px;
              font-size: 40px;
            }
          }
        }
      }
      & > div:nth-child(5) {
        margin-top: 20px;
        & > div:nth-child(2) {
          flex-direction: column;
          padding-left: 0;
          margin-top: 0;
          &>div{
            width: 100%;
            margin-top: 25px;
            height: auto;
            font-size: 14px;
            line-height: 1.8;
            padding: 25px 0;
            border-top: none;
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            &::before{
              content: '';
              height: 5px;
              width: 100%;
              position: absolute;
              background: #7DBE9C;
              top: 0;
              left: 0;
            }
          }
        }
      }
    }
    & > #episcleritis {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 15px;
        & > div:nth-child(2) {
          width: 100%;
          height: auto;
          padding: 0;
          box-shadow: none;
          display: flex;
          align-items: flex-start;
          margin-top: 25px;
          margin-bottom: 10px;
          &> div {
            width: calc(33% - 20px);
            flex-direction: column;
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
              margin-left: 0;
            }
          }
          & > div:nth-child(2) {
            border: none;
            width: calc(33% - 20px);
          }
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          flex-direction: column;
          margin-top: 20px;
          padding-left: 0;
          margin-bottom: 30px;
          & > div {
            width: 100%;
            height: auto;
            padding: 20px 0;
            margin-bottom: 30px;
            & > div:nth-child(1) {
              padding: 25px 20px 30px 15px;
              font-size: 30px;
              line-height: 1;
              border-right: solid 2px #7DBE9C;
            }
            & > div:nth-child(2) {
              margin-left: 15px;
              font-size: 14px;
              line-height: 1.8;
            }
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          padding-left: 0;
          flex-wrap: wrap;
          margin-top: 20px;
          margin-bottom: 30px;
          & > div {
            width: 150px;
            height: 60px;
            background-size: 100% 100%;
            margin-bottom: 25px;
            line-height: 1.4;
            & > span {
              font-size: 16px;
              line-height: 1.6;
              left: 16px;
            }
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          margin-top: 25px;
          margin-bottom: 50px;
          & > div {
            flex-direction: column;
            padding-left: 0;
            & > div:nth-child(1) {
              margin-right: 0;
              & > div:nth-child(1) {
                width: 100%;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                margin-bottom: 20px;
              }
              & > div:nth-child(2) {
                font-size: 14px;
                line-height: 1.8;
              }
            }
            & > div:nth-child(2) {
              width: 80%;
              margin: 25px auto 0;
              & > div {
                font-size: 13px;
                line-height: 1.4;
              }
            }
          }
          & > div:nth-child(1) {
            margin-bottom: 50px;
          }
        }
      }
      & > div:nth-child(6) {
        & > div:nth-child(2) {
          padding: 0;
          margin-top: 15px;
          margin-bottom: 0;
          & > div:nth-child(1) {
            line-height: 1.8;
            font-size: 14px;
            padding-left: 0;
          }
          & > div:nth-child(2) {
            flex-direction: column;
            margin-top: 20px;
            & > div {
              width: 100%;
              transform: scale(1);
              height: auto;
              margin-bottom: 25px;
              & > div:nth-child(1) {
                font-size: 18px;
                line-height: 45px;
                height: 45px;
              }
              & > div:nth-child(2) {
                font-size: 14px;
                line-height: 1.8;
                text-align: center;
                margin-top: 0;
              }
            }
            & > div:nth-child(1) {
              width: 100%;

              & > div:nth-child(2) {
                padding: 20px;
              }
            }
            & > div:nth-child(2) {
              & > div:nth-child(2) {
                padding: 20px;
              }
            }
            & > div:nth-child(3) {
              & > div:nth-child(2) {
                padding: 20px;
              }
            }
          }
        }
      }
    }
    & > #damage {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div {
        & > div:nth-child(2) {
          padding-left: 0;
        }
      }
      & > div:nth-child(2) {
        flex-direction: column-reverse;
        margin: 15px auto 50px;
        & > div:nth-child(1) {
          margin-top: 20px;
        }
        & > div:nth-child(2) {
          font-size: 14px;
          line-height: 1.8;
          margin-left: 0;
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          margin: 20px auto 30px;
          & > div {
            width: 155px;
            background: none;
            height: auto;
            padding: 10px 15px;
            border: solid 4px #eeeeee;
            border-radius: 15px;
            margin-bottom: 25px;
            & > span {
              font-size: 12px;
              background: #ACD9C1;
              width: 30px;
              height: 20px;
              display: block;
              text-align: center;
              line-height: 20px;
              border-radius: 20px 2px 30px 0;
              top: -4px;
              left: -4px;
            }
            & > div {
              font-size: 14px;
              line-height: 1.8;
              text-align: left;
              p{
                display: inline;
              }
            }
          }
          & > div:nth-child(n + 4) {
             margin-top: 0;
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          margin: 25px auto 30px;
          & > div {
            width: 100%;
            margin-bottom: 30px;
            & > div:nth-child(1) {
              position: relative;
              left: 0;
            }
            & > div:nth-child(2) {
              width: 100%;
              height: auto;
              font-size: 14px;
              line-height: 1.8;
              margin-left: -4px;
              border-radius: 0 10px 10px 0;
              display: flex;
              align-items: flex-start;
              flex-direction: column;
              justify-content: center;
            }
          }
          & > div:nth-child(1),
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              width: 100%;
            }
          }

          & > div:nth-child(1) {
            margin-left: 0;
            margin-right: 0;

            & > div:nth-child(2) {
              padding: 0;
              padding-left: 20px;
            }
          }

          & > div:nth-child(2) {
            & > div:nth-child(2) {
              padding-left: 20px;
              align-items: flex-start;
            }
          }
           & > div:nth-child(3) {
            margin-left: 0;

            & > div:nth-child(2) {
              padding-left: 20px;
              align-items: flex-start;
            }
          }

          & > div:nth-child(4) {
            margin-left: 0;
            margin-right: 0;

            & > :nth-child(1) {
              left: 0;
            }

            & > div:nth-child(2) {
              padding-left: 20px;
              align-items: flex-start;
            }
          }

          & > div:nth-child(5) {
            & > :nth-child(1) {
              left: 0;
            }

            & > div:nth-child(2) {
              padding-left: 20px;
              align-items: flex-start;
            }
          }

          & > div:nth-child(n + 3) {
            margin-top: 0;
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          margin-top: 25px;
          & > div {
            margin-bottom: 45px;
            & > div:nth-child(1) {
              font-size: 20px;
              line-height: 1;
              margin-bottom: 0;
            }
            & > div:nth-child(1)::after {
              width: 100%;
            }
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
              margin-top: 15px;
            }
          }
          &:last-child(){
            margin-bottom: 0;
          }
        }
      }
    }
    & > #keratoconus {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        flex-direction: column;
        margin: 15px auto 50px;
        & > div:nth-child(1) {
          margin-right: 0;
          & > span {
            letter-spacing: 0px;
          }
        }
        & > div:nth-child(2) {
          margin-top: 20px;
        }
      }
      & > div:nth-child(3) {
        & > div:nth-child(2) {
          padding: 0;
          margin: 30px 0 0 0;
          flex-wrap: wrap;
          & > div {
            width: calc(50% - 15px);
            margin-bottom: 45px;
            & > img:nth-child(1) {
              width: 80%;
            }
            & > div:nth-child(2) {
              font-size: 14px;
              margin-top: 10px;
              line-height: 1.8;
            }
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          margin: 25px auto 50px;
          padding-left: 0;
          flex-direction: column;
          & > div:nth-child(1) {
            width: 80%;
            margin: 0 auto;
          }
          & > div:nth-child(2) {
            margin-left: 0;
            padding-top: 0;
            padding-bottom: 0;
            & > div:nth-child(1) {
              margin-top: 30px;
              & > div {
                line-height: 1.6;
                & > span {
                  width: 25px;
                  min-width: 25px;
                  height: 25px;
                  line-height: 25px;
                  font-size: 14px;
                  margin-right: 1-px;
                }
              }
            }
            & > div:nth-child(2) {
              margin: 20px auto 0;
            }
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          margin-top: 45px;
          & > div {
            margin-bottom: 50px;
            & > div:nth-child(1) {
              top: -18px;
              left: 15px;
              width: max-content;
              font-size: 14px;
              line-height: 35px;
              height: 35px;
              padding: 0 40px;
            }
            & > div:nth-child(2) {
              width: 100%;
              height: auto;
              font-size: 14px;
              line-height: 1.8;
              padding: 30px 15px 20px;
            }
          }
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              width: max-content;
              padding: 0 10px;
              font-size: 13px;
            }
          }

          & > div:nth-child(3) {
            margin-bottom: 0;

            & > div:nth-child(1) {
              width: max-content;
              padding: 0 20px;
            }
          }
        }
      }
    }
    & > #keratoplasty {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 15px;
        margin-bottom: 0;
        & > div:nth-child(1) {
          margin-bottom: 0;
          line-height: 1.8;
        }
      }
      & > div:nth-child(3) {
        margin-top: 50px;
        margin-bottom: 50px;
        & > div:nth-child(2) {
          padding-left: 0;
          & > div:nth-child(1) {
            flex-direction: column;
            margin: 30px 0 0 0;
            & > div {
              width: 100%;
              height: auto;
              font-size: 14px;
              line-height: 1.8;
              padding: 15px 25px;
              transform: scale(1);
              margin-bottom: 20px;
            }
          }
          & > div:nth-child(2) {
            margin-top: 25px;
            & > div:nth-child(1) {
              & > div:nth-child(1) {
                margin-right: 10px;
              }
            }
            & > div:nth-child(2) {
              font-size: 12px;
              line-height: 1.8;
              margin-top: 10px;
            }
          }
        }
      }
      & > div:nth-child(4) {
        & > div:nth-child(2) {
          padding-left: 0;
          margin: 25px auto 20px;
          flex-wrap: wrap;
          justify-content: center;
          & > div {
            width: 33%;
            height: 90px;
            margin-bottom: 35px;
            line-height: 1.4;
            &:nth-of-type(1),&:nth-of-type(2){
              width: 35%;
            }
          }
          & > div::before {
            width: 90px;
            height: 90px;
          }
        }
      }
      & > div:nth-child(5) {
        & > div:nth-child(2) {
          padding-left: 0;
          & > div:nth-child(1) {
            margin-bottom: 30px;
            margin-top: 20px;

            & > div:nth-child(1) {
              margin-bottom: 15px;
              font-size: 18px;
              line-height: 1.6;
              
            }
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
            }
          }
          & > div:nth-child(2) {
            margin-bottom: 30px;
            & > div:nth-child(1) {
              margin-bottom: 15px;
              font-size: 18px;
              line-height: 1.6;
            }
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.8;
              margin-bottom: 0;
            }
          }
          & > div:nth-child(3) {
            & > div {
              & > div:nth-child(1) {
                width: 20%;
              }
              & > div:nth-child(2) {
                width: 29%;
              }
              & > div:nth-child(3) {
                width: 51%;
              }
            }
            & > div:nth-child(1) {
              height: 40px;
              font-size: 14px;
            }
            & > div:nth-child(2) {
              font-size: 12px;
              height: auto;
              line-height: 1.8;
              &>div{
                padding: 15px 0;
              }
              & > div:nth-child(1) {
                font-size: 14px;
                text-align: center;
              }
            }
            & > div:nth-child(3) {
              font-size: 12px;
              line-height: 1.8;
              height: auto;
              &>div{
                padding: 15px 0;
              }
              & > div:nth-child(1) {
                font-size: 14px;
                text-align: center;
              }
              & > div:nth-child(2) {
                padding: 0;
                & > div:nth-child(1) {
                  & > div:nth-child(1) {
                    height: 100px;
                    white-space: pre-wrap;
                    text-align: center;
                  }
                  & > div:nth-child(2) {
                    height: 120px;
                    white-space: pre-wrap;
                    text-align: center;
                  }
                }
              }
              & > div:nth-child(3) {
                padding: 0;
                & > div:nth-child(1) {
                  & > div:nth-child(1) {
                    height: 100px;
                  }
                  & > div:nth-child(2) {
                    height: 120px;
                    padding-left: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
    & > #faq {
      width: calc(100% - 60px);
      margin: 70px auto 200px;
      & > div:nth-child(2) {
        margin-top: 20px;
      }
    }
  }
  .fromTable {
    margin-top: 0;
  }
  .ocularSurfaceDiseases_text_p_span{
    font-size: 14px;
    line-height: 1.8;
  }
  .ocularSurfaceDiseases_title{
    font-size: 24px;
  }
  .ocularSurfaceDiseases_title_text{
    font-size: 24px;
  }
  .ocularSurfaceDiseases_title_btn {
    margin-top: 30px;
    width: max-content;
    height: 70px;
    font-size: 16px;
    line-height: 1.6;
    padding: 5px 40px 0;
    border-radius: 10px;
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .ocularSurfaceDiseases_head {
    // margin-left: 12vw;
  }

  .ocularSurfaceDiseases_nav {
    margin-top: -55%;
  }

  .fromTable {
    margin-top: -55%;
  }
}
</style>
