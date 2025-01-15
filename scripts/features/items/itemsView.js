const listTypes = {
  fields: generateFieldItemsList,
  herds: generateHerdItemsList,
  machines: generateMachineItemsList,
};

export function renderItemsList(type, data) {
  document.querySelector("#items-list").innerHTML = listTypes[type](data);
}

function generateFieldItemsList(fields) {
  let html = "";

  fields.reverse().forEach((field) => {
    html += `
    <div class="card-tile" data-id="${field.id}" data-type="fields">
      <button class="delete">
        <i class="card-image fa-solid fa-trash"></i>
      </button>
      <div class="card-content">
        <div class="card-header">
          <p class="card-image"><img src="${field.image}"></p>
          <p>${field.name}</p>
        </div>
        <hr class="card-separator" />
        <div class="card-details">
          <i class="card-image fa-solid fa-location-crosshairs"></i>
          <p>Działka nr. <span>${field.number}</span></p>
        </div>  
      </div>        
    </div>            `;
  });

  return html;
}

function generateHerdItemsList(herds) {
  let html = "";

  herds.reverse().forEach((herd) => {
    html += `<div class="card-tile" data-id="${herd.id}" data-type="herds">
    <button data-action="delete">
        <i class="card-image fa-solid fa-trash"></i>
      </button>
      <div class="card-content">
              <div class="card-header">
                <img src="${herd.image}" />
                <p>${herd.name}</p>
              </div>
              <hr class="card-separator" />
              <div class="card-details">
                <img src="./images/count.png" />
                <p>Liczba sztuk: <span>${herd.animals.length}</span></p>
              </div>
            </div>
            </div> 
            `;
  });

  return html;
}

function generateMachineItemsList(machines) {
  let html = "";

  machines.reverse().forEach((machine) => {
    html += `<div class="card-tile" data-id="${machine.id}" data-type="machines">
    <button data-action="delete">
        <i class="card-image fa-solid fa-trash"></i>
      </button>
      <div class="card-content">          
    <div class="card-header">
                <img src="${machine.image}" />
                <p>${machine.name}</p>
              </div>
              <hr class="card-separator" />
              <div class="card-details">
                <img src="./images/license-plate.png" />
                <p>Tablica nr. <span>${machine.plate}</span></p>
              </div>
            </div>
            </div>
            `;
  });

  return html;
}

export function toggleItemCardActive(el) {
  if (document.querySelector(".card-tile.active")) {
    document.querySelector(".card-tile.active").classList.remove("active");
  }

  if (!el) {
    el = document.querySelectorAll(".card-tile")[0];
  }

  console.log(el);

  el.classList.add("active");
}

export function showItemsListAddButton() {
  document.querySelector("#add-item").classList.add("visible");
}

export function hideItemsListAddButton() {
  document.querySelector("#add-item").classList.remove("visible");
}
