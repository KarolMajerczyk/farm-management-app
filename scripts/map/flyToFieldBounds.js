import { map } from "./map.js";

export function flyToFieldBounds(geometry) {
  const fieldLayer = L.geoJSON(geometry);

  map.flyToBounds(fieldLayer.getBounds(), {
    duration: 2,
  });
}
