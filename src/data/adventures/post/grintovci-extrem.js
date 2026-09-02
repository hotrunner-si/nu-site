import { createAdventure, p, img, quote, gallery } from '../helpers'

export default createAdventure({
  id: 1,
  slug: 'grintovci-extrem',
  title: 'FKT Grintovci Extrem',
  location: 'Kamniško-Savinjske Alpe',
  date: '2020-09-12',
  distance: 33,
  elevation: 3300,
  type: 'Trail tek',
  difficulty: 'Zelo težko',
  playground: ['peaks', 'pastures', 'forest'],
  excerpt: 'Opora Sebastjanu Zarniku na poti do novega FKT-ja.',
  image: '/images/kv01.jpg',

  blocks: [
    p('Sebastjan je svoj podvig, ki ga je načrtoval že celo leto, začel ob zgodnji jutranji uri na parkirišču pri Calcitu.'),
    img('/images/verbier01.jpg', 'Vzpon proti Kamniškemu Sedlu', 'wide'),
    p('Moja pot pa se je začela ob 7.00 z vzponom na Sedlo z Jermance.'),
    quote('Sebastjan je za celoten krog porabil 13 ur in 2 minuti.'),
    gallery([
      '/images/verbier01.jpg',
      '/images/pordoi01.jpg',
      '/images/rgac02.jpg',
    ]),
  ],

  stravaUrl: 'https://www.strava.com/activities/4050336133',
  gpxUrl: '/gpx/grintovci-extreme.gpx',
})