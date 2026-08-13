import { BookingForm } from '../components/forms/BookingForm';
import { useLang } from '../i18n/LanguageContext';

export default function Booking() {
  const { ui } = useLang();

  return (
    <>
      <section className="mx-auto max-w-[720px] px-[var(--side-pad)] pt-[var(--page-hero-pad-top)] pb-4">
        <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.rezervare.kicker}
        </div>
        <h1 className="m-0 mb-4 text-[length:var(--h2)] leading-[1.05] font-bold tracking-[-0.01em]">
          {ui.rezervare.title}
        </h1>
        <p className="m-0 mb-10 max-w-[52ch] text-[length:var(--body-lg)] leading-[1.6] text-gray-500">
          {ui.rezervare.intro}
        </p>
      </section>
      <section className="mx-auto max-w-[720px] px-[var(--side-pad)] pb-[var(--section-pad-v)]">
        <BookingForm />
      </section>
    </>
  );
}
