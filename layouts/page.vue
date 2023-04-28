<template>
  <div>
    <div class="header">
      <div class="headerTem">
        <slot name="header">
          <PageNavbar />
        </slot>
      </div>
      <div>
        <div>
          <slot />
        </div>
      </div>
      <div class="footerTem">
        <slot name="footer">
          <PageFooter />
        </slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  .headerTem {
    z-index: 999;
    position: fixed;
    top: 54px;
    left: 450px;
    background: #ffffffbf;
  }

  .footerTem {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
