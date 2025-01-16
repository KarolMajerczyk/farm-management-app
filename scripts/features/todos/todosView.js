export const renderTodoItems = (todos) => {
  let html = "";

  todos.forEach((item) => {
    html += `
        <li class="list-item" data-id="${item.id}">
         <button class="delete">
        <i class="card-image fa-solid fa-trash"></i>
      </button>
            <input type="checkbox" />
            <p>${item.description}</p>
        </li>
      `;
  });

  document.querySelector("#todos-list").innerHTML = html;
};
