import { Link } from 'react-router-dom';
import { Photo } from '../common/Photo';
import { useLang } from '../../i18n/LanguageContext';

export function FoodTeaser() {
  const { ui } = useLang();

  return (
    <section className="mx-auto flex max-w-page flex-col items-center gap-(--intro-gap) px-(--side-pad) py-(--section-pad-v) wide:flex-row-reverse">
      <div className="aspect-4/3 w-full flex-1 wide:w-auto">
        <Photo id="food-hero" alt={ui.food.title} className="rounded-[4px]" />
      </div>
      <div className="flex-1">
        <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.food.kicker}
        </div>
        <h2 className="m-0 mb-4 max-w-[16ch] text-(length:--h3) leading-[1.1] font-bold tracking-[-0.01em]">
          {ui.food.title}
        </h2>
        <p className="m-0 mb-5 max-w-[44ch] text-(length:--body-lg) leading-[1.6] text-gray-500">
          {ui.food.body}
        </p>
        <Link
          to="/gastronomie"
          className="border-b border-accent pb-0.5 text-base font-semibold text-accent"
        >
          {ui.food.cta} →
        </Link>
      </div>
    </section>
  );
}
