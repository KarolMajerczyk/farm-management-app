import { DOM } from "../dom/domElements.js";

export function renderBudget(budget) {
  let html = "";

  DOM.sidePanelHeading.innerText = "Lista transakcji";

  budget.forEach((entry) => {
    html += `
      <li class="list-item" data-id="${entry.id}">
      <button>
        <i class="card-image fa-solid fa-trash"></i>
      </button>
      <i class="fa-solid fa-sack-dollar item-image ${entry.type}"></i>
        <div class="item-content">
            <p>${entry.description}</p>
            <p>Kwota: <span>${entry.amount} zł</span></p>
        </div>
      </li>
    `;
  });

  DOM.budget.innerHTML = html;
}
