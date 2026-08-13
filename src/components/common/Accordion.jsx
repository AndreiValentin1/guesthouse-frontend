import { useId, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="border-t border-gray-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between border-none bg-none px-1 py-2 font-sans text-base font-medium text-gray-500"
      >
        <span>{title}</span>
        <ChevronRight
          size={16}
          strokeWidth={2}
          className="transition-transform duration-200 ease-[var(--ease-standard)]"
          style={{ transform: open ? 'rotate(90deg)' : 'none' }}
        />
      </button>
      {open && (
        <div id={panelId} className="px-1 pb-3">
          {children}
        </div>
      )}
    </div>
  );
}
