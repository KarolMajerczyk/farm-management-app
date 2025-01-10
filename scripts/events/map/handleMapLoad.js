import { getItems } from "../../db/db.js";

import {
  renderFieldOnMap,
  resetActiveLayer,
  saveMapLayer,
} from "../../services/renderFieldOnMap.js";

let map = null;
let bounds = null;

export async function handleMapLoad() {
  map = L.map("map").setView([51.919, 19.134], 7);

  bounds = [
    [49.0, 14.0],
    [55.0, 24.0],
  ];

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 19,
      minZoom: 7,
    }
  ).addTo(map);

  map.setMaxBounds(bounds);

  const fields = await getItems("fields");

  fields.forEach((field) => {
    const fieldLayer = renderFieldOnMap(field.location);
    saveMapLayer(field.id, fieldLayer);
  });

  resetActiveLayer();
}

export { map, bounds };

// attribution:
//   "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 20,
//   minZoom: 7,
//   // attribution:
//   //   '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);
