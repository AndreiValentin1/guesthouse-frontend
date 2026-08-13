const control =
  'w-full box-border font-sans text-base px-4 py-2.5 rounded-lg border border-gray-300 ' +
  'bg-white text-gray-900';

export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="mb-[0.4rem] block text-sm font-medium">
      {children}
    </label>
  );
}

export function Input({ className = '', ...rest }) {
  return (
    <div className="relative">
      <input
        type="text"
        className={`${control} outline-none transition-shadow duration-200 ease-(--ease-standard) focus:border-transparent focus:shadow-(--ring-focus) ${className}`}
        {...rest}
      />
    </div>
  );
}

export function Textarea({ className = '', ...rest }) {
  return <textarea className={`${control} resize-y ${className}`} {...rest} />;
}

export function Select({ className = '', children, ...rest }) {
  return (
    <select className={`${control} ${className}`} {...rest}>
      {children}
    </select>
  );
}

export function Checkbox({ id, checked, onChange, label }) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-2 font-sans text-base text-gray-900"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-0.75 mr-0.75 mb-0.75 ml-1 size-4 cursor-pointer rounded-sm border border-gray-300 accent-accent"
      />
      {label}
    </label>
  );
}

export function FieldError({ children }) {
  if (!children) return null;
  return <div className="mt-[0.3rem] text-xs text-red-500">{children}</div>;
}
