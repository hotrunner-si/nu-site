<script setup>
import HeroSection from '@/components/websites/HeroSection.vue'
import Product from '@/components/websites/ProductSection.vue'
import Project from '@/components/websites/ProjectSection.vue'

import { heroImages, products, projects } from '@/data/websites'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

import { ref, onMounted, onBeforeUnmount } from 'vue'

const productsGrid = ref(null)
const activeSlide = ref(0)

const onScroll = () => {
  if (!productsGrid.value) return

  const container = productsGrid.value
  const cardWidth = container.children[0].offsetWidth + 16 // 16 = gap: 1rem

  activeSlide.value = Math.round(container.scrollLeft / cardWidth)
}

onMounted(() => {
  productsGrid.value?.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  productsGrid.value?.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <main class="websites-page">
    <HeroSection :images="heroImages" />

    <section id="products" class="products-section">
      <div class="section-header">
        <p class="section-tag">
          Ponudba
        </p>

        <h2 class="section-title">
          Trije preprosti paketi za različne potrebe
        </h2>

        <p class="section-description">
          Vsaka spletna stran je zasnovana tako, da je jasna, uporabna in prilagojena vsebini,
          ki jo želiš predstaviti.
        </p>

        <p class="section-description">
          S preprostim oblikovanjem in optimizirano uporabniško izkušnjo.
        </p>
      </div>

      <div ref="productsGrid" class="products-grid">
        <Product v-for="product in products" :key="product.title" :product="product" />
      </div>

      <div class="slider-dots">
        <button v-for="(_, index) in products" :key="index" class="dot" :class="{ active: activeSlide === index }" />
      </div>

      <div>
        <p class="section-description">
          * K posamezni ceni paketa je potrebno prišteti še stroške vzdrževanja, ki so odvisni od velikosti strani. Prvi
          mesec je gratis, nato pa 15 € / mesec.
        </p>
        <p class="section-description">
          Za več informacij o posameznem paketu ali za prilagojeno ponudbo me kontaktirajte.
        </p>
      </div>


    </section>

    <section id="projects" class="projects-section">
      <div class="section-header">
        <p class="section-tag">
          Preteklo delo
        </p>

        <h2 class="section-title">
          Moji projekti
        </h2>

        <p class="section-description">
          Poglejte nekaj primerov spletnih strani, ki sem jih ustvaril za različne namene in projekte.
        </p>
      </div>

      <div class="projects-grid">
        <Project v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.websites-page {
  color: var(--color-text-primary);
}

.products-section,
.projects-section {
  max-width: 80rem;
  margin: 0 auto;
  padding: clamp(3.5rem, 8vw, 6rem) clamp(1rem, 4vw, 1.5rem);
  scroll-margin-top: var(--navbar-height);
}

.projects-section {
  padding-top: 0;
}

.section-header {
  max-width: 48rem;
  margin-bottom: clamp(1.75rem, 5vw, 3rem);
}

.section-tag {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--color-primary);
}

.section-title {
  margin: 0.75rem 0 0;
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.section-description {
  max-width: 42rem;
  margin: 1rem 0 0;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);
}

.slider-dots {
  display: none;
}

@media (max-width: 900px) {
  .slider-dots {
    display: flex;
    justify-content: center;
    gap: 0.6rem;
    margin-top: 1rem;
  }

  .dot {
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 50%;
    background: var(--color-border);
    transition: all .2s ease;
  }

  .dot.active {
    background: var(--color-primary);
    transform: scale(1.25);
  }
}

@media (max-width: 900px) {
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(1rem, 3vw, 1.5rem);
  }

  .products-grid {
    display: flex;
    overflow-x: auto;
    gap: 1rem;

    padding-bottom: 0.5rem;
    padding-inline: 1rem;
    margin-inline: -1rem;

    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    scrollbar-width: none;
  }

  .products-grid::-webkit-scrollbar {
    display: none;
  }

  .products-grid>* {
    flex: 0 0 45%;
    scroll-snap-align: center;
  }
}

@media (max-width: 440px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .products-grid {
    display: flex;
    overflow-x: auto;
    gap: 1rem;

    padding-bottom: 0.5rem;
    padding-inline: 1rem;
    margin-inline: -1rem;

    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;

    scrollbar-width: none;
  }

  .products-grid::-webkit-scrollbar {
    display: none;
  }

  .products-grid>* {
    flex: 0 0 85%;
    scroll-snap-align: center;
  }
}
</style>