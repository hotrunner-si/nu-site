<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <a
    :href="project.link"
    class="project-card"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      :src="project.image"
      :alt="project.title"
      class="project-image"
    >

    <div class="project-content">
      <h3 class="project-title">
        {{ project.title }}
      </h3>

      <p class="project-description">
        {{ project.description }}
      </p>

      <span class="project-link">
        Odpri projekt
      </span>
    </div>
  </a>
</template>

<style scoped>
.project-card {
  min-width: 0;
  overflow: hidden;

  border: 1px solid var(--color-border);
  border-radius: 1.5rem;
  background-color: var(--color-surface-light);

  color: inherit;
  text-decoration: none;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.project-image {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background-color: var(--color-surface-muted);
}

.project-content {
  padding: 1.25rem;
}

.project-title {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 900;
}

.project-description {
  margin: 0.75rem 0 0;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.project-link {
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--color-primary);
}

@media (max-width: 420px) {
  .project-content {
    padding: 1rem;
  }
}
</style>