import { Photo } from '../common/Photo';
import { useLang } from '../../i18n/LanguageContext';

const spaces = [
  { id: 'space-lounge', alt: { ro: 'Salon, șemineu', en: 'Lounge, fireplace' }, span: true },
  { id: 'space-terasa', alt: { ro: 'Terasă', en: 'Terrace' }, span: false },
  { id: 'space-gradina', alt: { ro: 'Grădină', en: 'Garden' }, span: false },
  { id: 'space-dining', alt: { ro: 'Zonă de luat masa', en: 'Dining area' }, span: true },
];

export function Spaces() {
  const { ui, lang } = useLang();

  return (
    <section className="mx-auto max-w-page px-[var(--side-pad)] pb-[var(--section-pad-v)]">
      <div className="mb-8">
        <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.spaces.kicker}
        </div>
        <h2 className="m-0 text-[length:var(--h2)] leading-[1.05] font-bold tracking-[-0.01em]">
          {ui.spaces.title}
        </h2>
      </div>
      <div className="grid h-[var(--spaces-grid-h)] grid-cols-2 gap-3 wide:grid-cols-4">
        {spaces.map((space) => (
          <div key={space.id} className={`relative ${space.span ? 'row-span-2' : ''}`}>
            <Photo id={space.id} alt={space.alt[lang]} className="rounded-[4px]" />
          </div>
        ))}
      </div>
    </section>
  );
}
