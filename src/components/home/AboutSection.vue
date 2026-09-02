<template>
  <section id="about" class="section about-section">
    <h2>Gorski tek in <em>spletne strani.</em></h2>
    <div class="about-grid">
      <div class="body-copy">
        <p>Sem gorski tekač iz Županjih Njiv in ustvarjalec spletnih strani. Rad treniram na svežem zraku,
        raziskujem gorske stezice in uživam v razgledih.</p>
        <p>Študiram matematiko in računalništvo, programiram in delam na raznih osebnih spletnih projektih.</p>
      </div>
      <p class="lead"> Na spodnjih povezavah si poglej, kako poskušam delček doživetij iz narave prikazati na spletu.</p>
    </div>
    <div class="about-actions">
      <a href="https://gorski-blog.netlify.app" target="_blank" rel="noopener">
        <span class="card-number">01</span>
        <span class="card-copy"><strong>Gorski kilometri</strong><span>Blog in prostor za moje športne dosežke.</span></span>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </a>
      <a href="https://memory-nu.netlify.app" target="_blank" rel="noopener">
        <span class="card-number">02</span>
        <span class="card-copy"><strong>GPS spomini</strong><span>Baza vseh mojih avantur zadnjih let.</span></span>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </a>
      <a href="mailto:ursic.office@gmail.com?subject=Digitalni%20produkti">
        <span class="card-number">03</span>
        <span class="card-copy"><strong>Kupi pri meni</strong><span>Digitalni produkti za outdoor navdušence.</span></span>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.section {
  scroll-margin-top: var(--section-nav-height);
  padding: clamp(3.75rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4.5rem);
  border-bottom: 1px solid var(--color-border);
}

h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2.3rem, 5vw, 4.3rem);
  font-weight: 400;
  letter-spacing: -.04em;
  line-height: 1;
}

h2 em {
  color: var(--color-accent);
  font-weight: 400;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2.5rem;
}

.about-grid p {
  margin: 0;
  line-height: 1.75;
}

.lead {
  font-family: var(--font-display);
  font-size: clamp(1.15rem, 1.7vw, 1.55rem);
  line-height: 1.42;
}

.body-copy {
  display: grid;
  gap: 1rem;
  color: var(--color-muted);
}

.about-actions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: .8rem;
  margin-top: 2.5rem;
}

.about-actions a {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 1;
  min-width: 0;
  padding: 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  transition: transform .2s, color .2s, border-color .2s, box-shadow .2s;
}

.about-actions a:hover {
  transform: translateY(-4px);
  border-color: var(--color-accent);
  color: var(--color-accent);
  box-shadow: var(--shadow-soft);
}

.card-number { color: var(--color-muted); font-size: .68rem; font-weight: 800; letter-spacing: .12em; }
.card-copy { display: grid; gap: .7rem; }
.card-copy strong { font-family: var(--font-display); font-size: clamp(1.25rem, 2.2vw, 1.8rem); font-weight: 400; line-height: 1.05; }
.card-copy > span { color: var(--color-muted); font-size: .78rem; line-height: 1.55; }
.card-arrow { position: absolute; top: 1.15rem; right: 1.2rem; color: var(--color-accent); font-size: 1.15rem; transition: transform .2s; }
.about-actions a:hover .card-arrow { transform: translate(.2rem, -.2rem); }

.card-arrow {
  color: var(--color-accent);
}

@media (max-width: 680px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }

  .about-actions {
    gap: .5rem;
  }

  .about-actions a { padding: .8rem; }
  .card-arrow { top: .7rem; right: .75rem; }
  .card-copy { gap: .35rem; }
  .card-copy strong { font-size: clamp(.82rem, 3.6vw, 1.2rem); }
  .card-copy > span { font-size: clamp(.5rem, 2vw, .7rem); line-height: 1.35; }
}
</style>
