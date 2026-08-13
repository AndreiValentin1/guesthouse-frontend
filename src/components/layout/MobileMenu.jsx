import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../common/Button';
import { useLang } from '../../i18n/LanguageContext';
import { fadeUp, timing } from '../motion/motion';

export function MobileMenu({ items, onClose }) {
  const { ui } = useLang();
  const reduced = useReducedMotion();

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <motion.div
      id="mobile-menu"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={timing(reduced, 0.35)}
      className="fixed inset-0 z-39 flex flex-col justify-center bg-gray-950 px-7 py-8 wide:hidden"
    >
      {items.map((item) => (
        <Link
          key={item.key}
          to={item.to}
          onClick={onClose}
          aria-current={item.active ? 'page' : undefined}
          className="block py-[0.55rem] text-[2rem] font-bold tracking-[-0.01em] text-gray-100"
          style={{ opacity: item.active ? 1 : 0.82 }}
        >
          {item.label}
        </Link>
      ))}
      <Button to="/rezervare" onClick={onClose} className="mt-8 w-max">
        {ui.cta.rezerva}
      </Button>
    </motion.div>
  );
}
