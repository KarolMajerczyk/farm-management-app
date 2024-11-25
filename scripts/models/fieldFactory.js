import { convertWKTToGeoJSON } from "../utils/converter.js";

export function createField(id, geojson, data) {
  // return {
  //   id,
  //   location: convertWKTToGeoJSON(geojson),
  //   voivodeship: data[2],
  //   county: data[3],
  //   commune: data[4],
  //   region: data[5],
  //   parcel: data[6].replace("\n", ""),
  // };

  return {
    id: id,
    number: 4994,
    area: 2.5,
    location: convertWKTToGeoJSON(geojson),
  };
}
