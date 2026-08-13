import { Photo } from '../components/common/Photo';
import { useLang } from '../i18n/LanguageContext';
import { facts } from '../data/about';
import { localize } from '../utils/localize';

export default function About() {
  const { ui, lang } = useLang();

  return (
    <>
      <section className="mx-auto max-w-page px-[var(--side-pad)] pt-[var(--page-hero-pad-top)] pb-[var(--section-pad-v)]">
        <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.despre.kicker}
        </div>
        <h1 className="m-0 max-w-[16ch] text-[length:var(--h2)] leading-[1.05] font-bold tracking-[-0.01em]">
          {ui.despre.title}
        </h1>
      </section>

      <section className="mx-auto flex max-w-page flex-col gap-[var(--intro-gap)] px-[var(--side-pad)] pb-[var(--section-pad-v)] wide:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <p className="m-0 max-w-[48ch] text-[length:var(--body-lg)] leading-[1.65] text-gray-900">
            {ui.despre.p1}
          </p>
          <p className="m-0 max-w-[48ch] text-[length:var(--body-lg)] leading-[1.65] text-gray-500">
            {ui.despre.p2}
          </p>
        </div>
        <div className="aspect-3/4 flex-1">
          <Photo id="despre-arh" alt={ui.despre.title} className="rounded-[4px]" />
        </div>
      </section>

      <section className="mx-auto max-w-page px-[var(--side-pad)] pb-[var(--section-pad-v)]">
        <div className="mb-6 border-t border-gray-200 pt-6 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.despre.factsTitle}
        </div>
        <div className="grid grid-cols-2 gap-6 wide:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.n}>
              <div className="mb-1 text-[2rem] font-bold tracking-[-0.02em]">{fact.n}</div>
              <div className="text-sm text-gray-500">{localize(fact.label, lang)}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
