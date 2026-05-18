<template>

  <div
    v-if="isMenuOpen"
    class="overlay"
    @click="closeMenu"
  />

  <header class="navbar">
    
    <div class="logo">
      <a :href="navBar.mainLink">
        {{ t('brand.name') }}
      </a>
    </div>

    <button
      class="hamburger"
      :class="{ open: isMenuOpen }"
      @click="toggleMenu"
      aria-label="Menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="menu" :class="{ open: isMenuOpen }">
      <ul class="nav-links">
        <li v-for="item in navBar.items" :key="item.nameKey">
          <a :href="item.link" @click="closeMenu">
            {{ t(item.nameKey) }}
          </a>
        </li>
      </ul>

      <div class="navbar-controls">
        <!-- Language Switch -->
        <div class="language-switch">
          <button
            type="button"
            class="language-button"
            :class="{ active: language === 'EN' }"
            @click="language = 'EN'"
          >
            EN
          </button>

          <button
            type="button"
            class="language-button"
            :class="{ active: language === 'SI' }"
            @click="language = 'SI'"
          >
            SI
          </button>
        </div>

        <!-- Dark Mode -->
        <button
          type="button"
          class="theme-button"
          @click="darkMode = !darkMode"
        >
          {{ darkMode ? t('nav.lightMode') : t('nav.darkMode') }}
        </button>
      </div>
    </div>
  </header>
</template>


<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n' 
import { useSettings } from '@/composables/useSettings' 
import { navBar } from '@/data/content' 

const { t } = useI18n() 
const { language, darkMode } = useSettings() 
const route = useRoute() 

const isMenuOpen = ref(false) 

function toggleMenu() { isMenuOpen.value = !isMenuOpen.value } 

function closeMenu() { isMenuOpen.value = false }
watch(() => route.fullPath, () => { closeMenu() })

function handleKey(e) { if (e.key === 'Escape') closeMenu() }

function lockScroll(lock) { document.body.style.overflow = lock ? '' : '' } 

watch(isMenuOpen, (val) => { lockScroll(val) }) 

onMounted(() => { window.addEventListener('keydown', handleKey) }) 

onBeforeUnmount(() => { window.removeEventListener('keydown', handleKey) 

lockScroll(false) }) 

let scrollTimeout = null

function handleUserScroll() {
  if (!isMenuOpen.value) return

  clearTimeout(scrollTimeout)

  scrollTimeout = setTimeout(() => {
    closeMenu()
  }, 80)
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
  window.addEventListener('wheel', handleUserScroll, { passive: true })
  window.addEventListener('touchmove', handleUserScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKey)
  window.removeEventListener('wheel', handleUserScroll)
  window.removeEventListener('touchmove', handleUserScroll)

  lockScroll(false)
})
</script>


<style scoped>

.hamburger {
  display: none;
  width: 28px;
  height: 22px;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1200;
}

.hamburger span {
  position: absolute;
  height: 2px;
  width: 100%;
  background: var(--color-text-primary);
  left: 0;
  transition: 0.3s ease;
}

.hamburger span:nth-child(1) { top: 0; }
.hamburger span:nth-child(2) { top: 10px; }
.hamburger span:nth-child(3) { top: 20px; }

/* X animation */
.hamburger.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 10px;
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 10px;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.1);
  z-index: 999;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-left: 2rem;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background: var(--color-surface);
  backdrop-filter: blur(10px);
}

.logo a,
.logo {
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.25rem;
  text-decoration: none;
}
.logo a:hover {
  color: var(--color-primary-hover);
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  flex: 1;
  justify-content: center;
  color: var(--color-text-primary)
}

.nav-links a {
  color: var(--color-text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--color-primary-hover);
}

/* Right-side controls */
.navbar-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Language switch */
.language-switch {
  display: flex;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 999px;
}

.language-button {
  padding: 0.4rem 0.9rem;
  border: none;
  background: transparent;
  color: var(--color-text-primary);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.language-button.active {
  background: var(--color-primary);
  color: white;
}

/* Dark mode button */
.theme-button {
  padding: 0.55rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-background);
  color: var(--color-text-primary);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.theme-button:hover {
  border-color: var(--color-primary);
}

@media (max-width: 1024px) {
  .hamburger {
    display: block;
  }

  .menu {
    position: fixed;
    top: 0;
    right: 0;

    height: 100vh;
    width: 280px;

    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 4rem 1.5rem 2rem;

    background: var(--color-background);
    opacity: 0.95;
    box-shadow: -10px 0 30px rgba(0,0,0,0.2);

    transform: translateX(100%);
    transition: transform 0.3s ease;
    z-index: 1100;
  }

  .menu.open {
    transform: translateX(0);
  }

  .nav-links {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.2rem;
  }

  .navbar-controls {
    flex-direction: column;
    gap: 0.8rem;
    margin-top: 0;
    margin-bottom: 2rem; /* remove extra push */
    width: 100%;
    align-items: center;
  }

  /* optional: visually group controls tighter */
  .language-switch {
    transform: scale(0.95);
  }

  .theme-button {
    width: 100%;
    max-width: 180px;
  }
}
</style>