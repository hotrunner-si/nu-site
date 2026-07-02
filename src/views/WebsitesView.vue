<script setup>
import HeroSection from '@/components/websites/HeroSection.vue'
import Product from '@/components/websites/ProductSection.vue'
import Project from '@/components/websites/ProjectSection.vue'

const heroImages = [
  {
    src: '/images/websites/apartma-mamut.png',
    alt: 'Spletna stran za nastanitev'
  },
  {
    src: '/images/websites/gorski-kilometri.png',
    alt: 'Predstavitvena spletna stran za projekt'
  },
  {
    src: '/images/websites/tpok-site.png',
    alt: 'Osebna spletna stran ali blog'
  },
  {
    src: '/images/websites/vue-logo.png',
    alt: 'Gorski blog'
  },
  {
    src: '/images/websites/my-page.png',
    alt: 'Interaktivni zemljevid'
  }
]

const products = [
  {
    title: 'Spletna stran za vašo nastanitev',
    subtitle: 'Za apartmaje, koče, sobe in turistične namestitve.',
    description:
      'Elegantna, hitra in pregledna spletna stran, kjer lahko gostom predstavite nastanitev, lokacijo, galerijo, cene, kontakte in povezave do rezervacij.',
    image: '/images/websites/accommodation.jpg',
    tag: 'Nastanitve',
    accent: 'primary',
    features: ['Galerija nastanitve', 'Kontakt in lokacija', 'Povezave do rezervacij']
  },
  {
    title: 'Predstavitvena spletna stran za vaš projekt',
    subtitle: 'Za manjša podjetja, dogodke, ideje ali storitve.',
    description:
      'Jasna predstavitev projekta, storitev ali dogodka z modernim dizajnom, dobro strukturo in vsebino, ki obiskovalcu hitro pove, kaj ponujate.',
    image: '/images/websites/project.jpg',
    tag: 'Projekti',
    accent: 'secondary',
    features: ['Predstavitev storitev', 'Sekcije po meri', 'Jasen poziv k dejanju']
  },
  {
    title: 'Osebna spletna stran ali blog',
    subtitle: 'Za ustvarjalce, športnike, študente in posameznike.',
    description:
      'Osebna spletna stran, kjer lahko predstavite sebe, svoje delo, dosežke, zapise, fotografije, tekme, potovanja ali druge vsebine.',
    image: '/images/websites/blog.jpg',
    tag: 'Osebno',
    accent: 'tertiary',
    features: ['Osebna predstavitev', 'Blog objave', 'Portfolio ali dosežki']
  }
]

const projects = [
  {
    title: 'Gorski blog',
    description:
      'Blog z zapisi iz gorskih tekov, potovanj in treningov, zasnovan za hitro branje in močno vizualno predstavitev.',
    image: '/images/websites/gorski-kilometri.png',
    link: 'https://gorski-blog.netlify.app'
  },
  {
    title: 'Osebna portfolio stran',
    description:
      'Spletna stran za predstavitev projektov, tekem, dosežkov in osebne zgodbe na enem mestu.',
    image: '/images/websites/my-page.png',
    link: 'https://apartma-mamut.si'
  },
  {
    title: 'Interaktivni zemljevidi',
    description:
      'Digitalne vsebine za tekače, pohodnike in popotnike z zemljevidi, trasami in uporabnimi informacijami.',
    image: '/images/websites/tpok-site.png',
    link: 'https://pokal-kamnik.netlify.app'
  }
]
</script>

<template>
  <main class="websites-page">
    <HeroSection :images="heroImages" />

    <section id="products" class="products-section">
      <div class="section-header">
        <p class="section-tag">
          Ponudba
        </p>

        <h2 class="section-title">
          Trije preprosti paketi za različne potrebe
        </h2>

        <p class="section-description">
          Vsaka spletna stran je zasnovana tako, da je jasna, uporabna in prilagojena vsebini,
          ki jo želiš predstaviti.
        </p>
      </div>

      <div class="products-grid">
        <Product
          v-for="product in products"
          :key="product.title"
          :product="product"
        />
      </div>
    </section>

    <section id="projects" class="projects-section">
      <div class="section-header">
        <p class="section-tag">
          Preteklo delo
        </p>

        <h2 class="section-title">
          Nekaj mojih projektov
        </h2>

        <p class="section-description">
          Tukaj lahko predstaviš spletne strani, bloge, zemljevide ali druge digitalne izdelke,
          ki jih želiš pokazati potencialnim strankam.
        </p>
      </div>

      <div class="projects-grid">
        <Project
          v-for="project in projects"
          :key="project.title"
          :project="project"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.websites-page {
  color: var(--color-text-primary);
}

.products-section,
.projects-section {
  max-width: 80rem;
  margin: 0 auto;
  padding: clamp(3.5rem, 8vw, 6rem) clamp(1rem, 4vw, 1.5rem);
  scroll-margin-top: var(--navbar-height);
}

.projects-section {
  padding-top: 0;
}

.section-header {
  max-width: 48rem;
  margin-bottom: clamp(1.75rem, 5vw, 3rem);
}

.section-tag {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--color-primary);
}

.section-title {
  margin: 0.75rem 0 0;
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: -0.04em;
}

.section-description {
  max-width: 42rem;
  margin: 1rem 0 0;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-secondary);
}

.products-grid,
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 3vw, 1.5rem);
}

@media (max-width: 900px) {
  .products-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 420px) {
  .section-title {
    font-size: 1.8rem;
  }
}
</style>