import { DOM } from "../dom/domElements.js";

const generator = {
  fields: generateFieldCardsHTML,
  herds: generateHerdCardsHTML,
  machines: generateMachineCardsHTML,
};

export function renderCardsList(obj, objType) {
  DOM.cardsList.innerHTML = generator[objType](obj);
}

function generateFieldCardsHTML(fields) {
  let html = "";

  fields.reverse().forEach((field) => {
    html += `
    <div class="card-tile" data-id="${field.id}" data-type="fields">
      <button data-action="delete">
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

function generateHerdCardsHTML(herds) {
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

function generateMachineCardsHTML(machines) {
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
