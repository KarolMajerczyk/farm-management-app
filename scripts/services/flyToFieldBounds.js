import { map } from "../events/handleMapInitialization.js";

export const flyToFieldBounds = (polygon) => {
  const fieldLayer = L.geoJSON(polygon);

  map.flyToBounds(fieldLayer.getBounds(), {
    duration: 2,
  });
};
