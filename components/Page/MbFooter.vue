<script lang="ts" setup>
const toTop = () => {
  let top = document.documentElement.scrollTop || document.body.scrollTop
  // 实现滚动效果
  const timeTop = setInterval(() => {
    document.body.scrollTop = document.documentElement.scrollTop = top -= 50
    if (top <= 0) {
      clearInterval(timeTop)
    }
  }, 10)
}
const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollTop
  if (scrollHeight >= 900) {
    isShowTopBtn.value = true
  } else {
    isShowTopBtn.value = false
  }
}

const handleToLinks = (_link:any) => {
  location.href = _link
}

const isShowTopBtn = ref(false)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="mbFooter">
    <div class="mbFooter-in">
      <div @click="handleToLinks('tel: (852) 3956 2026')">
        <div><img src="https://api.whatsapp.com/send?phone=85293451508&text=%E4%BD%A0%E5%A5%BD,%E6%88%91%E6%83%B3%E6%9F%A5%E8%A9%A2" alt=""></div>
        <div>WhatsApp</div>
      </div>
      <div @click="handleToLinks('tel: (852) 3956 2026')">
        <div><img src="https://static.cmereye.com/imgs/2023/07/8bb225b21f8baa35.png" alt=""></div>
        <div>立即致電{{'\n'}}(852) 3956 2026</div>
      </div>
      <div @click="handleToLinks('https://mqj.zoosnet.net/LR/Chatpre.aspx?id=MQJ40126824&cid=c9dc62b1026349509adfd4cfaeadc550&lng=big5&sid=97750bccda494a99a1c3cd76d4894b8d&p=https%3A//hkcmereye.com/&rf1=https%3A//hkcmereye&rf2=.com/&msg=&e=hkcmereye.com[youce-goutong]&d=1689239423902')">
        <div><img src="https://static.cmereye.com/imgs/2023/07/9c9ca82dbc0545a7.png" alt=""></div>
        <div>線上對話</div>
      </div>
    </div>
    <div v-show="isShowTopBtn" class="mbFooter-top" @click="toTop">
      <img src="https://static.cmereye.com/imgs/2023/07/3a2e901023d9c537.png" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mbFooter{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  padding: 20px 0;
  background: rgba(41, 88, 163, 1);
  display: block;
  z-index: 999;
  &-in{
    display: flex;
    &>div{
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      &:not(:last-child){
        border-right: 1px solid #fff;
      }
      &>div:nth-of-type(1){
        width: 25px;
        margin-right: 5px;
        img{
          width: 100%;
        }
      }
      &>div:nth-of-type(2){
        white-space: pre-wrap;
        color: #FFF;
        font-size: 12px;
        padding-top: 5px;
      }
      &:nth-of-type(2){
        flex: 1.5;
      }
    }
  }
  &-top{
    position: absolute;
    right: 20px;
    top: -150px;
  }
}
@media (min-width: 768px) and (max-width: 1452px) {
}
@media screen and (min-width: 768px) {
  .mbFooter{
    display: none;
  }
}
@media screen and (max-width: 768px) {
}
</style>
