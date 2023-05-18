<script lang="ts" setup>
// compiler macro
const serviceNavigation = [
  {
    anchorName: '醫生小教室',
    anchorLink: '/ophthalmic-information',
  },
  {
    anchorName: '護眼宣傳片',
    anchorLink: '/ophthalmic-information/publicity',
  },
  {
    anchorName: '希瑪小劇場',
    anchorLink: '/ophthalmic-information/littleTheatre',
  },
  {
    anchorName: '新聞資訊',
    anchorLink: '/ophthalmic-information/press',
  },
  {
    anchorName: '文章推薦',
    anchorLink: '/ophthalmic-information/article',
  },
  {
    anchorName: '健康資訊',
    anchorLink: '/ophthalmic-information/healthInfo',
  },
]
</script>

<template>
  <rightSidesNavigation :service-navigation="serviceNavigation" />
</template>
