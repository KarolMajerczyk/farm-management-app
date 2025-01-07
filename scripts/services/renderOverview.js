import { DOM } from "../dom/domElements.js";

export function renderOverview(obj, objType) {
  DOM.sidePanelHeading.innerText = "Przegląd";

  let html = "";

  switch (objType) {
    case "field":
      html = createFieldOverviewHTML(obj);
      break;
    case "herd":
      html = createHerdOverviewHTML(obj);
      break;
    case "machine":
      html = createMachineOverviewHTML(obj);
      break;
  }

  const todosLeft = obj.todos.filter((todo) => todo.status === "pending");

  const totalIncome =
    obj.budget.reduce((acc, entry) => {
      if (entry.type === "income") {
        return (acc += entry.amount);
      }
    }, 0) || 0;

  const totalExpenses =
    obj.budget.reduce((acc, entry) => {
      if (entry.type === "expense") {
        return (acc += entry.amount);
      }
    }, 0) || 0;

  html += `
  <div class="card-tile">
      <div class="card-header">
        <p class="card-title">Budżet</p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-plus"></i>
        <p>Przychody: <span>${totalIncome} zł</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-minus"></i>
        <p>Wydatki: <span>${totalExpenses} zł</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-plus-minus"></i>
        <p>Zysk: <span>${totalIncome - totalExpenses} zł</span></p>
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

function createFieldOverviewHTML(field) {
  return `
    <div class="card-tile">
      <div class="card-header">
        <p class="card-title">Informacje o działce</p>
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
        <i class="card-image fa-solid fa-earth-europe"></i>
        <p>Województwo: <span>${field.voivodeship}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-expand"></i>
        <p>Rozmiar: <span>${field.area} ha</span></p>
      </div>
    </div>

    <div class="card-tile">
      <div class="card-header">
        <p class="card-title">Informacje o uprawie</p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <p class="card-image">${field.crop.image}</p>
        <p>Rodzaj uprawy <span>${field.crop.name}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-circle-info"></i>
        <p>Gatunek <span>${field.crop.variety.name}</span></p>
      </div>
    </div>
  `;
}

function createHerdOverviewHTML(herd) {
  return `
  <div class="card-tile">
    <div class="card-header">
      <p class="card-title">Informacje o stadzie</p>
    </div>
    <hr class="card-separator" />
    <div class="card-details">
      <i class="card-image fa-solid fa-location-crosshairs"></i>
      <p>Nazwa stada: <span>${herd.name}</span></p>
    </div>
    <hr class="card-separator" />
    <div class="card-details">
      <i class="card-image fa-solid fa-earth-europe"></i>
      <p>Typ stada: <span>${herd.type}</span></p>
    </div>
    <hr class="card-separator" />
    <div class="card-details">
      <i class="card-image fa-solid fa-earth-europe"></i>
      <p>Liczba sztuk: <span>${herd.animals.length}</span></p>
    </div>
  </div>
`;
}

function createMachineOverviewHTML(machine) {
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
