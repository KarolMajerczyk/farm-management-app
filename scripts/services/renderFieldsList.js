import { DOM } from "../dom/domElements.js";

import { food } from "../db/foodDB.js";

export async function renderFieldsList(fields) {
  let html = "";

  fields = populateFieldsWithRandomCrops(fields);

  fields.reverse().forEach((field) => {
    html += `<div class="card-tile field" data-id="${field.id}" data-type="field">
              <div class="card-header">
                <p class="card-image">${field.crop.image}</p>
                <p>${field.crop.name}</p>
              </div>
              <hr class="card-separator" />
              <div class="card-details">
                <i class="card-image fa-solid fa-location-crosshairs"></i>
                <p>Działka nr. <span>${field.number}</span></p>
              </div>
            </div>
            `;
  });

  DOM.cardsList.innerHTML = html;
}

function populateFieldsWithRandomCrops(fields) {
  fields.forEach((field) => {
    const randomFoodType = getRandomElementFromArray(food);
    const randomCrop = getRandomElementFromObject(randomFoodType);
    const randomVariety = getRandomElementFromObject(randomCrop.varieties);

    field.crop = {
      name: randomCrop.name,
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
