<script setup>
import { computed, onMounted, ref } from 'vue'
import MoonIcon from '@/assets/icons/moon.svg'
import SunIcon from '@/assets/icons/sun.svg'

const STORAGE_KEY = 'nu-portfolio-theme'
const theme = ref('light')
const isDark = computed(() => theme.value === 'dark')

function applyTheme(nextTheme, persist = true) {
  theme.value = nextTheme
  document.documentElement.dataset.theme = nextTheme
  if (persist) localStorage.setItem(STORAGE_KEY, nextTheme)
}

function toggleTheme() {
  applyTheme(isDark.value ? 'light' : 'dark')
}

onMounted(() => {
  const savedTheme = localStorage.getItem(STORAGE_KEY)
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  applyTheme(savedTheme || preferredTheme, Boolean(savedTheme))
})
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="isDark ? 'Vključi svetlo temo' : 'Vključi temno temo'"
    :title="isDark ? 'Svetla tema' : 'Temna tema'"
    @click="toggleTheme"
  >
    <component :is="isDark ? SunIcon : MoonIcon" aria-hidden="true" />
  </button>
</template>

<style scoped>
.theme-toggle {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  background: var(--color-surface);
  cursor: pointer;
  transition: transform 160ms ease, border-color 160ms ease, background-color 180ms ease;
}

.theme-toggle:hover { transform: translateY(-2px); border-color: var(--color-accent); }
.theme-toggle:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.theme-toggle svg { width: 1.05rem; height: 1.05rem; color: var(--color-accent); }
</style>
