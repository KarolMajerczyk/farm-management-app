import { DOM } from "../dom/domElements.js";

import { getFields } from "../api/getFields.js";
import { food } from "../db/foodDB.js";

export async function renderFieldsList() {
  let html = "";

  let fields = await getFields();
  fields = populateFieldsWithRandomCrops(fields);

  fields.forEach((field) => {
    html += `<div class="card-tile field" data-id="${field.id}">
              <div class="card-header">
                <p class="card-image">${field.crop.image}</p>
                <p>${field.crop.name}</p>
              </div>
              <hr class="card-separator" />
              <div class="card-details">
                <img src="../images/location.png" />
                <p>Działka nr. <span>${field.number}</span></p>
              </div>
            </div>
            `;
  });

  DOM.fieldsList.innerHTML = html;
}

function populateFieldsWithRandomCrops(fields) {
  fields.forEach((field) => {
    const randomFoodType = getRandomElementFromArray(food);
    const randomCrop = getRandomElementFromObject(randomFoodType);
    const randomVariety = getRandomElementFromObject(randomCrop.varieties);

    field.crop = {
      name: `${randomCrop.name} ${randomVariety.name}`,
      image: randomCrop.image,
      variety: randomVariety,
    };
  });

  return fields;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomElementFromArray(arr) {
  return arr[getRandomNumber(arr.length)];
}

function getRandomElementFromObject(obj) {
  const keys = Object.keys(obj);

  const randomKey = keys[getRandomNumber(keys.length)];

  return obj[randomKey];
}
