import { Photo } from '../components/common/Photo';
import { useLang } from '../i18n/LanguageContext';
import { experiences } from '../data/experiences';
import { localize } from '../utils/localize';

export default function Experiences() {
  const { ui, lang } = useLang();

  return (
    <>
      <section className="mx-auto max-w-page px-(--side-pad) pt-(--page-hero-pad-top) pb-(--section-pad-v)">
        <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.experiente.kicker}
        </div>
        <h1 className="m-0 mb-5 max-w-[18ch] text-(length:--h2) leading-[1.05] font-bold tracking-[-0.01em]">
          {ui.experiente.title}
        </h1>
        <p className="m-0 max-w-[52ch] text-(length:--body-lg) leading-[1.6] text-gray-500">
          {ui.experiente.intro}
        </p>
      </section>

      {experiences.map((experience, index) => {
        const item = localize(experience, lang);
        return (
          <section
            key={experience.img}
            className="mx-auto max-w-page px-(--side-pad) pb-(--section-pad-v)"
          >
            <div
              className={`flex flex-col items-center gap-(--intro-gap) ${
                index % 2 === 0 ? 'wide:flex-row' : 'wide:flex-row-reverse'
              }`}
            >
              <div className="aspect-4/3 w-full flex-1 wide:w-auto">
                <Photo id={experience.img} alt={item.title} className="rounded-[4px]" />
              </div>
              <div className="flex-1">
                <h2 className="m-0 mb-3 text-(length:--h3-sm) font-bold tracking-[-0.01em]">
                  {item.title}
                </h2>
                <p className="m-0 mb-4 max-w-[40ch] text-lg leading-[1.55] text-gray-500">
                  {item.desc}
                </p>
                <div className="flex gap-6 text-sm text-gray-400">
                  <span>{item.distance}</span>
                  <span>{item.duration}</span>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
