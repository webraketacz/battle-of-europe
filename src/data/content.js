// All copy + structured data for the site, in both languages.
// Mirrors the original Framer export 1:1.

export const EVENT_DATE = '2026-10-24T12:00:00';
export const TICKETS_URL = 'https://battleofeurope.framer.website';

export const judges = [
  { name: 'Ruko', country: 'CZ', img: './images/judge-ruko.jpg', role: 'Shuffle / Footwork' },
  { name: 'Bernanfloww', country: 'ES', img: './images/judge-bernanfloww.jpg', role: 'Cutting shapes' },
  { name: 'Gina', country: 'PT', img: './images/judge-gina.jpg', role: 'Freestyle' },
  { name: 'Oddio', country: 'SK', img: './images/judge-oddio.jpg', role: 'Shuffle / Groove' },
];

export const socials = [
  { name: 'Instagram', short: 'IG', href: 'https://instagram.com' },
  { name: 'Facebook', short: 'FB', href: 'https://facebook.com' },
  { name: 'YouTube', short: 'YT', href: 'https://youtube.com' },
  { name: 'TikTok', short: 'TT', href: 'https://tiktok.com' },
];

export const payments = ['VISA', 'Mastercard', 'Apple Pay', 'GoPay'];
export const partners = ['Partner', 'Partner', 'Partner', 'Partner', 'Partner', 'Partner'];

export const content = {
  cz: {
    cta: 'Koupit lístek',
    heroSub: 'Shuffle & Cutting shapes competition',
    date: '24. října 2026',
    venue: 'OX Club Prague',
    lblDate: 'Datum',
    lblVenue: 'Místo',
    lblFormat: 'Formát',
    format: 'Battle 1v1',
    countdownLabels: { days: 'Dní', hours: 'Hodin', mins: 'Minut', secs: 'Vteřin' },
    nav: [
      { href: '#about', label: 'O battlu' },
      { href: '#judges', label: 'Judges' },
      { href: '#program', label: 'Program' },
      { href: '#partners', label: 'Partneři' },
    ],
    aboutEyebrow: 'Battle of Europe',
    aboutTitle: 'Informace o battlu',
    aboutBody: [
      'Třetí ročník Battle of Europe se odehraje 24. října 2026 v pražském OX Clubu. Hlavní disciplínou je oblíbená Battle 1v1, ve které se nejlepší evropští tanečníci utkají o nadvládu na parketu i o hodnotné ceny.',
      'Kromě hlavního battlu na tebe čekají workshopy se zkušenými lektory pod taktovkou „Behind the Steps“ — prostor, kde se posuneš dál a načerpáš novou energii i kontakty z celé shuffle & cutting shapes komunity.',
      'Atmosféra, hudba a tanec na jednom místě. Ať jsi ostřílený dancer, nebo si chceš jen užít show — tady jsi přesně na svém.',
    ],
    aboutStats: [
      { value: '3.', label: 'Ročník' },
      { value: '1v1', label: 'Battle formát' },
      { value: '4', label: 'Judges z EU' },
      { value: '500+', label: 'Tanečníků' },
    ],
    afterEyebrow: 'Aftermovie',
    afterTitle: 'Loňský ročník v kostce',
    afterPlay: 'Přehrát aftermovie',
    judgesEyebrow: 'Judges',
    judgesTitle: 'Naši zkušení judges',
    programEyebrow: 'Program',
    programTitle: 'Program víkendu',
    partnersEyebrow: 'Partneři',
    partnersTitle: 'Bez nich by to nešlo',
    orgEyebrow: 'Pořadatelé',
    orgTitle: 'Kdo za tím stojí',
    orgBody:
      'Battle of Europe stojí na Shuffle School Kalafa Batela — partě, která žije pro shuffle, cutting shapes a komunitu kolem nich. Spojuje nás roky na parketu, stovky workshopů a jediný cíl: přivést do Prahy nejlepší evropský battle.',
    ticketsTitle: 'Buď u toho',
    ticketsSub: 'Vstupenky v omezeném počtu. Zajisti si své místo na parketu.',
    footerTag: 'Shuffle & cutting shapes battle v srdci Prahy.',
    footerNav: 'Navigace',
    footerLegal: 'Dokumenty',
    footerFollow: 'Sleduj nás',
    legalTerms: 'Obchodní podmínky',
    legalPayment: 'Platební podmínky',
    days: [
      {
        label: 'Pátek',
        sub: '1. den',
        items: [
          { time: '16:30 – 18:00', title: 'Ruko — Workshop', desc: 'Creativity, connections, footwork combos', place: 'OX Club, Praha' },
          { time: '18:00 – 19:30', title: 'Oddio — Workshop', desc: 'Groove & flow sequences', place: 'OX Club, Praha' },
          { time: '20:00', title: 'Welcome jam', desc: 'Otevřený parket & registrace', place: 'OX Club, Praha' },
        ],
      },
      {
        label: 'Sobota',
        sub: '2. den',
        items: [
          { time: '11:00', title: 'Doors & registrace', desc: 'Vyzvednutí náramků', place: 'OX Club, Praha' },
          { time: '12:00', title: 'Kvalifikace', desc: 'Prelims 1v1', place: 'Main stage' },
          { time: '16:00', title: 'Top 16', desc: 'Vyřazovací battly', place: 'Main stage' },
          { time: '19:00', title: 'Semifinále', desc: 'Battle 1v1', place: 'Main stage' },
          { time: '21:00', title: 'Finále', desc: 'Battle of Europe 2026', place: 'Main stage' },
          { time: '23:00', title: 'Afterparty', desc: 'DJs & live set', place: 'OX Club, Praha' },
        ],
      },
      {
        label: 'Neděle',
        sub: '3. den',
        items: [
          { time: '11:00', title: 'Recovery workshop', desc: 'Strečink & technika', place: 'OX Club, Praha' },
          { time: '13:00', title: 'Judges showcase', desc: 'Exhibice porotců', place: 'Main stage' },
          { time: '15:00', title: 'Cooldown jam', desc: 'Open floor & loučení', place: 'OX Club, Praha' },
        ],
      },
    ],
  },
  en: {
    cta: 'Get ticket',
    heroSub: 'Shuffle & Cutting shapes competition',
    date: 'October 24, 2026',
    venue: 'OX Club Prague',
    lblDate: 'Date',
    lblVenue: 'Venue',
    lblFormat: 'Format',
    format: 'Battle 1v1',
    countdownLabels: { days: 'Days', hours: 'Hours', mins: 'Mins', secs: 'Secs' },
    nav: [
      { href: '#about', label: 'About' },
      { href: '#judges', label: 'Judges' },
      { href: '#program', label: 'Program' },
      { href: '#partners', label: 'Partners' },
    ],
    aboutEyebrow: 'Battle of Europe',
    aboutTitle: 'About the battle',
    aboutBody: [
      'The third edition of Battle of Europe goes down on October 24, 2026 at OX Club Prague. The headline format is the beloved 1v1 Battle, where Europe’s best dancers clash for the crown and serious prizes.',
      'Beyond the main battle, expect workshops with seasoned coaches under the “Behind the Steps” banner — a space to level up and soak in fresh energy and connections from the whole shuffle & cutting shapes scene.',
      'Atmosphere, music and dance in one place. Whether you’re a seasoned dancer or just here for the show — this is your spot.',
    ],
    aboutStats: [
      { value: '3rd', label: 'Edition' },
      { value: '1v1', label: 'Battle format' },
      { value: '4', label: 'EU judges' },
      { value: '500+', label: 'Dancers' },
    ],
    afterEyebrow: 'Aftermovie',
    afterTitle: 'Last edition in a nutshell',
    afterPlay: 'Play aftermovie',
    judgesEyebrow: 'Judges',
    judgesTitle: 'Our seasoned judges',
    programEyebrow: 'Program',
    programTitle: 'Weekend program',
    partnersEyebrow: 'Partners',
    partnersTitle: 'It wouldn’t work without them',
    orgEyebrow: 'Organizers',
    orgTitle: 'The crew behind it',
    orgBody:
      'Battle of Europe is built by Shuffle School Kalafa Batela — a crew that lives for shuffle, cutting shapes and the community around them. Years on the floor, hundreds of workshops, one goal: bring Europe’s best battle to Prague.',
    ticketsTitle: 'Be there',
    ticketsSub: 'Limited tickets available. Secure your spot on the floor.',
    footerTag: 'Shuffle & cutting shapes battle in the heart of Prague.',
    footerNav: 'Navigation',
    footerLegal: 'Documents',
    footerFollow: 'Follow us',
    legalTerms: 'Terms & conditions',
    legalPayment: 'Payment terms',
    days: [
      {
        label: 'Friday',
        sub: 'Day 1',
        items: [
          { time: '16:30 – 18:00', title: 'Ruko — Workshop', desc: 'Creativity, connections, footwork combos', place: 'OX Club, Prague' },
          { time: '18:00 – 19:30', title: 'Oddio — Workshop', desc: 'Groove & flow sequences', place: 'OX Club, Prague' },
          { time: '20:00', title: 'Welcome jam', desc: 'Open floor & registration', place: 'OX Club, Prague' },
        ],
      },
      {
        label: 'Saturday',
        sub: 'Day 2',
        items: [
          { time: '11:00', title: 'Doors & registration', desc: 'Wristband pickup', place: 'OX Club, Prague' },
          { time: '12:00', title: 'Prelims', desc: '1v1 qualifiers', place: 'Main stage' },
          { time: '16:00', title: 'Top 16', desc: 'Knockout battles', place: 'Main stage' },
          { time: '19:00', title: 'Semifinals', desc: 'Battle 1v1', place: 'Main stage' },
          { time: '21:00', title: 'Finals', desc: 'Battle of Europe 2026', place: 'Main stage' },
          { time: '23:00', title: 'Afterparty', desc: 'DJs & live set', place: 'OX Club, Prague' },
        ],
      },
      {
        label: 'Sunday',
        sub: 'Day 3',
        items: [
          { time: '11:00', title: 'Recovery workshop', desc: 'Stretch & technique', place: 'OX Club, Prague' },
          { time: '13:00', title: 'Judges showcase', desc: 'Judges exhibition', place: 'Main stage' },
          { time: '15:00', title: 'Cooldown jam', desc: 'Open floor & goodbyes', place: 'OX Club, Prague' },
        ],
      },
    ],
  },
};

export const MARQUEE_TEXT = 'DANCE • SHUFFLE • BATTLE • ';
