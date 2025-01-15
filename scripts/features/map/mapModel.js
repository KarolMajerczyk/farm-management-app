const mapLayers = [];
let activeLayer;

export function createMapObject() {
  if (!document.querySelector("#map")) {
    return { map: null, bounds: null };
  }

  const map = L.map("map").setView([51.919, 19.134], 7);

  const bounds = [
    [49.0, 14.0],
    [55.0, 24.0],
  ];

  map.setMaxBounds(bounds);

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 19,
      minZoom: 7,
    }
  ).addTo(map);

  return { map, bounds };
}

export const { map, bounds } = createMapObject();

export const setMapLayers = (layers) =>
  mapLayers.splice(0, mapLayers.length, ...layers);

export const addMapLayer = (id, layer) => mapLayers.push({ id, layer });

export const getMapLayer = (id) => {
  return mapLayers.find((field) => field.id === id);
};

export function removeMapLayer(id) {
  const layerInd = mapLayers.findIndex((field) => field.id === id);
  return mapLayers.splice(layerInd, 1)[0].layer;
}

export const getActiveLayer = () => activeLayer;
export const setActiveLayer = (layer) => (activeLayer = layer);
