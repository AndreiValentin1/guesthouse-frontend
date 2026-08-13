import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';
import { LanguageToggle } from './LanguageToggle';
import { MobileMenu } from './MobileMenu';
import { useLang } from '../../i18n/LanguageContext';
import { useScrolled } from '../../hooks/useScrolled';
import { navKeys } from '../../data/site';

export function Navbar() {
  const { ui } = useLang();
  const { pathname } = useLocation();
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);

  const overHero = pathname === '/' && !scrolled;

  const items = navKeys.map((key) => ({
    key,
    to: `/${key}`,
    label: ui.nav[key],
    active: pathname === `/${key}` || (key === 'cazare' && pathname.startsWith('/cazare')),
  }));

  return (
    <>
      <nav
        className="fixed top-0 right-0 left-0 z-40 flex items-center justify-between gap-8 px-(--side-pad) py-(--nav-pad-v)"
        style={{
          background: overHero ? 'transparent' : scrolled ? 'rgba(249,250,251,.94)' : '#F9FAFB',
          color: overHero ? '#F9FAFB' : '#111827',
          boxShadow: !overHero && scrolled ? 'var(--shadow-sm)' : 'none',
          transition: 'background .35s ease, color .35s ease',
        }}
      >
        <Link
          to="/"
          className="shrink-0 text-[1.05rem] font-bold tracking-[-0.01em] whitespace-nowrap"
        >
          {ui.brand}
        </Link>

        <div className="hidden items-center gap-8 wide:flex">
          <div className="flex items-center gap-7">
            {items.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                aria-current={item.active ? 'page' : undefined}
                className="border-b pb-1 text-base font-medium transition-opacity duration-200"
                style={{
                  opacity: item.active ? 1 : 0.82,
                  borderBottomColor: item.active ? 'currentColor' : 'transparent',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="ml-6 flex items-center gap-5">
            <LanguageToggle overHero={overHero} />
            <Button to="/rezervare">{ui.cta.rezerva}</Button>
          </div>
        </div>

        <div className="flex items-center gap-3 wide:hidden">
          <LanguageToggle size="mobile" overHero={overHero} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex cursor-pointer border-none bg-transparent p-1 text-current"
          >
            {menuOpen ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {menuOpen && <MobileMenu items={items} onClose={() => setMenuOpen(false)} />}
    </>
  );
}
