<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '黃斑病變',
}))
// 传递背景色
const backgd = [
  '#dec692;',
  '-webkit-linear-gradient(to right, #dec692, #eedaaf);',
  'linear-gradient(to right, #dec692, #eedaaf);',
]
// 常見問題
const meetArr = [
  {
    title: 'Q：熄燈玩電話會增加黃斑病變風險？',
    agree:
      '電子屏幕發出的藍光對黃斑無益，特別在黑暗的環境中，瞳孔會放大，眼睛便有機會吸收更多高能量可見光。有些研究已顯示，動物長時間吸收更多高能量可見光，會對黃斑構成傷害，情況類似黃斑病變。但目前沒有研究確切證實電子屏幕發出的藍光損傷黃斑。',
  },
  {
    title: 'Q：年紀愈大愈容易患上黃斑病變？',
    agree:
      '年紀愈大，患上老年黃斑病變風險愈高。同時有吸煙習慣、飲食習慣攝取高飽和脂肪或高膽固醇、眼睛長期被過度日光照射、患有血管系統疾病或高血壓、其中一隻眼已患有黃斑退化、受遺傳因素影響等人士也有較大機會患上黃斑病變。',
  },
  {
    title: 'Q：乾性黃斑病變較濕性黃斑病變對眼睛影響較少？',
    agree:
      '乾性黃斑病變，多數患者早期沒有明顯的病徵，視力下降速度相對較慢，但若病情惡化，也可能明顯影響視力。另外，乾性病變也有可能發展為濕性黃斑退化。而濕性黃斑病變不妥善處理，滲出物和血液聚集於黃斑區會破壞該處的感光細胞，可以永久破壞視野中央位置的視力。相對而言，濕性黃斑病變較乾性黃斑病變嚴重。',
  },
  {
    title: 'Q：藥物注射可以治療黃斑病變？',
    agree:
      '將藥物注射入玻璃體是其中一個治療黃斑病變的方法。透過把藥物注於患者眼内，直接發揮作用。多個醫學報告顯示，這種方法治療糖尿病黃斑水腫療效良好，超過六成患者能獲得不錯的視功能改善。愈早發現並治療，成效就愈好，經治療後有機會回復正常視力水平。',
  },
]
// 黃斑病變的症狀
const sympotm = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/a35e84d4d561b775.png',
    text: '中央視野及\n視力模糊',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/1bc58cb58d984772.png',
    text: '視野中心\n出現暗點',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/b5d5aa2f6c40815b.png',
    text: '景物變形、線條扭曲、\n盲點及顏色變暗',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/43227b62cc0bc253.png',
    text: '嚴重者完全失去\n中央視野',
  },
]
// 黃斑病變自我檢查
const examine = [
  {
    title: '正常視野',
    img_up: 'https://static.cmereye.com/imgs/2023/05/aa1baf80bab50483.png',
    img_down: 'https://static.cmereye.com/imgs/2023/05/9450b89f466321db.png',
  },
  {
    title: ' 顏色變暗',
    img_up: 'https://static.cmereye.com/imgs/2023/05/233cb17db72b3823.png',
    img_down: 'https://static.cmereye.com/imgs/2023/05/be3b25f7e3770d9f.png',
  },
  {
    title: ' 視野扭曲',
    img_up: 'https://static.cmereye.com/imgs/2023/05/940b9c94d772c689.png',
    img_down: 'https://static.cmereye.com/imgs/2023/05/6d3dba4eaa1e1303.png',
  },
  {
    title: ' 視力模糊 ',
    img_up: 'https://static.cmereye.com/imgs/2023/05/7e436a4e96ccdc37.png',
    img_down: 'https://static.cmereye.com/imgs/2023/05/98c9fd6f9d13b3cb.png',
  },
  {
    title: ' 逐漸失去中央視野',
    img_up: 'https://static.cmereye.com/imgs/2023/05/89704c6401ded877.png',
    img_down: 'https://static.cmereye.com/imgs/2023/05/8336f08bbc0cda0e.png',
  },
]
// 老年黃斑病變成因
const factor = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d318d9ddc48014f0.png',
    text: '年齡增長',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/4c30a5bce1f432ab.png',
    text: '吸煙',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/fa056cec9377e0b8.png',
    text: '飲食習慣攝取高飽\n和脂肪或高膽固醇',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/517d3d0735bb283a.png',
    text: '眼睛長期被\n過度日光照射',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/26091d94736c22f3.png',
    text: '患有血管系統\n疾病或高血壓',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/3f170433f21acc56.png',
    text: '其中一隻眼已\n患有黃斑退化',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/7d119ac9fdaca526.png',
    text: '遺傳因素',
  },
]
// 預防黃斑病變
const prevent = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/ef27c15a9ab6f560.png',
    title: '避免吸煙',
    text: '吸煙會增加患黃斑病變機會 3-4 倍。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/c5572d289a126f73.png',
    title: '控制體重、血壓、\n血脂、血糖',
    text: '研究顯示，肥胖和三高可以引起微血管的損害，從而造成黃斑病變的發生和發展。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/45fe80f40944cbb0.png',
    title: '預防深近視',
    text: '深近視人士（600度或以上）均有較大機會患上黃斑病變。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/aa448910d3a02a1f.png',
    title: '每年進行眼科檢查',
    text: '年紀大也會增加患黃斑病變風險，建議每年安排全面的眼科檢查，及早發現眼睛問題。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/2078dbb368b52cce.png',
    title: '保持均衡飲食',
    text: '減少吃高飽和脂肪和高膽固醇食物，多攝取葉黃素、玉米黃素、Omega-3、維他命C及E等營養。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/1edb292db5fb5f21.png',
    title: '配戴太陽眼鏡\n以避免眼睛暴曬',
    text: '眼睛長時間受紫外線照射，可能增加患上黃斑病變機會。',
  },
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: '症狀',
    anchorLink: '/medical-service/maculopathy#sympotm',
  },
  {
    anchorName: '自我檢查',
    anchorLink: '/medical-service/maculopathy#inspect',
  },
  {
    anchorName: '乾性黃斑病變',
    anchorLink: '/medical-service/maculopathy#able_maculopathy',
  },
  {
    anchorName: '濕性黃班病變',
    anchorLink: '/medical-service/maculopathy#wet_maculopathy',
  },
  {
    anchorName: '預防方法',
    anchorLink: '/medical-service/maculopathy#prevent',
  },
  {
    anchorName: '常見問題',
    anchorLink: '/medical-service/maculopathy#faq',
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
  <div class="maculopathy">
    <!-- 头部 -->
    <div class="maculopathy_header">
      <div>
        <div>
          <div>黃斑病變</div>
          <div>MACULAR DEGENERATION</div>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/228b1b2296c9c93d.png"
          />
          <img
            src="https://static.cmereye.com/imgs/2023/05/6a3241d38332501f.png"
          />
        </div>
      </div>
    </div>
    <div class="maculopathy_nav">
      <!-- 什麼是黃斑病變？ -->
      <div>
        <div>什麼是黃斑病變？</div>
        <div>
          黃斑區域位於視網膜中央，集中九成的感光神經細胞，負責中心視力和顏色視力。因此，健康黃斑點對人看清事物尤其重要。黃斑病變是指黃斑點出現了病徵，引起視力下降、視物扭曲變形及中心視力變差。
        </div>
      </div>
      <!-- 黃斑病變的症狀 -->
      <div id="sympotm">
        <div class="maculopathy_color_title">黃斑病變的症狀</div>
        <div>
          <div v-for="(item, i) in sympotm" :key="i">
            <div><img :src="item.img" /></div>
            <div>{{ item.text }}</div>
          </div>
        </div>
      </div>
      <!-- 黃斑病變自我檢查 -->
      <div id="inspect">
        <div class="maculopathy_color_title">黃斑病變自我檢查</div>
        <div>
          <div>
            <div>阿姆斯勒方格表（AMSLER GRID）檢查</div>
            <div>使用方法：</div>
            <div><span>1</span>如有老花或近視，須配戴原有的眼鏡進行測試</div>
            <div><span>2</span>把方格表放在眼前距離30cm，光線要清晰及平均</div>
            <div><span>3</span>先用手蓋著左眼，右眼凝視方格表中心黑點</div>
            <div><span>4</span>重複步驟1至3檢查左眼</div>
          </div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/e46966e16b3b006a.png"
              alt="黃斑病變自我檢查"
            />
            <span>正常觀看方格為棋盤狀直線</span>
          </div>
        </div>
        <div>
          <div>正常觀看方格為棋盤狀直線</div>
          <div>
            若出現畫面模糊、扭曲或黑點擴散等非直線狀態，有機會是患上了黃斑病變，應立即諮詢你的眼科專科醫生。
          </div>
          <div>
            <div v-for="(item, i) in examine" :key="i">
              <div>{{ item.title }}</div>
              <div><img :src="item.img_up" :alt="item.title" /></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="43px"
                height="43px"
              >
                <image
                  x="0px"
                  y="0px"
                  width="43px"
                  height="43px"
                  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAArCAMAAADWg4HyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB/lBMVEVristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristristrist9mNHCz+rS3O+uv+JvjcyCnNP3+fz////U3fDH0uuLo9bc4/Ofs918mNG2xua9y+iFn9R5ldDL1u3g5vS7yed0kc6RqNj4+f35+v2Pptjl6vbq7vh3k89ujMzv8vmNpddujczZ4fK8yuiJotb2+PyKo9ZsisvK1ezY4PF6ldD9/v6JodW5yOe1xeWrveL09vvu8fnW3vFti8yvwOO0w+R7l9G2xeX8/P7+//+gtN7AzemxwePF0evH0+vS2+/f5vRxj83Bzun7/P53lM97ltFalhceAAAAZHRSTlMABDp0m8LP3dXJqYFODzaX7fu1WQY9vuFqE6L+0eN3AVf5BWD9rwNN/Joi8Gj3KGkM61BzzDI8kIgh+I9JnEufkip9WCuVAqFHjRlnidfiQ3XDkdKMyhWqcOkK5iAkpvXcfxEJ0Q/ryQAAAAFiS0dEbMwBMDsAAAAHdElNRQfnBREJFDN5f7PcAAACHUlEQVQ4y2NgQAWMTMwsrGzsHJxc3Dy8DPgAH79ACgIICgmL4FIpKpaCDsQlGLGplJSSTsECZJiwGCqbgh0IysmjKVVQTMEJpJRQlCqrpOABqmpIStU1kKVS09IzMlEUayKUamkjS2Rl5+Tk5KKarANTqsaJIp6XAwL5KGK6elC1+qhmFIDVFqIKikECw8CQCLUpRmC1xinEqDUBKZVnJ0ptiilQrVkKcWrNgWotiFQrDlTLSaTaFEsGNSti1fIwWMLZRcUlpahqy8orKqvg8nIIr1XX5OTU1iGrraoH0g2NMAXWDDZQVlMzSEVNC0JtaxuY0Q5Ta8tgB2V1gCVyOrtgart7ICK9MLX2DKJQVl8/VPEEqNqJEH7OJJhaBwZHGHMyVG7KVDDVBuVOmw5T4MQgAk/mM3KwgHpEODgzMHDAOTMxlTbPQoSvCwODK4I3G11pZylCUsANmNeQoqYSVemcaiQ5d2B6EEFO6iXISufOQ45iD1AC9kQS6J6PpHYBslJ2cL730kVWvBCuNA0l5XhD8qYPslj3IqjSxdORhX2hJaaBH7LodEjcLlmKLCjtDy/3UIqd6cuWA+NgBYoLrBEFT0AKKljZ0orCD0Qus4NS8IFglNpAPgSP0tAwtAJYwgqX0nADjILdVAarSm19bBUGY0QkhkpBey8cFVGUvgmKymjPGAY8IFY/ji0eqEwjQShRVI2BMFBLSsYmDADARi0RfmCoiQAAAABJRU5ErkJggg=="
                />
              </svg>
              <div><img :src="item.img_down" :alt="item.title" /></div>
            </div>
          </div>
          <div class="maculopathy_button_bg_color" @click="goWhatsApp()">
            <p>已有初步症狀？</p>
            <p>別害怕，立即WhatsApp預約治療</p>
          </div>
        </div>
      </div>
      <!-- 常見類型 -->
      <div>
        <div class="maculopathy_color_title">常見類型</div>
        <div>
          <div>黃斑病變</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="118px"
            height="20px"
          >
            <path
              fill-rule="evenodd"
              fill="rgb(105, 140, 215)"
              d="M117.042,9.921 L98.770,19.887 L103.400,11.174 L0.007,11.174 L0.007,7.920 L102.772,7.920 L98.533,0.290 L117.042,9.921 Z"
            />
          </svg>
          <div>
            <p>老年</p>
            <p>黃斑病變</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="158px"
              height="58px"
            >
              <path
                fill-rule="evenodd"
                fill="rgb(105, 140, 215)"
                d="M157.435,2.771 L143.811,18.556 L145.079,8.741 L1.252,57.986 L0.102,54.937 L143.306,5.905 L136.663,0.278 L157.435,2.771 Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="145px"
              height="79px"
            >
              <path
                fill-rule="evenodd"
                fill="rgb(105, 140, 215)"
                d="M145.000,78.999 L123.000,75.999 L131.215,72.348 L0.480,2.965 L2.787,0.668 L132.239,69.369 L133.000,60.999 L145.000,78.999 Z"
              />
            </svg>
          </div>
          <div>
            <div>
              <p>乾性</p>
              <p>黃斑病變</p>
            </div>
            <div>
              <p>濕性</p>
              <p>黃斑病變</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 老年黃斑病變 -->
      <div>
        <div class="maculopathy_color_title">老年黃斑病變</div>
        <div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/ebb756d32ecc201b.png"
              alt=""
            />
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="896px"
              height="260px"
            >
              <path
                fill-rule="evenodd"
                stroke="rgb(222, 198, 146)"
                stroke-width="2px"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                fill="none"
                d="M28.000,257.999 L28.000,157.929 L1.005,129.046 L28.000,102.001 L28.000,0.999 L894.000,0.999 L894.000,257.999 L28.000,257.999 Z"
              />
            </svg>
            <div>
              主要成因是色素層及視網膜細胞退化，部分患者血管出現滲漏，甚至血管增生，嚴重破壞黃斑點的感光細胞，導致視力受損。患上老年黃斑病變的人口隨著年齡增加，大於50歲的人群中，每100個就有1至2名黃斑退化患者。
            </div>
          </div>
        </div>
      </div>
      <!-- 老年黃斑病變分為乾性和濕性︰ -->
      <div>
        <div class="maculopathy_color_title">老年黃斑病變分為乾性和濕性︰</div>
        <div id="able_maculopathy">
          <div>乾性黃斑病變</div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/ff4d52af6af21a3e.png"
                alt="乾性黃斑病變"
              />
            </div>
            <div>
              <div>
                香港每年黃斑病變患者中有九成屬於乾性。乾性黃斑病變是指黃斑區細胞退化並形成積聚代謝物，在黃斑區部下形成玻璃疣，逐步引致視網膜色素上皮萎縮。
              </div>
              <div>
                多數患者早期並沒有明顯病徵，隨著病情發展，黃斑功能逐漸減弱，視力慢慢下降，但一旦病情惡化，便有機會發展為濕性黃斑病變，而濕性黃斑病變可導致視力永久喪失。目前尚未有針對乾性黃斑退化的根治的方法，需要透過定期追蹤病情，以確保病患不會惡化。
              </div>
            </div>
          </div>
        </div>
        <div id="wet_maculopathy">
          <div>濕性黃班病變</div>
          <div>
            <div>
              <img
                src="https://static.cmereye.com/imgs/2023/05/a7c511844cb612a3.png"
                alt="濕性黃班病變"
              />
            </div>
            <div>
              <div>
                濕性黃斑部病變約佔所有病例的一成。患者黃斑點視網膜下出現異常的血管生長，若這些血管爆裂，會導致出血及結疤，使感光細胞永久受損。
              </div>
              <div>
                這類病變發病較迅速，對造成中心視野缺損。濕性病變患者常出現其中一隻眼突然發生視功能障礙，另一隻眼正常或已處於病變早期，但幾年後也發生同樣病變。濕性老年黃斑病變可以短時間內造成嚴重視力衰退，有機會於數天內令視力嚴重受損；因此如有懷疑症狀，應立即聯絡眼科醫生。
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 老年黃斑病變成因s -->
      <div>
        <div class="maculopathy_color_title">老年黃斑病變成因</div>
        <div>
          <div v-for="(item, i) in factor" :key="i">
            <div><img :src="item.img" /></div>
            <div>{{ item.text }}</div>
          </div>
        </div>
      </div>
      <!-- 老年黃斑病變治療 -->
      <div>
        <div class="maculopathy_color_title">老年黃斑病變治療</div>
        <div>
          <div>
            <div>激光光凝凝固</div>
            <div>
              利用激光的熱能，去除視網膜下增生的血管，盡量保存未受影響、黃斑病變區內的視網膜。但由於熱力激光並沒有選擇性，病變位置與黃斑點中央需要有一定距離，否則在燒毀增生血管的同時難免會破壞周邊組織，可引致視功能退化或失明，故此治療方法只適用於少數黃斑退化患者。
            </div>
          </div>
          <div>
            <div>光動力療法</div>
            <div>
              這個把光敏劑注射到血液內，光敏劑選擇性地積聚在視網膜下不正常的血管上，經一種非熱能激光活化後，光敏劑便能在不影響視網膜其他正常組織的情況下，堵塞這些不正常增生的血管，從而控制病情惡化、改善患者視功能、縮細黑影以及糾正視覺影像扭曲的情況。然而，此療法不能恢復失去了的視功能。光動力療法對治療PCV有良好效果。
            </div>
          </div>
          <div>
            <div>類固醇玻璃體注射</div>
            <div>
              曲安奈德是一種鹽皮質類固醇，能減少眼內血管對視網膜屏障的破壞。類固醇玻璃體注射須表面麻醉，並在無菌環境下進行。這注射一般可在診所進行，而醫生將採取一切預防措施，減低感染風險。
            </div>
          </div>
          <div>
            <div>抗血管內皮生長因子玻璃體注射</div>
            <div>
              以抗血管內皮生長因子注射來控制濕性黃斑退化是現時主流的治療方法。研究顯示可有效防止視功能進一步衰退，以及能改善視功能。現時普遍使用的藥物有「癌思停」及「樂舒晴」，研究顯示這兩種藥物的治療成效相約。「愛亮眼」是目前治療濕性黃斑退化最新的藥物。有些患者注射了其中一種抗血管內皮生長因子藥物無效，改用另一種，反而有不錯的成效。
            </div>
          </div>
        </div>
        <div class="maculopathy_button_bg_color" @click="callTel()">
          <p>致電預約治療</p>
          <p>讓醫生為您選擇合適的治療方案</p>
        </div>
      </div>
      <!-- 預防黃斑病變 -->
      <div id="prevent">
        <div class="maculopathy_color_title">預防黃斑病變</div>
        <div>
          <div v-for="(item, i) in prevent" :key="i">
            <div><img :src="item.img" :alt="item.text" /></div>
            <div>{{ item.title }}</div>
            <div>{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div id="faq">
        <div class="maculopathy_color_title">常見問題</div>
        <div>
          <PageCollapse
            :answer="meetArr"
            :downarr="'maculopathy'"
            :style="{ '--subassembly-color': '#cfb278' }"
          />
        </div>
      </div>
    </div>
    <div>
      <rightSidesNavigation :service-navigation="serviceNavigation" />
    </div>
    <!-- 下载 -->
    <div class="dow">
      <div>
        <a href="../../assets/pdf/maculopathy.pdf" download="黃斑病變.pdf">
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt=""
              srcset=""
            />
          </div>
          <div>
            <p>黃斑病變</p>
            <p>下載小冊子</p>
          </div>
        </a>
      </div>
    </div>
    <!-- 表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#dec692;'}`"
    />
  </div>
</template>
<style lang="scss" scoped>
.maculopathy_nav {
  // margin: 0 300px;
  max-width: 1313px;
  margin: auto;

  // 什麼是黃斑病變？
  & > div:nth-child(1) {
    margin-top: 253px;
    margin-left: 41px;

    & > div:nth-child(1) {
      font-family: 'NotoSansHK-Medium';
      font-size: 50px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 52px;
      letter-spacing: 0px;
      color: #a49b88;
      margin-bottom: 100px;
    }

    & > div:nth-child(2) {
      margin-left: 13px;
      font-family: 'NotoSansHK-Regular';
      font-size: 25px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 42px;
      letter-spacing: -1px;
      color: #a49b88;
    }
  }

  // 黃斑病變的症狀
  & > div:nth-child(2) {
    margin-top: 274px;

    & > div:nth-child(2) {
      margin-top: 80px;
      display: flex;
      justify-content: space-between;

      & > div {
        & > div:nth-child(2) {
          margin-top: 40px;
          white-space: pre-wrap;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 32px;
          letter-spacing: 0px;
          color: #a49b88;
          text-align: center;
        }
      }
    }
  }

  // 黃斑病變自我檢查
  & > div:nth-child(3) {
    margin-top: 180px;

    & > div:nth-child(2) {
      margin-top: 84px;
      display: flex;
      justify-content: space-between;

      & > div:nth-child(1) {
        & > div:nth-child(1) {
          font-family: 'NotoSansHK-Medium';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 52px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(2) {
          width: 163px;
          height: 42px;
          border-radius: 42px;
          background-color: #bfa876;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #ffffff;

          display: flex;
          justify-content: center;
          align-items: center;

          margin-top: 75px;
          margin-bottom: 62px;
        }

        & > div:nth-child(3),
        & > div:nth-child(4),
        & > div:nth-child(5),
        & > div:nth-child(6) {
          display: flex;
          align-items: center;
          margin-bottom: 67px;
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #515151;

          & > span {
            margin-right: 15px;
            width: 34px;
            height: 34px;
            background-color: #bfa876;
            border-radius: 50%;
            color: #fff;

            display: flex;
            justify-content: center;
            align-items: center;

            font-family: 'Metropolis-Bold';
            font-size: 26px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 34px;
            letter-spacing: 0px;
            color: #ffffff;
          }
        }
      }

      & > div:nth-child(2) {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > span {
          margin-top: 28px;

          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 34px;
          letter-spacing: 0px;
          color: #777777;
        }
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 28px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 34px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(2) {
        font-family: 'NotoSansHK-Regular';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 34px;
        letter-spacing: 0px;
        color: #515151;
        margin-top: 68px;
        margin-bottom: 50px;
      }

      & > div:nth-child(3) {
        display: flex;
        justify-content: space-between;

        & > div {
          background-color: #ffffff;
          border: solid 2px #e3dcce;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;

          & > div:nth-child(1) {
            width: 237px;
            height: 54px;
            background: #bfa876;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
          }

          & > div:nth-child(2) {
            margin-top: 16px;
          }

          & > svg:nth-child(3) {
            position: absolute;
            top: 51%;
          }

          & > div:nth-child(4) {
            margin-top: 12px;
            margin-bottom: 14px;
          }
        }

        & > div:nth-child(2) {
          & > div:nth-child(1) {
            background: #b19a68;
          }
        }

        & > div:nth-child(3) {
          & > div:nth-child(1) {
            background: #a48d5d;
          }
        }

        & > div:nth-child(4) {
          & > div:nth-child(1) {
            background: #8f7848;
          }
        }

        & > div:nth-child(5) {
          & > div:nth-child(1) {
            background: #826b3a;
          }
        }
      }

      & > div:last-child {
        margin-top: 102px;
      }
    }
  }

  // 常見類型
  & > div:nth-child(4) {
    margin-top: 180px;

    & > div:nth-child(2) {
      margin-top: 91px;
      padding: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      & > div:nth-child(1),
      & > div:nth-child(3) {
        width: 292px;
        height: 291px;
        background: #a18a5a;
        border-radius: 50%;

        font-family: 'NotoSansHK-Bold';
        font-size: 54px;
        font-weight: 700;
        font-stretch: normal;
        line-height: 64px;
        letter-spacing: 0px;
        color: #ffffff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      & > div:nth-child(3) {
        background: #85a1c9;
        margin-left: 30px;

        font-family: 'NotoSansHK-Bold';
        font-size: 50px;
        font-weight: 700;
        font-stretch: normal;
        line-height: 64px;
        letter-spacing: 0px;
        color: #ffffff;
      }

      & > div:nth-child(4) {
        display: flex;
        flex-direction: column;
        margin-right: 40px;
      }

      & > div:nth-child(5) {
        & > div {
          width: 209px;
          height: 209px;
          background: #a4b9d7;
          border-radius: 50%;

          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          font-family: 'NotoSansHK-Bold';
          font-size: 39px;
          font-weight: 500;
          font-stretch: normal;
          line-height: 50px;
          letter-spacing: 0px;
          color: #ffffff;
        }

        & > div:nth-child(1) {
          margin-bottom: 42px;
        }
      }
    }
  }

  // 老年黃斑病變
  & > div:nth-child(5) {
    margin-top: 180px;

    & > div:nth-child(2) {
      margin-top: 97px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      align-items: center;

      & > div:nth-child(1) {
        position: absolute;
      }

      & > div:nth-child(2) {
        margin-left: 428px;
        position: relative;

        display: flex;
        flex-direction: column;

        & > div:nth-child(2) {
          position: absolute;
          padding: 50px 38px 50px 64px;

          font-family: 'NotoSansHK-Regular';
          font-size: 26px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 44px;
          letter-spacing: 0px;
          color: #555555;
        }
      }
    }
  }

  // 老年黃斑病變分為乾性和濕性︰
  & > div:nth-child(6) {
    margin-top: 128px;

    & > div:nth-child(2) {
      margin-top: 107px;
    }

    & > div:nth-child(2),
    & > div:nth-child(3) {
      display: flex;
      flex-direction: column;

      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Bold';
        font-size: 34px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 44px;
        letter-spacing: 0px;
        color: #515151;
        text-align: center;
        margin-bottom: 20px;
      }

      & > div:nth-child(2) {
        position: relative;
        margin-bottom: 180px;
        display: flex;
        justify-content: space-between;

        & > div:nth-child(1) {
          width: 550px;
          height: 360px;
          background: #e4ebf4;
          z-index: 5;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          top: -58px;
        }

        & > div:nth-child(2) {
          width: 1150px;
          height: 370px;
          background: #f5f4f3;
          position: absolute;
          right: 0;
          padding-left: 420px;
          padding-top: 40px;
          padding-right: 40px;

          font-family: 'NotoSansHK-Regular';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #515151;

          & > div:nth-child(2) {
            margin-top: 40px;
          }
        }
      }
    }

    & > div:nth-child(3) {
      & > div:nth-child(2) {
        flex-direction: row-reverse;

        & > div:nth-child(2) {
          position: absolute;
          left: 0;
          padding-left: 40px;
          padding-top: 40px;
          padding-right: 415px;
          letter-spacing: -1px;
        }
      }
    }
  }

  // 老年黃斑病變成因
  & > div:nth-child(7) {
    margin-top: 180px;

    & > div:nth-child(2) {
      margin-top: 110px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: column;

        & > div:nth-child(2) {
          white-space: pre-wrap;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 28px;
          height: 60px;
        }
      }

      & > div:nth-child(1) {
        margin-left: 135px;
      }

      & > div:nth-child(3) {
        margin-right: 145px;
      }

      & > div:nth-child(n + 4) {
        margin-top: 96px;
      }
    }
  }

  // 老年黃斑病變治療
  & > div:nth-child(8) {
    margin-top: 180px;

    & > div:nth-child(2) {
      margin-top: 95px;
      margin-bottom: 120px;

      & > div {
        margin-bottom: 100px;

        & > div:nth-child(1) {
          margin-bottom: 30px;
          width: 257px;
          height: 65px;
          background: #e7decd;
          border-radius: 0 34px 0 0;
          font-family: 'NotoSansHK-Bold';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 0px;
          color: #916b29;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-left: 40px;
        }

        & > div:nth-child(2) {
          font-family: 'NotoSansHK-Regular';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;
        }
      }

      & > div:nth-child(3) {
        & > div:nth-child(1) {
          width: 320px;
        }
      }

      & > div:nth-child(4) {
        & > div:nth-child(1) {
          width: 500px;
        }
      }
    }
  }

  // 預防黃斑病變
  & > div:nth-child(9) {
    margin-top: 180px;

    & > div:nth-child(2) {
      margin-top: 130px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > div {
        width: 380px;
        height: 670px;
        background: #fff;
        box-shadow: 7px 7px 29px 0px rgba(6, 0, 1, 0.12);
        border-radius: 170px 170px 0px 0px;

        & > div:nth-child(2) {
          height: 150px;
          font-family: 'NotoSansHK-Medium';
          font-size: 28px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #916b29;

          display: flex;
          justify-content: center;
          align-items: center;
          white-space: pre-wrap;
          text-align: center;
        }

        & > div:nth-child(3) {
          font-family: 'NotoSansHK-Regular';
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 38px;
          letter-spacing: 0px;
          color: #515151;

          padding: 0 40px;
        }
      }

      & > div:nth-child(n + 4) {
        margin-top: 100px;

        & > div:nth-child(2) {
          height: 130px;
        }
      }
    }
  }

  & > :last-child {
    margin-top: 180px;

    & > div:first-child {
      margin-bottom: 90px;
    }
  }
}

.maculopathy_button_bg_color {
  cursor: pointer;
  width: 580px;
  height: 140px;
  margin: auto;

  background-image: linear-gradient(-90deg, #dec692 0%, #e9d7b0 100%),
    linear-gradient(#eda2a6, #eda2a6);
  background-blend-mode: normal, normal;
  border-radius: 14px;

  font-family: 'NotoSansHK-Regular';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.maculopathy_color_title {
  text-align: center;
  font-family: 'NotoSansHK-Bold';
  font-size: 38px;
  font-weight: 700;
  font-stretch: normal;
  line-height: 52px;
  letter-spacing: 0px;
  color: #a18a5a;
}

.maculopathy_header {
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
        font-weight: 700;
        font-stretch: normal;
        line-height: 0.9;
        letter-spacing: 1px;
        color: #dec692;
        position: sticky;
      }

      & > div:nth-child(2) {
        position: relative;
        z-index: 5;
      }

      font-family: 'DINCondensed-Bold';
      font-size: 131px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 1.2;
      text-align: right;
      letter-spacing: -4px;
      color: #dec692;
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
  margin-top: 150px;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    & > a {
      width: 62.5%;
      height: 202px;
      background: #dec692;
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
  }
}
</style>
