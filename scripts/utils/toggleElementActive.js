export function toggleElementActive(el, flag) {
  const curEl = el.parentNode.querySelector(".active");

  if (curEl) {
    curEl.classList.remove("active");
  }

  if (flag) {
    el.classList.add("active");
  }
}
