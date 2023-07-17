<script lang="ts" setup>
import { useTitle } from '@vueuse/core'

onMounted(() => {
  const ophthalmoplastyList = ref(null)
  console.log(ophthalmoplastyList.value, '456')
})
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '眼矯形及眼眶疾病｜希瑪眼科｜醫療服務',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心提供眼整形及眼腫瘤檢查及治療。對於眼瞼、眼眶、淚腺等患有先天性和後天性缺陷的患者，如眼瞼移位、眼瞼缺陷、甲亢突眼、淚眼、眼眶再造及眼眶收縮等，提供整形外科手術和植入義眼術，以修復他們眼部及面部，回復自然外觀。此外對於眼部腫瘤患者，如眼瞼癌變、眼睛表面癌變及眼内癌變等提供專業治療方案包括激光治療、冷凍治療、放射治療及化學治療。立即查詢治療眼矯形及眼腫瘤詳細及相關費用。',
    },
    {
      name: 'keywords',
      content:
        '眼整形 眼腫瘤 眼瞼移位 眼瞼缺陷 甲亢突眼  突眼 眼突 眼眶再造 眼眶收縮 眼整形手術 義眼術 眼瞼癌變 眼内癌變  眼皮手術 眼皮下垂手術 眼窩凹陷 淚管閉塞 眼凸手術 眼皮下垂改善 眼凸 甲亢眼疾 義眼 眼科醫生 眼科診所 眼科中心 希瑪眼科中心 希瑪眼科 希瑪 眼疾 眼睛疾病  眼睛檢查 林順潮 希瑪醫療集團 希瑪醫療',
    },
  ],
}))

// 传递背景色
const backgd = [
  '#e4c6a9;',
  '-webkit-linear-gradient(to right, #e4c6a9, #f3e2d1);',
  'linear-gradient(to right, #e4c6a9, #f3e2d1);',
]
const ophthalmoplastyList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/fbfec5b88d05a4b2.png',
    title: '眼瞼缺陷',
    text: [
      '眼瞼缺陷由眼瞼撕裂、外傷或眼瞼腫瘤切除後造成的；也有可能是先天性眼瞼缺陷。矯正術可保持眼瞼外觀自然，從簡單修復到使用膜瓣修復也有案例。',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/a20c0768a3dfc148.png',
    title: '甲亢突眼',
    text: [
      '甲亢突眼常見於成年人，徵狀為眼球向前突出。它往往是從活躍階段逐漸發展至非活躍階段，而患者會因為眼瞼的收縮、眼球凸出，使得面部猙獰。',
      '如果症狀嚴重，如因壓迫視神經而影響視力，也會導致角膜暴露在外引起損傷和潰瘍。矯正術可通過一個很小的創口進行眼瞼治療。',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/a539ea055085ea7e.png ',
    title: '淚水過多',
    text: [
      '淚腺堵塞是引發淚眼的原因之一，我們稱之為原發性鼻淚管阻塞（PANDO）。有些人在出生時就有這症狀，但可通過按摩來緩解，否則需要透過外力來清理鼻淚道。成年人一開始病徵為大量流淚，繼而引發感染。此外，創傷、腫瘤和鼻腔疾病也可能引發淚道堵塞。',
      '治療淚腺堵塞可製造特殊通道使眼淚進入鼻腔而其他治療方法則取決於堵塞的位置。',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/37c392f00eda2363.png',
    title: '眼眶再造',
    text: [
      '眼球摘除的原因有許多，包括：腫瘤、感染、盲眼以及眼整容所造成的傷害。摘除術包括：眼球摘除、以及眼內容物摘除（保留眼眶和眼肌）。摘除的部分由人工植入義眼填充。其餘部分則通過打磨和噴塗的義眼來保持其美觀效果。義眼都是參照真眼度身訂做。',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/0bc10909ed0c1c1c.png',
    title: '眼眶收縮',
    text: [
      '眼眶收縮下眼眶無法固定義眼。首次治療後如果沒有即時植入義眼，眼眶容易收縮。眼眶收縮的再造是為了達到美觀的效果，包括穹窿構成、義眼二次植入和以自體脂肪移植來還原本來的外觀。',
    ],
  },
]
const ophthalmoplastyList2 = [
  {
    operation: '手術名稱',
    introduce: ['手術介紹'],
    durability: ['維持性'],
    time: '手術時程',
    recovery: ['康復時間'],
  },
  {
    operation: '穿線式（吊線）',
    introduce: [
      '在眼皮上製造3至5個小孔，並用外科手術線把小孔縫合，製造雙眼皮的褶痕。數個小孔，並用外科手術線把小孔縫合，製造雙眼皮的折痕。',
      '適合較年輕、眼皮單薄、較小脂肪及眼皮沒有鬆弛緊緻的人士。',
    ],
    durability: ['2-3年', '（會逐漸變得不穩）'],
    time: '~45分鐘',
    recovery: ['7-10天'],
  },
  {
    operation: '切割式（開刀）',
    introduce: [
      '醫生按雙眼皮位置開刀以手術刀切開上眼瞼，抽取多餘的脂肪及皮膚組織，再以縫線縫合切口，將提眼瞼肌的組織與皮膚連接，形成雙眼皮。',
      '適合眼皮鬆弛及皮下脂肪較厚的人士。',
    ],
    durability: ['長久性'],
    time: '~60-90分鐘',
    recovery: ['14-21天', '（7-10天拆線）'],
  },
]
const ophthalmoplastyListMb2 = [
  {
    operation: '穿線式（吊線）',
    introduce: [
      '在眼皮上製造3至5個小孔，並用外科手術線把小孔縫合，製造雙眼皮的褶痕。數個小孔，並用外科手術線把小孔縫合，製造雙眼皮的折痕。',
      '適合較年輕、眼皮單薄、較小脂肪及眼皮沒有鬆弛緊緻的人士。',
    ],
    durability: ['2-3年', '（會逐漸變得不穩）'],
    time: '~45分鐘',
    recovery: ['7-10天'],
  },
  {
    operation: '切割式（開刀）',
    introduce: [
      '醫生按雙眼皮位置開刀以手術刀切開上眼瞼，抽取多餘的脂肪及皮膚組織，再以縫線縫合切口，將提眼瞼肌的組織與皮膚連接，形成雙眼皮。',
      '適合眼皮鬆弛及皮下脂肪較厚的人士。',
    ],
    durability: ['長久性'],
    time: '~60-90分鐘',
    recovery: ['14-21天', '（7-10天拆線）'],
  },
]
const ophthalmoplastyList3 = [
  {
    operation: '手術名稱',
    introduce: ['手術介紹'],
    durability: ['維持性'],
    time: '手術時程',
    recovery: ['康復時間'],
  },
  {
    operation: '穿線式（吊線）',
    introduce: [
      '過程不需要切開皮膚，只需開幾個細小傷口，再縫合皮膚肌肉、底層瞼板及提眼瞼肌，達致摺眼皮的效果從而令睫毛向外翻。此方法造成的傷口較小，復原得較快，',
      '適合眼皮鬆弛輕微和皮膚薄的患者。',
    ],
    durability: ['2-3年', '（會逐漸變得不穩）'],
    time: '~45分鐘',
    recovery: ['7-10天'],
  },
  {
    operation: '切割式（開刀）',
    introduce: [
      '醫生會將皮膚肌肉、眼肌筋膜打開，切除多餘的脂肪，然後直接將皮膚、瞼板及提眼瞼肌縫合。術後傷口雖然較大和明顯，但傷口一般可收藏在「雙眼皮」的線位，不易被察覺。此方',
      '法較',
      '適合眼皮鬆弛及皮下脂肪較厚的人士。',
    ],
    durability: ['長久性'],
    time: '~60-90分鐘',
    recovery: ['14-21天', '（7-10天拆線）'],
  },
]
const ophthalmoplastyListMb3 = [
  {
    operation: '穿線式（吊線）',
    introduce: [
      '過程不需要切開皮膚，只需開幾個細小傷口，再縫合皮膚肌肉、底層瞼板及提眼瞼肌，達致摺眼皮的效果從而令睫毛向外翻。此方法造成的傷口較小，復原得較快，',
      '適合眼皮鬆弛輕微和皮膚薄的患者。',
    ],
    durability: ['2-3年', '（會逐漸變得不穩）'],
    time: '~45分鐘',
    recovery: ['7-10天'],
  },
  {
    operation: '切割式（開刀）',
    introduce: [
      '醫生會將皮膚肌肉、眼肌筋膜打開，切除多餘的脂肪，然後直接將皮膚、瞼板及提眼瞼肌縫合。術後傷口雖然較大和明顯，但傷口一般可收藏在「雙眼皮」的線位，不易被察覺。此方',
      '法較',
      '適合眼皮鬆弛及皮下脂肪較厚的人士。',
    ],
    durability: ['長久性'],
    time: '~60-90分鐘',
    recovery: ['14-21天', '（7-10天拆線）'],
  },
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: '眼瞼移位',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#kind',
  },
  {
    anchorName: '眼瞼缺陷',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#eye-id_0',
  },
  {
    anchorName: '甲亢突眼',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#eye-id_1',
  },
  {
    anchorName: '淚眼',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#eye-id_2',
  },
  {
    anchorName: '眼眶再造',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#eye-id_3',
  },
  {
    anchorName: '眼眶收縮',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#eye-id_4',
  },
  {
    anchorName: '去眼袋',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#eye_bag_removal',
  },
  {
    anchorName: '雙眼皮手術',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#double_fold_eyelids',
  },
  {
    anchorName: '開眼頭手術',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#open_eye',
  },
  {
    anchorName: '眼皮鬆弛',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#slack',
  },
  {
    anchorName: '眼瞼癌變',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#eyelid_canceration',
  },
  {
    anchorName: '眼睛表面癌變',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#ocular_surface',
  },
  {
    anchorName: '眼内癌變',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#eye_in_canceration',
  },
  {
    anchorName: '義眼術',
    anchorLink: '/medical-service/eyeOrthopaedicDisease#eyeProsthesis',
  },
]
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}
</script>

<template>
  <div class="eyeOrthopaedicDisease">
    <div class="eyeOrthopaedicDisease_head">
      <!-- 头部 -->
      <div>
        <div>
          <div>眼矯形及眼眶疾病</div>
          <div>EYE PLASTIC SURGERY AND ORBITAL DISEASES</div>
        </div>
        <div>
          <img src="https://static.cmereye.com/imgs/2023/06/a521caceb1fb4b5f.png" />
          <img src="https://static.cmereye.com/imgs/2023/06/96b09fd6a7d94db4.png" />
        </div>
      </div>
    </div>
    <div class="eyeOrthopaedicDisease_nav">
      <div id="ophthalmoplasty">
        <div class="eyeOrthopaedicDisease_title_text">眼整形</div>
        <div class="eyeOrthopaedicDisease_p">
          眼整形外科手術及眼眶服務為眼瞼、眼眶、眼部和淚腺患有先天性和後天性缺陷的患者提供先進治療，以修復他們眼部及面部，還原自然外觀。本中心提供修復因外傷和疾病造成眼部損傷之服務。
        </div>
        <div>
          <div id="kind" class="eyeOrthopaedicDisease_title_text_border">
            眼瞼移位種類
          </div>
          <div>
            <div>
              <div>
                <div><span>1</span>上瞼下垂</div>
                <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
                  <p>
                    上眼瞼下垂可能是先天或後天因素影響。大多數是由提拉眼瞼肌肉無力或斷裂造成。大部分先天性病例是由於出生後肌肉發育不良導致。
                  </p>
                  <p>
                    對於兒童，眼瞼下垂如及早得到矯正，可預防弱視（視覺功能減退）。極少數和瞼裂狹窄綜合癥症有關。做矯正前，醫生會對肌肉的類型及強度進行診斷。
                  </p>
                </div>
              </div>
              <div>
                <div>治療上瞼下垂</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    種類包括：苗勒氏肌切除術、上瞼下垂矯正術、額肌懸吊術，以及提肌切除或重新植入，通過微創技術盡量達到無疤痕狀態。
                  </p>
                </div>
              </div>
            </div>
            <div class="img-size">
              <img src="https://static.cmereye.com/imgs/2023/06/11636c1cbfc3bce0.png" alt="" />
            </div>
          </div>
          <div>
            <div class="img-size">
              <img src="https://static.cmereye.com/imgs/2023/06/f2face15bee70403.png" alt="" />
            </div>
            <div>
              <div>
                <div><span>2</span>瞼內翻</div>
                <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
                  <p>
                    瞼內翻指瞼緣向眼球方向卷曲。這種病常見於老年人。一般由於眼瞼肌異常、結膜二次創傷（化學，灼熱或機械導致）、感染、炎症疾病，如：史蒂文詹森綜合征所造成。
                  </p>
                  <p>
                    瞼內翻會導致眨眼時，眼睫毛對角膜造成傷害，以致視力下降。瞼內翻可透過矯正術使眼瞼邊緣和眼睫恢復正常。
                  </p>
                </div>
              </div>
              <div>
                <div>治療瞼內翻</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    治療瞼內翻有很多方法，而黏膜移植通常用於情況較為嚴重的病例。
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div><span>3</span>瞼外翻</div>
                <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
                  <p>
                    瞼外翻指眼瞼邊緣向外翻轉，通常是因為眼瞼鬆弛所致，繼發於更年期老年人的眼部結構變化。另外，眼瞼皮膚疤痕、面部肌肉麻痺，以及眼瞼的鬆弛都會導致瞼外翻。先天性原因造成的此類疾病較為少見。
                  </p>
                </div>
              </div>
              <div>
                <div>治療瞼外翻</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    降低眼瞼的鬆弛度和矯正皮膚牽引力。治療方法取決於疾病原因，從簡單眼瞼收緊到皮膚移植。通過臨床診斷後，醫生會建議最合適方法進行治療。
                  </p>
                </div>
              </div>
            </div>
            <div class="img-size">
              <img src="https://static.cmereye.com/imgs/2023/06/289a6a1898690149.png" alt="" />
            </div>
          </div>
          <div class="eyeOrthopaedicDisease_title_btn" @click="goWhatsApp">
            <span>眼睛外形影響視野及外觀？</span><span>即WhatsApp預約治療</span>
          </div>
          <div>
            <div class="img-size">
              <img src="https://static.cmereye.com/imgs/2023/07/5652604220c6e217.png" alt="" />
            </div>
            <div>
              <div>
                <div><span>4</span>兔眼</div>
                <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
                  <p>
                    兔眼是由於臉部肌肉麻痺，或是眼瞼皮膚疤痕而導致上下眼瞼無法完全閉合；可導致眼乾，甚至角膜潰瘍。
                  </p>
                </div>
              </div>
              <div>
                <div>治療兔眼</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    治療的主要目的是防止角膜損傷。此外，也可以通過非外科方式來矯正。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="eyeOrthopaedicDisease_title_text_border">其他眼整形</div>
          <div>
            <div v-for="(item, index) in ophthalmoplastyList1" :id="`eye-id_${index}`" :key="index">
              <div>
                <div class="ophthalmoplasty_bg_text">{{ item.title }}</div>
                <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
                  <p v-for="(ele, index) in item.text" :key="index">
                    {{ ele }}
                  </p>
                </div>
              </div>
              <div class="mb-img"><img :src="item.img" alt="" /></div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div id="eye_bag_removal" class="ophthalmoplasty_bg_text">
                  去眼袋
                </div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    眼袋形成的原因包括遺傳、皮膚老化及生活模式等，而老化是最為普遍的。隨着年齡增長，眼框周邊組織及眼瞼肌肉變弱，失去彈性和張力，令眼皮出現鬆弛，並在眼睛下方形成空隙。當位於眼睛下方的脂肪滑落，就形成眼袋。
                  </p>
                </div>
              </div>
              <div class="img-size">
                <img src="https://static.cmereye.com/imgs/2023/06/b44e868ec09d73a2.png" alt="" />
              </div>
            </div>
            <div>
              <div>手術方法</div>
              <div>
                <div>
                  <div>內開式（眼內結膜切口）</div>
                  <div class="eyeOrthopaedicDisease_text_p_span">
                    <span>在下眼瞼結膜內製造切口，把多餘脂肪移位或除去</span>。完成後無需縫線，也不會在眼皮上留有疤痕。這方法適合較年輕及眼皮緊緻的人士。
                  </div>
                </div>
                <div>
                  <div>外開式（眼皮切口）</div>
                  <div class="eyeOrthopaedicDisease_text_p_span">
                    在睫毛下（約1-2mm）製造切口，切取多餘的脂肪及皮膚組織，脂肪亦可填至淚溝凹陷處，再以縫線縫合切口。疤痕在術後大概2-3個月會與眼周皺褶自然融合。這方法適合較年長、眼袋較大、眼皮鬆弛的人士。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div id="double_fold_eyelids" class="ophthalmoplasty_bg_text">
                  雙眼皮手術
                </div>
                <div class="eyeOrthopaedicDisease_text_p_span  mb_text_p_span">
                  <p>
                    當提眼瞼肌組織連接到眼皮褶痕處，便會產生皺折，形成雙眼皮。由於亞洲人的上眼瞼皮膚較厚、脂肪較多、提眼瞼肌組織連接到的眼皮位置較低（近睫毛），故此較多人擁有單眼皮，而接受雙眼皮手術的目的便是︰連接製造提眼瞼肌和眼皮，使眼部看起更精神之間的人工連結。
                  </p>
                </div>
              </div>
              <div class="img-size">
                <img src="https://static.cmereye.com/imgs/2023/06/840d28c965501ab9.png" alt="" srcset="" />
              </div>
            </div>
            <div>
              <div>手術方法</div>
              <div class="pc-table">
                <div v-for="(item, index) in ophthalmoplastyList2" :key="index">
                  <div>{{ item.operation }}</div>
                  <div>
                    <span v-for="(ele, index) in item.introduce" :key="index">{{
                      ele
                    }}</span>
                  </div>
                  <div>
                    <span v-for="(ele, index) in item.durability" :key="index">{{ ele }}</span>
                  </div>
                  <div>{{ item.time }}</div>
                  <div>
                    <span v-for="(ele, index) in item.recovery" :key="index">{{
                      ele
                    }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-table-box">
                <div v-for="(item, index) in ophthalmoplastyListMb2" :key="index" class="mb-nav-box">
                  <div class="mb-operation">{{ item.operation }}</div>
                  <div class="mb-content-box2">
                    <div>
                      <span v-for="(ele, index) in item.introduce" :key="index">{{ ele }}</span>
                    </div>
                    <div>
                      <div>維持性：<span v-for="el in item.durability" :key="el">{{ el }}</span></div>
                    </div>
                    <div>
                      <div>手術時程：<span>{{ item.time }}</span></div>
                    </div>
                    <div>
                      <div>康復時間：</div>
                      <div><span v-for="el in item.recovery" :key="el">{{ el }}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div id="open_eye" class="ophthalmoplasty_bg_text">
                開眼頭手術
              </div>
              <div>
                <div>
                  普遍亞洲人的上眼瞼眼眶內側都有一層稱為蒙古褶（內眥贅皮）的皺摺，令眼皮看來比較浮腫。「內眥贅皮」的皺摺，令眼皮看來比較浮腫。輕度一般不會影響視野及外觀；但嚴重可能會遮擋部分視野、令眼睛裂（眼線）長度縮短及在視覺上雙眼距離增寬。
                </div>
                <div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/517c46f42f285adf.png" alt="" />
                  </div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/10ab946964d2b07b.png" alt="" />
                  </div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/9d3d25638a38b884.png" alt="" />
                  </div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/785d0c8842e75e2c.png" alt="" />
                  </div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/c27330f53acabcd1.png" alt="" />
                  </div>
                </div>
                <div>
                  此外，內眥贅皮亦是影響雙眼皮術後效果的重要因素。內眥贅皮會使術後形成的雙眼皮折線在內眼角位置被遮擋甚至消失，令雙眼皮效果不理想。因此，雙眼皮手術多會配合開眼頭一併進行，透過切去多餘的上瞼皮膚以打開眼頭，改善內眥贅皮覆蓋眼頭的情況。
                </div>
              </div>
              <div>
                <p><span>維持性：</span>長久性</p>
                <p><span>手術時程：</span>～30-45分鐘</p>
                <p><span>康復時間：</span>14-30天（7-10天拆線）</p>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div id="slack" class="ophthalmoplasty_bg_text">眼皮鬆弛</div>
                  <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
                    <p>
                      眼皮鬆弛較常見於中老年人，眼睛皮下組織因老化而變弱和失去彈性，導致皮膚脂肪積聚過多，形成眼皮浮腫及下垂。近年，亦有不少年輕人因長期配戴隱形眼鏡時，過分拉扯眼周組織，而造成眼皮鬆弛。
                    </p>
                    <p>
                      如果眼皮鬆弛屬輕微，影響不大；但是嚴重的話會影響外觀，眼皮下垂會造成三角眼，甚至遮蓋眼睛，引致視力受阻。
                    </p>
                  </div>
                </div>
                <div>
                  <img src="https://static.cmereye.com/imgs/2023/06/afd80d0148f50d39.png" alt="" />
                </div>
              </div>
              <div>
                <div>手術方法</div>
                <div class="pc-table">
                  <div v-for="(item, index) in ophthalmoplastyList3" :key="index">
                    <div>{{ item.operation }}</div>
                    <div>
                      <span v-for="(ele, index) in item.introduce" :key="index">{{ ele }}</span>
                    </div>
                    <div>
                      <span v-for="(ele, index) in item.durability" :key="index">{{ ele }}</span>
                    </div>
                    <div>{{ item.time }}</div>
                    <div>
                      <span v-for="(ele, index) in item.recovery" :key="index">{{ ele }}</span>
                    </div>
                  </div>
                </div>
                <div class="mb-table-box">
                  <div v-for="(item, index) in ophthalmoplastyListMb3" :key="index" class="mb-nav-box">
                    <div class="mb-operation">{{ item.operation }}</div>
                    <div class="mb-content-box2">
                      <div>
                        <span v-for="(ele, index) in item.introduce" :key="index">{{ ele }}</span>
                      </div>
                      <div>
                        <div>維持性：<span v-for="el in item.durability" :key="el">{{ el }}</span></div>
                      </div>
                      <div>
                        <div>手術時程：<span>{{ item.time }}</span></div>
                      </div>
                      <div>
                        <div>康復時間：</div>
                        <div><span v-for="el in item.recovery" :key="el">{{ el }}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div id="eyeNeoplasms">
        <div class="eyeOrthopaedicDisease_title_text">眼腫瘤</div>
        <div class="eyeOrthopaedicDisease_p">
          眼腫瘤包括：眼瞼、結膜、眼球及眼球周邊各層組織的腫瘤。眼腫瘤俗稱「眼癌」，不論良性或惡性腫瘤均可損害眼部組織及其功能。惡性腫瘤可損害眼球及視功能，並向眼眶周圍、顱內擴散或轉移全身。同時，身體某些部位的器官組織惡性腫瘤也可轉移至眼部。正常兩側眼球突出幅度是相等的，約1/3人兩側眼球突出的幅度相差0.5至2mm，而相差達2mm的人僅佔1%。
        </div>
        <div>
          <div>
            <div class="eyeOrthopaedicDisease_title_text_border">
              眼腫瘤症狀
            </div>
            <div>
              <div>
                <div>眼球突出</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  眼球突出度超過22mm，兩眼差值大於2mm或在觀察過程中眼球突出度不斷增長，均被視為病理性眼球突出。引起眼球突出的原因有眼眶腫瘤、眼眶炎症、葛瑞夫茲病、血管畸形、眼眶外傷等。
                </div>
              </div>
              <div>
                <div>眼球脫垂</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  外傷、腫瘤等令眶壓增高，使眼球向前突出於瞼裂之外。若眼球突出度高且伴有眼瞼痙攣徵狀，則容易發生眼球脫垂。
                </div>
              </div>
              <div>
                <div>眼球內陷</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  眶腫瘤摘除後，眼球內陷、眼外肌緊張、交感神經麻痺，以及眶脂肪萎縮，也可引起眼球內陷。
                </div>
              </div>
            </div>
            <div class="eyeOrthopaedicDisease_title_btn">
              <span>眼腫瘤延誤治療 後果嚴重</span><span>即致電預約醫生問清問楚</span>
            </div>
          </div>
          <div>
            <div class="eyeOrthopaedicDisease_title_text_border">真假眼癌</div>
            <div>
              <div id="eyelid_canceration">眼瞼癌變</div>
              <div>
                <div>角化棘皮瘤<span>VS</span>鱗狀上皮細胞癌</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    角化棘皮瘤和鱗狀上皮細胞癌的發病都與長期受紫外線影響有關。因色素分佈不同，西方人患眼癌的風險較高，亞洲人相對較少，而鱗狀上皮細胞癌與AIDS感染也有關聯。
                  </p>
                  <p>
                    兩者的主要表徵是眼皮生長新生腫起物。腫起物生長速度快，且可能出現潰瘍，臨床上有時難以區分。要確診眼瞼病變可能需要進行活組織切除檢查。一旦確診，可以根據不同病變種類進行局部化療或冷凍療法等治療。
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div id="ocular_surface">眼表癌變</div>
              <div>
                <div>翼狀胬肉<span>VS</span>眼表面鱗狀細胞瘤</div>
                <div>
                  <div class="eyeOrthopaedicDisease_text_p_span">
                    <p>
                      兩者出現均與紫外線慢性侵損有密切關係。其中翼狀胬肉屬於良性的慢性病變，主要表現為眼白部分結膜變厚及凸起，在發病初期症狀並不明顯。而另一種同樣與紫外線照射有關的眼表鱗狀上皮瘤，與翼狀胬肉在臨床上往往不容易區別，但鱗狀上皮瘤是癌前病變，所以必須小心留意。
                    </p>
                    <p>
                      翼狀胬肉一般發展緩慢，多處於靜止期，如無症狀或大小在3mm以下，可觀察而不需治療；如果進入活動期，或大於3mm，則需要考慮接受治療。隨著胬肉增大，可能會造成眼睛不適，使用眼藥水可消炎和舒緩不適。當胬肉生長到角膜中央區域，引起散光、甚至遮蓋瞳孔時，有機會令視功能受損傷，此時就需要考慮切除胬肉。治療安全有效，可在切除胬肉同時改善外觀及散光，一舉數得。而鱗狀上皮瘤，一經診斷應盡快考慮切除，並進行病理檢查，以確定病變性質。
                    </p>
                  </div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/1b07a074afc03c77.png" />
                    <img src="https://static.cmereye.com/imgs/2023/06/1b7f452246c78347.png" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="eye_in_canceration">眼内癌變</div>
              <div>
                <div>黑色素細胞瘤<span>VS</span> 黑色素瘤</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <p>
                    兩者皆是發生於眼內的病變，特點是早期多無病徵，當病變發展至影響視功能時，腫起物的大小多已相當明顯。黑色素細胞瘤較為少見，病徵主要是眼底生長出黑色腫起物，多數是單眼發病及發生於視神經，較多見於深膚色人種及女性。這種病變一般屬於良性病變，因此多不需要治療，但極少數病例可能出現惡性病變情況，則需要考慮放射治療或切除。而黑色素瘤則是惡性病變，會向眼內生長，入侵視網膜和玻璃體，還可能會轉移全身影響重要器官。若確診黑色素瘤，則需要盡快治療，盡可能保存視功能及減低全身轉移的機會。
                  </p>
                </div>
              </div>
              <div>
                <div>柯氏症<span>VS</span>視網膜母細胞瘤</div>
                <div>
                  <div class="eyeOrthopaedicDisease_text_p_span">
                    <p>
                      兩種疾病均多見於兒童，多數是家長觀察到孩子有斜視及白瞳孔現象後而發現的。柯氏症又稱為「滲出性視網膜炎」或「視網膜末梢血管擴張症」，可造成視功能減退，甚至失明。柯氏症一般為單眼入侵，大多在十歲內發作，主要的症狀是視網膜毛細血管異常擴張及增生，導致血漿滲漏到視網膜下，引起一系列病徵。早期可考慮使用放射或是冷凍治療的方式，破壞視網膜異常毛細血管，以阻止病情惡化。
                    </p>
                    <p>
                      視網膜母細胞瘤是最常見的兒童原發性眼內腫瘤，是從視網膜長出來的一種惡性腫瘤。若不治療視網膜母細胞瘤，將會很快由眼底往前生長，更會擴散到眼球外，或沿視神經轉移到腦或全身。而治療必須依患者狀況而定，治療計劃需視乎腫瘤是單側或雙側腫瘤、視功能的殘存程度、腫瘤是否還局限在眼球內、有沒有擴散到視神經、腦部或血行轉移等因素而定。
                    </p>
                  </div>
                  <div>
                    <img src="https://static.cmereye.com/imgs/2023/06/1c38390c52af4e77.png" />
                    <div>眼球內的腫瘤</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="eyeOrthopaedicDisease_title_text_border">
              治療眼腫瘤
            </div>
            <div>
              <div>
                <div>激光治療</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  激光治療對於治療體積較小的腫瘤效果良好，多需在全身麻醉的情況下進行。無需在眼睛切割傷口，術後定期複診，直至腫瘤縮小甚至消失為止，治療期間如有需要亦可再次進行激光治療。
                </div>
              </div>
              <div>
                <div>冷凍治療</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  與激光治療一樣，冷凍治療對治療體積較小的腫瘤的效果較好。不過這種方法需要切斷結膜，直接在病人的鞏膜外進行。醫生需要使用間接眼底鏡定位，然後將冷凍頭放置到腫瘤位置相應的鞏膜外，進行冷凍，目的是有效地把腫瘤冷凍並消滅。治療後，結膜會有傷口，眼皮及眼睛會出現浮腫，約1至5天便消退。
                </div>
              </div>
              <div>
                <div>放射治療</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  放射治療用於控制局部腫瘤，同時可以保留視功能。視網膜母細胞瘤對放射線十分敏感，而以往放射治療的副作用較大，引起併發症較多，醫生並不常使用，現時的放射線技術可更有效地摧毀局部腫瘤。
                </div>
              </div>
              <div>
                <div>化學治療</div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  全身化療是通過靜脈注射進行，經血液迴圈到達腫瘤細胞，達到減慢腫瘤生長的目的。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="eyeProsthesis">
        <div class="eyeOrthopaedicDisease_title_text">義眼術</div>
        <div>
          <div class="eyeOrthopaedicDisease_text_p_span mb_text_p_span">
            植入義眼台可以填充眼窩大部分的空間，殘留的位置可安裝義眼片。通過義眼台帶動義眼片轉動，義眼的活動性較高。義眼台根據不同材料分類：
          </div>
          <div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/a08f975a028f344d.png" alt="" />
              <div>矽膠義眼台</div>
            </div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/87fbb416ef1f926a.png" alt="" />
              <div>羥基磷灰石義眼台</div>
            </div>
            <div>
              <img src="https://static.cmereye.com/imgs/2023/06/ef3079b59fb31f64.png" alt="" />
              <div>多孔聚乙烯義眼台</div>
            </div>
          </div>
          <div>
            <div class="ophthalmoplasty_bg_text">傳統義眼術</div>
            <div class="eyeOrthopaedicDisease_text_p_span">
              傳統義眼片製作主要是為了改善患者的外觀，盡可能提供義眼靈活度和舒適度；但總的來說舒適度及活動靈活度上的工藝仍有限制。
            </div>
          </div>
          <div>
            <div class="ophthalmoplasty_bg_text">現代義眼術</div>
            <div class="eyeOrthopaedicDisease_text_p_span">
              <div>現代義眼經過高度改良，每個細節都透過現代高科技製作。</div>
              <div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <div>01</div>
                  <div>
                    患者安裝好義眼台6至8周後，醫生會給患者佩戴臨時義眼片，再根據另一隻眼的情況，配上不同大小和凹槽的義眼片等。
                  </div>
                </div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <div>02</div>
                  <div>
                    然後在義眼片上刻畫虹膜、鞏膜甚至血管紋理等，高度仿真另一眼的外觀。然後，打磨拋光，確保其舒適度及與正常眼之匹配度。
                  </div>
                </div>
                <div class="eyeOrthopaedicDisease_text_p_span">
                  <div>03</div>
                  <div>
                    大約2至3周後，戴上訂制好的義眼片。如有需要，可再作局部調整，以達高度仿真及確保義眼片的舒適度，幫助患者重拾自信。
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="eyeOrthopaedicDisease_title_btn" @click="goWhatsApp">
            <span>更多詳情</span><span>請WhatsApp聯絡我們</span>
          </div>
        </div>
      </div>
      <div id="usage">
        <div class="eyeOrthopaedicDisease_title_text">義眼片使用方法</div>
        <div>
          <div>義眼片的安裝</div>
          <div>
            <div>
              <div>安裝前一定要以洗手液洗淨雙手。</div>
              <div>
                以拇指及中指持義眼片，有標記的頂部向上。也可用吸盤持義眼片。
              </div>
              <div>以另一手拇指（或同一手的其他手指）拉起上眼瞼。</div>
              <div>
                食指固定義眼片，同時可鬆開上瞼下拉下瞼，使得義眼片底部滑入下瞼內，直到義眼片位置合適。
              </div>
            </div>
            <div>
              <div></div>
              <div>眨眼2至3次，使義眼片固定在眼內合適位置。</div>
              <div>
                輕輕將義眼片頂部滑入上瞼下，直到上瞼遮蓋約義眼片的一半。
              </div>
              <div>同時避免義眼片旋轉。</div>
            </div>
          </div>
        </div>
        <div>
          <div>義眼片的取出</div>
          <div>
            <div>
              <div>以吸盤輔助取出更為方便。</div>
              <div>清洗乾淨手及吸盤。</div>
              <div>吸盤面濕水或利用無菌溶液沾濕然後放置於義眼片面。</div>
              <div>
                向上傾斜放好的吸盤，同時拉開下瞼看到義眼片下緣，此時向前向下拉義眼片即可。
              </div>
            </div>
            <div>
              <div></div>
              <div>直到義眼片脫離義眼座後才能擠壓吸盤。</div>
              <div>
                吸盤放置在義眼片的中心虹膜顏色處，輕壓使其吸附在義眼片面。
              </div>
              <div>
                擠壓吸盤內空氣然後放鬆，使吸盤吸附牢固，可重複動
                作直到吸附良好。
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>注意：</span>取下義眼片需放在乾淨的軟紙巾上，避免接觸。
          </div>
          <div>
            <span>注意：</span>安裝義眼是非常嚴謹的，應由經驗豐富的義眼定制
            <span
              class="usage-box-text">技師根據患者眼窩大小、正常眼睛的神態和色調，經準確測量而訂制。訂制義眼一般需要一天。個別患者還需要額外覆診，根據情況修整義眼。安裝義眼無特殊情況下，以後的覆診安排一般為半年至一年。兒童因眼球摘除後該側的眼窩、面部發育未定型，需定期更換義眼，所以定期覆診是非常重要的。成人一般約4至5年需調整義眼片。</span>
          </div>
        </div>
        <div>
          <div>義眼注意事項</div>
          <div class="eye_attention">
            義眼片能修復容貌，填充眼眶。經常對義眼片進行必要的修復護理保養才能延長義眼的壽命，增加舒適度，外觀才會更有光澤，達到更好的佩戴效果。因此，義眼片的保養和護理非常重要。
          </div>
          <div>
            <div>下列出幾點義眼的注意事項：</div>
            <div>
              <div>清洗頻率：</div>
              <div class="eye_attention">
                醫師會根據患者的眼睛及分泌物情況做評估，請遵照醫囑定期清洗；
              </div>
            </div>
            <div>
              <div>清洗溶液：</div>
              <div class="eye_attention">
                隱形眼鏡液或義眼專用液，禁用酒精；
              </div>
            </div>
            <div>
              <div>清洗方法：</div>
              <div>
                <p class="eye_attention">
                  <span>1</span>常清潔眼瞼、睫毛，保持義眼座乾淨衛生；
                </p>
                <p class="eye_attention"><span>2</span>安放前洗淨雙手；</p>
                <p class="eye_attention">
                  <span>3</span>先在義眼片上滴2-3滴清洗液，再擦去其表面的沉積物。再用溫開水徹底沖洗，然後紙巾擦乾，仔細查看有沒有殘留沉積物，如有可重複步驟清洗。
                </p>
              </div>
            </div>
            <div>
              <div>其他注意事項:</div>
              <div>
                <p class="eye_attention"><span>1</span>不需每天取下義眼片；</p>
                <p class="eye_attention">
                  <span>2</span> 建議佩戴護目鏡以保護健眼；
                </p>
                <p class="eye_attention">
                  <span>3</span>游泳及水上運動時需戴上護目鏡。跳水、滑水、潛水時需取下義眼片；
                </p>
                <p class="eye_attention">
                  <span>4</span>兒童佩戴義眼片需成人監護，避免誤吞；
                </p>
                <p class="eye_attention">
                  <span>5</span>有明顯紅腫、疼痛或有惡臭分泌物等，不能繼續佩戴義眼片，並需及時諮詢醫生。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rightSidesNavigation">
      <rightSidesNavigation :service-navigation="serviceNavigation" />
    </div>
    <div class="fromTable">
      <FormFooterInfo :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
        :co="`color:${'#b6b3e0;'}`" />
    </div>
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.eyeOrthopaedicDisease_nav {
  max-width: 1200px;
  width: 1200px;
  margin: auto;
  margin-top: -66.2%;
  margin-bottom: 290px;
  transform: scale(0.85);

  &>#ophthalmoplasty {
    margin-bottom: 160px;

    &>div:nth-child(2) {
      margin: 60px auto 120px;
    }

    &>div:nth-child(3) {
      margin: 100px auto 160px;

      &>div:nth-child(2),
      &>div:nth-child(4) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 99px;

        &>div:nth-child(1) {
          width: 752px;
          transform: scale(0.85);

          &>div {
            margin-bottom: 78px;

            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 32px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 52px;
              letter-spacing: 0px;
              color: #d0aa85;
              margin-bottom: 25px;
              display: flex;
              align-items: center;

              &>span {
                width: 34px;
                height: 34px;
                margin-right: 10px;
                background-color: #d0aa85;
                border-radius: 17px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-family: 'OPPOSans-B';
                font-size: 22px;
              }
            }

            &>div:nth-child(2) {
              font-size: 22px;
              line-height: 44px;
            }
          }

          &>div:nth-child(1) {
            &>div:nth-child(2) {
              &>p:nth-child(1) {
                margin-bottom: 23px;
              }
            }
          }
        }
      }

      &>div:nth-child(3),
      &>div:nth-child(6) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 99px;

        &>div:nth-child(2) {
          width: 752px;
          transform: scale(0.85);

          &>div {
            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 32px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 52px;
              letter-spacing: 0px;
              color: #d0aa85;
              margin-bottom: 25px;
              display: flex;
              align-items: center;

              &>span {
                width: 34px;
                height: 34px;
                margin-right: 10px;
                background-color: #d0aa85;
                border-radius: 17px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-family: 'OPPOSans-B';
                font-size: 22px;
              }
            }

            &>div:nth-child(2) {
              font-size: 22px;
              line-height: 44px;
            }
          }

          &>div:nth-child(1) {
            margin-bottom: 78px;

            &>div:nth-child(2) {
              &>p:nth-child(1) {
                margin-bottom: 23px;
              }
            }
          }
        }
      }

      &>div:nth-child(3),
      &>div:nth-child(4),
      &>div:nth-child(5),
      &>div:nth-child(6) {
        margin-top: 160px;
      }
    }

    &>div:nth-child(4) {
      &>div:nth-child(2) {
        &>div {
          display: flex;
          margin-bottom: 120px;

          &>div:nth-child(1) {
            width: 898px;

            &>div:nth-child(2) {
              margin-top: 51px;
              margin-right: 37px;
              font-size: 22px;
              line-height: 44px;
            }
          }

          &> :nth-child(2) {
            margin-top: 40px;
          }
        }
      }

      &>div:nth-child(3) {
        &>div:nth-child(1) {
          display: flex;

          &>div:nth-child(1) {
            width: 898px;

            &>div:nth-child(2) {
              margin-top: 51px;
              margin-right: 37px;
              font-size: 22px;
              line-height: 44px;
            }
          }

          &> :nth-child(2) {
            margin-top: 40px;
          }
        }

        &>div:nth-child(2) {
          margin-bottom: 120px;

          &>div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: #d0aa85;
          }

          &>div:nth-child(2) {
            display: flex;
            justify-content: space-between;

            &>div {
              margin-top: 85px;
              width: 624px;
              height: 305px;
              background-color: #ffffff;
              border-radius: 15px;
              border: solid 2px #e4c6a9;
              position: relative;

              &>div:nth-child(1) {
                position: absolute;
                top: -35px;
                left: 111px;
                width: 370px;
                height: 72px;
                background-color: #ffffff;
                border-radius: 15px;
                border: solid 2px #e4c6a9;

                font-family: 'NotoSansHK-Medium';
                font-size: 26px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 52px;
                letter-spacing: 0px;
                color: #515151;

                display: flex;
                justify-content: center;
                align-items: center;
              }

              &>div:nth-child(2) {
                font-size: 22px;
                line-height: 44px;
                padding: 0 46px;
                padding-top: 82px;
              }
            }
          }
        }
      }

      &>div:nth-child(4) {
        margin-bottom: 120px;

        &>div:nth-child(1) {
          display: flex;
          margin-bottom: 40px;

          &>div:nth-child(1) {
            width: 898px;

            &>div:nth-child(2) {
              margin-top: 51px;
              margin-right: 37px;
              font-size: 22px;
              line-height: 44px;
            }
          }

          &> :nth-child(2) {
            margin-top: 40px;
          }
        }

        &>div:nth-child(2) {
          &>div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 52px;
            letter-spacing: 0px;
            color: #d0aa85;
            margin-bottom: 50px;
          }

          &>div {
            &>div {
              display: flex;
              border: 1px solid #e5e5e5;

              &>div {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                font-family: 'Noto Sans HK';
                font-size: 22px;
                font-stretch: normal;
                line-height: 42px;
                letter-spacing: 0px;
                color: #515151;
              }

              &>div:nth-child(1) {
                width: 254px;
                font-family: 'NotoSansHK-Medium';
                font-size: 30px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 52px;
                letter-spacing: 0px;
                color: #515151;
              }

              &>div:nth-child(2) {
                width: 520px;
                border-left: 1px solid #e5e5e5;
                border-right: 1px solid #e5e5e5;
              }

              &>div:nth-child(3) {
                width: 218px;
              }

              &>div:nth-child(4) {
                width: 153px;
                border-left: 1px solid #e5e5e5;
                border-right: 1px solid #e5e5e5;
              }

              &>div:nth-child(5) {
                width: 170px;
              }
            }

            &>div:nth-child(1) {
              height: 76px;
              background-color: #e4c6a9;

              &>div {
                font-family: 'NotoSansHK-Medium';
                font-size: 26px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 52px;
                letter-spacing: 0px;
                color: #ffffff;
              }
            }

            &>div:nth-child(2) {
              height: 295px;

              &>div:nth-child(2) {
                display: block;
                padding-left: 35px;
                padding-right: 33px;
                padding-top: 53px;

                &>span {
                  font-size: 22px;
                  letter-spacing: 0px;
                  color: #515151;
                  font-family: 'Noto Sans HK';
                  line-height: 42px;
                }

                &>span:nth-child(2) {
                  font-size: 22px;
                  font-weight: bold;
                  letter-spacing: 0px;
                  color: #d0aa85;
                }
              }

              border-top: 1px solid #e5e5e5;
              border-bottom: 1px solid #e5e5e5;

              &>div:nth-child(3) {
                &>span:nth-child(1) {
                  font-weight: bold;
                }
              }
            }

            &>div:nth-child(3) {
              height: 305px;
              background-color: #f8f8f9;

              &>div:nth-child(2) {
                display: block;
                padding-left: 35px;
                padding-right: 33px;
                padding-top: 53px;

                &>span {
                  font-size: 22px;
                  letter-spacing: 0px;
                  color: #515151;
                  font-family: 'Noto Sans HK';
                  line-height: 42px;
                }

                &>span:nth-child(2) {
                  font-size: 22px;
                  font-weight: bold;
                  letter-spacing: 0px;
                  color: #d0aa85;
                }
              }

              &>div:nth-child(5) {
                &>span:nth-child(1) {
                  font-weight: bold;
                }
              }
            }
          }
        }
      }

      &>div:nth-child(5) {
        &>div:nth-child(1) {
          margin-bottom: 120px;

          &>div:nth-child(2) {
            margin: 50px 0;

            &>div {
              font-family: 'Noto Sans HK';
              font-size: 22px;
              line-height: 44px;
              letter-spacing: 0px;
              color: #515151;
            }

            &>div:nth-child(2) {
              margin: 50px 0;
              display: flex;
              justify-content: space-between;
              padding: 0 40px;
            }
          }

          &>div:nth-child(3) {
            font-family: 'Noto Sans HK';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 44px;
            letter-spacing: 0px;
            color: #515151;

            &>p>span {
              color: #d0aa85;
            }
          }
        }

        &>div:nth-child(2) {
          &>div:nth-child(1) {
            display: flex;
            margin-bottom: 40px;

            &>div:nth-child(1) {
              width: 898px;

              &>div:nth-child(2) {
                margin-top: 51px;
                margin-right: 37px;
                font-size: 22px;
                line-height: 44px;
              }
            }

            &> :nth-child(2) {
              margin-top: 40px;
            }
          }

          &>div:nth-child(2) {
            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 52px;
              letter-spacing: 0px;
              color: #d0aa85;
              margin-bottom: 50px;
            }

            &>div {
              &>div {
                display: flex;
                border: 1px solid #e5e5e5;

                &>div {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;

                  font-family: 'Noto Sans HK';
                  font-size: 22px;
                  font-stretch: normal;
                  line-height: 42px;
                  letter-spacing: 0px;
                  color: #515151;
                }

                &>div:nth-child(1) {
                  width: 254px;
                  font-family: 'NotoSansHK-Medium';
                  font-size: 30px;
                  font-weight: normal;
                  font-stretch: normal;
                  line-height: 52px;
                  letter-spacing: 0px;
                  color: #515151;
                }

                &>div:nth-child(2) {
                  width: 520px;
                  border-left: 1px solid #e5e5e5;
                  border-right: 1px solid #e5e5e5;
                }

                &>div:nth-child(3) {
                  width: 218px;
                }

                &>div:nth-child(4) {
                  width: 153px;
                  border-left: 1px solid #e5e5e5;
                  border-right: 1px solid #e5e5e5;
                }

                &>div:nth-child(5) {
                  width: 170px;
                }
              }

              &>div:nth-child(1) {
                height: 76px;
                background-color: #e4c6a9;

                &>div {
                  font-family: 'NotoSansHK-Medium';
                  font-size: 26px;
                  font-weight: normal;
                  font-stretch: normal;
                  line-height: 52px;
                  letter-spacing: 0px;
                  color: #ffffff;
                }
              }

              &>div:nth-child(2) {
                height: 295px;

                &>div:nth-child(2) {
                  display: block;
                  padding-left: 35px;
                  padding-right: 33px;
                  padding-top: 53px;

                  &>span {
                    font-size: 22px;
                    letter-spacing: 0px;
                    color: #515151;
                    font-family: 'Noto Sans HK';
                    line-height: 42px;
                  }

                  &>span:nth-child(2) {
                    font-size: 22px;
                    font-weight: bold;
                    letter-spacing: 0px;
                    color: #d0aa85;
                  }
                }

                border-top: 1px solid #e5e5e5;
                border-bottom: 1px solid #e5e5e5;

                &>div:nth-child(3) {
                  &>span:nth-child(1) {
                    font-weight: bold;
                  }
                }
              }

              &>div:nth-child(3) {
                height: 305px;
                background-color: #f8f8f9;

                &>div:nth-child(2) {
                  display: block;
                  padding-left: 35px;
                  padding-right: 33px;
                  padding-top: 53px;

                  &>span {
                    font-size: 22px;
                    letter-spacing: 0px;
                    color: #515151;
                    font-family: 'Noto Sans HK';
                    line-height: 42px;
                  }

                  &>span:nth-child(2) {
                    font-size: 22px;
                    font-weight: bold;
                    letter-spacing: 0px;
                    color: #d0aa85;
                  }
                }

                &>div:nth-child(5) {
                  &>span:nth-child(1) {
                    font-weight: bold;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  &>#eyeNeoplasms {
    &>div:nth-child(2) {
      margin-top: 50px;
      padding-right: 1px;
    }

    &>div:nth-child(3) {
      &>div:nth-child(1) {
        margin-bottom: 150px;

        &>div:nth-child(2) {
          margin: 80px 0 100px;
          display: flex;
          justify-content: space-between;

          &>div {
            transform: scale(0.85);
            width: 398px;
            height: 417px;
            background-color: #ffffff;
            border-radius: 30px;
            border: solid 2px #e4c6a9;

            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 32px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
              color: #d0aa85;
              text-align: center;
              padding: 30px 0;
            }

            &>div:nth-child(2) {
              padding: 0 42px;
              font-size: 22px;
              line-height: 42px;
            }
          }
        }
      }

      &>div:nth-child(2) {
        &>div:nth-child(1) {
          margin-top: 150px;
          margin-bottom: 80px;
        }

        &>div:nth-child(2) {
          margin-bottom: 120px;

          &>div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 32px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #d0aa85;
            margin-bottom: 90px;
          }

          &>div:nth-child(2) {
            border-radius: 10px;
            border: solid 2px #e4c6a9;
            padding-left: 37px;
            padding-right: 25px;
            padding-top: 80px;
            padding-bottom: 50px;
            position: relative;

            &>div:nth-child(1) {
              position: absolute;
              left: -2px;
              top: -41px;
              width: 513px;
              height: 82px;
              background-color: #ffffff;
              border-radius: 10px 10px 10px 0px;
              border: solid 2px #e4c6a9;

              font-family: 'NotoSansHK-Medium';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
              color: #d0aa85;

              display: flex;
              align-items: center;
              justify-content: center;

              &>span {
                font-size: 48px;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d0aa85;
                margin: 0 29px;
              }
            }

            &>div:nth-child(2) {
              &>p {
                font-size: 22px;
                line-height: 42px;
              }

              &>p:nth-child(1) {
                margin-bottom: 29px;
              }
            }
          }
        }

        &>div:nth-child(3) {
          &>div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 32px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #d0aa85;
            margin-top: 120px;
            margin-bottom: 90px;
          }

          &>div:nth-child(2) {
            margin-bottom: 120px;
            border-radius: 10px;
            border: solid 2px #e4c6a9;
            padding-left: 37px;
            padding-right: 25px;
            padding-top: 80px;
            padding-bottom: 50px;
            position: relative;

            &>div:nth-child(1) {
              position: absolute;
              left: -2px;
              top: -41px;
              width: 513px;
              height: 82px;
              background-color: #ffffff;
              border-radius: 10px 10px 10px 0px;
              border: solid 2px #e4c6a9;

              font-family: 'NotoSansHK-Medium';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
              color: #d0aa85;

              display: flex;
              align-items: center;
              justify-content: center;

              &>span {
                font-size: 48px;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d0aa85;
                margin: 0 29px;
              }
            }

            &>div:nth-child(2) {
              display: flex;
              justify-content: space-between;

              &>div:nth-child(1) {
                width: 815px;

                &>p {
                  font-size: 22px;
                  line-height: 42px;
                }

                &>p:nth-child(2) {
                  margin-top: 29px;
                }
              }

              &>div:nth-child(2) {
                display: flex;
                flex-direction: column;

                &>img:nth-child(2) {
                  margin-top: 26px;
                }
              }
            }
          }
        }

        &>div:nth-child(4) {
          margin-bottom: 120px;

          &>div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 32px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #d0aa85;
            margin-top: 120px;
            margin-bottom: 90px;
          }

          &>div:nth-child(2) {
            margin-bottom: 120px;
            border-radius: 10px;
            border: solid 2px #e4c6a9;
            padding-left: 37px;
            padding-right: 25px;
            padding-top: 80px;
            padding-bottom: 50px;
            position: relative;

            &>div:nth-child(1) {
              position: absolute;
              left: -2px;
              top: -41px;
              width: 513px;
              height: 82px;
              background-color: #ffffff;
              border-radius: 10px 10px 10px 0px;
              border: solid 2px #e4c6a9;

              font-family: 'NotoSansHK-Medium';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
              color: #d0aa85;

              display: flex;
              align-items: center;
              justify-content: center;

              &>span {
                font-size: 48px;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d0aa85;
                margin: 0 29px;
              }
            }

            &>div:nth-child(2) {
              &>p {
                font-size: 22px;
                line-height: 42px;
              }

              &>p:nth-child(2) {
                margin-top: 29px;
              }
            }
          }

          &>div:nth-child(3) {
            margin-bottom: 120px;
            border-radius: 10px;
            border: solid 2px #e4c6a9;
            padding-left: 37px;
            padding-right: 25px;
            padding-top: 80px;
            padding-bottom: 50px;
            position: relative;

            &>div:nth-child(1) {
              position: absolute;
              left: -2px;
              top: -41px;
              width: 513px;
              height: 82px;
              background-color: #ffffff;
              border-radius: 10px 10px 10px 0px;
              border: solid 2px #e4c6a9;

              font-family: 'NotoSansHK-Medium';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
              color: #d0aa85;

              display: flex;
              align-items: center;
              justify-content: center;

              &>span {
                font-size: 48px;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d0aa85;
                margin: 0 29px;
              }
            }

            &>div:nth-child(2) {
              display: flex;

              &>div:nth-child(1) {
                width: 815px;
                margin-right: 50px;

                &>p {
                  font-size: 22px;
                  line-height: 42px;
                }

                &>p:nth-child(2) {
                  margin-top: 29px;
                }
              }

              &>div:nth-child(2) {
                display: flex;
                flex-direction: column;
                text-align: center;

                &>div {
                  margin-top: 11px;
                  font-family: 'Noto Sans HK';
                  font-size: 20px;
                  line-height: 42px;
                  letter-spacing: 2px;
                  color: #777777;
                }

                &>img:nth-child(2) {
                  margin-top: 26px;
                }
              }
            }
          }
        }
      }

      &>div:nth-child(3) {
        &>div:nth-child(2) {
          margin: 80px auto 160px;

          &>div {
            margin-bottom: 50px;
            position: relative;
            border-radius: 20px;
            border: solid 2px #e4c6a9;
            overflow: hidden;

            &>div:nth-child(1) {
              background-color: #e4c6a9;
              width: 157px;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              display: flex;
              align-items: center;
              justify-content: center;

              font-family: 'NotoSansHK-Bold';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
              color: #fff;
            }

            &>div:nth-child(2) {
              margin-left: 192px;
              padding: 40px 37px 44px 0;
              font-size: 22px;
              line-height: 42px;
              letter-spacing: -0.7px;
            }
          }

          &>div:nth-child(1) {
            &>duv:nth-child(2) {
              letter-spacing: -0.2px;
            }
          }
        }
      }
    }
  }

  &>#eyeProsthesis {
    margin-bottom: 160px;

    &>div:nth-child(2) {
      &>div:nth-child(1) {
        margin-top: 50px;
        text-indent: 50px;
      }

      &>div:nth-child(2) {
        margin: 60px auto 120px;
        display: flex;
        justify-content: space-between;
        padding: 0 77px 0 78px;

        &>div {
          text-align: center;

          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 46px;
          letter-spacing: 0px;
          color: #515151;
        }
      }

      &>div:nth-child(3),
      &>div:nth-child(4) {
        margin-bottom: 120px;

        &>div:nth-child(1) {
          margin-bottom: 40px;
        }

        &>div:nth-child(2) {
          font-size: 22px;
          line-height: 42px;
        }
      }

      &>div:nth-child(4) {
        &>div:nth-child(2) {
          &>div:nth-child(2) {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;

            &>div {
              display: flex;
              align-items: center;
              width: 413px;
              height: 273px;

              font-size: 22px;
              line-height: 42px;
              padding-right: 20px;
              border-top: 1px solid #e4c6a9;
              border-bottom: 1px solid #e4c6a9;

              &>div:nth-child(1) {
                margin-left: 10px;
                margin-right: 30px;
                font-family: 'OPPOSans-B';
                font-size: 50px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d5bb96;
              }

              &>div:nth-child(2) {
                width: 304px;
              }
            }
          }
        }
      }
    }
  }

  &>#usage {
    margin-bottom: 160px;

    &>div:nth-child(2) {
      margin-top: 60px;
      margin-bottom: 125px;

      &>div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 52px;
        letter-spacing: 0px;
        color: #d0aa85;
        margin-bottom: 71px;
      }

      &>div:nth-child(2) {
        background: url('https://static.cmereye.com/imgs/2023/06/1ffd31990e432ec0.png');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 1210px;
        min-height: 466px;
        margin-left: 55px;

        display: flex;
        flex-direction: column;

        &>div {
          display: flex;
          justify-content: space-between;
          margin-top: 46px;
          margin-right: 20px;

          &>div {
            width: 205px;
            height: 173px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Noto Sans HK';
            font-size: 22px;
            line-height: 38px;
            letter-spacing: 0px;
            color: #515151;
            position: relative;
          }

          &>div::before {
            position: absolute;
            content: '';
            font-family: 'OPPOSans-B';
            font-size: 40px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #d5bb96;
            top: -64px;
            left: -56px;
          }
        }

        &>div:nth-child(1) {
          &>div:nth-child(1)::before {
            content: '01';
          }

          &>div:nth-child(2)::before {
            content: '02';
          }

          &>div:nth-child(3)::before {
            content: '03';
          }

          &>div:nth-child(4)::before {
            content: '04';
            left: -72px;
          }
        }

        &>div:nth-child(2) {
          margin-top: 72px;

          &>div:nth-child(1)::before {
            content: '';
          }

          &>div:nth-child(2)::before {
            content: '07';
            top: -48px;
          }

          &>div:nth-child(3)::before {
            content: '06';
            top: -48px;
          }

          &>div:nth-child(4)::before {
            content: '05';
            top: -48px;
            left: -72px;
          }
        }
      }
    }

    &>div:nth-child(3) {
      margin-bottom: 100px;

      &>div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 52px;
        letter-spacing: 0px;
        color: #d0aa85;
        margin-bottom: 71px;
      }

      &>div:nth-child(2) {
        background: url('https://static.cmereye.com/imgs/2023/06/1ffd31990e432ec0.png');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 1210px;
        min-height: 466px;
        margin-left: 55px;

        display: flex;
        flex-direction: column;

        &>div {
          display: flex;
          justify-content: space-between;
          margin-top: 46px;
          margin-right: 20px;

          &>div {
            width: 205px;
            height: 173px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Noto Sans HK';
            font-size: 22px;
            line-height: 38px;
            letter-spacing: 0px;
            color: #515151;
            position: relative;
          }

          &>div::before {
            position: absolute;
            content: '';
            font-family: 'OPPOSans-B';
            font-size: 40px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #d5bb96;
            top: -64px;
            left: -56px;
          }
        }

        &>div:nth-child(1) {
          &>div:nth-child(1)::before {
            content: '01';
          }

          &>div:nth-child(2)::before {
            content: '02';
          }

          &>div:nth-child(3)::before {
            content: '03';
          }

          &>div:nth-child(4)::before {
            content: '04';
            left: -72px;
          }
        }

        &>div:nth-child(2) {
          margin-top: 72px;

          &>div:nth-child(1)::before {
            content: '';
          }

          &>div:nth-child(2)::before {
            content: '07';
            top: -48px;
          }

          &>div:nth-child(3)::before {
            content: '06';
            top: -48px;
          }

          &>div:nth-child(4)::before {
            content: '05';
            top: -48px;
            left: -72px;
          }
        }
      }
    }

    &>div:nth-child(4) {
      margin-bottom: 140px;

      &>div {
        font-family: 'Noto Sans HK';
        font-size: 22px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #515151;

        &>span {
          font-family: 'NotoSansHK-Bold';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #d0aa85;
        }
      }

      &>div:nth-child(2) {
        margin-top: 80px;
      }
    }

    &>div:nth-child(5) {
      &>div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 32px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 52px;
        letter-spacing: 0px;
        color: #d0aa85;
        margin-bottom: 50px;
      }

      &>div:nth-child(3) {
        margin-top: 80px;

        &>div {
          &>div:nth-child(1) {
            width: fit-content;
            height: 44px;
            background-color: #d0aa85;
            border-radius: 10px;
            padding: 10px 19px;
            color: #fff;
            margin-bottom: 16px;
            margin-top: 16px;
          }

          &>div>p {
            display: flex;
            align-items: flex-start;

            &>span {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 34px;
              min-width: 34px;
              height: 34px;
              color: #d5bb96;
              background-color: #ffffff;
              border: solid 2px #decbaf;
              border-radius: 50%;
              padding-top: 0;
              margin-right: 10px;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
}

.eye_attention {
  font-family: 'Noto Sans HK';
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 44px;
  letter-spacing: 0px;
  color: #515151;
}

.ophthalmoplasty_bg_text {
  width: 212px;
  height: 58px;
  background-color: #d0aa85;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'NotoSansHK-Bold';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0px;
  color: #ffffff;
}

.eyeOrthopaedicDisease_p {
  font-family: 'Noto Sans HK';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  line-height: 46px;
  color: #bead9c;
  text-indent: 50px;
}

.eyeOrthopaedicDisease_text_p_span {
  font-family: 'Noto Sans HK';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #515151;
}

.eyeOrthopaedicDisease_title_text {
  font-family: 'NotoSansHK-Bold';
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 48px;
  letter-spacing: 0px;
  color: #d5bb96;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

.eyeOrthopaedicDisease_title_text_border {
  width: fit-content;
  margin: auto;
  border-top: 1px solid #e6d2bfcc;
  border-bottom: 1px solid #e6d2bfcc;
  padding: 20px;
  font-family: 'NotoSansHK-Bold';
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  line-height: 48px;
  letter-spacing: 0px;
  color: #d5bb96;

  display: flex;
  flex-direction: row;
  justify-content: center;
}

.eyeOrthopaedicDisease_title_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  margin: auto;
  width: 580px;
  height: 140px;
  border-radius: 20px;
  background-image: linear-gradient(-90deg, #ebc7a5 0%, #f0d9c2 100%),
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

// 头部样式
.eyeOrthopaedicDisease_head {
  &>div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    max-width: 1080px;
    margin: 100px auto 0;
    // margin-top: 100px;
    // margin-left: 30vw;

    &>div:nth-child(1) {
      &>div:nth-child(1) {
        font-family: 'NotoSansCJKtc-Bold';
        font-size: 118px;
        font-weight: Bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #e4c6a9;
        z-index: 5;
        position: relative;
      }

      &>div:nth-child(2) {
        position: relative;
        z-index: 5;
        font-family: 'DINCondensed-Bold';
        font-size: 73px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: 0.003em;
        color: #e4c6a9;
        margin-top: 15px;
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

.fromTable {
  margin-top: -90%;
}

@media screen and (min-width: 768px) {
  .mb-table-box {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .ophthalmoplasty_bg_text {
    width: fit-content;
    padding: 4px 32px;
    height: auto;
    font-size: 20px;
    line-height: 1.6;
  }

  .eyeOrthopaedicDisease_title_btn {
    cursor: pointer;
    width: fit-content;
    height: auto;
    font-size: 20px;
    line-height: 1.6;
    padding: 16px 30px;
  }
  .eyeOrthopaedicDisease_title_text {
    font-size: 32px;
  }
  // 头部样式
  .eyeOrthopaedicDisease_head {
    &>div:nth-child(1) {
      align-items: center;
      max-width: 100%;
      margin: 150px auto 0;

      &>div:nth-child(1) {
        &>div:nth-child(1) {
          font-size: 40px;
          letter-spacing: 0px;
        }

        &>div:nth-child(2) {
          font-size: 24px;
        }
      }

      &>div:nth-child(1)::after {
        width: 250px;
        height: 200px;
      }

      &>div:nth-child(2) {
        width: 88%;
        left: 0;
      }
    }
  }

  .fromTable {
    margin-top: 0;
  }

  // 内容
  .eyeOrthopaedicDisease_nav {
    max-width: 100%;
    width: 100%;
    margin: auto;
    margin-top: 210px;
    margin-bottom: 240px;
    transform: scale(1);
    padding: 0 40px;

    &>#ophthalmoplasty {
      margin-bottom: 75px;

      .img-size {
        width: 100%;
        position: absolute;
        top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        &>img {
          max-width: 260px;
        }
      }

      &>div:nth-child(2) {
        margin: 25px auto 55px;
      }

      &>div:nth-child(3) {
        margin: 55px auto;

        &>div:nth-child(2),
        &>div:nth-child(4) {
          flex-direction: column-reverse;
          margin-top: 42px;
          position: relative;

          &>div:nth-child(1) {
            width: 100%;
            transform: scale(1);

            &>div {
              margin-bottom: 42px;
              position: relative;

              &>div:nth-child(1) {
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 25px;

                &>span {
                  width: 26px;
                  height: 26px;
                  font-size: 14px;
                }
              }

              &>div:nth-child(2) {
                font-size: 16px;
                line-height: 1.8;
                font-weight: 400;
              }
            }

            &>div:nth-child(1) {
              &>div:nth-child(2) {
                &>p:nth-child(1) {
                  margin-bottom: 22px;
                }
              }
            }
          }
        }

        &>div:nth-child(3),
        &>div:nth-child(6) {
          flex-direction: column;
          margin-top: 42px;
          position: relative;

          &>div:nth-child(2) {
            width: 100%;
            transform: scale(1);

            &>div {
              position: relative;

              &>div:nth-child(1) {
                font-size: 16px;
                line-height: 1.6;
                margin-bottom: 25px;

                &>span {
                  width: 26px;
                  height: 26px;
                  font-size: 14px;
                }
              }

              &>div:nth-child(2) {
                font-size: 16px;
                line-height: 1.8;
              }
            }

            &>div:nth-child(1) {
              margin-bottom: 42px;

              &>div:nth-child(2) {
                &>p:nth-child(1) {
                  margin-bottom: 23px;
                }
              }
            }
          }
        }

        &>div:nth-child(3),
        &>div:nth-child(4),
        &>div:nth-child(5),
        &>div:nth-child(6) {
          margin-top: 42px;
        }
      }

      &>div:nth-child(4) {
        .mb-img {
          position: absolute;
          top: 80px;
        }

        &>div:nth-child(2) {
          .mb_text_p_span {
            margin-top: 262px !important;
          }

          margin-bottom: 50px;

          &>div {
            color: pink;
            position: relative;
            display: flex;
            flex-direction: column-reverse;
            margin-bottom: 0;

            &>div:nth-child(1) {
              width: 100%;
              margin-top: 50px;
              position: relative;

              &>div:nth-child(2) {
                margin-top: 25px;
                margin-right: 0;
                font-size: 16px;
                line-height: 1.8;
              }
            }

            &>div:nth-child(2) {
              width: 100%;
              margin-top: 50px;

              &>img {
                max-width: 260px;
                margin: auto;
              }
            }
          }
        }

        &>div:nth-child(3) {
          .mb_text_p_span {
            margin-top: 262px !important;
          }

          margin-bottom: 50px;

          &>div:nth-child(1) {
            position: relative;
            display: flex;
            flex-direction: column;

            &>div:nth-child(1) {
              width: 100%;
            }

            &>div :nth-child(2) {
              position: relative;
              margin-top: 40px;
              margin-right: 0 !important;
              font-size: 16px !important;
              line-height: 1.8 !important;
            }

            .img-size {
              position: unset;
              display: flex;
            }
          }

          &>div:nth-child(2) {
            margin-top: 50px;
            margin-bottom: 0px;

            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 52px;
              letter-spacing: 0px;
              color: #d0aa85;
            }

            &>div:nth-child(2) {
              display: flex;
              justify-content: space-between;
              flex-direction: column;

              &>div {
                margin-top: 50px;
                width: 100%;
                height: auto;
                position: relative;

                &>div:nth-child(1) {
                  padding: 8px 20px;
                  left: 20px;
                  top: -18px;
                  width: fit-content;
                  height: auto;
                  font-size: 20px;
                  line-height: 1;
                }

                &>div:nth-child(2) {
                  font-size: 14px;
                  line-height: 1.8;
                  padding: 0 20px;
                  padding-right: 30px;
                  padding-top: 46px;
                  padding-bottom: 30px;
                }
              }

              &>div:nth-child(2) {
                &>div:nth-child(1) {
                  left: 50px;
                }
              }
            }
          }
        }

        &>div:nth-child(4) {
          margin-bottom: 50px;

          .img-size {
            position: unset;
          }

          &>div:nth-child(1) {
            display: flex;
            flex-direction: column;
            margin-bottom: 40px;
            position: relative;

            &>div:nth-child(1) {
              width: 100%;

              &>div:nth-child(2) {
                margin-top: 51px;
                margin-right: 0;
                font-size: 16px;
                line-height: 1.8;
              }
            }

            &>div:nth-child(2) {
              margin-top: 40px;
            }
          }

          .pc-table {
            display: none;
          }

          &>div:nth-child(2) {
            &>div:nth-child(3) {

              &>div {
                height: auto;
                display: flex;
                flex-direction: column;
                background: #fff;
                border: none;
              }

              &>div:nth-child(1) {
                position: relative;
                width: 100%;
                border: 2px solid #e4c6a9;
                border-radius: 15px;

                &>div:nth-child(1) {
                  position: absolute;
                  top: -5%;
                  height: auto;
                  padding: 5px 25px;
                  width: fit-content;
                  left: 20%;
                  background: #fff;
                  border-radius: 15px;
                  border: 2px solid #e4c6a9;
                }

                &>div {
                  padding: 30px 10px;
                  text-align: justify;
                  color: #515151;
                  font-family: Noto Sans HK;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                  display: flex;
                  align-items: flex-start;
                  width: 100%;
                  border: none;

                  &>div:nth-child(1) {
                    color: #515151;
                    font-family: Noto Sans HK;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;

                    &>span:nth-child(2) {
                      color: #D0AA85;
                    }
                  }

                  &>div:nth-child(2),
                  &>div:nth-child(3),
                  &>div:nth-child(4) {
                    display: flex;
                    margin-top: 10px;

                    &>div {
                      color: #D0AA85;
                      font-size: 18px;
                      line-height: 1.6;

                      &>span {
                        font-size: 16px;
                        color: #515151;
                        line-height: 1.6;
                      }
                    }
                  }
                }
              }

              &>div:nth-child(2) {
                margin-top: 75px;
                border: none;
                color: #515151;
                font-family: Noto Sans HK;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                position: relative;
                border: 2px solid #e4c6a9;
                border-radius: 10px;

                &>div:nth-child(1) {
                  position: absolute;
                  top: -5%;
                  height: auto;
                  padding: 5px 25px;
                  width: fit-content;
                  left: 20%;
                  background: #fff;
                  border-radius: 15px;
                  border: 2px solid #e4c6a9;
                  text-align: justify;
                  color: #515151;
                  font-family: Noto Sans HK;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                  display: flex;
                  align-items: flex-start;
                }

                &>div:nth-child(2) {
                  padding: 30px 10px;
                  text-align: justify;
                  color: #515151;
                  font-family: Noto Sans HK;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                  display: flex;
                  align-items: flex-start;
                  width: 100%;
                  border: none;

                  &>div:nth-child(1) {
                    color: #515151;
                    font-family: Noto Sans HK;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;

                    &>span:nth-child(2) {
                      color: #D0AA85;
                    }
                  }

                  &>div:nth-child(2),
                  &>div:nth-child(3),
                  &>div:nth-child(4) {
                    display: flex;
                    margin-top: 10px;

                    &>div {
                      color: #D0AA85;
                      font-size: 18px;
                      line-height: 1.6;

                      &>span {
                        font-size: 16px;
                        line-height: 1.6;
                        color: #515151;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        &>div:nth-child(5) {
          &>div:nth-child(1) {
            margin-bottom: 75px;

            &>div:nth-child(2) {
              margin: 50px 0;
              margin-bottom: 25px;

              &>div {
                font-family: 'Noto Sans HK';
                font-size: 14px;
                font-weight: 400;
                line-height: 1.8;
                letter-spacing: 0px;
                color: #515151;
              }

              &>div:nth-child(2) {
                margin: 36px 0;
                display: flex;
                justify-content: space-between;
                padding: 0 0;

                &>div {
                  margin-right: 20px;
                }

                &>div:last-child {
                  margin: 0;
                }
              }
            }

            &>div:nth-child(3) {
              font-family: 'Noto Sans HK';
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.6;
              letter-spacing: 0px;
              color: #515151;

              &>p {
                margin-top: 12px;
              }

              &>p>span {
                color: #d0aa85;
              }
            }
          }

          &>div:nth-child(2) {

            &>div:nth-child(1) {
              display: flex;
              flex-direction: column;
              margin-bottom: 40px;
              width: 100%;

              &>div:nth-child(1) {
                width: 100%;

                &>div:nth-child(2) {
                  margin-top: 51px;
                  margin-right: 0;
                  font-size: 16px;
                  line-height: 1.8;
                }
              }

              &>div:nth-child(2) {
                margin-top: 40px;

                &>img {
                  width: 80%;
                  margin: auto;
                }
              }
            }

            &>div:nth-child(2) {
              .pc-table {
                display: none;
              }

              &>div:nth-child(1) {
                font-family: 'NotoSansHK-Bold';
                font-size: 28px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 52px;
                letter-spacing: 0px;
                color: #d0aa85;
                margin-bottom: 50px;
              }

              &>div:nth-child(3) {
                &>div:nth-child(n) {
                  height: auto;
                  display: flex;
                  flex-direction: column;
                  background: #fff;
                  border: 2px solid #E4C6A9;
                  margin-top: 75px;
                  border-radius: 10px;
                  position: relative;

                  &>div {
                    color: #515151;
                    width: 100%;
                    border: 2px solid #E4C6A9;
                    border-radius: 10px;
                    font-size: 16px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    &>div:nth-child(2),
                    &>div:nth-child(3),
                    &>div:nth-child(4) {
                      display: flex;
                      margin-top: 5px;

                      &>div {
                        color: #D0AA85;
                        font-family: Noto Sans HK;
                        font-size: 18px;

                        &>span {
                          color: #515151;
                          font-family: Noto Sans HK;
                          font-size: 16px;
                        }
                      }
                    }

                    &>div:nth-child(1) {
                      line-height: 1.6;
                      text-align: justify;

                      &>span:last-child {
                        color: #D0AA85;
                      }
                    }

                    &>div:nth-child(2) {
                      margin-top: 14px;
                    }
                  }

                  &>div:nth-child(1) {
                    position: absolute;
                    width: fit-content;
                    top: -7%;
                    line-height: 1.6;
                    left: 10%;
                    padding: 8px 65px;
                    background: #fff;
                  }

                  &>div:nth-child(2) {
                    border: 0;
                    padding: 45px 26px 30px 20px;
                    line-height: 1.8;
                  }
                }
              }
            }
          }
        }
      }
    }


    &>#eyeNeoplasms {
      &>div:nth-child(2) {
        margin-top: 25px;
        padding-right: 1px;
      }

      &>div:nth-child(3) {
        &>div:nth-child(1) {
          margin-top: 75px;
          margin-bottom: 75px;

          &>div:nth-child(2) {
            margin: 40px 0 50px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            &>div {
              margin-top: 30px;
              transform: scale(1);
              width: 100%;
              height: auto;
              background-color: #ffffff;
              border-radius: 30px;
              border: solid 2px #e4c6a9;
              padding-bottom: 30px;

              &>div:nth-child(1) {
                font-family: 'NotoSansHK-Bold';
                font-size: 24px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.8;
                letter-spacing: 0px;
                color: #d0aa85;
                text-align: center;
                padding-top: 28px;
                padding-bottom: 20px;
              }

              &>div:nth-child(2) {
                padding: 0 20px;
                font-size: 14px;
                line-height: 1.6;
              }
            }
          }
        }

        &>div:nth-child(2) {
          &>div:nth-child(1) {
            margin-top: 80px;
            margin-bottom: 50px;
          }

          &>div:nth-child(2) {
            margin-bottom: 0;

            &>div:nth-child(1) {
              font-size: 20px;
              line-height: 1.8;
              margin-bottom: 75px;
            }

            &>div:nth-child(2) {
              border-radius: 10px;
              border: solid 2px #e4c6a9;
              padding: 50px 20px 20px 20px;
              position: relative;

              &>div:nth-child(1) {
                position: absolute;
                left: -2px;
                top: -3%;
                width: fit-content;
                padding: 0 5px;
                height: auto;
                background-color: #ffffff;
                border-radius: 10px 10px 10px 0px;
                border: solid 2px #e4c6a9;

                font-family: 'NotoSansHK-Medium';
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d0aa85;

                display: flex;
                align-items: center;
                justify-content: center;

                &>span {
                  font-size: 18px;
                  line-height: 1.8;
                  letter-spacing: 0px;
                  color: #d0aa85;
                  margin: 0 10px;
                  margin-top: 7px;
                }
              }

              &>div:nth-child(2) {
                &>p {
                  font-size: 14px;
                  line-height: 1.8;
                }

                &>p:nth-child(1) {
                  margin-bottom: 15px;
                }
              }
            }
          }

          &>div:nth-child(3) {
            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.8;
              letter-spacing: 0px;
              color: #d0aa85;
              margin-top: 74px;
              margin-bottom: 75px;
            }

            &>div:nth-child(2) {
              margin-bottom: 75px;
              border-radius: 10px;
              border: solid 2px #e4c6a9;
              padding: 40px 26px 30px 20px;
              position: relative;

              &>div:nth-child(1) {
                position: absolute;
                left: -2px;
                top: -3%;
                width: fit-content;
                height: auto;
                background-color: #ffffff;
                border-radius: 10px 10px 10px 0px;
                border: solid 2px #e4c6a9;

                font-family: 'NotoSansHK-Medium';
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 42px;
                letter-spacing: 0px;
                color: #d0aa85;
                padding: 0 5px;

                display: flex;
                align-items: center;
                justify-content: center;

                &>span {
                  font-size: 18px;
                  line-height: 1.8;
                  letter-spacing: 0px;
                  color: #d0aa85;
                  margin: 0 10px;
                  margin-top: 7px;
                }
              }

              &>div:nth-child(2) {
                display: flex;
                justify-content: space-between;
                flex-direction: column;

                &>div:nth-child(1) {
                  width: 100%;

                  &>p {
                    font-size: 14px;
                    line-height: 1.6;
                    text-align: justify;
                  }

                  &>p:nth-child(2) {
                    margin-top: 12px;
                  }
                }

                &>div:nth-child(2) {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;

                  &>img {
                    width: 48%;
                    margin-top: 26px;
                  }
                }
              }
            }
          }

          &>div:nth-child(4) {
            margin-bottom: 75px;

            &>div:nth-child(1) {
              font-family: 'NotoSansHK-Bold';
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.8;
              letter-spacing: 0px;
              color: #d0aa85;
              margin-top: 70px;
              margin-bottom: 50px;
            }

            &>div:nth-child(2) {
              margin-bottom: 80px;
              border-radius: 10px;
              border: solid 2px #e4c6a9;
              padding: 40px 26px 30px 20px;
              position: relative;
              text-align: justify;

              &>div:nth-child(1) {
                position: absolute;
                left: -2px;
                top: -5%;
                width: fit-content;
                height: auto;
                background-color: #ffffff;
                border-radius: 10px 10px 10px 0px;
                border: solid 2px #e4c6a9;

                font-family: 'NotoSansHK-Medium';
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.8;
                letter-spacing: 0px;
                color: #d0aa85;
                padding: 0 5px;

                display: flex;
                align-items: center;
                justify-content: center;

                &>span {
                  font-size: 18px;
                  line-height: 1.8;
                  letter-spacing: 0px;
                  color: #d0aa85;
                  margin: 0 10px;
                  margin-top: 7px;
                }
              }

              &>div:nth-child(2) {
                &>p {
                  font-size: 14px;
                  line-height: 1.6;
                }

                &>p:nth-child(2) {
                  margin-top: 29px;
                }
              }
            }

            &>div:nth-child(3) {
              margin-bottom: 80px;
              border-radius: 10px;
              border: solid 2px #e4c6a9;
              padding: 40px 28px 35px 20px;
              position: relative;

              &>div:nth-child(1) {
                position: absolute;
                left: -2px;
                top: -2.5%;
                width: fit-content;
                height: auto;
                background-color: #ffffff;
                border-radius: 10px 10px 10px 0px;
                border: solid 2px #e4c6a9;

                font-family: 'NotoSansHK-Medium';
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.8;
                letter-spacing: 0px;
                color: #d0aa85;

                display: flex;
                align-items: center;
                justify-content: center;

                &>span {
                  font-size: 18px;
                  line-height: 1.8;
                  letter-spacing: 0px;
                  color: #d0aa85;
                  margin: 0 10px;
                  margin-top: 7px;
                }
              }

              &>div:nth-child(2) {
                display: flex;
                flex-direction: column;

                &>div:nth-child(1) {
                  width: 100%;
                  margin-right: 50px;

                  &>p {
                    font-size: 14px;
                    line-height: 1.6;
                  }

                  &>p:nth-child(2) {
                    margin-top: 29px;
                  }
                }

                &>div:nth-child(2) {
                  display: flex;
                  flex-direction: column;
                  text-align: center;
                  width: 50%;
                  margin: auto;
                  max-width: 50%;
                  margin-top: 26px;

                  &>div {
                    margin-top: 11px;
                    font-family: 'Noto Sans HK';
                    font-size: 14px;
                    line-height: 1.6;
                    letter-spacing: 2px;
                    color: #777777;
                  }
                }
              }
            }
          }
        }

        &>div:nth-child(3) {
          &>div:nth-child(2) {
            margin: 30px auto 70px;

            &>div {
              margin-bottom: 50px;
              position: relative;
              border-radius: 0;
              border: none;
              overflow: hidden;

              &>div:nth-child(1) {
                padding: 8.3px 52.5px 9.2px 52.5px;
                border-radius: 55px;
                background-color: #e4c6a9;
                width: fit-content;
                height: auto;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;

                font-family: 'NotoSansHK-Bold';
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 1.6;
                letter-spacing: 0px;
                color: #fff;
              }

              &>div:nth-child(2) {
                margin-left: 0;
                padding: 75px 0 0 0;
                font-size: 14px;
                line-height: 1.8;
                text-align: justify;
              }
            }

            &>div:nth-child(1) {
              &>duv:nth-child(2) {
                letter-spacing: -0.2px;
              }
            }
          }
        }
      }
    }

    &>#eyeProsthesis {
      margin-bottom: 80px;

      &>div:nth-child(2) {
        &>div:nth-child(1) {
          margin-top: 30px;
          text-indent: 0;
        }

        &>div:nth-child(2) {
          margin: 20px auto 50px;
          display: flex;
          justify-content: space-between;
          padding: 0;

          &>div {
            text-align: center;
            font-family: 'Noto Sans HK';
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.8;
            letter-spacing: 0px;
            color: #515151;

            &>img {
              width: 100px;
              height: 100px;
            }
          }
        }

        &>div:nth-child(3),
        &>div:nth-child(4) {
          margin-bottom: 50px;

          &>div:nth-child(1) {
            margin-bottom: 40px;
          }

          &>div:nth-child(2) {
            font-size: 14px;
            line-height: 1.8;
          }
        }

        &>div:nth-child(4) {
          &>div:nth-child(2) {
            &>div:nth-child(2) {
              margin-top: 50px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              &>div {
                display: flex;
                align-items: center;
                width: 100%;
                height: auto;

                font-size: 12px;
                line-height: 1.8;
                padding-right: 20px;
                padding-top: 25px;
                padding-bottom: 25px;
                border-top: 1px solid #e4c6a9;
                border-bottom: 1px solid #e4c6a9;
                margin-top: 30px;

                &>div:nth-child(1) {
                  margin-left: 10px;
                  margin-right: 20px;
                  font-family: 'OPPOSans-B';
                  font-size: 35px;
                  font-weight: normal;
                  font-stretch: normal;
                  line-height: 1.8;
                  letter-spacing: 0px;
                  color: #d5bb96;
                }

                &>div:nth-child(2) {
                  width: auto;
                }
              }

              &>div:first-child {
                margin: 0;
              }
            }
          }
        }
      }
    }

    &>#usage {
      margin-bottom: 50px;

      &>div:nth-child(2) {
        width: 100%;
        margin-top: 60px;
        margin-bottom: 95px;

        &>div:nth-child(1) {
          font-family: 'NotoSansHK-Medium';
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #d0aa85;
          margin-bottom: 0;
        }

        &>div:nth-child(2) {
          background: #fff;
          width: 100%;
          display: flex;
          min-height: auto;
          margin-left: 30px;
          flex-direction: column;

          &>div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            margin-top: 0;
            margin-right: 31px;
            text-align: justify;

            &>div {
              width: 100%;
              height: auto;
              display: block;
              font-family: 'Noto Sans HK';
              font-size: 14px;
              line-height: 1.6;
              letter-spacing: 0px;
              color: #515151;
              position: relative;
              margin-bottom: 40px;
            }

            &>div::before {
              position: absolute;
              content: '';
              font-family: 'OPPOSans-B';
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.2;
              letter-spacing: 0px;
              color: #d5bb96;
              top: 0;
              left: -30px;
            }

            &>div::after {
              content: '';
              background: url('https://static.cmereye.com/imgs/2023/07/f416659264a70115.png') no-repeat;
              width: 10px;
              display: inline-block;
              height: 19px;
              position: absolute;
              left: -22px;
              top: 32px;
            }
          }

          &>div:nth-child(1) {
            &>div {
              margin-top: 5px;
            }

            &>div:nth-child(1)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/e5d62f0f593df732.png') no-repeat;
              height: 40px;
            }

            &>div:nth-child(1)::before {
              content: '01';
            }

            &>div:nth-child(2)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }

            &>div:nth-child(2)::before {
              content: '02';
            }

            &>div:nth-child(3)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }

            &>div:nth-child(3)::before {
              content: '03';
            }

            &>div:nth-child(4)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }

            &>div:nth-child(4)::before {
              content: '04';
              left: -30px;
            }
          }

          &>div:nth-child(2) {
            flex-direction: column-reverse;
            margin-top: 0;

            &>div:nth-child(1) {
              margin: 0;
              padding: 0;
            }

            &>div:nth-child(1)::before {
              content: none;
            }

            &>div:nth-child(1)::after {
              content: none;
            }

            &>div:nth-child(2)::after {
              content: none;
            }

            &>div:nth-child(2) {
              margin: 0;
            }

            &>div:nth-child(2)::before {
              content: '07';
              top: 0;
            }

            &>div:nth-child(3)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }

            &>div:nth-child(3)::before {
              content: '06';
              top: 0;
            }

            &>div:nth-child(4)::before {
              content: '05';
              top: 0;
              left: -30px;
            }
          }
        }
      }

      &>div:nth-child(3) {
        margin-bottom: 50px;

        &>div:nth-child(1) {
          font-family: 'NotoSansHK-Medium';
          font-size: 32px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #d0aa85;
          margin-bottom: 20px;
        }

        &>div:nth-child(2) {
          background: #fff;
          width: 100%;
          min-height: auto;
          margin-left: 35px;
          display: flex;
          flex-direction: column;

          &>div {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            margin-top: 0;
            margin-right: 31px;

            &>div {
              width: 100%;
              height: auto;
              display: block;
              font-family: "Noto Sans HK";
              font-size: 14px;
              line-height: 1.6;
              letter-spacing: 0px;
              color: #515151;
              position: relative;
              margin-bottom: 40px;
            }

            &>div::before {
              position: absolute;
              content: '';
              font-family: 'OPPOSans-B';
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.2;
              letter-spacing: 0px;
              color: #d5bb96;
              top: 0;
              left: -30px;
            }

            &>div::after {
              content: '';
              background: url('https://static.cmereye.com/imgs/2023/07/f416659264a70115.png') no-repeat;
              width: 10px;
              display: inline-block;
              height: 19px;
              position: absolute;
              left: -22px;
              top: 32px;
            }
          }

          &>div:nth-child(1) {
            &>div:nth-child(1)::before {
              content: '01';
            }

            &>div:nth-child(2)::before {
              content: '02';
            }

            &>div:nth-child(3)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }

            &>div:nth-child(3)::before {
              content: '03';
            }

            &>div:nth-child(4)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }

            &>div:nth-child(4)::before {
              content: '04';
              left: -30px;
            }
          }

          &>div:nth-child(2) {
            margin-top: 0;
            flex-direction: column-reverse;

            &>div:nth-child(1) {
              margin: 0;
            }

            &>div:nth-child(1)::after {
              content: none;
            }

            &>div:nth-child(1)::before {
              content: none;
            }

            &>div:nth-child(2) {
              margin: 0;
            }

            &>div:nth-child(2)::after {
              content: none;
            }

            &>div:nth-child(2)::before {
              content: '07';
              top: 0;
            }

            &>div:nth-child(3)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }

            &>div:nth-child(3)::before {
              content: '06';
              top: 0;
            }

            &>div:nth-child(4)::after {
              background: url('https://static.cmereye.com/imgs/2023/07/9f42072f1f97a393.png') no-repeat;
              height: 55px;
            }

            &>div:nth-child(4)::before {
              content: '05';
              top: 0;
              left: -30px;
            }
          }
        }
      }

      &>div:nth-child(4) {
        margin-bottom: 75px;

        &>div {
          font-family: 'Noto Sans HK';
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0px;
          color: #515151;

          &>span {
            font-family: 'NotoSansHK-Bold';
            font-size: 12px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.6;
            letter-spacing: 0px;
            color: #d0aa85;
          }

          &>.usage-box-text {
            font-weight: 400;
            color: #515151;
          }
        }

        &>div:nth-child(2) {
          margin-top: 15px;
        }
      }

      &>div:nth-child(5) {
        &>div:nth-child(1) {
          font-family: 'NotoSansHK-Medium';
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.8;
          letter-spacing: 0px;
          color: #d0aa85;
          margin-bottom: 20px;
        }

        .eye_attention {
          font-size: 12px;
          line-height: 1.6;
        }

        &>div:nth-child(3) {
          margin-top: 40px;

          &>div {
            display: flex;
            margin-bottom: 14px;

            &>div:nth-child(1) {
              min-width: 120px;
              width: fit-content;
              height: fit-content;
              background-color: #d0aa85;
              border-radius: 10px;
              padding: 10px 19px;
              color: #fff;
              margin-bottom: 0;
              margin-top: 0;
              margin-right: 10px;
            }

            &>div>p {
              display: flex;
              align-items: flex-start;

              &>span {
                display: flex;
                justify-content: center;
                align-items: center;
                min-width: 25px;
                width: 25px;
                height: 25px;
                color: #d5bb96;
                background-color: #ffffff;
                border: solid 2px #decbaf;
                border-radius: 50%;
                padding-top: 8px;
                margin-right: 10px;
                margin-top: 5px;
              }
            }
          }

          &>div:nth-child(4) {
            flex-direction: column;

            &>div:nth-child(2) {
              margin-top: 15px;

              &>p {
                align-items: flex-start;
                margin-bottom: 15px;
              }
              &>p>span{
                padding: 0;
                margin-right: 5px;
                margin-top:-3px;
                font-size: 14px;
              }
            }
          }

          &>div:nth-child(5) {
            flex-direction: column;

            &>div:nth-child(2) {
              margin-top: 15px;
              &>p {
                align-items: flex-start;
                margin-bottom: 15px;
              }
              &>p>span{
                padding: 0;
                margin-right: 5px;
                margin-top: -3px;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }

  .eyeOrthopaedicDisease_p {
    font-size: 16px;
    text-indent: 0;
    line-height: 1.8;
  }

  .eyeOrthopaedicDisease_title_text_border {
    padding: 5px 0;
    font-size: 24px;
    line-height: 1.8;
  }

  .eyeOrthopaedicDisease_text_p_span {
    font-size: 16px;
    line-height: 1.8;
  }

  .mb_text_p_span {
    margin-top: 262px;
  }
  .rightSidesNavigation{
    display: none;
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .eyeOrthopaedicDisease_nav {
    margin-top: -45%;
  }

  .eyeOrthopaedicDisease_head {
    // margin-left: 15vw;
  }

  .fromTable {
    margin-top: -60%;
  }
}</style>
