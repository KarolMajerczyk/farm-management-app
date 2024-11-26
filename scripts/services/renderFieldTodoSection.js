import { DOM } from "../dom/domElements.js";

export function renderFieldTodoSection() {
  DOM.detailsPanelHeading.innerText = "Lista zadań";

  const html = `
    <li class="list-item">
      <input type="checkbox" />
      <p>Sprawdź stan ogrodzenia i napraw ewentualne uszkodzenia.</p>
    </li>

    <li class="list-item">
      <input type="checkbox" />
      <p>Usuń kamienie i inne przeszkody z powierzchni pola.</p>
    </li>

    <li class="list-item">
      <input type="checkbox" />
      <p>Zbadaj poziom wilgotności gleby i zdecyduj o nawadnianiu.</p>
    </li>

    <li class="list-item">
      <input type="checkbox" />
      <p>Zidentyfikuj i usuń chwasty lub szkodliwe rośliny.</p>
    </li>

    <li class="list-item">
      <input type="checkbox" />
      <p>Przeprowadź nawożenie zgodnie z wymaganiami roślin.</p>
    </li>

    <li class="list-item">
      <input type="checkbox" />
      <p>Oznacz granice działki za pomocą trwałych markerów.</p>
    </li>

    <li class="list-item">
      <input type="checkbox" />
      <p>Sprawdź stan drenażu i oczyść ewentualne zatkane kanały.</p>
    </li>
  `;

  DOM.fieldTodoList.innerHTML = html;
}
