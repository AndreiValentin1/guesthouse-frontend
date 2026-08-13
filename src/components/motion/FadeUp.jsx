import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, timing } from './motion';

/** The site's one entrance animation: 18px rise with a fade. */
export function FadeUp({ as = 'div', duration = 0.6, delay = 0, children, ...rest }) {
  const reduced = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={timing(reduced, duration, delay)}
      {...rest}
    >
      {children}
    </Component>
  );
}
