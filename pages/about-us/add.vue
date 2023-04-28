<script lang="ts" setup>
// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: '添加',
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="添加" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div>添加</div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
