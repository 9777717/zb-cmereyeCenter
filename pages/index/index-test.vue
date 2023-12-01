<script lang="ts" setup>
 import { Pagination,Autoplay } from 'swiper';
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t('pages.index.title'),
  meta(){
    return [
      {
        name: 'description',
        content: t('tdk.index.desc'),
      },
      {
        name: 'keywords',
        content: t('tdk.index.key'),
      }
    ]
  },
}))
const locale = useState<string>('locale.setting')
// 跳转Whatsapp
const goWhatsApp = () => {
  window.open(
    'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2',
    '_blank'
  )
}
const homeSwiperImgs = [
  // {
  //   imgUrl: 'https://static.cmereye.com/imgs/2023/07/cfb698518628078c.jpg'
  // },
  // {
  //   imgUrl: 'https://static.cmereye.com/imgs/2023/07/c87bbe2a6c6bffc6.jpg'
  // },
  // {
  //   imgUrl: 'https://static.cmereye.com/imgs/2023/07/7bba82871272f273.jpg'
  // },
  // {
  //   imgUrl: 'https://static.cmereye.com/imgs/2023/07/4d9021988f9a4bf7.jpg'
  // }
  {
    hkimg: 'https://static.cmereye.com/imgs/hkcmereye-newstyle/banner/mbbanner01.jpg',
    enimg: 'https://static.cmereye.com/imgs/hkcmereye-newstyle/banner/mbbanner01en.jpg',
    title: ['香港上市公司 11間眼科診所'],
    text: ['龐大眼科醫療網絡','提供眼疾治療方案'],
  },
  {
    hkimg: 'https://static.cmereye.com/imgs/hkcmereye-newstyle/banner/mbbanner02.jpg',
    enimg: 'https://static.cmereye.com/imgs/hkcmereye-newstyle/banner/mbbanner02en.jpg',
    title: ['全面涵蓋九大眼科醫療領域'],
    text: ['致力提供全面眼科醫療服務','貼心護理服務 滿足患者不同需求'],
  },
  {
    hkimg: 'https://static.cmereye.com/imgs/hkcmereye-newstyle/banner/mbbanner03.jpg',
    enimg: 'https://static.cmereye.com/imgs/hkcmereye-newstyle/banner/mbbanner03en.jpg',
    title: ['以人為本，以客人為中心'],
    text: ['提供個人化護理和治療選擇','細心治療，用心照顧'],
  },
  {
    hkimg: 'https://static.cmereye.com/imgs/hkcmereye-newstyle/banner/mbbanner04.jpg',
    enimg: 'https://static.cmereye.com/imgs/hkcmereye-newstyle/banner/mbbanner04en.jpg',
    title: ['國際認可先進眼科醫療技術'],
    text: ['高水準眼科治療和服務','實現精確、安全手術操作'],
  },
  {
    hkimg: 'https://static.cmereye.com/imgs/hkcmereye-newstyle/banner/mbbanner05.jpg',
    enimg: 'https://static.cmereye.com/imgs/hkcmereye-newstyle/banner/mbbanner05en.jpg',
    title: ['全心全意守護每雙眼睛'],
    text: ['追求卓越 堅持使命','關注全生命眼健康周期'],
  }
]
let currentImg = ref(0)
var timer: any = null
// const setSwiperImg = () => {
//   timer = setInterval(() => {
//     if (currentImg.value < homeSwiperImgs.length - 1) {
//       currentImg.value++
//     } else {
//       currentImg.value = 0
//     }
//   }, 5000)
// }
onMounted(() => {
  // setSwiperImg()
})
onUnmounted(() => {
  // clearInterval(timer)
})
// 拨打电话
const callTel = () => {
  location.href = 'tel: +852 3956 2025'
}

const toLink = (a:string) => {
  location.href = a
}

const serviceLists = [
  {
    i: '01',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser1.png',
    des: 'pages.medical_service.cataract',
    link: '/medical-service/cataract',
  },
  {
    i: '02',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser6.png',
    des: 'pages.medical_service.maculopathy',
    link: '/medical-service/maculopathy',
  },
  // {
  //   i: '03',
  //   imgUrl:
  //     'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser4.png',
  //   des: 'pages.medical_service.muscae_volitantes',
  //   link: '/medical-service/muscaeVolitantes',
  // },
  {
    i: '04',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser9.png',
    des: 'pages.medical_service.amotioRetinae',
    link: '/medical-service/amotioRetinae',
  },
  {
    i: '05',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser2.png',
    des: 'pages.medical_service.glaucoma',
    link: '/medical-service/glaucoma',
  },
  // {
  //   i: '06',
  //   imgUrl:
  //     'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser5.png',
  //   des: 'pages.medical_service.conjunctivitis',
  //   link: '/medical-service/conjunctivitis',
  // },
  // {
  //   i: '07',
  //   imgUrl:
  //     'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser3.png',
  //   des: 'pages.medical_service.xerophthalmia',
  //   link: '/medical-service/xerophthalmia',
  // },
  {
    i: '08',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser8.png',
    des: 'pages.medical_service.ocularSurfaceDiseases',
    link: '/medical-service/ocularSurfaceDiseases',
  },
  {
    i: '09',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser7.png',
    des: 'pages.medical_service.strabismusAmblyopia',
    link: '/medical-service/strabismusAmblyopia',
  },
  // {
  //   i: '10',
  //   imgUrl: 'https://static.cmereye.com/imgs/2023/06/18da333b4728e821.png',
  //   des: 'pages.medical_service.atropine',
  //   link: '/medical-service/atropine',
  // },
  {
    i: '11',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser10.png',
    des: 'pages.medical_service.eyeOrthopaedicDisease',
    link: '/medical-service/eyeOrthopaedicDisease',
  },
  {
    i: '12',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser11.png',
    des: 'pages.medical_service.medicalOptometry',
    link: '/medical-service/medicalOptometry',
  },
  {
    i: '13',
    imgUrl:
      'https://static.cmereye.com/imgs/hkcmereye-newstyle/service/ser12.png',
    des: 'pages.medical_service.smileHk',
    link: 'https://smile.hkcmereye.com/',
  }
]
</script>

<template>
  <div class="home">
    <div>
      <div class="pcHomeVideoBox" style="width: 100%; height: 100vh;" @click="toLink('/about-us')">
        <video style="width: 100%; height: 100vh; object-fit: fill" autoplay loop muted playsinline x5-playsinline="true" webkit-playsinline="true"
        src="https://static.cmereye.com/static/loffee/video/OPD.mp4" poster="https://static.cmereye.com/imgs/2023/11/e2a2830de8785725.jpg">
         </video>
      </div>
      <div class="mbHomeSwiper">
        <swiper
          :loop="true"
          :autoplay="{ delay: 5000 }"
          :pagination="{ clickable: true }"
          :modules="[Pagination,Autoplay]"
        >
          <swiper-slide class="slideBox" v-for="(swiperItem,swiperIndex) in homeSwiperImgs" :key="swiperIndex">
            <img :src="locale === 'en' ? swiperItem.enimg : swiperItem.hkimg" :alt="swiperItem.title[0]">
            <!-- <div class="slideBox-in">
              <div class="slideBox-in-title">
                <span v-for="(swiperItemTitle,swiperItemTitleIndex) in swiperItem.title" :key="swiperItemTitleIndex">{{swiperItemTitle}}</span>
              </div>
              <div class="slideBox-in-text">
                <span v-for="(swiperItemText,swiperItemTextIndex) in swiperItem.text" :key="swiperItemTextIndex">{{swiperItemText}}</span>
              </div>
            </div> -->
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div>
      <div>
        <div>PROFESSIONAL</div>
        <div>CLINICAL</div>
        <div>SERVICE</div>
      </div>
      <div>
        <nuxt-link to="/medical-service" :style="{cursor: 'pointer'}">
          <div>
            <img src="https://static.cmereye.com/imgs/2023/10/62276a75fc986e3c.jpg" alt="九大眼科醫療服務" />
          </div>
          <div>
          </div>
        </nuxt-link>
        <div>
          <div>
            <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.72727 0L0 2.72727L4.54545 7.27273L0 11.8182L2.72727 14.5455L10 7.27273L2.72727 0Z"
                fill="#2958A3" />
            </svg>
            <div>{{ $t('pages.index.subscribe') }}</div>
          </div>
          <div>
            <div @click="callTel()">
              <div>
                <svg width="33" height="30" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.9247 0C3.09078 0 0 2.41709 0 5.91754C0 6.38639 0.0682793 6.83703 0.154766 7.21029C0.277669 7.74742 0.83756 8.05696 1.35648 7.87033L4.86604 6.59578C5.22564 6.46377 5.4669 6.12238 5.4669 5.74001V4.10131C5.4669 3.6006 5.87657 3.19092 6.37729 3.19092H15.4812C15.9819 3.19092 16.3916 3.6006 16.3916 4.10131V5.74001C16.3916 6.12238 16.6328 6.46377 16.9924 6.59578L20.502 7.87033C21.0209 8.05696 21.5808 7.74742 21.7037 7.21029C21.7857 6.83703 21.8585 6.39094 21.8585 5.91754C21.8585 2.41709 18.7677 0 10.9338 0H10.9247Z"
                    fill="#2958A3" />
                  <path
                    d="M18.6312 11.9123L14.9942 7.36487C14.7165 7.01892 14.5663 6.58648 14.5663 6.14039V5.46215C14.5663 4.96143 14.1566 4.55176 13.6559 4.55176H8.19357C7.69285 4.55176 7.28318 4.96143 7.28318 5.46215V6.14039C7.28318 6.58648 7.13296 7.01436 6.85529 7.36487L3.21828 11.9123C2.31244 13.0412 1.82083 14.4477 1.82083 15.8952V17.3018C1.82083 18.3078 2.63563 19.1226 3.64161 19.1226H18.2079C19.2138 19.1226 20.0286 18.3078 20.0286 17.3018V15.8952C20.0286 14.4477 19.537 13.0457 18.6312 11.9123ZM10.9247 16.3868C8.91278 16.3868 7.28318 14.7572 7.28318 12.7453C7.28318 10.7333 8.91278 9.10371 10.9247 9.10371C12.9367 9.10371 14.5663 10.7333 14.5663 12.7453C14.5663 14.7572 12.9367 16.3868 10.9247 16.3868Z"
                    fill="#2958A3" />
                </svg>
              </div>
              <div>3956 2025</div>
            </div>
            <div class="pcIndexWhatsapp" @click="goWhatsApp()">
              <div class="pcIndexWhatsapp">
                <svg class="pcIndexWhatsapp" width="33" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 24L1.72332 17.608C0.333494 15.1154 -0.108066 12.2067 0.479664 9.41575C1.06739 6.62476 2.64499 4.13866 4.92297 2.41368C7.20094 0.688691 10.0265 -0.1595 12.8811 0.0247802C15.7358 0.209061 18.428 1.41344 20.4638 3.4169C22.4996 5.42036 23.7424 8.08853 23.9642 10.9318C24.186 13.775 23.3718 16.6027 21.6712 18.8958C19.9705 21.1889 17.4974 22.7937 14.7056 23.4157C11.9139 24.0377 8.99074 23.6351 6.47267 22.2819L0 24ZM6.78479 19.8807L7.18509 20.1175C9.20823 21.3216 11.6034 21.7459 13.9188 21.3106C16.2343 20.8752 18.3098 19.6101 19.754 17.754C21.1981 15.8979 21.911 13.5791 21.7582 11.2351C21.6054 8.89101 20.5974 6.68372 18.9245 5.0296C17.2515 3.37547 15.0291 2.38887 12.6767 2.25591C10.3242 2.12295 8.00427 2.85281 6.15447 4.30783C4.30467 5.76284 3.0529 7.84241 2.63532 10.1542C2.21773 12.4661 2.6632 14.8503 3.88767 16.8573L4.1387 17.2698L3.17528 20.8412L6.78479 19.8807Z"
                    fill="#2958A3" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M16.5964 13.2962C16.3513 13.1014 16.0647 12.9643 15.7582 12.8952C15.4517 12.8261 15.1333 12.8268 14.8271 12.8973C14.3671 13.0862 14.0699 13.7931 13.7726 14.157C13.7087 14.2431 13.6154 14.3033 13.5099 14.3265C13.4045 14.3497 13.2942 14.3342 13.1994 14.283C11.5162 13.6322 10.1063 12.4354 9.20084 10.8887C9.12324 10.7923 9.0865 10.6698 9.09838 10.5471C9.11026 10.4244 9.16983 10.311 9.26453 10.2309C9.59605 9.90631 9.83946 9.50435 9.97224 9.06213C10.0017 8.57434 9.88873 8.08847 9.6467 7.66243C9.4596 7.06516 9.10351 6.53332 8.62052 6.12977C8.37031 6.01509 8.09167 5.97519 7.81884 6.01497C7.54601 6.05476 7.29089 6.17249 7.0848 6.35371C6.73033 6.6542 6.4489 7.02985 6.26144 7.4527C6.07398 7.87556 5.98529 8.33477 6.00199 8.79618C6.00308 9.05583 6.03637 9.31437 6.10108 9.56602C6.26541 10.1706 6.51813 10.7482 6.85125 11.2806C7.09158 11.6884 7.35382 12.0833 7.63681 12.4634C8.55651 13.7119 9.71259 14.7719 11.0409 15.5847C11.7074 15.9977 12.4198 16.3335 13.164 16.5855C13.9371 16.932 14.7906 17.065 15.6339 16.9704C16.1144 16.8984 16.5697 16.7108 16.9596 16.4241C17.3496 16.1373 17.6623 15.7601 17.8703 15.3257C17.9924 15.0633 18.0295 14.77 17.9764 14.4859C17.8632 13.9051 17.0705 13.5621 16.5964 13.2962Z"
                    fill="#2958A3" />
                </svg>
              </div>
              <div class="pcIndexWhatsapp">WhatsApp</div>
            </div>
            <a class="pcIndexXscx" href="https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=149cdac9b31444cd81512a1ce54d1ae9&lng=big5&sid=6ac3c6650aef4b099f1018a3cd8a7887&p=https//www.hkcmereye.com/&rf1=&rf2=&msg=&e=www.hkcmereye.com[youce-goutong]&d=1692675682853">
              <div class="pcIndexXscx">
                <svg class="pcIndexXscx" width="33" height="27" viewBox="0 0 28 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 13.5537C1 10.8591 3.625 10.187 6.25 10.187V21.9995C3.3505 21.9995 1 19.649 1 16.7495V13.5537Z"
                    stroke="#2958A3" stroke-width="1.48" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M27.25 13.5537C27.25 10.8591 24.625 10.187 22 10.187V21.9995C24.8994 21.9995 27.25 19.649 27.25 16.7495V13.5537Z"
                    stroke="#2958A3" stroke-width="1.48" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M6.25005 22V8.875C6.25005 4.52576 9.77581 1 14.1251 1C18.4743 1 22.0001 4.52576 22.0001 8.875V22"
                    stroke="#2958A3" stroke-width="1.48" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div class="pcIndexXscx">{{ $t('pages.index.inquire') }}</div>
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="mbCar">
        <div @click="toLink('/medical-service')">
          <div><img src="https://static.cmereye.com/imgs/2023/10/ba067103023aaa5d.jpg" alt="九大眼科醫療服務"></div>
        </div>
      </div> -->
    </div>
    <div class="home-mbContent">
      <div class="home-mbContent-nav">
        <div class="home-mbContent-nav-title">
          <!-- 醫療服務 -->
          {{$t("pages.index.contentnav.title")}}
        </div>
        <div class="home-mbContent-nav-context">
          <!-- 點擊以下圖示，了解更多醫療資訊 -->
          {{$t("pages.index.contentnav.context")}}
        </div>
        <div class="home-mbContent-nav-content">
          <a :href="service.link" v-for="(service,index) in serviceLists" :key="index">
            <img :src="service.imgUrl" alt="">
            <span>{{$t(service.des)}}</span>
          </a>
        </div>
      </div>
      <div class="home-mbContent-box" :class="{'home-mbContent-box-en': locale === 'en'}">
        <div class="partTwo">
			  	<div class="partTwo-in">
			  		<div class="partTwo-in-image"><img src="https://static.cmereye.com/imgs/2023/11/4f0397cca2473c61.jpg" title="希瑪林順潮眼科中心_上市眼科診所"
			  			alt="希瑪林順潮眼科中心_上市眼科診所" class="wow fadeInLeftBig" data-wow-delay=".5s"></div>
			  		<div class="partTwo-in-text">
			  			<div class="wow fadeInUp" data-wow-delay="1s">{{$t("pages.index.contentBox.s1_1")}}</div>
			  			<div class="wow fadeInUp" data-wow-delay="1s">{{$t("pages.index.contentBox.s1_2")}}</div>
			  		</div>
			  	</div>
			  	<div class="partTwo-in">
			  		<div class="partTwo-in-image"><img src="https://static.cmereye.com/imgs/2023/11/b727a18986eee34a.jpg" title="希瑪林順潮眼科中心_上市眼科診所"
			  			alt="希瑪林順潮眼科中心_上市眼科診所" class="wow fadeInRightBig" data-wow-delay=".5s"></div>
			  		<div class="partTwo-in-text">
			  			<div class="wow fadeInUp" data-wow-delay="1s">{{$t("pages.index.contentBox.s2_1")}}</div>
			  			<div class="wow fadeInUp" data-wow-delay="1s">{{$t("pages.index.contentBox.s2_2")}}</div>
			  		</div>
			  	</div>
			  	<div class="partTwo-in">
			  		<div class="partTwo-in-image">
			  			<img src="https://static.cmereye.com/imgs/2023/11/10e2463581fde672.png" title="希瑪林順潮眼科中心_上市眼科診所"
			  			alt="希瑪林順潮眼科中心_上市眼科診所" class="wow fadeInLeftBig" data-wow-delay=".5s">
			  			<img src="https://static.cmereye.com/imgs/2023/11/b1571356e3fdc9b3.png" title="希瑪林順潮眼科中心_上市眼科診所"
			  			alt="希瑪林順潮眼科中心_上市眼科診所" class="wow bounceIn" data-wow-delay="1.5s">
			  		</div>
			  		<div class="partTwo-in-text">
			  			<div class="wow fadeInUp" data-wow-delay="1s">{{$t("pages.index.contentBox.s3_1")}}</div>
			  			<div class="wow fadeInUp" data-wow-delay="1s">{{$t("pages.index.contentBox.s3_2")}}</div>
			  		</div>
			  	</div>
			  	<div class="partTwo-in">
			  		<div class="partTwo-in-image"><img src="https://static.cmereye.com/imgs/2023/11/d5832f9c20130912.jpg" title="希瑪林順潮眼科中心_上市眼科診所"
			  			alt="希瑪林順潮眼科中心_上市眼科診所" class="wow fadeInRightBig" data-wow-delay=".5s"></div>
			  		<div class="partTwo-in-text">
			  			<div class="wow fadeInUp" data-wow-delay="1s">{{$t("pages.index.contentBox.s4_1")}}</div>
			  			<div class="wow fadeInUp" data-wow-delay="1s">{{$t("pages.index.contentBox.s4_2")}}</div>
			  		</div>
			  	</div>
			  </div>
      </div>
      <div class="home-mbContent-box" :class="{'home-mbContent-box-en': locale === 'en'}">
        <div>
			  	<div class="indexContext_1">
			  		<div class="indexContext_1-image wow fadeInRight">
			  			<img src="https://static.cmereye.com/imgs/2023/11/d9ed93444cd110d2.jpg" alt="">
			  		</div>
			  		<div class="indexContext_1-text wow fadeInUp">
			  			<h2>
			  				{{$t("pages.index.contentBox.h2_1")}}</h2>
			  			<p>
			  				{{$t("pages.index.contentBox.p1")}}
			  			</p>
			  		</div>
			  	</div>
			  </div>
			  <div>
			  	<div class="indexContext_2">
			  		<div class="indexContext_2-image wow fadeInLeft">
			  			<img src="https://static.cmereye.com/imgs/2023/11/f82b7514325c896f.jpg" alt="">
			  		</div>
			  		<div class="indexContext_2-text">
			  			<h2 class=" wow fadeInUp">
			  				{{$t("pages.index.contentBox.h2_2")}}</h2>
			  			<p class=" wow fadeInUp">
			  				{{$t("pages.index.contentBox.p2")}}
			  			</p>
			  			<div class="indexContext_2-text-in wow fadeInUp">
			  				<div>
			  					<svg xmlns="http://www.w3.org/2000/svg" width="70" height="67" viewBox="0 0 70 67"
			  						fill="none">
			  						<mask id="path-1-outside-1_5260_3216" maskUnits="userSpaceOnUse" x="0" y="0"
			  							width="70" height="67" fill="black">
			  							<rect fill="white" width="70" height="67" />
			  							<path
			  								d="M54.389 37.7297V37.4594L59.5555 33.7522C60.0953 33.3661 60.288 32.6324 60.0181 32.0145L57.4349 26.222L60.0181 20.4296C60.288 19.8117 60.0953 19.078 59.5555 18.6918L54.4275 14.9846L53.7721 8.65152C53.695 7.99504 53.1552 7.45441 52.4997 7.37718L46.1766 6.72069L42.4752 1.58471C42.0896 1.04408 41.3571 0.850991 40.7402 1.12131L34.9568 3.70861L29.1734 1.12131C28.5565 0.850991 27.8239 1.04408 27.4384 1.58471L23.737 6.72069L17.4138 7.37718C16.7584 7.45441 16.2186 7.99504 16.1415 8.65152L15.486 14.9846L10.3581 18.6918C9.8183 19.078 9.62552 19.8117 9.89541 20.4296L12.4787 26.222L9.89541 32.0145C9.62552 32.6324 9.8183 33.3661 10.3581 33.7522L15.486 37.4594V37.7297L1.4131 51.8634C1.02754 52.2495 0.911872 52.8288 1.0661 53.3308C1.25888 53.8328 1.68299 54.219 2.22277 54.2962L11.7075 55.4547L12.8642 64.9158C12.9413 65.4564 13.2883 65.9198 13.8281 66.0742C13.9823 66.1129 14.1366 66.1515 14.2908 66.1515C14.6763 66.1515 15.0233 65.997 15.2932 65.7267L30.1758 50.8207L34.9953 48.6582L39.8148 50.8207L54.6974 65.7267C54.9673 65.997 55.3143 66.1515 55.6999 66.1515C55.8541 66.1515 56.0083 66.1515 56.1626 66.0742C56.6638 65.8812 57.0493 65.4564 57.1264 64.9158L58.2831 55.4547L67.7679 54.2962C68.3077 54.219 68.7703 53.8714 68.9246 53.3308C69.1174 52.8288 68.9631 52.2495 68.5776 51.8634L54.4661 37.7297H54.389ZM15.3318 61.672L14.4065 53.9873C14.3293 53.3308 13.8281 52.8288 13.1727 52.7516L5.50003 51.8247L15.9101 41.3983L16.1415 43.7925C16.2186 44.449 16.7584 44.9896 17.4138 45.0669L23.737 45.7234L26.8986 50.1256L15.3318 61.7106V61.672ZM35.5351 45.8392C35.5351 45.8392 35.1496 45.7234 34.9568 45.7234C34.764 45.7234 34.5712 45.762 34.3784 45.8392L29.0577 48.2334L25.6262 43.5222C25.3949 43.1747 25.0093 42.9816 24.6238 42.943L18.8404 42.3637L18.2621 36.5712C18.2235 36.1851 17.9922 35.7989 17.6837 35.5672L12.9799 32.1303L15.3704 26.8013C15.5246 26.4151 15.5246 25.9903 15.3704 25.6428L12.9799 20.3137L17.6837 16.8768C18.0307 16.6451 18.2235 16.259 18.2621 15.8728L18.8404 10.0803L24.6238 9.50108C25.0093 9.46247 25.3949 9.23078 25.6262 8.92185L29.0577 4.21063L34.3784 6.60485C34.764 6.75931 35.1881 6.75931 35.5351 6.60485L40.8558 4.21063L44.2873 8.92185C44.5187 9.26939 44.9042 9.46247 45.2898 9.50108L51.0732 10.0803L51.6515 15.8728C51.6901 16.259 51.9214 16.6451 52.2298 16.8768L56.9337 20.3137L54.5432 25.6428C54.389 26.0289 54.389 26.4537 54.5432 26.8013L56.9337 32.1303L52.2298 35.5672C51.8828 35.7989 51.6901 36.1851 51.6515 36.5712L51.0732 42.3637L45.2898 42.943C44.9042 42.9816 44.5187 43.2133 44.2873 43.5222L40.8558 48.2334L35.5351 45.8392ZM56.7794 52.7516C56.124 52.8288 55.6228 53.3308 55.5457 53.9873L54.6203 61.672L43.0535 50.087L46.2151 45.6847L52.5383 45.0283C53.1937 44.951 53.7335 44.4104 53.8106 43.7539L54.042 41.3597L64.4521 51.7861L56.7794 52.7129V52.7516Z" />
			  						</mask>
			  						<path
			  							d="M54.389 37.7297V37.4594L59.5555 33.7522C60.0953 33.3661 60.288 32.6324 60.0181 32.0145L57.4349 26.222L60.0181 20.4296C60.288 19.8117 60.0953 19.078 59.5555 18.6918L54.4275 14.9846L53.7721 8.65152C53.695 7.99504 53.1552 7.45441 52.4997 7.37718L46.1766 6.72069L42.4752 1.58471C42.0896 1.04408 41.3571 0.850991 40.7402 1.12131L34.9568 3.70861L29.1734 1.12131C28.5565 0.850991 27.8239 1.04408 27.4384 1.58471L23.737 6.72069L17.4138 7.37718C16.7584 7.45441 16.2186 7.99504 16.1415 8.65152L15.486 14.9846L10.3581 18.6918C9.8183 19.078 9.62552 19.8117 9.89541 20.4296L12.4787 26.222L9.89541 32.0145C9.62552 32.6324 9.8183 33.3661 10.3581 33.7522L15.486 37.4594V37.7297L1.4131 51.8634C1.02754 52.2495 0.911872 52.8288 1.0661 53.3308C1.25888 53.8328 1.68299 54.219 2.22277 54.2962L11.7075 55.4547L12.8642 64.9158C12.9413 65.4564 13.2883 65.9198 13.8281 66.0742C13.9823 66.1129 14.1366 66.1515 14.2908 66.1515C14.6763 66.1515 15.0233 65.997 15.2932 65.7267L30.1758 50.8207L34.9953 48.6582L39.8148 50.8207L54.6974 65.7267C54.9673 65.997 55.3143 66.1515 55.6999 66.1515C55.8541 66.1515 56.0083 66.1515 56.1626 66.0742C56.6638 65.8812 57.0493 65.4564 57.1264 64.9158L58.2831 55.4547L67.7679 54.2962C68.3077 54.219 68.7703 53.8714 68.9246 53.3308C69.1174 52.8288 68.9631 52.2495 68.5776 51.8634L54.4661 37.7297H54.389ZM15.3318 61.672L14.4065 53.9873C14.3293 53.3308 13.8281 52.8288 13.1727 52.7516L5.50003 51.8247L15.9101 41.3983L16.1415 43.7925C16.2186 44.449 16.7584 44.9896 17.4138 45.0669L23.737 45.7234L26.8986 50.1256L15.3318 61.7106V61.672ZM35.5351 45.8392C35.5351 45.8392 35.1496 45.7234 34.9568 45.7234C34.764 45.7234 34.5712 45.762 34.3784 45.8392L29.0577 48.2334L25.6262 43.5222C25.3949 43.1747 25.0093 42.9816 24.6238 42.943L18.8404 42.3637L18.2621 36.5712C18.2235 36.1851 17.9922 35.7989 17.6837 35.5672L12.9799 32.1303L15.3704 26.8013C15.5246 26.4151 15.5246 25.9903 15.3704 25.6428L12.9799 20.3137L17.6837 16.8768C18.0307 16.6451 18.2235 16.259 18.2621 15.8728L18.8404 10.0803L24.6238 9.50108C25.0093 9.46247 25.3949 9.23078 25.6262 8.92185L29.0577 4.21063L34.3784 6.60485C34.764 6.75931 35.1881 6.75931 35.5351 6.60485L40.8558 4.21063L44.2873 8.92185C44.5187 9.26939 44.9042 9.46247 45.2898 9.50108L51.0732 10.0803L51.6515 15.8728C51.6901 16.259 51.9214 16.6451 52.2298 16.8768L56.9337 20.3137L54.5432 25.6428C54.389 26.0289 54.389 26.4537 54.5432 26.8013L56.9337 32.1303L52.2298 35.5672C51.8828 35.7989 51.6901 36.1851 51.6515 36.5712L51.0732 42.3637L45.2898 42.943C44.9042 42.9816 44.5187 43.2133 44.2873 43.5222L40.8558 48.2334L35.5351 45.8392ZM56.7794 52.7516C56.124 52.8288 55.6228 53.3308 55.5457 53.9873L54.6203 61.672L43.0535 50.087L46.2151 45.6847L52.5383 45.0283C53.1937 44.951 53.7335 44.4104 53.8106 43.7539L54.042 41.3597L64.4521 51.7861L56.7794 52.7129V52.7516Z"
			  							fill="#8AD8DD" />
			  						<path
			  							d="M54.389 37.7297V37.4594L59.5555 33.7522C60.0953 33.3661 60.288 32.6324 60.0181 32.0145L57.4349 26.222L60.0181 20.4296C60.288 19.8117 60.0953 19.078 59.5555 18.6918L54.4275 14.9846L53.7721 8.65152C53.695 7.99504 53.1552 7.45441 52.4997 7.37718L46.1766 6.72069L42.4752 1.58471C42.0896 1.04408 41.3571 0.850991 40.7402 1.12131L34.9568 3.70861L29.1734 1.12131C28.5565 0.850991 27.8239 1.04408 27.4384 1.58471L23.737 6.72069L17.4138 7.37718C16.7584 7.45441 16.2186 7.99504 16.1415 8.65152L15.486 14.9846L10.3581 18.6918C9.8183 19.078 9.62552 19.8117 9.89541 20.4296L12.4787 26.222L9.89541 32.0145C9.62552 32.6324 9.8183 33.3661 10.3581 33.7522L15.486 37.4594V37.7297L1.4131 51.8634C1.02754 52.2495 0.911872 52.8288 1.0661 53.3308C1.25888 53.8328 1.68299 54.219 2.22277 54.2962L11.7075 55.4547L12.8642 64.9158C12.9413 65.4564 13.2883 65.9198 13.8281 66.0742C13.9823 66.1129 14.1366 66.1515 14.2908 66.1515C14.6763 66.1515 15.0233 65.997 15.2932 65.7267L30.1758 50.8207L34.9953 48.6582L39.8148 50.8207L54.6974 65.7267C54.9673 65.997 55.3143 66.1515 55.6999 66.1515C55.8541 66.1515 56.0083 66.1515 56.1626 66.0742C56.6638 65.8812 57.0493 65.4564 57.1264 64.9158L58.2831 55.4547L67.7679 54.2962C68.3077 54.219 68.7703 53.8714 68.9246 53.3308C69.1174 52.8288 68.9631 52.2495 68.5776 51.8634L54.4661 37.7297H54.389ZM15.3318 61.672L14.4065 53.9873C14.3293 53.3308 13.8281 52.8288 13.1727 52.7516L5.50003 51.8247L15.9101 41.3983L16.1415 43.7925C16.2186 44.449 16.7584 44.9896 17.4138 45.0669L23.737 45.7234L26.8986 50.1256L15.3318 61.7106V61.672ZM35.5351 45.8392C35.5351 45.8392 35.1496 45.7234 34.9568 45.7234C34.764 45.7234 34.5712 45.762 34.3784 45.8392L29.0577 48.2334L25.6262 43.5222C25.3949 43.1747 25.0093 42.9816 24.6238 42.943L18.8404 42.3637L18.2621 36.5712C18.2235 36.1851 17.9922 35.7989 17.6837 35.5672L12.9799 32.1303L15.3704 26.8013C15.5246 26.4151 15.5246 25.9903 15.3704 25.6428L12.9799 20.3137L17.6837 16.8768C18.0307 16.6451 18.2235 16.259 18.2621 15.8728L18.8404 10.0803L24.6238 9.50108C25.0093 9.46247 25.3949 9.23078 25.6262 8.92185L29.0577 4.21063L34.3784 6.60485C34.764 6.75931 35.1881 6.75931 35.5351 6.60485L40.8558 4.21063L44.2873 8.92185C44.5187 9.26939 44.9042 9.46247 45.2898 9.50108L51.0732 10.0803L51.6515 15.8728C51.6901 16.259 51.9214 16.6451 52.2298 16.8768L56.9337 20.3137L54.5432 25.6428C54.389 26.0289 54.389 26.4537 54.5432 26.8013L56.9337 32.1303L52.2298 35.5672C51.8828 35.7989 51.6901 36.1851 51.6515 36.5712L51.0732 42.3637L45.2898 42.943C44.9042 42.9816 44.5187 43.2133 44.2873 43.5222L40.8558 48.2334L35.5351 45.8392ZM56.7794 52.7516C56.124 52.8288 55.6228 53.3308 55.5457 53.9873L54.6203 61.672L43.0535 50.087L46.2151 45.6847L52.5383 45.0283C53.1937 44.951 53.7335 44.4104 53.8106 43.7539L54.042 41.3597L64.4521 51.7861L56.7794 52.7129V52.7516Z"
			  							stroke="#8AD8DD" mask="url(#path-1-outside-1_5260_3216)" />
			  						<path
			  							d="M48.47 26.2221C48.47 18.7472 42.4209 12.688 34.9568 12.688C27.4927 12.688 21.4435 18.7472 21.4435 26.2221C21.4435 33.6969 27.4927 39.7561 34.9568 39.7561C42.4209 39.7561 48.47 33.6969 48.47 26.2221ZM34.9568 36.3985C29.3504 36.3985 24.7967 31.8382 24.7967 26.2221C24.7967 20.6059 29.3504 16.0456 34.9568 16.0456C40.5632 16.0456 45.1169 20.6059 45.1169 26.2221C45.1169 31.8382 40.5632 36.3985 34.9568 36.3985Z"
			  							fill="#8AD8DD" stroke="#8AD8DD" stroke-width="0.5" />
			  					</svg>
			  				</div>
			  				<span>{{$t("pages.index.contentBox.span1_1")}}<br>{{$t("pages.index.contentBox.span1_2")}}</span>
			  			</div>
			  			<div class="indexContext_2-text-in wow fadeInUp">
			  				<div>
			  					<svg xmlns="http://www.w3.org/2000/svg" width="52" height="74" viewBox="0 0 52 74"
			  						fill="none">
			  						<path
			  							d="M50.9153 18.8969C50.7358 18.3204 50.2171 17.8846 49.6125 17.7835L49.6129 17.7777L34.2536 15.5532L27.3657 1.6049C27.3655 1.60445 27.3653 1.60401 27.3651 1.60356C27.0844 1.01961 26.4675 0.75 25.8874 0.75C25.3074 0.75 24.6905 1.01957 24.4099 1.60343C24.4096 1.60392 24.4094 1.60441 24.4092 1.6049L17.5212 15.5532L2.16239 17.7777L2.1978 18.0251L2.16196 17.7777L2.16209 17.7777C1.52829 17.8685 1.04288 18.32 0.825478 18.8861L0.822403 18.8941L0.819884 18.9023C0.639691 19.4889 0.820305 20.1489 1.2146 20.5877L1.22 20.5937L1.22577 20.5994L12.3313 31.4584L9.69611 46.7667L9.69601 46.7667L9.695 46.7738C9.60779 47.3852 9.82481 48.0198 10.3731 48.3859C10.9019 48.7389 11.5258 48.7833 12.0975 48.519L12.0976 48.5193L12.1086 48.5135L17.5043 45.6862C17.6408 47.6128 17.7283 50.5204 17.4147 53.5996C17.0843 56.8437 16.3108 60.2542 14.7 62.9093H10.0184C8.17158 62.9093 6.69332 64.3905 6.69332 66.2393V69.4713C6.69332 71.3201 8.17158 72.8012 10.0184 72.8012H41.7185C43.5653 72.8012 45.0436 71.3201 45.0436 69.4713V66.2393C45.0436 64.3905 43.5653 62.9093 41.7185 62.9093H37.0369C35.4261 60.2542 34.6526 56.8437 34.3222 53.5996C34.0085 50.5204 34.0961 47.6128 34.2326 45.6862L39.6222 48.5103C39.8643 48.6535 40.1402 48.6942 40.3897 48.6942C40.7424 48.6942 41.0597 48.6036 41.3704 48.3813L41.3721 48.3801C41.8654 48.0208 42.1308 47.3967 42.0419 46.7738L42.042 46.7738L42.0408 46.7667L39.4056 31.4584L50.5112 20.5994L50.5133 20.5973C50.9532 20.1567 51.1378 19.527 50.9153 18.8969ZM32.875 18.7288L45.7744 20.5954L36.4189 29.7095L35.9784 30.1386H36.1671C36.0028 30.4581 35.9465 30.8327 36.005 31.1844L36.0052 31.1853L38.1982 44.0709L26.6551 37.9976C26.413 37.8543 26.137 37.8137 25.8874 37.8137C25.6379 37.8137 25.3618 37.8543 25.1197 37.9976L13.5767 44.0709L15.7697 31.1853L15.7698 31.1844C15.8597 30.6444 15.6781 30.1081 15.2825 29.7119L15.2801 29.7095L5.92447 20.5954L18.8239 18.7288L18.8239 18.7289L18.8293 18.728C19.3606 18.6393 19.8061 18.3264 20.0707 17.8405L20.0709 17.8406L20.0754 17.8315L25.8495 6.11874L31.6219 17.8281C31.8542 18.3359 32.3522 18.6416 32.8696 18.728L32.8696 18.7281L32.875 18.7288ZM36.1378 66.2231H41.6973C41.7121 66.2314 41.7284 66.2414 41.7439 66.2525C41.7563 66.2614 41.7656 66.2691 41.7722 66.2753V69.4123C41.7639 69.4272 41.7538 69.4436 41.7427 69.4592C41.7339 69.4716 41.7262 69.4808 41.7201 69.4875H10.1155C10.1007 69.4791 10.0844 69.4692 10.069 69.4581C10.0566 69.4492 10.0472 69.4415 10.0406 69.4353V66.2982C10.049 66.2833 10.059 66.2669 10.0701 66.2514C10.0789 66.239 10.0866 66.2297 10.0927 66.2231H36.1378ZM20.9122 52.1093C21.1192 48.6357 20.896 45.6073 20.7257 44.0234L25.8874 41.3119L31.0492 44.0234C30.8789 45.6073 30.6557 48.6357 30.8627 52.1093C31.0698 55.5847 31.7084 59.5235 33.2745 62.9093H18.5004C20.0665 59.5235 20.7051 55.5847 20.9122 52.1093Z"
			  							fill="#8AD8DD" stroke="#8AD8DD" stroke-width="0.5" />
			  					</svg>
			  				</div>
			  				<span>{{$t("pages.index.contentBox.span2")}}</span>
			  			</div>
			  			<div class="indexContext_2-text-in wow fadeInUp">
			  				<div>
			  					<img src="https://static.cmereye.com/imgs/2023/11/7999fef5f2ba4028.png" alt="">
			  				</div>
			  				<span>
			  					{{$t("pages.index.contentBox.span3_1")}}<br>{{$t("pages.index.contentBox.span3_2")}}<br>{{$t("pages.index.contentBox.span3_3")}}
			  				</span>
			  			</div>
			  		</div>
			  	</div>
			  </div>
      </div>
      <AboutChildCompsAwards />
    </div>
    <div class="home-bottom">
      <PageFooterMenu />
    </div>

  </div>
</template>
<style lang="scss" scoped>
.home-bottom{
  display: none;
}
.home-mbContent{
  display: none;
}
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  &>div:nth-of-type(1) {
    .mbHomeSwiper {
      display: none;
    }
  }
  &>div:nth-child(2) {
    position: absolute;
    bottom: 10%;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    &>div:nth-child(1) {
      display: flex;
      justify-content: center;
      margin-bottom: 196px;
      flex-direction: column;
      align-items: flex-start;
      &>div:nth-child(1) {
        letter-spacing: 2.409px;
      }
      &>div:nth-child(3) {
        letter-spacing: 18.553px;
      }
      font-family: 'Metropolis';
      font-style: normal;
      font-weight: 700;
      font-size: 24.0948px;
      line-height: 28px;
      letter-spacing: 14.5px;
      text-transform: uppercase;
      color: #ffffff;
    }
    &>div:nth-child(2) {
      display: flex;
      pointer-events: initial;
      &>div,&>a {
        background: #ffffffbf;
      }
      img {
        width: 100%;
      }
      &>a {
        width: 626px;
        padding: 0 24px;
        margin-right: 53px;
        &>div:nth-child(1) {
          margin: 10px 0 9px;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-family: 'Metropolis';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 27px;
          text-align: center;
          letter-spacing: 0.05em;
          color: #2958a3;
          &>div {
            margin-left: 8px;
          }
          svg {
            margin-top: -3px;
          }
        }
        &>div:nth-child(3) {
          margin: 10px 0;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          line-height: 160%;
          text-align: justify;
          letter-spacing: 0.1em;
          color: #2958a3;
        }
      }

      &>div {
        width: 530px;
        &>div:nth-child(1) {
          display: flex;
          align-items: center;
          margin: 15px 0 0 30px;
          font-family: 'Noto Sans HK';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 35px;
          letter-spacing: 0.05em;
          color: #2958a3;
          &>div {
            margin-left: 12px;
          }
          svg {
            margin-top: 6px;
          }
        }
        &>div:nth-child(2) {
          display: flex;
          position: relative;
          justify-content: space-evenly;
          align-items: center;
          padding-bottom: 50px;
          height: 100%;

          &>div,&>a {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            flex: 1;
            min-height: 100px;
            
            &>div:nth-child(2) {
              margin-top: 2px;
              font-family: 'Metropolis';
              font-style: normal;
              font-weight: 400;
              font-size: 16px;
              line-height: 28px;
              text-align: center;
              letter-spacing: 0.05em;

              color: #2958a3;
            }
          }
          &>div{
            border-right: 0.75px solid #2958a3;
          }
        }
      }
    }
    .mbCar {
      display: none;
    }
  }
}

@media screen and (max-width: 768px) {
  .home-bottom{
    display: block;
  }
  .home {
    height: auto;
    &>div:nth-of-type(1) {
      video {
        display: none;
      }
      .pcHomeVideoBox{
        display: none;
      }
      .mbHomeSwiper {
        width: 100%;
        // height: 100vh;
        // transition: all 1s;
        display: block;
        margin-top: 78px;
        // background-size: 100% 100% !important;
        :deep(.swiper-pagination){
          display: flex;
          justify-content: flex-start;
          bottom: auto;
          top: 20px;
          left: 15px;
        }
        .slideBox{
          position: relative;
          img{
            width: 100%;
          }
          &-in{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 126px;
            background: rgba($color: #fff, $alpha: .7);
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            &-title{
              span{
                color: #2958A3;
                text-align: center;
                font-size: 24px;
                font-style: normal;
                font-weight: 700;
                line-height: 43.901px; /* 182.921% */
                letter-spacing: 2.64px;
              }
            }
            &-text{
              span{
                color: #515151;
                text-align: center;
                font-size: 17.69px;
                font-style: normal;
                font-weight: 500;
                line-height: 30.1px; /* 170.153% */
                letter-spacing: 0.885px;
                display: block;
              }
            }
          }
        }
      }
    }
    &>div:nth-child(2) {
      // top: 60vh;
      position: static;
      pointer-events: initial;
      &>div:nth-child(1) {
        display: none;
      }
      &>div:nth-child(2) {
        display: none;
      }
      .mbCar {
        display: block;
        background: rgba($color: #fff, $alpha: .7);
        margin: 0 20px;
        width: auto;
        padding: 10px;
        &>div:nth-of-type(1) {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          color: #2958A3;
          font-size: 20px;
          font-weight: 400;
        }
        &>div:nth-of-type(2) {
          display: flex;

          &>div:nth-of-type(1) {
            img {
              width: 100%;
            }
          }
          &>div:nth-of-type(2) {
            flex: 1;
            color: #2958A3;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            text-align: justify;
          }
        }
      }
    }
  }
  .home-mbContent{
    display: block;
    margin-top: 20px;
    &-nav{
      &-title{
        color: #2958A2;
        text-align: center;
        font-size: 21.597px;
        font-style: normal;
        font-weight: 700;
        line-height: 31.127px;
        letter-spacing: 4.535px;
        position: relative;
        padding-bottom: 10px;
        &::after{
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 45px;
          height: 2px;
          background: #2958A2;
        }
      }
      &-context{
        color: #2958A2;
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 31.127px; /* 247.043% */
        letter-spacing: 2.646px;
        margin-top: 10px;
      }
      &-content{
        width: 100%;
        max-width: 390px;
        margin: 20px auto;
        padding: 0 18px;
        display: flex;
        flex-wrap: wrap;
        &>a{
          width: calc((100% / 3) - 12px);
          padding: 20px 0 15px;
          margin: 0 6px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          // height: 112px;
          border-radius: 11.419px;
          background: #FAFDFF;
          box-shadow: 0.84581px 2.11454px 1.69163px 0px rgba(0, 0, 0, 0.10);
          margin-bottom: 36px;
          img{
            max-width: 50%;
          }
          span{
            color: #515151;
            text-align: center;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 18.566px; /* 154.717% */
            letter-spacing: 0.6px;
            margin-top: 10px;
          }
        }
      }
    }
    &-box{
      .partTwo{
					width: 100%;
					max-width: 1331px;
					margin: 0 auto;
          overflow: hidden;
				}
				.partTwo-in{
					display: flex;
					align-items: center;
					margin-bottom: 56px;
					position: relative;
				}
				.partTwo-in:nth-of-type(even){
					flex-direction: row-reverse;
				}
				.partTwo-in:nth-of-type(even)>.partTwo-in-text>div:nth-of-type(1){
					text-align: left;
				}
				.partTwo-in:nth-of-type(even)>.partTwo-in-image::after{
					left: auto;
					right: -20px;
				}
        .partTwo-in:nth-of-type(even)>.partTwo-in-image{
					display: flex;
					justify-content: flex-end;
				}
				.partTwo-in:nth-of-type(even)>.partTwo-in-text{
					left: 0;
					right: auto;
				}
				.partTwo-in:nth-of-type(3)>.partTwo-in-image{
					position: relative;
				}
				.partTwo-in:nth-of-type(3)>.partTwo-in-image>img:nth-of-type(2){
					position: absolute;
					width: calc((316 / 390) * 100%);
					height: 100%;
					display: block;
					top: 0;
					left: 0;
				}
				.partTwo-in:nth-of-type(3)>.partTwo-in-image::after{
					display: none;
				}
				.partTwo-in-image{
					max-width: 820px;
					position: relative;
          width: 100%;
				}
				.partTwo-in-image img{
					position: relative;
					z-index: 2;
          width: calc((316 / 390) * 100%);
				}
				.partTwo-in-image::after{
					content: '';
					position: absolute;
					bottom: -10px;
					left: -20px;
					width: 75%;
					height: 50%;
					background: #D9D9D9;
					z-index: 1;
				}
				.partTwo-in-text{
					flex: 1;
					max-width: 511px;
          position: absolute;
					z-index: 3;
					right: 0;
					bottom: -16px;
				}
				.partTwo-in-text>div:nth-of-type(1){
					color: #8AD8DD;
					font-style: normal;
					font-weight: 900;
					letter-spacing: 4.217px;
					text-transform: uppercase;
          font-size: 35px;
					line-height: 30px;
					padding: 0 10px;
					margin-bottom: 10px;
					text-align: right;
          filter: drop-shadow(2px 0 0 #fff)
                  drop-shadow(-2px 0 0 #fff)
                  drop-shadow(0 2px 0 #fff)
                  drop-shadow(0 -2px 0 #fff);
				}
				.partTwo-in-text>div:nth-of-type(2){
					text-align: center;
					color: #FFF;
					text-align: center;
					font-style: normal;
					font-weight: 700;
					letter-spacing: 2.4px;
					text-transform: uppercase;
					width: 100%;
					background: #8AD8DD;
          font-size: 16.278px;
					height: 28px;
					line-height: 28px;
					padding: 0 43px;
				}
        .indexContext_1 {
					width: auto;
					display: flex;
					align-items: center;
					padding: 0;
          margin-top: 0px;
          flex-direction: column;
				}

				.indexContext_1-image {
					width: auto;
          padding-right: 2rem;
					order: 1;
					z-index: 1;
					margin-left: 0;
				}

				.indexContext_1-image img {
					width: 100%;
				}

				.indexContext_1-text {
					width: 100%;
					order: 2;
					z-index: 2;
					padding: 0 2rem;
				}

				.indexContext_1-text h2 {
					color: #8AD8DD;
					font-family: Metropolis;
					font-size: 20px;
					font-weight: 700;
					line-height: 30px;
					letter-spacing: 1px;
          margin-top: 1rem;
				}

				.indexContext_1-text p {
					color: #515151;
					text-align: justify;
					font-family: Noto Sans HK;
					font-size: 13px;
					font-style: normal;
					font-weight: 400;
					line-height: 25px;
					letter-spacing: 1px;
					text-transform: uppercase;
					margin-top: 10px;
				}

				.indexContext_2 {
					width: auto;
					display: flex;
					align-items: center;
					margin-top: 40px;
					// margin-bottom: 200px;
					padding: 0;
          flex-direction: column;
				}

				.indexContext_2-image {
					width: auto;
          padding-left: 2rem;
				}

				.indexContext_2-image img {
					width: 100%;
				}

				.indexContext_2-text {
					width: 100%;
					margin-left: 0;
          padding: 0 2rem;
				}

				.indexContext_2-text h2 {
					color: #8AD8DD;
					font-family: Metropolis;
					font-size: 20px;
					font-weight: 700;
					line-height: 35px;
					letter-spacing: 1.6px;
          margin-top: 1rem;
          text-align: center;
				}

				.indexContext_2-text p {
					color: #515151;
					text-align: justify;
					font-family: Noto Sans HK;
					font-size: 13px;
					font-style: normal;
					font-weight: 400;
					line-height: 24.7px;
					letter-spacing: 1.04px;
					text-transform: uppercase;
					margin-top: 10px;
				  width: 100%;
				}

				.indexContext_2-text-in {
					margin-left: 0;
					margin-top: 30px;
					display: flex;
					align-items: center;
					width: 100%;
          padding: 0 1rem;
				}

				.indexContext_2-text-in>div {
					width: 100px;
					min-width: 100px;
					display: flex;
					justify-content: center;
          transform: scale(.7);
				}

				.indexContext_2-text-in>span {
					text-align: center;
					flex: 1;
					font-weight: 400;
					line-height: 18.176px;
						letter-spacing: 0.969px;
					font-size: 12px;
				}
      &.home-mbContent-box-en{
        .partTwo-in-text>div:nth-of-type(2){
          height: auto;
          padding: 5px 10px;
          line-height: 1.2;
          white-space: pre-wrap;
        }
        .partTwo-in:nth-of-type(1)>.partTwo-in-text{
          bottom: -40px;
        }
        .indexContext_1-text{
          padding: 0;
        }
        .indexContext_1-text h2{
          text-align: center;
          white-space: pre-wrap;
        }
        .indexContext_1-text p{
          letter-spacing: .5px;
          padding: 0 2rem;
        }
        .indexContext_2-text p{
          letter-spacing: .9px;
        }
      }
    }
  }
}
@media screen and (min-width: 1920px) {
  .home {
    &>div:nth-child(2) {
      &>div:nth-child(2) {
        display: flex;
        margin-top: 5%;
      }
    }
  }
}
</style>
