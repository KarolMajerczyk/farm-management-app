import { DOM } from "../dom/domElements.js";

export function renderFieldOverviewSection(field) {
  DOM.detailsPanelHeading.innerText = "Przegląd";

  const html = `
    <div class="card-tile">
      <div class="card-header">
        <p class="card-title">Informacje o działce</p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-location-crosshairs"></i>
        <p>Numer działki: <span>${field.number}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-earth-europe"></i>
        <p>Miejscowość: <span>${field.region}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-earth-europe"></i>
        <p>Województwo: <span>${field.voivodeship}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-expand"></i>
        <p>Rozmiar: <span>${field.area} ha</span></p>
      </div>
    </div>

    <div class="card-tile">
      <div class="card-header">
        <p class="card-title">Informacje o uprawie</p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <p class="card-image">${field.crop.image}</p>
        <p>Rodzaj uprawy <span>${field.crop.name}</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-circle-info"></i>
        <p>Gatunek <span>${field.crop.variety.name}</span></p>
      </div>
    </div>

    <div class="card-tile">
      <div class="card-header">
        <p class="card-title">Budżet</p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-plus"></i>
        <p>Przychody: <span>+ 16 000 zł</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-minus"></i>
        <p>Wydatki: <span>- 5 500 zł</span></p>
      </div>
      <hr class="card-separator" />
      <div class="card-details">
        <i class="card-image fa-solid fa-plus-minus"></i>
        <p>Zysk: <span>+ 10 500 zł</span></p>
      </div>
    </div>

    <div class="card-tile">
      <div class="card-details">
        <i class="card-image fa-solid fa-list-check"></i>
        <p>Zadania do wykonania: <span>7</span></p>
      </div>
    </div>
  `;

  DOM.fieldOverviewSection.innerHTML = html;
}
