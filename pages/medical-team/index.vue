<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
const locale = useState<string>('locale.setting')

useHead(() => ({
  title: t('pages.medical_team.medical_team_header_title'),
  meta() {
    return [
      {
        hid: 'medicalTeamDesc',
        name: 'description',
        content: t('tdk.medical_team.desc'),
      },
      {
        hid: 'medicalTeamKey',
        name: 'keywords',
        content: t('tdk.medical_team.key'),
      },
    ]
  },
}))

// let doctorList = [
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_1.doctor_1_name',
//     doctorIntro: 'pages.medical_team.doctorList.doctor_1.doctor_1_intro',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_1.doctor_1_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_1',
//       'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_2',
//       'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_3',
//       'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_4',
//       'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_5',
//       'pages.medical_team.doctorList.doctor_1.doctor_1_education.doctor_1_education_6',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor01.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_2.doctor_2_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_2.doctor_2_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_1',
//       'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_2',
//       'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_3',
//       'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_4',
//       'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_5',
//       'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_6',
//       'pages.medical_team.doctorList.doctor_2.doctor_2_education.doctor_2_education_7',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor02.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_3.doctor_3_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_3.doctor_3_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_1',
//       'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_2',
//       'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_3',
//       'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_4',
//       'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_5',
//       'pages.medical_team.doctorList.doctor_3.doctor_3_education.doctor_3_education_6',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/2023/07/41e0d233e7c04b33.png',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_4.doctor_4_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_4.doctor_4_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_1',
//       'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_2',
//       'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_3',
//       'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_4',
//       'pages.medical_team.doctorList.doctor_4.doctor_4_education.doctor_4_education_5',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor04.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_5.doctor_5_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_5.doctor_5_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_1',
//       'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_2',
//       'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_3',
//       'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_4',
//       'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_5',
//       'pages.medical_team.doctorList.doctor_5.doctor_5_education.doctor_5_education_6',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/2023/07/b875a2f3ff87282d.png',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_6.doctor_6_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_6.doctor_6_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_1',
//       'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_2',
//       'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_3',
//       'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_4',
//       'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_5',
//       'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_6',
//       'pages.medical_team.doctorList.doctor_6.doctor_6_education.doctor_6_education_7',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor06.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_7.doctor_7_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_7.doctor_7_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_7.doctor_7_education.doctor_7_education_1',
//       'pages.medical_team.doctorList.doctor_7.doctor_7_education.doctor_7_education_2',
//       'pages.medical_team.doctorList.doctor_7.doctor_7_education.doctor_7_education_3',
//       'pages.medical_team.doctorList.doctor_7.doctor_7_education.doctor_7_education_4',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor07.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_8.doctor_8_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_8.doctor_8_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_1',
//       'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_2',
//       'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_3',
//       'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_4',
//       'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_5',
//       'pages.medical_team.doctorList.doctor_8.doctor_8_education.doctor_8_education_6',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/2023/07/124ecdd1faf1791f.png',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_9.doctor_9_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_9.doctor_9_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_9.doctor_9_education.doctor_9_education_1',
//       'pages.medical_team.doctorList.doctor_9.doctor_9_education.doctor_9_education_2',
//       'pages.medical_team.doctorList.doctor_9.doctor_9_education.doctor_9_education_3',
//       'pages.medical_team.doctorList.doctor_9.doctor_9_education.doctor_9_education_4',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor09.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_10.doctor_10_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_10.doctor_10_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_1',
//       'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_2',
//       'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_3',
//       'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_4',
//       'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_5',
//       'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_6',
//       'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_7',
//       'pages.medical_team.doctorList.doctor_10.doctor_10_education.doctor_10_education_8',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor10.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_11.doctor_11_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_11.doctor_11_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_11.doctor_11_education.doctor_11_education_1',
//       'pages.medical_team.doctorList.doctor_11.doctor_11_education.doctor_11_education_2',
//       'pages.medical_team.doctorList.doctor_11.doctor_11_education.doctor_11_education_3',
//       'pages.medical_team.doctorList.doctor_11.doctor_11_education.doctor_11_education_4',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor11.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_12.doctor_12_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_12.doctor_12_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_12.doctor_12_education.doctor_12_education_1',
//       'pages.medical_team.doctorList.doctor_12.doctor_12_education.doctor_12_education_2',
//       'pages.medical_team.doctorList.doctor_12.doctor_12_education.doctor_12_education_3',
//       'pages.medical_team.doctorList.doctor_12.doctor_12_education.doctor_12_education_4',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor12.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_13.doctor_13_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_13.doctor_13_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_13.doctor_13_education.doctor_13_education_1',
//       'pages.medical_team.doctorList.doctor_13.doctor_13_education.doctor_13_education_2',
//       'pages.medical_team.doctorList.doctor_13.doctor_13_education.doctor_13_education_3',
//       'pages.medical_team.doctorList.doctor_13.doctor_13_education.doctor_13_education_4',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor13.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_14.doctor_14_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_14.doctor_14_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_1',
//       'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_2',
//       'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_3',
//       'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_4',
//       'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_5',
//       'pages.medical_team.doctorList.doctor_14.doctor_14_education.doctor_14_education_6',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/2023/08/b9a03d7323a8ee22.png',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_15.doctor_15_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_15.doctor_15_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_15.doctor_15_education.doctor_15_education_1',
//       'pages.medical_team.doctorList.doctor_15.doctor_15_education.doctor_15_education_2',
//       'pages.medical_team.doctorList.doctor_15.doctor_15_education.doctor_15_education_3',
//       'pages.medical_team.doctorList.doctor_15.doctor_15_education.doctor_15_education_4',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor15.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_16.doctor_16_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_16.doctor_16_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_16.doctor_16_education.doctor_16_education_1',
//       'pages.medical_team.doctorList.doctor_16.doctor_16_education.doctor_16_education_2',
//       'pages.medical_team.doctorList.doctor_16.doctor_16_education.doctor_16_education_3',
//       'pages.medical_team.doctorList.doctor_16.doctor_16_education.doctor_16_education_4',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor16.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_17.doctor_17_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_17.doctor_17_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_1',
//       'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_2',
//       'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_3',
//       'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_4',
//       'pages.medical_team.doctorList.doctor_17.doctor_17_education.doctor_17_education_5',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor17.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_18.doctor_18_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_18.doctor_18_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_1',
//       'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_2',
//       'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_3',
//       'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_4',
//       'pages.medical_team.doctorList.doctor_18.doctor_18_education.doctor_18_education_5',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor18.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_19.doctor_19_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_19.doctor_19_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_1',
//       'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_2',
//       'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_3',
//       'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_4',
//       'pages.medical_team.doctorList.doctor_19.doctor_19_education.doctor_19_education_5',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor19.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_20.doctor_20_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_20.doctor_20_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_20.doctor_20_education.doctor_20_education_1',
//       'pages.medical_team.doctorList.doctor_20.doctor_20_education.doctor_20_education_2',
//       'pages.medical_team.doctorList.doctor_20.doctor_20_education.doctor_20_education_3',
//       'pages.medical_team.doctorList.doctor_20.doctor_20_education.doctor_20_education_4',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor20.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_21.doctor_21_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_21.doctor_21_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_1',
//       'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_2',
//       'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_3',
//       'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_4',
//       'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_5',
//       'pages.medical_team.doctorList.doctor_21.doctor_21_education.doctor_21_education_6',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor21.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_22.doctor_22_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_22.doctor_22_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_22.doctor_22_education.doctor_22_education_1',
//       'pages.medical_team.doctorList.doctor_22.doctor_22_education.doctor_22_education_2',
//       'pages.medical_team.doctorList.doctor_22.doctor_22_education.doctor_22_education_3',
//       'pages.medical_team.doctorList.doctor_22.doctor_22_education.doctor_22_education_4',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/hkcmereye-newstyle/medical-team/docotor22.jpg',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_23.doctor_23_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_23.doctor_23_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_1',
//       'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_2',
//       'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_3',
//       'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_4',
//       'pages.medical_team.doctorList.doctor_23.doctor_23_education.doctor_23_education_5',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/2023/07/6b20f513c8d4d402.png',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_24.doctor_24_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_24.doctor_24_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_24.doctor_24_education.doctor_24_education_1',
//       'pages.medical_team.doctorList.doctor_24.doctor_24_education.doctor_24_education_2',
//       'pages.medical_team.doctorList.doctor_24.doctor_24_education.doctor_24_education_3',
//       'pages.medical_team.doctorList.doctor_24.doctor_24_education.doctor_24_education_4',
//       'pages.medical_team.doctorList.doctor_24.doctor_24_education.doctor_24_education_5',
//       'pages.medical_team.doctorList.doctor_24.doctor_24_education.doctor_24_education_6',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/2024/06/90c786186e3a1f88.png',
//   },
//   {
//     doctorName: 'pages.medical_team.doctorList.doctor_25.doctor_25_name',
//     doctorEnName: 'pages.medical_team.doctorList.doctor_25.doctor_25_en_name',
//     doctorEducation: [
//       'pages.medical_team.doctorList.doctor_25.doctor_25_education.doctor_25_education_1',
//       'pages.medical_team.doctorList.doctor_25.doctor_25_education.doctor_25_education_2',
//       'pages.medical_team.doctorList.doctor_25.doctor_25_education.doctor_25_education_3',
//       'pages.medical_team.doctorList.doctor_25.doctor_25_education.doctor_25_education_4',
//     ],
//     doctorImgUrl:
//       'https://static.cmereye.com/imgs/2024/08/cdd92b7eecffa0df.jpg',
//   },
// ]
let doctorList: any = ref([
  {
    doctorName: 'pages.medical_team.doctorList.doctor_1.doctor_1_name',
    doctorIntro: 'pages.medical_team.doctorList.doctor_1.doctor_1_intro',
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
])

watch(
  locale,
  (newValue, oldValue) => {
    getData()
  },
  { deep: true }
)

const getData = async () => {
  console.log(locale.value,'locale');
  
  doctorList.value.splice(1)
  if (locale.value === 'zh-hk') {
    const { data }: any = await useFetch(
      `https://hkcmereye.com/api.php/list/12/num/50`
    )
    const res: any = JSON.parse(data.value)

    let list: any = res.data.map((item: any, index: any) => {
      return {
        doctorName: item.title,
        doctorEnName: item.subtitle,
        doctorEducation: item.content,
        doctorImgUrl: item.ico,
      }
    })

    list.forEach((item: any) => {
      doctorList.value.push(item)
    })
  } else {
    const { data }: any = await useFetch(
      `https://hkcmereye.com/api.php/list/96/num/99/acode/en`
    )
    const res: any = JSON.parse(data.value)

    let list: any = res.data.map((item: any, index: any) => {
      return {
        doctorName: item.title,
        doctorEnName: item.subtitle,
        doctorEducation: item.content,
        doctorImgUrl: item.ico,
      }
    })

    list.forEach((item: any) => {
      doctorList.value.push(item)
    })
  }
}

onMounted(() => {
  setTimeout(() => {
    getData()
  }, 0)
})
</script>
<template>
  <div id="medical-team" class="medical-team">
    <div>
      <div class="title">{{ $t('pages.medical_team.medical_team_title') }}</div>
      <div></div>
    </div>
    <div class="mainCon">
      <ul>
        <li class="docList">
          <div class="docDes" :class="{ 'docDes-en': locale === 'en' }">
            <div :class="['docName', { 'docName-en': locale === 'en' }]">
              {{ $t(doctorList[0].doctorName) }}
            </div>
            <div v-if="doctorList[0].doctorIntro" class="doctorIntro">
              {{ $t(doctorList[0].doctorIntro) }}
            </div>
            <div class="docEducation">
              <div class="edutitle" :class="{ 'edutitle-en': locale === 'en' }">
                {{ $t('pages.medical_team.doctor_edu') }}
              </div>
              <div>
                <div v-for="(ele, i) in doctorList[0].doctorEducation" :key="i">
                  <span>{{ $t(ele) }}</span>
                </div>
                <nuxt-link
                  class="orderLink text-white inline-block"
                  id="medicalTeamLink"
                  to="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=7f3c58ea65c34d9d82c1f6455384212f&lng=big5&sid=cd5457bae7eb4c9db0534553310cb509&p=https%3A//hkcmereye.com/&rf1=&rf2=&msg=&e=hkcmereye.com[youce-goutong]&d=1692676040714"
                  >{{ $t('pages.medical_team.doctor_order') }}</nuxt-link
                >
              </div>
            </div>
          </div>
          <div
            class="docImg"
            style="max-width: 312px"
            :class="{ 'docImg-en': locale === 'en' }"
          >
            <div><img :src="doctorList[0].doctorImgUrl" /></div>
            <div class="docEnName">{{ $t(doctorList[0].doctorEnName) }}</div>
          </div>
        </li>
        <li v-for="(item, index) in doctorList" :key="index" class="docList">
          <div
            class="docDes"
            v-if="index != 0"
            :class="{ 'docDes-en': locale === 'en' }"
          >
            <div :class="['docName', { 'docName-en': locale === 'en' }]">
              {{ item.doctorName }}
            </div>
            <div v-if="item.doctorIntro" class="doctorIntro">
              {{ item.doctorIntro }}
            </div>
            <div class="docEducation">
              <div class="edutitle" :class="{ 'edutitle-en': locale === 'en' }">
                {{ $t('pages.medical_team.doctor_edu') }}
              </div>
              <div>
                <div  :key="item.doctorEducation"
                v-html="item.doctorEducation">
                </div>
                <nuxt-link
                  class="orderLink text-white inline-block"
                  id="medicalTeamLink"
                  to="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=7f3c58ea65c34d9d82c1f6455384212f&lng=big5&sid=cd5457bae7eb4c9db0534553310cb509&p=https%3A//hkcmereye.com/&rf1=&rf2=&msg=&e=hkcmereye.com[youce-goutong]&d=1692676040714"
                  >{{ $t('pages.medical_team.doctor_order') }}</nuxt-link
                >
              </div>
            </div>
          </div>
          <div
            class="docImg"
            v-if="index != 0"
            :class="{ 'docImg-en': locale === 'en' }"
          >
            <div>
              <img
                :src="
                  item.doctorImgUrl.includes('https')
                    ? item.doctorImgUrl
                    : 'https://hkcmereye.com' + item.doctorImgUrl
                "
                :alt="`希瑪眼科中心_眼科醫生_${item.doctorName}眼科醫生`"
                :title="`希瑪眼科中心_眼科醫生_${item.doctorName}眼科醫生`"
              />
            </div>
            <div class="docEnName">{{ item.doctorEnName }}</div>
          </div>
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
  .docImgDS {
    max-width: 312px !important;
    width: 100%;
  }
  margin-bottom: 50px;
  & > div:first-child {
    margin-left: 695px;
    margin-top: 98px;
    position: relative;
    & > .title {
      position: relative;
      -ms-writing-mode: tb-lr;
      writing-mode: vertical-lr;
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 400;
      font-size: 40.1431px;
      line-height: 46px;
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
    & > div:last-child {
      background: #f2f2f2;
      width: 738px;
      height: 543px;
      position: absolute;
      top: -98px;
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
        max-width: 265px;
        position: relative;
        & > div:first-child {
          & > img {
            z-index: 9;
            width: 100%;
            position: relative;
          }
        }

        .docEnName {
          font-family: 'ButterTangXin';
          font-style: normal;
          font-weight: 400;
          font-size: 32.3948px;
          line-height: 108px;
          text-align: center;
          color: #2958a3;
          position: absolute;
          z-index: 10;
        }
      }
      .orderLink {
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
        text-align: center;
        letter-spacing: 0.1em;
        color: #515151;
      }
      .docEducation {
        display: flex;
        flex-direction: row;
        margin-top: 29px;
        & > div:first-child {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 15px;
          line-height: 35px;
          text-align: center;
          letter-spacing: 0.1em;
          color: #515151;
          margin-right: 36px;
        }

        & > div:last-child {
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 350;
          font-size: 15px;
          line-height: 35px;
          letter-spacing: 0.1em;
          color: #515151;
          white-space: pre-wrap !important;
        }
      }
    }
  }

  ul > li:nth-child(2) {
    .orderLink {
      bottom: -40px !important;
    }
  }

  ul > li:nth-child(10) {
    & > a {
      bottom: -40px;
    }
  }

  ul > li:nth-child(1) {
    .orderLink {
      bottom: -80px !important;
    }

    & > div:nth-child(1) {
      // margin-top: 65px !important;
    }

    & > div:nth-child(2) {
      & > div:nth-child(2) {
        top: 74px;
        left: -37px;
      }
    }
  }

  ul > li:nth-child(2) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 102px;
        left: -116px;
      }

      & > div:nth-child(1)::before {
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

  ul > li:nth-child(3) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        top: 116px;
        left: -102px;
      }

      & > div:nth-child(1)::before {
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

  ul > li:nth-child(4) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -53px;
        top: 37px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        bottom: -68px;
        content: '';
        height: 284px;
        left: -84px;
        position: absolute;
        width: 312px;
      }
    }
  }
  ul > li:nth-child(5) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -107px;
        top: 129px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 202px;
        left: -221px;
        position: absolute;
        top: 83px;
        width: 449px;
      }
    }
  }

  ul > li:nth-child(6) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -100px;
        top: 70px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 284px;
        left: -224px;
        position: absolute;
        top: -47px;
        width: 488px;
      }
    }
  }

  ul > li:nth-child(7) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -62px;
        top: 102px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 281px;
        left: -52px;
        position: absolute;
        top: -44px;
        width: 276px;
      }
    }
  }

  ul > li:nth-child(8) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        right: -66px;
        top: 0;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        bottom: -55px;
        content: '';
        height: 322px;
        left: -298px;
        position: absolute;
        width: 515px;
      }
    }
  }

  ul > li:nth-child(9) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -80px;
        top: 69px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 284px;
        left: -59px;
        position: absolute;
        top: -47px;
        width: 276px;
      }
    }
  }

  ul > li:nth-child(10) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        right: -71px;
        top: -3px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 184px;
        left: -341px;
        position: absolute;
        top: 59px;
        width: 558px;
      }
    }

    & > a {
      bottom: -40px !important;
    }
  }

  ul > li:nth-child(11) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -100px;
        top: 69px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 322px;
        left: -78px;
        position: absolute;
        top: -47px;
        width: 342px;
      }
    }
  }

  ul > li:nth-child(12) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -80px;
        top: 100px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        bottom: -46px;
        content: '';
        height: 250px;
        left: -46px;
        position: absolute;
        width: 267px;
      }
    }
  }

  ul > li:nth-child(13) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -120px;
        top: 30px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 273px;
        left: -54px;
        position: absolute;
        top: -47px;
        width: 275px;
      }
    }
  }

  ul > li:nth-child(14) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -136px;
        top: 135px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 211px;
        left: -222px;
        position: absolute;
        top: 44px;
        width: 443px;
      }
    }
  }

  ul > li:nth-child(15) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -100px;
        top: 30px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 283px;
        left: -72px;
        position: absolute;
        top: -57px;
        width: 336px;
      }
    }
  }

  ul > li:nth-child(16) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }

      & > div:nth-child(2) {
        left: -120px;
        top: 130px;
      }

      & > div:nth-child(1)::before {
        background: #f2f2f2;
        bottom: -50px;
        content: '';
        height: 283px;
        left: -111px;
        position: absolute;
        width: 336px;
      }
    }
  }
  ul > li:nth-child(17) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -86px;
        top: 13px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 283px;
        left: -53px;
        position: absolute;
        top: -39px;
        width: 277px;
      }
    }
  }

  ul > li:nth-child(18) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -111px;
        top: 129px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 245px;
        left: -297px;
        position: absolute;
        top: 45px;
        width: 521px;
      }
    }
  }

  ul > li:nth-child(19) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        right: -96px;
        top: 40px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 285px;
        left: -62px;
        position: absolute;
        top: 45px;
        width: 286px;
      }
    }
  }

  ul > li:nth-child(20) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -68px;
        top: 40px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 286px;
        left: -48px;
        position: absolute;
        top: -50px;
        width: 260px;
      }
    }
  }

  ul > li:nth-child(21) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -120px;
        top: 16px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 277px;
        left: -154px;
        position: absolute;
        top: -32px;
        width: 366px;
      }
    }
  }

  ul > li:nth-child(22) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        left: -100px;
        top: 156px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        bottom: -45px;
        content: '';
        height: 277px;
        left: -44px;
        position: absolute;
        width: 252px;
      }
    }
  }
  ul > li:nth-child(23) {
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
        width: 252px;
        height: auto;
      }
      & > div:nth-child(2) {
        left: -103px;
        top: 7px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 224px;
        left: -315px;
        position: absolute;
        top: 79px;
        width: 523px;
      }
    }
  }
  ul > li:nth-child(24) {
    & > div:nth-child(1) {
      .docName {
        white-space: nowrap;
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
        // width: 264px;
        // height: 330px;
      }
      & > div:nth-child(2) {
        right: -103px;
        top: 157px;
      }
      & > div:nth-child(1)::before {
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
  ul > li:nth-child(25) {
    & > div:nth-child(1) {
      .docName {
        white-space: nowrap;
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        right: -120px;
        top: 50px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 224px;
        left: -315px;
        position: absolute;
        top: 79px;
        width: 523px;
      }
    }
  }

  ul > li:nth-child(26) {
    & > div:nth-child(1) {
      .docName {
        white-space: nowrap;
      }
    }
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        position: relative;
      }
      & > div:nth-child(2) {
        bottom: 150px;
        right: -70px;
      }
      & > div:nth-child(1)::before {
        background: #f2f2f2;
        content: '';
        height: 224px;
        left: -105px;
        position: absolute;
        top: 145px;
        width: 300px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .medical-team {
    & > div:first-child {
      margin-left: 0px;
      margin-top: 78px;
      & > .title {
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
      & > div:last-child {
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
        margin-bottom: 50px;
        .docDes {
          align-items: flex-start;
          margin-top: 0px;
          &.docDes-en {
            max-width: 45%;
          }
        }
        .orderLink {
          width: 90px;
          height: 34px;
          font-size: 16px;
          line-height: 34px;
          margin: 24.5px auto 0;
          display: block;
        }

        .docName {
          position: absolute;
          width: calc(100vw - 60px);
          right: 0;
          top: -50px;
          text-align: left;
          font-size: 24px;
          &.docName-en {
            font-size: 18px;
          }
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
          max-width: 165px;
          width: 60%;
          margin-top: 29px;
          margin-right: 15px;
          div {
            img {
              max-width: 165px;
            }
          }
          &.docImg-en {
            min-width: 50%;
            max-width: 50%;
            img {
              width: 100%;
            }
          }

          .docEnName {
            font-size: 20px;
            left: 50px;
            width: 100%;
            text-align: right;
            line-height: 25px;
            top: 160px;
            position: relative;
            top: 0 !important;
            left: 0 !important;
            z-index: 5;
          }
        }

        .docEducation {
          & > div:first-child {
            margin-right: 0px;
            font-size: 12px;
            min-width: 40px;
            text-align: left;
            line-height: 16px;
            &.edutitle-en {
              display: none;
            }
          }
          & > div:last-child {
            font-size: 12px;
            line-height: 160%;
            margin-bottom: 6px;
            padding-right: 5px;
          }
        }
      }
    }

    ul > li:nth-child(1) {
      max-height: 266px;
      .orderLink {
        bottom: 10px !important;
      }

      & > div:nth-child(2) {
        .docEnName {
          top: 150px;
        }
      }

      & > div:nth-child(2) {
        margin-top: 20px !important;
      }

      &::before {
        content: '';
        background: #f2f2f2;
        position: absolute;
        left: 0;
        bottom: -70px;
        width: 100%;
        height: 200px;
      }
    }

    ul > li:nth-child(3) {
      & > div:nth-child(2) {
        .docEnName {
          top: 150px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(4) {
      & > div:nth-child(2) {
        .docEnName {
          bottom: 10px !important;
        }

        & > div:nth-child(1)::before {
          width: 100%;
          left: -30px;
          top: 38px;
          height: 140px;
        }
      }
    }

    ul > li:nth-child(5) {
      & > div:nth-child(2) {
        .docEnName {
          top: 170px !important;
        }

        & > div:nth-child(1)::before {
          width: 100%;
          left: -30px;
          top: 38px;
          height: 120px;
        }
      }
    }

    ul > li:nth-child(6) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: -30px;
          height: 170px;
        }
      }
    }

    ul > li:nth-child(7) {
      & > div:nth-child(2) {
        .docEnName {
          bottom: 70px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: -30px;
          height: 180px;
        }
      }
    }

    ul > li:nth-child(8) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: 100%;
          left: -30px;
          top: 38px;
          height: 170px;
        }
      }
    }

    ul > li:nth-child(9) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: -30px;
          height: 170px;
        }
      }
    }

    ul > li:nth-child(10) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul > li:nth-child(11) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul > li:nth-child(12) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul > li:nth-child(13) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul > li:nth-child(14) {
      & > div:nth-child(2) {
        & > div:nth-child(1)::before {
          width: calc(100% + 10px);
          left: -30px;
          top: 30px;
          height: 110px;
        }
      }
    }

    ul > li:nth-child(15) {
      .docEnName {
        bottom: 0px !important;
      }

      & > div:nth-child(2) {
        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(16) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(17) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(18) {
      & > div:nth-child(2) {
        .docEnName {
          bottom: -5px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(19) {
      & > div:nth-child(2) {
        .docEnName {
          bottom: -5px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(20) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(21) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(22) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 30px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(23) {
      & > div:nth-child(2) {
        width: 104px;
        height: auto;
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1)::before {
          width: calc(100% - 70px);
          left: -30px;
          top: 38px;
          height: 150px;
        }
      }
    }

    ul > li:nth-child(24) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
        }
        & > div:nth-child(1) {
          width: 100%;
          height: auto;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 70px);
          left: -30px;
          top: 0px;
          height: 110px;
        }
      }
    }
    ul > li:nth-child(25) {
      & > div:nth-child(2) {
        .docEnName {
          top: 175px !important;
          white-space: nowrap;
        }
        & > div:nth-child(1) {
          width: 100%;
          height: auto;
        }

        & > div:nth-child(1)::before {
          width: calc(100% + 70px);
          left: -30px;
          top: 0px;
          height: 110px;
        }
      }
    }
    // ul > li:nth-child(25) {
    //   & > div:nth-child(2) {
    //     .docEnName {
    //       top: 175px !important;
    //     }
    //     & > div:nth-child(1) {
    //       width: 100%;
    //       height: auto;
    //     }

    //     & > div:nth-child(1)::before {
    //       width: calc(100% + 0px);
    //       left: 40px;
    //       top: 50px;
    //       height: 150px;
    //     }
    //   }
    // }

    ul > li:nth-child(26) {
      & > div:nth-child(2) {
        .docEnName {
          bottom: 155px;
          right: -70px;
        }
        & > div:nth-child(1) {
          width: 100%;
          height: auto;
        }

        & > div:nth-child(1)::before {
          height: 150px;
          left: 40px;
          top: 50px;
          width: 100%;
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

    & > div:first-child {
      margin-left: 190px;
    }
  }
}
</style>
