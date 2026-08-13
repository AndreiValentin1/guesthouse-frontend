import { useState } from 'react';
import { FilterPill } from '../components/common/FilterPill';
import { Photo } from '../components/common/Photo';
import { useLightbox } from '../components/gallery/LightboxProvider';
import { useLang } from '../i18n/LanguageContext';
import { galleryFilterKeys, galleryImages } from '../data/gallery';
import { localize } from '../utils/localize';

export default function Gallery() {
  const { ui, lang } = useLang();
  const { open } = useLightbox();
  const [filter, setFilter] = useState('toate');

  const visible = (filter === 'toate'
    ? galleryImages
    : galleryImages.filter((image) => image.category === filter)
  ).map((image) => ({ ...image, alt: localize(image.alt, lang) }));

  return (
    <>
      <section className="mx-auto max-w-page px-[var(--side-pad)] pt-[var(--page-hero-pad-top)] pb-6">
        <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.galerie.kicker}
        </div>
        <h1 className="m-0 mb-8 max-w-[16ch] text-[length:var(--h2)] leading-[1.05] font-bold tracking-[-0.01em]">
          {ui.galerie.title}
        </h1>
        <div className="flex flex-wrap gap-[0.6rem]">
          {galleryFilterKeys.map((key) => (
            <FilterPill key={key} active={filter === key} onClick={() => setFilter(key)}>
              {ui.galerie.filters[key]}
            </FilterPill>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-page px-[var(--side-pad)] pt-6 pb-[var(--section-pad-v)]">
        <div className="grid auto-rows-[var(--gallery-row-h)] grid-cols-2 gap-3 wide:grid-cols-4">
          {visible.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => open(visible, index)}
              className={`relative cursor-pointer overflow-hidden rounded-md border-none bg-transparent p-0 ${
                image.rowSpan === 2 ? 'row-span-2' : ''
              }`}
            >
              <Photo id={image.id} alt={image.alt} />
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
