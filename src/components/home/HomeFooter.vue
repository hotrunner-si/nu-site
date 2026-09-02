<script setup>
const socialLinks = [
  { label: 'Strava', url: 'https://www.strava.com/athletes/65016800' },
  { label: 'Instagram', url: 'https://www.instagram.com/' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { label: 'Facebook', url: 'https://www.facebook.com/' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="footer-cta">
      <h2>Imaš vprašanja?</h2>
      <a class="mail-cta" href="mailto:ursic.office@gmail.com">Piši mi <span>↗</span></a>
    </div>
    <nav class="social-links" aria-label="Družbena omrežja">
      <a v-for="social in socialLinks" :key="social.label" :href="social.url" target="_blank" rel="noopener">
        {{ social.label }} <span aria-hidden="true">↗</span>
      </a>
    </nav>
    <div class="footer-meta">
      <span>© {{ new Date().getFullYear() }} All rights reserved.</span>
      <span>Author: Nejc Uršič</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { min-height: 0; padding: 2.2rem clamp(1.5rem, 4vw, 4.5rem) 1.4rem; background: #172019; color: #fffaf0; }
.footer-cta { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; }
h2 { margin: 0; font-family: var(--font-display); font-size: clamp(1.8rem, 3vw, 2.8rem); font-weight: 400; letter-spacing: -.04em; line-height: 1; }
.mail-cta { display: inline-flex; align-items: center; gap: 1.2rem; margin: 0; padding: .8rem 1.05rem; border-radius: 999px; background: var(--color-accent); font-size: .78rem; font-weight: 800; }
.mail-cta span { transition: transform .2s; }
.mail-cta:hover span { transform: translate(.2rem, -.2rem); }
.social-links { display: grid; grid-template-columns: repeat(4, 1fr); gap: .6rem; margin-top: 1.8rem; }
.social-links a { display: flex; align-items: center; justify-content: space-between; padding: .85rem 1rem; border: 1px solid rgba(255,250,240,.16); border-radius: 999px; color: rgba(255,250,240,.72); font-size: .7rem; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; transition: border-color .2s, color .2s, transform .2s; }
.social-links a:hover { transform: translateY(-2px); border-color: var(--color-accent); color: #fffaf0; }
.social-links a span { color: var(--color-accent); transition: transform .2s; }
.social-links a:hover span { transform: translate(.15rem, -.15rem); }
.footer-meta { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1.4rem; padding-top: 1rem; border-top: 1px solid rgba(255,250,240,.14); color: rgba(255,250,240,.48); font-size: .62rem; letter-spacing: .08em; text-transform: uppercase; }
.footer-meta span { white-space: nowrap; }

@media (max-width: 680px) {
  .social-links { grid-template-columns: repeat(2, 1fr); }
  .footer-meta { gap: .5rem; font-size: clamp(.48rem, 2.2vw, .62rem); letter-spacing: .04em; }
  .footer-cta { align-items: center; }
}
</style>
