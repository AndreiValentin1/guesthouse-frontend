import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Every navigation starts at the top of the page, as the prototype did. */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
