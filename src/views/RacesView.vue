<script setup>

import RacesHero from '@/components/race_components/RacesHero.vue'
import RacesUpcoming from '@/components/race_components/RacesUpcoming.vue'
import RacesStats from '@/components/race_components/RacesStats.vue'
import RacesPast from '@/components/race_components/RacesPast.vue'

</script>

<template>
  <main class="races-page">
    <section class="top-grid">

      <div class="left-column">
        <RacesHero />
        <RacesUpcoming />
      </div>

      <RacesStats />
    </section>

    <RacesPast />

  </main>
</template>

<style scoped>
.races-page {
  max-width: 90rem;
  margin: 0 auto;
  padding: 5rem 1.5rem 0;
}

.top-grid {
  display: grid;
  gap: 1.5rem;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 0;
}

@media (min-width: 960px) {
  .top-grid {
    grid-template-columns: 2fr 1fr;
  }
}


</style>