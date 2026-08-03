import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const language = ref('EN')

export function useSettings() {
  const { locale } = useI18n()

  watch(language, (val) => {
    locale.value = val
  })

  return {
    language,
  }
}