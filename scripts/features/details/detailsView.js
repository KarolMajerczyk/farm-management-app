const pages = {
  fields: renderFieldOverview,
  herds: renderHerdOverview,
  machines: renderMachineOverview,
};

export function renderOverviewSection(page, item, income, expense, todosLeft) {
  let html = "";

  html += pages[page](item);
  html += renderBudgetOverview(income, expense);
  html += renderTodosOverview(todosLeft);

  document.querySelector("#overview").innerHTML = html;
}

function renderFieldOverview(field) {
  return `
    <div class="card">
      <button class="card-btn btn-edit">
        <img class="card-icon" src="./images/edit.svg" alt="">
      </button>
      <div class="card-section">
        <div class="card-header">Dane o działce</div>
        <hr class="card-line" />
        <div class="card-row">
          <img class="card-icon" src="./images/signature.svg" alt="">
          <p>Nazwa: <span>${field.name}</span></p>
        </div>
        <hr class="card-line" />
        <div class="card-row">
          <img class="card-icon" src="./images/plant.svg" alt="">
          <p>Uprawa: <span>${field.plant}</span></p>
        </div>
        <hr class="card-line" />
        <div class="card-row">
          <img class="card-icon" src="./images/grain.svg" alt="">
          <p>Gatunek: <span>${field.seed}</span></p>
        </div>
        <hr class="card-line" />
        <div class="card-row">
          <img class="card-icon" src="./images/info.svg" alt="">
          <p>Numer: <span>${field.number}</span></p>
        </div>
        <hr class="card-line" />
        <div class="card-row">
          <img class="card-icon" src="./images/city.svg" alt="">
          <p>Miejscowość: <span>${field.region}</span></p>
        </div>
        <hr class="card-line" />
        <div class="card-row">
          <img class="card-icon" src="./images/size.svg" alt="">
          <p>Rozmiar: <span>${field.area} ha</span></p>
        </div>
      </div>
    </div>
`;
}

function renderHerdOverview(herd) {
  return `
    <div class="card-tile">
    <button>
          <i class="card-image fa-solid fa-pen"></i>
        </button>
        <div class="card-content">

      <div class="card-header">
        <p class="card-title">Informacje</p>
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
    </div>
  `;
}

function renderMachineOverview(machine) {
  return `
    <div class="card-tile">
    <button>
          <i class="card-image fa-solid fa-pen"></i>
        </button>
        <div class="card-content">

      <div class="card-header">
        <p class="card-title">Informacje</p>
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
    </div>
  `;
}

export function renderBudgetOverview(income, expense) {
  return `
    <div class="card">
      <div class="card-section">
        <div class="card-header">Budżet</div>
        <hr class="card-line" />
        <div class="card-row">
          <img class="card-icon" src="./images/plus.svg" alt="">
          <p>Przychody: <span>${income} zł</span></p>
        </div>
        <hr class="card-line" />
        <div class="card-row">
          <img class="card-icon" src="./images/minus.svg" alt="">
          <p>Wydatki: <span>${expense} zł</span></p>
        </div>
        <hr class="card-line" />
        <div class="card-row">
          <img class="card-icon" src="./images/exposure.svg" alt="">
          <p>Saldo: <span>${income + expense} zł</span></p>
        </div>
      </div>
    </div>
  `;
}

export function renderTodosOverview(todosLeft) {
  return `
    <div class="card">
      <div class="card-section">
        <div class="card-header">Lista zadań</div>
        <hr class="card-line" />
        <div class="card-row">
          <img class="card-icon" src="./images/info.svg" alt="">
          <p>Pozostało: <span>${todosLeft}</span> zadań</p>
        </div>
      </div>
    </div>
    `;
}

export function renderBudgetSection(budget) {
  // Tudaj można dać init filter
  let html = "";

  budget.forEach((item) => {
    html += renderBudgetItem(item);
  });

  document.querySelector("#budget-list").innerHTML = html;
}

export const renderBudgetItem = (item) => {
  return `
      <li class="list-item" data-id="${item.id}">

      <i class="fa-solid fa-sack-dollar item-image ${
        item.amount > 0 ? "income" : "expense"
      }"></i>
        <div class="item-content">
            <p>${item.description}</p>
            <p>Kwota: <span>${item.amount} zł</span></p>
        </div>
         <button class="delete">
        <i class="card-image fa-solid fa-trash"></i>
      </button>
      </li>
    `;
};

export function renderTodosSection(todos) {
  // Tudaj można dać init date
  let html = "";

  todos.forEach((item) => {
    html += renderTodosItem(item);
  });

  document.querySelector("#todos-list").innerHTML = html;
}

export const renderTodosItem = (item) => {
  return `
        <li class="list-item" data-id="${item.id}">

            <input type="checkbox" ${item.status === "done" ? "checked" : ""} />
            <p>${item.description}</p>
             <button class="delete">
        <i class="card-image fa-solid fa-trash"></i>
      </button>
        </li>
      `;
};

export function prepareDetailsSection(title, section) {
  document.querySelector("#section-title").innerText = title;

  document
    .querySelector("#details section.visible")
    .classList.remove("visible");

  document.querySelector("#side-menu .active").classList.remove("active");

  document.querySelector(`#details #${section}`).classList.add("visible");

  document
    .querySelector(`#side-menu [data-section="${section}"]`)
    .classList.add("active");
}
