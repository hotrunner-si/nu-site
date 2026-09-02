import { createAdventure, p, img, quote, gallery, accent } from '../helpers'

export default createAdventure({
  id: 4,
  slug: 'soca-outdoor-festival-2026',
  public: true,
  featured: true,
  title: 'Petič zapored na Soča Outdoor Festivalu',
  location: 'Tolmin',
  date: '2026-06-27',
  distance: 32,
  elevation: 1200,
  type: 'Trail tek',
  difficulty: 'Težko',
  playground: ['river', 'forest', 'canyon', 'road'],
  excerpt: 'Že tretjič sem se udeležil dveh tekov na Soča Outdoor Festivalu, vertikala in 25 km.',
  image: '/images/soca26/sof26-tolminka.JPG',

  blocks: [
    p([
      'Letos smo se spet udeležili ',
      accent('Soča Outdoor Festivala'),
      ', ki vsak konec junija poteka v Tolminu.',
    ]),

    p(
      'Festivalno prizorišče na sotočju Soče in Tolminke je privabilo veliko število tekačev, ki so se razvrstili po tekmah čez cel vikend.',
    ),

    p(
      'Petkov večer je bil namenjen vertikal teku, ki je tokrat potekal po skrajšani trasi s štartom pri Tolminskem muzeju in ciljem na Tolminskem gradu.',
    ),

    img(
      '/images/soca26/sof26-vertikal-top3.JPG',
      'Na startu vertikal teka - Nejc Uršič',
      'text-left',
      {
        text: [
          [
            'Vertikal je bil hiter in intenziven. V dveh kilometrih smo se po običajni poti na grad vzpeli za 200 višincev. Luka se je že takoj postavil na prvo mesto, ostali pa smo mu skušali slediti. Na koncu mi je uspelo priteči na vrh na ',
            accent('3. mestu'),
            ' s časom 10 min 1 s.',
          ],
          'Čestitke Luki in Anžetu za 1. in 2. mesto!',
        ],
        caption: 'Na startu vertikal teka na Soča Outdoor Festivalu 2026. Foto: Nejc Uršič.',
      },
    ),

    p([
      'V soboto je sledil še glavni trail tek na 29 kilometrov s skoraj 1000 višinci. Štart ob 7.30 je bil glede na vročinski val kar malo pozen. V cilj sem prišel ob 10.00 in s tem časom dosegel ',
      accent('4. mesto'),
      '. V skupnem seštevku časov z Vertikala in Traila 29 km pa sem uspel ubraniti naslov zmagovalca, kar je sedaj že ',
      accent('tretjič zapored.'),
    ]),

    img(
      '/images/soca26/sof-win-all.jpg',
      'Nagrade vseh let na Soča Outdoor Festivalu - Nejc Uršič',
      'text-right',
      {
        text: [
          'Tudi letos smo bili deležni majice v novi barvi in finisher medalje.',
          'Na zmagovalnem odru pa so organizatorji znova poskrbeli za unikaten lesen pokal in novo termovko v barvah festivala.',
        ],
        caption:
          'Nagrade iz več nastopov na Soča Outdoor Festivalu. ',
      },
    ),

    gallery([
      {
        src: '/images/soca26/sof26-tolminka.JPG',
        alt: 'Tolminka',
        caption:
          'Sotočje in prečenje Tolminke tik pred ciljem. In jaz v zeleni majici ob zastavi I feel Slovenia.',
      },
      {
        src: '/images/soca26/sof26-vertikal-nasi.JPG',
        alt: 'Vertikal tekači',
        caption: 'Aleš, Tadej, Bor in Tjaša v cilju vertikal teka.',
      },
      {
        src: '/images/soca26/sof26-grad.JPG',
        alt: 'Tolminski grad',
        caption: 'Tolminski grad s Tolminom v ozadju.',
      },
      {
        src: '/images/soca26/sof26-lucija.jpg',
        alt: 'Lucija na Soča Outdoor Festival 2026',
        caption: 'Tekli so tudi Lucija na 5 km, Tjaša na 10 km, Ana, Aleš, Medeja, Bor, Tadej in Matevž na 15 km in Anže na 25 km.',
      },
      {
        src: '/images/soca26/sof26-spik.jpg',
        alt: 'Spik',
        caption: 'Vrh ferate Hvadnik en dan pred Soča Outdoorom.',
      },
      {
        src: '/images/soca26/sof26-tjasa-zmaga.jpg',
        alt: 'Tjasa zmaga',
        caption: 'Tjasa je bila najhitrejša v prečenju Tolminke.',
      },
      {
        src: '/images/soca26/sof26-podelitev.JPG',
        alt: 'Podelitev nagrad',
        caption: 'Bil sem drugi v kategoriji do 30 let na 25 km.',
      },
      {
        src: '/images/soca26/sof-win-22.jpg',
        alt: 'Nagrade 2022',
        caption: 'Osvojene nagrade na Soča Outdoor 2022 za drugo mesto na 25 km.',
      },
      {
        src: '/images/soca26/sof-win-24.jpg',
        alt: 'Nagrade 2024',
        caption: 'Osvojene nagrade na Soča Outdoor 2024 za prvo mesto na 25 km.',
      },
      {
        src: '/images/soca26/sof-win-25.jpg',
        alt: 'Nagrade 2025',
        caption: 'Nagrade na Soča 2025 za prvo mesto na 25 km.',
      },
      {
        src: '/images/soca26/sof-win-26.jpg',
        alt: 'Nagrade 2026',
        caption: 'Nagrade na letošnjem Soča Outdoor za tretje mesto na Vertikalu.',
      },
    ]),
  ],

  stravaUrl: 'https://www.strava.com/activities/19089759649',
  stravaUrl2: 'https://www.strava.com/activities/19089760299',
  gpxUrl: '/gpx/soca_outdoor_25.gpx',
  mapMarkers: [
    {
      title: 'Start',
      type: 'start',
      text: '29 km preizkušnje',
      lat: 46.174688,
      lng: 13.737264,
    },
    {
      title: 'Cilj',
      type: 'finish',
      text: 'na sotočju Soče in Tolminke',
      lat: 46.174027,
      lng: 13.740428,
    },
    {
      title: 'Navijači',
      type: 'cheer',
      text: 'pod gradom',
      lat: 46.188474,
      lng: 13.720302,
    },
  ],
})
