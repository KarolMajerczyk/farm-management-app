import { DOM } from "../dom/domElements.js";

export async function renderMachinesList(machines) {
  let html = "";

  machines.reverse().forEach((machine) => {
    html += `<div class="card-tile" data-id="${machine.id}" data-type="machine">
              <div class="card-header">
                <img src="./images/tractor.png" />
                <p>${machine.name}</p>
              </div>
              <hr class="card-separator" />
              <div class="card-details">
                <img src="./images/license-plate.png" />
                <p>Tablica nr. <span>${machine.plate}</span></p>
              </div>
            </div>
            `;
  });

  DOM.cardsList.innerHTML = html;
}
