/**
 * Central asset map. Every photographic slot in the site resolves through here,
 * so swapping in final photography is a matter of dropping a file into
 * `public/images/` and pointing the entry at it.
 */
export const images = {
  'hero-bg': '/images/hero-bg.svg',
  'intro-detail': '/images/intro-detail.svg',

  'cat-padure': '/images/cat-padure.svg',
  'cat-terasa': '/images/cat-terasa.svg',
  'cat-suita': '/images/cat-suita.svg',

  'space-lounge': '/images/space-lounge.svg',
  'space-terasa': '/images/space-terasa.svg',
  'space-gradina': '/images/space-gradina.svg',
  'space-dining': '/images/space-dining.svg',

  'food-hero': '/images/food-hero.svg',
  'gastro-breakfast': '/images/gastro-breakfast.svg',
  'dish-1': '/images/dish-1.svg',
  'dish-2': '/images/dish-2.svg',
  'dish-3': '/images/dish-3.svg',

  'season-primavara': '/images/season-primavara.svg',
  'season-vara': '/images/season-vara.svg',
  'season-toamna': '/images/season-toamna.svg',
  'season-iarna': '/images/season-iarna.svg',

  'location-map': '/images/location-map.svg',
  'final-cta-bg': '/images/final-cta-bg.svg',
  'despre-arh': '/images/despre-arh.svg',

  'exp-traseu': '/images/exp-traseu.svg',
  'exp-bicicleta': '/images/exp-bicicleta.svg',
  'exp-sat': '/images/exp-sat.svg',
  'exp-belvedere': '/images/exp-belvedere.svg',
  'exp-producator': '/images/exp-producator.svg',
  'exp-plimbare-padure': '/images/exp-plimbare-padure.svg',
  'exp-drum-scenic': '/images/exp-drum-scenic.svg',

  'room-padure-nord-1': '/images/room-padure-nord-1.svg',
  'room-padure-nord-2': '/images/room-padure-nord-2.svg',
  'room-padure-nord-3': '/images/room-padure-nord-3.svg',
  'room-padure-sud-1': '/images/room-padure-sud-1.svg',
  'room-padure-sud-2': '/images/room-padure-sud-2.svg',
  'room-padure-sud-3': '/images/room-padure-sud-3.svg',
  'room-padure-colt-1': '/images/room-padure-colt-1.svg',
  'room-padure-colt-2': '/images/room-padure-colt-2.svg',
  'room-padure-colt-3': '/images/room-padure-colt-3.svg',
  'room-padure-etaj-1': '/images/room-padure-etaj-1.svg',
  'room-padure-etaj-2': '/images/room-padure-etaj-2.svg',
  'room-padure-etaj-3': '/images/room-padure-etaj-3.svg',
  'room-terasa-est-1': '/images/room-terasa-est-1.svg',
  'room-terasa-est-2': '/images/room-terasa-est-2.svg',
  'room-terasa-est-3': '/images/room-terasa-est-3.svg',
  'room-terasa-vest-1': '/images/room-terasa-vest-1.svg',
  'room-terasa-vest-2': '/images/room-terasa-vest-2.svg',
  'room-terasa-vest-3': '/images/room-terasa-vest-3.svg',
  'room-terasa-gradina-1': '/images/room-terasa-gradina-1.svg',
  'room-terasa-gradina-2': '/images/room-terasa-gradina-2.svg',
  'room-terasa-gradina-3': '/images/room-terasa-gradina-3.svg',
  'room-suita-turn-1': '/images/room-suita-turn-1.svg',
  'room-suita-turn-2': '/images/room-suita-turn-2.svg',
  'room-suita-turn-3': '/images/room-suita-turn-3.svg',

  g1: '/images/g1.svg',
  g2: '/images/g2.svg',
  g3: '/images/g3.svg',
  g4: '/images/g4.svg',
  g5: '/images/g5.svg',
  g6: '/images/g6.svg',
  g7: '/images/g7.svg',
  g8: '/images/g8.svg',
  g9: '/images/g9.svg',
  g10: '/images/g10.svg',
  g11: '/images/g11.svg',
  g12: '/images/g12.svg',
  g13: '/images/g13.svg',
  g14: '/images/g14.svg',
};

export function imageSrc(id) {
  return images[id] || '';
}
