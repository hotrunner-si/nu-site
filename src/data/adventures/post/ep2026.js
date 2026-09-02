import { createAdventure, p, img, quote, gallery, accent } from '../helpers'

export default createAdventure({
  id: 3,
  slug: 'evropsko-prvenstvo-kamnik',
  public: true,
  featured: true,
  title: 'Evropsko prvenstvo v gorskih tekih 2026',
  location: 'Kamnik',
  date: '2026-06-07',
  distance: 13,
  elevation: 900,
  type: 'Gorski tek',
  difficulty: 'Extremno',
  playground: ['forest', 'urban', 'road'],
  excerpt: 'Nastopil sem na tekmi up-downhill na letošnjem evropskem prvenstvu v domačem kraju.',
  image: '/images/ep2026/ep-open-05.jpg',

  blocks: [
    p([
      'Prvi vikend v juniju je v ',
      accent('Kamniku'),
      ' potekalo Evropsko prvenstvo v gorskih in trail tekih. Tudi sam sem se ga imel čast udeležiti kot član slovenske reprezentance.'
    ]),

    img(
      '/images/ep2026/ep-sg-06.jpg',
      'Drugič na Starem gradu  na Evropskem prvenstvu v gorskih in trail tekih 2026 v Kamniku.',
      'text-left',
      {
        text: [
          'Nedeljska preizkušnja v disciplini gor-dol je s štartom na Glavnem trgu potekala po poteh Starega gradu, Špice in Tolste gore.',
          'Vzponi so bili strmi, spusti pa zelo blatni.',
        ],
        caption:
          'Drugič na Starem gradu med tekmo gor-dol.',
      },
    ),

    p('Na štartu smo bili štirje člani slovenske reprezentance, poleg mene še Matej Letojne, Tadej Serdinšek in Klemen Španring. Ob 10.30 smo se po vročih ulicah zapodili proti Staremu gradu. Štartal sem čisto zadaj in med tekmo pridobil 10 pozicij za končni rezultat: 65. mesto s časom 1 ura in 15 min.'),

    p('Glede na hudo evropsko konkurenco sem zelo zadovoljen s svojim dosežkom.'),

    quote('Hvala vsem navijačem,'),

    p('ki so med tekmo poskrbeli za neverjetno vzdušje in nekaj lažjih korakov. Hvala tudi organizatorjem in prostovoljcem za odlično izpeljan dogodek!'),

    gallery([
      {
        src: '/images/ep2026/ep-sg-01.jpg',
        alt: 'Tek po Starem gradu na Evropskem prvenstvu v Kamniku',
        caption:
          'Vzpon proti Staremu gradu na nedeljsko',
      },
      {
        src: '/images/ep2026/ep-druzinska.jpg',
        alt: 'Družinska fotografija po tekmi v Kamniku',
        caption:
          'Slika z navijači tik po prihodu v cilj',
      },
      {
        src: '/images/ep2026/ep-finish-02.jpg',
        alt: 'Prihod v cilj na Glavnem trgu v Kamniku',
        caption:
          'Družina Papež, ki je organizirala Evropsko prvenstvo v gorskih tekih 2026 in predsednica države.',
      },
      {
        src: '/images/ep2026/ep-finish-01.jpg',
        alt: 'Ciljni prostor Evropskega prvenstva v Kamniku',
        caption:
          'Cilj.',
      },
      {
        src: '/images/ep2026/ep-open-03.jpg',
        alt: 'Otvoritev Evropskega prvenstva v Kamniku',
        caption:
          'Vzdušje ob otvoritvi Evropskega prvenstva v gorskih in trail tekih v Kamniku.',
      },
      {
        src: '/images/ep2026/ep-sg-03.jpg',
        alt: 'Navijači ob trasi na Starem gradu',
        caption:
          'Navijači in prostovoljci na okrepni postojanki na Starem gradu.',
      },
      {
        src: '/images/ep2026/ep-sg-04.jpg',
        alt: 'Blatni spust na trasi gor-dol v Kamniku',
        caption:
          'Zadnji del vzpona na Stari grad.',
      },
    ]),
  ],

  stravaUrl: 'https://www.strava.com/activities/18825099708',
  gpxUrl: '/gpx/ep_gor_dol_26.gpx',
  mapMarkers: [
    {
      title: 'Start in Cilj',
      type: 'start',
      text: 'evropskega prvenstva',
      lat: 46.225677,
      lng: 14.611639,
    },
    {
      title: 'Stari grad',
      type: 'aid',
      text: 'drugi vzpon',
      lat: 46.224051,
      lng: 14.617171,
    },
    {
      title: 'Špica',
      type: 'peak',
      text: 'prvi vzpon',
      lat: 46.219566,
      lng: 14.622173,
    },
    {
      title: 'Tolsta gora',
      type: 'peak',
      text: 'tretji vzpon',
      lat: 46.220607,
      lng: 14.635735,
    },
  ],
})