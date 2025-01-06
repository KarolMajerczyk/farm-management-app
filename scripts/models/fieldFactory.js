import { convertWKTToGeoJSON } from "../utils/converter.js";

export function createField(id, geojson, data) {

  return {
    id: id,
    number: data[6].replace("\n", ""),
    area: 2.5,
    voivodeship: data[2],
    region: data[5],
    location: convertWKTToGeoJSON(geojson),
  };
}
