import { CircleArrowOutUpRight, Clock, Mail, Phone } from 'lucide-react';
import { ContactForm } from '../components/forms/ContactForm';
import { useLang } from '../i18n/LanguageContext';
import { site } from '../data/site';

function DetailRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <div className="text-xs text-gray-400">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const { ui } = useLang();
  const iconProps = { size: 18, strokeWidth: 2 };

  return (
    <section className="mx-auto flex max-w-page flex-col gap-[var(--intro-gap)] px-[var(--side-pad)] pt-[var(--page-hero-pad-top)] pb-[var(--section-pad-v)] wide:flex-row">
      <div className="flex-1">
        <div className="mb-3 text-sm font-semibold tracking-[0.03em] text-gray-500">
          {ui.contact.kicker}
        </div>
        <h1 className="m-0 mb-8 max-w-[16ch] text-[length:var(--h2)] leading-[1.05] font-bold tracking-[-0.01em]">
          {ui.contact.title}
        </h1>

        <div className="flex max-w-[36ch] flex-col gap-[1.1rem]">
          <a href={`tel:${site.phoneRaw}`} className="border-t border-gray-200 pt-[0.9rem]">
            <DetailRow icon={<Phone {...iconProps} />} label={ui.contact.phone} value={site.phone} />
          </a>
          <a href={`mailto:${site.email}`}>
            <DetailRow icon={<Mail {...iconProps} />} label={ui.contact.email} value={site.email} />
          </a>
          <a href={site.whatsapp}>
            <DetailRow
              icon={<CircleArrowOutUpRight {...iconProps} />}
              label={ui.contact.whatsapp}
              value={site.phone}
            />
          </a>
          <div className="border-t border-gray-200 pt-[0.9rem]">
            <DetailRow
              icon={<Clock {...iconProps} />}
              label={ui.contact.hours}
              value={ui.contact.hoursBody}
            />
          </div>
          <div className="flex gap-8">
            <div>
              <div className="text-xs text-gray-400">{ui.contact.checkin}</div>
              <div className="font-semibold">15:00</div>
            </div>
            <div>
              <div className="text-xs text-gray-400">{ui.contact.checkout}</div>
              <div className="font-semibold">11:00</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="rounded-xl border border-gray-200 p-7">
          <h2 className="m-0 mb-5 text-[length:var(--h3-sm)] font-bold tracking-[-0.01em]">
            {ui.contact.formTitle}
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
