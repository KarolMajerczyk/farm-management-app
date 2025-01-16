import { eventBus } from "../../shared/eventBus.js";
import { generateRandomId } from "../../utils/generateRandomId.js";
import { getActiveObject, setActiveObject } from "./contentModel.js";
import { hideContentListAddButton, renderContentItems } from "./contentView.js";
import { handleContentItemAdd } from "./handlers/handleContentItemAdd.js";
import { handleContentListRender } from "./handlers/handleContentListRender.js";

export function initContentController() {
  eventBus.on("itemCardSelected", (obj) => {
    if (document.querySelector("#items-list").dataset.type !== "fields") {
      setActiveObject(obj);

      const type = document.querySelector(".content").dataset.type;
      document.querySelector(".content .items-list").innerHTML = "";

      if (type === "animals") {
        handleContentListRender(obj);
      }

      if (type === "files" && obj.files.length > 0) {
        displayFiles(obj.files);
      }
    }
  });

  eventBus.on("itemCardUnselected", () => {
    hideContentListAddButton();
    if (document.querySelector(".content")) {
      document.querySelector(".content .items-list").innerHTML = "";
    }
  });

  if (document.querySelector(".content #add-item")) {
    document
      .querySelector(".content #add-item")
      .addEventListener("click", (e) => {
        handleContentItemAdd(e);
      });
  }

  if (document.querySelector(".content")) {
    document.querySelector(".content").addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    document.querySelector(".content").addEventListener("drop", (e) => {
      console.log(e);
      e.preventDefault();
      const obj = getActiveObject();

      const files = Array.from(e.dataTransfer.files);

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const fileData = {
            id: generateRandomId(),
            name: file.name,
            type: file.type,
            data: reader.result,
          };

          obj.files.push(fileData);
          eventBus.emit("itemUpdated", obj);

          displayFiles(obj.files);
        };
        reader.readAsDataURL(file);
      });
    });
  }
}

function displayFiles(files) {
  document.querySelector(".content .items-list").innerHTML = ""; // Czyszczenie listy

  files.forEach((file) => {
    const div = document.createElement("div");
    div.classList.add("file-item");

    if (file.type.startsWith("image/")) {
      const img = document.createElement("img");
      img.src = file.data;
      div.appendChild(img);
    } else if (file.type.startsWith("video/")) {
      const video = document.createElement("video");
      video.src = file.data;
      video.controls = true;
      div.appendChild(video);
    } else if (file.type.startsWith("audio/")) {
      const audio = document.createElement("audio");
      audio.src = file.data;
      audio.controls = true;
      div.appendChild(audio);
    } else {
      const p = document.createElement("p");
      p.textContent = `File: ${file.name}`;
      div.appendChild(p);
    }

    document.querySelector(".content .items-list").appendChild(div);
  });
}

// // Tworzymy prosty element, który wygląda jak plik tekstowy
// const filePreview = document.createElement("div");
// filePreview.classList.add("text-file-preview");
// filePreview.textContent = `Plik tekstowy: ${file.name}`;

// // Możemy również wyświetlić część tekstu, jeśli chcemy podgląd
// const reader = new FileReader();
// reader.onload = function (event) {
//   const textPreview = document.createElement("pre");
//   const textContent = event.target.result.slice(0, 200); // Pobranie tylko pierwszych 200 znaków
//   textPreview.textContent = textContent;
//   filePreview.appendChild(textPreview);
// };

// reader.readAsText(file);
// div.appendChild(filePreview);
