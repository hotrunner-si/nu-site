<script setup>
import HeroSection from '@/components/home_components/HeroSection.vue'

const highlights = [
  {
    title: 'Zemljevidi, ki razložijo prostor',
    description: 'Interaktivni zemljevidi za tekme, pohode, apartmaje in turistične vsebine. Trase, GPX, višinski profili, točke zanimanja in jasna legenda.',
    to: '/maps',
    cta: 'Poglej zemljevidne storitve',
    accent: 'primary',
  },
  {
    title: 'Spletne strani z uporabno strukturo',
    description: 'Spletne vizitke, večstranske predstavitve, osebne strani in blogi, zgrajeni iz komponent, ki jih lahko prilagodimo tvoji zgodbi.',
    to: '/websites',
    cta: 'Poglej spletne strani',
    accent: 'tertiary',
  },
]

const steps = [
  'Pregled cilja, vsebine in uporabnikov.',
  'Zasnova strukture, komponent in zemljevida.',
  'Izdelava strani, optimizacija za telefon in objava.',
]
</script>

<template>
  <main>
    <HeroSection />

    <section class="intro-section">
      <div class="intro-copy">
        <p class="eyebrow">Kaj ponujam</p>
        <h2>Namesto navadne predstavitve dobiš uporaben digitalni prostor.</h2>
        <p>
          Prenovljena stran je zasnovana kot jasna vstopna točka za trženje: obiskovalec takoj razume,
          da lahko pri meni naroči interaktivni zemljevid, ureditev GPX datotek ali celotno spletno stran.
        </p>
      </div>

      <div class="highlight-grid">
        <RouterLink
          v-for="item in highlights"
          :key="item.title"
          :to="item.to"
          class="highlight-card"
        >
          <span class="highlight-accent" :class="`highlight-accent-${item.accent}`" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <strong>{{ item.cta }} →</strong>
        </RouterLink>
      </div>
    </section>

    <section class="showcase-section">
      <div class="showcase-card map-preview">
        <div class="preview-topbar">
          <span />
          <span />
          <span />
        </div>
        <div class="preview-map">
          <div class="preview-route" />
          <span class="pin pin-a" />
          <span class="pin pin-b" />
          <span class="pin pin-c" />
        </div>
      </div>

      <div class="showcase-copy">
        <p class="eyebrow">Pregledno iz HomeView</p>
        <h2>Dve glavni smeri, brez zmede.</h2>
        <p>
          HomeView obiskovalca usmeri v eno od dveh ponudb: MapSiteView za zemljevide in GPX ter
          WebsiteView za spletne strani. Vsaka podstran ima storitve, orodja, komponente in primere.
        </p>
        <div class="step-list">
          <div v-for="(step, index) in steps" :key="step" class="step-item">
            <span>{{ index + 1 }}</span>
            <p>{{ step }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-section">
      <div>
        <p class="eyebrow">Kontakt</p>
        <h2>Imaš apartma, tekmo, traso ali osebno zgodbo?</h2>
        <p>
          Pošlji mi kratek opis ideje. Skupaj lahko določiva, ali potrebuješ samo zemljevid,
          preprosto spletno vizitko ali bolj celovito spletno mesto.
        </p>
      </div>

      <a href="mailto:ursic.office@gmail.com" class="contact-button">
        ursic.office@gmail.com
      </a>
    </section>
  </main>
</template>

<style scoped>
.intro-section,
.showcase-section,
.contact-section {
  max-width: 80rem;
  margin: 0 auto;
  padding: 6rem 1.5rem 0;
}

.intro-section {
  display: grid;
  gap: 2rem;
}

.intro-copy,
.showcase-copy,
.contact-section > div {
  max-width: 48rem;
}

.eyebrow {
  margin: 0 0 0.75rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-primary);
}

h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.6rem);
  font-weight: 950;
  line-height: 1.02;
  letter-spacing: -0.055em;
}

p {
  color: var(--color-text-secondary);
  line-height: 1.85;
}

.highlight-grid {
  display: grid;
  gap: 1.25rem;
}

.highlight-card {
  display: flex;
  flex-direction: column;
  min-height: 280px;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 1.25rem;
  background: var(--color-surface);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.highlight-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-primary);
  box-shadow: 0 20px 40px rgb(0 0 0 / 0.08);
}

.highlight-accent {
  width: 5rem;
  height: 0.75rem;
  margin-bottom: 1.25rem;
  border-radius: 999px;
}

.highlight-accent-primary { background: var(--color-primary); }
.highlight-accent-tertiary { background: var(--color-tertiary); }

.highlight-card h3 {
  margin: 0;
  font-size: 1.65rem;
  font-weight: 900;
  letter-spacing: -0.03em;
}

.highlight-card strong {
  margin-top: auto;
  color: var(--color-primary);
}

.showcase-section {
  display: grid;
  gap: 2rem;
  align-items: center;
}

.showcase-card {
  border: 1px solid var(--color-border);
  border-radius: 1.5rem;
  background: var(--color-surface);
  overflow: hidden;
  box-shadow: 0 25px 50px rgb(0 0 0 / 0.08);
}

.preview-topbar {
  display: flex;
  gap: 0.45rem;
  padding: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.preview-topbar span {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 999px;
  background: var(--color-border);
}

.preview-map {
  position: relative;
  min-height: 360px;
  background:
    linear-gradient(45deg, rgb(221 170 119 / 0.15), transparent),
    linear-gradient(rgb(0 0 0 / 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgb(0 0 0 / 0.055) 1px, transparent 1px);
  background-size: auto, 42px 42px, 42px 42px;
}

.preview-route {
  position: absolute;
  inset: 24% 16% 20% 18%;
  border: 8px solid var(--color-primary);
  border-right-color: var(--color-tertiary);
  border-radius: 38% 62% 55% 45%;
  transform: rotate(-10deg);
}

.pin {
  position: absolute;
  width: 1.35rem;
  height: 1.35rem;
  border: 4px solid white;
  border-radius: 999px;
  background: var(--color-primary);
  box-shadow: 0 10px 20px rgb(0 0 0 / 0.18);
}

.pin-a { left: 22%; top: 35%; }
.pin-b { right: 23%; top: 31%; background: var(--color-tertiary-hover); }
.pin-c { left: 46%; bottom: 26%; background: var(--color-secondary-hover); }

.step-list {
  display: grid;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.step-item {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  background: var(--color-surface);
}

.step-item span {
  display: grid;
  place-items: center;
  flex: 0 0 2rem;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: var(--color-primary);
  color: white;
  font-weight: 900;
}

.step-item p {
  margin: 0;
}

.contact-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 3.25rem;
  padding: 0.9rem 1.2rem;
  border-radius: 999px;
  background: var(--color-primary);
  color: white;
  font-weight: 800;
}

@media (min-width: 820px) {
  .intro-section,
  .showcase-section {
    grid-template-columns: 0.9fr 1.1fr;
  }

  .highlight-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .contact-section {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
