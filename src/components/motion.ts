// Shared rule for the homepage's JavaScript animations (scramble, count-up).
//
// Skip them when the visitor asked for reduced motion, and on a fresh page
// load where JavaScript arrived late (> 1.5s): by then the real text is
// already on screen, and resetting it to noise or 0 would look broken.
// Client-side navigations later in the visit still animate.
let lateStart: boolean | null = null;

export function canAnimate(): boolean {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (lateStart === null) {
    lateStart = performance.now() > 1500;
    // Every component hydrating in this first pass gets the same answer.
    setTimeout(() => {
      lateStart = false;
    }, 1000);
  }
  return !lateStart;
}
