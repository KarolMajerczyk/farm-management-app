export function showContentContainer() {
  document.querySelector("#content").classList.add("visible");
}

export function hideContentContainer() {
  document.querySelector("#content").classList.remove("visible");
}

const pages = {
  herds: renderAnimalCard,
  machines: renderFileCard,
};

export function renderContentList(page, items, mode, animalId) {
  let html = "";

  items.reverse().forEach((item) => {
    if (mode && item.id === animalId) {
      html += pages[page](item, true);
    } else {
      html += pages[page](item);
    }
  });

  document.querySelector("#content-list").innerHTML = html;
}

function renderAnimalCard(animal, editMode) {
  return `<div class="card" data-id="${animal.id}">   
    ${editMode ? `<form class="card-form" action="">` : ``}
      <div class="card-section">
      ${
        editMode
          ? `<div class="card-row">
              <img src="${animal.image}" class="card-cover ccc" />
            </div>`
          : ``
      }
        <div class="card-row">   
            ${
              editMode
                ? `<img class="card-icon" src="./images/image.svg" alt="">
                <input type="text" name="image" value="${animal.image}" />`
                : `<img src="${animal.image}" class="card-cover" />`
            }
          </div>
          <div class="card-row">
            <img class="card-icon" src="./images/signature.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="name" value="${animal.name}" required />`
                : `<p>Imię: <span>${animal.name}</span></p>`
            }
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/plate.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="plate" value="${animal.plate}" required />`
                : `<p>ID: <span>${animal.plate}</span></p>`
            }
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/info.svg" alt="">
            ${
              editMode
                ? `<input type="number" name="age" value="${animal.age}" required />`
                : `<p>Wiek: <span>${animal.age}</span></p>`
            }     
          </div>
          </div>
          ${
            editMode
              ? `<div class="card-btn-group active">
            <button class="card-btn btn-save" type="submit">
            <img class="card-icon" src="./images/check.svg" alt="">
            </button>
              <button class="card-btn btn-close" type="button">
                <img class="card-icon" src="./images/close.svg" alt="">
              </button>
              </div>`
              : `<div class="card-btn-group">
                <button class="card-btn btn-edit" type="submit">
                  <img class="card-icon" src="./images/edit.svg" alt="">
                </button>
                <button class="card-btn btn-delete" type="button">
                  <img class="card-icon" src="./images/delete.svg" alt="">
                </button>
              </div>`
          }
            
            ${editMode ? `</form>` : ``}
    </div>
          `;
}

function renderFileCard(file) {
  if (file.type.startsWith("image/")) {
    img.src = file.data;
  } else if (file.type.startsWith("video/")) {
    video.src = file.data;
    video.controls = true;
  } else if (file.type.startsWith("audio/")) {
    audio.src = file.data;
    audio.controls = true;
  } else {
    p.textContent = `File: ${file.name}`;
  }

  return `
    <div class="card">   
      <div class="card-section">
        <div class="card-row">
          <img class="card-icon" src="./images/grain.svg" alt="">  
        </div>
      </div>
      <div class="card-btn-group">
        <button class="card-btn btn-edit" type="submit">
          <img class="card-icon" src="./images/edit.svg" alt="">
        </button>
        <button class="card-btn btn-delete" type="button">
          <img class="card-icon" src="./images/delete.svg" alt="">
        </button>
      </div>
    </div>
  `;
}
