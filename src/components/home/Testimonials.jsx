import { useLang } from '../../i18n/LanguageContext';
import { testimonials } from '../../data/about';
import { localize } from '../../utils/localize';

export function Testimonials() {
  const { ui, lang } = useLang();

  return (
    <section className="mx-auto max-w-page px-[var(--side-pad)] py-[var(--section-pad-v)]">
      <div className="mb-6 text-sm font-semibold tracking-[0.03em] text-gray-500">
        {ui.testimonials.kicker}
      </div>
      <div className="flex flex-col gap-10 wide:flex-row">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="m-0 flex-1 border-t border-gray-200 pt-5">
            <blockquote className="m-0 mb-3 max-w-[38ch] text-[length:var(--body-lg)] leading-[1.55] text-gray-900">
              &ldquo;{localize(testimonial.text, lang)}&rdquo;
            </blockquote>
            <figcaption className="text-sm text-gray-500">{testimonial.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
