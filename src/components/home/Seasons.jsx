import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Photo } from '../common/Photo';
import { useLang } from '../../i18n/LanguageContext';
import { seasons } from '../../data/seasons';
import { localize } from '../../utils/localize';
import { fadeUp, timing } from '../motion/motion';

export function Seasons() {
  const { ui, lang } = useLang();
  const reduced = useReducedMotion();
  const [activeKey, setActiveKey] = useState('iarna');

  const active = localize(
    seasons.find((season) => season.key === activeKey),
    lang,
  );

  return (
    <section className="overflow-hidden bg-gray-950 py-(--section-pad-v) text-gray-100">
      <div className="mx-auto max-w-page px-(--side-pad)">
        <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-400">
          {ui.seasons.kicker}
        </div>
        <h2 className="m-0 mb-8 text-(length:--h2) leading-[1.05] font-bold tracking-[-0.01em] text-gray-50">
          {ui.seasons.title}
        </h2>

        <div className="mb-10 flex flex-wrap gap-6">
          {seasons.map((season) => {
            const isActive = season.key === activeKey;
            return (
              <button
                key={season.key}
                type="button"
                onClick={() => setActiveKey(season.key)}
                aria-pressed={isActive}
                className="cursor-pointer border-none bg-transparent px-0 pt-0 pb-2 font-sans text-(length:--season-btn) font-semibold transition-[color,border-color] duration-250"
                style={{
                  color: isActive ? '#F9FAFB' : '#6B7280',
                  borderBottom: `2px solid ${isActive ? '#F9FAFB' : 'transparent'}`,
                }}
              >
                {localize(season.name, lang)}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col items-start gap-(--intro-gap) wide:flex-row">
          <div className="relative aspect-4/3 w-full flex-1 overflow-hidden rounded-lg wide:w-auto">
            {seasons.map((season) => (
              <motion.div
                key={season.key}
                className="absolute inset-0"
                animate={{ opacity: season.key === activeKey ? 1 : 0 }}
                transition={{ duration: reduced ? 0 : 0.6, ease: 'easeInOut' }}
              >
                <Photo id={season.img} alt={localize(season.name, lang)} />
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeKey}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={timing(reduced, 0.45)}
              className="flex-1"
            >
              <p className="m-0 mb-4 text-(length:--h3-sm) leading-[1.3] font-semibold text-gray-50">
                {active.tagline}
              </p>
              <p className="m-0 mb-6 max-w-[44ch] text-lg leading-[1.6] text-gray-400">
                {active.copy}
              </p>
              <div className="mb-3 text-sm tracking-[0.03em] text-gray-500">
                {ui.seasons.activitiesLabel}
              </div>
              {active.activities.map((activity) => (
                <div
                  key={activity}
                  className="flex items-baseline gap-[0.6rem] border-t border-gray-800 py-[0.4rem]"
                >
                  <span className="text-base text-gray-100">{activity}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
