import { map } from "../events/map/handleMapLoad.js";

let activeLayer;

const mapLayers = [];

export function saveMapLayer(id, layer) {
  mapLayers.push({ id, layer });
}

export function getMapLayer(id) {
  return mapLayers.find((field) => field.id === id).layer;
}

export function removeMapLayer(id) {
  const layerInd = mapLayers.findIndex((field) => field.id === id);
  mapLayers.splice(layerInd, 1);
}

export const renderFieldOnMap = (location) => {
  activeLayer = L.geoJSON(location).addTo(map);
  return activeLayer;
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
