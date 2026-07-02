<script setup>
const templates = [
  {
    title: 'Spletna vizitka apartmaja',
    description: 'Enostranska predstavitev z glavnimi informacijami, galerijo, zemljevidom, cenikom, kontakti in povezavo do rezervacije.',
  },
  {
    title: 'Večstransko spletno mesto apartmaja',
    description: 'Domov, apartma, lokacija, aktivnosti, galerija in kontakt. Primerno za nastanitve, ki želijo bolj celovito predstavitev.',
  },
  {
    title: 'Osebna predstavitvena stran',
    description: 'Stran za športnika, ustvarjalca, freelancerja ali študenta: zgodba, projekti, rezultati, povezave in kontakt.',
  },
  {
    title: 'Osebni blog',
    description: 'Pregledna struktura za zapise s tekem, potovanj in pohodov, z možnostjo zemljevida, galerije in statistike.',
  },
]

const components = [
  'Hero sekcija',
  'Galerija slik',
  'Interaktivni zemljevid',
  'Kartice sob ali storitev',
  'Cenik',
  'Pogosta vprašanja',
  'Kontaktni blok',
  'CTA gumbi',
  'Blog zapis',
  'Statistika poti ali tekem',
  'Mnenja gostov',
  'Večjezičnost',
]

const examples = [
  {
    title: 'Apartma Mamut Kamnik',
    type: 'apartma',
    text: 'Spletna vizitka za nastanitev, kjer so najpomembnejše informacije hitro dostopne gostom.',
  },
  {
    title: 'Tekaški pokal občine Kamnik',
    type: 'dogodek',
    text: 'Informativna stran za lokalni tekaški pokal z jasnimi podatki o tekmah in povezavami.',
  },
  {
    title: 'Gorski blog',
    type: 'blog',
    text: 'Osebna vsebinska stran za zgodbe s tekem, potovanj in gorskih doživetij.',
  },
]
</script>

<template>
  <main class="website-page">
    <section class="page-hero">
      <div>
        <p class="eyebrow">WebsiteView</p>
        <h1>Spletne strani, ki ne izgledajo kot predloga, ampak kot tvoja zgodba.</h1>
        <p>
          Gradim lahke, hitre in prilagodljive spletne strani za apartmaje, osebne predstavitve,
          športne projekte in bloge. Stran lahko vsebuje tudi interaktivne zemljevide in GPX prikaze.
        </p>
        <a href="mailto:ursic.office@gmail.com" class="primary-link">Povprašaj za spletno stran</a>
      </div>

      <div class="browser-preview" aria-label="Stiliziran predogled spletne strani">
        <div class="browser-bar">
          <span />
          <span />
          <span />
        </div>
        <div class="preview-body">
          <div class="preview-hero" />
          <div class="preview-lines">
            <span />
            <span />
            <span />
          </div>
          <div class="preview-cards">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">Templati</p>
        <h2>Osnova strani je izbrana glede na namen.</h2>
      </div>

      <div class="template-grid">
        <article v-for="template in templates" :key="template.title" class="info-card">
          <h3>{{ template.title }}</h3>
          <p>{{ template.description }}</p>
        </article>
      </div>
    </section>

    <section class="components-section">
      <div class="components-copy">
        <p class="eyebrow">Komponente</p>
        <h2>Sestavimo samo tisto, kar zares potrebuješ.</h2>
        <p>
          Vsaka stran je lahko sestavljena iz manjših blokov. Tako je stran pregledna, lažja za širitev
          in pripravljena na prihodnje vsebine, kot so novi apartmaji, novi zapisi ali novi zemljevidi.
        </p>
      </div>

      <div class="component-list">
        <span v-for="component in components" :key="component">{{ component }}</span>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">Primeri</p>
        <h2>Primeri strani, ki jih lahko uporabim kot izhodišče.</h2>
      </div>

      <div class="example-grid">
        <article v-for="example in examples" :key="example.title" class="example-card">
          <p class="example-type">{{ example.type }}</p>
          <h3>{{ example.title }}</h3>
          <p>{{ example.text }}</p>
        </article>
      </div>
    </section>

    <section class="process-section">
      <p class="eyebrow">Proces</p>
      <h2>Od ideje do objavljene strani.</h2>
      <div class="process-grid">
        <article>
          <span>01</span>
          <h3>Vsebina</h3>
          <p>Določimo namen, ciljno publiko, strukturo in najpomembnejše informacije.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Oblikovanje in razvoj</h3>
          <p>Postavim stran, komponente, odzivnost za telefon in osnovno optimizacijo.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Objava</h3>
          <p>Stran pripravim za objavo, povezavo z domeno in kasnejše nadgradnje.</p>
        </article>
      </div>
      <RouterLink to="/maps" class="secondary-link">Poglej še zemljevide in GPX →</RouterLink>
    </section>
  </main>
</template>

<style scoped>
.website-page {
  max-width: 80rem;
  margin: 0 auto;
  padding: 5rem 1.5rem 0;
}

.page-hero,
.components-section {
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
  font-size: clamp(2.55rem, 7vw, 5.4rem);
  font-weight: 950;
  line-height: 0.96;
  letter-spacing: -0.07em;
}

h2 {
  margin-bottom: 1rem;
  font-size: clamp(2rem, 4vw, 3.65rem);
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

.browser-preview {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 1.5rem;
  background: var(--color-surface);
  box-shadow: 0 28px 60px rgb(0 0 0 / 0.1);
}

.browser-bar {
  display: flex;
  gap: 0.45rem;
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.browser-bar span {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 999px;
  background: var(--color-border);
}

.preview-body {
  padding: 1.25rem;
}

.preview-hero {
  min-height: 210px;
  border-radius: 1rem;
  background:
    radial-gradient(circle at 20% 30%, rgb(221 170 119 / 0.55), transparent 28%),
    radial-gradient(circle at 80% 20%, rgb(170 221 119 / 0.45), transparent 26%),
    linear-gradient(135deg, var(--color-background), var(--color-surface-light));
}

.preview-lines {
  display: grid;
  gap: 0.75rem;
  max-width: 76%;
  margin: 1.25rem 0;
}

.preview-lines span {
  height: 0.9rem;
  border-radius: 999px;
  background: var(--color-border);
}

.preview-lines span:nth-child(1) { width: 90%; }
.preview-lines span:nth-child(2) { width: 68%; }
.preview-lines span:nth-child(3) { width: 78%; }

.preview-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
}

.preview-cards span {
  min-height: 105px;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  background: var(--color-surface-light);
}

.section-block,
.components-section,
.process-section {
  padding-top: 6rem;
}

.section-heading,
.components-copy,
.process-section {
  max-width: 50rem;
}

.template-grid,
.example-grid,
.process-grid {
  display: grid;
  gap: 1.25rem;
}

.info-card,
.example-card,
.process-grid article {
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 1.25rem;
  background: var(--color-surface);
}

.info-card:hover,
.example-card:hover,
.process-grid article:hover {
  border-color: var(--color-primary);
}

.component-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.component-list span {
  padding: 0.7rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  font-weight: 800;
}

.example-type {
  margin-bottom: 0.55rem;
  font-size: 0.73rem;
  font-weight: 850;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--color-primary);
}

.process-section {
  max-width: none;
}

.process-grid {
  margin-top: 1.5rem;
}

.process-grid span {
  display: inline-flex;
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-size: 0.8rem;
  font-weight: 950;
  letter-spacing: 0.2em;
}

@media (min-width: 860px) {
  .page-hero,
  .components-section {
    grid-template-columns: 0.95fr 1.05fr;
  }

  .template-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .example-grid,
  .process-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
