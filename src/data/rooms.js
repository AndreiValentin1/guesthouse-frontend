export const categories = [
  {
    slug: 'padure',
    name: { ro: 'Camera cu vedere spre pădure', en: 'Forest View Room' },
    desc: {
      ro: 'Fereastră mare spre coroanele brazilor, lumină de dimineață.',
      en: 'A wide window onto fir crowns, morning light.',
    },
    capacity: 2,
    bed: { ro: 'pat dublu', en: 'double bed' },
    size: 27,
    priceFrom: 480,
    img: 'cat-padure',
    firstRoomSlug: 'padure-nord',
  },
  {
    slug: 'terasa',
    name: { ro: 'Camera cu terasă', en: 'Terrace Room' },
    desc: {
      ro: 'Ieșire directă pe terasă, aer de munte la doi pași de pat.',
      en: 'Direct access to a private terrace, mountain air by the bed.',
    },
    capacity: 2,
    bed: { ro: 'pat king', en: 'king bed' },
    size: 31,
    priceFrom: 560,
    img: 'cat-terasa',
    firstRoomSlug: 'terasa-est',
  },
  {
    slug: 'suita',
    name: { ro: 'Suita', en: 'The Suite' },
    desc: {
      ro: 'Zonă de zi separată, vedere pe două laturi.',
      en: 'A separate sitting area, views on two sides.',
    },
    capacity: 3,
    bed: { ro: 'pat king + canapea extensibilă', en: 'king bed + sofa bed' },
    size: 42,
    priceFrom: 720,
    img: 'cat-suita',
    firstRoomSlug: 'suita-turn',
  },
];

export const rooms = [
  {
    slug: 'padure-nord',
    category: 'padure',
    name: {
      ro: 'Camera cu vedere spre pădure — Nord',
      en: 'Forest View Room — North',
    },
    capacity: 2,
    bed: { ro: 'pat dublu', en: 'double bed' },
    size: 26,
    price: 480,
    bathroom: { ro: 'baie proprie cu duș', en: 'en-suite with shower' },
    view: { ro: 'pădure de brad', en: 'fir forest' },
    terrace: false,
    availability: 'available',
    shortDesc: {
      ro: 'La etaj, cu fereastră largă spre pădurea din spatele casei.',
      en: 'Upstairs, with a wide window onto the forest behind the house.',
    },
    longDesc: {
      ro: 'Cea mai liniștită dintre camerele cu vedere spre pădure — orientată spre nord, ferită de soarele de după-amiază. Parchet de stejar, pat dublu și un fotoliu de citit lângă fereastră.',
      en: 'The quietest of the forest-view rooms — north-facing, sheltered from the afternoon sun. Oak flooring, a double bed and a reading chair by the window.',
    },
    amenities: {
      ro: ['Wi-Fi', 'Încălzire în pardoseală', 'Halate și papuci', 'Ceainic electric'],
      en: ['Wi-Fi', 'Underfloor heating', 'Robes & slippers', 'Electric kettle'],
    },
    images: ['room-padure-nord-1', 'room-padure-nord-2', 'room-padure-nord-3'],
  },
  {
    slug: 'padure-sud',
    category: 'padure',
    name: { ro: 'Camera cu vedere spre pădure — Sud', en: 'Forest View Room — South' },
    capacity: 2,
    bed: { ro: 'pat dublu', en: 'double bed' },
    size: 28,
    price: 500,
    bathroom: { ro: 'baie proprie cu duș', en: 'en-suite with shower' },
    view: { ro: 'pădure și coama muntelui', en: 'forest and the ridge beyond' },
    terrace: false,
    availability: 'available',
    shortDesc: {
      ro: 'Multă lumină de după-amiază și o priveliște care se deschide spre creastă.',
      en: 'Plenty of afternoon light, with a view that opens toward the ridge.',
    },
    longDesc: {
      ro: 'Camera cea mai luminoasă, cu soare de după-amiază și o priveliște care trece peste vârfurile brazilor spre creasta muntelui.',
      en: 'The brightest room, with afternoon sun and a view that runs over the fir tops to the mountain ridge.',
    },
    amenities: {
      ro: ['Wi-Fi', 'Încălzire în pardoseală', 'Halate și papuci', 'Ceainic electric'],
      en: ['Wi-Fi', 'Underfloor heating', 'Robes & slippers', 'Electric kettle'],
    },
    images: ['room-padure-sud-1', 'room-padure-sud-2', 'room-padure-sud-3'],
  },
  {
    slug: 'padure-colt',
    category: 'padure',
    name: { ro: 'Camera cu vedere spre pădure — Colț', en: 'Forest View Room — Corner' },
    capacity: 2,
    bed: { ro: 'pat dublu', en: 'double bed' },
    size: 29,
    price: 510,
    bathroom: { ro: 'baie proprie cu cadă', en: 'en-suite with tub' },
    view: { ro: 'pădure, din două unghiuri', en: 'forest, from two angles' },
    terrace: false,
    availability: 'available',
    shortDesc: {
      ro: 'Cameră de colț, cu fereastră pe două laturi și un colț de citit.',
      en: 'A corner room with windows on two sides and a reading nook.',
    },
    longDesc: {
      ro: 'Fiind la colțul clădirii, are fereastră pe două laturi și un colț de citit cu bancă joasă și pernă de lână.',
      en: 'Set at the corner of the building, it has windows on two sides and a reading nook with a low bench and a wool cushion.',
    },
    amenities: {
      ro: ['Wi-Fi', 'Încălzire în pardoseală', 'Halate și papuci', 'Ceainic electric'],
      en: ['Wi-Fi', 'Underfloor heating', 'Robes & slippers', 'Electric kettle'],
    },
    images: ['room-padure-colt-1', 'room-padure-colt-2', 'room-padure-colt-3'],
  },
  {
    slug: 'padure-etaj',
    category: 'padure',
    name: { ro: 'Camera cu vedere spre pădure — Mansardă', en: 'Forest View Room — Loft' },
    capacity: 2,
    bed: { ro: 'pat dublu', en: 'double bed' },
    size: 27,
    price: 490,
    bathroom: { ro: 'baie proprie cu duș', en: 'en-suite with shower' },
    view: { ro: 'pădure, de sus', en: 'forest, from above' },
    terrace: false,
    availability: 'available',
    shortDesc: {
      ro: 'Sub streașină, cu tavan înclinat și o fereastră de mansardă spre cer și brazi.',
      en: 'Tucked under the eaves, with a sloped ceiling and a skylight onto sky and fir trees.',
    },
    longDesc: {
      ro: 'Cea mai intimă cameră, cu tavan înclinat din lemn și o fereastră de mansardă din care se văd deopotrivă cerul și vârfurile brazilor.',
      en: 'The coziest room, with a sloped timber ceiling and a skylight framing both sky and treetops.',
    },
    amenities: {
      ro: ['Wi-Fi', 'Încălzire în pardoseală', 'Halate și papuci', 'Ceainic electric'],
      en: ['Wi-Fi', 'Underfloor heating', 'Robes & slippers', 'Electric kettle'],
    },
    images: ['room-padure-etaj-1', 'room-padure-etaj-2', 'room-padure-etaj-3'],
  },
  {
    slug: 'terasa-est',
    category: 'terasa',
    name: { ro: 'Camera cu terasă — Est', en: 'Terrace Room — East' },
    capacity: 2,
    bed: { ro: 'pat king', en: 'king bed' },
    size: 30,
    price: 560,
    bathroom: { ro: 'baie proprie cu duș', en: 'en-suite with shower' },
    view: { ro: 'grădină și răsărit', en: 'garden and sunrise' },
    terrace: true,
    availability: 'available',
    shortDesc: {
      ro: 'Terasă proprie orientată spre răsărit, bună pentru cafeaua de dimineață.',
      en: 'A private east-facing terrace, good for morning coffee.',
    },
    longDesc: {
      ro: 'Terasa proprie prinde soarele de dimineață — ideală pentru cafeaua dintâi, cu picioarele încă în papuci.',
      en: 'The private terrace catches the morning sun — ideal for that first coffee, slippers still on.',
    },
    amenities: {
      ro: ['Wi-Fi', 'Terasă privată', 'Încălzire în pardoseală', 'Halate și papuci'],
      en: ['Wi-Fi', 'Private terrace', 'Underfloor heating', 'Robes & slippers'],
    },
    images: ['room-terasa-est-1', 'room-terasa-est-2', 'room-terasa-est-3'],
  },
  {
    slug: 'terasa-vest',
    category: 'terasa',
    name: { ro: 'Camera cu terasă — Vest', en: 'Terrace Room — West' },
    capacity: 2,
    bed: { ro: 'pat king', en: 'king bed' },
    size: 31,
    price: 570,
    bathroom: { ro: 'baie proprie cu cadă', en: 'en-suite with tub' },
    view: { ro: 'grădină și apus peste creastă', en: 'garden and sunset over the ridge' },
    terrace: true,
    availability: 'available',
    shortDesc: {
      ro: 'Terasă proprie, bună pentru un pahar de vin la apus.',
      en: 'A private terrace, good for a glass of wine at sunset.',
    },
    longDesc: {
      ro: 'Camera prinde lumina serii — terasa e locul potrivit pentru un pahar de vin, cu apusul căzând peste creastă.',
      en: 'This room catches the evening light — the terrace is the right spot for a glass of wine as the sun drops behind the ridge.',
    },
    amenities: {
      ro: ['Wi-Fi', 'Terasă privată', 'Încălzire în pardoseală', 'Halate și papuci'],
      en: ['Wi-Fi', 'Private terrace', 'Underfloor heating', 'Robes & slippers'],
    },
    images: ['room-terasa-vest-1', 'room-terasa-vest-2', 'room-terasa-vest-3'],
  },
  {
    slug: 'terasa-gradina',
    category: 'terasa',
    name: { ro: 'Camera cu terasă — Grădină', en: 'Terrace Room — Garden' },
    capacity: 2,
    bed: { ro: 'pat king', en: 'king bed' },
    size: 32,
    price: 580,
    bathroom: { ro: 'baie proprie cu duș', en: 'en-suite with shower' },
    view: { ro: 'direct spre grădină', en: 'straight onto the garden' },
    terrace: true,
    availability: 'limited',
    shortDesc: {
      ro: 'La parter, cu ieșire directă în grădină de pe terasă.',
      en: 'On the ground floor, with direct garden access from the terrace.',
    },
    longDesc: {
      ro: 'Singura cameră de la parter, cu acces direct din terasă spre grădină — practică dacă vii cu bagaj mult sau vrei să ieși desculț dimineața.',
      en: 'The only ground-floor room, with terrace access straight into the garden — practical with heavier luggage, or for stepping out barefoot in the morning.',
    },
    amenities: {
      ro: ['Wi-Fi', 'Terasă privată', 'Încălzire în pardoseală', 'Halate și papuci'],
      en: ['Wi-Fi', 'Private terrace', 'Underfloor heating', 'Robes & slippers'],
    },
    images: ['room-terasa-gradina-1', 'room-terasa-gradina-2', 'room-terasa-gradina-3'],
  },
  {
    slug: 'suita-turn',
    category: 'suita',
    name: { ro: 'Suita — Turn', en: 'The Suite — Loft' },
    capacity: 3,
    bed: { ro: 'pat king + canapea extensibilă', en: 'king bed + sofa bed' },
    size: 42,
    price: 720,
    bathroom: {
      ro: 'baie proprie cu cadă și duș separat',
      en: 'en-suite with tub and separate shower',
    },
    view: { ro: 'pădure și munte, pe două laturi', en: 'forest and mountains, on two sides' },
    terrace: true,
    availability: 'limited',
    shortDesc: {
      ro: 'Camera cea mai generoasă, cu zonă de zi separată și terasă proprie.',
      en: 'The most generous room, with a separate sitting area and its own terrace.',
    },
    longDesc: {
      ro: 'Ocupă tot etajul turnului — zonă de zi separată de dormitor, fereastră pe două laturi și o terasă suficient de mare pentru masa de mic dejun.',
      en: 'It takes up the whole loft level — a sitting area separated from the bedroom, windows on two sides, and a terrace large enough for a breakfast table.',
    },
    amenities: {
      ro: ['Wi-Fi', 'Terasă privată', 'Zonă de zi separată', 'Șemineu', 'Halate și papuci'],
      en: ['Wi-Fi', 'Private terrace', 'Separate sitting area', 'Fireplace', 'Robes & slippers'],
    },
    images: ['room-suita-turn-1', 'room-suita-turn-2', 'room-suita-turn-3'],
  },
];

export function roomsInCategory(categorySlug) {
  return rooms.filter((room) => room.category === categorySlug);
}

export function findRoom(slug) {
  return rooms.find((room) => room.slug === slug) || null;
}

export function availabilityLabel(availability, lang) {
  if (availability === 'limited') return lang === 'ro' ? 'Cerere' : 'Limited';
  return lang === 'ro' ? 'Disponibil' : 'Available';
}

export function availabilityVariant(availability) {
  return availability === 'limited' ? 'yellow' : 'green';
}
