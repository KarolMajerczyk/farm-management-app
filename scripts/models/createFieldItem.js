import { convertWKTToGeoJSON } from "../utils/converter.js";

export function createFieldItem(data) {
  return {
    id: data.fieldData[1],
    name: "Nazwa pola",
    number: data.fieldData[6],
    area: 0.5,
    image: "./images/field.png",

    region: data.fieldData[5],
    voivodeship: data.fieldData[2],
    location: convertWKTToGeoJSON(data.fieldGeometry),

    plant: "Typ uprawy",
    seed: "Typ sadzonki",

    budget: [],
    todos: [],
  };
}
