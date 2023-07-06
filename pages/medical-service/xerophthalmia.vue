<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
// compiler macro
definePageMeta({
  layout: 'page',
})

// 传递背景色
const backgd = [
  '#b6b3e0;',
  '-webkit-linear-gradient(to right, #b6b3e0, #cfcee6);',
  'linear-gradient(to right, #b6b3e0, #cfcee6);',
]
// 什麼是乾眼症
const xerophthalmiaType = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/e9b7f8f01ed8bafc.png',
    text: '眼睛乾澀',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2429bd6a29fb645c.png',
    text: '容易疲倦\n眼皮緊繃',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/f79ac0c36913185d.png',
    text: '眼癢、\n有異物感',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/c0fd1f575a8b07cc.png',
    text: '眼痛、\n有灼熱感',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4623f3b40418874b.png',
    text: '眼睛分泌物、\n黏稠',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4b9fe2d23526754a.png',
    text: '眼睛會出現\n紅腫、充血',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a7e034924424d921.png',
    text: '怕風、畏光、\n對外在刺激很敏感',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/6271382192cc8a11.png',
    text: '嚴重者會角膜破皮\n視力模糊',
  },
]
const factor = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a3f259e078ea72a5.png',
    title: '脂質層',
    text: '由眼瞼的皮脂腺所分泌，在最外層，主要功用是增加淚膜表面張力，延緩水液層的蒸發，使眼瞼及眼球表面濕潤。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4636b55143dcbe36.png',
    title: '水液層',
    text: '由淚腺所分泌，在中間層，使眼睛的表面濕潤、提供角膜氧氣、有殺菌及清除代謝物的作用。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/b2645285665a9dfe.png',
    title: '黏液層',
    text: '由結膜的杯狀細胞所產生，在最內層，使水液層能均勻分佈在結膜表面，減少貶眼時產生的摩擦。',
  },
]
const tearFilm = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4b8a7f27d3efb04c.png',
    title: '脂質層分泌不足',
    text: ['由於眼瞼疾病造成眼瞼皮脂腺功能不良'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/cb6ed9e181f060df.png',
    title: '水液層淚腺所分泌的淚液不足',
    text: [
      '年齡增長，淚腺功能下降',
      '先天性無淚腺',
      '自體免疫疾病',
      '長時間配戴隱形眼鏡',
      '長期使用某些眼藥水或藥物',
      '荷爾蒙影響(如︰更年期婦女)',
      '某些全身性疾病(如：乾燥綜合症)',
    ],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/f0c095b2a5ff1d8e.png',
    title: '黏液層分泌不足',
    text: ['缺乏維他命Ａ、慢性結膜炎等'],
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2f4d44f6b2c6d83d.png',
    title: '淚液過度蒸發或淚膜分佈不均',
    text: [
      '眼瞼疾病造成眼瞼閉合不良',
      '長期處於乾燥的環境',
      '眨眼次數減少（長時間注視電子螢幕而減少眨眼次數）',
    ],
  },
]
const category = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a9e66bca4e6780d0.png',
    title: '缺水型',
    text: '若淚腺受到破壞、功能退化或異常，淚水分泌會減少。當人年紀增長以致淚腺退化；或女士進入更年期後荷爾蒙改變；或有自體免疫性疾病；這些情況都可能引致淚水分泌不足，造成「缺水型」乾眼症。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/6b86edd7b9d813ec.png',
    title: '缺油型',
    text: '瞼板腺的開口在上下睫毛根部附近，主要的功能為分泌脂質層，健康的脂質層可減緩淚膜水液層的揮發。當淚液缺少脂質層，水分會快速蒸發，造成「瞼板腺功能障礙」。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/bde93bbfe96c35e9.png',
    title: '混合型﹙缺水及缺油﹚',
    text: '臨床上，多數患者屬於混合型乾眼症，即是淚水分泌不足（缺水）及淚液蒸發太快（缺油）兩者症狀並存。',
  },
]
const highRisk = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2b5ce4abba134883.png',
    text: '長時間配戴隱形眼鏡人士',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/421a73f210b33563.png',
    text: '長時間注視電子螢幕人士',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/8661e3413fd98abf.png',
    text: '長期服用藥物，\n如︰血管收縮劑、抗抑鬱藥、\n安眠藥、降血壓藥',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/933a2eee445d7e09.png',
    text: '長時間處於乾燥環境，\n如︰有冷氣或暖氣的室內地方、\n陽光下暴曬',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/3d263ab67d6aa0e8.png',
    text: '免疫系統疾病患者，\n如︰關節炎、糖尿病、\n甲狀腺疾病等',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/3267576cc1afabaa.png',
    text: '更年期婦女﹙約45歲以上﹚',
  },
]
const fourthly = [
  ['級別', '第一級', '第二級', '第三級', '第四級'],
  ['程度', '輕微', '中度', '嚴重', '非常嚴重'],
  [
    '頻率',
    '偶爾不適',
    '較常不適',
    '經常並持續\n感到不適',
    '嚴重不適，\n持續不減',
  ],
]
const process = [
  {
    id: '1',
    text: '詳細問診以了解應診者的病徵及用眼習慣等，以評估導致乾眼的主因。',
  },
  {
    id: '2',
    text: '檢查眼瞼和角膜。',
  },
  {
    id: '3',
    text: '測試以評估淚膜穩定性及量度淚水層破裂時間。',
  },
  {
    id: '4',
    text: '涙水測試以量度淚水分泌。',
  },
]
const testMethod = [
  {
    id: '1',
    title: '淚液分泌試紙測試',
    text: [
      '進行試紙測試時，首先會在應診者的眼睛滴入表面麻醉的眼藥水，數分鐘後將淚液分泌試紙放在眼角內側，閉上眼5分鐘，讓濾紙吸收淚水，取出濾紙後量度淚水弄濕濾紙的長度。',
      '如果試紙淚水長度少於或等於5毫米，很可能已經患上乾眼症，屆時醫生會應用其他檢查（例如：角膜染色檢查等）來判斷病人是否存在乾眼。一般來說，若淚水長度少於5毫米，而且角膜染色檢查（+），應診者則多已患上乾眼症。',
    ],
  },
  {
    id: '2',
    title: '裂隙燈淚膜破裂測試',
    text: [
      '此測試是用作分析淚液功能穩定性，醫生會使用裂隙燈及螢光染色，在應診者眼睛的表面點上螢光素，把淚膜染色去觀察淚膜的破裂時間。若淚膜在5秒內破裂，很大機會患上乾眼症。',
    ],
  },
]
const means = [
  {
    title: '彩光治療',
    text: 'Lumenis OptiLight已獲美國食品及藥物管理局（FDA）批准使用。此技術安全有效地治療眼瞼腺體發炎相關的乾眼症，每次治療時間大約需要數分鐘，在門診即可完成。',
  },
  {
    title: '脈衝光治療原理',
    text: 'Lumenis OptiLight治療是以強力脈衝光（IPL）為基礎，利用儀器於患者眼睛周圍發放IPL幫助疏通堵塞的瞼板腺，令油脂分泌回復正常，減少淚水蒸發。適合紓緩中度至重度乾眼症症狀，以及改善因瞼板腺功能障礙（MGD）患者存在的眼乾問題。',
  },
  {
    title: '脈衝光治療效果',
    text: 'Lumenis獲得專利的技術OPT™，治療可提供有針對性、均勻、精確和可控的技術，同時控制炎症過程，並改善由瞼板腺功能障礙（MGD）引起的乾眼症的問題。一般情況，治療能達到以下的功效︰',
  },
]
// 其他紓緩眼乾症狀的方法︰
const wayOther = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/7caf90b190bdd2cc.png',
    text: '盡量避免服用減少淚液分泌的藥物，如：降血壓藥、抗抑鬱藥、阿托品類似物等。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/e69cbe139e039d40.png',
    text: '因免疫因素而引起的乾眼問題，可加用免疫抑制劑或短期局部使用激素。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/82c69bfc9bef143a.png',
    text: '減少配戴隱形眼鏡的時間。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d2cfb7e362fe19ea.png',
    text: '多喝水來補充身體水份。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/20403c32e3ae1ccf.png',
    text: '多吃護眼蔬果來補充營養所需，可食用含豐富維他命A的食物，如：牛奶、雞蛋，也可食用含豐富胡蘿蔔素的蔬菜。',
  },
]
// 預防乾眼症
const prevent = [
  {
    title: '避免讓風直接吹眼',
    text: '不要把風扇、暖氣、冷氣吹出來的風直接往眼睛吹，以免雙眼水分抽走。',
  },
  {
    title: '讓眼睛有充分休息',
    text: '看書本或電子螢幕20分鐘，建議雙眼休息20秒或者遠望20呎﹙約50厘米﹚外的景觀，以紓緩眼乾不適。',
  },
  {
    title: '多眨眼保持眼睛濕潤',
    text: '每數分鐘就要閉上雙眼休息一下，或者眨眼數下，讓淚液更平均分佈在眼球上， 維持淚膜正常狀態。',
  },
  {
    title: '避免長期配戴隱形眼鏡',
    text: '乾眼症患者的角膜比較容易受損，因此要注意配戴隱形眼鏡的時間， 以免乾眼症惡化。',
  },
  {
    title: '多吃護眼食物',
    text: '含有維他命Ａ、Ｃ、Ｅ，Omega-3或葉黃素的食物，適宜多吃， 以保持雙眼健康和促進淚液分泌。',
  },
  {
    title: '熱敷眼睛以紓緩症狀',
    text: '早晚使用熱毛巾、熱敷袋、熱敷眼罩熱敷眼睛15分鐘，以保持眼晴濕潤， 不過要留意溫度應維持在40°C，避免灼傷。',
  },
]
useHead(() => ({
  title: '乾眼症｜希瑪眼科｜醫療服務',
  meta: [
    {
      name: 'description',
      content:
        '乾眼症患者會出現眼睛乾澀、紅、腫及分泌物增多等症狀，嚴重乾眼症的患者甚至會角膜破皮和視力模糊。希瑪眼科中心提供全面乾眼症診斷，並會建議合適的乾眼症治療方案。乾眼症成因包括:長時間配戴隱形眼鏡、注視電子螢幕、處於乾燥環境、有免疫系統疾病，以及更年期婦女都較大機會患上乾眼症。乾眼症有分為三種類型，缺水型、缺油型及混合型乾眼症。治療乾眼症以減輕不適的症狀為主，使用彩光治療的脈衝光，以及人工淚液是有效治療乾眼症方法，同時也需要患者養成良好用眼習慣。',
    },
    {
      name: 'keywords',
      content:
        '眼乾原因 乾眼症症狀 眼睛乾澀 人工淚液 眼乾 乾眼症眼藥水 眼乾眼 藥水 眼乾症 乾眼症治療 眼乾症治療 乾眼症改善 眼澀原因 眼睛乾 乾眼症熱敷 乾眼症成因 眼藥水推薦 乾眼 乾眼症 乾眼病 眼乾痛 淚水分泌不足 眼乾眼痛 眼乾症狀 流眼水 流眼淚 塞淚管 人工淚管 乾眼症原因 乾眼症治療費用 乾眼症藥水 乾眼症手術 眼乾澀 眼睛檢查 眼睛疾病 眼科醫生 兒童眼科 香港眼科 眼科醫院 眼睛診所 希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 希瑪醫療集團 希瑪醫療 ',
    },
  ],
}))

// 内部导航
const serviceNavigation = [
  {
    anchorName: '症状',
    anchorLink: '/medical-service/xerophthalmia#xerophthalmiaType',
  },
  {
    anchorName: '成因',
    anchorLink: '/medical-service/xerophthalmia#factor',
  },
  {
    anchorName: '類別',
    anchorLink: '/medical-service/xerophthalmia#category',
  },
  {
    anchorName: '高危人士',
    anchorLink: '/medical-service/xerophthalmia#highRisk',
  },
  {
    anchorName: '診斷',
    anchorLink: '/medical-service/xerophthalmia#fourthly',
  },
  {
    anchorName: '治療',
    anchorLink: '/medical-service/xerophthalmia#means',
  },
  {
    anchorName: '預防方法',
    anchorLink: '/medical-service/xerophthalmia#prevent',
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
  location.href = 'tel://+(852) 3956 2026'
}
</script>

<template>
  <div>
  <div class="xeroheader">
    <!-- 头部 -->
    <div>
      <div>
        <div>乾眼症</div>
        <div>DRY EYE</div>
      </div>
      <div>
        <img
          src="https://static.cmereye.com/imgs/2023/05/2881f2949b9da5af.png"
        />
        <img
          src="https://static.cmereye.com/imgs/2023/05/2db9158b5d3b1602.png"
        />
      </div>
    </div>
    <!-- 内容 -->
    <div class="xerophthalmia">
      <!-- 什麼是乾眼症 -->
      <div>
        <div>
          <div>什麼是乾眼症 ？</div>
          <div>
            眼睛表面的淚水層（淚膜）對於維持眼睛健康、舒適及良好的視力十分重要。淚膜中的脂質、水液和黏液層，其中一層出現問題，以致淚水質量或分泌量有變，便會導致眼睛滋潤不足，並造成「乾眼症」。
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/06/84382a189b0f3a65.png"
              alt="什麼是乾眼症 ？"
            />
          </div>
        </div>
      </div>
      <!-- 乾眼症症狀 -->
      <div id="xerophthalmiaType">
        <div>乾眼症症狀</div>
        <div>
          <div v-for="(item, index) in xerophthalmiaType" :key="index">
            <div><img :src="item.img" :alt="item.text" srcset="" /></div>
            <div>{{ item.text }}</div>
          </div>
        </div>
        <div @click="goWhatsApp()">已出現以上症狀？立即聯絡我們</div>
      </div>
      <!-- 乾眼症成因 -->
      <div id="factor">
        <div>乾眼症成因</div>
        <div>
          <div>
            眼睛表面有一層淚膜，覆蓋在眼角膜及結膜上，形成一層濕潤保護膜，維持眼睛表面健康，淚液層由外到內可分為三層：
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/fd5f078c30e85918.png"
            />
            <img
              src="https://static.cmereye.com/imgs/2023/05/84ab47f3810c1d07.png"
            />
          </div>
        </div>
        <div>
          <div v-for="(item, index) in factor" :key="index">
            <div><img :src="item.img" :alt="item.title" srcset="" /></div>
            <div>
              <div>{{ item.title }}</div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div>
          <div>淚膜中若有一層分泌不足或分佈不均勻，均可能造成「乾眼症」。</div>
          <div>
            <div v-for="(item, index) in tearFilm" :key="index">
              <div><img :src="item.img" :alt="item.title" /></div>
              <div>
                <div>{{ item.title }}</div>
                <div v-for="(ele, index) in item.text" :key="index">
                  · {{ ele }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 乾眼症的類別 -->
      <div id="category">
        <div>乾眼症的類別</div>
        <div>
          <div v-for="(item, index) in category" :key="index">
            <div><img :src="item.img" :alt="item.title" /></div>
            <div>
              <div>{{ item.title }}</div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div @click="goWhatsApp()">
          <div>想知道屬於哪一種類別？</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="10px"
            height="16px"
          >
            <image
              x="0px"
              y="0px"
              width="10px"
              height="16px"
              xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAQAAACFdibLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnBQ8NHzi6ljvvAAAAe0lEQVQY013OsQ0CQQwF0RGbIRI4UkRKD9AARRDSF4I66ACJiB6ICIgPDcFqZe/Z2bP9ZcSjZ4tE49JRvWbG4kN7Rlz77LnOJtxyGt8sgTgEp0ccfKl6mRG1YwP8uMfe3q86eorMRA0PmSpOSHDhpyfBue+e6vnKbSb5A87Xw8Nh1W2mAAAAAElFTkSuQmCC"
            />
          </svg>
        </div>
      </div>
      <!-- 患乾眼症的高危人士 -->
      <div id="highRisk">
        <div>患乾眼症的高危人士</div>
        <div>
          <div v-for="(item, index) in highRisk" :key="index">
            <div><img :src="item.img" /></div>
            <div>{{ item.text }}</div>
          </div>
        </div>
        <div @click="callTel()">
          <div>懷疑是高危人士? 立即預約檢查</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="10px"
            height="16px"
          >
            <image
              x="0px"
              y="0px"
              width="10px"
              height="16px"
              xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAQAAACFdibLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnBQ8NHzi6ljvvAAAAe0lEQVQY013OsQ0CQQwF0RGbIRI4UkRKD9AARRDSF4I66ACJiB6ICIgPDcFqZe/Z2bP9ZcSjZ4tE49JRvWbG4kN7Rlz77LnOJtxyGt8sgTgEp0ccfKl6mRG1YwP8uMfe3q86eorMRA0PmSpOSHDhpyfBue+e6vnKbSb5A87Xw8Nh1W2mAAAAAElFTkSuQmCC"
            />
          </svg>
        </div>
      </div>
      <!-- 乾眼症的診斷 -->
      <div id="fourthly">
        <div>乾眼症的診斷</div>
        <div>
          <div>
            眼科專科醫生會先了解患者病徵和生活習慣，再根據臨床檢查診斷乾眼症，包括︰檢查角膜表面有沒有傷口、眼皮是否清潔、瞼板腺是否暢通等。透過眼睛檢查，以判斷乾眼症的嚴重程度。
          </div>
          <div>乾眼症研討會︰乾眼症四個等級</div>
          <div>
            <div v-for="(item, index) in fourthly" :key="index">
              <div v-for="(it, i) in item" :key="i">
                <div>{{ it }}</div>
              </div>
            </div>
          </div>
          <div>診斷過程</div>
          <div>
            <div v-for="(item, i) in process" :key="i">
              <div>
                <div>setp</div>
                <div>{{ item.id }}</div>
              </div>
              <div>{{ item.text }}</div>
            </div>
          </div>
          <!-- 常見診斷測試 -->
          <div>
            <div>常見診斷測試</div>
            <div>
              <div>
                <div v-for="(item, i) in testMethod" :key="i">
                  <div>
                    <div>{{ item.id }}</div>
                    <div>{{ item.title }}</div>
                  </div>
                  <div v-for="(ele, index) in item.text" :key="index">
                    <div>{{ ele }}</div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/96be300a751eee94.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div @click="callTel()">
          <div>我需要預約診斷</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="10px"
            height="16px"
          >
            <image
              x="0px"
              y="0px"
              width="10px"
              height="16px"
              xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAQAAACFdibLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnBQ8NHzi6ljvvAAAAe0lEQVQY013OsQ0CQQwF0RGbIRI4UkRKD9AARRDSF4I66ACJiB6ICIgPDcFqZe/Z2bP9ZcSjZ4tE49JRvWbG4kN7Rlz77LnOJtxyGt8sgTgEp0ccfKl6mRG1YwP8uMfe3q86eorMRA0PmSpOSHDhpyfBue+e6vnKbSb5A87Xw8Nh1W2mAAAAAElFTkSuQmCC"
            />
          </svg>
        </div>
      </div>
      <!-- 乾眼症治療 -->
      <div id="means">
        <div>乾眼症治療</div>
        <div>
          乾眼症治療的主要目的是減輕乾眼症狀，增加眼球表面的淚液，增加淚水分泌和減少淚水蒸發。乾眼症是慢性疾病，需長期接受治療，並需要患者配合去改變生活習慣。
        </div>
        <div>
          <div>治療方法</div>
          <div v-for="(item, i) in means" :key="i">
            <div>{{ item.title }}</div>
            <div>{{ item.text }}</div>
          </div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/bc830caf2d8498fa.png"
              />
            </div>
            <div>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="76px"
                    height="63px"
                  >
                    <image
                      x="0px"
                      y="0px"
                      width="76px"
                      height="63px"
                      xlink:href="data:img/png;base64,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"
                    />
                  </svg>
                  <div>1</div>
                </div>
                <div>抑制炎症</div>
              </div>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="76px"
                    height="63px"
                  >
                    <image
                      x="0px"
                      y="0px"
                      width="76px"
                      height="63px"
                      xlink:href="data:img/png;base64,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"
                    />
                  </svg>
                  <div>2</div>
                </div>
                <div>改善不正常血管</div>
              </div>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="76px"
                    height="63px"
                  >
                    <image
                      x="0px"
                      y="0px"
                      width="76px"
                      height="63px"
                      xlink:href="data:img/png;base64,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"
                    />
                  </svg>
                  <div>3</div>
                </div>
                <div>減少眼睛蠕形蟎的數量</div>
              </div>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="76px"
                    height="63px"
                  >
                    <image
                      x="0px"
                      y="0px"
                      width="76px"
                      height="63px"
                      xlink:href="data:img/png;base64,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"
                    />
                  </svg>
                  <div>4</div>
                </div>
                <div>調節油脂分泌</div>
              </div>
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="76px"
                    height="63px"
                  >
                    <image
                      x="0px"
                      y="0px"
                      width="76px"
                      height="63px"
                      xlink:href="data:img/png;base64,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"
                    />
                  </svg>
                  <div>5</div>
                </div>
                <div>激活瞼板腺功能</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              乾眼症是慢性病，有機會需要3至4次治療才見效。在接受治療前、期間和之後，患者應該根據眼科專科醫生的建議護理。
            </div>
          </div>
          <!-- 減少淚液流失 -->
          <div>
            <div>
              <div>使用人工淚液</div>
              <div>
                應用人工淚液（盡量使用不含防腐劑的人工淚液），嚴重者可能需要使用自體血清。
              </div>
              <div>
                乾眼症治療除了針對病因治療外，使用人工淚液也是有效的方法。隨著藥物學不斷發展，人工淚液不斷改良。現時有不少新藥物用於治療乾眼症，針對淚膜三層結構來進行治療，大大提高了乾眼症藥物的治療療效。
              </div>
              <div>
                使用人工淚水也有需要注意的細節。市面上，大部分眼藥水為了方便長時間保存，均有添加防腐劑。正常情況下，使用含有防腐劑的眼藥水多數不會對人體造成影響。不過，乾眼症患者的眼睛對防腐劑的耐受性可能較低，因此比較適合使用不含防腐劑的人工淚液，以避免長期接觸防腐劑導致眼睛敏感等問題。人工淚液可分為眼藥水及眼藥膏：
              </div>
            </div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/cf53e666d96890d0.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <!-- 眼藥水 -->
          <div>
            <div>
              <div>眼藥水</div>
              <div>
                使用方便、簡單，可在眼球乾澀時直接補充水分，但水分蒸發較快，症狀嚴重的話需要頻密使用。
              </div>
            </div>
            <div>
              <div>藥膏狀</div>
              <div>
                藥膏狀的人工淚液黏貼度較高，可留存在眼內更長的時間，以保持眼睛濕潤，但因太黏，往往會造成短暫的視力模糊，所以一般建議在眼睛休息時（如睡前）使用。
              </div>
            </div>
          </div>
          <!-- 減少淚液流失 配戴鞏膜鏡 -->
          <div>
            <div>
              <div>減少淚液流失</div>
              <div>
                使用淚道塞子堵塞淚道開口，從而減少淚液流失，病情嚴重者可考慮永久封閉淚道開口。
              </div>
            </div>
            <div>
              <div>配戴鞏膜鏡</div>
              <div>
                鞏膜鏡是一款高透氣的特製隱形眼鏡，覆蓋眼角膜和角膜周圍的表面，有助淚水停留眼表，滋潤角膜表面。
              </div>
            </div>
          </div>
          <!-- 其他紓緩眼乾症狀的方法︰ -->
          <div>
            <div>其他紓緩眼乾症狀的方法︰</div>
            <div>
              <div v-for="(item, index) in wayOther" :key="index">
                <div><img :src="item.img" alt="" /></div>
                <div>{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
        <div @click="callTel()">
          <div>人工淚液沒有改善？</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="18px"
            height="18px"
          >
            <image
              x="0px"
              y="0px"
              width="18px"
              height="18px"
              xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnBQ8RKjrjlcJhAAAAvElEQVQoz4XSoQ9BURTH8Z/HBEWU7E16NtL7M0RdsFEEQTSbJKuaJKiKZrpoGkl8mMYmfAV3nue9y++mc/fZzjnbEcJjxZEusj3hcuOVlh2NCVNORo4KCjNRYhxtP6pcMhKld7MAzzaTWBi0tA8uXIPOZOxIDA2b/kJiY1j7F8pzNaxpR6LCw7CR+fGpkYoi4XM3bEuPAQB76lEkqlyIp//dv8guruK7ZJj/R0I0OHyYle3Q0nRYcyJgRvYJKHJ9GjIJFIwAAAAASUVORK5CYII="
            />
          </svg>
          <div>立即致電查詢其他方案</div>
        </div>
      </div>
      <!-- 預防乾眼症 -->
      <div id="prevent">
        <div>預防乾眼症</div>
        <div>
          <div v-for="(item, index) in prevent" :key="index">
            <div>{{ item.title }}</div>
            <div>{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <!-- 右侧边导航 -->
    <div>
      <rightSidesNavigation :service-navigation="serviceNavigation" />
    </div>
    <!-- 下载 -->
    <div class="dow">
      <div>
        <div>
          <div @click.stop="getPdf('xerophthalmia.pdf','乾眼症')">
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt=""
              srcset=""
            />
          </div>
          <div @click.stop="getPdf('xerophthalmia.pdf','乾眼症')">
            <p>乾眼症</p>
            <p>下載小冊子</p>
          </div>
        </div>
      </div>
    </div>
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#b6b3e0;'}`"
    />
  </div>
  </div>
</template>

<style lang="scss" scoped>
.xerophthalmia {
  max-width: 1200px;
  margin: auto;
  position: relative;
  transform: scale(0.85);
  margin-top: -60%;

  & > div:nth-child(1) {
    margin-top: 130px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div:nth-child(1) {
      width: 577px;
      margin-right: 60px;

      & > div:nth-child(1) {
        margin-bottom: 37px;
        font-family: 'NotoSansHK-Medium';
        font-size: 48px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 52px;
        letter-spacing: 0px;
        color: #525280;
      }

      & > div:nth-child(2) {
        font-family: 'NotoSansHK-Medium';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 42px;
        letter-spacing: 0px;
        color: #525280;
      }
    }

    & > div:nth-child(2) {
      // position: relative;

      & > div {
        & > img {
          width: 100%;
          position: relative;
          top: 60px;
          left: 60px;
        }
      }

      background: #f2f2f2;
      width: 633px;
      height: 606px;
      transform: scale(0.85);
    }
  }

  & > div:nth-child(2) {
    margin-top: 166px;
    padding: 0 70px;
    min-width: 1175px;

    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
      text-align: center;
    }

    & > div:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 120px;

      & > div {
        width: 235px;
        white-space: pre-wrap;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > div:nth-child(1) {
          width: 145px;
          height: 120px;
          display: flex;
          align-items: center;

          & > img {
            width: 100%;
          }
        }

        & > div:nth-child(2) {
          margin-top: 33px;
          text-align: center;
          height: 65px;

          font-family: 'NotoSansHK-Regular';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 28px;
          letter-spacing: 0px;
          color: #a9a6d2;
        }
      }

      & > div:nth-child(n + 5) {
        margin-top: 145px;
      }
    }

    & > div:nth-child(3) {
      margin: auto;
      cursor: pointer;
      margin-top: 118px;
      background-image: linear-gradient(90deg, #b5b2db 0%, #ccc9f0 100%),
        linear-gradient(90deg, #ff6838 0%, #ffae35 100%);
      background-blend-mode: normal, normal;
      width: 414px;
      height: 65px;
      border-radius: 65px;

      font-family: 'NotoSansHK-Medium';
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #ffffff;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  & > div:nth-child(3) {
    margin-top: 117px;

    & > div:nth-child(1) {
      text-align: center;
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
    }

    & > div:nth-child(2) {
      margin-top: 68px;

      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #525280;
      }

      & > div:nth-child(2) {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;
        padding-right: 95px;

        & > img {
          position: relative;
          right: 60px;
        }

        & > img:nth-child(1) {
          z-index: 5;
          top: 50px;
          left: 85px;
        }
      }
    }

    & > div:nth-child(3) {
      margin-top: 195px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;

      & > div {
        display: flex;
        position: relative;

        & > div:nth-child(1) {
          overflow: hidden;
          box-shadow: 2px 3px 13px 0px rgba(0, 0, 0, 0.15);
          border-radius: 22px;
        }

        & > div:nth-child(2) {
          top: 264px;
          padding: 0 34px;
          position: absolute;

          & > div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #ae7d1f;
            text-align: center;
          }

          & > div:nth-child(2) {
            margin-top: 38px;
            font-family: 'NotoSansHK-Regular';
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 32px;
            letter-spacing: 0px;
            color: #515151;
          }
        }
      }

      & > div:nth-child(2) {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            color: #1b80a0;
          }
        }
      }

      & > div:nth-child(3) {
        & > div:nth-child(2) {
          & > div:nth-child(1) {
            color: #595757;
          }
        }
      }
    }

    & > div:nth-child(4) {
      margin-top: 117px;

      & > div:nth-child(1) {
        margin-bottom: 49px;
        font-family: 'NotoSansHK-Medium';
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #525280;
        text-align: center;
      }

      & > div:nth-child(2) {
        & > div {
          margin-top: 20px;
          background-image: linear-gradient(#f8f8f8, #f8f8f8),
            linear-gradient(#ffffff, #ffffff);
          background-blend-mode: normal, normal;
          border-radius: 15px;
          padding-left: 375px;
          display: flex;
          align-items: center;

          & > div:nth-child(2) {
            margin-left: 80px;
            font-family: 'NotoSansHK-Regular';
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 32px;
            letter-spacing: 0px;
            color: #515151;

            & > div:nth-child(1) {
              font-family: 'NotoSansHK-Medium';
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 36px;
              letter-spacing: 0px;
              color: #ae7d1f;
            }
          }
        }

        & > div:nth-child(1) {
          & > div:nth-child(2) {
            padding: 26px 0;
          }
        }

        & > div:nth-child(2) {
          & > div:nth-child(2) {
            padding: 34px 0;

            & > div:nth-child(1) {
              color: #1b80a0;
            }
          }
        }

        & > div:nth-child(3) {
          & > div:nth-child(2) {
            padding: 29px 0;

            & > div:nth-child(1) {
              color: #1b80a0;
            }
          }
        }

        & > div:nth-child(4) {
          & > div:nth-child(2) {
            padding-top: 33px;
            padding-bottom: 40px;

            & > div:nth-child(1) {
              color: #3aaad2;
            }
          }
        }
      }
    }
  }

  & > div:nth-child(4) {
    margin-top: 180px;

    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
      text-align: center;
    }

    & > div:nth-child(2) {
      margin-top: 80px;
      padding: 0 100px;

      & > div {
        margin-top: 79px;
        display: flex;
        align-items: center;
        position: relative;

        & > div:nth-child(1) {
          width: 173px;

          & > img {
            width: 100%;
          }
        }

        & > div:nth-child(2) {
          position: absolute;
          margin-left: 218px;

          & > div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #525280;
          }

          & > div:nth-child(2) {
            margin-top: 19px;
            font-family: 'NotoSansHK-Regular';
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 30px;
            letter-spacing: 0px;
            color: #515151;
          }
        }
      }
    }

    & > div:nth-child(3) {
      cursor: pointer;
      margin: auto;
      margin-top: 148px;
      width: 414px;
      height: 66px;
      background-image: linear-gradient(90deg, #b5b2db 0%, #ccc9f0 100%),
        linear-gradient(90deg, #ff6838 0%, #ffae35 100%);
      background-blend-mode: normal, normal;
      border-radius: 66px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-family: 'NotoSansHK-Medium';
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #ffffff;
    }
  }

  & > div:nth-child(5) {
    & > div:nth-child(1) {
      text-align: center;
      margin-top: 170px;
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
    }

    & > div:nth-child(2) {
      margin-top: 68px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      white-space: pre-wrap;

      & > div {
        width: 388px;
        height: 356px;
        background: #fff;
        box-shadow: 2px 3px 13px 0px rgba(0, 0, 0, 0.15);
        border-radius: 20px;

        & > div:nth-child(2) {
          margin-top: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          font-family: 'NotoSansHK-Regular';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;
        }
      }

      & > div:nth-child(n + 4) {
        margin-top: 80px;
      }
    }

    & > div:nth-child(3) {
      cursor: pointer;
      margin: auto;
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 414px;
      height: 66px;
      background-image: linear-gradient(90deg, #b5b2db 0%, #ccc9f0 100%),
        linear-gradient(90deg, #ff6838 0%, #ffae35 100%);
      background-blend-mode: normal, normal;
      border-radius: 66px;

      font-family: 'NotoSansHK-Medium';
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #ffffff;

      & > svg {
        margin-top: 5px;
        margin-left: 20px;
      }
    }
  }

  & > div:nth-child(6) {
    margin-top: 154px;

    & > div:nth-child(1) {
      text-align: center;
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
    }

    & > div:nth-child(2) {
      margin-top: 60px;

      & > div:nth-child(1) {
        border-radius: 10px;
        border: solid 2px #dbd9d9;
        padding: 47px 30px;

        font-family: 'NotoSansHK-Bold';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 44px;
        letter-spacing: 0px;
        color: #525280;
      }

      & > div:nth-child(2) {
        margin-top: 180px;
        text-align: center;

        font-family: 'NotoSansHK-Bold';
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #525280;
      }

      & > div:nth-child(3) {
        margin-top: 90px;

        & > div {
          background-image: linear-gradient(-90deg, #a9a6d2 0%, #ffffff 100%);
          height: 121px;
          margin-top: 10px;
          display: flex;
          align-items: center;
          white-space: pre-wrap;
          text-align: center;

          & > div:nth-child(1) {
            font-size: 30px;
            color: #525280;
          }

          & > div:nth-child(2) {
            font-size: 30px;
            color: #8686b5;
          }

          & > div:nth-child(3) {
            font-size: 30px;
            color: #6d6d9e;
          }

          & > div:nth-child(4) {
            font-size: 30px;
            color: #525280;
          }

          & > div:nth-child(5) {
            font-size: 30px;
            color: #3c3c63;
          }

          & > div {
            font-family: 'NotoSansHK-Regular';
            line-height: 36px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Bold';
        }
      }

      & > div:nth-child(4) {
        margin-top: 100px;
        text-align: center;
        font-family: 'NotoSansHK-Bold';
        font-size: 36px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #525280;
      }

      & > div:nth-child(5) {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 43px;
        display: flex;
        justify-content: space-between;
        position: relative;

        & > div {
          width: 330px;
          border: solid 2px #dbd9d9;
          height: 266px;
          border-right: none;
          position: relative;

          & > div:nth-child(1) {
            position: absolute;
            width: 76px;
            height: 77px;
            background-color: #6d6d9e;
            border-radius: 50%;

            & > div:nth-child(1) {
              font-family: 'ArialMT';
              font-size: 12px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              text-transform: uppercase;
            }

            & > div:nth-child(2) {
              font-family: 'Metropolis-SemiBold';
              font-size: 45px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 42px;
              letter-spacing: 0px;
            }

            transform: translate(180%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
            box-shadow: 0px 0px 0px 15px #ffffff;
          }

          & > div:nth-child(2) {
            padding-top: 76px;
            padding-left: 38px;
            padding-right: 35px;
            font-family: 'NotoSansHK-Regular';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #525280;
          }
        }

        & > div::after {
          content: '';
          background: url('https://static.cmereye.com/imgs/2023/05/24a8fecc85da78e0.jpg');
          width: 15px;
          height: 46px;
          position: absolute;
          box-shadow: 0px 0px 0px 15px #ffffff;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        & > div:first-child::after {
          position: relative;
        }

        & > div:last-child {
          border-right: solid 2px #dbd9d9;
        }
      }

      & > div:nth-child(6) {
        margin-top: 134px;
        padding-right: 30px;

        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Bold';
          font-size: 36px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #525280;
        }

        & > div:nth-child(2) {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          position: relative;

          & > div:nth-child(1) {
            position: absolute;
            padding-right: 359px;
            margin-top: 49px;

            & > div:nth-child(2) {
              margin-top: 112px;
            }

            & > div {
              & > div:nth-child(1) {
                display: flex;
                align-items: center;
                margin-bottom: 20px;

                & > div:nth-child(1) {
                  width: 31px;
                  height: 30px;
                  background-color: #6d6d9e;
                  border-radius: 50%;
                  display: flex;
                  align-items: flex-end;
                  justify-content: center;
                  color: #fff;
                  margin-right: 10px;
                }

                & > div:nth-child(2) {
                  font-family: 'NotoSansHK-Medium';
                  font-size: 26px;
                  font-weight: normal;
                  font-stretch: normal;
                  line-height: 36px;
                  letter-spacing: 0px;
                  color: #525280;
                }
              }
            }
          }

          & > div:nth-child(2) {
            margin-top: 5px;
          }
        }
      }
    }

    & > div:nth-child(3) {
      cursor: pointer;
      margin: auto;
      margin-top: 100px;
      width: 414px;
      height: 66px;
      background-image: linear-gradient(90deg, #b5b2db 0%, #ccc9f0 100%),
        linear-gradient(90deg, #ff6838 0%, #ffae35 100%);
      background-blend-mode: normal, normal;
      border-radius: 66px;

      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'NotoSansHK-Medium';
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #fff;

      & > svg {
        margin-left: 22px;
        margin-top: 5px;
      }
    }
  }

  & > div:nth-child(7) {
    margin-top: 182px;

    & > div:nth-child(1) {
      text-align: center;
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
    }

    & > div:nth-child(2) {
      margin-top: 59px;
      border-radius: 10px;
      border: solid 2px #dbd9d9;
      padding: 47px 32px;
      font-family: 'NotoSansHK-Bold';
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 44px;
      letter-spacing: 0px;
      color: #525280;
    }

    & > div:nth-child(3) {
      margin-top: 178px;

      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Bold';
        font-size: 49px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #525280;
      }

      & > div:nth-child(2) {
        padding-left: 14px;

        & > div:nth-child(1) {
          margin-top: 92px;
          font-family: 'NotoSansHK-Bold';
          font-size: 38px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 27px;
          letter-spacing: 1px;
          color: #6d6d9e;
        }

        & > div:nth-child(2) {
          margin-top: 57px;
          font-family: 'NotoSansHK-Regular';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #515151;
        }
      }

      & > div:nth-child(3),
      & > div:nth-child(4) {
        padding-left: 14px;

        & > div:nth-child(1) {
          margin-top: 70px;
          font-family: 'NotoSansHK-Bold';
          font-size: 28px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 27px;
          letter-spacing: 1px;
          color: #515151;
          margin-bottom: 33px;
        }

        & > div:nth-child(2) {
          font-family: 'NotoSansHK-Regular';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #515151;
        }
      }

      & > div:nth-child(4) {
        & > div:nth-child(1) {
          margin-top: 104px;
        }
      }

      & > div:nth-child(5) {
        margin-top: 60px;
        display: flex;
        flex-direction: row;

        & > div:nth-child(2) {
          margin-left: 50px;

          & > div {
            margin-top: 20px;
            display: flex;
            align-items: center;
            width: 457px;
            height: 63px;
            border: 1px solid #a9a6d2;
            border-radius: 34px;
            margin-bottom: 24px;

            & > div:nth-child(1) {
              position: relative;

              & > div:nth-child(2) {
                position: absolute;
                top: 20%;
                left: 25%;
                font-family: 'NotoSansHK-Medium';
                font-size: 40px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 34px;
                letter-spacing: 0px;
                color: #ffffff;
              }
            }

            & > div:nth-child(2) {
              margin-left: 25px;
              font-family: 'NotoSansHK-Regular';
              font-size: 28px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 34px;
              letter-spacing: 0px;
              color: #515151;
            }
          }
        }
      }

      & > div:nth-child(6) {
        margin-top: 68px;
        border: solid 1px #a9a6d2;
        padding: 38px 0;
        padding-left: 45px;
        transform: perspective(492px) rotateX(350deg);

        & > div {
          // 抵消文字变形
          transform: perspective(180px) rotateX(3deg);
          font-family: 'NotoSansHK-Regular';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #515151;
        }
      }

      & > div:nth-child(6)::after {
        position: absolute;
        right: -15px;
        content: '';
        background: url('https://static.cmereye.com/imgs/2023/05/d77b2eace7e89ae7.jpg');
        width: 30px;
        height: 45px;
        bottom: 13px;
        box-shadow: 0px 0px 0px 10px #fff;
      }

      & > div:nth-child(6)::before {
        position: absolute;
        content: '';
        background: url('https://static.cmereye.com/imgs/2023/05/dd10e67efe7af43c.jpg');
        width: 30px;
        height: 53px;
        top: 30%;
        left: -15px;
        box-shadow: 0px 0px 0px 10px #fff;
      }

      // 使用人工淚液
      & > div:nth-child(7) {
        margin-top: 138px;
        display: flex;
        justify-content: flex-end;
        position: relative;

        & > div:nth-child(1) {
          position: absolute;

          & > div {
            padding-left: 14px;
            padding-right: 632px;
            font-family: 'NotoSansHK-Regular';
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 25px;
            letter-spacing: -0.01em;
            color: #515151;
          }

          & > div:nth-child(1) {
            padding-left: 1px;
            margin-top: 24px;
            font-family: 'NotoSansHK-Bold';
            font-size: 38px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #6d6d9e;
          }

          & > div:nth-child(2),
          & > div:nth-child(3) {
            margin-bottom: 57px;
          }

          & > div:nth-child(2) {
            margin-top: 62px;
          }
        }
      }

      // 使用人工淚液
      & > div:nth-child(8) {
        margin-top: 59px;
        background: url('https://static.cmereye.com/imgs/2023/05/3cc8de62b7e69384.png')
          no-repeat;
        height: 257px;
        padding: 42px 60px;
        transform: scale(0.85);
        background-size: 100%;

        & > div {
          margin-bottom: 24px;

          & > div:nth-child(1) {
            font-family: 'NotoSansHK-Regular';
            font-size: 25px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 27px;
            letter-spacing: 0px;
            color: #525280;
          }

          & > div:nth-child(2) {
            font-family: 'NotoSansHK-Regular';
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 27px;
            letter-spacing: 0px;
            color: #525280;
          }
        }
      }

      // 減少淚液流失
      & > div:nth-child(9) {
        margin-top: 114px;

        & > div {
          & > div:nth-child(1) {
            font-family: 'NotoSansHK-Bold';
            font-size: 38px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 27px;
            letter-spacing: 1px;
            color: #6d6d9e;
          }

          & > div:nth-child(2) {
            padding-left: 14px;
            font-family: 'NotoSansHK-Regular';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 27px;
            letter-spacing: 0px;
            color: #515151;
            margin-top: 65px;
            margin-bottom: 102px;
          }
        }
      }

      // 其他紓緩眼乾症狀的方法
      & > div:nth-child(10) {
        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Bold';
          font-size: 38px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 27px;
          letter-spacing: 1px;
          color: #6d6d9e;
        }

        & > div:nth-child(2) {
          display: flex;
          flex-wrap: wrap;
          padding: 0 30px;
          max-width: 1200px;
          justify-content: space-between;

          & > div {
            margin-top: 104px;
            margin-left: 100px;

            & > div:nth-child(1) {
              box-shadow: -14px 10px 0px 0px #eae9f1;
              border-radius: 50%;
            }

            & > div:nth-child(2) {
              padding: 0 21px;
              margin-top: 53px;
              width: 308px;
              font-family: 'NotoSansHK-Regular';
              font-size: 24px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.4;
              letter-spacing: 0px;
              color: #515151;
            }
          }

          & > div:first-child {
            margin-left: 0;
          }

          & > div:nth-child(4) {
            margin-left: 216px;
          }

          & > div:nth-child(5) {
            margin-left: 0;
            margin-right: 216px;
          }
        }
      }
    }

    & > div:nth-child(4) {
      cursor: pointer;
      margin: auto;
      margin-top: 120px;
      width: 558px;
      height: 66px;
      background-image: linear-gradient(90deg, #b5b2db 0%, #ccc9f0 100%),
        linear-gradient(90deg, #ff6838 0%, #ffae35 100%);
      background-blend-mode: normal, normal;
      border-radius: 66px;

      font-family: 'NotoSansHK-Medium';
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;

      & > svg {
        margin-top: 6px;
        margin-left: 5px;
        margin-right: 5px;
      }
    }
  }

  // 預防乾眼症
  & > div:nth-child(8) {
    margin-top: 180px;

    & > div:nth-child(1) {
      text-align: center;
      font-family: 'NotoSansHK-Bold';
      font-size: 36px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 36px;
      letter-spacing: 0px;
      color: #525280;
    }

    & > div:nth-child(2) {
      margin-top: 71px;
      padding-left: 46px;

      & > div {
        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Medium';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #525280;
          display: flex;
          align-items: center;
          margin-bottom: 32px;
          margin-top: 61px;
        }

        & > div:nth-child(2) {
          font-family: 'NotoSansHK-Regular';
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 27px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(1)::before {
          content: '';
          background: url('https://static.cmereye.com/imgs/2023/05/2f91d710e3b319e6.png')
            no-repeat;
          width: 15px;
          height: 17px;
          display: block;
          margin-right: 25px;
        }
      }

      & > div:nth-child(2) {
        margin-top: 73px;
      }

      & > div:nth-child(3) {
        margin-top: 96px;
      }

      & > div:nth-child(4) {
        margin-top: 95px;
      }

      & > div:nth-child(5) {
        margin-top: 65px;
      }
    }
  }
}

.xeroheader {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 55vw;

    & > div:nth-child(1) {
      & > div:nth-child(1) {
        font-family: 'NotoSansCJKtc-Bold';
        font-size: 119px;
        font-weight: 700;
        font-stretch: normal;
        line-height: 0.9;
        letter-spacing: 1px;
        color: #a9a6d2;
        position: sticky;
      }

      & > div:nth-child(2) {
        position: relative;
        z-index: 5;
        font-family: 'DINCondensed-Bold';
      }

      
      font-size: 131px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 1.2;
      text-align: justify;
      letter-spacing: 3px;
      color: #a9a6d2;
      margin-left: -0.6vw;
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
      top: -20px;
      left: -5px;

      & > img {
        position: relative;
        z-index: 5;
      }

      & > img:nth-child(1) {
        margin-bottom: 20px;
      }
    }
  }
}

.dow {
  margin-top: -45%;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    & > div {
      
      width: 62.5%;
      height: 202px;
      background: #a9a6d2;
      position: relative;
      display: flex;
      align-items: center;

      & > div:nth-child(1) {
        margin-left: 37.28433%;
        margin-right: 3.90625%;

        & > img {
          width: 120px;
          height: 135px;
          cursor: pointer;
        }
      }

      & > div:nth-child(2) {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .xerophthalmia {
    margin: auto;
    margin-top: -37.3%;
  }

  .dow {
    margin-top: -30%;

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
