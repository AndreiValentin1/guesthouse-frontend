import { imageSrc } from '../../data/images';

/**
 * Every photographic area on the site. Fills its container and crops with
 * `object-fit: cover`, so containers keep control of aspect ratio and radius.
 */
export function Photo({ id, alt = '', className = '', ...rest }) {
  return (
    <img
      src={imageSrc(id)}
      alt={alt}
      loading="lazy"
      className={`h-full w-full object-cover ${className}`}
      {...rest}
    />
  );
}
