import { DOM } from "../dom/domElements.js";

export async function renderHerdsList(herds) {
  let html = "";

  herds.reverse().forEach((herd) => {
    html += `<div class="card-tile" data-id="${herd.id}" data-type="herd">
              <div class="card-header">
                <img src="./images/cow.png" />
                <p>${herd.name}</p>
              </div>
              <hr class="card-separator" />
              <div class="card-details">
                <img src="./images/count.png" />
                <p>Liczba sztuk: <span>${herd.animals.length}</span></p>
              </div>
            </div>
            `;
  });

  DOM.cardsList.innerHTML = html;
}
