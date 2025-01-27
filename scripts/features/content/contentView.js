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

export function renderContentList(page, items) {
  let html = "";

  items.reverse().forEach((item) => {
    console.log(typeof item);
    html += pages[page](item);
  });

  document.querySelector("#content-list").innerHTML = html;
}

function renderAnimalCard(animal, editMode) {
  return `<div class="card">   
    ${editMode ? `<form class="card-form" action="">` : ``}
      <div class="card-section">
        <div class="card-row">
            ${
              editMode
                ? `<input type="file" name="name" value="${animal.image}" required />`
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
            <img class="card-icon" src="./images/plant.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="plant" value="${animal.plate}" required />`
                : `<p>ID: <span>${animal.plate}</span></p>`
            }
          </div>
          <hr class="card-line" />
          <div class="card-row">
            <img class="card-icon" src="./images/grain.svg" alt="">
            ${
              editMode
                ? `<input type="text" name="seed" value="${animal.age}" required />`
                : `<p>Wiek: <span>${animal.age}</span></p>`
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
