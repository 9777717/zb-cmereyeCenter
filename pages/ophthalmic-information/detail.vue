<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
const route:any = useRoute()
// console.log(route.query.id)
let pageId = ref(0)
let pageDetail = ref({
  sortname: '',
  title: '',
  content: '',
  visits: '',
  update_time: '',
  author: '',
  ext_paperRecoFrom: '',
  source: ''
})
pageId.value = route.query.id
let contentLoading = ref(false)
const getDetail = async () => {
  contentLoading.value = true
  const {data}:any = await useFetch(`https://hkcmereye.com/api.php/content/${pageId.value}`)
  let res = JSON.parse(data.value)
  // console.log(res)
  pageDetail.value = {
    sortname: res.data.sortname,
    title: res.data.title,
    content: res.data.content,
    visits: res.data.visits,
    update_time: res.data.update_time,
    author: res.data.ext_paperRecoDoctor,
    ext_paperRecoFrom: res.data.ext_paperRecoFrom,
    source: res.data.source
  }
  setTimeout(()=>{
    contentLoading.value = false
  },2000)
}

onMounted(()=>{
  setTimeout(()=>{
    getDetail()
  },0)
})


const goLink = (_data:any) => {
  if(_data === '-1'){
    history.go(-1)
  }else{
    location.href = _data
  }
}
</script>

<template>
  <div class="healthInfoDetail">
    <div class="healthInfoDetail-title">
      <div>
        {{pageDetail.sortname}}
      </div>
      <div>
        {{pageDetail.title}}
      </div>
    </div>
    <div class="healthInfoDetail-content" v-loading="contentLoading" v-html="pageDetail.content"></div>
    <div class="healthInfoDetail-bottom">
      <div class="healthInfoDetail-bottom-info">
        <span class="ext_paperRecoFrom" v-if="pageDetail.ext_paperRecoFrom">新聞來源︰{{pageDetail.ext_paperRecoFrom}}</span>
        <span class="Bowtie" v-if="pageDetail.ext_paperRecoFrom === 'Bowtie'" @click="goLink('https://www.bowtie.com.hk')">合作醫療夥伴︰Bowtie</span>
        <span class="author" v-if="pageDetail.author">作者︰{{pageDetail.author}}</span>
        <span class="source" v-if="pageDetail.source" @click="goLink(pageDetail.source)">資料來源︰原文鏈接</span>
        <span v-if="pageDetail.visits">瀏覽次數︰{{pageDetail.visits}}</span>
        <span v-if="pageDetail.update_time">更新時間︰{{pageDetail.update_time}}</span>
        <!-- <span>閱讀更多文章︰</span> -->
        <!-- <span>【近視控制】阿托品眼藥水和OK鏡是甚麼？適合甚麼人士？即睇配戴重點！</span> -->
        <!-- <span>没有了！</span> -->
      </div>
      <div class="healthInfoDetail-bottom-btn">
        <span @click="goLink('-1')">回到所有文章目錄</span>
        <!-- <span>上一篇</span> -->
        <!-- <span>下一篇</span> -->
      </div>
    </div>
    <!-- <PageFooterMenu /> -->
  </div>
</template>


<style lang="scss" scoped>
.healthInfoDetail{
  width: 100%;
  max-width: 1080px;
  margin: 150px auto 0;
  .goBack{
    text-align: right;
    a{
      border-bottom: 1px solid #1b407a;
      font-size: 25px;
    }
  }
  &-title{
    border-bottom: 1px solid #1b407a;
    &>div:first-child{
      color: #1b407a;
      font-size: 30px;
      margin: 20px 0;
      border-left: 10px solid #1b407a;
      padding-left: 20px;
      height: 50px;
      line-height: 50px;
    }
    &>div:last-child{
      font-size: 25px;
      color: #1b407a;
    }
  }
  &-content{
    margin-top: 50px;
    max-width: 700px;
    min-height: 50vh;
  }
  &-bottom{
    border-top: 1px dashed #1b407a;
    padding-top: 30px;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-between;
    &-info{
      &>span{
        display: block;
        font-size: 18px;
        color: #6c757d;
        margin-bottom: 5px;
        &.ext_paperRecoFrom{
          color: #4d4d4d;
        }
        &.Bowtie{
          cursor: pointer;
          color: #4d4d4d;
          &:hover{
            color: #1b407a;
          }
        }
        &.author{
          color: #4d4d4d;
        }
        &.source{
          // margin-top: 30px;
          cursor: pointer;
          &:hover{
            color: #1b407a;
          }
        }
        // &:nth-of-type(7){
        //   font-size: 16px;
        //   margin-top: 30px;
        // }
        // &:nth-of-type(8){
        //   font-size: 14px;
        //   cursor: pointer;
        //   &:hover{
        //     color: #1b407a;
        //   }
        // }
        // &:nth-of-type(9){
        //   font-size: 14px;
        // }
      }
    }
    &-btn{
      span{
        display: inline-block;
        border-radius: 5px;
        padding: 5px 10px;
        background: #17a2b8;
        color: #fff;
        text-align: center;
        cursor: pointer;
        &:nth-of-type(2){
          margin-left: 50px;
        }
        &:nth-of-type(3){
          margin-left: 10px;
        }
      }
    }
  }
}
@media (min-width: 768px) and (max-width: 1452px) {}
@media screen and (max-width: 768px) {
  .healthInfoDetail{
    width: calc(100% - 40px);
    margin: 100px auto 200px;
    .goBack{
      a{
        font-size: 20px;
      }
    }
    &-title{
      &>div:first-child{
        font-size: 24px;
        margin: 20px 0;
        border-left: 6px solid #1b407a;
        padding-left: 10px;
        // padding-top: 4px;
        height: 35px;
        line-height: 35px;
      }
      &>div:last-child{
        font-size: 22px;
      }
    }
    &-content{
      margin-top: 30px;
    }
    &-bottom{
      flex-direction: column;
      margin-bottom: 100px;
      &-btn{
        margin-top: 30px;
      }
    }
  }
}
</style>