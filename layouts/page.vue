<script setup>
const route = useRoute()
const rt = ref(route)
let windowWidth = ref(1920)
onMounted(()=>{
  getWindowWidth()
  window.addEventListener('resize', getWindowWidth)
})
const getWindowWidth = () => {
  windowWidth.value = window.innerWidth
}
</script>
<template>
  <div>
    <div>
      <slot name="header">
        <PageNavbar v-if="windowWidth>768" :rt="rt.name" />
        <PageHeader v-else :rt="rt.name" />
      </slot>
      <div>
        <slot />
      </div>
      <slot name="footer">
        <PageFooter v-if="windowWidth>768" />
        <PageMbFooter v-else />
      </slot>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
