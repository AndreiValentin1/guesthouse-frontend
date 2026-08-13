import { Link, useParams } from 'react-router-dom';
import { Accordion } from '../components/common/Accordion';
import { Badge, Tag } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Photo } from '../components/common/Photo';
import { useLightbox } from '../components/gallery/LightboxProvider';
import { useLang } from '../i18n/LanguageContext';
import { availabilityLabel, availabilityVariant, findRoom } from '../data/rooms';
import { localize } from '../utils/localize';

function Spec({ label, value }) {
  return (
    <div>
      <div className="mb-1 text-xs text-gray-400">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  );
}

export default function RoomDetail() {
  const { roomSlug } = useParams();
  const { ui, lang } = useLang();
  const { open } = useLightbox();

  const room = findRoom(roomSlug);
  if (!room) return null;

  const r = localize(room, lang);
  const gallery = room.images.map((id) => ({ id, alt: r.name }));

  return (
    <>
      <section className="relative h-(--room-hero-h) w-full">
        <Photo id={room.images[0]} alt={r.name} />
        <Link
          to="/cazare"
          className="absolute top-(--room-back-top) left-(--side-pad) rounded-full bg-[rgba(3,7,18,.55)] px-4 py-2 text-sm font-semibold text-gray-50 backdrop-blur-xs"
        >
          ← {ui.cta.inapoiCamere}
        </Link>
      </section>

      <section className="mx-auto flex max-w-page flex-col gap-(--intro-gap) px-(--side-pad) py-(--section-pad-v) wide:flex-row">
        <div className="flex-none wide:flex-[1.6]">
          <h1 className="m-0 mb-4 text-(length:--h2) leading-[1.05] font-bold tracking-[-0.01em]">
            {r.name}
          </h1>
          <p className="m-0 mb-8 max-w-[48ch] text-(length:--body-lg) leading-[1.6] text-gray-500">
            {r.longDesc}
          </p>

          <div className="mb-8 grid max-w-130 grid-cols-3 gap-5 border-t border-b border-gray-200 py-6">
            <Spec label={ui.roomDetail.capacity} value={r.capacity} />
            <Spec label={ui.roomDetail.bed} value={r.bed} />
            <Spec label={ui.roomDetail.size} value={`${r.size} ${ui.common.m2}`} />
            <Spec label={ui.roomDetail.bathroom} value={r.bathroom} />
            <Spec label={ui.roomDetail.view} value={r.view} />
            <Spec
              label={ui.roomDetail.terrace}
              value={room.terrace ? (lang === 'ro' ? 'da' : 'yes') : lang === 'ro' ? 'nu' : 'no'}
            />
          </div>

          <div className="mb-8">
            <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-500">
              {ui.roomDetail.amenities}
            </div>
            <div className="flex flex-wrap gap-2">
              {r.amenities.map((amenity) => (
                <Tag key={amenity}>{amenity}</Tag>
              ))}
            </div>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-3">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => open(gallery, index)}
                className="relative aspect-4/3 cursor-pointer overflow-hidden rounded-md border-none bg-transparent p-0"
              >
                <Photo id={image.id} alt={image.alt} />
              </button>
            ))}
          </div>

          <Accordion title={ui.roomDetail.policyTitle}>
            <p className="m-0 text-base leading-[1.6] text-gray-500">{ui.roomDetail.policyBody}</p>
          </Accordion>
        </div>

        <div className="flex-none wide:flex-1 wide:sticky wide:top-27.5 wide:self-start">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="mb-4 flex items-baseline justify-between">
              <div>
                <span className="text-2xl font-bold">{r.price}</span>
                <span className="text-sm text-gray-500"> {ui.common.perNight}</span>
              </div>
              <Badge
                label={availabilityLabel(room.availability, lang)}
                variant={availabilityVariant(room.availability)}
              />
            </div>
            <div className="flex justify-between border-t border-gray-200 py-[0.6rem] text-sm text-gray-500">
              <span>{ui.roomDetail.checkin}</span>
              <span className="font-medium text-gray-900">15:00</span>
            </div>
            <div className="mb-4 flex justify-between border-t border-gray-200 py-[0.6rem] text-sm text-gray-500">
              <span>{ui.roomDetail.checkout}</span>
              <span className="font-medium text-gray-900">11:00</span>
            </div>
            <p className="m-0 mb-5 text-xs leading-normal text-gray-400">{ui.roomDetail.priceNote}</p>
            <Button to="/rezervare">{ui.roomDetail.reserve}</Button>
          </div>
        </div>
      </section>
    </>
  );
}
