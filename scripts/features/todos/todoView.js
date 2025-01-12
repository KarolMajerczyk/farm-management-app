export const renderTodoItems = (todos) => {
  let html = "";

  todos.forEach((item) => {
    html += `
        <li class="list-item" data-id="${item.id}">
            <input type="checkbox" />
            <p>${item.description}</p>
        </li>
      `;
  });

  document.querySelector("#todos-list").innerHTML = html;
};
