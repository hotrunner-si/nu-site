<script setup>
import { useSettings } from '../composables/useSettings'
import { useI18n } from 'vue-i18n'

const { darkMode, language } = useSettings()
const { t } = useI18n()
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="navbar-logo">
        Nejc Uršič
      </RouterLink>
      
      <div class="navbar-actions">
        <div class="navbar-links">
          <RouterLink to="/" class="navbar-link">
            {{ t('nav.home') }}
          </RouterLink>

          <RouterLink to="/races" class="navbar-link">
            {{ t('nav.races') }}
          </RouterLink>

          <RouterLink to="/projects" class="navbar-link">
            {{ t('nav.projects') }}
          </RouterLink>
        </div>

        <!-- LANGUAGE -->
        <div class="language-switch">
          <button
            @click="language = 'EN'"
            :class="{ 'language-button-active': language === 'EN' }"
            class="language-button"
          >
            EN
          </button>

          <button
            @click="language = 'SI'"
            :class="{ 'language-button-active': language === 'SI' }"
            class="language-button"
          >
            SI
          </button>
        </div>

        <!-- DARK MODE -->
        <button
          @click="darkMode = !darkMode"
          class="theme-toggle"
        >
          {{ darkMode ? t('nav.lightMode') : t('nav.darkMode') }}
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid var(--color-border);
  background-color: rgb(from var(--color-background) r g b / 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.navbar-container {
  max-width: 80rem; /* 1280px (Tailwind max-w-7xl) */
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem; /* py-5 px-6 */
}

.navbar-logo {
  font-size: 1.5rem; /* text-2xl */
  font-weight: 900; /* font-black */
  letter-spacing: -0.025em; /* tracking-tight */
  color: var(--color-primary);
  text-decoration: none;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 2rem; /* gap-8 */
}

.navbar-links {
  display: flex;
  gap: 1.5rem; /* gap-6 */
  font-size: 0.875rem; /* text-sm */
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-text-secondary);
}

.navbar-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.navbar-link:hover {
  color: var(--color-primary);
}

.language-switch {
  display: flex;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 9999px; /* rounded-full */
}

.language-button {
  padding: 0.25rem 0.75rem; /* py-1 px-3 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.language-button-active {
  background-color: var(--color-primary);
  color: white;
}

.theme-toggle {
  padding: 0.5rem 1rem; /* py-2 px-4 */
  font-size: 0.875rem; /* text-sm */
  border: 1px solid var(--color-border);
  border-radius: 9999px; /* rounded-full */
  background-color: var(--color-surface);
  color: inherit;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.theme-toggle:hover {
  border-color: var(--color-primary);
}
</style>