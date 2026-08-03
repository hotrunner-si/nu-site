<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="product-card">
    <div class="product-image-wrap">
      <img
        :src="product.image"
        :alt="product.title"
        class="product-image"
      >

      <span
        class="product-tag"
        :class="`product-tag-${product.accent}`"
      >
        {{ product.tag }}
      </span>
    </div>

    <div class="product-content">
      <h3 class="product-title">
        {{ product.title }}
      </h3>

      <p class="product-subtitle">
        {{ product.subtitle }}
      </p>

      <p class="product-description">
        {{ product.description }}
      </p>

      <ul class="product-features">
        <li
          v-for="feature in product.features"
          :key="feature"
        >
          {{ feature }}
        </li>
      </ul>

      <p class="product-price">
        {{ product.price }} *
      </p>
    </div>
  </article>
</template>

<style scoped>
.product-card {
  min-width: 0;
  overflow: hidden;

  border: 1px solid var(--color-border);
  border-radius: 1.5rem;
  background-color: var(--color-surface);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.product-image-wrap {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: var(--color-surface-muted);
}

.product-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.product-card:hover .product-image {
  transform: scale(1.04);
}

.product-tag {
  position: absolute;
  left: 1rem;
  bottom: 1rem;

  padding: 0.5rem 0.7rem;
  border-radius: 999px;

  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;

  color: #111111;
}

.product-tag-primary {
  background-color: var(--color-primary);
}

.product-tag-secondary {
  background-color: var(--color-secondary);
}

.product-tag-tertiary {
  background-color: var(--color-tertiary);
}

.product-content {
  padding: clamp(1.25rem, 3vw, 1.5rem);
}

.product-title {
  margin: 0;
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  line-height: 1.12;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.product-subtitle {
  margin: 0.75rem 0 0;
  font-weight: 800;
  color: var(--color-text-primary);
}

.product-description {
  margin: 0.85rem 0 0;
  line-height: 1.65;
  color: var(--color-text-secondary);
}

.product-features {
  display: grid;
  gap: 0.5rem;
  margin: 1.25rem 0 0;
  padding: 0;
  list-style: none;
}

.product-features li {
  position: relative;
  padding-left: 1.1rem;
  font-size: 0.95rem;
  font-weight: 700;
}

.product-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;

  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background-color: var(--color-primary);
}

.product-price {
  margin: 2rem 0 0;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-text-primary);
}

</style>