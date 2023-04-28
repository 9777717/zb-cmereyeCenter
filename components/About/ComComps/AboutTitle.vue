<template>
  <div class="title2 font-normal">
    <h1 class="text-2xl">{{ zhTitle }}</h1>
    <h2 class="flex items-center justify-start en-font">
      <span class="text-xs">
        <Iconify icon="akar-icons:chevron-right" />
      </span>
      {{ enTtitle }}
    </h2>
  </div>
</template>
<script setup lang="ts">
defineProps({
  zhTitle: {
    type: String,
    default: undefined,
  },
  enTtitle: {
    type: String,
    default: undefined,
  },
})
</script>
<style scoped lang="scss">
.title2 {
  margin-right: auto;
  position: relative;
  z-index: 80;

  h1 {
    font-size: 35px;
  }
}

h2 {
  text-transform: uppercase;
  color: #8ad8dd;
  font-size: 16px;
}
</style>
