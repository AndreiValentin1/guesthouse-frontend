import { Photo } from '../common/Photo';
import { useLang } from '../../i18n/LanguageContext';

export function LocationSection() {
  const { ui } = useLang();

  return (
    <section className="mx-auto flex max-w-page flex-col gap-[var(--intro-gap)] px-[var(--side-pad)] py-[var(--section-pad-v)] wide:flex-row">
      <div className="flex-1">
        <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.location.kicker}
        </div>
        <h2 className="m-0 mb-6 max-w-[14ch] text-[length:var(--h3)] leading-[1.1] font-bold tracking-[-0.01em]">
          {ui.location.title}
        </h2>
        <div className="flex max-w-[34ch] flex-col gap-4">
          <div className="flex justify-between border-t border-gray-200 pt-3">
            <span className="text-gray-500">Brașov</span>
            <span className="font-semibold">45 min</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-3">
            <span className="text-gray-500">București</span>
            <span className="font-semibold">2h 45min</span>
          </div>
          <p className="m-0 border-t border-gray-200 pt-3 text-base leading-[1.55] text-gray-500">
            {ui.location.parking}
          </p>
          <p className="m-0 text-base leading-[1.55] text-gray-500">{ui.location.directions}</p>
        </div>
      </div>
      <div className="aspect-4/3 flex-1">
        <Photo id="location-map" alt={ui.location.title} className="rounded-[4px]" />
      </div>
    </section>
  );
}
