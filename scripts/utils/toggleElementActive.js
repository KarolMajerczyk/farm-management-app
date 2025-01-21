export function toggleElementActive(el, flag) {
  if (el.parentNode.querySelector(".active")) {
    el.parentNode.querySelector(".active").classList.remove("active");

    if (flag) {
      return;
    }
  }

  el.classList.add("active");
}

// export function toggleItemCardActive(id) {
//   if (document.querySelector(".card-tile.active")) {
//     document.querySelector(".card-tile.active").classList.remove("active");
//   }

//   if (id) {
//     document.querySelector(`[data-id="${id}"]`).classList.add("active");
//   }
// }

// export function removeItemCardActive() {
//   document.querySelector(".card-tile.active").classList.remove("active");
// }
