<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.medical_team.medical_team_header_title'),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        '希瑪眼科中心有強大的眼科醫生醫療團隊，一共有23位眼科醫生，包括：林順潮眼科醫生、李佑榮眼科醫生、范愷眼科醫生、黃俊華眼科醫生、劉凱珊眼科醫生、李煒業眼科醫生、邱俊源眼科醫生、李琬微眼科醫生、胡偉君眼科醫生、李少雄眼科醫生、黎浩樺眼科醫生、李德倫眼科醫生、黃禮文眼科醫生、張瀞之眼科醫生、林寶生眼科醫生、林己明眼科醫生、張明權眼科醫生、陳偉樂眼科醫生、梁苑珊眼科醫生、鄒樞韻眼科醫生、尹浩柟醫生、鄒樂韻醫生、陳鼎鼐醫生。希瑪眼科醫生會細心評估及治療患者眼疾問題，致力為大眾提供提供安全、準確、可靠的眼科檢查及醫療服務。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科中心 眼科專科診所 眼科專科中心 眼科醫生 香港眼科 香港眼科醫生 眼科診所 眼睛檢查 眼科服務 希瑪眼科 林順潮 李佑榮 范愷 黃俊華 劉凱珊 李煒業 邱俊源 李琬微 胡偉君 李少雄 黎浩樺 李德倫 黃禮文 張瀞之 林寶生 林己明 張明權 陳偉樂 梁苑珊 鄒樞韻 尹浩柟 鄒樂韻 陳鼎鼐 希瑪醫療集團 希瑪醫療',
    },
  ],
}))
const doctorList = [
  {
    doctorName: 'pages.medical_team.doctorList.doctor_1.doctor_1_name',
    doctorIntro: '香港希瑪國際眼科醫療集團創辦人',
    doctorEnName: 'pages.medical_team.doctorList.doctor_1.doctor_1_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_1',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_2',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_3',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_4',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_5',
      'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_6',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor01.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_2.doctor_2_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_2.doctor_2_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_1',
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_2',
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_3',
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_4',
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_5',
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_6',
      'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_7',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor02.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_3.doctor_3_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_3.doctor_3_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_1',
      'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_2',
      'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_3',
      'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_4',
      'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_5',
      'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_6',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/2023/07/41e0d233e7c04b33.png',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_4.doctor_4_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_4.doctor_4_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_1',
      'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_2',
      'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_3',
      'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_4',
      'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_5',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor04.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_5.doctor_5_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_5.doctor_5_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_1',
      'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_2',
      'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_3',
      'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_4',
      'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_5',
      'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_6',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/2023/07/b875a2f3ff87282d.png',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_6.doctor_6_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_6.doctor_6_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_1',
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_2',
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_3',
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_4',
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_5',
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_6',
      'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_7',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor06.jpg',
  },
  // {
  //   doctorName: 'pages.medical_team.doctorList.doctor_7.doctor_7_name',
  //   doctorEnName: 'pages.medical_team.doctorList.doctor_7.doctor_7_en_name',
  //   doctorEducation: [
  //     'pages.medical_team.doctorList.doctor_7.doctor_7_education.doctor_7_education_1',
  //     'pages.medical_team.doctorList.doctor_7.doctor_7_education.doctor_7_education_2',
  //     'pages.medical_team.doctorList.doctor_7.doctor_7_education.doctor_7_education_3',
  //     'pages.medical_team.doctorList.doctor_7.doctor_7_education.doctor_7_education_4',
  //   ],
  //   doctorImgUrl:
  //     'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor07.jpg',
  // },
  // {
  //   doctorName: 'pages.medical_team.doctorList.doctor_8.doctor_8_name',
  //   doctorEnName: 'pages.medical_team.doctorList.doctor_8.doctor_8_en_name',
  //   doctorEducation: [
  //     'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_1',
  //     'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_2',
  //     'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_3',
  //     'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_4',
  //     'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_5',
  //     'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_6',
  //   ],
  //   doctorImgUrl:
  //     'https://static.cmereye.com/imgs/2023/07/124ecdd1faf1791f.png',
  // },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_9.doctor_9_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_9.doctor_9_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_9.doctor_9_education.doctor_9_education_1',
      'pages.medical_team.doctorList.doctor_9.doctor_9_education.doctor_9_education_2',
      'pages.medical_team.doctorList.doctor_9.doctor_9_education.doctor_9_education_3',
      'pages.medical_team.doctorList.doctor_9.doctor_9_education.doctor_9_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor09.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_10.doctor_10_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_10.doctor_10_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_1',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_2',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_3',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_4',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_5',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_6',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_7',
      'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_8',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor10.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_11.doctor_11_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_11.doctor_11_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_11.doctor_11_education.doctor_11_education_1',
      'pages.medical_team.doctorList.doctor_11.doctor_11_education.doctor_11_education_2',
      'pages.medical_team.doctorList.doctor_11.doctor_11_education.doctor_11_education_3',
      'pages.medical_team.doctorList.doctor_11.doctor_11_education.doctor_11_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor11.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_12.doctor_12_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_12.doctor_12_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_12.doctor_12_education.doctor_12_education_1',
      'pages.medical_team.doctorList.doctor_12.doctor_12_education.doctor_12_education_2',
      'pages.medical_team.doctorList.doctor_12.doctor_12_education.doctor_12_education_3',
      'pages.medical_team.doctorList.doctor_12.doctor_12_education.doctor_12_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor12.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_13.doctor_13_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_13.doctor_13_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_13.doctor_13_education.doctor_13_education_1',
      'pages.medical_team.doctorList.doctor_13.doctor_13_education.doctor_13_education_2',
      'pages.medical_team.doctorList.doctor_13.doctor_13_education.doctor_13_education_3',
      'pages.medical_team.doctorList.doctor_13.doctor_13_education.doctor_13_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor13.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_14.doctor_14_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_14.doctor_14_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_1',
      'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_2',
      'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_3',
      'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_4',
      'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_5',
      'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_6',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor14.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_15.doctor_15_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_15.doctor_15_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_15.doctor_15_education.doctor_15_education_1',
      'pages.medical_team.doctorList.doctor_15.doctor_15_education.doctor_15_education_2',
      'pages.medical_team.doctorList.doctor_15.doctor_15_education.doctor_15_education_3',
      'pages.medical_team.doctorList.doctor_15.doctor_15_education.doctor_15_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor15.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_16.doctor_16_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_16.doctor_16_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_16.doctor_16_education.doctor_16_education_1',
      'pages.medical_team.doctorList.doctor_16.doctor_16_education.doctor_16_education_2',
      'pages.medical_team.doctorList.doctor_16.doctor_16_education.doctor_16_education_3',
      'pages.medical_team.doctorList.doctor_16.doctor_16_education.doctor_16_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor16.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_17.doctor_17_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_17.doctor_17_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_1',
      'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_2',
      'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_3',
      'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_4',
      'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_5',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor17.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_18.doctor_18_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_18.doctor_18_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_1',
      'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_2',
      'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_3',
      'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_4',
      'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_5',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor18.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_19.doctor_19_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_19.doctor_19_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_1',
      'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_2',
      'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_3',
      'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_4',
      'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_5',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor19.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_20.doctor_20_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_20.doctor_20_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_20.doctor_20_education.doctor_20_education_1',
      'pages.medical_team.doctorList.doctor_20.doctor_20_education.doctor_20_education_2',
      'pages.medical_team.doctorList.doctor_20.doctor_20_education.doctor_20_education_3',
      'pages.medical_team.doctorList.doctor_20.doctor_20_education.doctor_20_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor20.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_21.doctor_21_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_21.doctor_21_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_1',
      'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_2',
      'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_3',
      'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_4',
      'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_5',
      'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_6',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor21.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_22.doctor_22_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_22.doctor_22_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_22.doctor_22_education.doctor_22_education_1',
      'pages.medical_team.doctorList.doctor_22.doctor_22_education.doctor_22_education_2',
      'pages.medical_team.doctorList.doctor_22.doctor_22_education.doctor_22_education_3',
      'pages.medical_team.doctorList.doctor_22.doctor_22_education.doctor_22_education_4',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor22.jpg',
  },
  {
    doctorName: 'pages.medical_team.doctorList.doctor_23.doctor_23_name',
    doctorEnName: 'pages.medical_team.doctorList.doctor_23.doctor_23_en_name',
    doctorEducation: [
      'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_1',
      'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_2',
      'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_3',
      'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_4',
      'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_5',
    ],
    doctorImgUrl:
      'https://static.cmereye.com/imgs/2023/07/6b20f513c8d4d402.png',
  },
]
</script>
<template>
  <div id="medical-team" class="medical-team">
    <div>
      <div class="title">{{ $t('pages.medical_team.medical_team_title') }}</div>
      <div></div>
    </div>
    <div class="mainCon">
      <ul>
        <li v-for="(item, index) in doctorList" :key="index" class="docList">
          <div class="docDes">
            <div class="docName">{{ $t(item.doctorName) }}</div>
            <p v-if="item.doctorIntro" class="doctorIntro">
              {{ $t(item.doctorIntro) }}
            </p>
            <div class="docEducation">
              <div class="edutitle">
                {{ $t('pages.medical_team.doctor_edu') }}
              </div>
              <div>
                <div v-for="(ele, i) in item.doctorEducation" :key="i">
                  <span>{{ $t(ele) }}</span>
                </div>
                <nuxt-link class="orderLink text-white inline-block" to="">{{
                  $t('pages.medical_team.doctor_order')
                }}</nuxt-link>
              </div>
            </div>
          </div>
          <div class="docImg">
            <div><img :src="item.doctorImgUrl" /></div>
            <div class="docEnName">{{ $t(item.doctorEnName) }}</div>
          </div>
          <!-- <nuxt-link class="orderLink text-white inline-block" to="">{{
            $t('pages.medical_team.doctor_order')
          }}</nuxt-link> -->
        </li>
      </ul>
    </div>
    <Footer class="-mt-24" />
    <div class="mt-50">
      <PageFooterMenu />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import url(~/assets/font/font.css);

.medical-team {
  margin-bottom: 50px;

  &>div:first-child {
    margin-left: 695px;
    margin-top: 98px;
    position: relative;

    &>.title {
      position: relative;
      -ms-writing-mode: tb-lr;
      writing-mode: vertical-lr;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 40.1431px;
      line-height: 46px;
      /* or 115% */

      text-align: center;
      letter-spacing: 0.05em;

      color: #515151;

      &::after {
        content: 'medical team';
        color: #8ad8dd;
        text-transform: uppercase;
        font-size: 26px;
        white-space: nowrap;
        position: absolute;
        top: 0;
        left: -40px;
      }
    }

    &>div:last-child {
      background: #f2f2f2;
      width: 738px;
      height: 543px;
      position: absolute;
      top: -98px;
      // left: 39.1667%;
      left: 150px;
    }
  }

  .mainCon {
    margin-left: 30.6vw;
    z-index: 2;
    position: relative;
    margin-top: 71px;

    .docList {
      display: flex;
      flex-direction: row;
      position: relative;
      margin-bottom: 177px;
      width: 745px;
      justify-content: space-between;

      .docDes {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: -45px;
        position: relative;
        z-index: 9;
      }

      .docImg {
        position: relative;

        &>div:first-child {
          &>img {
            z-index: 9;
            position: relative;
          }
        }

        .docEnName {
          font-family: 'ButterTangXin';
          font-style: normal;
          font-weight: 400;
          font-size: 32.3948px;
          line-height: 108px;
          /* identical to box height, or 333% */

          text-align: center;

          color: #2958a3;
          position: absolute;
          z-index: 10;
        }
      }

      .orderLink {
        // position: absolute;
        width: 130px;
        height: 51px;
        background: #8ad8dd;
        line-height: 51px;
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #ffffff;
        // bottom: 0;
        // left: 250px;
        cursor: pointer;
        z-index: 15;
        margin: 43px 0 0 200px;
      }

      .docName {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 50px;
        /* identical to box height, or 167% */

        text-align: center;
        letter-spacing: 0.05em;

        color: #515151;
      }

      .doctorIntro {
        font-family: 'Noto Sans HK';
        font-style: normal;
        font-weight: 350;
        font-size: 15px;
        line-height: 32px;
        /* identical to box height, or 333% */

        text-align: center;
        letter-spacing: 0.1em;

        color: #515151;
      }

      .docEducation {
        display: flex;
        flex-direction: row;
        margin-top: 29px;

        &>div:first-child {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 15px;
          line-height: 35px;
          /* identical to box height, or 333% */

          text-align: center;
          letter-spacing: 0.1em;

          color: #515151;
          margin-right: 36px;
        }

        &>div:last-child {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 15px;
          line-height: 35px;
          /* or 233% */

          letter-spacing: 0.1em;

          color: #515151;
          white-space: pre-wrap !important;
        }
      }
    }
  }

  ul>li:nth-child(2) {
    .orderLink {
      bottom: -40px !important;
    }
  }

  ul>li:nth-child(10) {
    &>a {
      bottom: -40px;
    }
  }

  ul>li:nth-child(1) {
    .orderLink {
      bottom: -80px !important;
    }

    &>div:nth-child(1) {
      margin-top: 65px !important;
    }

    &>div:nth-child(2) {
      &>div:nth-child(2) {
        top: 74px;
        left: -37px;
      }
    }
  }

  ul>li:nth-child(2) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 102px;
        left: -116px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -153px;
        bottom: -86px;
        width: 418px;
        height: 316px;
      }
    }
  }

  ul>li:nth-child(3) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 37px;
        left: -53px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -84px;
        bottom: -68px;
        width: 312px;
        height: 284px;
      }
    }
  }

  ul>li:nth-child(4) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 129px;
        left: -107px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -221px;
        top: 83px;
        width: 449px;
        height: 202px;
      }
    }
  }

  ul>li:nth-child(5) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 33px;
        left: -82px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -224px;
        top: -47px;
        width: 488px;
        height: 284px;
      }
    }
  }

  ul>li:nth-child(6) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 102px;
        left: -62px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -52px;
        top: -44px;
        width: 276px;
        height: 281px;
      }
    }
  }

  ul>li:nth-child(7) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 75px;
        right: -66px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -298px;
        bottom: -55px;
        width: 515px;
        height: 322px;
      }
    }
  }

  ul>li:nth-child(8) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 69px;
        left: -40px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -59px;
        top: -47px;
        width: 276px;
        height: 284px;
      }
    }
  }

  ul>li:nth-child(9) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: -3px;
        right: -71px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -341px;
        top: 59px;
        width: 558px;
        height: 184px;
      }
    }
  }

  ul>li:nth-child(10) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 69px;
        left: -55px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -78px;
        top: -47px;
        width: 342px;
        height: 322px;
      }
    }

    &>a {
      bottom: -40px !important;
    }
  }

  ul>li:nth-child(11) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 39px;
        left: -72px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -46px;
        bottom: -46px;
        width: 267px;
        height: 250px;
      }
    }
  }

  ul>li:nth-child(12) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 86px;
        right: -68px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -54px;
        top: -47px;
        width: 275px;
        height: 273px;
      }
    }
  }

  ul>li:nth-child(13) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 135px;
        left: -136px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -222px;
        top: 44px;
        width: 443px;
        height: 211px;
      }
    }
  }

  ul>li:nth-child(14) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 83px;
        right: -92px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -72px;
        top: -57px;
        width: 336px;
        height: 283px;
      }
    }
  }

  ul>li:nth-child(15) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 15px;
        right: -43px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -111px;
        bottom: -50px;
        width: 336px;
        height: 283px;
      }
    }
  }

  ul>li:nth-child(16) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 13px;
        left: -86px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -53px;
        top: -39px;
        width: 277px;
        height: 283px;
      }
    }
  }

  ul>li:nth-child(17) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 129px;
        left: -111px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -297px;
        top: 45px;
        width: 521px;
        height: 245px;
      }
    }
  }

  ul>li:nth-child(18) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 40px;
        right: -56px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -62px;
        top: 45px;
        width: 286px;
        height: 285px;
      }
    }
  }

  ul>li:nth-child(19) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 40px;
        left: -68px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -48px;
        top: -50px;
        width: 260px;
        height: 286px;
      }
    }
  }

  ul>li:nth-child(20) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 16px;
        right: -92px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -154px;
        top: -32px;
        width: 366px;
        height: 277px;
      }
    }
  }

  ul>li:nth-child(21) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 156px;
        left: -73px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -44px;
        bottom: -45px;
        width: 252px;
        height: 277px;
      }
    }
  }

  ul>li:nth-child(22) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
      }

      &>div:nth-child(2) {
        top: 7px;
        left: -103px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -315px;
        top: 79px;
        width: 523px;
        height: 224px;
      }
    }
  }

  ul>li:nth-child(23) {
    &>div:nth-child(2) {
      &>div:nth-child(1) {
        position: relative;
        width: 264px;
        height: 330px;
      }

      &>div:nth-child(2) {
        top: 157px;
        right: -103px;
      }

      &>div:nth-child(1)::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: -315px;
        top: 79px;
        width: 523px;
        height: 224px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .medical-team {
    &>div:first-child {
      margin-left: 0px;
      margin-top: 78px;

      &>.title {
        -ms-writing-mode: initial;
        writing-mode: initial;
        font-size: 28px;
        text-align: left;
        letter-spacing: -0.1em;
        padding-top: 30px;
        margin-left: 20px;

        &::after {
          left: 0px;
          top: 60px;
          letter-spacing: 0.01em;
          font-size: 16px;
        }
      }

      &>div:last-child {
        width: calc(100% - 48%);
        top: 0;
        left: 48%;
        height: 220px;
      }
    }

    .mainCon {
      margin-left: 0;
      margin-top: 145px;
      padding: 0 30px;

      .docList {
        flex-direction: row-reverse;
        width: 100%;
        padding-top: 70px;
        margin-bottom: 76px;
        // padding-bottom: 70px;

        .docDes {
          margin-top: 0px;
        }

        .orderLink {
          // left: auto;
          // right: 10vw;
          width: 90px;
          height: 34px;
          font-size: 16px;
          line-height: 34px;
          margin: 24.5px auto 0;
          display: block;
          // bottom: 10px;
        }

        .docName {
          position: absolute;
          width: calc(100vw - 60px);
          right: 0;
          top: -50px;
          text-align: left;
          font-size: 24px;
        }

        .doctorIntro {
          position: absolute;
          width: calc(100vw - 60px);
          right: 0;
          top: -20px;
          text-align: left;
          font-size: 12px;
        }

        .docImg {
          width: 55%;
          margin-top: 29px;
          margin-right: 15px;

          .docEnName {
            font-size: 20px;
            left: 50px;
            width: calc(100vw - 110px);
            text-align: left;
            line-height: 25px;
            top: auto;
            bottom: -25px;
          }
        }

        .docEducation {
          &>div:first-child {
            margin-right: 0px;
            font-size: 12px;
            min-width: 40px;
            text-align: left;
            line-height: 16px;
          }

          &>div:last-child {
            font-size: 12px;
            line-height: 160%;
            margin-bottom: 6px;
            padding-right: 5px;
            text-align: justify;
          }
        }
      }
    }

    ul>li:nth-child(1) {
      .orderLink {
        bottom: 10px !important;
      }

      &>div:nth-child(2) {
        .docEnName {
          bottom: -5px !important;
        }
      }

      &>div:nth-child(1) {
        margin-top: 0 !important;
      }

      &::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 200px;
      }
    }

    ul>li:nth-child(2) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: 65px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(3) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: 10px !important;
        }

        &>div:nth-child(1)::before {
          width: 100%;
          left: -30px;
          top: 38px;
          height: 140px;
        }
      }
    }

    ul>li:nth-child(4) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: -25px !important;
        }

        &>div:nth-child(1)::before {
          width: 100%;
          left: -30px;
          top: 38px;
          height: 120px;
        }
      }
    }

    ul>li:nth-child(5) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: 15px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: -30px;
          height: 170px;
        }
      }
    }

    ul>li:nth-child(6) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: 70px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: -30px;
          height: 180px;
        }
      }
    }

    ul>li:nth-child(7) {
      &>div:nth-child(2) {
        &>div:nth-child(1)::before {
          width: 100%;
          left: -30px;
          top: 38px;
          height: 170px;
        }
      }
    }

    ul>li:nth-child(8) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: 35px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: -30px;
          height: 170px;
        }
      }
    }

    ul>li:nth-child(9) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: -25px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul>li:nth-child(10) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: 100px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul>li:nth-child(11) {
      &>div:nth-child(2) {
        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul>li:nth-child(12) {
      &>div:nth-child(2) {
        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul>li:nth-child(13) {
      &>div:nth-child(2) {
        &>div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul>li:nth-child(14) {
      .docEnName {
        bottom: 30px !important;
      }

      &>div:nth-child(2) {
        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(15) {
      &>div:nth-child(2) {
        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(16) {
      &>div:nth-child(2) {
        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(17) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: -5px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(18) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: -5px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(19) {
      &>div:nth-child(2) {
        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(20) {
      &>div:nth-child(2) {
        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(21) {
      &>div:nth-child(2) {
        .docEnName {
          bottom: 25px !important;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(22) {
      &>div:nth-child(2) {
        &>div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul>li:nth-child(23) {
      &>div:nth-child(2) {
        &>div:nth-child(1) {
          width: 100%;
          height: auto;
        }

        &>div:nth-child(1)::before {
          width: calc(100% + 70px);
          left: -30px;
          top: 0px;
          height: 110px;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (min-width: 1920px) {
  .medical-team {
    margin: auto;
    max-width: 1200px;

    .mainCon {
      margin-left: 8.6vw;
    }

    &>div:first-child {
      margin-left: 190px;
    }

    // ul > li:nth-child(23) {
    //   & > div:nth-child(2) {
    //     & > div:nth-child(2) {
    //       right: 0;
    //     }
    //   }
    // }
  }
}
</style>
