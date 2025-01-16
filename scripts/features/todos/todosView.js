export const renderTodoItems = (todos) => {
  let html = "";

  todos.forEach((item) => {
    html += `
        <li class="list-item" data-id="${item.id}">
        
            <input type="checkbox" ${item.status === "done" ? "checked" : ""} />
            <p>${item.description}</p>
             <button class="delete">
        <i class="card-image fa-solid fa-trash"></i>
      </button>
        </li>
      `;
  });

  document.querySelector("#todos-list").innerHTML = html;
};
