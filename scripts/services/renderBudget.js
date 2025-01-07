import { DOM } from "../dom/domElements.js";

export function renderBudget(budget) {
  let html = "";

  DOM.detailsPanelHeading.innerText = "Lista transakcji";

  budget.forEach((entry) => {
    html += `
      <li class="list-item" data-id="${entry.id}">
        <i class="fa-solid fa-sack-dollar item-image ${entry.type}"></i>
        <div>
            <p>${entry.description}</p>
            <p>Kwota: <span>${entry.amount} zł</span></p>
        </div>
      </li>
    `;
  });

  DOM.budget.innerHTML = html;
}
