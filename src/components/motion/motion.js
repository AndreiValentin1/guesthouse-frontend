export const EASE_STANDARD = [0.4, 0, 0.2, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

/** Collapses a duration/delay pair to nothing when the visitor asked for less motion. */
export function timing(reduced, duration, delay = 0) {
  if (reduced) return { duration: 0, delay: 0 };
  return { duration, delay, ease: EASE_STANDARD };
}
