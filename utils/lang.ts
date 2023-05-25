import { useI18n } from 'vue-i18n'

export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  zh_tc: {
    name: '繁体中文',
    iso: 'zh_tc',
    flag: 'tc',
  },
  zh: {
    name: '简体中文',
    iso: 'zh',
    flag: 'cn',
  },
  en: {
    name: 'English',
    iso: 'en',
    flag: 'en',
  },
  // ja: {
  //   name: '日本語',
  //   iso: 'ja',
  //   flag: '🇯🇵',
  // },
}

export function LanguageManager() {
  // composable
  const { locale } = useI18n()
  const localeUserSetting = useCookie('locale')

  // methods
  const getSystemLocale = (): string => {
    try {
      const foundLang = window
        ? window.navigator.language.substring(0, 2)
        : 'zh_tc'
      return availableLocales[foundLang] ? foundLang : 'zh_tc'
    } catch (error) {
      return 'zh_tc'
    }
  }
  const getUserLocale = (): string =>
    localeUserSetting.value || getSystemLocale()

  // state
  const localeSetting = useState<string>('locale.setting', () =>
    getUserLocale()
  )

  // watchers
  watch(localeSetting, (localeSetting) => {
    localeUserSetting.value = localeSetting
    locale.value = localeSetting
  })

  // init locale
  const init = () => {
    localeSetting.value = getUserLocale()
  }
  locale.value = localeSetting.value

  // lifecycle
  onBeforeMount(() => init())

  return {
    localeSetting,
    init,
  }
}
