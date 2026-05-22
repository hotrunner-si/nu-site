<script setup>
import BaseCard from '../components/BaseCard.vue'
import SectionHeader from '../components/SectionHeader.vue'

import {
  services,
  projects,
} from '../data/projects'

import {useI18n} from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <main class="projects-page">
    <SectionHeader
      :label="t('projectsPage.whatido.tag')"
      :title="t('projectsPage.whatido.title')"
    />

    <div class="cards-grid">
      <BaseCard
        v-for="service in services"
        :key="service.title"
        :href="service.link"
      >
        <img
          :src="service.image"
          :alt="t(service.imageAlt)"
          class="card-image"
        />

        <h3 class="card-title">
          {{ t(service.title) }}
        </h3>

        <p class="card-description">
          {{ t(service.description) }}
        </p>
      </BaseCard>
    </div>

    <section class="portfolio-section">
      <SectionHeader
        :label="t('projectsPage.portfolio.tag')"
        :title="t('projectsPage.portfolio.title')"
      />

      <div class="cards-grid">
        <BaseCard
          v-for="project in projects"
          :key="project.title"
          :href="project.link"
        >
          <img 
          :src="project.image"
          :alt="t(project.imageAlt)"
          class="card-image"
          />
          <h3 class="card-title">
            {{ t(project.title) }}
          </h3>
          <p class="card-description">
            {{ t(project.description) }}
          </p>          
        </BaseCard>
      </div>
    </section>
  </main>
</template>

<style scoped>
.projects-page {
  max-width: 84rem;
  margin: 0 auto;
  padding: 5rem 1.5rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  align-items: stretch;
}

/* IMAGE */
.card-image {
  width: 100%;
  aspect-ratio: 16 / 9;

  object-fit: cover;

  border-radius: 0.75rem;
  border: 1px solid var(--color-border);

  flex-shrink: 0;
}

.card-title {
  margin: 1rem 0 0;

  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
}

.card-description {
  margin-top: 0.75rem;

  color: var(--color-text-secondary);
  line-height: 1.6;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  overflow: hidden;
}

.card-cta {
  margin-top: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0.75rem 1rem;
  border-radius: 0.75rem;

  font-weight: 600;
}

.portfolio-section {
  margin-top: 6rem;
}
</style>