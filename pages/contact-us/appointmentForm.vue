<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
const { t } = useLang()
useHead(() => ({
  title: t(
    'pages.contact_us.clinic_information_title.clinic_information_serviceNavigation2'
  ),
}))
// 診所資料電子預約表格
const serviceNavigation = [
  {
    anchorName:
      'pages.contact_us.clinic_information_title.clinic_information_serviceNavigation1',
    anchorLink: '/contact-us',
  },
  {
    anchorName:
      'pages.contact_us.clinic_information_title.clinic_information_serviceNavigation2',
    anchorLink: '/contact-us/appointmentForm',
  },
]
</script>

<template>
  <div class="form">
    <div>
      <div>
        {{ $t('pages.contact_us.appointmentForm_title.appointmentForm_title') }}
      </div>
      <div>ELECTRONIC APPOINTMENT FORM</div>
    </div>
    <div>
      <FormFooterInfo
        :from-style="'margin: 0 520px;'"
        :form-title-color="'color:#515151'"
        :bg="`background:${'#00000000'}`"
        :co="`color:${'#515151;'};border:1px solid #515151`"
      />
    </div>
    <PageInformation :service-navigation="serviceNavigation" />
  </div>
</template>
<style lang="scss" scoped>
.form {
  background-image: url('https://static.cmereye.com/imgs/2023/03/2e0bad9ed9608023.jpg');
  background-size: 100%;

  & > div:nth-child(1) {
    padding-top: 100px;
    margin-left: 600px;
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
