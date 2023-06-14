<script lang="ts" setup>
import Process from './process.vue'
import Cost from './cost.vue'
// compiler macro
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead({
  title: `${t('pages.process_cost.cost')}| ${t('pages.process_cost.process')}`,
})
// 流程及費用
const serviceNavigation = [
  {
    anchorName: 'pages.process_cost.cost',
    anchorLink: '/process-and-cost/#cost',
  },
  {
    anchorName: 'pages.process_cost.process',
    anchorLink: '/process-and-cost/#process',
  },
]
</script>

<template>
  <div class="cp">
    <div>
      <Cost id="cost" />
      <Process
        id="process"
        :dd="`background:url('https://static.cmereye.com/imgs/2023/06/dd5e64b3b4bf5bdb.png')`"
      />
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
  max-width: 1200px;
  margin: auto;
}
</style>
