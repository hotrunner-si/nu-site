<script setup>
const services = [
  {
    title: 'Interaktivni zemljevidi za spletne strani',
    text: 'Vgradnja zemljevida s trasami, označenimi točkami, legendami, povezavami, slikami in uporabnim prikazom na telefonu.',
  },
  {
    title: 'Urejanje in priprava GPX datotek',
    text: 'Čiščenje sledi, združevanje odsekov, izvoz tras, priprava podatkov za tekme, pohode, turistične poti ali blog zapise.',
  },
  {
    title: 'Predstavitev tras in dogodkov',
    text: 'Pregledna predstavitev razdalje, višincev, okrepčevalnic, ključnih odsekov, nevarnosti in točk za navijače.',
  },
]

const tools = ['Leaflet', 'OpenStreetMap', 'GPX', 'GeoJSON', 'QGIS', 'Vue', 'Map markers', 'Elevation profiles']

const mapExamples = [
  {
    title: 'Zemljevid trase za tekmo',
    meta: 'trasa • okrepčevalnice • navijaške točke',
    description: 'Primer za organizatorje tekem, kjer obiskovalec hitro najde start, cilj, okrepčevalnice in ključne odseke trase.',
  },
  {
    title: 'Zemljevid za apartma',
    meta: 'lokacija • izleti • restavracije',
    description: 'Primer za apartmaje in turistične nastanitve: najbližje poti, razgledišča, parkirišča, hrana in praktične informacije.',
  },
  {
    title: 'Zemljevid za blog ali osebno zgodbo',
    meta: 'potovanje • fotografije • GPX',
    description: 'Zemljevid, ki dopolni zapis s potovanja, trail tekme ali pohoda in bralcu pokaže, kje se je zgodba dogajala.',
  },
]
</script>

<template>
  <main class="map-page">
    <section class="page-hero">
      <div>
        <p class="eyebrow">MapSiteView</p>
        <h1>Zemljevidi in GPX datoteke za spletne strani, tekme in outdoor projekte.</h1>
        <p>
          Pripravim interaktivne zemljevide, uredim GPX datoteke in jih vgradim v spletno stran tako,
          da so uporabni, lepi in razumljivi tudi na telefonu.
        </p>
        <a href="mailto:ursic.office@gmail.com" class="primary-link">Povprašaj za zemljevid</a>
      </div>

      <div class="hero-map" aria-label="Stiliziran predogled zemljevida">
        <div class="terrain terrain-a" />
        <div class="terrain terrain-b" />
        <div class="track" />
        <span class="marker marker-start">S</span>
        <span class="marker marker-aid">+</span>
        <span class="marker marker-finish">F</span>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">Storitev</p>
        <h2>Kaj lahko pripravim?</h2>
      </div>

      <div class="cards-grid">
        <article v-for="service in services" :key="service.title" class="info-card">
          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>
        </article>
      </div>
    </section>

    <section class="tools-section">
      <div>
        <p class="eyebrow">Orodja in podatki</p>
        <h2>Od surove GPX sledi do zemljevida na strani.</h2>
        <p>
          Pri projektu lahko združim tehnični del s praktičnim outdoor razumevanjem: trasa mora biti pravilna,
          vizualno jasna in dovolj enostavna, da jo razume uporabnik, ki stran odpre prvič.
        </p>
      </div>

      <div class="tool-list">
        <span v-for="tool in tools" :key="tool">{{ tool }}</span>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">Primeri vgradnje</p>
        <h2>Trije najpogostejši načini uporabe.</h2>
      </div>

      <div class="example-grid">
        <article v-for="example in mapExamples" :key="example.title" class="example-card">
          <div class="mini-map">
            <div class="mini-route" />
            <span />
            <span />
          </div>
          <p class="example-meta">{{ example.meta }}</p>
          <h3>{{ example.title }}</h3>
          <p>{{ example.description }}</p>
        </article>
      </div>
    </section>

    <section class="cta-section">
      <p class="eyebrow">Naslednji korak</p>
      <h2>Imaš GPX, traso ali idejo za zemljevid?</h2>
      <p>Pošlji mi datoteko ali opis. Lahko pripravim samo zemljevid ali pa ga vključim v celotno spletno stran.</p>
      <RouterLink to="/websites" class="secondary-link">Poglej še izdelavo spletnih strani →</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.map-page {
  max-width: 80rem;
  margin: 0 auto;
  padding: 5rem 1.5rem 0;
}

.page-hero,
.tools-section,
.cta-section {
  display: grid;
  gap: 2rem;
  align-items: center;
}

.page-hero {
  min-height: 620px;
}

.eyebrow {
  margin: 0 0 0.75rem;
  font-size: 0.75rem;
  font-weight: 850;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: var(--color-primary);
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 1.25rem;
  font-size: clamp(2.6rem, 7vw, 5.6rem);
  font-weight: 950;
  line-height: 0.96;
  letter-spacing: -0.07em;
}

h2 {
  margin-bottom: 1rem;
  font-size: clamp(2rem, 4vw, 3.7rem);
  font-weight: 950;
  line-height: 1.02;
  letter-spacing: -0.055em;
}

h3 {
  margin-bottom: 0.75rem;
  font-size: 1.35rem;
  font-weight: 900;
  letter-spacing: -0.025em;
}

p {
  color: var(--color-text-secondary);
  line-height: 1.85;
}

.primary-link,
.secondary-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 3.2rem;
  margin-top: 1rem;
  padding: 0.85rem 1.2rem;
  border-radius: 999px;
  font-weight: 850;
}

.primary-link {
  background: var(--color-primary);
  color: white;
}

.secondary-link {
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.hero-map {
  position: relative;
  min-height: 460px;
  border: 1px solid var(--color-border);
  border-radius: 1.5rem;
  overflow: hidden;
  background:
    linear-gradient(45deg, rgb(170 221 119 / 0.2), transparent 40%),
    linear-gradient(rgb(0 0 0 / 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgb(0 0 0 / 0.06) 1px, transparent 1px),
    var(--color-surface);
  background-size: auto, 44px 44px, 44px 44px, auto;
  box-shadow: 0 28px 60px rgb(0 0 0 / 0.1);
}

.terrain {
  position: absolute;
  border: 1px solid rgb(0 0 0 / 0.08);
  border-radius: 50%;
}

.terrain-a {
  inset: 12% 20% 32% 10%;
  transform: rotate(-12deg);
}

.terrain-b {
  inset: 28% 10% 12% 32%;
  transform: rotate(18deg);
}

.track {
  position: absolute;
  inset: 22% 14% 18% 16%;
  border: 9px solid var(--color-primary);
  border-left-color: var(--color-tertiary);
  border-radius: 44% 56% 42% 58%;
  transform: rotate(-18deg);
}

.marker {
  position: absolute;
  display: grid;
  place-items: center;
  width: 2.6rem;
  height: 2.6rem;
  border: 4px solid white;
  border-radius: 999px;
  color: white;
  font-weight: 950;
  box-shadow: 0 15px 35px rgb(0 0 0 / 0.22);
}

.marker-start { left: 18%; bottom: 28%; background: var(--color-primary); }
.marker-aid { left: 47%; top: 31%; background: var(--color-secondary-hover); }
.marker-finish { right: 17%; top: 38%; background: var(--color-tertiary-hover); }

.section-block,
.tools-section,
.cta-section {
  padding-top: 6rem;
}

.section-heading {
  max-width: 48rem;
  margin-bottom: 2rem;
}

.cards-grid,
.example-grid {
  display: grid;
  gap: 1.25rem;
}

.info-card,
.example-card,
.cta-section {
  border: 1px solid var(--color-border);
  border-radius: 1.25rem;
  background: var(--color-surface);
}

.info-card,
.example-card {
  padding: 1.5rem;
}

.info-card:hover,
.example-card:hover {
  border-color: var(--color-primary);
}

.tool-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tool-list span {
  padding: 0.7rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  font-weight: 800;
}

.mini-map {
  position: relative;
  min-height: 190px;
  margin-bottom: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  overflow: hidden;
  background:
    linear-gradient(rgb(0 0 0 / 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgb(0 0 0 / 0.055) 1px, transparent 1px),
    var(--color-surface-light);
  background-size: 30px 30px;
}

.mini-route {
  position: absolute;
  inset: 28% 22%;
  border: 6px solid var(--color-primary);
  border-right-color: var(--color-tertiary);
  border-radius: 45% 55% 50% 50%;
  transform: rotate(-14deg);
}

.mini-map span {
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 999px;
  background: var(--color-primary);
}

.mini-map span:nth-child(2) { left: 30%; top: 34%; }
.mini-map span:nth-child(3) { right: 27%; bottom: 32%; background: var(--color-tertiary-hover); }

.example-meta {
  margin-bottom: 0.55rem;
  font-size: 0.73rem;
  font-weight: 850;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--color-primary);
}

.cta-section {
  margin-top: 6rem;
  padding: 2rem;
}

@media (min-width: 860px) {
  .page-hero,
  .tools-section {
    grid-template-columns: 0.95fr 1.05fr;
  }

  .cards-grid,
  .example-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
