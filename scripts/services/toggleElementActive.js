export function toggleElementActive(el) {
  const curEl = el.parentNode.querySelector(`.${el.classList[0]}.active`);

  if (curEl) {
    curEl.classList.remove("active");
  }

  el.classList.add("active");
}
