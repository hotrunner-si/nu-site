import { createAdventure, p, img, quote, gallery, accent } from '../helpers'

export default createAdventure({
  id: 2,
  slug: 'trail-verbier',
  public: true,
  title: 'Trail Verbier - potovanje v Švico',
  location: 'Valais',
  date: '2025-07-12',
  distance: 200,
  elevation: 20000,
  type: 'Trail tek',
  difficulty: 'Težko',
  playground: ['lake', 'peaks', 'river', 'pastures', 'glacier', 'ferrata'],
  excerpt: 'Moja prva ultra razdalja na trail preizkušnji v Švici',
  image: '/images/verbier25/verbier01.jpg',

  blocks: [
    quote([
      'Za ',
      accent('76 km'),
      ' in ',
      accent('5200 m vzpona'),
      ' sem potreboval ',
      accent('12 h 36 min'),
      '.',
    ]),

    p([
      'Zelo na hitro sem se odločil, da bi rad odtekel eno malo daljšo trail dirko. Pozanimal sem se katere UTMB tekme so še proste in se odločil za ',
      accent('Trail Verbier St-Bernard'),
      '. Odločil sem se za razdaljo 76 kilometrov. ki spada v UTMB kategorijo 100K.',
    ]),

    p(
      'Na dolgo pot v Švico smo se odpravili z avtom, prvih nekaj dni smo spali v gorski vasi Nendaz, ki je eno uro oddaljena od prizorišča v Verbierju.',
    ),

    p(
      'Dnevi do tekme so hitro minevali, pred in po tekmi smo si uspeli ogledati okolico Nendaza - dolino Siviez in Dent de Nendaz. Priprave na tekmo so dobro uspele in v soboto zjutraj sem bil pripravljen na štart.',
    ),

    img(
      '/images/verbier25/verbier02.jpg',
      '46. kilometer na Trail Verbier St-Bernard pri Cabane Brunet',
      'text-right',
      {
        text: [
          'Štart je bil ob 8.00 v La Fouly.',
          'Celotna proga je potekala po zelo lepih panoramskih poteh. Ves čas sem lahko užival razglede na okoliške 3000 in 4000ake.',
        ],
        caption:
          'Na 46. kilometru trase Trail Verbier St-Bernard pri Cabane Brunet, eni izmed pomembnih okrepčevanic na progi, kjer je bila pomoč navijačev dovoljena.',
      },
    ),

    p(
      'Moji navijači so me čakali najprej v Bourg-Saint-Pierre, po prvem dolgem spustu na 26. kilometru. Nato pa pri Cabane Brunet na 46. kilometru in še zadnjič pred ciljem na 63. kilometru v Lourtierju.',
    ),

    p(
      'Sledil je še zadnji mučni vzpon s 1200 višinci in nato zadnji spust do cilja v Verbierju, ki sem ga prečkal po dolgih 12 urah in 36 minutah, ki pa so v resnici kar hitro minile.',
    ),

    p(
      'Po nekaj dneh smo se preselili v Lauterbrunnen, kjer smo v dolini pod čudovitimi gorami pričakali še dogodek Eiger Ultra Trail, ki se ga je udeležil moj prijatelj Anže Mošnik.',
    ),

    p(
      'V času bivanja pod Jungfrauom, Mönchom in Eigerjem, smo uspeli prehoditi okoli 80 km in 10.000 višincev vrednih poti. Vzpeli smo se v Wengen, v Mürren in nad Grindelwald.',
    ),

    gallery([
      {
        src: '/images/verbier25/nendaz01.jpg',
        alt: 'Gorska pokrajina nad vasjo Nendaz v Švici',
        caption:
          'Tadej, Alja in Tjaša na grebenu ob Dent de Nendaz.',
      },
      {
        src: '/images/verbier25/verbier05.jpg',
        alt: 'Panoramski razgledi na trasi Trail Verbier St-Bernard',
        caption:
          'Ledenik pod Grand Combin, ki smo ga kasneje prečkali na trasi Traila po visečem mostu.',
      },
      {
        src: '/images/verbier25/verbier03.jpg',
        alt: 'Trail pot na tekmi Trail Verbier St-Bernard',
        caption:
          'Majhno jezero med Cabane Millet in Cabane Brunet.',
      },
      {
        src: '/images/verbier25/verbier04.jpg',
        alt: 'Gorski razgled med Trail Verbier St-Bernard',
        caption:
          'Jaz na stezicah Trail Verbier St-Bernard.',
      },
      {
        src: '/images/verbier25/nendaz02.jpg',
        alt: 'Pohod v okolici Nendaza pred tekmo',
        caption:
          'Naš pogled z balkona apartmaja v Nendazu.',
      },
    ]),
  ],

  stravaUrl: 'https://www.strava.com/activities/15093690794',
  gpxUrl: '/gpx/verbier2025.gpx',
  mapMarkers: [
    {
      title: 'Start – La Fouly',
      type: 'start',
      text: 'Štart Trail Verbier St-Bernard',
      lat: 45.93278,
      lng: 7.09864,
    },
    {
      title: 'Bourg-Saint-Pierre',
      type: 'cheer',
      text: 'Prva navijaška postaja (26. km)',
      lat: 45.9527,
      lng: 7.2073,
    },
    {
      title: 'Cabane Brunet',
      type: 'cheer',
      text: 'Druga navijaška postaja (46. km)',
      lat: 46.0305,
      lng: 7.2735,
    },
    {
      title: 'Lourtier',
      type: 'cheer',
      text: 'Zadnja navijaška postaja (63. km)',
      lat: 46.0515,
      lng: 7.2645,
    },
    {
      title: 'Cilj – Verbier',
      type: 'finish',
      text: 'Cilj po 76 km',
      lat: 46.0957,
      lng: 7.2271,
    },
  ],
})
