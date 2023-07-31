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
})
pageId.value = route.query.id
const getDetail = async () => {
  const {data}:any = await useFetch(`https://hkcmereye.com/api.php/content/${pageId.value}`)
  let res = JSON.parse(data.value)
  // console.log(res)
  pageDetail.value = {
    sortname: res.data.sortname,
    title: res.data.title,
    content: res.data.content,
  }
}

onMounted(()=>{
  setTimeout(()=>{
    getDetail()
  },0)
})
</script>

<template>
  <div class="healthInfoDetail">
    <div class="goBack">
      <nuxt-link to="javascript:history.go(-1)">
        上一頁
      </nuxt-link>
    </div>
    <div class="healthInfoDetail-title">
      <div>
        {{pageDetail.sortname}}
      </div>
      <div>
        {{pageDetail.title}}
      </div>
    </div>
    <div class="healthInfoDetail-content" v-html="pageDetail.content"></div>
  </div>
</template>


<style lang="scss" scoped>
.healthInfoDetail{
  width: 100%;
  max-width: 1080px;
  margin: 200px auto 300px;
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
        padding-top: 4px;
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
  }
}
</style>