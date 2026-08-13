import { Photo } from '../components/common/Photo';
import { useLang } from '../i18n/LanguageContext';
import { dishes } from '../data/gastronomy';
import { localize } from '../utils/localize';

export default function Gastronomy() {
  const { ui, lang } = useLang();

  return (
    <>
      <section className="mx-auto max-w-page px-(--side-pad) pt-(--page-hero-pad-top) pb-(--section-pad-v)">
        <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.gastronomie.kicker}
        </div>
        <h1 className="m-0 max-w-[16ch] text-(length:--h2) leading-[1.05] font-bold tracking-[-0.01em]">
          {ui.gastronomie.title}
        </h1>
      </section>

      <section className="mx-auto flex max-w-page flex-col items-center gap-(--intro-gap) px-(--side-pad) pb-(--section-pad-v) wide:flex-row">
        <div className="aspect-4/3 w-full flex-1 wide:w-auto">
          <Photo
            id="gastro-breakfast"
            alt={ui.gastronomie.breakfastTitle}
            className="rounded-[4px]"
          />
        </div>
        <div className="flex-1">
          <h2 className="m-0 mb-4 text-(length:--h3) font-bold tracking-[-0.01em]">
            {ui.gastronomie.breakfastTitle}
          </h2>
          <p className="m-0 max-w-[44ch] text-(length:--body-lg) leading-[1.6] text-gray-500">
            {ui.gastronomie.breakfastBody}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-page px-(--side-pad) pb-(--section-pad-v)">
        <h2 className="m-0 mb-6 border-t border-gray-200 pt-6 text-(length:--h3-sm) font-bold tracking-[-0.01em]">
          {ui.gastronomie.dishesTitle}
        </h2>
        <div className="grid grid-cols-1 gap-6 wide:grid-cols-3">
          {dishes.map((dish) => {
            const item = localize(dish, lang);
            return (
              <div key={dish.img}>
                <div className="mb-3 aspect-4/3">
                  <Photo id={dish.img} alt={item.name} className="rounded-[4px]" />
                </div>
                <div className="mb-1 font-semibold">{item.name}</div>
                <div className="text-sm text-gray-400">{item.note}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto flex max-w-page flex-col gap-(--intro-gap) px-(--side-pad) pb-(--section-pad-v) wide:flex-row">
        <div className="flex-1">
          <h2 className="m-0 mb-4 border-t border-gray-200 pt-6 text-(length:--h3-sm) font-bold tracking-[-0.01em]">
            {ui.gastronomie.sourcingTitle}
          </h2>
          <p className="m-0 max-w-[42ch] text-lg leading-[1.6] text-gray-500">
            {ui.gastronomie.sourcingBody}
          </p>
        </div>
        <div className="flex-1">
          <h2 className="m-0 mb-4 border-t border-gray-200 pt-6 text-(length:--h3-sm) font-bold tracking-[-0.01em]">
            {ui.gastronomie.dietaryTitle}
          </h2>
          <p className="m-0 max-w-[42ch] text-lg leading-[1.6] text-gray-500">
            {ui.gastronomie.dietaryBody}
          </p>
        </div>
      </section>
    </>
  );
}
