// Shared rule for the homepage's JavaScript animations (scramble, count-up).
//
// Skip them when the visitor asked for reduced motion.
//
// On a fresh page load where JavaScript arrived late (slow phone or network),
// the real text has already been on screen for a while. Resetting *visible*
// text to noise or 0 would look broken, so those elements skip the effect.
// Elements still below the screen have not been seen yet, so they always
// animate. Client-side navigations later in the visit animate normally.
const LATE_AFTER_MS = 2500;
let lateStart: boolean | null = null;

function isOnScreen(el: Element): boolean {
  const r = el.getBoundingClientRect();
  return r.bottom > 0 && r.top < window.innerHeight;
}

export function canAnimate(el?: Element | null): boolean {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (lateStart === null) {
    lateStart = performance.now() > LATE_AFTER_MS;
    // Every component hydrating in this first pass gets the same answer.
    setTimeout(() => {
      lateStart = false;
    }, 1000);
  }
  if (!lateStart) return true;
  // Late load: only animate what the visitor has not seen yet.
  return Boolean(el) && !isOnScreen(el as Element);
}
