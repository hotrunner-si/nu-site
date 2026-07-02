<template>
  <section class="hero-section">
    <div class="hero-container">
      <div class="hero-visual" aria-hidden="true">
        <div class="map-grid" />
        <div class="route-line" />
        <span class="route-point route-point-start">S</span>
        <span class="route-point route-point-finish">F</span>
      </div>

      <div class="hero-content">
        <p class="hero-tag">Interaktivni zemljevidi • GPX • Spletne strani</p>

        <h1 class="hero-title">
          Digitalne predstavitve za apartmaje, tekme, poti in osebne zgodbe.
        </h1>

        <p class="hero-subtitle">
          Pomagam ti iz ideje ustvariti pregledno spletno stran z lepimi zemljevidi,
          premišljeno strukturo in vsebino, ki obiskovalca hitro pripelje do prave informacije.
        </p>

        <div class="hero-actions">
          <RouterLink to="/maps" class="hero-button hero-button-primary">
            Zemljevidi in GPX
          </RouterLink>

          <RouterLink to="/websites" class="hero-button hero-button-secondary">
            Spletne strani
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 1rem 1.5rem 0;
}

.hero-container {
  position: relative;
  max-width: 80rem;
  min-height: 660px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 1.5rem;
  background:
    radial-gradient(circle at 15% 20%, rgb(221 170 119 / 0.45), transparent 34%),
    radial-gradient(circle at 85% 15%, rgb(170 221 119 / 0.35), transparent 30%),
    linear-gradient(135deg, var(--color-surface), var(--color-background));
}

.hero-visual {
  position: absolute;
  inset: 0;
  opacity: 0.9;
}

.map-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgb(0 0 0 / 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgb(0 0 0 / 0.06) 1px, transparent 1px);
  background-size: 52px 52px;
  mask-image: linear-gradient(to bottom, black, transparent 90%);
}

.route-line {
  position: absolute;
  right: 7%;
  bottom: 12%;
  width: min(52vw, 620px);
  height: min(38vw, 420px);
  border: 10px solid var(--color-primary);
  border-left-color: transparent;
  border-bottom-color: var(--color-tertiary);
  border-radius: 55% 45% 60% 40%;
  transform: rotate(-18deg);
  filter: drop-shadow(0 20px 45px rgb(0 0 0 / 0.14));
}

.route-point {
  position: absolute;
  display: grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  color: white;
  font-weight: 900;
  box-shadow: 0 14px 35px rgb(0 0 0 / 0.2);
}

.route-point-start {
  right: 49%;
  bottom: 19%;
  background: var(--color-primary);
}

.route-point-finish {
  right: 9%;
  bottom: 47%;
  background: var(--color-tertiary-hover);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 54rem;
  padding: 5rem 1.5rem 3rem;
}

.hero-tag {
  margin: 0 0 1.5rem;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.32em;
  color: var(--color-primary);
}

.hero-title {
  margin: 0;
  font-size: clamp(2.5rem, 7vw, 5.8rem);
  font-weight: 950;
  line-height: 0.95;
  letter-spacing: -0.07em;
  color: var(--color-text-primary);
}

.hero-subtitle {
  max-width: 42rem;
  margin: 1.5rem 0 0;
  font-size: 1.08rem;
  line-height: 2;
  color: var(--color-text-secondary);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2.5rem;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3.35rem;
  padding: 0.95rem 1.35rem;
  border-radius: 1rem;
  font-weight: 800;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
}

.hero-button-primary {
  background-color: var(--color-primary);
  color: white;
}

.hero-button-primary:hover {
  background-color: var(--color-primary-hover);
}

.hero-button-secondary {
  border: 1px solid var(--color-border);
  background-color: rgb(255 255 255 / 0.38);
  color: var(--color-text-primary);
  backdrop-filter: blur(8px);
}

@media (min-width: 768px) {
  .hero-content {
    padding: 7rem 4rem 5rem;
  }
}

@media (max-width: 720px) {
  .hero-container {
    min-height: 720px;
  }

  .route-line {
    right: -20%;
    bottom: 4%;
    width: 420px;
    height: 300px;
  }
}
</style>
