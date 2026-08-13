import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Photo } from '../common/Photo';
import { useLang } from '../../i18n/LanguageContext';
import { categories } from '../../data/rooms';
import { localize } from '../../utils/localize';

export function RoomsPreview() {
  const { ui, lang } = useLang();
  const reduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="rooms-preview"
      className="mx-auto max-w-page px-(--side-pad) py-(--section-pad-v)"
    >
      <div className="mb-10">
        <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.roomsPreview.kicker}
        </div>
        <h2 className="m-0 max-w-[16ch] text-(length:--h2) leading-[1.05] font-bold tracking-[-0.01em]">
          {ui.roomsPreview.title}
        </h2>
      </div>

      <div className="flex flex-col items-stretch gap-(--intro-gap) wide:flex-row">
        <div className="flex flex-1 flex-col gap-0">
          {categories.map((category, index) => {
            const cat = localize(category, lang);
            const active = activeIndex === index;

            return (
              <div
                key={category.slug}
                className="border-t border-gray-200 py-6 transition-opacity duration-250"
                style={{ opacity: active ? 1 : 0.55 }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={active}
                  className="block w-full cursor-pointer border-none bg-transparent p-0 text-left"
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="text-(length:--cat-name) font-semibold tracking-[-0.01em]">
                      {cat.name}
                    </span>
                    <span className="text-sm whitespace-nowrap text-gray-500">
                      {ui.roomsPreview.from} {cat.priceFrom} {ui.roomsPreview.perNight}
                    </span>
                  </span>
                  {active && (
                    <>
                      <span className="mt-3 block max-w-[44ch] text-md leading-normal text-gray-500">
                        {cat.desc}
                      </span>
                      <span className="mt-3 flex gap-6 text-sm text-gray-400">
                        <span>
                          {cat.capacity} {ui.common.guests}
                        </span>
                        <span>{cat.bed}</span>
                        <span>
                          {cat.size} {ui.common.m2}
                        </span>
                      </span>
                    </>
                  )}
                </button>
                {active && (
                  <Link
                    to={`/cazare/${category.firstRoomSlug}`}
                    className="mt-4 inline-block border-b border-accent pb-0.5 text-base font-semibold text-accent"
                  >
                    {ui.cta.vezidetalii} →
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative aspect-4/3 flex-1 wide:aspect-auto wide:min-h-120">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              className="absolute inset-0"
              animate={{ opacity: activeIndex === index ? 1 : 0 }}
              transition={{ duration: reduced ? 0 : 0.5, ease: 'easeInOut' }}
            >
              <Photo
                id={category.img}
                alt={localize(category.name, lang)}
                className="rounded-[4px]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
