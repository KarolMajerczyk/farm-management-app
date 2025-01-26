const pages = {
  fields: generateFieldItemsList,
  herds: generateHerdItemsList,
  machines: generateMachineItemsList,
};

export function renderItemsList(page, items) {
  document.querySelector("#items-list").innerHTML = pages[page](items);
}

function generateFieldItemsList(fields) {
  let html = "";

  fields.reverse().forEach((field) => {
    html += `
      <div class="card" data-id="${field.id}">
        <div class="card-section">
          <div class="card-row">
            <img class="card-icon" src="${field.image}" alt="" />
            <p>Nazwa: <span>${field.name}</span></p>
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/info.svg" alt="" />
            <p>Numer: <span>${field.number}</span></p>
          </div>
        </div>
         <button class="card-btn btn-delete">
            <img class="card-icon" src="./images/delete.svg" alt="" />
        </button>
      </div>`;
  });

  return html;
}

function generateHerdItemsList(herds) {
  let html = "";

  herds.reverse().forEach((herd) => {
    html += `
      <div class="card" data-id="${herd.id}">
        <div class="card-section">
          <div class="card-row">
            <img class="card-icon" src="${herd.image}" alt="" />
            <p>Nazwa: <span>${herd.name}</span></p>
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/info.svg" />
            <p>Liczba: <span>${herd.animals.length}</span></p>
          </div>
        </div>
        <button class="card-btn btn-delete">
          <img class="card-icon" src="./images/delete.svg" alt="" />
        </button>
      </div>`;
  });

  return html;
}

function generateMachineItemsList(machines) {
  let html = "";

  machines.reverse().forEach((machine) => {
    html += `
      <div class="card" data-id="${machine.id}"> 
        <div class="card-section">
          <div class="card-row">
            <img class="card-icon" src="${machine.image}" alt="" />
            <p>Nazwa: <span>${machine.name}</span></p>
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/plate.svg" />
            <p>Tablica: <span>${machine.plate}</span></p>
          </div>
        </div>
        <button class="card-btn btn-delete">
          <img class="card-icon" src="./images/delete.svg" alt="" />
        </button>
      </div>`;
  });

  return html;
}
