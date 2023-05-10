<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '白内障｜醫療服務｜眼科專科醫生',
}))

const fatorArr = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/5b88e2c3d5a24717.png',
    text: '紫外線',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a83300c944834450.png',
    text: '吸煙習慣',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/77092ee46cf226d9.png',
    text: '深度近視 \n（600度或以上）',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/fc3c0ecda42d6dca.png',
    text: '糖尿病',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/8e4d13a54786cdcc.png',
    text: '使用某些藥物 \n如類固醇',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/027fbbc52748d448.png',
    text: '出生時就患有 \n 先天性白內障',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/6f9105c7d9aeefa2.png',
    text: '眼睛曾經 \n受過外傷',
  },
]
const symptomArr = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/03c86d6ac63e3454.png',
    text: '視力模糊、\n視力下降',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a4f207cfb55a0903.png',
    text: '眩光、重影、 \n日盲癥',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/e493e6f5a154cd97.png',
    text: '事物顏色 \n變得暗淡、變形',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/848679d9bcce652d.png',
    text: '夜間視力下降',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/c864d708858a3f2e.png',
    text: '須經常更換眼鏡 \n或隱形眼鏡度數',
  },
]

const surgeryArr = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/6657fc39bf0d020c.png',
    text: '採用局部點眼藥水式 \n麻醉法',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/55d34019e98d8e65.png',
    text: '利用微細超聲波儀器 \n切除混濁的晶體',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/7b14a5086daa3610.png',
    text: '置入人工晶體，並好好固定住 \n術後傷口一般毋須縫線',
  },
]
const iclArr = [
  {
    img: '',
    type: '晶體類型',
    monofocal: '單焦點\n人工晶體',
    astigmatism: '散光型\n人工晶體',
    multipleFocus: '多焦點\n人工晶體',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/47e6f09498b91509.png',
    type: '遠距離視力',
    monofocal: '很好',
    astigmatism: '與單焦點\n人工晶體一樣',
    multipleFocus: '良好',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/88fe9f4dae4a48d6.png',
    type: '中距離視力',
    monofocal: ' 很好',
    astigmatism: '與單焦點\n人工晶體一樣',
    multipleFocus: '良好',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/0fb789bc099b4c7e.png',
    type: '近距離視力',
    monofocal: '很好',
    astigmatism: '與單焦點\n人工晶體一樣',
    multipleFocus: '良好',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/5cc8f1f288c60d39.png',
    type: '優點',
    monofocal: ['良好視力質素', '（但無法同時對焦遠近距離視力）'],
    astigmatism: ['良好視力質素', '一併解決散光問題'],
    multipleFocus: ['良好遠，中，近視力', '大多可不依賴眼鏡'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/c08795d5179afc22.png',
    type: '適合人群',
    monofocal: [
      '· 不介意配戴眼鏡人士',
      '· 要求更好視力質素人士',
      '· 有經濟考慮人士',
    ],
    astigmatism: [
      '· 不介意配戴眼鏡人士',
      '· 要求更好視力質素人士',
      '· 術前患有散光人士',
    ],
    multipleFocus: [
      '· 不想配戴眼鏡人士',
      '· 不優先考慮夜間駕駛\n視力需要人士',
      '· 經濟能力較好人士',
      '· 無其他嚴重眼病人士',
    ],
  },
]
const announcementsArr = [
  {
    id: '01',
    text: '為盡快令傷口復原及避免細菌感染，術後蓋上紗布及眼罩需要保留一晚，直到第二天才拆開。如果不慎鬆開，再用消毒紗布重新蓋上。',
    img: 'https://static.cmereye.com/imgs/2023/05/28e797c56a574cce.png',
  },
  {
    id: '02',
    text: '一般建議病人術後於睡覺時蓋上保䕶眼罩兩星期，可以預防不必要的踫撞及捽眼睛。',
    img: 'https://static.cmereye.com/imgs/2023/05/37962e24ec481c1c.png',
  },
  {
    id: '03',
    text: '術後當天一般都不建議洗頭，注意沐浴時切勿沾濕紗布。一般建議頭一星期平臥或仰臥洗頭，避免污水流入眼內或於洗頭時戴上如泳鏡作保護。',
    img: 'https://static.cmereye.com/imgs/2023/05/63d616d8816fc14d.png',
  },
  {
    id: '04',
    text: '須保持傷口清潔，建議用化妝綿，凍開水，先洗下眼皮，再洗上眼皮，貼近眼睫毛嘅根部，由內至外一下過，一般每次滴眼水前清潔，每天四至六次。',
    img: 'https://static.cmereye.com/imgs/2023/05/d1539d09a4afe49a.png',
  },
  {
    id: '05',
    text: '禁止揉眼以免影響傷口癒合。應避免拿重物，90度彎身動作如綁鞋帶等。劇烈運動如跑步、跳水、有身體碰撞機會的運動等亦不適宜。',
    img: 'https://static.cmereye.com/imgs/2023/05/04c51b9d4cdf56e9.png',
  },
  {
    id: '06',
    text: '跟足指示，定時滴用由醫生處方的眼藥水，並保持均衡飲食。',
    img: 'https://static.cmereye.com/imgs/2023/05/56cd1f34a7c0da6e.png',
  },
  {
    id: '07',
    text: '術後如果眼睛無故出血、流膿、劇痛或視力突然模糊等，應盡快求醫，以免延誤治療',
    img: 'https://static.cmereye.com/imgs/2023/05/aa98a33175063fa3.png',
  },
]

const activeNames = ref('1')
const handleChange = (val: string) => {
  console.log(val)
}
const judgeActive = (data: any) => {
  return activeNames.value.indexOf(data)
}
const meetArr = [
  {
    title: 'Q：白內障成熟時才能接受治療？',
    agree: [
      '隨著白內障摘除及人工晶體植入技術不斷進步，現今的白內障治療可謂成效高﹑風險低。患者毋須待白內障成熟便可接受治療，而且，白內障愈熟，治療的難度也相應提高，出現併發症的風險也愈高。',
      '因此，當患者感到工作及日常生活受影響時，便應積極考慮接受治療。讀者之所以有這誤解，主要是由於在人工晶體被廣泛使用於白內障治療前，當病人的晶體被摘除後，便馬上變成深遠視患者，要配戴厚厚的遠視鏡，直接影響影像質素；如果只摘除一隻眼內的白內障，更會出現嚴重的「鴛鴦眼」，大多數人也不能適應。因此，從前的眼科醫生多建議病人待雙眼的白內障成熟才接受治療。',
    ],
  },
  {
    title: 'Q：人工晶體可以使用多久？需要更換嗎？',
    agree:
      '植入了的人工晶體，通常可終身使用，無需更換。在極少數情況下，出現人工晶體位置異常，或者無法適應所植入的多焦點人工晶體時（約2%個案會發生），可能需要考慮更換。',
  },
  {
    title: 'Q：接受白內障治療後，還需要戴眼鏡嗎？',
    agree:
      '因應各人用眼情況和眼睛條件，眼科醫生可為病人設計術後目標視力，因此有機會無需再戴眼鏡。因應不同人對視力質素的期望和生活需要，也可以隨心再配戴淺度數眼鏡，獲取更好的視力質素。',
  },
  {
    title: 'Q：治療過程會痛嗎？',
    agree:
      '白內障治療會在局部麻醉下進行。雖然患者治療過程清醒，但大多數患者並不感到疼痛。',
  },
  {
    title: 'Q：白內障治療需要在醫院進行嗎？',
    agree: [
      '此項微創治療不需全身麻醉，只用麻醉眼藥水，也不需留院觀察。本診所設有多間符合國際標準的無菌手術室、先進的檢測和矯視儀器，安全、可靠。',
      '然而，部分病人或需全身麻醉，則需要在醫院接受治療，詳情可向你的眼科專科醫生查詢。',
    ],
  },
  {
    title: 'Q：接受治療後什麼時候可以進行日常活動 / 運動？',
    agree: [
      '第一天覆診後如無異常，病人可進行一般運動（如：打太極、行山、散步等），但接觸性運動（如：拳擊等）則暫時不建議進行。可參考以下例子：',
      '散步：術後24小時',
      '坐飛機：術後24小時',
      '游水：為預防感染，建議術後1周進行',
      '其他面部或牙科治療：建議最少術後1周進行，安全起見可以1月後進行',
    ],
  },
]
</script>

<template>
  <div>
    <div class="cataract">
      <!-- 白內障 -->
      <div>
        <div>
          <div>白内障</div>
          <div>CATARACT</div>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/0d9057551d0ce216.png"
          />
          <img
            src="https://static.cmereye.com/imgs/2023/05/e5ca6db9212362ab.png"
          />
        </div>
      </div>
      <!-- 白內障影響日常生活？ -->
      <div>
        <div>
          <div>
            <div>白內障影響日常生活？</div>
            <div>即按為你解決煩惱</div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/54ae049d3ec05868.png"
                alt="白內障"
              />
            </div>
          </div>
        </div>
        <div>
          <p>
            白內障是香港常見眼疾之一，初期幾乎沒有症狀，病情發展到中期常被誤以為只是眼睛老化現象。當發展到嚴重階段，患者看東西時會模糊不清，嚴重者甚至會完全失去視力。故此，及早發現，相當重要。
          </p>
          <p>
            患有白內障，視力變模糊，看事物時會有疊層、殘影的感覺。病患影響你的視野，更使你的生活變得十分不便？
          </p>
        </div>
        <div>別再遲疑！立即查詢白內障治療方案</div>
      </div>
      <!-- 白內障形成的成因 -->
      <div>
        <div>
          <div>
            <div>為什麼會患上白內障？</div>
          </div>
          <div>
            香港有九成患者都是因為年紀大﹑眼內晶體退化的原因而患上白內障。但其實小朋友或年輕人都有機會患上白內障，而近年白內障更有年輕化趨勢。
          </div>
        </div>
        <div>
          <div>白內障形成的成因</div>
          <div>
            <div>
              <div v-for="(item, index) in fatorArr.slice(0, 3)" :key="index">
                <img :src="item.img" :alt="item.text" />
                <div>{{ item.text }}</div>
              </div>
            </div>
            <div>
              <div v-for="(item, index) in fatorArr.slice(3, 7)" :key="index">
                <img :src="item.img" :alt="item.text" />
                <div>{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 白內障會引起哪些症狀？ -->
      <div>
        <div>
          <div>
            <div>白內障會引起哪些症狀？</div>
          </div>
          <div>
            視力模糊是白內障的主要症狀，隨病情惡化，可能有更多症狀困擾你。
          </div>
        </div>
        <div>
          <div>簡單自測︰你是否患上白內障？</div>
          <div>
            <div>5大常見症狀︰</div>
            <div>
              <div v-for="(item, index) in symptomArr" :key="index">
                <img :src="item.img" :alt="item.text" />
                <div>{{ item.text }}</div>
              </div>
            </div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="37px"
                  height="35px"
                >
                  <path
                    fill-rule="evenodd"
                    fill="rgb(101, 196, 218)"
                    d="M7.117,34.346 L32.201,15.478 L36.862,25.544 L7.117,34.346 ZM14.018,0.341 L27.049,4.716 L0.848,34.890 L14.018,0.341 Z"
                  />
                </svg>
              </div>
              <div>
                如果你有一項或以上的症狀，請不用感到焦慮，可聯絡我們約見眼科專科醫生，以盡快獲得正確的診斷和適合你的治療方案。
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="34px"
                  height="37px"
                >
                  <path
                    fill-rule="evenodd"
                    fill="rgb(101, 196, 218)"
                    d="M0.413,17.247 L33.150,0.061 L6.306,29.665 L0.413,17.247 ZM28.153,36.931 L17.604,33.501 L33.356,6.351 L28.153,36.931 Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>已有症狀？立即預約檢查</div>
        </div>
      </div>
      <!-- 白內障治療，手術 -->
      <div>
        <div>
          <div>
            <div>白內障治療，手術最快20分鐘，快速恢復正常視力！</div>
          </div>
        </div>
        <div>
          <div>
            到目前為止，並沒有藥物可以使混濁的晶體（白內障）恢復透明。手術是治療白內障的唯一方法。
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/e018dee96aa2c911.png"
                alt=""
              /><img
                src="https://static.cmereye.com/imgs/2023/05/3f1897286d36f0c5.png"
                alt=""
              />
            </div>
          </div>
          <div>
            當下主流的白內障手術方式為超聲乳化白內障切除術聯合人工晶狀體植入術。只需要經過一個直徑不到3毫米的切口，用超聲波將混濁的晶體乳化成微細碎片，然後吸出，最後置入一個人工晶狀體，整個過程只需10~20分鐘。術後傷口一般毋須縫線。大部分手術只需要使用表面麻醉，不必打針便可完成手術。
          </div>
        </div>
        <div>
          <div>現代白內障手術更精準！</div>
          <div>
            最新一代的微創超聲波乳化手術，可以提高治療的精準度。只需使用較低超聲波能量，將混濁晶體乳化分解並吸走，傷口小、恢復時間快、手術時間短，大大減低手術對角膜造成的傷害、傷口感染或併發症。
          </div>
          <div>
            <div v-for="(item, index) in surgeryArr" :key="index">
              <img :src="item.img" :alt="item.text" srcset="" />
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div>
          <div>激光輔助白內障治療的優點︰</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="847px"
              height="100px"
            >
              <defs>
                <linearGradient id="PSgrad_0" x1="0%" x2="0%" y1="100%" y2="0%">
                  <stop
                    offset="0%"
                    stop-color="rgb(44,79,147)"
                    stop-opacity="1"
                  />
                  <stop
                    offset="100%"
                    stop-color="rgb(255,255,255)"
                    stop-opacity="1"
                  />
                </linearGradient>
              </defs>
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M422.000,84.749 C424.468,84.749 426.469,86.756 426.469,89.234 C426.469,91.710 424.468,93.718 422.000,93.718 C419.532,93.718 417.531,91.710 417.531,89.234 C417.531,86.756 419.532,84.749 422.000,84.749 Z"
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M422.000,0.874 C424.468,0.874 426.469,2.875 426.469,5.342 C426.469,7.811 424.468,9.812 422.000,9.812 C419.532,9.812 417.531,7.811 417.531,5.342 C417.531,2.875 419.532,0.874 422.000,0.874 Z"
              />
              <path
                fill-rule="evenodd"
                stroke="rgb(102, 197, 220)"
                stroke-width="2px"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                d="M423.118,7.578 L423.118,88.111 "
              />
              <path
                fill-rule="evenodd"
                stroke="rgb(102, 197, 220)"
                stroke-width="2px"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                fill="none"
                d="M501.413,59.030 L820.184,59.030 C832.538,59.030 842.553,69.044 842.553,81.398 L842.553,95.939 "
              />
              <image
                x="473px"
                y="8px"
                width="30px"
                height="53px"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA1CAMAAABhhatlAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA21BMVEVmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdz////wSmGtAAAAR3RSTlMAGzMYh3iFemOjQckT/fYH0ECKkjHqBtNhW9sFBNl2R/MnzwoO2rEDLfA99LY77dw2JPuREIzvHi65wQmk4cy+u1iZ1fkiRGqOvdsAAAABYktHREjwAtTqAAAAB3RJTUUH5wUJCjEd2rGv3QAAAKlJREFUOMvt0McOggAQBFBFUEHB3hEVsTfE3rvz/3+kCYkXZa5emOub3Ww2EBRCARIRks8++/w/DiPCWILIOAqZsYIY47iqJZgnkWKcRoZxFrk88wKKjEsoVwjrVRhsvIZ6g7kMs0nYaqHdId7tQWbn9QcYWsRHY0xs4lMTzmzu7YmFg2V45V1YbwB1a9g7r4K91/CuHI6ns5uvF1yutzs++bVDfwjK080LaLMgvUNGYT8AAAAASUVORK5CYII="
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M841.437,89.218 C843.905,89.218 845.906,91.226 845.906,93.702 C845.906,96.179 843.905,98.187 841.437,98.187 C838.969,98.187 836.969,96.179 836.969,93.702 C836.969,91.226 838.969,89.218 841.437,89.218 Z"
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M474.562,0.874 C477.031,0.874 479.031,2.875 479.031,5.342 C479.031,7.811 477.031,9.812 474.562,9.812 C472.094,9.812 470.094,7.811 470.094,5.342 C470.094,2.875 472.094,0.874 474.562,0.874 Z"
              />
              <path
                fill-rule="evenodd"
                stroke="rgb(102, 197, 220)"
                stroke-width="2px"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                fill="none"
                d="M344.493,59.030 L25.723,59.030 C13.368,59.030 3.353,69.044 3.353,81.398 L3.353,95.939 "
              />
              <image
                x="343px"
                y="8px"
                width="30px"
                height="53px"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAA1CAMAAABhhatlAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA21BMVEVmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdxmxdz////wSmGtAAAAR3RSTlMAGDMbeId6haNjyUEH9v0TQNCSigbqMWHTBdtbdtkEJ/NHCs8DsdoO8C229D023O07EJH7JB7vjAnBuS67vszhpPnVmVhEIk9eauwAAAABYktHREjwAtTqAAAAB3RJTUUH5wUJCjEd2rGv3QAAAK5JREFUOMvt0NcOggAMBVBEUFTAvXGi4sKFe+/7/3+kiYnRSPvqC/exJ23aCgIdn+hnVJAge+yxx//jAIIcy5A4VhDiOIwIo6qmRxmOIc7NTiDJaCqNDMNZ5BjNF1Bk2ECpTGulihqtdRMKrY0mWha9loJ2h1Sri16fVHuA4YjC8cSBOSVwFpzDWahutLSNlQ6sN5/F7Su7/eFJ0I72dw/eOZ0v159jb69ExLvbix9DiSCdm1IkDAAAAABJRU5ErkJggg=="
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M4.469,89.218 C2.001,89.218 0.000,91.226 0.000,93.702 C0.000,96.179 2.001,98.187 4.469,98.187 C6.937,98.187 8.938,96.179 8.938,93.702 C8.938,91.226 6.937,89.218 4.469,89.218 Z"
              />
              <path
                fill-rule="evenodd"
                fill="rgb(102, 197, 220)"
                d="M371.344,0.874 C368.876,0.874 366.875,2.875 366.875,5.342 C366.875,7.811 368.876,9.812 371.344,9.812 C373.812,9.812 375.813,7.811 375.813,5.342 C375.813,2.875 373.812,0.874 371.344,0.874 Z"
              />
            </svg>
          </div>
          <div>
            <div>激光精準度高</div>
            <div>人工晶體位置更準確</div>
            <div>可使用較低的超聲波 <br />能量處理白內障</div>
          </div>
        </div>
        <div>立即預約見醫生了解手術！</div>
      </div>
      <!-- 選擇人工晶體須知 -->
      <div>
        <div>
          <div>
            <div>選擇人工晶體須知</div>
          </div>
        </div>
        <div>
          <div>
            經過術前詳細檢查及規劃，可制訂個人化人工晶體置換方案。根據患者實際情況、對用眼的要求以及經濟狀況等因素來考慮。
            人工晶體根據其功能可分以下幾種︰
          </div>
          <div>
            <div v-for="(item, index) in iclArr" :key="index">
              <div>
                <img v-if="item.img" :src="item.img" alt="" srcset="" />
                {{ item.type }}
              </div>
              <div>
                <div v-if="Array.isArray(item.monofocal)">
                  <div v-for="(ele, index) in item.monofocal" :key="index">
                    <img
                      src="https://static.cmereye.com/imgs/2023/05/5be0ff77c88a5626.png"
                    />{{ ele }}
                  </div>
                </div>
                <div v-else>{{ item.monofocal }}</div>
              </div>
              <div>
                <div v-if="Array.isArray(item.astigmatism)">
                  <div v-for="(ele, index) in item.astigmatism" :key="index">
                    <img
                      src="https://static.cmereye.com/imgs/2023/05/5be0ff77c88a5626.png"
                    />{{ ele }}
                  </div>
                </div>
                <div v-else>{{ item.astigmatism }}</div>
              </div>
              <div>
                <div v-if="Array.isArray(item.multipleFocus)">
                  <div v-for="(ele, index) in item.multipleFocus" :key="index">
                    {{ ele }}
                  </div>
                </div>
                <div v-else>{{ item.multipleFocus }}</div>
              </div>
            </div>
          </div>
          <div>*此表格內預設單焦點人工晶體為看遠。</div>
        </div>
        <div>哪一款人工晶體適合你？</div>
      </div>
      <!-- 白內障的術後注意事項 -->
      <div>
        <div>
          <div>
            <div>白內障的術後注意事項</div>
          </div>
        </div>
        <div>
          <div v-for="item in announcementsArr" :key="item.id">
            <div>
              <div>{{ item.id }}</div>
              <img :src="item.img" :alt="item.text" />
            </div>
            <div class="announ">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <!-- 你認識白內障手術嗎？ -->
      <div>
        <div>
          <div>
            <div>你認識白內障手術嗎？</div>
          </div>
        </div>
        <div>
          <el-collapse v-model="activeNames" accordion>
            <el-collapse-item
              v-for="(item, index) in meetArr"
              :key="index"
              :name="`${index + 1}`"
            >
              <template #title>
                {{ item.title }}
                <i
                  :class="
                    judgeActive(`${index + 1}`) !== -1
                      ? 'downArrow2'
                      : 'downArrow1'
                  "
                ></i>
              </template>
              <div v-if="Array.isArray(item.agree)">
                <div>{{ item.agree[0] ? 'A：' : '' }}</div>
                <div>
                  <div v-for="(ele, i) in item.agree" :key="i">
                    {{ ele }}
                  </div>
                </div>
              </div>
              <div v-else><span>A：</span> {{ item.agree }}</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
    <!-- 下载 -->
    <div class="dow">
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <p>如何選擇合適的人工晶體？</p>
          <p>下載小冊子</p>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
            alt=""
            srcset=""
          />
        </div>
        <div>
          <p>白內障</p>
          <p>下載小冊子</p>
        </div>
      </div>
    </div>
    <!-- 公共底部表单 -->
    <FormFooterInfo />
  </div>
</template>
<style lang="scss" scoped>
.cataract {
  margin: auto 300px;
  position: relative;

  & > div:nth-child(1) {
    position: absolute;
    top: 202px;
    right: -300px;
    width: 541px;
    height: 288px;
    background-color: #f2f2f2;

    & > div {
      position: absolute;
      top: -110px;
      right: 300px;
      text-align: right;
    }

    & > div:first-child {
      font-family: 'NotoSansCJKtc-Bold';
      font-size: 107px;
      font-weight: bold;
      line-height: 1;
      font-stretch: normal;
      letter-spacing: 12px;
      color: #63bacc;

      & > div:nth-child(2) {
        font-family: 'DINCondensed';
        display: block;
        font-size: 140px;
        letter-spacing: 2px;
      }
    }

    & > div:nth-child(2) {
      left: -192px;
      right: 0;
      top: 120px;
    }
  }

  & > div:nth-child(2) {
    padding-top: 689px;

    & > div:nth-child(1) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 78px;
      position: relative;

      & > div:nth-child(1) {
        margin-top: 191px;
      }

      & > div {
        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Medium';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
        }

        & > div:nth-child(2) {
          cursor: pointer;
          margin-top: 77px;
          margin-left: 8px;
          width: 375px;
          height: 85px;
          font-family: 'NotoSansHK-Bold';
          font-size: 36px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 2.2;
          letter-spacing: 0px;
          color: #ffffff;
          background-image: linear-gradient(90deg, #a0e3f2 0%, #65c4da 100%),
            linear-gradient(90deg, #accbee 0%, #e7f0fd 100%);
          background-blend-mode: normal, normal;
          border-radius: 85px;
          text-align: center;
        }
      }

      & > div:nth-child(2) {
        position: relative;

        & > div > {
          img {
            position: relative;
            z-index: 3;
          }
        }

        & > div::after {
          content: '';
          background-color: #f2f2f2;
          position: absolute;
          width: 653px;
          height: 472px;
          bottom: -30px;
          left: -30px;
          z-index: 1;
          border-radius: 20px;
        }
      }
    }

    & > div:nth-child(2) {
      margin-top: 122px;
      padding-left: 3px;
      font-family: 'NotoSansHK-Regular';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 35px;
      letter-spacing: 0px;
      color: #515151;

      & > p {
        margin-bottom: 41px;
      }
    }

    & > div:nth-child(3) {
      cursor: pointer;
      display: flex;
      justify-content: center;
      margin: auto;
      margin-top: 103px;
      width: 695px;
      height: 85px;
      background-image: linear-gradient(90deg, #a0e3f2 0%, #65c4da 100%),
        linear-gradient(90deg, #edd32c 0%, #fe7c76 100%);
      background-blend-mode: normal, normal;
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 2.2;
      letter-spacing: 0px;
      color: #ffffff;
      border-radius: 85px;
    }
  }

  & > div:nth-child(3) {
    & > div:nth-child(1) {
      position: relative;

      & > div:nth-child(1) {
        width: 260px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;

        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;

          position: absolute;
          top: 27px;
          width: 450px;
          background: #fff;
          left: -65px;
        }
      }

      & > div:nth-child(2) {
        margin-top: 78px;
        width: 1320px;
        height: 133px;
        border: solid 2px #66c5dc;

        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #515151;
        border-radius: 133px 0 133px 0;

        padding-top: 31px;
        padding-left: 93px;
      }
    }

    & > div:nth-child(2) {
      margin-top: 94px;

      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 30px;
        font-weight: bold;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #ffffff;

        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 312px;
        height: 66px;
        background-image: linear-gradient(#5ab7d5, #5ab7d5),
          linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
        background-blend-mode: normal, normal;
        box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.35);
        border-radius: 20px;
      }

      & > div:nth-child(2) {
        margin-top: 97px;
        display: flex;
        flex-wrap: wrap;

        & > div {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          justify-content: space-evenly;

          & > div {
            & > img {
              box-shadow: 8px 8px 8px 2px #d8f1f7;
              border-radius: 50%;
              margin-bottom: 37px;
            }

            & > div {
              white-space: pre-wrap !important;
              text-align: center;
              height: 54px;

              font-family: 'NotoSansHK-Medium';
              font-size: 24px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 35px;
              letter-spacing: 0px;
              color: #515151;
            }
          }
        }

        & > div:nth-child(2) {
          justify-content: space-between;
        }
      }
    }
  }

  & > div:nth-child(4) {
    margin-top: 200px;

    & > div:nth-child(1) {
      position: relative;

      & > div:nth-child(1) {
        width: 260px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;

        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;

          position: absolute;
          top: 27px;
          width: 462px;
          left: -66px;
        }
      }

      & > div:nth-child(2) {
        margin-top: 81px;
        padding-left: 4px;
        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #515151;
      }
    }

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        margin: auto;
        text-align: center;
        margin-top: 75px;

        font-family: 'NotoSansHK-Medium';
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 2.2;
        letter-spacing: 0px;
        color: #fff;

        width: 501px;
        height: 75px;
        background-image: linear-gradient(#5ab7d5, #5ab7d5),
          linear-gradient(#f6fbfe, #f6fbfe);
        background-blend-mode: normal, normal;
        box-shadow: 2px 3px 7px 0px rgba(0, 0, 0, 0.35);
        border-radius: 20px;
      }

      & > div:nth-child(2) {
        margin-top: 52px;

        & > div:nth-child(1) {
          padding-left: 3px;
          font-family: 'NotoSansHK-Bold';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 35px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(2) {
          display: flex;
          justify-content: space-between;
          padding: 0 10px;

          & > div {
            & > div {
              margin-top: 31px;

              white-space: pre-wrap !important;
              height: 51px;
              display: flex;
              align-items: center;
              justify-content: center;

              font-family: 'NotoSansHK-Medium';
              font-size: 22px;
              letter-spacing: 0px;
              color: #515151;
            }
          }
        }

        & > div:nth-child(3) {
          position: relative;
          margin-top: 102px;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 35px;
          letter-spacing: 0px;
          color: #515151;

          border: solid 2px #65c4da;
          border-radius: 143px;
          box-sizing: border-box;
          padding: 27px 80px;

          & > div:first-child {
            position: absolute;
            background: #fff;
            padding: 20px;
            right: 70px;
            top: -50px;
          }

          & > div:last-child {
            position: absolute;
            background: #fff;
            padding: 20px;
            bottom: -50px;
            left: 70px;
          }
        }
      }

      & > div:nth-child(3) {
        cursor: pointer;
        margin: auto;
        margin-top: 103px;
        width: 556px;
        height: 86px;
        background-image: linear-gradient(90deg, #a0e3f2 0%, #65c4da 100%),
          linear-gradient(90deg, #edd22d 0%, #fe7d76 100%);
        background-blend-mode: normal, normal;

        font-family: 'NotoSansHK-Bold';
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 2.2;
        letter-spacing: 0px;
        color: #ffffff;
        border-radius: 86px;
        text-align: center;
      }
    }
  }

  & > div:nth-child(5) {
    & > div:nth-child(1) {
      position: relative;

      & > div:nth-child(1) {
        width: 829px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;

        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;

          position: absolute;
          top: 27px;
          width: 980px;
          left: -66px;
        }
      }
    }

    & > div:nth-child(2) {
      margin-top: 81px;

      & > div:nth-child(1) {
        padding-left: 7px;
        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(2) {
        margin-top: 77px;
        margin-bottom: 171px;
        padding-left: 4px;

        & > div {
          display: flex;

          & > img:nth-child(1) {
            width: 847px;
            z-index: 5;
          }

          & > img:nth-child(2) {
            width: 565px;
            position: relative;
            z-index: 2;
            bottom: -80px;
            left: -115px;
          }
        }
      }

      & > div:nth-child(3) {
        border-radius: 20px;
        border: solid 2px #66c5dc;
        padding: 51px 61px;

        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #515151;
      }
    }

    & > div:nth-child(3) {
      margin-top: 123px;

      & > div:nth-child(1) {
        background: linear-gradient(to right, #51d6d8, #2296bb);
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          from(#51d6d8),
          to(#2296bb)
        );
        background: -moz-linear-gradient(to right, #51d6d8, #2296bb);
        background: -ms-linear-gradient(to right, #51d6d8, #2296bb);
        background: -o-linear-gradient(to right, #51d6d8, #2296bb);
        background-clip: text;
        color: transparent;

        font-family: 'NotoSansHK-Bold';
        font-size: 38px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        text-align: center;
        line-height: 1;
      }

      & > div:nth-child(2) {
        margin-top: 68px;
        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 35px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(3) {
        margin: 48px 30px;
        display: flex;
        justify-content: space-between;

        & > div > div {
          margin-top: 37px;
          white-space: pre-wrap !important;
          text-align: center;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 32px;
          letter-spacing: 0px;
          color: #515151;
        }
      }
    }

    & > div:nth-child(4) {
      & > div:nth-child(1) {
        width: 557px;
        height: 98px;
        margin: auto;
        border-radius: 43px;
        border: solid 2px #66c5dc;

        font-family: 'NotoSansHK-Medium';
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #66c5dc;
        line-height: 2.5;
        text-align: center;
      }

      & > div:nth-child(2) {
        margin: 10px auto 7px auto;
        display: flex;
        justify-content: center;
      }

      & > div:nth-child(3) {
        display: flex;
        margin: auto 57px;
        justify-content: space-between;

        & > div {
          width: 369px;
          height: 175px;
          border-radius: 17px;
          border: solid 2px #66c5dc;

          display: flex;
          align-items: center;
          justify-content: center;

          font-family: 'NotoSansHK-Medium';
          font-size: 34px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #66c5dc;
        }
      }
    }

    & > div:nth-child(5) {
      font-family: 'NotoSansHK-Bold';
      margin: auto;
      margin-top: 126px;
      font-size: 36px;
      text-align: center;
      border-radius: 86px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 2.2;
      letter-spacing: 0px;
      color: #f8fcff;

      width: 556px;
      height: 86px;
      background-image: linear-gradient(90deg, #a0e3f2 0%, #65c4da 100%),
        linear-gradient(90deg, #edd22d 0%, #fe7d76 100%);
      background-blend-mode: normal, normal;
    }
  }

  & > div:nth-child(6) {
    & > div:nth-child(1) {
      position: relative;

      & > div:nth-child(1) {
        width: 204px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;

        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;

          position: absolute;
          top: 27px;
          width: 350px;
          left: -66px;
        }
      }
    }

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        padding-left: 2px;
        padding-right: 6px;
        margin: 61px auto;
        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 42px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(2) {
        border: #21a1c1 solid 2px;
        border-radius: 20px;
        overflow: hidden;

        font-family: 'NotoSansHK-Medium';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 31px;
        letter-spacing: 0px;
        color: #515151;

        & > div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 142px;
          background: #f6fbfe;
          border-bottom: 2px solid #21a1c1;
          white-space: pre-wrap !important;
          text-align: center;

          & > div {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 2px solid #21a1c1;
          }

          & > div:last-child {
            border-right: none;
          }
        }

        & > div:nth-child(1) {
          background: #64bcd1;

          font-family: 'NotoSansHK-Bold';
          font-size: 28px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 42px;
          letter-spacing: 0px;
          color: #ffffff;
          text-align: center;
        }

        & > div:nth-child(5) {
          & > div:nth-child(2) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: center;

              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;
              }

              & > div:nth-child(2) {
                font-family: 'NotoSansHK-Regular';
                font-size: 18px;

                & > img {
                  display: none;
                }
              }
            }
          }

          & > div:nth-child(3) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;

                & > img {
                  margin-right: 5px;
                }
              }

              & > div:nth-child(2) {
                margin-top: 20px;
              }
            }
          }

          & > div:nth-child(4) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;

                & > img {
                  margin-right: 5px;
                }
              }

              & > div:nth-child(2) {
                margin-top: 20px;
              }
            }
          }
        }

        & > div:nth-child(6) {
          height: 275px;
          font-family: 'NotoSansHK-Medium';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.8;
          letter-spacing: 0px;
          color: #515151;

          & > div:nth-child(2) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

              & > div {
                & > img {
                  display: none;
                }
              }
            }
          }

          & > div:nth-child(3) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

              & > div {
                & > img {
                  display: none;
                }
              }
            }
          }

          & > div:nth-child(4) {
            & > div {
              display: flex;
              flex-direction: column;
              align-items: flex-start;

              & > div {
                display: flex;
                flex-direction: row;
                align-items: center;

                & > img {
                  margin-right: 5px;
                }
              }
            }
          }
        }

        & > div:last-child {
          border-bottom: none;
        }
      }

      & > div > div > div:nth-child(1) {
        width: 245px;
        margin-left: 44px;
        flex: none;
        display: flex;
        justify-content: flex-start;

        & > img {
          margin-right: 10px;
        }
      }

      & > div:nth-child(3) {
        margin-top: 45px;

        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 32px;
        letter-spacing: 0px;
        color: #515151;
      }
    }

    & > div:nth-child(3) {
      width: 556px;
      height: 86px;
      background-image: linear-gradient(90deg, #a0e3f2 0%, #65c4da 100%),
        linear-gradient(90deg, #edd12e 0%, #fe7e76 100%);
      background-blend-mode: normal, normal;
      margin: auto;

      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 52px;
      letter-spacing: 0px;
      color: #f8fcff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 85px;
      margin-top: 105px;
      cursor: pointer;
    }
  }

  & > div:nth-child(7) {
    & > div:nth-child(1) {
      position: relative;

      & > div:nth-child(1) {
        width: 306px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;

        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;

          position: absolute;
          top: 27px;
          width: 420px;
          left: -66px;
        }
      }
    }

    & > div:nth-child(2) {
      margin-top: 90px;

      & > div {
        display: flex;
        align-items: center;
        margin: 60px;
      }

      & > div:nth-child(2n) {
        flex-direction: row-reverse;

        & > div:nth-child(2) {
          margin-right: 40px;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 41px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div > div:nth-child(1) {
          position: absolute;
          top: -27px;
          right: -43px;
        }
      }

      & > div:nth-child(2n + 1) {
        & > div:nth-child(2) {
          margin-left: 40px;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 41px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div > div:nth-child(1) {
          position: absolute;
          top: -27px;
          left: -40px;
        }
      }

      & > div > div:nth-child(1) {
        position: relative;

        & > div:nth-child(1) {
          font-family: 'AcuminConcept-SemiboldItalic';
          font-size: 120px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 41px;
          letter-spacing: 0px;
          color: yellowgreen;
        }
      }
    }
  }

  & > div:nth-child(8) {
    & > div:nth-child(1) {
      position: relative;

      & > div:nth-child(1) {
        width: 306px;
        height: 108px;
        border-radius: 20px;
        border: solid 2px #66c5dc;
        margin: auto;
        position: relative;

        & > div {
          font-family: 'NotoSansHK-Bold';
          font-size: 42px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #1b80a0;
          background: #fff;

          position: absolute;
          top: 27px;
          width: 430px;
          left: -62px;
        }
      }
    }

    & > div:nth-child(2) {
      margin-top: 100px;
    }
  }

  // :deep 穿透element的样式
  :deep(.el-collapse) {
    border-top: 2px solid #66c5dc;
  }

  :deep(.el-collapse-item__header) {
    justify-content: space-between;
    border-bottom: 2px solid #66c5dc;
    height: 150px;
    font-family: 'NotoSansHK-Medium';
    font-size: 28px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 41px;
    letter-spacing: 0px;
    color: #66c5dc;
  }

  :deep(.el-collapse-item__wrap) {
    border-bottom: 2px solid #66c5dc;
  }

  :deep(.el-collapse-item__header.is-active) {
    border-bottom-color: transparent;
  }

  :deep(.el-collapse-item__content) {
    font-family: 'NotoSansHK-Regular';
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 38px;
    letter-spacing: 0px;
    color: #515151;

    & > div:nth-child(1) {
      display: flex;

      & > div:nth-child(1) {
        color: #66c5dc;
      }

      & > div:nth-child(2) {
        & > div:nth-child(1) {
          margin-bottom: 35px;
        }
      }
    }

    & > div {
      & > span {
        color: #66c5dc;
      }
    }
  }

  // 多余的边框距离 ~~接受治療後什麼時候可以進行日常活動 / 運動？
  :deep(.el-collapse-item):nth-child(6) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          & > div:nth-child(2) {
            & > div:nth-child(1) {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }

  :deep(.el-collapse-item__arrow) {
    display: none;
  }

  .downArrow1 {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-image: url(../../assets/images/+.png);
    background-repeat: round;
  }

  .downArrow2 {
    display: inline-block;
    width: 25px;
    height: 25px;
    background-image: url(../../assets/images/-.png);
    background-repeat: round;
  }

  // 公共使用
  & > div {
    margin-top: 200px;
  }

  & > div:first-child {
    margin: 0;
  }

  & > div:nth-child(2) {
    margin: 0;
  }
}

.dow {
  margin-top: 150px;
  margin-bottom: 150px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    width: 62.93%;
    height: 202px;
    background: #64bcd1;
    position: relative;
    display: flex;
    align-items: center;

    & > div:nth-child(1) {
      margin-left: 520px;
      margin-right: 75px;

      & > img {
        width: 120px;
        height: 135px;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  & > div:nth-child(2) {
    margin-top: 88px;
    width: 58.2%;
    height: 202px;
    background: #64bcd1;
    position: relative;
    display: flex;
    align-items: center;

    & > div:nth-child(1) {
      margin-left: 355px;
      margin-right: 175px;

      & > img {
        width: 120px;
        height: 135px;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
