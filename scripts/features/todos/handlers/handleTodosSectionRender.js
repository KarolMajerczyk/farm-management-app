export function handleTodosSectionRender(e) {
  const menuItemSection = e.target.dataset.page;

  if (menuItemSection === "todos") {
    const cardData = document.querySelector(".card-tile.active").dataset;
    const { type, id } = cardData;

    const todos = getTodoItems(type, id);
    renderTodoItems(todos);
  }
}
