import { convertWKTToGeoJSON } from "../utils/converter.js";

export function createField(id, geojson, data) {
  return {
    // DETAILS
    id: data[1],
    name: "Nazwa pola",
    number: data[6],
    area: 0.5,
    image: "./images/field.png",

    // LOCATION
    region: data[5],
    voivodeship: data[2],
    location: convertWKTToGeoJSON(geojson),

    // SEED
    seed: "Typ sadzonki",

    // BUDGET
    budget: [],

    // TODOS
    todos: [],
  };
}
