import { Photo } from '../common/Photo';
import { useLang } from '../../i18n/LanguageContext';

export function Intro() {
  const { ui } = useLang();

  return (
    <section className="mx-auto flex max-w-page flex-col gap-[var(--intro-gap)] px-[var(--side-pad)] py-[var(--section-pad-v)] wide:flex-row">
      <div className="flex-none wide:flex-1">
        <div className="mb-4 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.intro.kicker}
        </div>
        <h2 className="m-0 max-w-[9ch] text-[length:var(--h2)] leading-[1.05] font-bold tracking-[-0.01em]">
          {ui.intro.title}
        </h2>
      </div>
      <div className="flex flex-none flex-col justify-end gap-6 wide:flex-[1.3]">
        <p className="m-0 max-w-[46ch] text-[length:var(--body-lg)] leading-[1.6] text-gray-900">
          {ui.intro.body}
        </p>
        <div className="aspect-[var(--intro-img-aspect)] w-full max-w-[520px]">
          <Photo id="intro-detail" alt={ui.intro.kicker} className="rounded-[4px]" />
        </div>
      </div>
    </section>
  );
}
