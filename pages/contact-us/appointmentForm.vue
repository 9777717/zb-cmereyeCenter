<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '電子預約表格',
}))
// 診所資料電子預約表格
const serviceNavigation = [
  {
    anchorName: '診所資料',
    anchorLink: '/contact-us',
  },
  {
    anchorName: '電子預約表格',
    anchorLink: '/contact-us/appointmentForm',
  },
]
</script>

<template>
  <div class="form">
    <div>
      <div>電子預約表格</div>
      <div>ELECTRONIC APPOINTMENT FORM</div>
    </div>
    <div>
      <FormFooterInfo
        :sssd="'margin: 0 520px;'"
        :ddd="'color:#515151'"
        :bg="`background:${'#00000000'}`"
        :co="`color:${'#515151;'}border:1px solid`"
      />
    </div>
    <PageInformation :service-navigation="serviceNavigation" />
  </div>
</template>
<style lang="scss" scoped>
.form {
  background-image: url('https://static.cmereye.com/imgs/2023/03/2e0bad9ed9608023.jpg');

  & > div:nth-child(1) {
    padding-top: 100px;
    margin-left: 520px;
    color: #515151;

    & > div:nth-child(1) {
      font-family: 'Noto Sans HK';
      font-size: 37.5px;
    }

    & > div:nth-child(2) {
      color: #8ad8dd;
      font-size: 21px;
      font-family: 'Metropolis';
      text-transform: uppercase;
      font-weight: 500;
      margin-bottom: 40px;
      letter-spacing: 5px;
    }
  }
}
</style>
