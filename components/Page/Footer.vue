<script lang="ts" setup></script>

<template>
  <footer class="bg-blue-900">
    <section class="footer">
      <div>©2023 希瑪林順潮眼科中心 版權所有</div>
      <div>
        <PageContentFooterSvg />
        <LanguageSwitcher />
        <FontHandle />
        <PivacyPolicy />
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 150px;
  height: 46px;

  & > div:nth-child(1) {
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

  & > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    & > div {
      margin-right: 32px;
    }
  }
}
</style>
