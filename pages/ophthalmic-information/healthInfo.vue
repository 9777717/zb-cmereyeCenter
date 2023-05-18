<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '健康資訊',
}))
</script>

<template>
  <div>
    <div>健康資訊 -- healthInfo</div>
    <div>
      <PageInformation />
    </div>
  </div>
</template>
