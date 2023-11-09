<script setup>
const route = useRoute()
const rt = ref(route)

</script>
<template>
  <div>
    <div>
      <slot name="header">
        <PageNavbar :rt="rt.name" />
        <!-- <PageHeader :rt="rt.name" /> -->
        <PageNewheader />
      </slot>
      <div>
        <slot />
      </div>
      <slot name="footer">
        <PageFooter />
        <PageMbFooter />
      </slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.headerTem{
  display: block;
}
.headerTemPage{
  display: block;
}
.footerTem{
  display: block;
}
.mbHeader{
  display: none;
}
.headerMbcc{
  display: none;
}

@media screen and (max-width: 768px) {
  .headerTem{
   display: none;
  }
  .headerTemPage{
    display: none;
  }
  .footerTem{
    display: none;
  }
  .mbHeader{
    display: block;
  }
  .headerMbcc{
    display: block;
  }
}
</style>
