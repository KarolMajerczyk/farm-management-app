const pages = {
  fields: renderFieldOverview,
  herds: renderHerdOverview,
  machines: renderMachineOverview,
};

export function renderOverviewSection(
  page,
  item,
  income,
  expense,
  todosLeft,
  editMode
) {
  let html = "";

  if (editMode) {
    html += pages[page](item, true);
  } else {
    html += pages[page](item);
  }

  html += renderBudgetOverview(income, expense);
  html += renderTodosOverview(todosLeft);

  document.querySelector("#overview").innerHTML = html;
}

function renderFieldOverview(field, editMode) {
  return `
    <div class="card">   
    ${editMode ? `<form class="card-form" action="">` : ``}
      <div class="card-section">
        <div class="card-header">Dane o działce</div>
        <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/signature.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="name" value="${field.name}" required />`
                : `<p>Nazwa: <span>${field.name}</span></p>`
            }
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/plant.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="plant" value="${field.plant}" required />`
                : `<p>Uprawa: <span>${field.plant}</span></p>`
            }
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/grain.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="seed" value="${field.seed}" required />`
                : `<p>Gatunek: <span>${field.seed}</span></p>`
            }     
          </div>
          </div>
          ${
            editMode
              ? `<div class="card-btn-group">
            <button class="card-btn btn-save" type="submit">
            <img class="card-icon" src="./images/check.svg" alt="">
            </button>
              <button class="card-btn btn-close" type="button">
                <img class="card-icon" src="./images/close.svg" alt="">
              </button>
              </div>`
              : `<button class="card-btn btn-edit">
              <img class="card-icon" src="./images/edit.svg" alt="">
              </button>`
          }
            
            ${editMode ? `</form>` : ``}
    </div>

    <div class="card">   
      <div class="card-section">
        <div class="card-header">Dane o działce</div>
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

function renderHerdOverview(herd, editMode) {
  return `
    <div class="card">   
    ${editMode ? `<form class="card-form" action="">` : ``}
      <div class="card-section">
        <div class="card-header">Dane o stadzie</div>
        <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/signature.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="name" value="${herd.name}" required />`
                : `<p>Nazwa: <span>${herd.name}</span></p>`
            }
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/pet.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="animal" value="${herd.animal}" required />`
                : `<p>Zwierzę: <span>${herd.animal}</span></p>`
            }
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/info.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="species" value="${herd.species}" required />`
                : `<p>Gatunek: <span>${herd.species}</span></p>`
            }     
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/info.svg" alt="">
            <p>Ilość: <span>${herd.animals.length}</span></p>   
          </div>
          </div>
          ${
            editMode
              ? `<div class="card-btn-group">
            <button class="card-btn btn-save" type="submit">
            <img class="card-icon" src="./images/check.svg" alt="">
            </button>
              <button class="card-btn btn-close" type="button">
                <img class="card-icon" src="./images/close.svg" alt="">
              </button>
              </div>`
              : `<button class="card-btn btn-edit">
              <img class="card-icon" src="./images/edit.svg" alt="">
              </button>`
          }
            
            ${editMode ? `</form>` : ``}
    </div>
  `;
}

function renderMachineOverview(machine, editMode) {
  return `
    <div class="card">   
    ${editMode ? `<form class="card-form" action="">` : ``}
      <div class="card-section">
        <div class="card-header">Dane o maszynie</div>
        <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/signature.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="name" value="${machine.name}" required />`
                : `<p>Nazwa: <span>${machine.name}</span></p>`
            }
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/info.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="type" value="${machine.type}" required />`
                : `<p>Typ: <span>${machine.type}</span></p>`
            }
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/plate.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="plate" value="${machine.plate}" required />`
                : `<p>Tablica: <span>${machine.plate}</span></p>`
            }     
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/info.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="hoursUsed" value="${machine.hoursUsed}" required />`
                : `<p>Motogodziny: <span>${machine.hoursUsed}</span> mth</p>`
            }     
          </div>
          </div>
          ${
            editMode
              ? `<div class="card-btn-group">
            <button class="card-btn btn-save" type="submit">
            <img class="card-icon" src="./images/check.svg" alt="">
            </button>
              <button class="card-btn btn-close" type="button">
                <img class="card-icon" src="./images/close.svg" alt="">
              </button>
              </div>`
              : `<button class="card-btn btn-edit">
              <img class="card-icon" src="./images/edit.svg" alt="">
              </button>`
          }
            
            ${editMode ? `</form>` : ``}
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
  let html = "";

  budget.reverse().forEach((item) => {
    html += renderBudgetItem(item);
  });

  document.querySelector("#budget-list").innerHTML = html;
}

export const renderBudgetItem = (item) => {
  return `
    <div class="card" data-id="${item.id}">
  
      <div class="card-section">
        <div class="card-row">
          <img class="card-icon" src="./images/signature.svg" alt="">
          <p>${item.description}</p>
        </div>
        <hr class="card-line" />
        <div class="card-row">
          <img class="card-icon" src="./images/${
            item.amount > 0 ? "income" : "expense"
          }.svg" alt="">
          <p><span>${item.amount} zł</span></p>
        </div>
      </div>
      <button class="card-btn btn-delete">
        <img class="card-icon" src="./images/delete.svg" alt="">
      </button>
    </div>
  `;
};

export function renderTodosSection(todos) {
  let html = "";

  todos.forEach((item) => {
    html += renderTodosItem(item);
  });

  document.querySelector("#todos-list").innerHTML = html;
}

export const renderTodosItem = (item) => {
  return `
    <div class="card" data-id="${item.id}">
      <div class="card-section">
        <div class="card-row">
          <input type="checkbox" ${item.status === "done" ? "checked" : ""} />
          <p>${item.description}</p>
        </div>
      </div>
      <button class="card-btn btn-delete">
        <img class="card-icon" src="./images/delete.svg" alt="">
      </button>
    </div>
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

export function showDetailsPanel() {
  document.querySelector("#details").classList.add("visible");
}

export function hideDetailsPanel() {
  document.querySelector("#details").classList.remove("visible");
}
