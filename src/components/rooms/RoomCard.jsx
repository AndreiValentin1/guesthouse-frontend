import { Link } from 'react-router-dom';
import { Badge } from '../common/Badge';
import { Photo } from '../common/Photo';
import { useLang } from '../../i18n/LanguageContext';
import { availabilityLabel, availabilityVariant } from '../../data/rooms';
import { localize } from '../../utils/localize';

export function RoomCard({ room }) {
  const { ui, lang } = useLang();
  const r = localize(room, lang);

  return (
    <Link
      to={`/cazare/${room.slug}`}
      className="flex flex-col gap-6 text-inherit no-underline wide:flex-row"
    >
      <div className="relative aspect-4/3 flex-none wide:flex-[1.1]">
        <Photo id={room.images[0]} alt={r.name} className="rounded-[4px]" />
        <div className="absolute top-2.5 left-2.5">
          <Badge
            label={availabilityLabel(room.availability, lang)}
            variant={availabilityVariant(room.availability)}
          />
        </div>
      </div>
      <div className="flex flex-none flex-col justify-center gap-[0.6rem] wide:flex-1">
        <h3 className="m-0 text-[length:var(--room-name)] font-semibold tracking-[-0.01em]">
          {r.name}
        </h3>
        <div className="text-sm text-gray-400">
          {r.capacity} {ui.common.guests} · {r.bed} · {r.size} {ui.common.m2}
        </div>
        <p className="m-0 max-w-[42ch] text-base leading-[1.5] text-gray-500">{r.shortDesc}</p>
        <div className="mt-1 text-base font-semibold">
          {ui.common.from} {r.price} {ui.common.perNight}
        </div>
        <span className="w-max border-b border-accent pb-0.5 text-sm font-semibold text-accent">
          {ui.cta.vezicamera} →
        </span>
      </div>
    </Link>
  );
}
