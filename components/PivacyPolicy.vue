<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <div class="privacy">
    <div>
      <svg
        width="5"
        height="8"
        color="red"
        viewBox="0 0 5 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L4 4L1 7"
          stroke="white"
          stroke-width="0.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div>私隱政策 & 免責條款</div>
  </div>
</template>
<style lang="scss" scoped>
.privacy {
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div:nth-child(2) {
    margin-left: 8px;
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 35px;
    /* identical to box height, or 250% */

    text-align: center;
    letter-spacing: 0.05em;

    color: #ffffff;
  }
}
</style>
