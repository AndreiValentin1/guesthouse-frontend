const variants = {
  green: 'bg-green-100 text-green-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  gray: 'bg-gray-100 text-gray-700',
};

export function Badge({ label, variant = 'gray' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 font-sans text-[0.625rem] font-medium ${
        variants[variant] || variants.gray
      }`}
    >
      {label}
    </span>
  );
}

export function Tag({ children }) {
  return (
    <span className="inline-flex rounded-sm bg-gray-100 px-1.5 py-0.5 font-sans text-[0.625rem] text-gray-500">
      {children}
    </span>
  );
}
