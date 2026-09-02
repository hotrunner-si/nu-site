<script setup>
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const routeCards = [
  { title: 'Grossglockner Hochalpenstrasse', date: '19. avgust 2026', meta: '107 km · 4.212 m', file: '/tracks/GG_alpska_cesta.json' },
  { title: '76 km Verbier trail', date: '12. julij 2025', meta: '76 km · 5.020 m', file: '/tracks/76_km_Verbier_trail.json' },
]

const mapElements = ref([])
const maps = []

async function createMap(route, index) {
  const response = await fetch(route.file)
  if (!response.ok) throw new Error(`Trase ni mogoče naložiti: ${response.status}`)
  const data = await response.json()
  const points = (data.points ?? []).map(point => [Number(point.lat), Number(point.lng)]).filter(([lat, lng]) => Number.isFinite(lat) && Number.isFinite(lng))
  if (!points.length || !mapElements.value[index]) return

  const map = L.map(mapElements.value[index], {
    zoomControl: true,
    attributionControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: true,
    touchZoom: true,
    dragging: true,
    zoomSnap: 0.25,
  })
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(map)
  const line = L.polyline(points, { color: '#d98236', weight: 4, opacity: 1 }).addTo(map)
  map.fitBounds(line.getBounds(), { padding: [24, 24], maxZoom: 13 })

  let lastPinchZoom = 0
  const handleTrackpadPinch = event => {
    if (!event.ctrlKey) return

    event.preventDefault()
    event.stopPropagation()

    const now = performance.now()
    if (now - lastPinchZoom < 45) return
    lastPinchZoom = now

    const point = map.mouseEventToContainerPoint(event)
    const direction = event.deltaY < 0 ? 1 : -1
    map.setZoomAround(point, map.getZoom() + direction)
  }

  map.getContainer().addEventListener('wheel', handleTrackpadPinch, { passive: false })
  maps.push({ map, handleTrackpadPinch })
}

onMounted(async () => {
  await nextTick()
  await Promise.all(routeCards.map(createMap))
})

onUnmounted(() => maps.forEach(({ map, handleTrackpadPinch }) => {
  map.getContainer().removeEventListener('wheel', handleTrackpadPinch)
  map.remove()
}))
</script>

<template>
  <section id="routes" class="section routes-section">
    <h2>Kolo in <em>tek.</em></h2>
    <div class="route-grid">
      <article v-for="(route, index) in routeCards" :key="route.file" class="route-card">
        <div :ref="element => { if (element) mapElements[index] = element }" class="route-map"></div>
        <div class="route-copy"><div><p>{{ route.date }}</p><h3>{{ route.title }}</h3></div><span>{{ route.meta }}</span></div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section { scroll-margin-top: var(--section-nav-height); padding: clamp(3.75rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4.5rem); border-bottom: 1px solid var(--color-border); }
.routes-section { background: var(--color-surface-soft); }
h2 { margin: 0; font-family: var(--font-display); font-size: clamp(2.3rem, 5vw, 4.3rem); font-weight: 400; letter-spacing: -.04em; line-height: 1; }
h2 em { color: var(--color-accent); font-weight: 400; }
.route-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .8rem; margin-top: 2.5rem; }
.route-card { overflow: hidden; border: 1px solid var(--color-border); border-radius: var(--radius-md); background: var(--color-surface); box-shadow: 0 12px 35px rgba(70, 52, 32, .08); }
.route-map { position: relative; z-index: 0; isolation: isolate; width: 100%; height: 250px; background: var(--color-surface-soft); }
.route-copy { display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; padding: 1.1rem; }
.route-copy p { margin: 0 0 .35rem; color: var(--color-accent); font-size: .65rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
.route-copy h3 { margin: 0; font-family: var(--font-display); font-size: 1.25rem; font-weight: 400; line-height: 1.1; }
.route-copy > span { flex: 0 0 auto; color: var(--color-muted); font-size: .7rem; }
.route-map:deep(.leaflet-container) { font-family: var(--font-base); }
.route-map:deep(.leaflet-control-zoom) { overflow: hidden; border: 1px solid var(--color-border); border-radius: .7rem; box-shadow: 0 8px 24px rgba(23, 32, 25, .16); }
.route-map:deep(.leaflet-control-zoom a) { display: grid; place-items: center; width: 2rem; height: 2rem; border-bottom-color: var(--color-border); background: var(--color-surface); color: var(--color-text); font-family: var(--font-base); font-size: 1rem; line-height: 1; }
.route-map:deep(.leaflet-control-zoom a:hover) { background: var(--color-surface-soft); color: var(--color-accent); }

@media (max-width: 680px) { .route-grid { grid-template-columns: 1fr; } }
</style>
