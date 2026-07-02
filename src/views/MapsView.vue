<script setup>
const mapServices = [
  {
    title: 'Interaktivni zemljevidi poti',
    description:
      'Izdelam interaktiven zemljevid, kjer lahko obiskovalec vidi pot, profil trase, pomembne točke, razdaljo, višinske metre in ključne informacije. Tak zemljevid je uporaben za tekače, pohodnike, turistične ponudnike, dogodke ali osebne bloge.',
    image: '/images/maps/interactive-map.jpg',
    link: 'https://gorski-blog.netlify.app',
    linkText: 'Poglej primer',
    reverse: false
  },
  {
    title: 'GPX poti za tek in pohodništvo',
    description:
      'GPX datoteke lahko pretvorim v pregledno digitalno predstavitev poti. Trasa je prikazana na zemljevidu, dodam pa lahko še opis poti, težavnost, dolžino, višinski profil, fotografije in priporočila za obisk.',
    image: '/images/maps/gpx-route.jpg',
    link: 'https://gorski-blog.netlify.app',
    linkText: 'Poglej primer GPX poti',
    reverse: true
  },
  {
    title: 'Zemljevidi za športne dogodke',
    description:
      'Za tekme, trail dogodke ali skupinske izlete lahko pripravim zemljevid trase s startom, ciljem, okrepčevalnicami, navijaškimi točkami, nevarnimi odseki in ostalimi pomembnimi lokacijami. Zemljevid je lahko namenjen tekmovalcem, organizatorjem ali obiskovalcem.',
    image: '/images/maps/race-map.jpg',
    link: 'https://gorski-blog.netlify.app',
    linkText: 'Poglej primer dogodka',
    reverse: false
  },
  {
    title: 'Digitalni vodniki po poteh',
    description:
      'Iz poti lahko naredim celoten digitalni vodnik. Poleg zemljevida vključim opis odsekov, fotografije, priporočene postanke, zanimivosti, čas hoje ali teka in praktične informacije. Takšna rešitev je primerna za turistične destinacije, nastanitve ali osebne projekte.',
    image: '/images/maps/guide-map.jpg',
    link: 'https://gorski-blog.netlify.app',
    linkText: 'Poglej primer vodnika',
    reverse: true
  },
  {
    title: 'Zemljevidi za turistične ponudnike',
    description:
      'Za apartmaje, koče, kampe ali lokalne ponudnike lahko pripravim zemljevid bližnjih poti, razglednih točk, izletov, plaž, parkirišč in drugih zanimivosti. Tako obiskovalec hitro vidi, kaj lahko počne v okolici vaše nastanitve.',
    image: '/images/maps/tourism-map.jpg',
    link: 'https://gorski-blog.netlify.app',
    linkText: 'Poglej primer za turizem',
    reverse: false
  }
]
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
      <article
        v-for="service in mapServices"
        :key="service.title"
        class="service-section"
        :class="{ 'service-section-reverse': service.reverse }"
      >
        <div class="service-image-wrap">
          <img
            :src="service.image"
            :alt="service.title"
            class="service-image"
          >
        </div>

        <div class="service-content">
          <p class="service-label">
            Storitev
          </p>

          <h2 class="service-title">
            {{ service.title }}
          </h2>

          <p class="service-description">
            {{ service.description }}
          </p>

          <a
            :href="service.link"
            class="service-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ service.linkText }}
          </a>
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
  width: 100vw;
  margin-left: calc(50% - 50vw);

  background:
    radial-gradient(circle at 18% 24%, rgb(170 221 119 / 0.28), transparent 30rem),
    radial-gradient(circle at 82% 58%, rgb(221 170 119 / 0.24), transparent 34rem),
    var(--color-background);

  border-bottom: 1px solid var(--color-border);
}

.maps-hero-inner {
  max-width: 80rem;
  margin: 0 auto;
  padding:
    clamp(5rem, 10vw, 7rem)
    clamp(1rem, 4vw, 1.5rem)
    clamp(4rem, 8vw, 5.5rem);
}

.maps-tag {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--color-primary);
}

.maps-title {
  max-width: 48rem;
  margin: 1rem 0 0;
  font-size: clamp(2.25rem, 6vw, 4.5rem);
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.055em;
}

.maps-summary {
  max-width: 42rem;
  margin: 1.4rem 0 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.75;
  color: var(--color-text-secondary);
}

/* SERVICES */

.services-section {
  max-width: 80rem;
  margin: 0 auto;
  padding: clamp(3.5rem, 8vw, 6rem) clamp(1rem, 4vw, 1.5rem);
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

.service-section + .service-section {
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
  aspect-ratio: 16 / 11;
  object-fit: cover;

  transition: transform 0.4s ease;
}

.service-section:hover .service-image {
  transform: scale(1.04);
}

.service-content {
  min-width: 0;
}

.service-label {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-primary);
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
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
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
  .maps-hero-inner {
    padding-top: 4.5rem;
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