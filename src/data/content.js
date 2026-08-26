// All copy + structured data for the site, in both languages.

export const EVENT_DATE = '2026-10-24T12:00:00';
export const TICKETS_URL = 'https://battleofeurope.framer.website';

// Judges. `bio` is the Czech/English intro line written by the organizers;
// `quote` is the judge's own statement and stays in English in both languages.
// Entries with `tbc: true` render as a blank "to be announced" slot.
export const judges = [
  {
    name: 'Siku',
    img: './images/judge-siku.jpg',
    country: { cz: 'Španělsko', en: 'Spain' },
    bio: {
      cz: 'Loňský vítěz Battle of Europe a výrazná tvář španělské scény se zkušenostmi z nejrůznějších mezinárodních akcí.',
      en: 'Last year’s Battle of Europe winner and a standout face of the Spanish scene, with experience from international events of every kind.',
    },
    quote: `Hi! I’m Siku ❤️‍🔥
With over ten years in the Cutting Shapes scene, dance has become a way for me to connect, express myself, and build community.

I’ve had the opportunity to travel and meet different communities around the world. BoE 2025 was a truly special in my journey as a dancer, and being part of this edition from a different perspective means a lot to me.

See you all very soon! Ready to give it everything on the dance floor! 🔥`,
  },
  {
    name: 'Ciara',
    img: './images/judge-ciara.jpg',
    country: { cz: 'USA', en: 'USA' },
    bio: {
      cz: 'Porotkyně, která za námi přiletí až z amerického Texasu, kde působí také jako lektorka. Battlové zkušenosti má jako soutěžící i porotce.',
      en: 'A judge flying in all the way from Texas, where she also teaches. She brings battle experience from both sides — as a competitor and as a judge.',
    },
    quote: `Hello everyone! ✨

My name is Ciara, I’m from Texas, and I’ve been enjoying this dance for 11 years now. I’m fascinated by movement and how everything connects, from the mind and body to the feeling and flow! I especially love finding deep grooves and living inside a deep, heavy bassline. 🎶

My favorite part about shuffling is seeing people get lost in the music, trust themselves, and let their personality shine. :)

I’m beyond grateful to join the BoE panel, and thank you to everyone for this honor! Most of all, I’m excited to grow, connect, and share experiences. Let’s have the time of our lives!! 🚀🪩`,
  },
  {
    name: 'Alison',
    img: './images/judge-alison.jpg',
    country: { cz: '', en: '' },
    bio: {
      cz: 'Jedna z nejvýraznějších žen evropské taneční scény – v battlech i mimo ně. Kromě tance se intenzivně zajímá také o wellbeing komunity.',
      en: 'One of the most distinctive women on the European dance scene — in battles and beyond. Alongside dancing, she is deeply invested in the wellbeing of the community.',
    },
    quote: `Hi! I’m Alison, and I’ve been a shuffle/cutting shapes dancer for 8 years ❤️

My approach to dance is closely tied to psychology, which is my profession. With that in mind, I work at the Wellbeing Project and develop my dance style from pure freestyle (with waacking and house influences).

I can’t wait to see you all improvise and take over the dance floor at the upcoming Battle of Europe in Prague! I hope we’ll all have a great time together at this event 🫶🏻🫂`,
  },
  { tbc: true },
  { tbc: true },
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
    announceLabel: 'Pozor',
    announce: 'Registrace soutěžících nově probíhají pouze online.',
    heroSub: 'Shuffle & Cutting shapes competition',
    date: '24. října 2026',
    venue: 'OX Club Prague',
    lblDate: 'Datum',
    lblVenue: 'Místo',
    lblFormat: 'Formát',
    format: 'Battle 1v1 + Team Choreo',
    countdownLabels: { days: 'Dní', hours: 'Hodin', mins: 'Minut', secs: 'Vteřin' },
    nav: [
      { href: '#about', label: 'O battlu' },
      { href: '#rules', label: 'Pravidla' },
      { href: '#judges', label: 'Porotci' },
      { href: '#program', label: 'Program' },
      { href: '#partners', label: 'Partneři' },
    ],
    aboutEyebrow: 'Battle of Europe',
    aboutTitle: 'Informace o battlu',
    aboutBody: [
      'Čtvrtý ročník Battle of Europe se odehraje 24. října 2026 v pražském OX Clubu a opět se můžeš těšit na jedinečnou show! Její součástí bude tradiční Battle 1v1 i The Best Team Choreo Competition, ve kterých se tanečníci utkají o nadvládu nad parketem a hodnotné ceny.',
      'Kromě hlavního battlu na tebe během celého víkendu čekají také workshopy pod taktovkou letošních porotců, které patří mezi světovou špičku. A vynechat bys neměl ani druhý ročník diskuze Behind the Steps, která proběhne na pátečním meetupu.',
      'Čekají tě tak celkem tři dny skvělé atmosféry, hudby a tance, během kterých se můžeš posunout dál a poznat další členy komunity z různých koutů světa. Ať jsi ostřílený tanečník nebo si chceš jen užít show – tohle je akce, která by ti neměla ujít.',
    ],
    rulesEyebrow: 'Pravidla',
    rulesTitle: 'Pravidla soutěží',
    rulesCta1v1: 'Pravidla 1v1',
    rulesCtaTeam: 'Pravidla Team Choreo',
    rules: [
      {
        id: 'rules-1v1',
        title: '1v1',
        items: [
          'Akrobatické prvky jsou povoleny jako součást show, nebudou ale hodnoceny.',
          'Žádné callouty – respektujte soupeře, hodnocení poroty i atmosféru battlu.',
          'Během vystoupení jednoho tanečníka nesmí druhý tanečník nijak zasahovat do jeho kola.',
          'Registrace se uzavírá 23. října 2026 ve 23:59.',
        ],
      },
      {
        id: 'rules-team',
        title: 'Team Choreo',
        items: [
          'Taneční tým se musí skládat ze 3–7 tanečníků.',
          'Choreografie nesmí být delší než 5 minut.',
          'Hudba musí být organizátorům zaslána nejpozději do 20. října 2026.',
          'Registrace se uzavírá 23. října 2026 ve 23:59.',
        ],
      },
    ],
    afterEyebrow: 'Aftermovie',
    afterTitle: 'Loňský ročník v kostce',
    afterPlay: 'Přehrát aftermovie',
    judgesEyebrow: 'Porotci',
    judgesTitle: 'Naši zkušení porotci',
    judgeTbc: 'Bude oznámeno',
    judgeMore: 'Číst více',
    judgeLess: 'Zabalit',
    programEyebrow: 'Program',
    programTitle: 'Program víkendu',
    partnersEyebrow: 'Partneři',
    partnersTitle: 'Bez nich by to nešlo',
    orgEyebrow: 'Pořadatelé',
    orgTitle: 'Kdo stojí za Battle of Europe?',
    orgBody: [
      'Battle of Europe bude v Praze již počtvrté organizovat tým z Kalafa & Batela Shuffle School. Tato škola působí na taneční scéně více než 9 let a jejími kurzy napříč Českem prošlo více než 2 000 lidí.',
    ],
    orgQuote:
      'Chceme, aby Battle of Europe byl jedinečným zážitkem pro každého, kdo na něj dorazí – ať už jde o diváka nebo soutěžícího. Každý ročník posouváme dál, aby se k nám lidé rádi vraceli a věděli, že na ně čeká nezapomenutelný víkend.',
    orgQuoteAuthor: 'Matyáš a Daniel, zakladatelé Kalafa & Batela Shuffle School',
    orgContacts: [
      { label: 'E-mail pro dotazy k battlu', value: 'shuffleprague@gmail.com', href: 'mailto:shuffleprague@gmail.com' },
      { label: 'E-mail pro obecné dotazy', value: 'shufflekalafa@gmail.com', href: 'mailto:shufflekalafa@gmail.com' },
      { label: 'Telefon', value: '+420 775 611 192', href: 'tel:+420775611192' },
    ],
    ticketsTitle: 'Buď u toho',
    ticketsSub: 'Vstupenky jsou v omezeném počtu. Zajisti si tu svoji.',
    ticketTypes: [
      {
        id: 'spectator',
        label: 'Divák',
        desc: 'Pro všechny, kdo si chtějí battle užít z hlediště.',
      },
      {
        id: 'competitor',
        label: 'Soutěžící',
        desc: 'Registrace do battlu. Uzavírá se 23. října 2026 ve 23:59.',
      },
      {
        id: 'merch',
        label: 'Tričko',
        desc: 'Oficiální tričko Battle of Europe 2026.',
        photo: './images/merch-tshirt.jpg',
        photoAlt: 'Oficiální tričko Battle of Europe 2026 zepředu a zezadu',
      },
    ],
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
          { time: '16:00 – 17:30', title: 'Workshop 1', desc: 'Lektora oznámíme', place: 'Centrum Tance, Václavské náměstí 36, 110 00 Praha' },
          { time: '17:30 – 19:00', title: 'Workshop 2', desc: 'Lektora oznámíme', place: 'Centrum Tance, Václavské náměstí 36, 110 00 Praha' },
          { time: '19:00 – 20:30', title: 'Workshop 3', desc: 'Lektora oznámíme', place: 'Centrum Tance, Václavské náměstí 36, 110 00 Praha' },
          { time: '19:00 – 20:30', title: 'Workshop 4', desc: 'Lektora oznámíme — probíhá souběžně v jiném sále', place: 'Centrum Tance, Václavské náměstí 36, 110 00 Praha' },
          { time: '21:00', title: 'Meetup', desc: 'Součástí je druhý ročník diskuze Behind the Steps', place: 'Místo upřesníme' },
        ],
      },
      {
        label: 'Sobota',
        sub: '2. den',
        items: [
          { time: '9:30 – 11:00', title: 'Workshop 1', desc: 'Lektora oznámíme', place: 'Studio Itaka, Korunní 35, 120 00 Praha' },
          { time: '11:00 – 12:30', title: 'Workshop 2', desc: 'Lektora oznámíme', place: 'Studio Itaka, Korunní 35, 120 00 Praha' },
          { time: '13:00', title: 'Open doors', desc: '', place: 'OX Club Prague' },
          { time: '13:30 – 16:15', title: 'Kvalifikace', desc: '', place: 'OX Club Prague' },
          { time: '16:15 – 17:00', title: 'Program upřesníme', desc: '', place: 'OX Club Prague' },
          { time: '17:00 – 20:15', title: 'Battle', desc: '', place: 'OX Club Prague' },
          { time: '19:00', title: 'Vystoupení dětí', desc: '', place: 'OX Club Prague' },
          { time: '20:15 – 21:45', title: 'Finále', desc: '', place: 'OX Club Prague' },
          { time: '20:45', title: 'Soutěž o nejlepší choreo', desc: '', place: 'OX Club Prague' },
          { time: '22:00 – 3:00', title: 'Afterparty', desc: '', place: 'OX Club Prague' },
        ],
      },
      {
        label: 'Neděle',
        sub: '3. den',
        items: [
          { time: 'Upřesníme', title: 'Program upřesníme', desc: 'Předpokládaný konec programu ve 14:00', place: '' },
        ],
      },
    ],
  },
  en: {
    cta: 'Get ticket',
    announceLabel: 'Notice',
    announce: 'Competitor registration is now online only.',
    heroSub: 'Shuffle & Cutting shapes competition',
    date: 'October 24, 2026',
    venue: 'OX Club Prague',
    lblDate: 'Date',
    lblVenue: 'Venue',
    lblFormat: 'Format',
    format: 'Battle 1v1 + Team Choreo',
    countdownLabels: { days: 'Days', hours: 'Hours', mins: 'Mins', secs: 'Secs' },
    nav: [
      { href: '#about', label: 'About' },
      { href: '#rules', label: 'Rules' },
      { href: '#judges', label: 'Judges' },
      { href: '#program', label: 'Program' },
      { href: '#partners', label: 'Partners' },
    ],
    aboutEyebrow: 'Battle of Europe',
    aboutTitle: 'About the battle',
    aboutBody: [
      'The fourth edition of Battle of Europe goes down on October 24, 2026 at OX Club Prague — and once again you can look forward to a one-of-a-kind show. It features the traditional Battle 1v1 as well as The Best Team Choreo Competition, where dancers clash for control of the floor and serious prizes.',
      'Beyond the main battle, the whole weekend brings workshops led by this year’s judges, who rank among the very best in the world. And don’t skip the second edition of the Behind the Steps discussion, taking place at Friday’s meetup.',
      'That adds up to three full days of great atmosphere, music and dance, where you can level up and meet more of the community from every corner of the world. Whether you’re a seasoned dancer or just here for the show — this is one event you shouldn’t miss.',
    ],
    rulesEyebrow: 'Rules',
    rulesTitle: 'Competition rules',
    rulesCta1v1: '1v1 rules',
    rulesCtaTeam: 'Team Choreo rules',
    rules: [
      {
        id: 'rules-1v1',
        title: '1v1',
        items: [
          'Acrobatic moves are allowed as part of the show, but they will not be scored.',
          'No callouts — respect your opponent, the judges’ decisions and the atmosphere of the battle.',
          'While one dancer is performing, the other must not interfere with their round in any way.',
          'Registration closes on October 23, 2026 at 23:59.',
        ],
      },
      {
        id: 'rules-team',
        title: 'Team Choreo',
        items: [
          'A team must consist of 3–7 dancers.',
          'The choreography must not be longer than 5 minutes.',
          'Music must be sent to the organizers no later than October 20, 2026.',
          'Registration closes on October 23, 2026 at 23:59.',
        ],
      },
    ],
    afterEyebrow: 'Aftermovie',
    afterTitle: 'Last edition in a nutshell',
    afterPlay: 'Play aftermovie',
    judgesEyebrow: 'Judges',
    judgesTitle: 'Our seasoned judges',
    judgeTbc: 'To be announced',
    judgeMore: 'Read more',
    judgeLess: 'Collapse',
    programEyebrow: 'Program',
    programTitle: 'Weekend program',
    partnersEyebrow: 'Partners',
    partnersTitle: 'It wouldn’t work without them',
    orgEyebrow: 'Organizers',
    orgTitle: 'Who’s behind Battle of Europe?',
    orgBody: [
      'Battle of Europe is organized in Prague for the fourth time by the team from Kalafa & Batela Shuffle School. The school has been part of the dance scene for over 9 years, and more than 2,000 people have gone through its courses across Czechia.',
    ],
    orgQuote:
      'We want Battle of Europe to be a unique experience for everyone who shows up — whether they’re in the crowd or on the floor. Every edition we push it further, so that people love coming back and know an unforgettable weekend is waiting for them.',
    orgQuoteAuthor: 'Matyáš and Daniel, founders of Kalafa & Batela Shuffle School',
    orgContacts: [
      { label: 'Battle enquiries', value: 'shuffleprague@gmail.com', href: 'mailto:shuffleprague@gmail.com' },
      { label: 'General enquiries', value: 'shufflekalafa@gmail.com', href: 'mailto:shufflekalafa@gmail.com' },
      { label: 'Phone', value: '+420 775 611 192', href: 'tel:+420775611192' },
    ],
    ticketsTitle: 'Be there',
    ticketsSub: 'Tickets are limited. Secure yours.',
    ticketTypes: [
      {
        id: 'spectator',
        label: 'Spectator',
        desc: 'For everyone who wants to enjoy the battle from the crowd.',
      },
      {
        id: 'competitor',
        label: 'Competitor',
        desc: 'Battle registration. Closes on October 23, 2026 at 23:59.',
      },
      {
        id: 'merch',
        label: 'T-shirt',
        desc: 'The official Battle of Europe 2026 tee.',
        photo: './images/merch-tshirt.jpg',
        photoAlt: 'The official Battle of Europe 2026 t-shirt, front and back',
      },
    ],
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
          { time: '16:00 – 17:30', title: 'Workshop 1', desc: 'Instructor to be announced', place: 'Centrum Tance, Václavské náměstí 36, 110 00 Prague' },
          { time: '17:30 – 19:00', title: 'Workshop 2', desc: 'Instructor to be announced', place: 'Centrum Tance, Václavské náměstí 36, 110 00 Prague' },
          { time: '19:00 – 20:30', title: 'Workshop 3', desc: 'Instructor to be announced', place: 'Centrum Tance, Václavské náměstí 36, 110 00 Prague' },
          { time: '19:00 – 20:30', title: 'Workshop 4', desc: 'Instructor to be announced — runs in parallel in another studio', place: 'Centrum Tance, Václavské náměstí 36, 110 00 Prague' },
          { time: '21:00', title: 'Meetup', desc: 'Featuring the second edition of the Behind the Steps talk', place: 'Venue to be announced' },
        ],
      },
      {
        label: 'Saturday',
        sub: 'Day 2',
        items: [
          { time: '9:30 – 11:00', title: 'Workshop 1', desc: 'Instructor to be announced', place: 'Studio Itaka, Korunní 35, 120 00 Prague' },
          { time: '11:00 – 12:30', title: 'Workshop 2', desc: 'Instructor to be announced', place: 'Studio Itaka, Korunní 35, 120 00 Prague' },
          { time: '13:00', title: 'Open doors', desc: '', place: 'OX Club Prague' },
          { time: '13:30 – 16:15', title: 'Prelims', desc: '', place: 'OX Club Prague' },
          { time: '16:15 – 17:00', title: 'Program to be announced', desc: '', place: 'OX Club Prague' },
          { time: '17:00 – 20:15', title: 'Battle', desc: '', place: 'OX Club Prague' },
          { time: '19:00', title: 'Kids showcase', desc: '', place: 'OX Club Prague' },
          { time: '20:15 – 21:45', title: 'Finals', desc: '', place: 'OX Club Prague' },
          { time: '20:45', title: 'Best choreo competition', desc: '', place: 'OX Club Prague' },
          { time: '22:00 – 3:00', title: 'Afterparty', desc: '', place: 'OX Club Prague' },
        ],
      },
      {
        label: 'Sunday',
        sub: 'Day 3',
        items: [
          { time: 'TBA', title: 'Program to be announced', desc: 'Expected to wrap up at 14:00', place: '' },
        ],
      },
    ],
  },
};

export const MARQUEE_TEXT = 'DANCE • SHUFFLE • BATTLE • ';
