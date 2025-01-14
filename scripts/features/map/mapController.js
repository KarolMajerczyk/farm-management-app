import {
  map,
  bounds,
  setMapLayers,
  getMapLayer,
  setActiveLayer,
  getActiveLayer,
  addMapLayer,
} from "./mapModel.js";

import { getFieldData } from "../../shared/getFieldData.js";

import {
  removeFieldFromMap,
  renderFieldOnMap,
  setMapSearchFormValue,
} from "./mapView.js";
import {
  convertEPSG4326ToEPSG2180,
  convertWKTToGeoJSON,
} from "../../utils/converter.js";

import { eventBus } from "../../shared/eventBus.js";

export function initMapController() {
  eventBus.on("fieldsListLoaded", (fields) => {
    handleMapLoad(fields);
  });

  map.on("drag", handleMapDrag);
  map.on("click", (e) => handleMapClick(e));

  document
    .querySelector(".map-search")
    .addEventListener("click", (e) => handleMapSearchFormSubmit(e));

  eventBus.on("fieldCardClicked", ({ id, location }) => {
    const polygon = convertWKTToGeoJSON(location);

    flyToFieldBounds(polygon);

    const activeLayer = getActiveLayer();

    if (activeLayer) {
      removeFieldFromMap(map, activeLayer);
    }
  });

  eventBus.on("newFieldAdded", ({ id, location }) => {
    const polygon = convertWKTToGeoJSON(location);
    removeFieldFromMap(map, getActiveLayer());

    const layer = renderFieldOnMap(map, polygon);
    addMapLayer(id, layer);
  });
}

async function handleMapLoad(fields) {
  const layers = [];

  fields.forEach((field) => {
    const polygon = convertWKTToGeoJSON(field.location);
    const fieldLayer = renderFieldOnMap(map, polygon);
    layers.push({ id: field.id, layer: fieldLayer });
  });

  setMapLayers(layers);
}

function handleMapDrag() {
  map.panInsideBounds(bounds, { animate: false });
}

async function handleMapClick(e) {
  const epsg4326Coord = [e.latlng.lng, e.latlng.lat];
  const epsg2180Coord = convertEPSG4326ToEPSG2180(epsg4326Coord);

  const { id, location } = await getFieldData({
    coord: epsg2180Coord,
  });

  setMapSearchFormValue(id);

  handleMapFieldsRender(id, location);
}

async function handleMapSearchFormSubmit(e) {
  e.preventDefault();

  if (e.target.id !== "goto-field") {
    return;
  }

  const terytValue = document.querySelector("#teryt-input").value;

  const { location } = await getFieldData({
    id: terytValue,
  });

  handleMapFieldsRender(terytValue, location);
}

function handleMapFieldsRender(id, location) {
  const polygon = convertWKTToGeoJSON(location);

  flyToFieldBounds(polygon);

  const activeLayer = getActiveLayer();

  if (activeLayer) {
    removeFieldFromMap(map, activeLayer);
  }

  if (getMapLayer(id)) {
    eventBus.emit("fieldPolygonClicked", id);

    return;
  }

  const layer = renderFieldOnMap(map, polygon);
  setActiveLayer(layer);
}

export const flyToFieldBounds = (polygon) => {
  const layer = L.geoJSON(polygon);

  map.flyToBounds(layer.getBounds(), {
    duration: 2,
  });
};
