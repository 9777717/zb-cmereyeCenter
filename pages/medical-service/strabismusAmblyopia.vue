<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '兒童斜弱視｜希瑪眼科｜醫療服務',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心提供兒童眼科服務。小兒眼疾病包括小兒斜視、小兒弱視、先天性白內障、急性結膜炎、先天性淚囊炎、先天性上瞼下垂及眼外傷。兒童斜視的種類有內斜視／外斜視、上斜視／下斜視，斜視有真假之分，假性內斜視為最常見並隨兒童長大會逐漸消失。治療兒童斜視方法可以透過眼鏡矯正、視軸矯形運動、遮蓋治療及手術矯正去改善斜視。兒童也有機會受發育不良影響患上弱視，弱視種類包括斜視性弱視、屈光參差性弱視、屈光不正性弱視、視覺剝奪性弱視、先天性弱視。預防小兒眼病最有效的方法是進行早期檢查，愈早發現以早治療。',
    },
    {
      name: 'keywords',
      content:
        '兒童斜弱視 斜視 弱視 兒童眼睛檢查 兒童眼科 兒童視力 兒童視力檢查 幼兒眼科 斜視 斜視手術 斜視成因 斜視治療費用 斜視矯正 斜視測試 斜視運動 弱視 弱視成因 弱視訓練 弱視治療 弱視症狀 先天性白內障 先天性白內障治療 先天性淚囊炎 先天性上瞼下垂 先天性上瞼下垂遺傳 眼睛疾病 眼科醫生 兒童眼科 香港眼科 香港希瑪眼科中心 希瑪眼科中心 希瑪 希瑪醫療集團 希瑪醫療 ',
    },
  ],
}))
// 传递背景色
const backgd = [
  '#fbbfa1;',
  '-webkit-linear-gradient(to right, #fedac8, #fbbfa1);',
  'linear-gradient(to right, #fedac8, #fbbfa1);',
]
const strabismusList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/c6538e74f667255f.png',
    text: '正常眼位',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/ac10f2963ea4e934.png',
    text: '內斜視',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/b61e2ddd17636d74.png',
    text: '外斜視',
  },
]
const strabismusList2 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/8f812fd75d944041.png',
    text: '正常眼位',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/8b74483d3999cc82.png',
    text: '上斜視',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/d7ab6fa9a859bec4.png',
    text: '下斜視',
  },
]
const strabismusList3 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/be7d21516fa68144.png',
    text: '正常眼位',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/f25fdfd4a14e2bed.png',
    text: '假性內斜視',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/05269ce104f5d003.png',
    text: '（真）內斜視',
  },
]
const strabismusList4 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/f317dab3447cad52.png',
    text: ['眼睛持續看起來不正常'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/92abe075389b8af9.png',
    text: ['看東西時雙眼沒有同步移動，', '即一隻眼望向一方，另一隻沒有跟隨'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/ee8e638950ef26fd.png',
    text: ['單眼或遮蓋一隻眼睛', '看電視或書'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/37924e5d99c31f51.png',
    text: ['經常側頭看東西'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/9b92ae8185dfbea8.png',
    text: ['經常瞇眼、斜側', '凝望、眨眼、揉眼睛'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/af77985aa7af1b00.png',
    text: ['經常眼淚汪汪'],
  },
]
const strabismusList5 = [
  {
    title: '眼鏡矯正',
    img: 'https://static.cmereye.com/imgs/2023/06/6a896080eccf672a.png',
    text: '當孩子眼部輪廓還未發育完全，如鼻樑扁平，雙眼會顯得較靠近鼻樑且眼球鞏膜露出的部分較小，產生斜視的錯覺。但當用手指把鼻樑旁的皮膚輕輕地捏起，就會發現斜視消失。隨著兒童日漸長大，鼻樑長高，兩旁皮膚自然拉起，假斜視會逐漸消失。',
  },
  {
    title: '視軸矯形運動',
    img: 'https://static.cmereye.com/imgs/2023/06/9c69590dd98eb332.png',
    text: '視軸矯形運動有很多種類，外斜視患者可做眼球肌肉匯聚運動，俗稱「鬥雞練習」。而內斜視患者則可做眼球肌肉放鬆運動。視軸矯形運動也可以鍛煉雙眼單一視功能，幫助斜視患者加強或重新建立視覺立體感。',
  },
  {
    title: '遮蓋治療（遮眼治療）',
    img: 'https://static.cmereye.com/imgs/2023/06/dd785273b00a7055.png',
    text: '由於不少斜視患者也有弱視問題，透過遮眼治療法（用眼貼或特製眼鏡遮蓋正常的眼睛），遮蔽正常的眼睛，驅使患者多用有弱視的眼睛，藉以鍛煉弱視眼及恢復其功能。每天遮眼的時間及療程時期視乎患者的年齡和弱視的嚴重程度，當弱視眼的視力有改善，在眼科醫生的評估及指導下可停止遮眼治療。',
  },
  {
    title: '手術矯正',
    img: 'https://static.cmereye.com/imgs/2023/06/fb8d95f43e5c758e.png',
    text: '手術一般是治療斜視的最後一步，透過改變眼球肌肉的鬆緊程度，使得雙眼視軸回復平衡，治療斜視。手術的時機牽涉多方面的考慮，病人接受手術的時機因人而異，斜視患者在接受手術前必須咨詢眼科醫生的意見。',
  },
]
const amblyopiaList1 = [
  {
    img: 'https://static.cmereye.com/imgs/2023/06/5b9e1baac69abb24.png',
    title: '斜視性弱視',
    text: '斜視性弱視常見於患有斜視或曾有斜視的4歲以下兒童。患者兩眼視線不平行，大腦皮質會主動抑制斜視眼生成影像，並形成弱視。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/9a3332f88b6d69af.png',
    title: '屈光參差性弱視（雙眼視差太大）',
    text: '兩眼視力不同，視網膜成像大小與清晰度都不同。兩眼屈光度數相差300度以上人士，屈光度較高的眼睛會常形成弱視和斜視。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/7ace87f50adb18dc.png',
    title: '屈光不正性弱視',
    text: '多發生在高度近視、遠視及散光而未戴矯正眼鏡的兒童或成年人。多數為近視600度以上、遠視500度以上、散光大過或等於200度人士。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/2a48ee959aee43e2.png',
    title: '視覺剝奪性弱視',
    text: '嬰兒期上瞼下垂、角膜混濁、先天性白內障，阻擋光線進入的時間太長，使光線不能刺激眼球、妨礙或阻斷黃斑接受視覺刺激，因而產生弱視。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/06/1c4c979e78450f83.png',
    title: '先天性弱視',
    text: '發病原因尚未明確，可能由於出生後視網膜出血或視神經病變而影響視功能的正常發育，有些則是由眼球震顫全色盲等引起。',
  },
]
const treatList1 = [
  {
    svg: 'https://static.cmereye.com/imgs/2023/06/25507be120bacf59.png',
    title: '配戴眼鏡',
    img: 'https://static.cmereye.com/imgs/2023/06/77e219f43e2c6242.png',
    text: [
      '部分輕微弱視的小朋友，可以透過配戴正確度數的眼鏡矯正屈光不正，從而使兩隻眼睛一起看東西和改善視力。爲保證矯正效果，孩子大多數時間都需要戴著眼鏡。',
    ],
  },
  {
    svg: 'https://static.cmereye.com/imgs/2023/06/af76b91d4e877062.png',
    title: '遮蓋治療（遮眼治療）',
    img: 'https://static.cmereye.com/imgs/2023/06/79189b9514be7577.png',
    text: [
      '透過遮蓋正常眼睛，讓弱視眼鍛鍊出正常視力。療程的時間要視乎孩子弱視的嚴重程度、年齡、孩子及家長在遮眼治療上的合作程度而決定。治療過程中，孩子需要定期覆診，由眼科專科醫生檢查正常眼睛和弱視眼睛的視力，並按治療進度調節遮眼時間。如果療程有效，會慢慢減少遮眼時間，直到弱視眼能追上正常視力。',
      '遮眼訓練對治療弱視有一定的幫助，若需治療建議盡早進行，愈早治療，效果愈理想。如果8歲後才發現患有弱視，治癒弱眼視力的機會則會較低。',
    ],
  },
  {
    svg: 'https://static.cmereye.com/imgs/2023/06/333142a79088a1b6.png',
    title: '滴散瞳藥水',
    img: 'https://static.cmereye.com/imgs/2023/06/f632114cdb47d561.png',
    text: [
      '如小朋友因外觀、不適或皮膚敏感而不願意遮眼，眼科專科醫生會建議家長考慮用散瞳藥水使主力眼近距離視力模糊，從而促使小朋友多使用弱視眼。',
    ],
  },
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: '斜視',
    anchorLink: '/medical-service/strabismusAmblyopia#strabismus',
  },
  {
    anchorName: '斜視種類',
    anchorLink: '/medical-service/strabismusAmblyopia#kind',
  },
  {
    anchorName: '治療斜視',
    anchorLink: '/medical-service/strabismusAmblyopia#cure',
  },
  {
    anchorName: '弱視',
    anchorLink: '/medical-service/strabismusAmblyopia#amblyopia',
  },
  {
    anchorName: '弱視種類',
    anchorLink: '/medical-service/strabismusAmblyopia#amblyopia_kind',
  },
  {
    anchorName: '治療弱視',
    anchorLink: '/medical-service/strabismusAmblyopia#treat',
  },
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
</script>

<template>
  <div class="strabismusAmblyopia">
    <!-- 头部 -->
    <div class="strabismusAmblyopia_head">
      <div>
        <div>
          <div>兒童斜弱視</div>
          <div>AMBLYOPIA AND STRABISMUS IN CHILDREN</div>
          <div>AMBLYOPIA AND STRABISMUS IN CHILDREN</div>
          <div>AMBLYOPIA AND STRABISMUS IN CHILDREN</div>
        </div>
      </div>
    </div>
    <div class="strabismusAmblyopia-nav">
      <serviceNav :arrData="serviceNavigation" :pageName="'strabismusAmblyopia'" />
    </div>
    
    <div class="strabismusAmblyopia_nav">
      <div id="strabismus">
        <div class="strabismusAmblyopia_title_text">甚麼是斜視？</div>
        <div class="strabismusAmblyopia_text_p_span">
          <p>
            正常人看事物時，雙眼視軸平行，可以望向同一方向。而斜視是指雙眼看東西時視軸不平行，導致其中一個眼球外斜或內斜（向內、向外、向上或向上傾斜）。若仍處於視覺發育時期，斜視引致其中一隻眼睛經常偏離視軸，大腦可能會抑制該眼睛的影像，久而久之小朋友會慣性棄用斜視眼，從而造成斜視眼視力發育不良，變成弱視眼。
          </p>
          <p>
            為甚麼會有斜視？腦部、腦神經、眼睛或眼球肌肉的先天性缺陷，或後天的疾病、損傷，又或者是屈光不正（近視或遠視）都可能導致兒童斜視。
          </p>
        </div>
      </div>
      <div id="kind">
        <div class="strabismusAmblyopia_title_text">常見的斜視種類</div>
        <div>
          <div>
            <div>內斜視／外斜視</div>
            <div>
              <div class="strabismusAmblyopia_text_p_span">
                小朋友看東西向前直望時，斜視眼斜向鼻樑方向為內斜視，斜向耳朵方向為外斜視。
              </div>
              <div>
                <div v-for="(item, index) in strabismusList1" :key="index">
                  <img :src="item.img" />
                  <div>{{ item.text }}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>上斜視／下斜視</div>
            <div>
              <div class="strabismusAmblyopia_text_p_span">
                小朋友看東西向前直望時，斜視眼向上斜為上斜視，向下斜為下斜視。
              </div>
              <div>
                <div v-for="(item, index) in strabismusList2" :key="index">
                  <img :src="item.img" />
                  <div>{{ item.text }}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>如何區分孩子真假斜視？</div>
            <div>
              <div class="strabismusAmblyopia_text_p_span">
                斜視有真假之分，假斜視是指從外觀上兩隻眼珠位置看似有偏差，視軸並沒有出現不平行的狀況，不會影響正常視力發展。嬰幼兒最常見有「假內斜視」（俗稱「假鬥雞眼」）。
              </div>
              <div>
                <div v-for="(item, index) in strabismusList3" :key="index">
                  <img :src="item.img" />
                  <div>{{ item.text }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="strabismusAmblyopia_title_btn" @click="goWhatsApp">
          <p>判斷斜視勿猜測</p>
          <p>立即WhatsApp預約檢查</p>
        </div>
        <div class="strabismusAmblyopia_text_p_span">
          當孩子眼部輪廓還未發育完全，如鼻樑扁平，雙眼會顯得較靠近鼻樑且眼球鞏膜露出的部分較小，產生斜視的錯覺。但當用手指把鼻樑旁的皮膚輕輕地捏起，就會發現斜視消失。隨著兒童日漸長大，鼻樑長高，兩旁皮膚自然拉起，假斜視會逐漸消失。
        </div>
        <div>
          <div>如何發現孩子有斜視？</div>
          <div class="strabismusAmblyopia_text_p_span">
            孩子日常的舉動亦可能反映斜視問題︰
          </div>
          <div>
            <div v-for="(item, index) in strabismusList4" :key="index">
              <div>
                <img :src="item.img" />
              </div>
              <div class="strabismusAmblyopia_text_p_span">
                <p v-for="(ele, i) in item.text" :key="i">{{ ele }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="cure">
        <div class="strabismusAmblyopia_title_text">治療斜視方法</div>
        <div>
          <div v-for="(item, index) in strabismusList5" :key="index">
            <div>{{ item.title }}</div>
            <div>
              <div>
                <img :src="item.img" />
              </div>
              <div class="strabismusAmblyopia_text_p_span">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <div id="amblyopia">
        <div class="strabismusAmblyopia_title_text">甚麼是弱視？</div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/2ed1badaabb9c9cb.png"
            />
          </div>
          <div class="strabismusAmblyopia_text_p_span">
            嬰兒出生時視功能並未發育完成，隨著外界的刺激才慢慢發展出各種視覺機能，而出生後到3歲期間是視功能發育最重要的階段。如果發育受到不良的影響，就有可能導致弱視。弱視患者無法透過配戴眼鏡、動手術或其他任何方法，達致正常視力水平，無論看遠或近的景物都模糊不清。
          </div>
        </div>
        <div id="amblyopia_kind">
          <div class="strabismusAmblyopia_title_text">弱視種類</div>
          <div>
            <div v-for="(item, index) in amblyopiaList1" :key="index">
              <div><img :src="item.img" /></div>
              <div>
                <div>{{ item.title }}</div>
                <div class="strabismusAmblyopia_text_p_span">
                  {{ item.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="strabismusAmblyopia_title_btn" @click="callTel">
          <p>勿錯過治療弱視黃金期</p>
          <p>立即致電預約見醫生</p>
        </div>
      </div>
      <div id="treat">
        <div class="strabismusAmblyopia_title_text">治療弱視方法</div>
        <div class="strabismusAmblyopia_text_p_span">
          <p>
            弱視的治療效果與年齡密切相關，年齡愈小，治療的效果愈好。3至6歲是治療的關鍵期，12歲以後的治癒機率較低。6歲前治癒率高達80%，而大於6歲以及小於12歲的患者，治癒率僅達到50%左右。
          </p>
          <p>
            由於每個孩子的視功能情況都不一樣，眼科專科醫生需要為孩子制定針對性治療方案，還需根據患者進展情況而適時調整。
          </p>
        </div>
        <div>
          <div v-for="(item, index) in treatList1" :key="index">
            <div>
              <img :src="item.svg" />
              <div>{{ item.title }}</div>
            </div>
            <div>
              <div>
                <img :src="item.img" alt="" />
              </div>
              <div class="strabismusAmblyopia_text_p_span">
                <p v-for="(ele, i) in item.text" :key="i">{{ ele }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="bg_strabismusAmblyopia_nav"></div>
    <div id="curativeTime">
      <div>把握治療斜弱視黃金時期</div>
      <div class="strabismusAmblyopia_text_p_span">
        家長應定時帶小朋友檢查視力，及早發現和找出成因。愈早發現和開始治療效果愈好，而治療成效亦需要家長和小朋友配合，才可以有效提升小朋友視力。
      </div>
    </div>
    <div>
      <!-- <rightSidesNavigation :service-navigation="serviceNavigation" /> -->
    </div>
    <!-- 下载 -->
    <div class="dow">
      <div>
        <div>
          <div @click.stop="getPdf('strabismusAmblyopia.pdf','兒童斜弱視')">
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt=""
              srcset=""
            />
          </div>
          <div @click.stop="getPdf('strabismusAmblyopia.pdf','兒童斜弱視')">
            <p>兒童斜弱視</p>
            <p>下載小冊子</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#fbbfa1;'}`"
    />
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
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
.strabismusAmblyopia-nav{
  margin-top: 150px;
}
.strabismusAmblyopia_nav {
  max-width: 1200px;
  transform: scale(0.85);
  margin: auto;
  margin-top: -40%;

  & > #strabismus {
    & > div:nth-child(2) {
      line-height: 46px;
      color: #b4968d;

      & > p {
        margin-top: 50px;
      }
    }
  }

  & > #kind {
    margin-top: 160px;

    & > div:nth-child(2) {
      margin-top: 100px;
      margin-bottom: 120px;

      & > div {
        & > div:nth-child(1) {
          width: 353px;
          height: 93px;
          background: url('https://static.cmereye.com/imgs/2023/06/282e9a23221c6917.png');
          display: flex;
          justify-content: center;
          align-items: center;

          font-family: 'SourceHanSansCN-Medium';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #fefeff;
        }

        & > div:nth-child(2) {
          margin-top: 45px;

          & > div:nth-child(1) {
            line-height: 38px;
          }

          & > div:nth-child(2) {
            display: flex;
            flex-direction: row;
            padding: 0 20px;
            justify-content: space-between;

            & > div {
              margin-top: 103px;

              & > div:nth-child(2) {
                margin: auto;
                margin-top: 51px;
                border-radius: 50%;

                width: 146px;
                height: 49px;
                background-image: linear-gradient(#a3b5fc, #a3b5fc),
                  linear-gradient(#1a7ec5, #1a7ec5);
                background-blend-mode: normal, normal;

                font-family: 'Noto Sans HK';
                font-size: 22px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #fefefe;

                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
      }

      & > div:nth-child(2) {
        margin-top: 190px;
      }

      & > div:nth-child(3) {
        margin-top: 220px;

        & > div:nth-child(1) {
          width: 544px;
          height: 105px;
          background: url('https://static.cmereye.com/imgs/2023/06/063fecc5281ba0ab.png');
        }

        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div {
              & > div:nth-child(2) {
                background: url('https://static.cmereye.com/imgs/2023/06/71124468b48b8228.png');
                border-radius: 0;
                width: 201px;
                height: 60px;
              }
            }
          }
        }
      }
    }

    & > div:nth-child(4) {
      width: 1270px;
      height: 378px;
      margin: auto;
      background: url('https://static.cmereye.com/imgs/2023/06/2f0b833ceb2c7969.png');
      margin-top: 133px;
      margin-bottom: 116px;
      padding: 0 79px;

      line-height: 41px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: 100%;
      transform: scale(0.85);
      margin-left: -40px;
    }

    & > div:nth-child(5) {
      & > div:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'NotoSansHK-Medium';
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 38px;
        letter-spacing: 0px;
        color: #ffffff;

        width: 544px;
        height: 105px;
        background: url('https://static.cmereye.com/imgs/2023/06/063fecc5281ba0ab.png');
      }

      & > div:nth-child(2) {
        margin-top: 70px;
        line-height: 42px;
      }

      & > div:nth-child(3) {
        padding: 0 79px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        & > div {
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-bottom: 100px;

          & > div:nth-child(2) {
            text-align: center;
            margin-top: 42px;
          }
        }
      }
    }
  }

  & > #cure {
    & > div:nth-child(2) {
      margin-top: 100px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > div {
        width: calc(50% - 30px);
        // min-height: 681px;
        background-color: #ffffff;
        box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        margin-bottom: 80px;
        padding-bottom: 20px;
        & > div:nth-child(1) {
          width: 100%;
          height: 95px;
          border-radius: 20px 20px 0 0;
          background-image: linear-gradient(#e9a98c, #e9a98c),
            linear-gradient(#fe9f59, #fe9f59);
          background-blend-mode: normal, normal;
          display: flex;
          justify-content: center;
          align-items: center;

          font-family: 'NotoSansHK-Bold';
          font-size: 36px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #fefeff;
        }

        & > div:nth-child(2) {
          padding: 45px 45px 0 45px;

          & > div:nth-child(1) {
            // width: 530px;
            width: 100%;
            min-height: 209px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ffefcf;
            margin-bottom: 35px;
            img{
              width: 100%;
            }
          }

          & > div:nth-child(2) {
            line-height: 46px;
          }
        }
      }

      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > div:nth-child(2) {
            letter-spacing: -1px;
          }
        }
      }
    }
  }

  & > #amblyopia {
    margin-top: 160px;
    margin-bottom: 140px;

    & > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 130px;
      margin-bottom: 160px;

      & > div:nth-child(1) {
        width: 574px;

        & > img {
          width: 100%;
        }
      }

      & > div:nth-child(2) {
        width: 681px;
        line-height: 46px;
        margin-left: 64px;
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        margin: 120px auto;

        & > div {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-between;
          border-bottom: dashed 2px #fbbfa1;
          padding: 61px 36px;

          & > div:nth-child(2) {
            width: 600px;

            & > div:nth-child(1) {
              font-family: 'NotoSansHK-Medium';
              font-size: 34px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #fff;

              display: flex;
              justify-content: center;
              align-items: center;
              background: url('https://static.cmereye.com/imgs/2023/06/79e8524bbf129b0f.png');
              width: 235px;
              height: 70px;
              margin: auto;
              margin-bottom: 50px;
            }

            & > div:nth-child(2) {
              line-height: 42px;
              letter-spacing: -1px;
            }
          }
        }

        & > div:nth-child(2) {
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              background: url('https://static.cmereye.com/imgs/2023/06/bcb4a9c8ee54627c.png');
              width: 550px;
              height: 68px;
            }
          }
        }

        & > div:nth-child(3),
        & > div:nth-child(4) {
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              background: url('https://static.cmereye.com/imgs/2023/06/c8d747a586637be1.png');
              width: 309px;
            }
          }
        }

        & > div:nth-child(even) {
          flex-direction: row;
        }

        & > div:last-child {
          border: none;
        }
      }
    }
  }

  & > #treat {
    margin: 140px auto;

    & > div:nth-child(2) {
      background: url('https://static.cmereye.com/imgs/2023/06/91df227071dfbf87.png');
      width: 1319px;
      height: 389px;
      padding: 115px 100px;
      margin: 120px auto 60px;

      line-height: 36px;
      color: #d37f66;

      & > p {
        margin-bottom: 30px;
      }
    }

    & > div:nth-child(3) {
      & > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        & > div:nth-child(1) {
          display: flex;
          padding-bottom: 17px;
          position: relative;

          & > div:nth-child(2) {
            margin-left: 12px;
            font-family: 'NotoSansHK-Bold';
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #fbbfa1;
          }
        }

        & > div:nth-child(1)::after {
          content: '';
          width: 1000px;
          border-bottom: 2px dashed #fbbfa1;
          display: inline-block;
          position: absolute;
          left: 180px;
          bottom: 0;
        }

        & > div:nth-child(2) {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 49px auto 120px;

          & > div:nth-child(2) {
            width: 1044px;
            margin-left: 41px;

            & > p {
              margin-bottom: 30px;
              line-height: 1.8;
            }
          }
        }
      }

      & > div:last-child {
        & > div:nth-child(2) {
          margin-bottom: 0;
        }
      }
    }
  }
}

#curativeTime {
  max-width: 1020px;
  width: 1020px;
  margin: 82px auto 220px;
  width: 1020px;
  height: 357px;
  background: url('https://static.cmereye.com/imgs/2023/06/fa0a4822c27182ec.png')no-repeat;
  background-size: 100% 100%;

  & > div:nth-child(1) {
    font-family: 'NotoSansHK-Medium';
    font-size: 32px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 3.4;
    text-align: center;
    letter-spacing: 0px;
    color: #d37f66;
    padding-left: 15px;
  }

  & > div:nth-child(2) {
    margin-top: 90px;
    padding: 0 65px;
    line-height: 42px;
  }
}

#bg_strabismusAmblyopia_nav {
  background: url('https://static.cmereye.com/imgs/2023/06/81b654ccb67fbf4f.png');
  width: 100%;
  height: 145px;
  margin-top: -50%;
}

.strabismusAmblyopia_text_p_span {
  font-family: 'Noto Sans HK';
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #515151;
}

.strabismusAmblyopia_title_text {
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

.strabismusAmblyopia_title_btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  margin: auto;
  width: 580px;
  height: 140px;
  border-radius: 20px;
  // background-image: linear-gradient(-90deg, #fbbfa1 0%, #ffd6c1 100%),
  //   linear-gradient(#eda2a6, #eda2a6);
  background-blend-mode: normal, normal;

  font-family: 'Noto Sans HK';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  text-shadow: 0 2px 5px #ffd6c1;
  &::before {
    content: "";
    position: absolute;
    top: -100%;
    left: -100%;
    bottom: -100%;
    right: -100%;
    background: linear-gradient(45deg,  #fdf6b7 0%, #f3a6b8 100%);
    background-size: 100% 100%;
    animation: bgposition 5s infinite linear alternate;
    z-index: -1;
  }
}

// 头部样式
.strabismusAmblyopia_head {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    // margin-top: 100px;
    // margin-left: 33vw;
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
        color: #fbbfa1;
        z-index: 5;
        position: relative;
        font-weight: bold;
      }

      & > div:nth-child(2) {
        position: relative;
        z-index: 5;
        font-family: 'DINCondensed-Bold';
        font-size: 76px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: 0.003em;
        color: #fbbfa1;
        margin-top: 15px;
      }
      & > div:nth-child(3),& > div:nth-child(4) {
        font-family: 'DINCondensed-Bold';
        display: block;
        position: relative;
        z-index: 5;
        font-size: 76px;
        letter-spacing: 0.003em;
        -webkit-text-stroke: 1.5px #fbbfa1;
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

// 下载
.dow {
  margin-top: 150px;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    & > div {
      width: 62.5%;
      height: 202px;
      background: #fbbfa1;
      position: relative;
      display: flex;
      align-items: center;

      & > div:nth-child(1) {
        margin-left: 37.28433%;
        margin-right: 3.90625%;
        cursor: pointer;
        & > img {
          width: 120px;
          height: 135px;
        }
      }

      & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .strabismusAmblyopia_head {
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
          -webkit-text-stroke: 1px #fbbfa1;
          clip-path: polygon(0 0, 100% 0, 100% 50% ,0 50%);
          transform: translateY(-20%);
        }
        & > div:nth-child(4) {
          clip-path: polygon(0 0, 100% 0, 100% 40% ,0 40%);
          transform: translateY(-77%);
        }
      }
      &>div:nth-child(1)::after {
        width: 190px;
        height: 200px;
        top: 195px;
      }
      &>div:nth-child(2) {
        top: 0;
        width: 325px;
        left: -1px;
        &>img:nth-child(1){
          margin-bottom: 5px;
        }
      }
    }
  }
  .strabismusAmblyopia_nav {
    transform: scale(1);
    margin-top: 190px;
    & > #strabismus {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        line-height: 1.8;
        &>p{
          margin-top: 25px;
        }
      }
    }
    & > #kind {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 45px;
        margin-bottom: 20px;
        & > div {
          & > div:nth-child(1) {
            width: 200px;
            height: 50px;
            font-size: 18px;
            background-size: 100% 100%;
          }
          & > div:nth-child(2) {
            margin-top: 20px;
            & > div:nth-child(1) {
              line-height: 1.8;
            }
            & > div:nth-child(2) {
              margin-top: 35px;
              flex-direction: column;
              padding: 0;
              & > div {
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-top: 0;
                margin-bottom: 50px;
                img{
                  width: 55%;
                }
                & > div:nth-child(2) {
                  width: 100px;
                  height: 35px;
                  border-radius: 40%;
                  margin: 0;
                  font-size: 16px;
                  line-height: 35px;
                }
              }
            }
          }
        }
        & > div:nth-child(2) {
          margin-top: 0;
        }
        & > div:nth-child(3) {
          margin-top: 30px;
          & > div:nth-child(1) {
            width: 250px;
            height: 50px;
            background-size: 100% 100%;
          }
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              & > div {
                & > div:nth-child(2) {
                  background: url('https://static.cmereye.com/imgs/2023/06/71124468b48b8228.png');
                  background-size: 100% 100%;
                  border-radius: 0;
                  width: 130px;
                  height: 40px;
                }
              }
            }
          }
        }
      }
      & > div:nth-child(4) {
        width: 100%;
        height: auto;
        padding: 30px 20px;
        background: url('https://static.cmereye.com/imgs/2023/07/40cf5540e35a2cde.jpg');
        background-size: 100% 100%;
        transform: scale(1);
        margin: 50px 0 0;
        font-size: 15px;
        line-height: 1.8;
      }
      & > div:nth-child(5) {
        margin-top: 30px;
        & > div:nth-child(1) {
          width: 250px;
          height: 50px;
          background-size: 100% 100%;
          font-size: 18px;
          line-height: 50px;
        }
        & > div:nth-child(2) {
          margin-top: 25px;
          line-height: 1.6;
        }
        & > div:nth-child(3) {
          padding: 0;
          margin-top: 40px;
          & > div {
            width: calc(50% - 30px);
            margin-bottom: 40px;
            &> div:nth-child(1) {
              img{
                border-radius: 50%;
                // box-shadow: -2px 2px 3px 3px #ccc;
              }
            }
            & > div:nth-child(2) {
              margin-top: 15px;
              p{
                display: inline;
              }
            }
          }
        }
      }
    }
    &> #cure{
      width: calc(100% - 60px);
      margin: 30px auto 0;
      & > div:nth-child(2) {
        margin-top: 35px;
        
        & > div {
          width: 100%;
          height: auto;
          border-radius: 20px;
          margin-bottom: 55px;
          padding-bottom: 0;
          & > div:nth-child(1) {
            border-radius: 15px 15px 0 0;
            height: 60px;
            font-size: 22px;
          }
          & > div:nth-child(2) {
            padding: 25px;
            & > div:nth-child(1) {
              width: 100%;
              height: auto;
              margin-bottom: 20px;
              min-height: 110px;
              background: #F2F3F4;
            }
            & > div:nth-child(2) {
              line-height: 1.8;
            }
          }
        }
      }
    }
    & > #amblyopia {
      width: calc(100% - 60px);
      margin: 10px auto 0;
      & > div:nth-child(2) {
        margin: 25px 0 0;
        flex-direction: column;
        & > div:nth-child(1) {
          width: 100%;
          margin-bottom: 25px;
          & > img {
            width: 100%;
          }
        }
        & > div:nth-child(2) {
          width: 100%;
          line-height: 1.8;
          margin-left: 0;
        }
      }
      & > div:nth-child(3) {
        margin-top: 30px;
        & > div:nth-child(2) {
          margin: 35px auto 0;
          & > div {
            border: none;
            padding: 75px 0 0;
            position: relative;
            margin-bottom: 60px;
            & > div:nth-child(1) {
              flex: 1;
              margin-left: 18px;
              img{
                width: 100%;
              }
            }
            & > div:nth-child(2) {
              flex: 1.2;
              & > div:nth-child(1) {
                width: 180px;
                height: auto;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
                background-size: 100% 100%;
                font-size: 18px;
                line-height: 45px;
                height: 45px;
              }
              & > div:nth-child(2) {
                line-height: 1.8;
              }
            }
          }
          & > div:nth-child(2),
          & > div:nth-child(3),
          & > div:nth-child(4) {
            & > div:nth-child(2) {
              & > div:nth-child(1) {
                width: 100%;
                height: 45px;
                line-height: 45px;
                background-size: 100% 100%;
              }
            }
          }
          & > div:nth-child(2),
          & > div:nth-child(4){
            & > div:nth-child(1) {
              margin-right: 18px;
              margin-left: 0;
            }
          }
        }
        
      }
    }
    & > #treat {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        background: url('https://static.cmereye.com/imgs/2023/07/24a18c74e1189515.jpg');
        background-size: 100% auto;
        background-repeat: no-repeat;
        width: 100%;
        padding: 46px 25px;
        line-height: 1.8;
        margin: 25px 0 0;
        height: auto;
        & > p {
          margin-bottom: 20px;
        }
      }
      & > div:nth-child(3) {
        & > div {
          & > div:nth-child(1) {
            align-items: center;
            padding-bottom: 0;
            width: 100%;
            img{
              width: 30px;
              min-width: 30px;
              height: 21px;
            }
            & > div:nth-child(2) {
              font-size: 18px;
            }
          }
          & > div:nth-child(1)::after {
            width: 62.5vw;
            left: auto;
            right: 0;
          }
          & > div:nth-child(2) {
            margin: 25px auto 55px;
            align-items: flex-start;
            & > div:nth-child(2) {
              width: 100%;
              margin-left: 20px;
              & > p {
                margin-bottom: 0;
                &:not(:first-child){
                  margin-top: 15px;
                }
              }
            }
          }
        }
      }
    }
  }
  #curativeTime {
    width: calc(100% - 60px);
    margin: 70px auto 0;
    background: url('https://static.cmereye.com/imgs/2023/07/a5064687f337bf13.jpg');
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: auto;
    padding-bottom: 50px;
    & > div:nth-child(1) {
      font-size: 18px;
      line-height: 1.6;
      padding-left: 0;
      padding-top: 10px;
    }
    & > div:nth-child(2) {
      margin-top: 40px;
      padding: 0 25px;
      line-height: 1.8;
    }
  }
  #bg_strabismusAmblyopia_nav {
    margin-top: 70px;
    width: 100%;
    background-size: 100% auto;
    background-repeat: no-repeat;
    height: auto;
    min-height: 35px;
  }
  .strabismusAmblyopia_title_btn{
    margin-top: 30px;
    width: max-content;
    height: 70px;
    font-size: 16px;
    line-height: 1.6;
    padding: 5px 40px 0;
  }
  .strabismusAmblyopia_title_text{
    font-size: 24px;
  }
  .strabismusAmblyopia_text_p_span{
    font-size: 14px;
    line-height: 1.8;
  }
  .dow {
    margin-top: 100px;
    margin-bottom: 150px;
    font-size: 16px;
    & > div:nth-child(1) {
      & > div {
        width: 80%;
        height: 90px;
        & > div:nth-child(1) {
          margin-left: 30%;
          margin-right: 30px;
          &>img{
            width: 55px;
            height: auto;
          }
        }
      }
    }
  }
}

</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {

  .strabismusAmblyopia_nav {
    margin-top: -20%;

    & > #cure {
      & > div:nth-child(2) {
        & > div {
          width: 575px;

          & > div:nth-child(2) {
            & > div:nth-child(1) {
              width: 480px;
            }

            & > div:nth-child(2) {
              line-height: 46px;
              font-size: 22px;
              text-align: justify;
            }
          }
        }
      }
    }

    & > #treat {
      & > div:nth-child(2) {
        background-size: 100%;
        transform: scale(0.85);
        margin-left: -5%;
      }
    }
  }

  #bg_strabismusAmblyopia_nav {
    margin-top: -25%;
  }

  .dow {
    margin-top: 150px;
    margin-bottom: 233px;
    color: #fff;
    font-size: 30px;

    & > div:nth-child(1) {
      & > div {
        & > div:nth-child(1) {
          margin-left: 32.2vw;
        }
      }
    }
  }
}
</style>
