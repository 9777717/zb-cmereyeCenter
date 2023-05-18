<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '文章推薦',
}))
</script>

<template>
  <div>
    <div>文章推薦 -- article</div>
    <div>
      <PageInformation />
    </div>
  </div>
</template>
