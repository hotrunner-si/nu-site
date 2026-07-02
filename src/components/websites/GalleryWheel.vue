<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const activeHeroImage = ref(0)

const wheelSlots = [
  {
    angle: 180,
    x: 'var(--wheel-active-x)',
    y: '50%',
    scale: 1,
    blur: '0px',
    opacity: 1,
    z: 20,
    rotate: '0deg'
  },
  {
    angle: 170,
    x: 'calc(var(--wheel-active-x) + var(--wheel-mid-x))',
    y: 'calc(50% - var(--wheel-mid-y))',
    scale: 0.76,
    blur: '1.2px',
    opacity: 0.72,
    z: 14,
    rotate: '8deg'
  },
  {
    angle: 160,
    x: 'calc(var(--wheel-active-x) + var(--wheel-edge-x))',
    y: 'calc(50% - var(--wheel-edge-y))',
    scale: 0.56,
    blur: '4px',
    opacity: 0.4,
    z: 8,
    rotate: '16deg'
  },
  {
    angle: 200,
    x: 'calc(var(--wheel-active-x) + var(--wheel-edge-x))',
    y: 'calc(50% + var(--wheel-edge-y))',
    scale: 0.56,
    blur: '4px',
    opacity: 0.4,
    z: 8,
    rotate: '-16deg'
  },
  {
    angle: 190,
    x: 'calc(var(--wheel-active-x) + var(--wheel-mid-x))',
    y: 'calc(50% + var(--wheel-mid-y))',
    scale: 0.76,
    blur: '1.2px',
    opacity: 0.72,
    z: 14,
    rotate: '-8deg'
  }
]

const visibleHeroImages = computed(() => {
  return props.images
    .map((image, index) => {
      const relativeIndex =
        (index - activeHeroImage.value + props.images.length) % props.images.length

      const slot = wheelSlots[relativeIndex]

      if (!slot) {
        return null
      }

      return {
        ...image,
        index,
        slot,
        style: {
          '--x': slot.x,
          '--y': slot.y,
          '--scale': slot.scale,
          '--blur': slot.blur,
          '--rotate': slot.rotate,
          opacity: slot.opacity,
          zIndex: slot.z
        }
      }
    })
    .filter(Boolean)
})

let heroInterval = null

function nextHeroImage() {
  activeHeroImage.value = (activeHeroImage.value + 1) % props.images.length
}

function previousHeroImage() {
  activeHeroImage.value =
    (activeHeroImage.value - 1 + props.images.length) % props.images.length
}

function restartHeroInterval() {
  if (heroInterval) {
    clearInterval(heroInterval)
  }

  heroInterval = setInterval(() => {
    nextHeroImage()
  }, 5000)
}

function selectHeroImage(index) {
  activeHeroImage.value = index
  restartHeroInterval()
}

function handleNextHeroImage() {
  nextHeroImage()
  restartHeroInterval()
}

function handlePreviousHeroImage() {
  previousHeroImage()
  restartHeroInterval()
}

onMounted(() => {
  restartHeroInterval()
})

onBeforeUnmount(() => {
  if (heroInterval) {
    clearInterval(heroInterval)
  }
})
</script>

<template>
  <div class="hero-wheel" aria-label="Galerija spletnih strani">
    <div class="hero-wheel-arc" />

    <button
      v-for="image in visibleHeroImages"
      :key="image.src"
      type="button"
      class="wheel-image"
      :class="{ 'wheel-image-active': image.index === activeHeroImage }"
      :style="image.style"
      @click="selectHeroImage(image.index)"
    >
      <img :src="image.src" :alt="image.alt">
    </button>

    <div class="hero-wheel-controls">
      <button
        type="button"
        class="wheel-control"
        aria-label="Prejšnja slika"
        @click="handlePreviousHeroImage"
      >
        ‹
      </button>

      <div class="wheel-dots" aria-label="Izbira slike">
        <button
          v-for="(image, index) in images"
          :key="image.src"
          type="button"
          class="wheel-dot"
          :class="{ 'wheel-dot-active': activeHeroImage === index }"
          :aria-label="`Prikaži sliko ${index + 1}`"
          @click="selectHeroImage(index)"
        />
      </div>

      <button
        type="button"
        class="wheel-control"
        aria-label="Naslednja slika"
        @click="handleNextHeroImage"
      >
        ›
      </button>
    </div>
  </div>
</template>

<style scoped>
.hero-wheel {
  position: absolute;
  inset: 0;
  z-index: 8;
  overflow: hidden;
  pointer-events: none;

  opacity: 1;
  visibility: visible;

  transition:
    opacity 0.45s ease,
    visibility 0.45s ease;
}

.hero-wheel-arc {
  position: absolute;
  left: var(--wheel-active-x);
  top: calc(50% - var(--wheel-radius));

  width: calc(var(--wheel-radius) * 2);
  height: calc(var(--wheel-radius) * 2);

  border: 1px solid rgb(221 170 119 / 0.25);
  border-radius: 9999px;

  pointer-events: none;
}

.wheel-image {
  position: absolute;
  left: var(--x);
  top: var(--y);

  width: clamp(13rem, 19vw, 18rem);
  aspect-ratio: 4 / 3;

  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: 1.4rem;
  overflow: hidden;

  background-color: var(--color-surface-muted);
  cursor: pointer;
  pointer-events: auto;

  transform:
    translate(-50%, -50%)
    scale(var(--scale))
    rotate(var(--rotate));

  filter: blur(var(--blur));
  transform-origin: center center;

  box-shadow:
    0 24px 45px rgb(0 0 0 / 0.18),
    0 8px 18px rgb(0 0 0 / 0.1);

  transition:
    left 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    top 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.9s ease,
    opacity 0.9s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.wheel-image:hover {
  border-color: var(--color-primary);
}

.wheel-image-active {
  border-color: var(--color-primary);
  cursor: default;
}

.wheel-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wheel-image:not(.wheel-image-active)::after {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgb(0 0 0 / 0.14);
}

.hero-wheel-controls {
  position: absolute;
  right: clamp(1rem, 4vw, 3rem);
  bottom: clamp(1rem, 4vw, 2rem);

  display: flex;
  align-items: center;
  gap: 0.9rem;

  pointer-events: auto;
  z-index: 40;
}

.wheel-control {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 2.7rem;
  height: 2.7rem;

  border: 1px solid var(--color-border);
  border-radius: 999px;
  background-color: rgb(247 243 237 / 0.8);
  color: var(--color-text-primary);

  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.dark .wheel-control {
  background-color: rgb(26 26 26 / 0.78);
}

.wheel-control:hover {
  transform: translateY(-2px);
  border-color: var(--color-primary);
}

.wheel-dots {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.wheel-dot {
  width: 0.5rem;
  height: 0.5rem;
  padding: 0;

  border: 0;
  border-radius: 999px;
  background-color: var(--color-border);
  cursor: pointer;

  transition:
    width 0.2s ease,
    background-color 0.2s ease;
}

.wheel-dot-active {
  width: 1.35rem;
  background-color: var(--color-primary);
}

@media (max-width: 840px) {
  .hero-wheel {
    opacity: clamp(0, calc((100vw - 780px) / 120), 1);
  }
}

@media (max-width: 779px) {
  .hero-wheel {
    opacity: 0;
    visibility: hidden;
  }

  .wheel-image,
  .wheel-control,
  .wheel-dot {
    pointer-events: none;
  }
}
</style>