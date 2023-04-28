<script setup>
const route = useRoute()
const rt = ref(route)
</script>
<template>
  <div>
    <div>
      <slot name="header">
        <PageNavbar :rt="rt.name" />
      </slot>
      <div>
        <slot />
      </div>
      <slot name="footer">
        <PageFooter />
      </slot>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
