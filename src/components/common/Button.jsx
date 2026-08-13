import { Link } from 'react-router-dom';

const base =
  'inline-flex cursor-pointer items-center gap-1.5 border-none font-sans font-semibold ' +
  'transition-colors duration-200 ease-[var(--ease-standard)]';

const sizes = {
  sm: 'px-3 py-1.5 text-xs rounded-md',
  md: 'px-4 py-2 text-base rounded-lg',
};

const variants = {
  primary: 'bg-accent text-on-accent hover:bg-accent-hover',
};

/**
 * The site's only button shape. Renders as a link when `to` is given so a
 * navigational button stays a single anchor element.
 */
export function Button({
  to,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
