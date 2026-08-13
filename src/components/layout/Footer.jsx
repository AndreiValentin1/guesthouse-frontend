import { Link } from 'react-router-dom';
import { useLang } from '../../i18n/LanguageContext';
import { navKeys, site } from '../../data/site';

export function Footer() {
  const { ui } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 px-[var(--side-pad)] pt-[var(--section-pad-v)] pb-8 text-gray-400">
      <div className="mx-auto flex max-w-page flex-col gap-10 border-b border-gray-800 pb-10 wide:flex-row">
        <div className="flex-1">
          <div className="mb-3 text-[1.05rem] font-bold text-gray-50">{ui.brand}</div>
          <p className="m-0 max-w-[28ch] text-sm leading-[1.55]">{ui.eyebrow}</p>
        </div>
        <div className="flex flex-1 flex-col gap-[0.6rem]">
          {navKeys.map((key) => (
            <Link key={key} to={`/${key}`} className="text-sm">
              {ui.nav[key]}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-[0.6rem] text-sm">
          <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link to="/rezervare" className="font-semibold text-gray-100">
            {ui.cta.rezerva} →
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-page flex-wrap justify-between gap-4 pt-5 text-xs">
        <span>
          © {year} {ui.brand}. {ui.footer.rights}
        </span>
        <div className="flex gap-5">
          <a href="#">{ui.footer.legal1}</a>
          <a href="#">{ui.footer.legal2}</a>
        </div>
      </div>
    </footer>
  );
}
