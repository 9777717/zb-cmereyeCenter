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
  },
  btnName: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <a :href="link" class="service-button" :class="{'service-button-en': locale === 'en'}">
    <div class="service-button-in" :class="[pageName,btnName]">
      <div class="service-button-in-text" :class="{ inText_2 :type==='2'}">
        <span>{{str}}</span>
      </div>
    </div>
    <div class="service-button-svg">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="65" viewBox="0 0 60 65" fill="none">
        <g clip-path="url(#clip0_5734_738)">
          <path d="M52.0415 29.7191C51.9519 29.6055 51.8457 29.5105 51.729 29.432C51.7147 29.4235 51.7016 29.4145 51.6873 29.4059C51.6785 29.4009 51.6692 29.3947 51.6604 29.3896C51.5402 29.3166 51.4041 29.2605 51.2544 29.2276C50.9799 29.165 50.7075 29.1043 50.4329 29.0417C49.6874 28.8733 48.943 28.7044 48.197 28.5347C47.0939 28.286 45.9905 28.0361 44.8894 27.7853C43.5451 27.481 42.199 27.176 40.8546 26.8717C39.3733 26.5353 37.893 26.2013 36.4129 25.8645C34.9246 25.5279 33.4363 25.1913 31.95 24.8526C30.5621 24.5396 29.175 24.2249 27.7879 23.9102C26.616 23.6443 25.4433 23.38 24.2714 23.114C23.4275 22.9239 22.5845 22.7322 21.7419 22.5417C21.3429 22.4506 20.9441 22.3525 20.543 22.2705C20.526 22.2658 20.5082 22.2627 20.4912 22.258C19.6041 22.0563 18.758 23.0645 19.1275 23.902C19.239 24.16 19.3531 24.4171 19.4666 24.673C19.7741 25.3741 20.0807 26.0727 20.3877 26.7725C20.8419 27.8072 21.2974 28.8415 21.7517 29.8763C22.3049 31.1391 22.861 32.4021 23.4143 33.6649C24.0247 35.0548 24.6334 36.444 25.2455 37.8346C25.8582 39.2306 26.4701 40.6283 27.0845 42.0251C27.6564 43.3267 28.2287 44.6295 28.7977 45.9308C29.2823 47.0319 29.7652 48.1323 30.2481 49.2326C30.5967 50.0252 30.9443 50.8153 31.292 51.6054C31.4571 51.9808 31.6178 52.3592 31.7861 52.7321C31.7932 52.7474 31.7996 52.7645 31.8079 52.7794C32.0081 53.2375 32.4 53.5477 32.9116 53.5689C33.404 53.5905 33.8716 53.3119 34.0831 52.8597C34.5893 51.7773 35.0946 50.6923 35.5991 49.6091C36.3638 47.9737 37.1255 46.338 37.8902 44.7026C38.7449 45.4088 39.6005 46.1134 40.4564 46.8192C41.5391 47.7123 42.6202 48.6047 43.7029 49.4978C44.6339 50.2671 45.5657 51.0348 46.4975 51.8025C46.9531 52.1791 47.4021 52.5678 47.8659 52.933C47.8735 52.9385 47.8782 52.9437 47.8862 52.9504C48.4003 53.3759 49.1968 53.2867 49.6192 52.7753C50.186 52.0892 50.7503 51.404 51.317 50.718C52.2143 49.631 53.1127 48.5437 54.01 47.4567C54.217 47.2047 54.4269 46.9529 54.6334 46.6996C55.0586 46.1843 54.9699 45.3891 54.4584 44.9668C54.0855 44.6592 53.7126 44.3517 53.3414 44.0449C52.4494 43.3095 51.5608 42.5756 50.6704 41.841C49.5882 40.9491 48.5067 40.0556 47.4245 39.1637C46.4922 38.3948 45.56 37.6259 44.6289 36.8565C44.576 36.8152 44.5247 36.7706 44.4738 36.7272C45.0124 36.3374 45.5481 35.9474 46.0867 35.5576C47.6279 34.4412 49.1706 33.3215 50.7126 32.2034C51.0638 31.9474 51.4156 31.6926 51.7685 31.4374C51.8274 31.3946 51.8808 31.3442 51.9315 31.2905C51.9359 31.2875 51.9399 31.2832 51.9426 31.2794C51.9458 31.2769 51.9486 31.2731 51.9513 31.2693C52.1142 31.0961 52.2296 30.8809 52.2596 30.6491C52.2647 30.607 52.269 30.5665 52.2692 30.5262C52.2953 30.239 52.2274 29.9494 52.0423 29.7174L52.0415 29.7191ZM47.4171 31.5494C45.8768 32.6682 44.3344 33.7851 42.7917 34.9048C42.4404 35.1608 42.0883 35.4144 41.7382 35.6699C41.0905 36.1392 41.0668 37.1165 41.6804 37.6228C42.0533 37.9304 42.427 38.2362 42.7987 38.5443C43.6894 39.2801 44.5781 40.0139 45.4692 40.7468C46.5494 41.6409 47.6321 42.534 48.7131 43.4263C49.6454 44.1952 50.5777 44.9641 51.5099 45.733C51.6528 45.8517 51.7977 45.9725 51.941 46.0924C51.6349 46.4619 51.3305 46.8323 51.0256 47.2013C50.1828 48.2222 49.34 49.243 48.4976 50.265C48.4391 50.2161 48.3815 50.1696 48.3247 50.1215C47.4336 49.3885 46.5441 48.6522 45.6542 47.9189C44.5715 47.0257 43.4905 46.1334 42.4078 45.2403C41.4755 44.4714 40.5449 43.7033 39.6131 42.9356C39.1576 42.559 38.7074 42.1707 38.2423 41.8059C38.236 41.8 38.23 41.7953 38.2232 41.7881C37.6062 41.2803 36.6566 41.5168 36.3224 42.2312C35.8171 43.3161 35.3097 44.3991 34.8044 45.484C34.2013 46.7788 33.5957 48.0746 32.9909 49.3687C32.9448 49.2638 32.8982 49.1577 32.8512 49.0504C32.397 48.0156 31.9415 46.9814 31.4873 45.9466C30.934 44.6838 30.3796 43.4215 29.8246 42.1579C29.2147 40.7693 28.6055 39.3789 27.9946 37.9878C27.3807 36.5922 26.7676 35.195 26.1537 33.7995C25.5813 32.4967 25.0107 31.1946 24.4395 29.8913C23.955 28.7902 23.4725 27.6911 22.9892 26.5895C22.7886 26.1302 22.5851 25.6706 22.3833 25.2118C22.63 25.2667 22.8764 25.3246 23.1231 25.3796C24.2261 25.6283 25.3271 25.8791 26.4306 26.129C27.775 26.4333 29.1206 26.7371 30.4655 27.0426C31.9467 27.379 33.4271 27.713 34.9072 28.0498C36.3954 28.3864 37.8813 28.7239 39.37 29.0617C40.7567 29.3752 42.145 29.6894 43.5322 30.0041C44.7041 30.27 45.8768 30.5343 47.0487 30.8003C47.4044 30.8798 47.7594 30.961 48.1156 31.0417C47.8802 31.21 47.6476 31.3787 47.413 31.5495L47.4171 31.5494Z" fill="#797979"/>
          <path d="M41.678 37.622C42.0509 37.9295 42.4246 38.2354 42.7962 38.5434C43.687 39.2793 44.5757 40.0131 45.4667 40.746C46.547 41.6401 47.6297 42.5332 48.7107 43.4255C49.643 44.1944 50.5752 44.9633 51.5075 45.7322C51.6503 45.8509 51.7953 45.9716 51.9386 46.0916C51.6325 46.4611 51.3281 46.8314 51.0232 47.2005C50.1804 48.2214 49.3375 49.2422 48.4952 50.2642C48.4367 50.2153 48.3791 50.1688 48.3223 50.1206C47.4312 49.3877 46.5416 48.6514 45.6518 47.918C44.5691 47.0249 43.488 46.1326 42.4054 45.2395C41.4731 44.4706 40.5425 43.7024 39.6107 42.9348C39.1551 42.5582 38.7049 42.1699 38.2399 41.8051C38.2335 41.7992 38.2276 41.7944 38.2208 41.7873C37.6038 41.2795 36.6542 41.516 36.32 42.2304C35.8147 43.3153 35.3073 44.3982 34.802 45.4831C34.1988 46.778 33.5932 48.0738 32.9884 49.3679C32.9423 49.263 32.8958 49.1569 32.8488 49.0496C32.3945 48.0148 31.9391 46.9805 31.4848 45.9458C30.9316 44.683 30.3771 43.4207 29.8222 42.1571C29.2123 40.7684 28.6031 39.3781 27.9922 37.987C27.3783 36.5914 26.7652 35.1942 26.1513 33.7987C25.5789 32.4958 25.0082 31.1938 24.4371 29.8905C23.9525 28.7894 23.4701 27.6902 22.9867 26.5887C22.7861 26.1294 22.5827 25.6698 22.3809 25.2109C22.6276 25.2659 22.874 25.3238 23.1207 25.3788C24.2237 25.6275 25.3247 25.8783 26.4282 26.1282C27.7726 26.4324 29.1182 26.7363 30.463 27.0417C31.9443 27.3782 33.4247 27.7121 34.9047 28.049C36.393 28.3856 37.8789 28.7231 39.3676 29.0609C40.7543 29.3743 42.1426 29.6886 43.5297 30.0032C44.7017 30.2692 45.8743 30.5335 47.0462 30.7995C47.402 30.879 47.757 30.9601 48.1132 31.0408C47.8777 31.2092 47.6451 31.3779 47.4105 31.5487C45.8703 32.6675 44.3279 33.7844 42.7851 34.9041C42.4339 35.1601 42.0817 35.4137 41.7317 35.6692C41.084 36.1385 41.0603 37.1158 41.6739 37.6221L41.678 37.622Z" fill="white"/>
          <path d="M11.4843 14.6181C11.3322 14.4932 11.1801 14.3682 11.0287 14.2415C10.5317 13.8319 9.69155 13.886 9.29453 14.4172C8.894 14.9538 8.93817 15.7115 9.47002 16.1512C10.5311 17.0274 11.5935 17.9031 12.6541 18.7781C12.8062 18.903 12.9583 19.028 13.1097 19.1547C13.6072 19.5656 14.4469 19.5102 14.8439 18.9791C15.2444 18.4425 15.2002 17.6847 14.6684 17.245C13.6073 16.3689 12.5449 15.4931 11.4843 14.6181Z" fill="#797979"/>
          <path d="M11.3732 27.9927C12.0136 27.9312 12.5813 27.3184 12.4924 26.6564C12.4036 25.9986 11.8424 25.4728 11.1561 25.5375C9.78274 25.6686 8.41104 25.8005 7.03768 25.9316C6.84457 25.9495 6.6507 25.9692 6.45759 25.9872C5.81724 26.0486 5.24953 26.6615 5.33843 27.3234C5.42718 27.9812 5.98841 28.5071 6.67472 28.4424C8.04808 28.3112 9.41977 28.1794 10.7931 28.0483C10.9862 28.0303 11.1801 28.0107 11.3732 27.9927Z" fill="#797979"/>
          <path d="M14.5134 33.9C13.6371 34.9611 12.7612 36.0234 11.886 37.084C11.761 37.2361 11.636 37.3882 11.5094 37.5396C11.0996 38.0366 11.1537 38.8767 11.6849 39.2736C12.2215 39.6741 12.9793 39.6298 13.419 39.098C14.2954 38.0369 15.1713 36.9746 16.0464 35.914C16.1714 35.7619 16.2964 35.6098 16.4231 35.4584C16.8329 34.9614 16.7788 34.1213 16.2476 33.7244C15.711 33.324 14.9532 33.3682 14.5134 33.9Z" fill="#797979"/>
          <path d="M21.9128 15.2253C22.5707 15.1365 23.0971 14.5765 23.032 13.8891C22.901 12.5158 22.7692 11.1443 22.6382 9.77106C22.6202 9.57798 22.6006 9.38412 22.5826 9.19104C22.5213 8.55075 21.9084 7.98315 21.2464 8.07209C20.5885 8.16088 20.0625 8.72211 20.1272 9.40834C20.2582 10.7816 20.39 12.1531 20.521 13.5263C20.5389 13.7194 20.5586 13.9133 20.5765 14.1064C20.6379 14.7467 21.2508 15.3143 21.9128 15.2253Z" fill="#797979"/>
          <path d="M31.3253 17.4007C32.2017 16.3396 33.0776 15.2773 33.9527 14.2167C34.0777 14.0646 34.2027 13.9125 34.3294 13.7611C34.7391 13.2641 34.685 12.4241 34.1539 12.0271C33.6173 11.6267 32.8595 11.6709 32.4197 12.2027C31.5433 13.2638 30.6674 14.3261 29.7923 15.3868C29.6673 15.5389 29.5423 15.691 29.4156 15.8423C29.0059 16.3394 29.06 17.1794 29.5911 17.5763C30.1277 17.9768 30.8855 17.9326 31.3253 17.4007Z" fill="#797979"/>
        </g>
        <defs>
          <clipPath id="clip0_5734_738">
            <rect width="43" height="52" fill="white" transform="translate(0.933594 15.6182) rotate(-20.4697)"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.service-button{
  display: inline-block;
  position: relative;
  &-in{
    filter: drop-shadow(0px 4px 3px rgba($color: #000000, $alpha: .5));
    -webkit-filter: drop-shadow(0px 4px 3px rgba($color: #000000, $alpha: .5));
    overflow: hidden;
    border-radius: 100px;
    -webkit-backface-visibility: hidden;
    -webkit-transform: translate3d(0, 0, 0);
    display: flex;
    align-items: center;
    // mask-image: #000;
    // filter: drop-shadow(0 3px 0 #fff)
    //         drop-shadow(3px 0 0 #fff)
    //         drop-shadow(0 -3px 0 #fff)
    //         drop-shadow(-3px 0 0 #fff)
    //         drop-shadow(0px 4px 3px rgba($color: #000000, $alpha: .5));
    &::before {
      content: "";
      position: absolute;
      top: -100%;
      left: -100%;
      bottom: -100%;
      right: -100%;
      animation: bgposition 5s infinite linear;
      z-index: -1;
    }
    &.cataract{
      &::before {
        background: linear-gradient(45deg, #F6F291 0%, #F4D94A 100%);
        background-size: 100% 100%;
      }
    }
    &.maculopathy{
      &::before {
        background: linear-gradient(45deg, #D8EAEB 0%, #65B6E2 100%);
        background-size: 100% 100%;
      }
    }
    &.glaucoma{
      &::before {
        background: linear-gradient(45deg, #F9E5CA 0%, #F7BECE 100%);
        background-size: 100% 100%;
      }
    }
    &.atropine{
      &::before {
        background: linear-gradient(45deg, #AFDCD1 0%, #B2D46A 100%);
        background-size: 100% 100%;
      }
    }
    &.conjunctivitis{
      &::before {
        background: linear-gradient(45deg, #E3F0EC 0%, #4EABDF 100%);
        background-size: 100% 100%;
      }
    }
    &.xerophthalmia{
      &::before {
        background: linear-gradient(45deg, #62AAEB 0%, #EFF8FF 100%);
        background-size: 100% 100%;
      }
    }
    &.ocularSurfaceDiseases{
      &::before {
        background: linear-gradient(45deg,  #FFD2D8 0%, #B8DDFF  100%);
        background-size: 100% 100%;
      }
    }
    &-icon{
      padding: 30px 25px 20px;
      border-radius: 50%;
      // mask-image:
      // background: #fff;
    }
    &-text{
      &.inText_2{
        border-radius: 0 100px 100px 0;
        margin-left: -30px;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      border: 4px solid #FFF;
      padding: 0 40px;
      transition: all .3s;
      white-space: pre-wrap;
      // box-shadow: 0px 4px 3px rgba($color: #fff, $alpha: .7) inset,0px -4px 3px rgba($color: #000, $alpha: .3) inset;
      // background: #fff;
      // box-shadow: 0px 4px 3px rgba($color: #000, $alpha: .7);
      span{
        color: #FFF;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%;
        transition: all .3s;
        padding: 10px 0 14px;
        text-align: center;
      }
    }
    &:hover{
      // filter: drop-shadow(0 3px 0 #fff)
      //       drop-shadow(3px 0 0 #fff)
      //       drop-shadow(0 -3px 0 #fff)
      //       drop-shadow(-3px 0 0 #fff)
      //       drop-shadow(0px 4px 3px rgba($color: #000000, $alpha: .5))
      //       drop-shadow(0px 4px 3px rgba($color: #000000, $alpha: .5) inset);
      // box-shadow: -2px 4px 3px rgba($color: #000000, $alpha: .3) inset;
      .service-button-in-text{
        box-shadow: 0px 4px 3px rgba($color: #000000, $alpha: .3) inset;
        span{
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        }
      }
    }
    // &:hover~.service-button-svg{
    //   opacity: 1;
    // }
  }
  &-svg{
    position: absolute;
    bottom: -20px;
    right: -20px;
    // opacity: 0;
    transition: all .3s;
    animation: iconNima .75s infinite linear alternate;
  }
  &.service-button-en{
    .service-button-in{
      &-text{
        span{
          font-size: 30px;
          text-align: center;
          line-height: 1.4;
          padding: 10px 0 15px;
        }
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
@keyframes iconNima{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .service-button{
    &-in{
      // filter: drop-shadow(0 1px 0 #fff)
      //       drop-shadow(1px 0 0 #fff)
      //       drop-shadow(0 -1px 0 #fff)
      //       drop-shadow(-1px 0 0 #fff)
      //       drop-shadow(0px 4px 3px rgba($color: #000000, $alpha: .5));
      &-text{
        padding: 0 25px;
        border: 3px solid #FFF;
        span{
          font-size: 18px;
          line-height: 120%;
          padding: 10px 0;
        }
      }
      &.cataractBtn1{
        .service-button-in-text{
          padding: 0 15px;
        }
      }
      &.conjunctivitis{
        .service-button-in-text{
          white-space: initial;
        }
      }
    }
    &-svg{
      transform-origin: center center;
      transform: scale(.6);
    }
    &.service-button-en{
      .service-button-in{
        &-text{
          span{
            font-size: 20px;
            // text-align: center;
            line-height: 1.4;
            padding: 10px 0;
          }
        }
      }
    }
  }
}
</style>