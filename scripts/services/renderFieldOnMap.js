import { map } from "../map/map.js";

let activeLayer;

export const renderFieldOnMap = (polygon) => {
  activeLayer = L.geoJSON(polygon).addTo(map);
};

export const getActiveLayer = () => {
  return activeLayer;
};

export function removeFieldFromMap(layer) {
  map.removeLayer(layer);
}

export function resetActiveLayer() {
  activeLayer = null;
}

export const isTheSameLayer = (layer, polygon) => {
  return (
    JSON.stringify(layer.toGeoJSON()) ===
    JSON.stringify(L.geoJSON(polygon).toGeoJSON())
  );
};
