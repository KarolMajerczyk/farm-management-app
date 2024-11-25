import { DOM } from "../dom/domElements.js";

export function renderFieldOverviewSection(field) {
  console.log("Overview");

  DOM.detailsSection.innerHTML = `
    <p>TERYT: ${field.id}</p>
    <p>Numer działki: ${field.number}</p>
    <p>Powierzchnia: ${field.area} ha</p>
    <p>Ikona: ${field.crop.image}</p>
    <p>Nazwa: ${field.crop.name}</p>
    <p>Pora zbiorów: ${field.crop.variety.harvestSeason}</p>
    <p>Rozmiar: ${field.crop.variety.size}</p>
    <p>Słodkość: ${field.crop.variety.sweetness}</p>
    <p>Tekstura: ${field.crop.variety.texture}</p>
  `;
}
