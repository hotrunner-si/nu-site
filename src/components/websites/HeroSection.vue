<script setup>
import GalleryWheel from '@/components/websites/GalleryWheel.vue'

defineProps({
  images: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="websites-hero">
    <GalleryWheel :images="images" />

    <div class="websites-hero-inner">
      <div class="websites-hero-content">
        <p class="hero-tag">
          Digitalne rešitve
        </p>

        <h1 class="hero-title">
          Spletne strani za projekte, nastanitve in osebne zgodbe.
        </h1>

        <p class="hero-description">
          Izdelujem preproste, moderne in pregledne spletne strani, ki obiskovalcu hitro pokažejo,
          kdo ste, kaj ponujate in kako vas lahko kontaktira.
        </p>

        <div class="hero-actions">
          <a href="#products" class="hero-button hero-button-primary">
            Oglej si ponudbo
          </a>

          <a href="#projects" class="hero-button hero-button-secondary">
            Pretekli projekti
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.websites-hero {
  --wheel-active-x: 83.333vw;
  --wheel-mid-x: 1.3svh;
  --wheel-edge-x: 5.1svh;
  --wheel-mid-y: 14.6svh;
  --wheel-edge-y: 28.7svh;
  --wheel-radius: 84svh;

  position: relative;
  width: 100vw;
  height: 56svh;
  min-height: 32rem;
  max-height: 42rem;
  margin-left: calc(50% - 50vw);

  overflow: hidden;

  background:
    radial-gradient(circle at 18% 28%, rgb(221 170 119 / 0.32), transparent 30rem),
    var(--color-background);

  border-bottom: 1px solid var(--color-border);
}

.websites-hero-inner {
  position: relative;
  z-index: 5;

  pointer-events: none;

  width: 100%;
  max-width: 80rem;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;

  box-sizing: border-box;
  padding:
    clamp(5rem, 9vw, 6.5rem)
    clamp(1rem, 4vw, 1.5rem)
    clamp(3.5rem, 7vw, 5rem);
}

.websites-hero-content {
  width: min(44rem, 58vw);
  margin-left: 0;

  pointer-events: auto;
}

.hero-tag {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--color-primary);
}

.hero-title {
  max-width: 44rem;
  margin: 0.85rem 0 0;
  font-size: clamp(2.15rem, 5vw, 4rem);
  line-height: 1.03;
  font-weight: 900;
  letter-spacing: -0.055em;
}

.hero-description {
  max-width: 38rem;
  margin: 1.25rem 0 0;
  font-size: clamp(0.98rem, 1.6vw, 1.1rem);
  line-height: 1.7;
  color: var(--color-text-secondary);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.75rem;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 1.35rem;
  border-radius: 1rem;

  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
}

.hero-button-primary {
  background-color: var(--color-primary);
  color: #ffffff;
}

.hero-button-primary:hover {
  background-color: var(--color-primary-hover);
}

.hero-button-secondary {
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  color: var(--color-text-primary);
}

.hero-button-secondary:hover {
  border-color: var(--color-primary);
}

@media (max-width: 1000px) {
  .websites-hero {
    --wheel-active-x: 82vw;
    --wheel-mid-y: 13svh;
    --wheel-edge-y: 25svh;
  }

  .websites-hero-content {
    width: min(40rem, 56vw);
    margin-left: 0;
  }

  .hero-title {
    font-size: clamp(2.05rem, 5.5vw, 3.5rem);
  }
}

@media (max-width: 760px) {
  .websites-hero {
    height: auto;
    min-height: auto;
    max-height: none;
  }

  .websites-hero-inner {
    align-items: flex-start;
    min-height: 31rem;
    padding:
      clamp(4.5rem, 16vw, 5.5rem)
      clamp(1rem, 4vw, 1.5rem)
      clamp(3rem, 10vw, 4rem);
  }

  .websites-hero-content {
    width: 100%;
    max-width: 34rem;
  }

  .hero-title {
    font-size: clamp(2rem, 9vw, 3rem);
  }

  .hero-description {
    max-width: 30rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    max-width: 22rem;
  }

  .hero-button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .websites-hero-inner {
    min-height: 30rem;
  }
}

@media (max-width: 420px) {
  .hero-title {
    font-size: 2.15rem;
  }
}
</style>