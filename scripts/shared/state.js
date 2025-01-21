export function getCurrentState() {
  const page = document.querySelector("#main-nav .active").dataset.page;

  const activeItem = document.querySelector("#items .active");
  const id = activeItem ? activeItem.dataset.id : null;

  const section = document.querySelector("#side-menu .active").dataset.section;

  return { page, id, section };
}
