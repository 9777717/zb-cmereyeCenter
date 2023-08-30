<script lang="ts" setup>
import { getPdf } from '@/assets/js/common'
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '飛蚊症｜希瑪眼科｜醫療服務',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心提供全面飛蚊症檢查及治療。飛蚊症學名為玻璃體混濁。隨着眼睛老化、玻璃體萎縮，便會形成不同形狀的黑點或暗影，有的像小雨點、圓圈、雲、網狀、變形蟲或蜘蛛，如同有蚊子在眼前飛舞。飛蚊症的成因是因眼睛退化、眼睛外傷、眼後發炎、眼球內出血，以及視網膜疾病引致。飛蚊症種類分為良性飛蚊和恐性飛蚊。一般患飛蚊症的高危人士包括︰50歲以上人士、深近視、長時間看電子螢幕、有視網膜脫落家族病史，及糖尿病患者。治療飛蚊症的方法有兩種，有激光治療和玻璃體切除治療。',
    },
    {
      name: 'keywords',
      content:
        '飛蚊症 飛蚊症檢查 飛蚊 飛蚊症成因 飛蚊症改善方法 飛蚊症初期 飛蚊症治療方法 眼睛黑點 飛蚊症閃光 玻璃體 玻璃體退化 飛蚊症手術 飛蚊症症狀 玻璃體混濁 飛蚊症測試 飛蚊症病徵 改善飛蚊症 玻璃體脫落 治療飛蚊症 飛蚊症檢查 飛蚊閃光 飛蚊症黑點 眼球玻璃體 激光治療飛蚊症 飛蚊症激光 眼睛檢查 眼睛疾病 眼科醫生 香港眼科 希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 希瑪 希瑪醫療集團 希瑪醫療 ',
    },
    {
      name: 'description',
      content:
        'Hong Kong CMER Eye Center provides optometry and comprehensive eye examinations. Medical services include: cataract, glaucoma, strabismus, amblyopia, ocular surface diseases, corneal diseases, macular degeneration, retinal detachment, orbital, ophthalmic plastic surgery and eye tumors, myopia control and ophthalmic services. CMER Eye Center has a total of 10 eye clinics, with 22 ophthalmologists, providing professional eye medical services, eye examinations and eye medical services in Hong Kong. The ophthalmologist team consists of 22 ophthalmologists, led by ophthalmologist Dr. LAM Shun Chiu, Dennis.',
    },
    {
      name: 'keywords',
      content:
        'CMER Eye Center Hong Kong CMER Eye Center Ophthalmology Specialist Clinic Ophthalmology Specialist Center Vision Center Comprehensive Eye Exam CMER Eye Hong Kong Eye Treatment Solutions Eye Clinic',
    },
  ],
}))
// 传递背景色
const backgd = [
  '#9cc4e2;',
  '-webkit-linear-gradient(to right, #9cc4e2, #bfd7ea);',
  'linear-gradient(to right, #9cc4e2, #bfd7ea);',
]
// 飛蚊症患者看見的浮游物︰
const seston = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/267899886dbaf8d9.png',
    text: '小雨點',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/225dea4ef8edb2ba.png',
    text: '圓圈',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d5da51be0ea0658a.png',
    text: '雲',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/59f096cb588e2704.png',
    text: '網狀',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d350bf2ddff168ce.png',
    text: '變形蟲',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/f3bb62aace9740a1.png',
    text: '蜘蛛',
  },
]
// 飛蚊症成因
const factor = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/54e4419baae2b032.png',
    title: '眼睛退化',
    text: '眼睛老化引起的飛蚊症屬最常見，隨著年紀增加，眼睛玻璃體退化和變得萎縮，逐漸脫離原本緊密結合的視網膜，而且裡面的玻璃體纖維可能變性，變得混濁。這些混濁的物質，就會在視網膜上投影出許多黑色的小點，成為飛蚊症患者看到的景象。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/b8098843aeb81226.png',
    title: '眼睛外傷、眼後發炎',
    text: '如果眼睛受過外傷，或曾經有眼後發炎，都有可能導致有雜質進到玻璃體內引致眼睛會看見「飛蚊」。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/bdb733bc982c8bbe.png',
    title: '眼球內出血',
    text: '糖尿病視網膜病變、高血壓視網膜病變、眼中風等疾病，也都可以導致眼球出血並引致飛蚊症，若是這類狀況，就要趕緊就醫治療。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/bb13ed69d5a61654.png',
    title: '視網膜疾病',
    text: '視網膜出現裂孔、剝離、退化等均可能引致飛蚊症。如果是視網膜疾病造成的飛蚊症，必須立刻求醫，否則嚴重時可能有失明的風險。',
  },
]
// 飛蚊症高危人士
const highRisk = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/39afb10f87a7de13.png',
    text: '50歲以上',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/10a1afee083e56b8.png',
    text: '深近視（近視600度或以上）',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/f2d9ff06f4237aa6.png',
    text: '長時間看電子螢幕',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/d3b82336979411ba.png',
    text: '眼睛曾受過傷、眼睛發炎',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/ee23c5620bd1b8d8.png',
    text: '有視網膜脫落家族病史',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/8eabb04d3e7fb31b.png',
    text: '糖尿病患者',
  },
]
// 預防飛蚊症s
const prevent = [
  {
    img: 'https://static.cmereye.com/imgs/2023/05/1ae9e363893ea9bf.png',
    text: '觀看電子產品螢幕20分鐘，建議雙眼休息20秒，或者遠望20呎（約50厘米）外的景觀。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/174add34da3b109f.png',
    text: '使用智能電話、平板電腦及電腦時，建議分別保持30厘米、40厘米、50厘米的距離。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/3c1f9464c5101f8b.png',
    text: '在光線充足且穩定不閃爍的環境閱讀。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/512837cc2419bc81.png',
    text: '在猛烈的陽光下，最好戴上能遮擋紫外光和品質良好的太陽眼鏡。',
  },
  {
    img: 'https://static.cmereye.com/imgs/2023/05/b1c59499606c7ee4.png',
    text: '避免吸煙、飲酒等不良習慣，養成早睡早起的習慣，讓眼睛有充足休息時間。',
  },
]
// 常見問題
const meetArr: any = [
  {
    title: 'Q：出現飛蚊，什麼時候應該求醫？',
    agree:
      '大部分的飛蚊都是良性的，基本上對眼睛無害，但若嚴重影響日常生活，或突然出現大量飛蚊、視野出現異常黑點，建議盡快安排眼科檢查，確定「飛蚊」出現的原因，及早診斷、預防併發症。',
  },
  {
    title: 'Q：飛蚊症患者眼前飛蚊突然變多怎麼辦？',
    agree:
      '如果飛蚊症數量突然增加，並伴隨有閃光、視野缺損、視力模糊等，即可能是嚴重眼疾先兆，建議盡快求醫。',
  },
  {
    title: 'Q：點眼藥水或吃藥可以治療飛蚊症嗎？',
    agree:
      '病理性的飛蚊症在療程中可能會使用消炎用的眼藥水，以助患者紓緩不適；但是退化性的飛蚊症與發炎無關，因此點眼藥水用處不大。',
  },
]
// 内部导航
const serviceNavigation = [
  {
    anchorName: '飛蚊症',
    anchorLink: '/medical-service/muscaeVolitantes#muscaeInfo',
  },
  {
    anchorName: '成因',
    anchorLink: '/medical-service/muscaeVolitantes#factor',
  },
  {
    anchorName: '類別',
    anchorLink: '/medical-service/muscaeVolitantes#category',
  },
  {
    anchorName: '高危人士',
    anchorLink: '/medical-service/muscaeVolitantes#highRisk',
  },
  {
    anchorName: '治療',
    anchorLink: '/medical-service/muscaeVolitantes#means',
  },
  {
    anchorName: '預防方法',
    anchorLink: '/medical-service/muscaeVolitantes#prevent',
  },
  {
    anchorName: '常見問題',
    anchorLink: '/medical-service/muscaeVolitantes#faq',
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
  <div class="muscaeVolitantes">
    <div class="volitantes">
      <!-- 头部 -->
      <div>
        <div>
          <div>飛蚊症</div>
          <div>EYE FLOATERS</div>
          <div>EYE FLOATERS</div>
          <div>EYE FLOATERS</div>
        </div>
        <!-- <div>
          <img
            src="https://static.cmereye.com/imgs/2023/05/5a4b6219f26dba3e.png"
          />
          <img
            src="https://static.cmereye.com/imgs/2023/05/0e37066bfcab4331.png"
          />
        </div> -->
      </div>
    </div>
    <div class="muscaeVolitantes-nav">
      <serviceNav :arrData="serviceNavigation" :pageName="'muscaeVolitantes'" />
    </div>
    <div class="muscaeNav">
      <!-- 什麼是飛蚊症？ -->
      <div id="muscaeInfo">
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/06/eaed11ab4604268b.png"
            alt="什麼是飛蚊症"
          />
        </div>
        <div>
          <div>什麼是飛蚊症？</div>
          <div>
            「飛蚊症」的學名為玻璃體混濁。隨着眼睛老化、玻璃體萎縮，變得液化，逐漸積聚成塊，便會形成不同形狀的黑點或暗影，飛舞飄動；有的像小雨點、圓圈、雲、網狀、變形蟲或蜘蛛，如同有蚊子在眼前飛舞，尤其在光線充足、單色的背景上更為明顯。
          </div>
        </div>
      </div>
      <!-- 飛蚊症患者看見的浮游物︰ -->
      <div>
        <div class="caption_text_color">飛蚊症患者看見的浮游物︰</div>
        <div>
          <div v-for="(item, index) in seston" :key="index">
            <div><img :src="item.img" :alt="item.text" /></div>
            <div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
        <div class="button_bg_text_color" @click="goWhatsApp()">
          經常看見飛蚊<br />WhatsApp 預約眼睛檢查
        </div>
      </div>
      <!-- 飛蚊症成因 -->
      <div id="factor">
        <div>
          <PageNavTitle :title="'飛蚊症成因'" />
        </div>
        <div>
          <div v-for="(item, index) in factor" :key="index">
            <div><img :src="item.img" :alt="item.title" /></div>
            <div>
              <div>{{ item.title }}</div>
              <div>{{ item.text }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 飛蚊症種類 -->
      <div id="category">
        <PageNavTitle :title="'飛蚊症種類'" />
        <div>
          <div>良性飛蚊</div>
          <div>
            <div>
              大部分的飛蚊都是良性的，良性飛蚊又稱為生理性飛蚊，基本上對眼睛無害，包括以下兩類：
            </div>
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="44px"
                  height="372px"
                >
                  <image
                    x="0px"
                    y="0px"
                    width="44px"
                    height="372px"
                    xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAF0CAMAAABv8CsdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC0FBMVEX////P2/WayvuQttPP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/WQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttOQttPP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XP2/XN2vWayvuQttOfwNnT4u3////E2Ojp8Pauyd/h7PORuNb4+vyXu9a80+Wmxdy1zuLa5/Dw9fnL3eqL27/lAAAA3HRSTlMAAAAASLjsuYJKS7yoFB7BvfL5DDD0L/PAFyFPUI1Sw/dRJmqhyuTvyWkJa83MAmjp6GYhxknwRlf6+VZKQijxA8hsC+txbtTQLSlwbamm0c7uJPuMDuZiQNPbUazzcwZ1/Z0ZMr8x2tZ4Dw13BQQw9fT8TmT2Uyx58hF83dx6ATd7sh5hmsCZYB1j/sQHX+Ndwr4bQezqPlL490sgw2cqqKSC4VnHONVYroM0ENguW16AFoXlGD+84rsMOKfbcv5BQra1KDLLt/D6EDb1+AgqxJsKEln7/ZwBYdQJyZ02wQAAAAFiS0dEAIgFHUgAAAAHdElNRQfnBRAKCiCTehThAAAEw0lEQVR42u2b+XfUVBTHE4KAsghuoIBIwQ6d0qHQiqWKRdayiNaFCioDChS0QkUHsLQMUERh2BWQurcqCiJCXUEoKAgisomyPXidDJRp2f4FM5l05uXlJfPIOU/zw/v+MG1fPpNz7/clNz3n3giCTqLY+IYmTZo2FkUhscRmQFUzGvhGoOkmCrg5AC1atroZgNYUcBtwy62ieBsAbSjg21X4DgDaUsDtlDDuvEsJox0F3L4hwQ401nWMsh2pfBbv7nTP2U6dqTZF1Tla8LrhRsxgdjFzN7gb3A3uhnNg7gZ3g7vB3eBusHFDQpXUpeu9yS5XcreuKUnqginsTu0OEaWluE1hT490iKlnLw8ZzugGCcrMIMH39YZEue43wll9oImyH8DhB7OhqbL76uGHcqCFemegcL80aKmHPQjcX3+sJijLsm4lJQ4PGIiSofOyjMPp7hg8CF2/IMtGGA6OwUMSw7kN8FBDQrUGGA7T4OE08AgNfoQGHqnBj9LAj2lwHg3sejwKP0EDw+wnn6KHIRyVr+y6ixJWAn9aGE0Nj3lGeJYSfm6sVxDGUcHjn38hkuAEGnjiJO1CKkgMT45ddVNwUFMovjouBr/oSgTnvRS/rQoTwWORe/DlIdBSuVPRUjCtyIp9ZZiAwlLWdHN2+qt4+XptvCmbbyyMWT4yWzSDVHJnTiaxo2eSi7l31us4mlPoNX1MFM8uQdHSOcUWzxRJ8s+dN3+M4mNRwfw5c/2WD6DYV87FfxcSit0Tlp0c8i8Ed8M2zE4OSZC7YRtmJ4ckyN2wDbOTQxLkbtiG2ckhCXI3bMPs5JAEuRu2YXZySILcDdswOzkkQe6GbZidHJIgd8M2zE4OSZC7YRtmJ4ckyN2wDbOTQxLkbtiG2en/SFDXsipb8MbCkvSLJRPffGuR9ZSFd3FmIN49CyzJX2oK+5ctxxtzy1f4yXDZSlLLb9XbJPid1eRm4pq1RvjddWZtyvL3cLivxZTFOmzK4v08aKHVZSjsyYSW+sCPwB+iR2pCtXK4NlSHri2Ow+6eyHp9ONo4Dl9CFkfFpyzQ8Y1grM0cRs8dG+CQctETy/L5y7Dmir7dDbs3wB/pkqkPqj+uKl9Cl5M0eATJgGtY5z1Vgz8mwSEM/kSDc0lwEAsjTYOJu6cYeA3926XtImlQJxLFBd2Kr0L1mtBEr1NOXIsvVn6q7DphXOiK4cSqPvtcWE8MIkgIrvIL4Ut8TdlF+WqdAfVtUKIuJLC6y0hVYKTqx0YjK9cTwlXlL03MFjRc/tI8nA2H8fmeWbFLtBjp+iNzEwjs+ip+W81OBE9B7sGlm6Cl1nsRWJpUbsX6vtYXmc0BczawGS9fw03pQA9jYVxgUuzKvyGV3I2lJHbTNHIxd1cYhkl8W9wCGZakrVXfomhy1XeWgxP9vt/ww48RsPKnirUeqimLbducMWXB50W5G9wN7oZzYO4Gd4O7wd3gbvwXboji9p937Gixne6l+53VkRfHq3fSwLuqo6+ZV++mgH8B4Nc9e38DYB8FvB/8fkAU/wBgPwV8EPx5SBQPA3CQAj4CwNFjfynBHKGAjyvJ/f2P8nGcxroTUTdOUPl88tRpAE6fOkn3hr4onjkT+SQd/RdHHt/RrSDquwAAAABJRU5ErkJggg=="
                  />
                </svg>
              </div>
              <div>
                <div>
                  胎兒在出生前，眼球內的玻璃體充滿血管，血管內有血細胞。這些血管通常在胎兒出生前會被自然吸收。如果未能完全吸收，部分玻璃體的「血管殘留」在玻璃體內，便會出現飛蚊。
                </div>
                <div>
                  隨著年齡的增長，啫喱狀的玻璃體會逐漸發生變性，出現凝縮和液化 (
                  Liquefaction
                  )。部分玻璃體中的纖維在液化過程中聚合成絮狀、絲狀、絲狀或無色透明的浮游物，懸浮在液化的玻璃體中，形成飛蚊。年長人士和近視患者一般較常出現這些情況，而近視患者出現這些問題的年齡會較早。
                </div>
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/95fa8f20495db188.png"
                  alt=""
                />
                <img
                  src="https://static.cmereye.com/imgs/2023/05/00467483401c8769.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>惡性飛蚊</div>
          <div>
            <img
              src="https://static.cmereye.com/imgs/2023/05/70ece1913636ef3b.png"
              alt=""
            />
            <div>
              惡性飛蚊可以是一些嚴重眼疾的警告信號，包括後玻璃體脫落、視網膜退化及撕裂、糖尿眼或老年黃斑退化導致玻璃體出血、葡萄膜炎等，應及早治療。
            </div>
          </div>
        </div>
        <div class="button_bg_text_color" @click="callTel()">
          分辨良性/惡性飛蚊<br />
          致電預約檢查
        </div>
      </div>
      <!-- 飛蚊症高危人士 -->
      <div id="highRisk">
        <PageNavTitle :title="'飛蚊症高危人士'" />
        <div>
          <div>以下人士較大機會患上飛蚊症︰</div>
          <div>
            <div v-for="(item, index) in highRisk" :key="index">
              <div><img :src="item.img" :alt="item.text" /></div>
              <div>
                <div>{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 飛蚊症治療 -->
      <div id="means">
        <PageNavTitle :title="'飛蚊症治療'" />
        <div>
          <!-- 飛蚊症治療 -->
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="1280px"
                height="294px"
              >
                <image
                  x="0px"
                  y="0px"
                  width="1280px"
                  height="294px"
                  xlink:href="data:img/png;base64,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"
                />
              </svg>
              <svg width="401" height="385" viewBox="0 0 401 385" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200.859 381.395L206.456 373H390.859C395.27 373 398.859 369.411 398.859 364.999V9.99902C398.859 5.58838 395.27 2 390.859 2H10.8597C6.44828 2 2.85938 5.58838 2.85938 9.99902V364.999C2.85938 369.411 6.44828 373 10.8597 373H195.263L200.859 381.395ZM200.859 385L194.193 375H10.8597C5.33678 375 0.859375 370.522 0.859375 364.999V9.99902C0.859375 4.47607 5.33678 0 10.8597 0H390.859C396.382 0 400.859 4.47607 400.859 9.99902V364.999C400.859 370.522 396.382 375 390.859 375H207.526L200.859 385Z" fill="#91B5ED"/>
              </svg>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="https://static.cmereye.com/imgs/2023/05/e7d886f97050a60e.png"
                    alt="飛蚊症治療"
                  />
                </div>
                <div>
                  對於無併發症的良性飛蚊症，一般都只是觀察而不予治療。但部分病人無法忍受飛蚊症狀，嚴重者甚至會感到視功能受干擾且影響生活，則值得考慮治療。目前治療的方法主要有激光和玻璃體切除治療，其中微創玻璃體切除的風險較低，成效較好，成為越來越普遍用於治療症狀明顯飛蚊症的方法。
                </div>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="34px"
                  height="34px"
                >
                  <image
                    x="0px"
                    y="0px"
                    width="34px"
                    height="34px"
                    xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABOFBMVEUzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6UzX6X///85H7LQAAAAZnRSTlMAD7D4uBWJmJ9D+ftQKGMtAiwWCDIKwvddJODmL2LpmqnllaULx2An5OoxFwkHGG1NcMQajPr8UfWjtddb7AGO2Dazuw6HnTwhmT+FDWi0ZXXzcfa8Lus4/m9/m69PMKtTA3a6fgVtEbCNAAAAAWJLR0RnW9PpswAAAAd0SU1FB+cFEAsINc1T+L8AAAE+SURBVDjLzZPXVsJAEIaXYqEoCQTBhqgYEAUUBQXBXkDFil3B+r//IziZjQePJ8ZLmYucb2e/i91/J0LYlcPpcvfYGqIXQJ+90k+K017xeOHz2ytiYDAgur4UNWhSSAtbGuEhRKJMwyMYHbNSximwGNMEUdxKidLGJNMU0bSVkpiBV2dKpjCbtj5uYM6keS3x39n9Vhldz0jK5hbMnrqofb9GHsgrBi3FgGXueQoornQUlWKCalCOYJV7JaJyRwkWgAI/n5821rj3c7wr1WqFYX0jsrnF5Ngu7vzxk3Rf7e7tH0iq1es1SYelo2N5Nz3eUMQJ4Eoay1AKSIUMShe/AjulXM7EOX0bvGGkyyN2QXDJSpzILZqA78pYJqrANc/YzS3QZOWOlHuRfXh8kidotdstSc/lupzMl9e3949PbJY8E8Y6Q2kAAAAASUVORK5CYII="
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <div>激光治療</div>
            <div>
              用於把較大和集中的玻璃體浮游物打散，以改善及消除飛蚊症狀。過程約10至15分鐘，少有痛楚，可於局部麻醉下進行。但並不是所有患者都適合這種治療，如：「飛蚊」較鬆散或位置太接近黃斑或晶體，便不宜進行，以免導致白內障或黃斑受損等併發症。
            </div>
          </div>
          <div>
            <div>玻璃體<br />切除治療</div>
            <div>
              <div>
                <div>
                  用以治療玻璃體混濁，治療過程僅需15至20分鐘，傷口小（小於1mm），毋須縫線，復原期短。只需表面麻醉，在鞏膜（即眼白）位置製造兩個微創切口，一個作為切割入口，一個作為生理鹽水灌注通道。由於患者視神經沒有被麻醉，醫生能即時與患者溝通，確認是否已清除乾淨混濁的玻璃體。
                </div>
                <div>
                  此技術能切除混濁的玻璃體、恢復玻璃體腔內的屈光間質透明性，可與白內障治療同時進行，患者在清除混濁晶體的同時處理混濁的玻璃體，有助於術後進一步提升視力質素。
                </div>
              </div>
              <div>
                <img
                  src="https://static.cmereye.com/imgs/2023/05/aa0d0fc0cbca2315.png"
                  alt="切除治療"
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>傷口細、無需縫線、</p>
                <p>治療時間短、恢復快</p>
              </div>
              <div>
                <p>降低周圍組織損傷的風險</p>
                <p>屈光間質的透明性</p>
              </div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="325px"
                height="325px"
              >
                <image
                  x="0px"
                  y="0px"
                  width="325px"
                  height="325px"
                  xlink:href="data:img/png;base64,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"
                />
              </svg>
              <div>
                <p>玻璃體切除</p>
                <p>治療的<span>好處</span></p>
              </div>
            </div>
            <div>
              <div>
                <p>治療儀器定位系統有效、精細，</p>
                <p>降低周圍組織損傷的風險</p>
              </div>
              <div>能與其他治療同時進行</div>
            </div>
          </div>
          <div class="button_bg_text_color" @click="callTel()">
            致電預約{{'\n'}}了解治療方案
          </div>
        </div>
      </div>
      <!-- 預防飛蚊症 -->
      <div id="prevent">
        <PageNavTitle :title="'預防飛蚊症'" />
        <div>
          <div>
            不良的用眼習慣會誘發或加重飛蚊症症狀，預防飛蚊症建議由日常生活習慣開始。
          </div>
          <div>
            <div v-for="(item, index) in prevent" :key="index">
              <div>
                <div><img :src="item.img" :alt="item.text" /></div>
                <div>
                  <div>{{ item.text }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 常見問題 -->
      <div id="faq">
        <PageNavTitle :title="'常見問題'" />
        <div>
          <PageCollapse
            :answer="meetArr"
            :downarr="'muscaeVolitantes'"
            :style="{ '--subassembly-color': '#9cc4e2' }"
          />
        </div>
      </div>
    </div>
    <div>
      <!-- <rightSidesNavigation :service-navigation="serviceNavigation" /> -->
    </div>
    <!-- 下载 -->
    <div class="dow">
      <div>
        <div>
          <div @click.stop="getPdf('muscaeVolitantes.pdf','飛蚊症')">
            <img
              src="https://static.cmereye.com/imgs/2023/05/a7f10818e63e3e82.png"
              alt=""
              srcset=""
            />
          </div>
          <div @click.stop="getPdf('muscaeVolitantes.pdf','飛蚊症')">
            <p>飛蚊症</p>
            <p>下載小冊子</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 表单 -->
    <FormFooterInfo
      :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
      :co="`color:${'#9cc4e2;'}`"
    />
    <PageFooterMenu />
  </div>
</template>
<style lang="scss" scoped>
.muscaeVolitantes-nav{
  margin-top: 50px;
}
.muscaeNav {
  max-width: 1200px;
  margin: 100px auto -40%;
  transform: scale(0.9);
  transform-origin: center top;

  // 什麼是飛蚊症？
  & > div:nth-child(1) {
    display: flex;
    position: relative;

    & > div > img {
      position: relative;
      z-index: 5;
    }

    & > div:nth-child(1) {
      transform: scale(0.9);
    }

    & > div:nth-child(1)::after {
      content: '';
      width: 579px;
      height: 419px;
      background-color: #f2f2f2;
      border-radius: 28px;
      position: absolute;
      z-index: 1;
      left: 48px;
      bottom: -56px;
    }

    & > div:nth-child(2) {
      position: absolute;
      padding-left: 677px;
      padding-top: 62px;

      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Bold';
        font-size: 50px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 48px;
        letter-spacing: 0px;
        color: #697389;
      }

      & > div:nth-child(2) {
        margin-top: 48px;
        font-family: 'Noto Sans HK';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 46px;
        letter-spacing: 0px;
        color: #697389;
      }
    }
  }

  // 飛蚊症患者看見的浮游物︰
  & > div:nth-child(2) {
    margin-top: 236px;

    & > div:nth-child(2) {
      padding: 0 63px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 120px;

      & > div {
        width: 33.33333%;

        & > div:nth-child(2) {
          width: 258px;
          display: flex;
          justify-content: center;

          margin-top: 25px;

          font-family: 'Noto Sans HK';
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #697389;
        }
      }

      & > div:nth-child(2),
      & > div:nth-child(5) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      & > div:nth-child(3),
      & > div:nth-child(6) {
        display: flex;
        justify-content: right;
        flex-direction: column;
        align-items: center;
      }

      & > div:nth-child(n + 4) {
        margin-top: 120px;
      }
    }

    & > div:nth-child(3) {
      margin-top: 128px;
      width: 508px;
      height: 140px;
    }
  }

  // 飛蚊症成因
  & > div:nth-child(3) {
    margin-top: 180px;

    & > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;

      & > div:nth-child(2) {
        letter-spacing: 4px;
        padding: 0 30px;
      }
    }

    & > div:nth-child(2) {
      & > div {
        display: flex;
        position: relative;
        margin-top: 126px;

        & > div:nth-child(2) {
          position: absolute;
          padding-left: 350px;

          & > div:nth-child(1) {
            font-family: 'NotoSansHK-Medium';
            font-size: 32px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #6c899e;
            position: relative;
            padding-bottom: 30px;
          }

          & > div:nth-child(1)::after {
            content: '';
            width: 80px;
            height: 2px;
            background: #6c899e;
            display: inline-block;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          & > div:nth-child(2) {
            margin-top: 30px;
            font-family: 'Noto Sans HK';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 44px;
            letter-spacing: 0px;
            color: #515151;
          }
        }

        & > div:nth-child(1) {
          & > img {
            z-index: 5;
            position: relative;
          }
        }

        & > div:nth-child(1)::after {
          content: '';
          width: 300px;
          height: 220px;
          background-color: #f2f2f2;
          border-radius: 10px;
          bottom: -30px;
          left: 20px;
          display: inline-block;
          position: absolute;
          z-index: 1;
        }
      }

      & > div:nth-child(2n) {
        flex-direction: row-reverse;

        & > div:nth-child(2) {
          display: flex;
          text-align: left;
          flex-direction: column;
          padding-right: 350px;
          padding-left: 0;
          & > div:nth-child(1) {
            text-align: right;
          }
          & > div:nth-child(1)::after {
            left: auto;
            right: 0;
          }
        }

        & > div:nth-child(1)::after {
          right: 20px;
          left: auto;
          z-index: 1;
        }
      }
    }
  }

  // 飛蚊症種類
  & > div:nth-child(4) {
    margin-top: 230px;

    & > div:nth-child(2) {
      margin-top: 85px;
      margin-left: 30px;
      background-color: #ffffff;
      box-shadow: 3px 5px 35px 0px rgba(6, 0, 1, 0.12);

      & > div:nth-child(1) {
        width: 224px;
        height: 56px;
        background-image: linear-gradient(#90b6d3, #90b6d3),
          linear-gradient(#4071ff, #4071ff);
        background-blend-mode: normal, normal;
        font-family: 'NotoSansHK-Medium';
        font-size: 26px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 1.6;
        letter-spacing: 0px;
        color: #ffffff;
        display: flex;
        align-items: center;
        padding-left: 38px;
        border-radius: 0 56px 56px 0;
        position: relative;
        left: -30px;
        top: 30px;
      }

      & > div:nth-child(2) {
        margin-left: 40px;
        margin-bottom: 50px;

        & > div:nth-child(1) {
          margin-top: 60px;

          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 36px;
          letter-spacing: 0px;
          color: #515151;
        }

        & > div:nth-child(2) {
          display: flex;
          flex-direction: row;
          padding-bottom: 50px;

          & > div:nth-child(2) {
            width: 785px;
            margin-left: 24px;
            margin-right: 63px;

            font-family: 'Noto Sans HK';
            font-size: 22px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #515151;

            & > div:nth-child(1) {
              margin-top: 38px;
            }

            & > div:nth-child(2) {
              margin-top: 110px;
            }
          }

          & > div:nth-child(3) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      }
    }

    & > div:nth-child(3) {
      margin-top: 80px;
      margin-left: 30px;
      background-color: #ffffff;
      box-shadow: 3px 5px 35px 0px rgba(6, 0, 1, 0.12);

      & > div:nth-child(1) {
        width: 224px;
        height: 56px;
        background: #e4c0b6;
        font-family: 'NotoSansHK-Medium';
        font-size: 26px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #ffffff;
        display: flex;
        align-items: center;
        padding-left: 38px;
        border-radius: 0 56px 56px 0;
        position: relative;
        left: -30px;
        top: 30px;
      }

      & > div:nth-child(2) {
        margin-top: 60px;
        margin-left: 35px;
        padding-bottom: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & > div:nth-child(2) {
          margin-left: 43px;
          padding-right: 40px;
          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.8;
          letter-spacing: 0px;
          color: #515151;
        }
      }
    }

    & > div:nth-child(4) {
      margin-top: 100px;
      width: 508px;
      height: 140px;
    }
  }

  // 以下人士較大機會患上飛蚊症︰
  & > div:nth-child(5) {
    margin-top: 180px;

    & > div:nth-child(2) {
      margin-top: 105px;

      & > div:nth-child(1) {
        font-family: 'NotoSansHK-Medium';
        font-size: 26px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(2) {
        margin-top: 66px;
        padding-left: 68px;
        padding-right: 41px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        & > div {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          & > div:nth-child(2) {
            margin-top: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'NotoSansHK-Medium';
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 36px;
            letter-spacing: 0px;
            color: #515151;
          }
        }

        & > div:nth-child(n + 4) {
          margin-top: 130px;
        }
      }
    }
  }

  // 飛蚊症治療
  & > div:nth-child(6) {
    margin-top: 180px;

    & > div:nth-child(2) {
      margin-top: 92px;

      & > div:nth-child(1) {
        display: flex;
        flex-direction: column;
        position: relative;
        & > div:nth-child(1) {
          &>svg:nth-of-type(2){
            display: none;
          }
        }
        & > div:nth-child(2) {
          position: absolute;
          padding: 50px 59px;

          & > div:nth-child(1) {
            display: flex;
            position: relative;

            & > div:nth-child(1) {
              margin-right: 48px;
              width: 287px;
            }

            & > div:nth-child(2) {
              width: 765px;
              margin-top: 6px;
              font-family: 'Noto Sans HK';
              font-size: 22px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 44px;
              letter-spacing: 0px;
              color: #515151;
            }
          }

          & > div:nth-child(2) {
            position: absolute;
            right: 35px;
            bottom: 40px;
          }
        }
      }

      & > div:nth-child(2),
      & > div:nth-child(3) {
        margin-top: 80px;
        display: flex;
        background: #f2f2f2;
        position: relative;

        & > div:nth-child(1) {
          width: 228px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'NotoSansHK-Medium';
          font-size: 32px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 50px;
          letter-spacing: 0px;
          color: #ffffff;
          text-align: center;
        }

        & > div:nth-child(2) {
          position: absolute;
          margin-left: 277px;
          font-family: 'Noto Sans HK';
          font-size: 22px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 1.65;
          letter-spacing: -0.05em;
          color: #515151;
          padding-right: 52px;
          text-align: justify;
        }
      }

      & > div:nth-child(2) {
        & > div:nth-child(1) {
          height: 211px;
          background: #90b6d3;
        }

        & > div:nth-child(2) {
          line-height: 2;
          padding-top: 31px;
        }
      }

      & > div:nth-child(3) {
        & > div:nth-child(1) {
          height: 556px;
          background: #e4c0b6;
        }

        & > div:nth-child(2) {
          padding: 53px 0;
          display: flex;

          & > div:nth-child(1) {
            width: 435px;
            margin-right: 60px;

            & > div:nth-child(1) {
              margin-bottom: 49px;
              line-height: 1.8;
            }
          }

          & > div:nth-child(2) {
            display: flex;
            align-items: center;
          }
        }
      }

      & > div:nth-child(4) {
        margin-top: 163px;
        display: flex;
        justify-content: center;

        & > div:nth-child(1),
        & > div:nth-child(3) {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          & > div {
            width: 425px;
            height: 129px;
            background: #90b6d3;
            font-family: 'Noto Sans HK';
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 1.6;
            letter-spacing: 0px;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            flex-direction: column;
          }
        }

        & > div:nth-child(2) {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin: 0 20px;

          & > div:nth-child(2) {
            position: absolute;
            font-family: 'NotoSansHK-Medium';
            font-size: 37px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 42px;
            letter-spacing: 0px;
            color: #6c899e;

            & > p > span {
              color: #d8a597;
            }
          }
        }
      }

      & > div:nth-child(5) {
        width: 509px;
        height: 141px;
        margin-top: 167px;
      }
    }
  }

  // 預防飛蚊症
  & > div:nth-child(7) {
    margin-top: 155px;

    & > div:nth-child(2) {
      & > div:nth-child(1) {
        margin-top: 80px;
        padding-left: 27px;
        font-family: 'Noto Sans HK';
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 36px;
        letter-spacing: 0px;
        color: #515151;
      }

      & > div:nth-child(2) {
        margin-top: 80px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        & > div {
          transform: scale(0.9);

          & > div {
            width: 375px;
            height: 501px;
            background-color: #ffffff;
            box-shadow: 4px 8px 19px 1px rgba(0, 0, 0, 0.15);
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            & > div:nth-child(1) {
              & > img {
                width: 100%;
              }
            }

            & > div:nth-child(2) {
              padding: 0 24px;
              padding-top: 27px;
              font-family: 'Noto Sans HK';
              font-size: 22px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 1.6;
              letter-spacing: -1px;
              color: #515151;
            }
          }
        }

        & > div:nth-child(n + 4) {
          margin-top: 100px;
        }

        & > div:nth-child(4) {
          margin-left: 207px;
        }

        & > div:nth-child(5) {
          margin-right: 207px;
        }
      }
    }
  }

  // 常见问题
  & > div:nth-child(8) {
    margin-top: 180px;

    & > div:nth-child(2) {
      margin-top: 108px;
    }
  }
}

// 点击按钮 样式
.button_bg_text_color {
  // background-image: linear-gradient(-90deg, #7bb3db 0%, #add0e5 100%),
  //   linear-gradient(#eda2a6, #eda2a6);
  background-blend-mode: normal, normal;
  border-radius: 20px;

  text-align: center;
  margin: auto;

  font-family: 'Noto Sans HK';
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 50px;
  letter-spacing: 0px;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-shadow: 0 2px 5px #6aa0d6;
  &::before {
    content: "";
    position: absolute;
    top: -100%;
    left: -100%;
    bottom: -100%;
    right: -100%;
    background: linear-gradient(45deg,  #6aa0d6 0%, #fffde5 100%);
    background-size: 100% 100%;
    animation: bgposition 5s infinite linear alternate;
    z-index: -1;
  }
}

//  没有svg的文字标题
.caption_text_color {
  text-align: center;
  font-family: 'NotoSansHK-Bold';
  font-size: 36px;
  font-weight: normal;
  font-stretch: normal;
  line-height: 36px;
  letter-spacing: 0px;
  color: #6c899e;
}

// 头部样式
.volitantes {
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    max-width: 1080px;
    margin: 100px auto 0;
    // margin-top: 100px;
    // margin-left: 55vw;

    & > div:nth-child(1) {
      & > div:nth-child(1) {
        font-family: 'NotoSansCJKtc-Bold';
        font-size: 119px;
        font-weight: 700;
        font-stretch: normal;
        line-height: 0.9;
        letter-spacing: 1px;
        color: #9cc4e2;
        position: sticky;
      }

      & > div:nth-child(2) {
        font-family: 'DINCondensed-Bold';
        position: relative;
        z-index: 5;
      }
      & > div:nth-child(3),& > div:nth-child(4) {
        font-family: 'DINCondensed-Bold';
        display: block;
        position: relative;
        z-index: 5;
        -webkit-text-stroke: 1.5px #9cc4e2;
        color: transparent;
        clip-path: polygon(0 30%, 100% 30%, 100% 100% ,0 100%);
        transform: translateY(-45%);
      }
      & > div:nth-child(4){
        clip-path: polygon(0 55%, 100% 55%, 100% 100% ,0 100%);
        transform: translateY(-113%);
      }

      font-size: 131px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 1.2;
      text-align: right;
      letter-spacing: 3px;
      color: #9cc4e2;
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
// 下载
.dow {
  margin-top: -30%;
  margin-bottom: 233px;
  color: #fff;
  font-size: 30px;

  & > div:nth-child(1) {
    & > div {
      width: 62.5%;
      height: 202px;
      background: #9cc4e2;
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
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .muscaeVolitantes-nav{
    display: none;
  }
  .volitantes {
    &>div:nth-child(1) {
      width: calc(100% - 60px);
      justify-content: flex-end;
      align-items: flex-end;
      display: flex;
      margin: 150px auto 0;
      &>div:nth-child(1) {
        &>div:nth-child(1) {
          font-size: 40px;
          text-align: right;
        }
        &>div:nth-child(2) {
          font-size: 45px;
          letter-spacing: 0.01em;
          margin-top: 5px;
          text-align: right;
          line-height: 1;
        }
        & > div:nth-child(3),& > div:nth-child(4) {
          font-size: 45px;
          letter-spacing: 0.01em;
          clip-path: polygon(0 0, 100% 0, 100% 50% ,0 50%);
          transform: translateY(-15%);
        }
        & > div:nth-child(4) {
          clip-path: polygon(0 0, 100% 0, 100% 40% ,0 40%);
          transform: translateY(-65%);
        }
      }
      &>div:nth-child(1)::after {
        width: 200px;
        height: 200px;
        top: 190px;
      }
      &>div:nth-child(2) {
        top: 0;
        width: 194px;
        &>img:nth-child(1){
          margin-bottom: 5px;
        }
      }
    }
  }
  .muscaeNav {
    transform: scale(1);
    margin: 100px 0 0;
    & > div:nth-child(1) {
      width: calc(100% - 60px);
      margin: 0 auto;
      flex-direction: column-reverse;
      & > div:nth-child(1) {
        transform: scale(1);
        margin-top: 30px;
        width: calc(100% - 20px);
      }
      & > div:nth-child(1)::after {
        // display: none;
        width: 100%;
        height: 100%;
        left: 20px;
        bottom: -20px;
        border-radius: 10px;
      }
      & > div:nth-child(2) {
        position: relative;
        padding: 0;
        & > div:nth-child(1) {
          font-size: 24px;
          text-align: center;
        }
        & > div:nth-child(2) {
          margin-top: 15px;
          font-size: 14px;
          line-height: 2;
        }
      }
    }
    & > div:nth-child(2) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(1) {
        font-size: 24px;
      }
      & > div:nth-child(2) {
        margin-top: 50px;
        padding: 0;
        & > div {
          width: 27%;
          margin-bottom: 50px;
          & > div:nth-child(2) {
            width: 100%;
            font-size: 16px;
            line-height: 1.2;
            margin-top: 10px;
          }
        }
        & > div:nth-child(2),
        & > div:nth-child(5) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        & > div:nth-child(3),
        & > div:nth-child(6) {
          display: flex;
          justify-content: right;
          flex-direction: column;
          align-items: center;
        }

        & > div:nth-child(n + 4) {
          margin-top: 0px;
        }
      }
      & > div:nth-child(3) {
        margin-top: 10px;
        width: max-content;
        height: 85px;
        font-size: 18px;
        line-height: 1.6;
        padding: 0 30px;
      }
    }
    & > div:nth-child(3) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        & > div {
          margin-top: 40px;
          & > div:nth-child(1) {
            width: 120px;   
            min-width: 120px;
            margin-right: 20px;
          }
          & > div:nth-child(1)::after {
            width: 120px;
            height: 90px;
            top: 10px;
            left: 10px;
            border-radius: 5px;
          }
          & > div:nth-child(2) {
            position: relative;
            padding-left: 0;
            & > div:nth-child(1) {
              font-size: 15px;
              line-height: 1.2;
              padding-bottom: 10px;
            }
            & > div:nth-child(2) {
              font-size: 12px;
              line-height: 2;
              margin-top: 15px;
            }
          }
        }
        & > div:nth-child(2n) {
          & > div:nth-child(1){
            margin-right: 0;
          }
          & > div:nth-child(1)::after {
            right: 10px;
          }
          & > div:nth-child(2) {
            padding: 0;
            margin-right: 20px;
          }
        }
      }
    }
    & > div:nth-child(4) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        margin-top: 30px;
        margin-left: 20px;
        & > div:nth-child(1) {
          font-size: 18px;
          height: 40px;
          line-height: 1.2;
          width: 160px;
          left: -20px;
        }
        & > div:nth-child(2) {
          margin-left: 15px;
          position: relative;
          & > div:nth-child(1) {
            margin-top: 40px;
            padding-right: 20px;
            line-height: 2;
            font-size: 14px;
            
          }
          & > div:nth-child(2) {
            padding-bottom: 150px;
            & > div:nth-child(1) {
              svg{
                // width: 34px;
                image{
                  // width: 34px;
                }
              }
            }
            & > div:nth-child(2) {
              font-size: 14px;
              margin-right: 20px;
              line-height: 1.6;
              margin-left: 10px;
              & > div:nth-child(1) {
                margin-top: 20px;
              }
              & > div:nth-child(2) {
                margin-top: 30px;
                margin-bottom: 60px;
              }
            }
            & > div:nth-child(3) {
              position: absolute;
              flex-direction: row;
              bottom: 20px;
              left: 0;
              justify-content: flex-start;
              img{
                width: 45%;
                margin-right: 15px;
              }
            }
          }
          
        }
      }
      & > div:nth-child(3) {
        margin-top: 30px;
        margin-left: 20px;
        & > div:nth-child(1) {
          font-size: 18px;
          height: 40px;
          line-height: 1.2;
          width: 160px;
          left: -20px;
        }
        & > div:nth-child(2) {
          flex-flow: column-reverse;
          margin: 50px 0 0;
          img{
            width: calc(100% - 40px);
            margin: 30px auto 0;
          }
          & > div:nth-child(2) {
            margin-left: 20px;
            font-size: 14px;
            line-height: 1.8;
            padding-right: 30px;
          }
        }
      }
      & > div:nth-child(4) {
        margin-top: 50px;
        width: max-content;
        height: 85px;
        font-size: 18px;
        line-height: 1.6;
        padding: 0 50px;
      }
    }
    & > div:nth-child(5) {
      margin: 70px auto 0;
      & > div:nth-child(2) {
        width: calc(100% - 60px);
        margin: 25px auto 0;
        & > div:nth-child(1) {
          font-size: 14px;
        }
        & > div:nth-child(2) {
          margin-top: 25px;
          padding: 0;
          & > div {
            width:27%;
            margin-bottom: 50px;
            & > div:nth-child(2) {
              font-size: 14px;
              line-height: 1.6;
              margin-top: 10px;
            }
          }
          & > div:nth-child(n + 4) {
            margin-top: 0;
          }
          & > div:nth-child(2) {
            & > div:nth-child(2) {
              width: 120%;
            }
          }
        }
      }
    }
    & > div:nth-child(6) {
      width: calc(100% - 60px);
      margin: 20px auto 0;
     
      & > div:nth-child(2) {
        margin-top: 30px;
        & > div:nth-child(1) {
          & > div:nth-child(1) {
            &>svg:nth-of-type(1){
              display: none;
            }
            &>svg:nth-of-type(2){
              display: block;
              width: 100%;
              height: 380px;
              path{
                transform: scaleY(1.15) translateY(-25px);
              }
            }
          }
          & > div:nth-child(2) {
            padding: 15px;
            & > div:nth-child(1) {
              flex-direction: column-reverse;
              & > div:nth-child(1) {
                width: 100%;
                img{
                  width: 50%;
                  margin: 15px auto 0;
                }
              }
              & > div:nth-child(2) {
                width: 100%;
                font-size: 14px; 
                line-height: 2;
                letter-spacing: 0.1em;
              }
            }
            & > div:nth-child(2) {
              right: 15px;
              bottom: 0;
              svg{
                width: 18px;
                height: 18px;
                image{
                  width: 18px;
                  height: 18px;
                }
              }
            }
          }
        }
        & > div:nth-child(2),
        & > div:nth-child(3) {
          & > div:nth-child(1) {
            width: max-content;
            height: 50px;
            padding: 0 30px;
            font-size: 18px;
            position: absolute;
            top: -25px;
            left: 0;
          }
          & > div:nth-child(2) {
            margin-left: 0;
            position: relative;
            padding: 45px 20px 25px;
            font-size: 14px;
            line-height: 1.8;
            
          }
        }
        & > div:nth-child(3) {
          & > div:nth-child(1) {
            br{
              display: none;
            }
          }
          & > div:nth-child(2) {
            flex-direction: column;
            & > div:nth-child(1) {
              width: 100%;
              & > div:nth-child(1) {
                margin-bottom: 20px;
              }
            }
            & > div:nth-child(2) {
              margin-top: 20px;
              justify-content: center;
              img{
                width: 80%;
              }
            }
          }
        }
        & > div:nth-child(4) {
          margin-top: 70px;
          padding-top: 30px;
          position: relative;
          flex-direction: column;
          & > div:nth-child(1),
          & > div:nth-child(3) {
            width: 100%;
            &>div{
              width: 100%;
              background: #fff;
              color: #515151;
              border: 2px solid #90B6D3;
              border-radius: 10px;
              height: 76px;
              font-size: 14px;
              line-height: 1.6;
              margin-bottom: 20px;
              padding: 5px 20px 0;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: flex-start;
              align-content: center;
              p{
                display: inline;
              }
            }
          }
          & > div:nth-child(2) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            margin: auto;
            & > svg {
              display: none;
            }
            & > div:nth-child(2) {
              font-size: 20px;
              width: 100%;
              text-align: center;
              p{
                display: inline;
              }
            }
          }
        }
        & > div:nth-child(5) {
          margin-top: 30px;
          width: max-content;
          height: 85px;
          font-size: 18px;
          line-height: 1.6;
          padding: 0 70px;
          white-space: pre-wrap;
        }
      }
    }
    & > div:nth-child(7) {
      width: calc(100% - 60px);
      margin: 70px auto 0;
      & > div:nth-child(2) {
        & > div:nth-child(1) {
          margin-top: 25px;
          font-size: 14px;
          line-height: 1.8;
          padding-left: 0;
        }
        & > div:nth-child(2) {
          margin-top: 30px;
          & > div {
            transform: scale(1);
            margin-bottom: 30px;
            & > div {
              width: 100%;
              height: 120px;
              flex-direction: row;
              border-radius: 10px;
              box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.15);
              & > div:nth-child(1) {
                width: 130px;
                min-width: 130px;
                &>img{
                  width: auto;
                  height: 100%;
                  border-radius: 10px;
                }
              }
              & > div:nth-child(2) {
                font-size: 14px;
                padding: 0 15px;
                margin-top: 0;
                display: flex;
                align-items: center;
              }
            }
          }
          & > div:nth-child(n + 4) {
            margin-top: 0;
          }

          & > div:nth-child(4) {
            margin-left: 0;
          }

          & > div:nth-child(5) {
            margin-right: 0;
          }
        }
      }
    }
    & > div:nth-child(8) {
      width: calc(100% - 60px);
      margin: 40px auto 0;
      & > div:nth-child(2) {
        margin-top: 30px;
      }
    }
  }
  .dow {
    margin-top: 100px;
    margin-bottom: 100px;
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
  .muscaeNav {
    margin-bottom: -30%;
  }

  .dow {
    margin-top: -20%;

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
