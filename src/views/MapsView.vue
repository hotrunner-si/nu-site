<script setup>
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'

import { mapServices, markers, center, zoom } from '@/data/mapsites'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<template>
  <main class="maps-page">
    <section class="maps-hero">
      <div class="maps-hero-inner">
        <p class="maps-tag">
          Zemljevidi in GPX poti
        </p>

        <h1 class="maps-title">
          Digitalne predstavitve poti, tras in lokacij.
        </h1>

        <p class="maps-summary">
          Ustvarjam interaktivne zemljevide in predstavitve GPX poti za tekače,
          pohodnike, športne dogodke, turistične ponudnike in osebne projekte.
        </p>
      </div>
    </section>

    <section class="services-section">
      <article v-for="(service) in mapServices" :key="service.title" class="service-section"
        :class="{ 'service-section-reverse': service.reverse }">
        <div class="service-image-wrap">
          <LMap
            v-if="service.type === 'leaflet'"
            :zoom="zoom"
            :center="center"
            class="service-map"
            :use-global-leaflet="false"
          >
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <LMarker
              v-for="marker in markers"
              :key="marker.id"
              :lat-lng="marker.position"
            >
              <LPopup>
                <strong>{{ marker.title }}</strong>
                <br>
                {{ marker.description }}
              </LPopup>
            </LMarker>
          </LMap>

            <video
              v-else-if="service.type === 'video'"
              class="service-video"
              autoplay
              muted
              loop
              playsinline
            >
              <source :src="service.video" type="video/mp4">
            </video>

          <img v-else :src="service.image" :alt="service.title" class="service-image">
        </div>

        <div class="service-content">
          <p class="service-label">
            {{ service.label }}
          </p>

          <h2 class="service-title">
            {{ service.title }}
          </h2>

          <p class="service-description">
            {{ service.description }}
          </p>

          <div class="service-link">
            <RouterLink to="/#contacts">Več</RouterLink>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.maps-page {
  color: var(--color-text-primary);
}

/* HERO */

.maps-hero {
  position: relative;
  isolation: isolate;

  display: flex;
  align-items: center;

  width: 100vw;
  min-height: clamp(32rem, 70vh, 46rem);
  margin-left: calc(50% - 50vw);

  background-image: url('/images/maps/maps-hero.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-bottom: 1px solid var(--color-border);
  overflow: hidden;
}

/* Temna plast zagotovi boljšo berljivost besedila. */
.maps-hero::before {
  position: absolute;
  z-index: -1;
  inset: 0;

  content: '';
  background:
    linear-gradient(90deg,
      rgb(0 0 0 / 0.56) 0%,
      rgb(0 0 0 / 0.45) 48%,
      rgb(0 0 0 / 0.18) 100%);
}

.maps-hero-inner {
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding:
    clamp(5rem, 10vw, 7rem) clamp(1rem, 4vw, 1.5rem) clamp(4rem, 8vw, 5.5rem);
}

.maps-tag {
  display: inline-block;

  margin: 0;
  padding: 0.55rem 0.8rem;

  border: 1px solid rgb(255 255 255 / 0.3);
  border-radius: 999px;
  background-color: rgb(0 0 0 / 0.25);
  backdrop-filter: blur(5px);

  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.maps-title {
  max-width: 48rem;
  margin: 1.25rem 0 0;

  color: #ffffff;
  font-size: clamp(2.25rem, 6vw, 4.5rem);
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.055em;
  text-shadow: 0 3px 20px rgb(0 0 0 / 0.35);
}

.maps-summary {
  max-width: 42rem;
  margin: 1.4rem 0 0;

  color: rgb(255 255 255 / 0.88);
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.75;
  text-shadow: 0 2px 12px rgb(0 0 0 / 0.4);
}

/* SERVICES */

.services-section {
  max-width: 80rem;
  margin: 0 auto;
  padding:
    clamp(3.5rem, 8vw, 6rem) clamp(1rem, 4vw, 1.5rem);
}

.service-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: center;

  padding: clamp(1.25rem, 4vw, 2rem);

  border: 1px solid var(--color-border);
  border-radius: 1.75rem;
  background-color: var(--color-surface);
  overflow: hidden;
}

.service-section+.service-section {
  margin-top: clamp(1.5rem, 4vw, 2.5rem);
}

.service-section-reverse .service-image-wrap {
  order: 2;
}

.service-section-reverse .service-content {
  order: 1;
}

.service-image-wrap {
  overflow: hidden;
  border-radius: 1.25rem;
  background-color: var(--color-surface-muted);
}

.service-image {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;

  transition: transform 0.4s ease;
}

.service-map {
  width: 100%;
  aspect-ratio: 16 / 11;
  border-radius: 1.25rem;
}

.service-video {
  transition: transform 0.4s ease;
}

.service-section:hover .service-video {
  transform: scale(1.04);
}

.service-section:hover .service-image {
  transform: scale(1.04);
}

.service-content {
  min-width: 0;
}

.service-label {
  margin: 0;

  color: var(--color-primary);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.service-title {
  margin: 0.75rem 0 0;

  font-size: clamp(1.75rem, 4vw, 2.75rem);
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.service-description {
  margin: 1rem 0 0;

  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.75;
}

.service-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.5rem;
  padding: 0.9rem 1.15rem;

  border-radius: 1rem;
  background-color: var(--color-primary);
  color: #ffffff;

  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.service-link:hover {
  transform: translateY(-2px);
  background-color: var(--color-primary-hover);
}

/* RESPONSIVE */

@media (max-width: 820px) {
  .maps-hero {
    min-height: 32rem;
    background-position: center;
  }

  .maps-hero::before {
    background: rgb(0 0 0 / 0.38);
  }

  .service-section,
  .service-section-reverse {
    grid-template-columns: 1fr;
  }

  .service-section-reverse .service-image-wrap,
  .service-section-reverse .service-content {
    order: initial;
  }

  .service-image {
    aspect-ratio: 16 / 10;
  }
}

@media (max-width: 480px) {
  .maps-hero {
    min-height: 30rem;
  }

  .maps-hero-inner {
    padding-top: 4.5rem;
  }

  .maps-title {
    font-size: clamp(2.2rem, 12vw, 3.2rem);
  }

  .maps-tag {
    letter-spacing: 0.14em;
  }

  .service-section {
    padding: 1rem;
    border-radius: 1.25rem;
  }

  .service-image-wrap {
    border-radius: 1rem;
  }

  .service-title {
    font-size: 1.6rem;
  }

  .service-description {
    font-size: 0.95rem;
  }

  .service-link {
    width: 100%;
  }
}
</style>