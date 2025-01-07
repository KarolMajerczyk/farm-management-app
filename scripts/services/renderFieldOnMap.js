import { map } from "../map/handleLeafletMapInitialization.js";

let activeLayer;

export const renderFieldOnMap = (location) => {
  activeLayer = L.geoJSON(location).addTo(map);
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

export const isTheSameLayer = (layer, location) => {
  return (
    JSON.stringify(layer.toGeoJSON()) ===
    JSON.stringify(L.geoJSON(location).toGeoJSON())
  );
};
