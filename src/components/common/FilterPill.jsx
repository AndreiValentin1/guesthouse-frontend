export function FilterPill({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`cursor-pointer rounded-full border-none px-2.5 py-1 font-sans text-xs transition-colors duration-200 ease-[var(--ease-standard)] ${
        active
          ? 'bg-accent text-on-accent'
          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
}
