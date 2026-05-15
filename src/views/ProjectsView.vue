<script setup>
import BaseCard from '../components/BaseCard.vue'
import SectionHeader from '../components/SectionHeader.vue'

import {
  services,
  projects,
} from '../data/projects'
</script>

<template>
  <main class="projects-page">
    <SectionHeader
      label="Development"
      title="Projects & Work"
    />

    <div class="cards-grid">
      <BaseCard
        v-for="service in services"
        :key="service.title"
      >
        <h3 class="card-title">
          {{ service.title }}
        </h3>

        <p class="card-description">
          {{ service.description }}
        </p>
      </BaseCard>
    </div>

    <section class="portfolio-section">
      <SectionHeader
        label="Portfolio"
        title="Selected Projects"
      />

      <div class="cards-grid">
        <BaseCard
          v-for="project in projects"
          :key="project.title"
        >
          <h3 class="card-title">
            {{ project.title }}
          </h3>

          <p class="card-description">
            {{ project.description }}
          </p>
        </BaseCard>
      </div>
    </section>
  </main>
</template>

<style scoped>
.projects-page {
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  padding: 5rem 1.5rem; /* py-20 px-6 */
}

.cards-grid {
  display: grid;
  gap: 1.5rem; /* gap-6 */
}

.card-title {
  margin: 0;
  font-size: 1.875rem; /* text-3xl */
  font-weight: 900; /* font-black */
}

.card-description {
  margin-top: 1.25rem; /* mt-5 */
  line-height: 2rem; /* leading-8 */
  color: var(--color-text-secondary);
}

.portfolio-section {
  margin-top: 6rem; /* mt-24 */
}

/* md:grid-cols-3 */
@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>