<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
// 診所資料電子預約表格
const serviceNavigation = [
  {
    anchorName: '診所資料',
    anchorLink: '/contact-us',
  },
  {
    anchorName: '電子預約表格',
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
    regionName: '香港',
    id: 'hk',
    addressDetailList: [
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/dd7445b8b56c1ecc.jpg',
        addressName: '中環',
        addressDetail: '畢打街1-3號中建大廈1515室',
        subwayExit: '中環站G出口（鄰近置地廣場）',
        contactNumber: '+852 3956 2026',
        clinicHours:
          '星期一至五：09:30—13:30 / 14:30—19:00\n星期六：09:30—13:30\n（星期日及公眾假期休息）',
        googleMaps: 'https://goo.gl/maps/8GnSZHx69s4PgPif6',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/f8eaeceabb9ad939.jpg',
        addressName: '中環',
        addressDetail: '皇后大道中33號萬邦行1908室',
        subwayExit: '中環站D2出口',
        contactNumber: '+852 3956 2026',
        clinicHours:
          '星期一至五：10:00—13:00 / 15:00—19:00\n星期六：09:30—13:30\n（星期日及公眾假期休息）',
        googleMaps: 'https://goo.gl/maps/cTtPrK89qYcgNVcT8',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/a24560b4df5de9f9.jpg',
        addressName: '銅鑼灣',
        addressDetail: '百德新街2-20號恒隆中心1614-15室',
        subwayExit: '銅鑼灣站E出口',
        contactNumber: '+852 3956 2026',
        clinicHours:
          '星期一至五：09:30—13:30 / 14:30—19:00\n星期六：09:30—13:30\n（星期日及公眾假期休息）',
        googleMaps: 'https://goo.gl/maps/DUouFYZSJ9z4cpKx9',
      },
    ],
  },
  {
    regionName: '九龍',
    id: 'kln',
    addressDetailList: [
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/25af72668dfcc99a.jpg',
        addressName: '尖沙咀',
        addressDetail:
          '梳士巴利道18-24號K11 ATELIER辦公大樓1906室（K11 MUSEA附近）',
        subwayExit: '尖東站J出口\n可享限時泊車優惠，詳情請向診所職員查詢',
        contactNumber: '+852 3956 2026',
        clinicHours:
          '星期一至五：09:30—13:30 / 14:30—19:00\n星期六：09:30—14:00\n（星期日及公眾假期休息）',
        googleMaps: 'https://goo.gl/maps/TTtTUsyEVhXdN8Ar5',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/8d8be0a888c145c3.jpg',
        addressName: '旺角',
        addressDetail: '彌敦道625及639號雅蘭中心一期1208室',
        subwayExit: '旺角站E1出口',
        contactNumber: '+852 3956 2026',
        clinicHours:
          '星期一至五：09:30—13:30 / 14:30—19:00\n星期六：09:30—13:30\n（星期日及公眾假期休息）',
        googleMaps: 'https://goo.gl/maps/CqwrB3htjnM7b8XEA',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/a4b4b2ef0fc3d413.jpg',
        addressName: '觀塘',
        addressDetail: '開源道79號鱷魚恤中心16樓1601室',
        subwayExit: '觀塘站A2或B3出口',
        contactNumber: '+852 3956 2026',
        clinicHours:
          '星期一至五：09:30—13:30 / 14:30—19:00\n星期六：09:30—13:30\n（星期日及公眾假期休息）',
        googleMaps: 'https://goo.gl/maps/wwwesw4YnXwr7NtL8',
      },
    ],
  },
  {
    regionName: '新界',
    id: 'nt',
    addressDetailList: [
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/7b2b3aece0568465.jpg',
        addressName: '沙田',
        addressDetail: '沙田正街11-17號偉華中心2樓1C—1F號鋪',
        subwayExit: '沙田站A3出口',
        contactNumber: '+852 3956 2026',
        clinicHours:
          '星期一至五：09:30—13:30 / 14:30—19:00\n星期六：09:30—13:30\n（星期日及公眾假期休息）',
        googleMaps: 'https://goo.gl/maps/7zAGzUVwRMzQ78av7',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/c1613e3f82d89529.jpg',
        addressName: '元朗（恆香老餅家對面）',
        addressDetail: '元朗青山公路45及47號誠信商業大廈地鋪',
        subwayExit: '',
        contactNumber: '+852 3956 2026',
        clinicHours:
          '星期一至五：09:30—13:30 / 14:30—19:00\n星期六：09:30—13:30\n（星期日及公眾假期休息）',
        googleMaps: 'https://goo.gl/maps/7zAGzUVwRMzQ78av7',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/ba40636a2aa6ef8d.jpg',
        addressName: '荃灣',
        addressDetail: '荃灣沙咀道255號思源樓地下',
        subwayExit: '',
        contactNumber: '+852 3956 2026',
        clinicHours:
          '星期一至五：09:30—13:30 / 14:30—19:00\n星期六：09:30—13:30\n（星期日及公眾假期休息）',
        googleMaps: 'https://goo.gl/maps/FukN8ZhA4jCUe7qV9',
      },
      {
        addressImg:
          'https://static.cmereye.com/imgs/2023/02/c1613e3f82d89529.jpg',
        addressName: '將軍澳',
        addressDetail:
          '將軍澳運亨路1號新都城中心一期地下55-56號鋪（寶琳站B2出口）',
        subwayExit: '',
        contactNumber: '+852 3956 2026',
        clinicHours:
          '星期一至五：09:30—13:30 / 14:30—19:00\n星期六：09:30—13:30\n（星期日及公眾假期休息）',
        googleMaps: 'https://goo.gl/maps/9ghQzRFUT5iKspMB7',
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
</script>

<template>
  <div class="contact_eye">
    <div>
      <div>
        <div></div>
        <div>
          <swiper
            :space-between="40"
            :slides-per-view="4"
            :pagination="{ clickable: true }"
            :autoplay="{ delay: 2500, disableOnInteraction: false }"
          >
            <swiper-slide v-for="(item, index) in bannerList" :key="index">
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
          <div class="title text-5xl font-normal relative">眼 科 診 所</div>
          <div class="content">
            <div class="addressBox">
              <div class="switchReionBtnBox flex justify-between items-center">
                <button
                  v-for="(addressItem, index) in addressList"
                  :key="index"
                  :class="{ activeBtn: index == showIndex }"
                  @click="switchReion(index)"
                >
                  {{ addressItem.regionName }}
                </button>
              </div>

              <div class="addressDetailBox">
                <div
                  v-for="(addressItem, index) in addressList"
                  v-show="showIndex == index"
                  :id="addressItem.id"
                  :key="index"
                >
                  <div
                    v-for="(
                      addressDetailItem, index
                    ) in addressItem.addressDetailList"
                    :key="index"
                    class="addressDetailItem flex items-start justify-between mb-24"
                  >
                    <div class="imgBox mr-14">
                      <img :src="addressDetailItem.addressImg" alt="" />
                    </div>
                    <div class="textBox">
                      <h3 class="addressName text-xl mb-4">
                        {{ addressDetailItem.addressName }}
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
                        <p>{{ addressDetailItem.addressDetail }}</p>
                      </div>
                      <div
                        v-if="addressDetailItem.subwayExit !== ''"
                        class="subwayExit flex items-center justify-start mb-4"
                      >
                        <span class="text-sm">
                          <Iconify icon="ion:subway-outline" />
                        </span>
                        <p>{{ addressDetailItem.subwayExit }}</p>
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
                        v-if="addressDetailItem.clinicHours !== ''"
                        class="clinicHours flex items-start justify-start mb-4"
                      >
                        <span class="text-sm mt-1">
                          <Iconify icon="ic:outline-calendar-month" />
                        </span>
                        <p>{{ addressDetailItem.clinicHours }}</p>
                      </div>
                      <div
                        class="addressDetailBtnBox flex items-center justify-between"
                      >
                        <div class="googleMaps">
                          <a
                            :href="addressDetailItem.googleMaps"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Google 地圖</a
                          >
                        </div>
                        <div class="orderBtn" @click="goWhatsApp">
                          <a href=" " target="_blank" rel="noopener noreferrer"
                            >預約</a
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
        <FormFooterInfo
          :from-style="'margin: 0 232px'"
          :bg="`background:${backgd[0]}background:${backgd[1]}background:${backgd[2]}`"
          :co="`color:${'#6a91cf;'}`"
        />
        <PageInformation :service-navigation="serviceNavigation" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact_eye {
  margin-bottom: 50px;
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
  margin: 0 300px;
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
</style>
