export function showElement(el) {}

export function hideElement(el) {}

export function setElementActiveState(el) {}

export function unsetElementActiveState(el) {}

export function toggleElementActive(el, flag) {
  const curEl = el.parentNode.querySelector(".active");

  if (curEl) {
    curEl.classList.remove("active");
  }

  if (flag) {
    el.classList.add("active");
  }
}

export function toggleElementVisibility(el, flag) {
  if (flag) {
    el.classList.add("visible");
  } else {
    el.classList.remove("visible");
  }
}
