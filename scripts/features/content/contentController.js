export function initContentController() {}

export function renderContentList(obj, objType) {
  let html = "";

  switch (objType) {
    case "herds":
      html = generateAnimalCardsHTML(obj.animals);
      break;
    case "machines":
      html = generateFileCardsHTML(obj.files);
      break;
  }

  DOM.contentList.innerHTML = html;
}

function generateAnimalCardsHTML(animals) {
  let html = "";

  animals.reverse().forEach((animal) => {
    html += `<div class="card-tile" data-id="${animal.id}">
    <button>
        <i class="card-image fa-solid fa-trash"></i>
      </button>
      <div class="card-content">

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
    <button>
        <i class="card-image fa-solid fa-trash"></i>
      </button>
      <div class="card-content">

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
            </div>
            `;
  });

  return html;
}
