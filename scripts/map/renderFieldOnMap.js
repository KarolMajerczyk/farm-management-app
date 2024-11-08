import { map } from "./map.js";

export function renderFieldOnMap(geojson) {
  L.geoJSON(geojson).addTo(map);
}
