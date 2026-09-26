// Hero parallax: the sunrise scene leans toward the mouse.
// Only runs where there is a real mouse; touch screens keep the CSS animation alone.
(() => {
  const hero = document.querySelector(".hero");
  if (!hero || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  // People who ask for less motion still get the effect, at half strength.
  const strength = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0.5 : 1;
  let targetX = 0;
  let targetY = 0;
  let x = 0;
  let y = 0;
  let frame = 0;

  const tick = () => {
    x += (targetX - x) * 0.08;
    y += (targetY - y) * 0.08;
    hero.style.setProperty("--mx", (x * strength).toFixed(4));
    hero.style.setProperty("--my", (y * strength).toFixed(4));
    frame = Math.abs(targetX - x) > 0.001 || Math.abs(targetY - y) > 0.001 ? requestAnimationFrame(tick) : 0;
  };
  const start = () => { if (!frame) frame = requestAnimationFrame(tick); };

  hero.addEventListener("pointermove", (event) => {
    const box = hero.getBoundingClientRect();
    targetX = ((event.clientX - box.left) / box.width) * 2 - 1;
    targetY = ((event.clientY - box.top) / box.height) * 2 - 1;
    hero.style.setProperty("--px", `${event.clientX - box.left}px`);
    hero.style.setProperty("--py", `${event.clientY - box.top}px`);
    hero.classList.add("is-pointing");
    start();
  });
  hero.addEventListener("pointerleave", () => {
    targetX = 0;
    targetY = 0;
    hero.classList.remove("is-pointing");
    start();
  });
})();
