export function toggleCardTileActive(el) {
  const curEl = document.querySelector(".card-tile.active");

  if (curEl) {
    curEl.classList.remove("active");
  }

  if (el) {
    el.classList.add("active");
  }
}


