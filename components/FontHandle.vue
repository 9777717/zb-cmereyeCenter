<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <div class="fonthandle">
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
    <div>{{ $t('pages.index.footer.fonts') }}</div>
    <div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fonthandle {
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div:nth-child(2) {
    margin-left: 8px;
    margin-right: 12px;
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

  & > div:nth-child(3) {
    position: relative;
    display: flex;

    & > div:nth-child(1) {
      margin-right: 11px;
    }

    & > div {
      width: 11px;
      height: 11px;
      border-radius: 3px;
      background: #fff;
    }

    & > div:nth-child(1)::after {
      content: '+';
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 500;
      font-size: 9px;
      color: #2958a3;
      position: absolute;
      top: -5px;
      left: 1px;
    }

    & > div:nth-child(2)::after {
      content: '-';
      font-family: 'Noto Sans HK';
      font-style: normal;
      font-weight: 500;
      font-size: 9px;
      color: #2958a3;
      position: absolute;
      top: -5px;
      left: 25px;
    }
  }
}
</style>
