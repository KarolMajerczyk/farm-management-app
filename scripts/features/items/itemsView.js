const pages = {
  fields: renderFieldCard,
  herds: renderHerdCard,
  machines: renderMachineCard,
};

export function renderItemsList(page, items) {
  let html = "";

  items.reverse().forEach((item) => {
    html += pages[page](item);
  });

  document.querySelector("#items-list").innerHTML = html;
}

function renderFieldCard(field) {
  return `
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
}

function renderHerdCard(herd) {
  return `
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
}

function renderMachineCard(machine) {
  return `
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
}
