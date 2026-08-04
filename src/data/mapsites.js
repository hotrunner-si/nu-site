export const mapServices = [
  {
    type: 'image',
    label: 'Produkt',
    title: 'Zemljevidi po meri',
    description:
      'Potrebujete zemljevid za turistične namene, dogodek ali osebni projekt? Na podlagi vaših želja in potreb pripravim zemljevid po meri, ki ga lahko uporabite v tiskani ali digitalni obliki.',
    image: '/images/pelmo-sesto-mix-mini.jpg',
    link: 'https://gorski-blog.netlify.app',
    linkText: 'Poglej primer',
    reverse: false,
  },
  {
    type: 'leaflet',
    label: 'Digitalni produkt',
    title: 'Spletni zemljevidi',
    description:
      'Implementacija interaktivnega zemljevida na spletno stran ali v aplikacijo. V zemljevid je mogoče vključiti različne sloje, kot so poti, točke zanimivosti, fotografije in druge informacije. Zemljevid lahko popolnoma kostumiziramo s prilagoditvijo barv, slojev in označb.',
    image: '/images/maps/gpx-route.jpg',
    link: 'https://gorski-blog.netlify.app',
    linkText: 'Poglej primer GPX poti',
    reverse: true,
  },
  {
    type: 'video',
    label: 'Storitev',
    title: 'Ogled in GPX trasiranje poti',
    description:
      'Za tekme, trail dogodke ali skupinske izlete pripravimo zemljevid trase s startom, ciljem, okrepčevalnicami, navijaškimi točkami, nevarnimi odseki in ostalimi pomembnimi informacijami. Pripravimo tudi dokumentacijo, ki se tiče zemljevida in poti.',
    video: '/videos/pelmo-vid-small.mp4',
    link: 'https://gorski-blog.netlify.app',
    linkText: 'Poglej primer dogodka',
    reverse: false,
  },
]



export const center = [46.511624, 13.997018]
export const zoom = 9
export const markers = [
  {
    id: 1,
    position: [46.443667, 13.641768],
    title: 'Mangartsko sedlo',
    description: 'Najvišja cesta v Sloveniji.'
  },
  {
    id: 2,
    position: [46.357135, 14.535482],
    title: 'Grintovec',
    description: 'Najvišji vrh Kamniško-Savinjskih Alp.'
  },
  {
    id: 3,
    position: [46.433015, 13.743357],
    title: 'Vršič',
    description: 'Najvišji prelaz v Sloveniji'
  },
]
