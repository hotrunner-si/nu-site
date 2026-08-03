<template>
  <button class="theme-toggle" type="button" @click="toggleTheme">
    <component :is="isDark ? SunIcon : MoonIcon" class="theme-toggle_icon" />
  </button>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import SunIcon from '@/assets/icons/sun.svg'
import MoonIcon from '@/assets/icons/moon.svg'

const STORAGE_KEY = 'nejc-ursic-theme'
const theme = ref('light')
const isDark = computed(() => theme.value === 'dark')

function applyTheme(nextTheme) {
  theme.value = nextTheme
  document.documentElement.dataset.theme = nextTheme
  localStorage.setItem(STORAGE_KEY, nextTheme)
}

function toggleTheme() {
  applyTheme(isDark.value ? 'light' : 'dark')
}

onMounted(() => {
  const savedTheme = localStorage.getItem(STORAGE_KEY)
  applyTheme(savedTheme === 'dark' ? 'dark' : 'light')
})
</script>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text);
  padding: 0.55rem 0.8rem;
  cursor: pointer;
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    background-color 160ms ease;
}

.theme-toggle:hover {
  transform: translateY(-1px);
  border-color: var(--color-primary-hover);
}

.theme-toggle_icon {
  display: inline-grid;
  place-items: center;
  width: 1.15rem;
  height: 1.15rem;
  color: var(--color-primary-hover);
}
</style>