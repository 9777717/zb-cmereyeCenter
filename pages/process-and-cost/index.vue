<script lang="ts" setup>
import Process from './process.vue'
import Cost from './cost.vue'
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead({
  title: '費用一覽 | 就診流程',
})
// 流程及費用
const serviceNavigation = [
  {
    anchorName: '費用一覽',
    anchorLink: '/process-and-cost/#cost',
  },
  {
    anchorName: '就診流程',
    anchorLink: '/process-and-cost/#process',
  },
]
</script>

<template>
  <div class="cp">
    <div>
      <Cost id="cost" />
      <Process id="process" :dd="'background:none'" />
    </div>
    <PageInformation :service-navigation="serviceNavigation" />
  </div>
</template>
<style lang="scss" scoped>
.cp {
  background-image: url(https://static.cmereye.com/imgs/2023/02/a6d4d2ee3661fcf9.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.cp > div:nth-child(1) {
  max-width: 1313px;
  margin: auto;
}
</style>
