

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})

const eyesightLists = [
  {
    id: '1',
    title: '白內障測試',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/fed778326c1c14d4.jpg',
    bgColor: '#65C4DA, #D5F2F9'
  },
  {
    id: '2',
    title: '黃斑病變',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/4c0f4bdaa7c0d694.jpg',
    bgColor: '#FFEDC6, #F3DCA8'
  },
  {
    id: '3',
    title: '乾眼症測試',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/d659396044bb2db9.jpg',
    bgColor: '#B6B3DC, #E8E7FC'
  },
  {
    id: '4',
    title: '色盲測試',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/d682a35164fd9df6.jpg',
    bgColor: '#FCDCCD, #FFD6C1'
  },
  {
    id: '5',
    title: '散光測試',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/4dbbf65f2520b488.jpg',
    bgColor: '#BDF6F3, #93DED5'
  },
  {
    id: '6',
    title: '近視遠視',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/1f75f0e805d0e0dd.jpg',
    bgColor: '#B9DFFA, #ACCFE4'
  },
  {
    id: '7',
    title: '眼鏡檢查',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/8969f9433d3bc152.jpg',
    bgColor: '#90E9B9, #D2F1E0',
    hoverBg: '#90E9B9'
  },
  {
    id: '8',
    title: '調節功能',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/1e57f39b0531cec7.jpg',
    bgColor: '#9AD3DD, #E7FAFD'
  },
  {
    id: '9',
    title: '視神經測試',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/9ff8510f4ad9a271.jpg',
    bgColor: '#EBC8A5, #FCEDDE'
  },
  {
    id: '10',
    title: '視覺敏感度',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/eb179419188ee4f1.jpg',
    bgColor: '#F1C1B7, #FFECE9'
  },
  {
    id: '11',
    title: '對比敏感度',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/cfc2f27e213c37db.jpg',
    bgColor: '#C0C0E6, #EEEEFF'
  },
  {
    id: '12',
    title: '中心視力',
    imgUrl: 'https://static.cmereye.com/imgs/2023/06/b76edb5561597e2f.jpg',
    bgColor: '#C8DCA8, #EDFFD0'
  }
]

</script>

<template>
  <div class="eyesight">
    <div class="eyesight-title">
      <div class="eyesight-title-in">
        視力測試
      </div>
    </div>
    <div class="eyesight-content">
      <div v-for="(item,index) in eyesightLists" :key="index">
        <!-- <div :style="{background: `linear-gradient(30deg, ${item.bgColor})`}">
          {{item.title}}
        </div> -->
        <img :src="item.imgUrl" alt="">
      </div>
    </div>
    <div class="eyesight-remark">
      本網站提供的視力測試只是初步評估測試者的視力，如果您有任何眼睛不適的症狀，應盡快尋求眼科專科醫生檢查及治療。
    </div>
  </div>
</template>

<style lang="scss" scoped>
.eyesight{
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  min-height: 100vh;
  &-title{
    width: 100%;
    max-width: 968px;
    margin: 134px auto 0;
    &-in{
      // background: linear-gradient();
      color: #515151;
      writing-mode: vertical-lr;
      font-size: 40.143px;
      line-height: 46.286px;
      letter-spacing: 2.007px;
      margin-left: 20px;
      position: relative;
      &::before{
        content: 'vision test';
        position: absolute;
        left: -40px;
        bottom: 0;
        color: #8AD8DD;
        text-align: center;
        font-size: 23.017px;
        font-family: 'Metropolis';
        font-weight: 500;
        line-height: 54.887px;
        letter-spacing: 2.302px;
        text-transform: uppercase;
      }
    }
  }
  &-content{
    margin-top: 58px;
    display: flex;
    flex-wrap: wrap;
    &>div{
      width: 33.33%;
      display: flex;
      justify-content: center;
      margin-bottom: 100px;
      &>div{
        width: 256px;
        height: 256px;
        border-radius: 25px;
        box-shadow: 9px 10px 12px rgba(0,0,0,.1);
        cursor: pointer;
        transition: all .3s;
        &:hover{
          transform: translateY(-10px);
          box-shadow: 5px 20px 12px rgba(0,0,0,.1);
        }
      }
      img{  
        cursor: pointer;
        border-radius: 25px;
        box-shadow: 9px 10px 12px rgba(0,0,0,.1);
      }
    }
  }
  &-remark{
    width: 100%;
    max-width: 968px;
    margin: 0 auto;
    color: #515151;
    font-size: 20px;
    margin-bottom: 300px;
    line-height: 180%;
  }
}
</style>
