export const renderBudgetItems = (budget) => {
  let html = "";

  budget.forEach((item) => {
    html += `
      <li class="list-item" data-id="${item.id}">
      <button>
        <i class="card-image fa-solid fa-trash"></i>
      </button>
      <i class="fa-solid fa-sack-dollar item-image ${
        item.amount > 0 ? "income" : "expense"
      }"></i>
        <div class="item-content">
            <p>${item.description}</p>
            <p>Kwota: <span>${item.amount} zł</span></p>
        </div>
      </li>
    `;
  });

  document.querySelector("#budget-list").innerHTML = html;
};
