import { DOM } from "../dom/domElements.js";

export function renderFieldBudgetSection() {
  DOM.detailsPanelHeading.innerText = "Lista transakcji";

  const html = `
    <li class="list-item">
      <i class="fa-solid fa-sack-dollar item-image income"></i>
      <div>
        <p>Sprzedaż plonów ziemniaków na lokalnym targu.</p>
        <p>Kwota: <span>800 zł</span></p>
      </div>
    </li>

    <li class="list-item">
      <i class="fa-solid fa-sack-dollar item-image expense"></i>
      <div>
        <p>Zakup nawozów organicznych do poprawy jakości gleby.</p>
        <p>Kwota: <span>500 zł</span></p>
      </div>
    </li>

    <li class="list-item">
      <i class="fa-solid fa-sack-dollar item-image income"></i>
      <div>
        <p>Wynajem działki na organizację lokalnego festynu.</p>
        <p>Kwota: <span>1500 zł</span></p>
      </div>
    </li>

    <li class="list-item">
      <i class="fa-solid fa-sack-dollar item-image expense"></i>
      <div>
        <p>Zakup nowych narzędzi do pielęgnacji roślin.</p>
        <p>Kwota: <span>300 zł</span></p>
      </div>
    </li>

    <li class="list-item">
      <i class="fa-solid fa-sack-dollar item-image income"></i>
      <div>
        <p>Sprzedaż miodu z pasieki znajdującej się na polu.</p>
        <p>Kwota: <span>1000 zł</span></p>
      </div>
    </li>
  `;

  DOM.fieldBudgetList.innerHTML = html;
}
