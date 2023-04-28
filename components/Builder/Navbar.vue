<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import { useRoute } from 'vue-router'

const router = useRoute()

// state
const app = useAppConfig() as AppConfigInput
const navbar = ref(null)
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
const showOptions = useState<boolean>('navbar.showOptions', () => false)

// lifecycle
let timer: NodeJS.Timer
onMounted(() => {
  if (!navbar.value) return

  // scroll
  const { onScroll } = useSticky(navbar.value, 0)
  setTimeout(() => onScroll(), 50)

  // on show on mobile
  setInterval(() => {
    // must in mobile
    const minW = 1024
    if (window.innerWidth < minW) {
      updateDrawerOptions()
    }
  }, 100)
})
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

// methods
const updateDrawerOptions = () => {
  // drawer
  if (showDrawer.value || showOptions.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}
const toggleDrawer = () => (showDrawer.value = !showDrawer.value)
const toggleOptions = (show?: boolean) => {
  if (show) {
    showOptions.value = show
  } else {
    showOptions.value = !showOptions.value
  }
}
const menuStyle = ref('style1')
</script>

<template>
  <div ref="navbar">
    <div class="bar">
      <div>
        <slot name="title">
          <NuxtLink tag="a" :to="{ name: 'index' }">
            <img
              v-if="router.name === 'index'"
              src="https://static.cmereye.com/imgs/2023/04/d1d8aa8018398ad1.png"
            />
            <img
              v-else
              src="https://static.cmereye.com/imgs/2023/04/4d019db1ea24013f.png"
            />
          </NuxtLink>
        </slot>
      </div>
      <!-- menu -->
      <div>
        <slot name="menu" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bar {
  width: 130px;

  & > div:nth-child(1) {
    padding: 27px 32px 9px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
<style lang="scss">
.slide-fade-from-up-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-from-up-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-from-up-enter-from,
.slide-fade-from-up-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

a.router-link-active {
  font-weight: bold;
}

a.router-link-exact-active {
  color: theme('colors.slate.900');
}

html.dark {
  a.router-link-exact-active {
    color: theme('colors.white');
  }
}
</style>
