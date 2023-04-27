<script lang="ts" setup>
// composable
const { t } = useLang()
definePageMeta({
  layout: 'page',
})
</script>

<template>
  <PageTitle :text="$t('pages.test.title')" class="capitalize" />
</template>
