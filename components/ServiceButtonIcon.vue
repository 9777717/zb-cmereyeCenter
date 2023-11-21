<script lang="ts" setup>
import { defineProps } from "vue";
const locale = useState<string>('locale.setting')
defineProps({
  str:{
    type: String,
    default: '即按為你解決煩惱'
  },
  link:{
    type: String,
    default: 'https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2'
  },
  type: {
    type: String,
    default: '1',
  },
  pageName: {
    type: String,
    default: 'cataract',
  }
})
</script>

<template>
  <a :href="link" class="service-button" :class="{'service-button-en': locale === 'en'}">
    <div class="service-button-in" :class="pageName">
      <div class="service-button-in-icon" v-if="type === '1'">
        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="76" viewBox="0 0 78 76" fill="none">
          <g filter="url(#filter0_d_5734_667)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.6061 38.5479C25.7363 34.9375 19.1513 27.8949 20.7308 22.5683C21.5094 19.9385 24.4682 19.1585 25.8697 16.9967C27.8719 13.8988 25.9587 9.8872 24.3125 7.10136C22.7997 4.5161 20.6418 0.549067 17.1936 0.660501C13.5896 0.794221 9.98566 4.02579 7.36056 6.1876C2.31059 10.1546 4.71322 27.4714 19.485 45.9917C34.2345 64.5119 50.5635 70.6408 55.6135 66.5623C58.1718 64.4896 61.8203 62.4392 62.6656 59.0071C63.8002 54.3492 59.4176 50.5827 56.3476 47.8637C54.9238 46.6157 53.2108 45.2339 51.1864 45.4568C48.2498 45.7688 46.5813 48.9781 43.7115 49.5798C37.6827 50.8502 31.6984 42.4258 28.6283 38.5702L28.6061 38.5479Z" fill="white"/>
          </g>
          <g filter="url(#filter1_d_5734_667)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M57.7712 0.661133C48.8503 0.661133 41.6201 6.00994 41.6201 12.5845C41.6201 15.8161 43.3776 18.7356 46.2029 20.8975L41.6201 28.1852L51.1862 23.4604C53.2106 24.129 55.4353 24.5079 57.7712 24.5079C66.692 24.5079 73.9444 19.1814 73.9444 12.5845C73.9444 5.98765 66.7143 0.661133 57.7712 0.661133ZM49.7401 14.5903C48.7168 14.5903 47.7824 13.6543 47.7824 12.6068C47.7824 11.4702 48.7168 10.5341 49.7401 10.5341C50.8525 10.5341 51.8091 11.4702 51.8091 12.6068C51.8091 13.632 50.8747 14.5903 49.7401 14.5903ZM58.1716 14.5903C57.1482 14.5903 56.2139 13.6543 56.2139 12.6068C56.2139 11.4702 57.1482 10.5341 58.1716 10.5341C59.3062 10.5341 60.2405 11.4702 60.2405 12.6068C60.2405 13.632 59.3062 14.5903 58.1716 14.5903ZM66.6031 14.5903C65.5797 14.5903 64.6454 13.6543 64.6454 12.6068C64.6454 11.4702 65.5797 10.5341 66.6031 10.5341C67.7154 10.5341 68.672 11.4702 68.672 12.6068C68.672 13.632 67.7376 14.5903 66.6031 14.5903Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_5734_667" x="0.958984" y="0.658203" width="65.8896" height="75.1094" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5734_667"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5734_667" result="shape"/>
            </filter>
            <filter id="filter1_d_5734_667" x="37.6201" y="0.661133" width="40.3242" height="35.5244" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5734_667"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5734_667" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div class="service-button-in-icon" v-else-if="type === '2'">
        <svg xmlns="http://www.w3.org/2000/svg" width="81" height="76" viewBox="0 0 81 76" fill="none">
          <g filter="url(#filter0_d_5729_463)">
            <path d="M47.6542 62.4309C51.6744 58.4073 51.6744 51.8837 47.6542 47.8601C43.634 43.8364 37.1159 43.8364 33.0957 47.8601C29.0754 51.8837 29.0754 58.4073 33.0957 62.4309C37.1159 66.4546 43.634 66.4546 47.6542 62.4309Z" fill="white"/>
            <path d="M58.2452 25.6724C58.2452 2.59486 40.3787 4.41977 40.3787 4.41977C40.3787 4.41977 22.5122 2.59486 22.5122 25.6724C22.5122 40.9814 11.4707 46.0887 11.4707 46.0887L16.3457 52.8434H64.437L69.312 46.0887C69.312 46.0887 58.2705 40.9814 58.2705 25.6724H58.2452Z" fill="white"/>
            <path d="M40.3796 52.8436H64.4253L69.3003 46.0889H11.459L16.334 52.8436H40.3796Z" fill="white"/>
            <path d="M8.16709 37.2942C6.45768 33.1121 5.58398 28.6765 5.58398 24.1143C5.58398 15.7501 8.58495 7.66468 14.0297 1.35352L16.6255 3.59664C11.7252 9.28683 9.01546 16.5738 9.01546 24.1143C9.01546 28.233 9.80052 32.225 11.3453 36.0016L8.16709 37.3069V37.2942Z" fill="white"/>
            <path d="M72.883 36.559L69.6795 35.3297C71.047 31.7559 71.7434 27.9793 71.7434 24.1014C71.7434 16.2821 68.8564 8.7797 63.6016 3.0008L66.1467 0.681641C71.9713 7.09419 75.1876 15.4204 75.1876 24.1014C75.1876 28.3849 74.4152 32.5796 72.8957 36.559H72.883Z" fill="white"/>
            <path d="M14.8779 31.8704C14.1181 29.3611 13.7383 26.7505 13.7383 24.1145C13.7383 19.2607 15.0552 14.5084 17.537 10.377L19.7909 11.733C17.5496 15.4588 16.372 19.7423 16.372 24.1145C16.372 26.497 16.7139 28.8542 17.3977 31.11L14.8779 31.8704Z" fill="white"/>
            <path d="M66.35 30.1209L63.7922 29.5253C64.1974 27.7511 64.4 25.9388 64.4 24.1013C64.4 18.5885 62.488 13.1898 59.0059 8.93165L61.0445 7.27148C64.9065 12.0112 67.0211 17.9929 67.0211 24.1139C67.0211 26.1416 66.7932 28.1693 66.3373 30.1209H66.35Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_5729_463" x="0.507787" y="0.681641" width="79.7559" height="74.919" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="5.0762"/>
              <feGaussianBlur stdDeviation="2.5381"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5729_463"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5729_463" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div class="service-button-in-icon" v-else>
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="88" viewBox="0 0 90 88" fill="none">
          <g filter="url(#filter0_d_5734_618)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9991 44.9672C28.6327 40.732 20.9081 32.4706 22.7609 26.2223C23.6743 23.1374 27.1452 22.2223 28.7892 19.6864C31.1379 16.0525 28.8936 11.3466 26.9625 8.07868C25.1879 5.04603 22.6566 0.392485 18.6116 0.523203C14.384 0.680064 10.1563 4.47088 7.07695 7.0068C1.15305 11.6603 3.97147 31.9739 21.2995 53.6992C38.6015 75.4244 57.7564 82.6139 63.6803 77.8296C66.6814 75.3983 70.9612 72.9931 71.9528 68.967C73.2838 63.503 68.1428 59.0847 64.5414 55.8952C62.8713 54.4312 60.8618 52.8103 58.4871 53.0717C55.0423 53.4377 53.0851 57.2024 49.7186 57.9083C42.6465 59.3984 35.6265 49.5162 32.0252 44.9934L31.9991 44.9672Z" fill="white"/>
          </g>
          <g filter="url(#filter1_d_5734_618)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M66.2117 0.523438C55.747 0.523438 47.2656 6.79789 47.2656 14.5102C47.2656 18.301 49.3273 21.7258 52.6415 24.2618L47.2656 32.8107L58.4871 27.2683C60.8619 28.0526 63.4715 28.497 66.2117 28.497C76.6764 28.497 85.1838 22.2487 85.1838 14.5102C85.1838 6.77174 76.7025 0.523438 66.2117 0.523438ZM56.7908 16.8631C55.5904 16.8631 54.4944 15.7651 54.4944 14.5364C54.4944 13.2031 55.5904 12.105 56.7908 12.105C58.0957 12.105 59.2178 13.2031 59.2178 14.5364C59.2178 15.739 58.1218 16.8631 56.7908 16.8631ZM66.6814 16.8631C65.481 16.8631 64.3849 15.7651 64.3849 14.5364C64.3849 13.2031 65.481 12.105 66.6814 12.105C68.0123 12.105 69.1084 13.2031 69.1084 14.5364C69.1084 15.739 68.0123 16.8631 66.6814 16.8631ZM76.572 16.8631C75.3715 16.8631 74.2755 15.7651 74.2755 14.5364C74.2755 13.2031 75.3715 12.105 76.572 12.105C77.8768 12.105 78.999 13.2031 78.999 14.5364C78.999 15.739 77.9029 16.8631 76.572 16.8631Z" fill="white"/>
          </g>
          <defs>
            <filter id="filter0_d_5734_618" x="0.259766" y="0.520508" width="75.9082" height="86.7227" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5734_618"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5734_618" result="shape"/>
            </filter>
            <filter id="filter1_d_5734_618" x="43.2656" y="0.523438" width="45.918" height="40.2871" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5734_618"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5734_618" result="shape"/>
            </filter>
          </defs>
        </svg>
      </div>
      <div class="service-button-in-text inText_2">
        <span>{{str}}</span>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.service-button{
  display: inline-block;
  position: relative;
  &-in{
    overflow: hidden;
    border-radius: 50px;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s;
    filter: drop-shadow(0 3px 0 #fff)
            drop-shadow(3px 0 0 #fff)
            drop-shadow(0 -3px 0 #fff)
            drop-shadow(-3px 0 0 #fff)
            drop-shadow(0px 4px 3px rgba($color: #000000, $alpha: .5));
    &-icon{
      padding: 30px 25px 20px;
      border-radius: 50%;
      background: #F6F291;
      z-index: 2;
      transition: all .3s;
      svg{
        animation: iconAnim 3s infinite linear alternate;
      }
    }
    &-text{
      &.inText_2{
        border-radius: 0 50px 50px 0;
        margin-left: -30px;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      padding: 0 40px;
      transition: all .3s;
      background: linear-gradient(45deg,  #F6F291 20%, #F4D94A 100%);
      span{
        color: #FFF;
        text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 180%;
        transition: all .3s;
        text-align: center;
        padding: 5px 0 9px;
      }
    }
    &:hover{
      .service-button-in-icon{
        box-shadow: 3px 2px 3px 0px rgba(0,0,0,.3) inset;
      }
      .service-button-in-text{
        box-shadow: 2px 4px 3px rgba($color: #000000, $alpha: .2) inset;
        span{
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }
  &.service-button-en{
    display: flex;
    justify-content: center;
    width: 100%;
    .service-button-in{
      max-width: 45%;
      &-text{
        padding: 0px 30px;
        span{
          font-size: 28px;
          text-align: center;
          line-height: 1.4;
          padding: 5px 0 10px;
        }
      }
    }
  }
}
@keyframes iconAnim{
  0%{
    transform: scale(1);
  }
  20%{
    transform: scale(1.2);
  }
  25%{
    transform: scale(1.2) rotate(10deg);
  }
  30%{
    transform: scale(1.2) rotate(-10deg);
  }
  35%{
    transform: scale(1.2) rotate(10deg);
  }
  40%{
    transform: scale(1.2) rotate(-10deg);
  }
  60%{
    transform: scale(1);
  }
  100%{
    transform: scale(1);
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .service-button{
    &-in{
      filter: drop-shadow(0 3px 0 #fff)
            drop-shadow(3px 0 0 #fff)
            drop-shadow(0 -3px 0 #fff)
            drop-shadow(-3px 0 0 #fff)
            drop-shadow(0px 4px 3px rgba($color: #000000, $alpha: .5));
      background: linear-gradient(45deg,  #F6F291 0%, #F4D94A 100%);
      border-radius: 15px;
      &-icon{
        padding: 15px 0 5px 10px;
        transform: scale(.8);
        background: none;
      }
      &-text{
        padding: 0 20px;
        background: none;
        &.inText_2{
          border-radius: 0 30px 30px 0;
          margin-left: -30px;
        }
        span{
          font-size: 20px;
          line-height: 120%;
          padding: 10px 0;
        }
      }
    }
    &.service-button-en{
      .service-button-in{
        max-width: 100%;
        &-text{
          padding: 0px 25px;
          
          span{
            font-size: 20px;
            text-align: center;
            line-height: 1.4;
            padding: 5px 0 10px;
          }
        }
      }
    }
    &:hover{
      .service-button-in-icon{
        box-shadow: none;
      }
      .service-button-in-text{
        box-shadow: none;
        span{
          text-shadow: none;
        }
      }
    }
  }
  @keyframes iconAnim{
    0%{
      transform: scale(.8);
    }
    20%{
      transform: scale(1);
    }
    25%{
      transform: scale(1) rotate(10deg);
    }
    30%{
      transform: scale(1) rotate(-10deg);
    }
    35%{
      transform: scale(1) rotate(10deg);
    }
    40%{
      transform: scale(1) rotate(-10deg);
    }
    60%{
      transform: scale(.8);
    }
    100%{
      transform: scale(.8);
    }
  }
}
</style>