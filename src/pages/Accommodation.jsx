import { RoomCard } from '../components/rooms/RoomCard';
import { useLang } from '../i18n/LanguageContext';
import { categories, roomsInCategory } from '../data/rooms';
import { localize } from '../utils/localize';

export default function Accommodation() {
  const { ui, lang } = useLang();

  return (
    <>
      <section className="mx-auto max-w-page px-(--side-pad) pt-(--page-hero-pad-top) pb-(--section-pad-v)">
        <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.cazare.kicker}
        </div>
        <h1 className="m-0 mb-5 max-w-[16ch] text-(length:--h2) leading-[1.05] font-bold tracking-[-0.01em]">
          {ui.cazare.title}
        </h1>
        <p className="m-0 max-w-[52ch] text-(length:--body-lg) leading-[1.6] text-gray-500">
          {ui.cazare.intro}
        </p>
      </section>

      {categories.map((category) => (
        <section
          key={category.slug}
          className="mx-auto max-w-page px-(--side-pad) pb-(--section-pad-v)"
        >
          <h2 className="m-0 mb-6 border-t border-gray-200 pt-6 text-(length:--h3) font-bold tracking-[-0.01em]">
            {localize(category.name, lang)}
          </h2>
          <div className="flex flex-col gap-(--room-row-gap)">
            {roomsInCategory(category.slug).map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
