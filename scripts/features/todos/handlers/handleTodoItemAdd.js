export function handleTodoItemAdd(e) {
  e.preventDefault();

  const cardData = document.querySelector(".card-tile.active").dataset;
  const { type, id } = cardData;

  const form = e.target;
  const data = new FormData(form);
  const description = data.get("description");

  const todo = createTodoItem(description);
  addTodoItem(type, id, todo);

  const todos = getTodoItems(type, id);
  renderTodoItems(todos);

  form.reset();
}
