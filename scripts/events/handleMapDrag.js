import { map, bounds } from "../events/handleLeafletMapInitialization.js";

export function handleMapDrag() {
  map.panInsideBounds(bounds, { animate: false });
}
