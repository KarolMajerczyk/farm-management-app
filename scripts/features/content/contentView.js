export function showContentContainer() {
  if (document.querySelector("#content")) {
    document.querySelector("#content").classList.add("visible");
  }
}

export function hideContentContainer() {
  if (document.querySelector("#content")) {
    document.querySelector("#content").classList.remove("visible");
  }
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
    return `
   <div class="file image-file">
   <div class="file-content">
    <a href="${file.data}" download="${file.name}">
      <img src="${file.data}" alt="${file.name}" style="max-width: 100%; height: auto;">
    </a>
    
    </div>
     <button class="btn-delete" type="button">
        <img class="card-icon" src="./images/delete.svg" alt="">
      </button>
    </div>`;
  }

  if (file.type.startsWith("video/")) {
    return `<div class="file video-file">
    <video controls style="max-width: 85%; height: 100%;">
              <source src="${file.data}" type="${file.type}">
              Your browser does not support the video tag.
            </video>
            <button class="btn-delete" type="button">
        <img class="card-icon" src="./images/delete.svg" alt="">
      </button>
            </div>`;
  }

  if (file.type.startsWith("audio/")) {
    return `
    <div class="file audio-file">
     <div class="file-content">
      <img class="file-icon" src="./images/audio.svg" alt="">
      ${file.name}

    <audio controls class="file audio-file">
              <source src="${file.data}" type="${file.type}">
              Your browser does not support the audio tag.
            </audio>
            </div>

            <button class="btn-delete" type="button">
        <img class="card-icon" src="./images/delete.svg" alt="">
      </button>
            </div>`;
  }

  return `
    <div class="file text-file">
    <div class="file-content">
    <a href="${file.data}" download="${file.name}">
      <img class="file-icon" src="./images/text-file.svg" alt="">
      </a>
      ${file.name}
      </div>
      <button class="btn-delete" type="button">
        <img src="./images/delete.svg" alt="">
      </button>
    </div>`;
}
