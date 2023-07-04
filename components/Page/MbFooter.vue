<script lang="ts" setup>
// import { defineProps } from "vue";
// defineProps({
//   str:{
//     type: String,
//     default: ''
//   }
// })
</script>

<template>
  <div class="mbFooter">
    <div class="mbFooter-in">
      <div>
        <div><img src="https://static.cmereye.com/imgs/2023/07/25871528f005d41a.png" alt=""></div>
        <div>WhatsApp</div>
      </div>
      <div>
        <div><img src="https://static.cmereye.com/imgs/2023/07/8bb225b21f8baa35.png" alt=""></div>
        <div>立即致電{{'\n'}}(852) 3956 2026</div>
      </div>
      <div>
        <div><img src="https://static.cmereye.com/imgs/2023/07/9c9ca82dbc0545a7.png" alt=""></div>
        <div>線上對話</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mbFooter{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  background: rgba(41, 88, 163, 1);
  display: block;
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
