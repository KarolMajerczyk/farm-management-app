export function toggleMenuItemActive(el) {
  const curEl = document.querySelector(".menu .active-item");

  if (!el) {
    el = document.querySelectorAll(".menu .nav-item")[0];
  }

  curEl.classList.remove("active-item");
  el.classList.add("active-item");
}
