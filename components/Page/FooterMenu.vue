<script lang="ts" setup>
import { defineProps } from "vue";
defineProps({
  str:{
    type: String,
    default: ''
  }
})

const menuLists = [
  {
    title: '希瑪眼科中心',
    lists: [
      {
        name: '中心簡介',
        link: '/about-us#centreIntro',
        icon: ''
      },{
        name: '發展歷程',
        link: '/about-us#history',
        icon: ''
      },{
        name: '企業願景',
        link: '/about-us#corporate',
        icon: ''
      },{
        name: '醫療團隊',
        link: '/medical-team',
        icon: ''
      },{
        name: '中心設備',
        link: '/about-us#medicalEquipment',
        icon: ''
      },{
        name: '人才招聘',
        link: '/talent-recruitment',
        icon: ''
      }
    ],
  },
  {
    title: '醫療服務',
    lists: [
      {
        name: '白內障',
        icon: '',
        link: '/medical-service/cataract',
      },{
        name: '青光眼',
        icon: '',
        link: '/medical-service/glaucoma'
      },{
        name: '乾眼症',
        icon: '',
        link: '/medical-service/xerophthalmia'
      },{
        name: '飛蚊症',
        icon: '',
        link: '/medical-service/muscaeVolitantes'
      },{
        name: '結膜炎',
        icon: '',
        link: '/medical-service/conjunctivitis'
      },{
        name: '黃斑病變',
        icon: '',
        link: '/medical-service/maculopathy'
      },{
        name: '兒童斜弱視',
        icon: '',
        link: '/medical-service/strabismusAmblyopia'
      },{
        name: '阿托品眼藥水',
        icon: '',
        link: '/medical-service/atropine'
      },{
        name: '眼表及角膜疾病',
        icon: '',
        link: '/medical-service/ocularSurfaceDiseases'
      },{
        name: '視網膜脫落',
        icon: '',
        link: '/medical-service/amotioRetinae'
      },{
        name: '眼矯形及眼眶疾病',
        icon: '',
        link: '/medical-service/eyeOrthopaedicDisease'
      },{
        name: '醫學驗光配鏡',
        icon: '',
        link: '/medical-service/medicalOptometry'
      }
    ],
  },
  {
    title: '聯絡我們',
    lists: [
      {
        name: 'Tel: (852) 3956 2026',
        icon: 'https://static.cmereye.com/imgs/2023/07/724ec499dbc6fbfd.png',
        link: ''
      },
      {
        name: 'WhatsApp: (852) 9345 1508',
        icon: 'https://static.cmereye.com/imgs/2023/07/4ed161ebeea271cd.png',
        link: ''
      },
      {
        name: 'SMILE專線: (852) 6730 8554',
        icon: 'https://static.cmereye.com/imgs/2023/07/e4927ce3113f0a5d.png',
        link: ''
      },
      {
        name: 'Facebook: cmereyecenter',
        icon: 'https://static.cmereye.com/imgs/2023/07/28d1674922e892cc.png',
        link: ''
      },
      {
        name: 'Instagram: @cmer_eye_center',
        icon: 'https://static.cmereye.com/imgs/2023/07/28f20047d8233ea4.png',
        link: ''
      },
      {
        name: 'Wechat 公眾號: 香港希瑪眼科中心',
        icon: 'https://static.cmereye.com/imgs/2023/07/56fb4969e6637ae4.png',
        link: ''
      },
      {
        name: 'Email: (852) booking@hkcmer.com',
        icon: 'https://static.cmereye.com/imgs/2023/07/0f897e88c12c7f8e.png',
        link: ''
      }
    ]
  },
]

const imgLists = [
  {
    link: 'https://www.facebook.com/cmereyecenter/'
  },
  {
    link: 'https://www.instagram.com/cmer_eye_center/'
  },
  {
    link: 'https://www.youtube.com/channel/UCkYbtBhKYc8XyrgG7SAFzRg'
  },
  {
    link: ''
  },
  {
    link: 'https://weibo.com/u/7083441648?refer_flag=1001030103_&is_all=1'
  }
]

const handleToLinks = (_data:any) => {
  location.href = _data.link
}

</script>

<template>
  <div class="footerMenu">
    <div class="footerMenu-in">
      <div class="footerMenu-in-t">
        <div class="t-in" v-for="(item,index) in menuLists" :key="index">
          <div class="t-in-t">
            {{item.title}}
          </div>
          <div class="t-in-b">
            <div>
              <div v-for="(itemChild,itemChildIndex) in item.lists.slice(0,7)" :key="itemChildIndex" @click="handleToLinks(itemChild)">
                <div v-if="index === 2"><img :src="itemChild.icon" alt=""></div>
                <span v-if="index === 1">{{`<`}}</span>
                <span>{{itemChild.name}}</span>
              </div>
            </div>
            <div class="twoD" v-if="item.lists.length > 7">
              <div v-for="(itemChild,itemChildIndex) in item.lists.slice(7,item.lists.length)" :key="itemChildIndex" @click="handleToLinks(itemChild)">
                <div v-if="index === 2"><img :src="itemChild.icon" alt=""></div>
                <span v-if="index === 1">{{`<`}}</span>
                <span>{{itemChild.name}}</span>
              </div>
            </div>
          </div>
        </div>  
      </div>
      <div class="footerMenu-in-b">
        <div><span @click="handleToLinks({link: '/privacyPolicy'})">私隱政策</span> | <span @click="handleToLinks({link: '/disclaimer'})">免責條款</span></div>
        <div>©2023 希瑪眼科中心 版權所有</div>
        <div class="imgLists">
          <div @click="handleToLinks(iconItem)" v-for="(iconItem,iconIndex) in imgLists" :key="iconIndex">
            <!-- <img src="https://static.cmereye.com/imgs/2023/07/28d1674922e892cc.png" alt=""> -->
          </div>
        </div>
        <div>希瑪眼科醫療控股有限公司</div>
        <div>香港聯交所上市編號03309.HK</div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.footerMenu{
  width: 100%;
  padding: 100px 0 70px;
  border-top: 4px solid #F2F2F2;
  &-in{
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    &-t{
      display: flex;
      justify-content: space-around;
      .t-in{
        &-t{
          color: #2958A3;
          font-size: 25.84px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        &-b{
          margin-top: 5px;
          display: flex;
          &>div{
            &>div{
              cursor: pointer;
              margin-top: 15px;
              &>div{
                display: inline-block;
                vertical-align: middle;
                margin-top: -5px;
                margin-right: 10px;
                width: 25px;
                img{
                  margin: 0 auto;
                }
              }
              span{
                color: #2958A3;
                font-size: 20.672px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                &:first-child{
                  margin-right: 10px;
                }
              }
            }
            &.twoD{
              margin-left: 120px;
            }
          }
        }
      }
    }
    &-b{
      margin-top: 76px;
      color: #2958A3;
      font-size: 20.672px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      div{
        span{
          cursor: pointer;
        }
      }
      .imgLists{
        display: none;
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .footerMenu{
    padding: 35px 0 120px;
    &-in{
      max-width: calc(100% - 60px);
      &-t{
        flex-direction: column;
        .t-in{
          &:not(:last-child){
            margin-bottom: 15px;
          }
          &-t{
            font-size: 19px;
          }
          &-b{
            display: block;
            &>div{
              &>div{
                margin-top: 9px;
                span{
                  font-size: 15px;
                   &:first-child{
                    margin-right: 5px;
                  }
                }
              }
              &.twoD{
                margin-left: 0px;
              }
            }
          }
        }
      }
      &-b{
        margin-top: 30px;
        font-size: 15px;
        line-height: 1.8;
        .imgLists{
          display: flex;
          justify-content: center;
          margin: 10px 0 10px;
          div{
            background-image: url(https://static.cmereye.com/imgs/2023/07/6cc1329d65ca32ae.png);
            background-repeat: no-repeat;
            background-position: 5px 0;
            background-size: cover;
            width: 20px;
            height: 20px;
            &:nth-of-type(2){
              background-position: -35px 0;
            }
            &:nth-of-type(3){
              background-position: -79px 0;
            }
            &:nth-of-type(4){
              background-position: -122.6px 0;
            }
            &:nth-of-type(5){
              background-position: -168.5px 0;
            }
            &:not(:last-child){
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
}
</style>