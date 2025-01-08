import { DOM } from "../dom/domElements.js";

export function renderOverview(obj, objType) {
  DOM.sidePanelHeading.innerText = "Przegląd";

  let html = "";

  switch (objType) {
    case "field":
      html = generateFieldOverviewHTML(obj);
      break;
    case "herd":
      html = generateHerdOverviewHTML(obj);
      break;
    case "machine":
      html = generateMachineOverviewHTML(obj);
      break;
  }

  const todosLeft = obj.todos.filter((todo) => todo.status === "pending");

  const { income, expense } = obj.budget.reduce(
    (totals, entry) => {
      if (entry.type === "income") {
        totals.income += entry.amount;
      } else if (entry.type === "expense") {
        totals.expense += entry.amount;
      }
      return totals;
    },
    { income: 0, expense: 0 }
  );

  html += `
  <div class="card-tile">
      <div class="card-header">
        <p class="card-title">Budżet</p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-plus"></i>
        <p>Przychody: <span>${income} zł</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-minus"></i>
        <p>Wydatki: <span>${expense} zł</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-plus-minus"></i>
        <p>Saldo: <span>${income - expense} zł</span></p>
      </div>
    </div>

    <div class="card-tile">
      <div class="card-details">
        <i class="card-image fa-solid fa-list-check"></i>
        <p>Zadania do wykonania: <span>${todosLeft.length}</span></p>
      </div>
    </div>
  `;

  DOM.overview.innerHTML = html;
}

function generateFieldOverviewHTML(field) {
  return `
  <div class="card-tile">
      <div class="card-header">
        <p class="card-title">Informacje</p>
        <i class="card-image fa-solid fa-pen"></i>
      </div>
       <hr class="card-separator" />
      <div class="card-details">
        <p class="card-image"><img src="./images/field.png"></p>
        <p>Nazwa pola: <span>${field.name}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <p class="card-image"><img src="${field.image}"></p>
        <p>Rodzaj uprawy: <span>${field.plant}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-circle-info"></i>
        <p>Gatunek: <span>${field.seed}</span></p>
      </div>
    </div>

    <div class="card-tile">
      <div class="card-header">
        <p class="card-title">Dane o działce</p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-location-crosshairs"></i>
        <p>Numer działki: <span>${field.number}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-earth-europe"></i>
        <p>Miejscowość: <span>${field.region}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-expand"></i>
        <p>Rozmiar: <span>${field.area} ha</span></p>
      </div>
    </div>
  `;
}

function generateHerdOverviewHTML(herd) {
  return `
  <div class="card-tile">
    <div class="card-header">
      <p class="card-title">Informacje</p>
      <i class="card-image fa-solid fa-pen"></i>
    </div>
    <hr class="card-separator" />
    <div class="card-details">
      <i class="card-image fa-solid fa-location-crosshairs"></i>
      <p>Nazwa stada: <span>${herd.name}</span></p>
    </div>
    <hr class="card-separator" />
    <div class="card-details">
      <i class="card-image fa-solid fa-earth-europe"></i>
      <p>Zwierzę: <span>${herd.animal}</span></p>
    </div>
    <hr class="card-separator" />
    <div class="card-details">
      <i class="card-image fa-solid fa-earth-europe"></i>
      <p>Gatunek: <span>${herd.species}</span></p>
    </div>
  </div>

  <div class="card-tile">
    <div class="card-details">
      <img src="./images/count.png" />
      <p>Liczba sztuk: <span>${herd.animals.length}</span></p>
    </div>
  </div>
`;
}

function generateMachineOverviewHTML(machine) {
  return `
  <div class="card-tile">
    <div class="card-header">
      <p class="card-title">Informacje o maszynie</p>
    </div>
    <hr class="card-separator" />
    <div class="card-details">
      <i class="card-image fa-solid fa-location-crosshairs"></i>
      <p>Nazwa maszyny: <span>${machine.name}</span></p>
    </div>
    <hr class="card-separator" />
    <div class="card-details">
      <i class="card-image fa-solid fa-earth-europe"></i>
      <p>Typ maszyny: <span>${machine.type}</span></p>
    </div>
    <hr class="card-separator" />
    <div class="card-details">
      <i class="card-image fa-solid fa-earth-europe"></i>
      <p>Tablica rejestracyjna: <span>${machine.plate}</span></p>
    </div>
    <hr class="card-separator" />
    <div class="card-details">
      <i class="card-image fa-solid fa-expand"></i>
      <p>Motogodziny: <span>${machine.hoursUsed} ha</span></p>
    </div>
  </div>
`;
}
