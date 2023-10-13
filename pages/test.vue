<script lang="ts" setup>
import { useRoute } from 'vue-router'
// composable
const route = useRoute()
const { t } = useLang()
definePageMeta({
  layout: 'page',
})

onMounted(() => {
  // console.log(route, '456')
})
</script>

<template>
  <PageTitle :text="$t('pages.test.title')" class="capitalize" />
</template>
