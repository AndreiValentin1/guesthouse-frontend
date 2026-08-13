import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../common/Button';
import { Photo } from '../common/Photo';
import { FadeUp } from '../motion/FadeUp';
import { EASE_STANDARD } from '../motion/motion';
import { useLang } from '../../i18n/LanguageContext';

const HERO_OVERLAY =
  'linear-gradient(180deg,rgba(3,7,18,.35) 0%,rgba(3,7,18,.05) 32%,rgba(3,7,18,.15) 68%,rgba(3,7,18,.55) 100%)';

function scrollToRooms() {
  const el = document.getElementById('rooms-preview');
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
}

export function Hero() {
  const { ui } = useLang();
  const reduced = useReducedMotion();

  return (
    <section className="relative h-screen min-h-140 w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: reduced ? 1 : 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduced ? 0 : 9, ease: 'easeOut' }}
      >
        <Photo id="hero-bg" alt="" />
      </motion.div>
      <div className="absolute inset-0" style={{ background: HERO_OVERLAY }} />

      <div className="absolute right-0 bottom-0 left-0 max-w-205 px-(--side-pad) pb-(--hero-bottom-pad) text-gray-50">
        <FadeUp delay={0.25} className="mb-4 text-sm tracking-[0.04em] opacity-90">
          {ui.eyebrow}
        </FadeUp>

        <h1 className="m-0 mb-5 text-(length:--hero-title) leading-[1.08] font-bold tracking-[-0.02em]">
          <motion.span
            className="block"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: reduced ? 0 : 0.9, delay: reduced ? 0 : 0.4, ease: EASE_STANDARD }}
          >
            {ui.hero.headline}
          </motion.span>
        </h1>

        <FadeUp
          as="p"
          delay={0.9}
          className="m-0 mb-7 max-w-130 text-(length:--hero-sub) leading-normal opacity-95"
        >
          {ui.hero.sub}
        </FadeUp>

        <FadeUp delay={1.1} className="flex flex-wrap items-center gap-4">
          <Button to="/rezervare">{ui.cta.verificaDisponibilitate}</Button>
          <button
            type="button"
            onClick={scrollToRooms}
            className="cursor-pointer rounded-lg border border-[rgba(249,250,251,.55)] bg-transparent px-4 py-2 font-sans text-base font-semibold text-gray-50"
          >
            {ui.cta.descoperaCamerele}
          </button>
        </FadeUp>

        <FadeUp delay={1.25} className="mt-6 text-sm opacity-85">
          {ui.hero.location}
        </FadeUp>
      </div>
    </section>
  );
}
