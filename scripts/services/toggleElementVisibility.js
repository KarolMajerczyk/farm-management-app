export function toggleElementVisibility(el, flag) {
  if (flag) {
    el.classList.add("visible");
  } else {
    el.classList.remove("visible");
  }
}
