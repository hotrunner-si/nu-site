import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const darkMode = ref(false)
const language = ref('EN')

export function useSettings() {
  const { locale } = useI18n()

  watch(language, (val) => {
    locale.value = val
  })

  watch(
    darkMode,
    (value) => {
      document.documentElement.classList.toggle('dark', value)
    },
    { immediate: true },
  )

  return {
    darkMode,
    language,
  }
}