export function getCurrentState() {
  const page = document.querySelector("#main-nav .active").dataset.page;

  const activeItem = document.querySelector("#items .active");
  const id = activeItem ? activeItem.dataset.id : null;

  return { page, id };
}
