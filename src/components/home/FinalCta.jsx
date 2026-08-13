import { Button } from '../common/Button';
import { Photo } from '../common/Photo';
import { useLang } from '../../i18n/LanguageContext';

export function FinalCta() {
  const { ui } = useLang();

  return (
    <section className="relative overflow-hidden bg-gray-950 px-(--side-pad) py-(--final-cta-pad-v) text-center text-gray-50">
      <div className="absolute inset-0 opacity-35">
        <Photo id="final-cta-bg" alt="" />
      </div>
      <div className="relative mx-auto max-w-160">
        <h2 className="m-0 mb-4 text-(length:--h2) leading-[1.05] font-bold tracking-[-0.01em]">
          {ui.finalCta.title}
        </h2>
        <p className="m-0 mb-8 text-(length:--body-lg) leading-[1.55] text-gray-400">
          {ui.finalCta.body}
        </p>
        <Button to="/rezervare">{ui.finalCta.cta}</Button>
      </div>
    </section>
  );
}
