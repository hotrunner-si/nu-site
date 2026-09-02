<template>
  <aside class="identity-panel">
    <div class="portrait" role="img" aria-label="Prostor za portretno fotografijo"><span>Prostor za<br />tvojo fotografijo</span></div>
    <div class="portrait-shade"></div>
    <header class="mini-nav"><a class="monogram" href="#about" aria-label="Na začetek">NU<span>.</span></a><span class="available"><i></i> Na voljo za sodelovanje</span></header>
    <div class="identity-copy">
      <p class="kicker"></p><h1>Nejc<br /><em>Uršič</em></h1>
      <p class="intro">Gradim spletne zgodbe in nabiram kilometre.</p>
      <div class="contact-row"><a href="mailto:ursic.office@gmail.com"><span>ursic.office@gmail.com</span><span class="contact-arrow">↗</span></a><a href="https://www.strava.com/athletes/65016800" target="_blank" rel="noopener">Strava <span class="contact-arrow">↗</span></a></div>
    </div>
    <a class="scroll-note" href="#about" aria-label="Pomakni se navzdol"><span aria-hidden="true"></span></a>
  </aside>
</template>

<style scoped>
.identity-panel { position: relative; isolation: isolate; min-width: 0; overflow: hidden; background: #172019; color: #fffaf0; }
.identity-panel::before, .identity-panel::after { position: absolute; z-index: 0; right: -8rem; bottom: -9rem; width: 24rem; height: 24rem; border: 1px solid rgba(255,250,240,.12); border-radius: 50%; content: ''; }
.identity-panel::after { right: -5rem; bottom: -6rem; width: 18rem; height: 18rem; border-color: rgba(255,250,240,.08); }
.portrait { position: absolute; inset: 0; display: grid; place-items: center; background: linear-gradient(145deg, rgba(82,111,85,.72), rgba(23,32,25,.86)), repeating-linear-gradient(135deg, transparent 0 20px, rgba(255,255,255,.03) 20px 21px); }
.portrait span { transform: translateY(-5vh); padding: 1.1rem 1.4rem; border: 1px dashed rgba(255,250,240,.35); border-radius: 999px; color: rgba(255,250,240,.58); font-size: .7rem; font-weight: 700; letter-spacing: .14em; line-height: 1.45; text-align: center; text-transform: uppercase; }
.portrait-shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(14,19,15,.2), rgba(14,19,15,.05) 35%, rgba(14,19,15,.92)); }
.mini-nav, .identity-copy, .scroll-note { position: absolute; z-index: 2; }
.mini-nav { top: 0; right: 0; left: 0; display: flex; align-items: center; justify-content: space-between; padding: 1.5rem 2rem; }
.monogram { font-family: var(--font-display); font-size: 1.65rem; font-weight: 700; }
.monogram span, .kicker { color: #e69a5d; }
.available { display: flex; align-items: center; gap: .55rem; font-size: .7rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
.available i { width: .45rem; height: .45rem; border-radius: 50%; background: #91b88d; box-shadow: 0 0 0 .3rem rgba(145,184,141,.12); }
.identity-copy { right: 2.5rem; bottom: 3.5rem; left: 2.5rem; max-width: 570px; }
.kicker { margin: 0 0 1rem; font-size: .72rem; font-weight: 800; letter-spacing: .15em; text-transform: uppercase; }
.identity-copy h1 { margin: 0; font-family: var(--font-display); font-size: clamp(4rem, 8vw, 7rem); font-weight: 400; letter-spacing: -.055em; line-height: .76; }
.identity-copy h1 em { color: #e69a5d; font-weight: 400; }
.intro { max-width: 520px; margin: 1.5rem 0; color: rgba(255,250,240,.7); font-size: .95rem; line-height: 1.6; }
.contact-row { display: flex; flex-wrap: wrap; gap: .75rem; }
.contact-row a { padding: .78rem 1rem; border: 1px solid rgba(255,250,240,.18); border-radius: 999px; font-size: .78rem; transition: background .2s, color .2s, transform .2s; }
.contact-row a:hover { transform: translateY(-2px); background: #fffaf0; color: #172019; }
.contact-arrow { margin-left: .35rem; color: #e69a5d; }
.scroll-note { right: 2rem; bottom: 2rem; display: none; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; color: rgba(255,250,240,.68); }
.scroll-note span { width: .72rem; height: .72rem; border: solid currentColor; border-width: 0 2px 2px 0; transform: translateY(-.18rem) rotate(45deg); }

@media (max-width: 980px) {
  .identity-panel { position: relative; height: 92vh; min-height: 620px; }
  .scroll-note { right: auto; bottom: 1rem; left: 50%; display: flex; transform: translateX(-50%); }
  .identity-copy { right: 2rem; left: 2rem; }
}
@media (max-width: 680px) {
  .mini-nav { padding: 1.4rem; }
  .available { font-size: .58rem; }
  .identity-copy { right: 1.4rem; bottom: 4.3rem; left: 1.4rem; }
  .intro { margin: 1.5rem 0; }
  .contact-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .55rem; }
  .contact-row a { min-width: 0; padding: .72rem .35rem; font-size: clamp(.56rem, 2.2vw,.72rem); text-align: center; white-space: nowrap; }
}
</style>
