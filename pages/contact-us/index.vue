<script lang="ts" setup>
import { Autoplay } from 'swiper'
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '診所資料｜希瑪眼科｜聯絡我們',
  meta: [
    {
      name: 'description',
      content:
        '希瑪眼科中心遍佈港、九、新界，位點包括︰中環、旺角、尖沙咀、銅鑼灣、觀塘、沙田、元朗、荃灣、將軍澳，地址方便，交通便利，環境舒適。診所位置鄰近地鐵站和商場，方伊客人覆診。希瑪眼科中心團隊由從事眼科臨床30多年林順潮醫生帶領，加上20多名經驗豐富的眼科專科醫生、多名註冊視光師及醫療護理人員組成。眼科中心配備全面眼睛檢查與先進眼科醫療儀器，為客人提供安全、準確、可靠的眼科檢查及醫療服務。',
    },
    {
      name: 'keywords',
      content:
        '希瑪眼科 香港希瑪眼科中心 希瑪眼科中心 眼科專科診所 眼科專科中心 香港希瑪眼科 香港希瑪 希瑪 希瑪眼科治療 希瑪眼科收費 希瑪眼科治療  全面眼睛檢查 希瑪林順潮眼科中心 林順潮眼科中心 林順潮眼科診所 眼睛疾病 眼科醫生 兒童眼科 香港眼科 眼科醫院 眼科醫生 眼科診所 希瑪醫療集團 希瑪醫療 中環眼科診所 旺角眼科診所 尖沙咀眼科診所 銅鑼灣眼科診所 觀塘 眼科診所 沙田眼科診所 元朗眼科診所 荃灣眼科診所 將軍澳眼科診所 眼科服務',
    },
  ],
}))

// 診所資料電子預約表格
const serviceNavigation = [
  {
    anchorName:
      'pages.contact_us.clinic_information_title.clinic_information_serviceNavigation1',
    anchorLink: '/contact-us',
  },
  {
    anchorName:
      'pages.contact_us.clinic_information_title.clinic_information_serviceNavigation2',
    anchorLink: '/contact-us/appointmentForm',
  },
]
const bannerList = [
  'https://static.cmereye.com/imgs/2023/02/dd7445b8b56c1ecc.jpg',
  'https://static.cmereye.com/imgs/2023/02/f8eaeceabb9ad939.jpg',
  'https://static.cmereye.com/imgs/2023/02/a24560b4df5de9f9.jpg',
  'https://static.cmereye.com/imgs/2023/02/25af72668dfcc99a.jpg',
  'https://static.cmereye.com/imgs/2023/02/8d8be0a888c145c3.jpg',
  'https://static.cmereye.com/imgs/2023/02/a4b4b2ef0fc3d413.jpg',
  'https://static.cmereye.com/imgs/2023/02/7b2b3aece0568465.jpg',
  'https://static.cmereye.com/imgs/2023/02/c1613e3f82d89529.jpg',
  'https://static.cmereye.com/imgs/2023/02/ba40636a2aa6ef8d.jpg',
  'https://static.cmereye.com/imgs/2023/02/c1613e3f82d89529.jpg',
]
const addressList = [
  {
    regionName:
      'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_regionName',
    id: 'hk',
    addressDetailList: [
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/dd7445b8b56c1ecc.jpg',
        addressName:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList1_addressName',
        addressDetail:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList1_addressDetail',
        subwayExit:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList1_subwayExit',
        contactNumber: '+852 3956 2025',
        clinicHours: [
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList1_clinicHours.clinicHours1',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList1_clinicHours.clinicHours2',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList1_clinicHours.clinicHours3',
        ],
        googleMaps: 'https://goo.gl/maps/8GnSZHx69s4PgPif6',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/f8eaeceabb9ad939.jpg',
        addressName:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList2_addressName',
        addressDetail:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList2_addressDetail',
        subwayExit:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList2_subwayExit',
        contactNumber: '+852 3956 2025',
        clinicHours: [
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList2_clinicHours.clinicHours1',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList2_clinicHours.clinicHours2',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList2_clinicHours.clinicHours3',
        ],
        googleMaps: 'https://goo.gl/maps/cTtPrK89qYcgNVcT8',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/a24560b4df5de9f9.jpg',
        addressName:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList3_addressName',
        addressDetail:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList3_addressDetail',
        subwayExit:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList3_subwayExit',
        contactNumber: '+852 3956 2025',
        clinicHours: [
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList3_clinicHours.clinicHours1',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList3_clinicHours.clinicHours2',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList1_addressDetailList.addressDetailList3_clinicHours.clinicHours3',
        ],
        googleMaps: 'https://goo.gl/maps/DUouFYZSJ9z4cpKx9',
      },
    ],
  },
  {
    regionName:
      'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_regionName',
    id: 'kln',
    addressDetailList: [
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/25af72668dfcc99a.jpg',
        addressName:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList1_addressName',
        addressDetail:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList1_addressDetail',
        subwayExit: [
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList1_subwayExit1',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList1_subwayExit2',
        ],
        contactNumber: '+852 3956 2025',
        clinicHours: [
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList1_clinicHours.clinicHours1',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList1_clinicHours.clinicHours2',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList1_clinicHours.clinicHours3',
        ],
        googleMaps: 'https://goo.gl/maps/TTtTUsyEVhXdN8Ar5',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/8d8be0a888c145c3.jpg',
        addressName:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList2_addressName',
        addressDetail:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList2_addressDetail',
        subwayExit:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList2_subwayExit',
        contactNumber: '+852 3956 2025',
        clinicHours: [
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList2_clinicHours.clinicHours1',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList2_clinicHours.clinicHours2',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList2_clinicHours.clinicHours3',
        ],
        googleMaps: 'https://goo.gl/maps/CqwrB3htjnM7b8XEA',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/07/44e44190b497309f.jpg',
        addressName:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList3_addressName',
        addressDetail:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList3_addressDetail',
        subwayExit:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList3_subwayExit',
        contactNumber: '+852 3956 2025',
        clinicHours: [
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList3_clinicHours.clinicHours1',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList3_clinicHours.clinicHours2',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList2_addressDetailList.addressDetailList3_clinicHours.clinicHours3',
        ],
        googleMaps: 'https://goo.gl/maps/wwwesw4YnXwr7NtL8',
      },
    ],
  },
  {
    regionName:
      'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_regionName',
    id: 'nt',
    addressDetailList: [
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/7b2b3aece0568465.jpg',
        addressName:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList1_addressName',
        addressDetail:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList1_addressDetail',
        subwayExit:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList1_subwayExit',
        contactNumber: '+852 3956 2025',
        clinicHours: [
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList1_clinicHours.clinicHours1',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList1_clinicHours.clinicHours2',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList1_clinicHours.clinicHours3',
        ],
        googleMaps: 'https://goo.gl/maps/7zAGzUVwRMzQ78av7',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/07/b5a72dc3949b4f75.jpg',
        addressName:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList2_addressName',
        addressDetail:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList2_addressDetail',
        subwayExit:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList2_subwayExit',
        contactNumber: '+852 3956 2025',
        clinicHours: [
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList2_clinicHours.clinicHours1',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList2_clinicHours.clinicHours2',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList2_clinicHours.clinicHours3',
        ],
        googleMaps: 'https://goo.gl/maps/Nfh4nebSBo5zTHycA',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/ba40636a2aa6ef8d.jpg',
        addressName:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList3_addressName',
        addressDetail:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList3_addressDetail',
        subwayExit:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList3_subwayExit',
        contactNumber: '+852 3956 2025',
        clinicHours: [
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList3_clinicHours.clinicHours1',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList3_clinicHours.clinicHours2',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList3_clinicHours.clinicHours3',
        ],
        googleMaps: 'https://goo.gl/maps/FukN8ZhA4jCUe7qV9',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/c1613e3f82d89529.jpg',
        addressName:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList4_addressName',
        addressDetail:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList4_addressDetail',
        subwayExit:
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList4_subwayExit',
        contactNumber: '+852 3956 2025',
        clinicHours: [
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList4_clinicHours.clinicHours1',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList4_clinicHours.clinicHours2',
          'pages.contact_us.clinic_information_title.clinic_information_addressList.addressList3_addressDetailList.addressDetailList4_clinicHours.clinicHours3',
        ],
        googleMaps: 'https://goo.gl/maps/o4DpCAr4F52L12Vu8',
      },
    ],
  },
]
const showIndex = ref(0)
const switchReion = (index: any) => {
  showIndex.value = index
}
// 传递背景色
const backgd = [
  '#6a91cf;',
  '-webkit-linear-gradient(to right, #6a91cf, #6a91cf);',
  'linear-gradient(to right, #6a91cf, #6a91cf);',
]
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}


let windowWidth = ref(1920)
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize',getWindowWidth)
})

</script>

<template>
  <div class="contact_eye">
    <div>
      <div>
        <div></div>
        <div>
          <swiper
            :space-between="windowWidth>768? 40:10"
            :slides-per-view="windowWidth>768? 4:2.5"
            :modules="[Autoplay]"
            :loop="true"
            :autoplay="{ delay: 0 }"
            speed="3000"
            class="contact_eye-swiper"
          >
            <swiper-slide v-for="(item, itemIndex) in bannerList" :key="itemIndex">
              <div class="imgBox flex items-center justify-center">
                <img :src="item" alt="" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div>
          <img
            src="https://static.cmereye.com/imgs/2023/02/a2557c0317e17928.png"
            alt="診所資料"
          />
        </div>
      </div>
      <div class="mainCon">
        <div class="contactBody flex items-start justify-start">
          <div class="title text-5xl font-normal relative">
            {{
              $t(
                'pages.contact_us.clinic_information_title.clinic_information_title'
              )
            }}
          </div>
          <div class="content">
            <div class="addressBox">
              <div class="switchReionBtnBox flex justify-between items-center">
                <button
                  v-for="(addressItem, addressItemIndex) in addressList"
                  :key="addressItemIndex"
                  :class="{ 'activeBtn': addressItemIndex === showIndex }"
                  @click="switchReion(addressItemIndex)"
                >
                  {{ $t(addressItem.regionName) }}
                </button>
              </div>

              <div class="addressDetailBox">
                <div
                  v-for="(addressItem, addressItemIndex) in addressList"
                  v-show="showIndex === addressItemIndex"
                  :id="addressItem.id"
                  :key="addressItemIndex"
                >
                  <div
                    v-for="(
                      addressDetailItem, addressDetailItemIndex
                    ) in addressItem.addressDetailList"
                    :key="addressDetailItemIndex"
                    class="addressDetailItem flex items-start justify-between mb-24"
                  >
                    <div class="imgBox mr-14">
                      <img :src="addressDetailItem.addressImg" alt="" />
                    </div>
                    <div class="textBox">
                      <h3 class="addressName text-xl mb-4">
                        {{ $t(addressDetailItem.addressName) }}
                      </h3>
                      <div
                        v-if="addressDetailItem.addressDetail !== ''"
                        class="addressDetail flex items-center justify-start mb-4"
                      >
                        <span class="text-sm">
                          <Iconify
                            icon="material-symbols:location-on-outline"
                          />
                        </span>
                        <p>{{ $t(addressDetailItem.addressDetail) }}</p>
                      </div>
                      <div
                        v-if="addressDetailItem.subwayExit !== ''"
                        class="subwayExit flex items-center justify-start mb-4"
                      >
                        <span class="text-sm">
                          <Iconify icon="ion:subway-outline" />
                        </span>
                        <div v-if="Array.isArray(addressDetailItem.subwayExit)">
                          <p
                            v-for="(ele, eleIndex) in addressDetailItem.subwayExit"
                            :key="eleIndex"
                          >
                            {{ $t(ele) }}
                          </p>
                        </div>
                        <div v-else>
                          {{ $t(addressDetailItem.subwayExit) }}
                        </div>
                      </div>
                      <div
                        v-if="addressDetailItem.contactNumber !== ''"
                        class="contactNumber flex items-center justify-start mb-4"
                      >
                        <span class="text-sm">
                          <Iconify icon="icon-park-outline:phone-telephone" />
                        </span>
                        <p>{{ addressDetailItem.contactNumber }}</p>
                      </div>
                      <div
                        class="clinicHours flex items-start justify-start mb-4"
                      >
                        <span class="text-sm mt-1">
                          <Iconify icon="ic:outline-calendar-month" />
                        </span>
                        <div>
                          <p
                            v-for="(
                              ele, eleIndex
                            ) in addressDetailItem.clinicHours"
                            :key="eleIndex"
                          >
                            {{ $t(ele) }}
                          </p>
                        </div>
                      </div>
                      <div
                        class="addressDetailBtnBox flex items-center justify-between"
                      >
                        <div class="googleMaps">
                          <a
                            :href="addressDetailItem.googleMaps"
                            target="_blank"
                            rel="noopener noreferrer"
                            >{{
                              $t(
                                'pages.contact_us.clinic_information_title.clinic_information_map'
                              )
                            }}</a
                          >
                        </div>
                        <div class="orderBtn" @click="goWhatsApp">
                          <a
                            href=" "
                            target="_blank"
                            rel="noopener noreferrer"
                            >{{
                              $t(
                                'pages.contact_us.clinic_information_title.clinic_information_make'
                              )
                            }}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FormFooterInfo
      :from-style="'margin: 0 232px'"
      :isShowTopTitle="windowWidth<=768"
      :bg="windowWidth>768?`background:${backgd[0]};background:${backgd[1]};background:${backgd[2]};margin: auto;`:'background:rgba(135, 166, 212, 1);'"
      :co="`color:${'#6a91cf;'}`"
    />
    <PageInformation :service-navigation="serviceNavigation" />
    <PageFooterMenu />
  </div>
</template>

<style lang="scss" scoped>
:deep(.contact_eye-swiper .swiper-wrapper) {
  transition-timing-function: linear;
}
.contact_eye {
  margin-bottom: 40px;

  & > div:nth-child(1) {
    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      margin-top: 60px;
      position: relative;

      & > div:nth-child(1) {
        width: 1150px;
        height: 550px;
        background-color: #f2f2f2;
        margin: auto;
      }

      & > div:nth-child(2) {
        position: absolute;
        width: 100%;
        top: 22.5%;
      }

      & > div:nth-child(3) {
        position: absolute;
        z-index: 5;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 180px;
      }
    }
  }
}

.mainCon {
  max-width: 1200px;
  margin: auto;
}

.contactBody {
  margin-top: 150px;
  width: 85%;

  .title {
    writing-mode: vertical-lr;
    margin-left: 7%;
    margin-right: 8%;

    &::after {
      content: 'EYE CENTER';
      position: absolute;
      color: #8ad8dd;
      left: -40px;
      top: 3px;
      text-transform: uppercase;
      font-size: 35px;
      white-space: nowrap;
    }
  }

  .addressBox {
    .switchReionBtnBox {
      margin-bottom: 120px;

      button {
        border: solid 1px #515151;
        padding: 3px 55px;
        font-size: 24px;
        line-height: 160%;
        font-family: auto;
      }

      .activeBtn {
        background: #2958a3;
        color: #fff;
      }
    }
  }

  .addressDetailBox {
    .addressDetailItem {
      .textBox {
        width: 66%;
        font-size: 17px;

        .clinicHours {
          white-space: break-spaces;
        }

        .addressDetailBtnBox {
          text-align: center;

          .googleMaps {
            background-color: #6a91cf;
            color: #fff;
            width: 150px;
            padding: 15px 0;
          }

          .orderBtn {
            background-color: #8ad8dd;
            color: #fff;
            width: 150px;
            padding: 15px 0;
          }
        }
      }

      .imgBox {
        position: relative;

        &::before {
          content: '';
          position: absolute;
          background-color: #f2f2f2;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        img {
          position: relative;
          z-index: 1;
        }
      }

      // 奇数
      &:nth-child(odd) {
        .imgBox {
          margin-top: 20px;

          &::before {
            right: 30px;
            bottom: 45px;
          }
        }
      }

      // 偶数
      &:nth-child(even) {
        .imgBox {
          &::before {
            left: 30px;
            top: 45px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .contact_eye {
    & > div:nth-child(1) {
      & > div:nth-child(1) {
        & > div:nth-child(1) {
          width: calc(100% - 30px);
          height: 250px;
          margin: 40px 0 0 30px;
        }
        & > div:nth-child(2) {
          top: 50%;
        }
        & > div:nth-child(3) {
          width: 80px;
          top: 67%;
        }
      }
    }
  }
  .mainCon{
    width: 100%;
  }
  .contactBody{
    width: 100%;
    margin-top: 40px;
    .title{
      position: absolute;
      top: 130px;
      writing-mode: initial;
      margin-left: 0;
      margin-right: 0;
      left: 40px;
      font-size: 28px;
      letter-spacing: -.1em;
      color: #515151;
      &::after {
        font-size: 18px;
        left: 0;
        top: auto;
        bottom: -80%;
        letter-spacing: 0em;
      }
    }
    .addressBox {
      .switchReionBtnBox {
        // justify-content: space-around;
        width: calc(100% - 60px);
        margin: 0 auto 40px;
        button{
          font-size: 20px;
          padding: 0px 24px;
        }
      }
    }
    .addressDetailBox{
      width: calc(100% - 60px);
      margin: 0 auto;
      .addressDetailItem {
        flex-direction: column;
        .textBox{
          width: 100%;
          font-size: 16px;
          margin-top: 30px;
          .addressName{
            font-size: 30px;
          }
          .addressDetailBtnBox {
            .googleMaps {
              padding: 15px 0 10px;
            }
            .orderBtn {
              padding: 15px 0 10px;
            }
          }
        }
        .imgBox {
          width: calc(100% - 30px);
          margin-left: 30px;
          &::before {
            left: -30px;
            top: -30px;
          }
          img {
            width: 100%;
          }
        }
        &:nth-child(even) {
          .imgBox {
            margin-left: 0;
            &::before {
              left: 30px;
              top: 30px;
            }
          }
          .textBox{
            margin-top: 60px;
          }
        }
      }
    }
  }
}
</style>
