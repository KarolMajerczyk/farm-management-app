import { DOM } from "../dom/domElements.js";

export function renderContentList(obj, objType) {
  let html = "";

  switch (objType) {
    case "animal":
      html = generateAnimalCardsHTML(obj);
      break;
    case "file":
      html = generateFileCardsHTML(obj);
      break;
  }

  DOM.contentList.innerHTML = html;
}

function generateAnimalCardsHTML(animals) {
  let html = "";

  animals.reverse().forEach((animal) => {
    html += `<div class="card-tile" data-id="${animal.id}">
              <div class="card-header">
                <img src="./images/krowa1.jpeg" class="card-photo" />
              </div>
              <hr class="card-separator" />
              <div class="card-details">
                <i class="card-image fa-solid fa-location-crosshairs"></i>
                <p>Nazwa: <span>${animal.name}</span></p>
              </div>
              <hr class="card-separator" />
              <div class="card-details">
                <i class="card-image fa-solid fa-location-crosshairs"></i>
                <p>ID nr. <span>${animal.plate}</span></p>
              </div>
              <hr class="card-separator" />
              <div class="card-details">
                <i class="card-image fa-solid fa-location-crosshairs"></i>
                <p>Wiek: <span>${animal.age}</span></p>
              </div>
              <hr class="card-separator" />
              <div class="card-details">
                <i class="card-image fa-solid fa-location-crosshairs"></i>
                <p>Rasa: <span>${animal.breed}</span></p>
              </div>
            </div>
        `;
  });

  return html;
}

function generateFileCardsHTML(files) {
  let html = "";

  files.reverse().forEach((file) => {
    html += `<div class="card-tile" data-id="${file.id}">
              <div class="card-header">
                <img src="./images/silnik.jpg" class="card-photo" />
              </div>
              <hr class="card-separator" />
              <div class="card-details">
                <i class="card-image fa-solid fa-location-crosshairs"></i>
                <p>Nazwa: <span>${file.name}</span></p>
              </div>
              <hr class="card-separator" />
              <div class="card-details">
                <i class="card-image fa-solid fa-location-crosshairs"></i>
                <p>Data: <span>${file.date}</span></p>
              </div>
            </div>
            `;
  });

  return html;
}
