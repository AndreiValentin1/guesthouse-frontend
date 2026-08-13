import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Photo } from '../common/Photo';
import { useLang } from '../../i18n/LanguageContext';
import { fadeUp, timing } from '../motion/motion';

export function Lightbox({ list, index, onClose, onPrev, onNext }) {
  const { ui } = useLang();
  const reduced = useReducedMotion();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowRight') onNext();
      else if (event.key === 'ArrowLeft') onPrev();
      else if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll('button');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, [onClose, onNext, onPrev]);

  const item = list[index];
  const id = typeof item === 'string' ? item : item?.id;
  const alt = typeof item === 'string' ? '' : item?.alt || '';

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={ui.galerie.title}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={timing(reduced, 0.25)}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[rgba(3,7,18,0.92)]"
    >
      <button
        type="button"
        ref={closeRef}
        onClick={onClose}
        aria-label={ui.common.close}
        className="absolute top-5 right-5 flex cursor-pointer border-none bg-transparent p-2 text-gray-100"
      >
        <X size={28} strokeWidth={2} />
      </button>

      <div className="relative h-[min(72vh,640px)] w-[min(84vw,900px)]">
        <Photo id={id} alt={alt} />
      </div>

      <div className="mt-6 flex items-center gap-8">
        <button
          type="button"
          onClick={onPrev}
          aria-label={ui.common.previous}
          className="flex cursor-pointer rounded-full border border-gray-700 bg-transparent p-2.5 text-gray-100"
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>
        <span className="text-sm text-gray-400">
          {list.length ? `${index + 1} / ${list.length}` : ''}
        </span>
        <button
          type="button"
          onClick={onNext}
          aria-label={ui.common.next}
          className="flex cursor-pointer rounded-full border border-gray-700 bg-transparent p-2.5 text-gray-100"
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>
      </div>
    </motion.div>
  );
}
