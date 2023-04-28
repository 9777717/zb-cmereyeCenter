<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
  childMenuList?: any
}

const { t } = useLang()
const app = useAppConfig() as AppConfigInput
const menus = computed((): IMenuItem[] => [
  {
    type: 'link',
    text: t('pages.index.home'),
    route: { name: 'index' },
  },
  {
    type: 'link',
    text: t('pages.about_us.about_us'),
    route: { name: 'about-us' },
    childMenuList: [
      {
        type: 'link',
        text: t('pages.about_us.about_us'),
        route: { name: 'add' },
      },
      {
        type: 'link',
        text: t('pages.about_us.about_us'),
        route: {},
      },
      {
        type: 'link',
        text: t('pages.about_us.about_us'),
        route: {},
      },
    ],
  },
  {
    type: 'link',
    text: t('pages.medical_team.medical_team'),
    route: { name: 'medical-team' },
  },
  {
    type: 'link',
    text: t('pages.medical_service.medical_service'),
    route: { name: 'medical-service' },
  },
  {
    type: 'link',
    text: t('pages.ophthalmic_information.ophthalmic_information'),
    route: { name: 'ophthalmic-information' },
  },
  {
    type: 'link',
    text: t('pages.process_cost.process_cost'),
    route: { name: 'process-and-cost' },
  },
  {
    type: 'link',
    text: t('pages.talent_recruitment.talent_recruitment'),
    route: { name: 'talent-recruitment' },
  },
  {
    type: 'link',
    text: t('pages.contact_us.contact_us'),
    route: { name: 'contact-us' },
  },
])
</script>

<template>
  <BuilderNavbar>
    <template #menu>
      <div class="navigtion">
        <div
          v-for="(item, i) in menus"
          :key="i"
          class="hover:bg-red-901 hover:text-while"
        >
          <Anchor
            v-if="item.type === 'link'"
            :to="item.route ? item.route : undefined"
            :href="item.href ? item.href : undefined"
            class="hover:no-underline"
            >{{ item.text }}</Anchor
          >
          <Button
            v-else-if="item.type === 'button'"
            :text="item.text"
            size="xs"
            class="font-extrabold capitalize"
            :to="item.route ? item.route : undefined"
            :href="item.href ? item.href : undefined"
          />
        </div>
      </div>
    </template>
  </BuilderNavbar>
</template>
<style lang="scss" scoped>
.navigtion {
  & > div {
    font-family: 'Noto Sans HK';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 35px;
    /* identical to box height, or 250% */

    text-align: center;
    letter-spacing: 0.05em;

    color: #2958a3;

    width: 130px;
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  & > div::after {
    position: absolute;
    top: 0;
    content: '';
    width: 76px;
    border-bottom: 0.75px solid #2958a3;
  }
  & > div:nth-child(1)::after {
    content: '';
    width: 0;
    border: 0;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
