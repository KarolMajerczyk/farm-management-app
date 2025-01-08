import { map, bounds } from "../events/handleMapInitialization.js";

export function handleMapDrag() {
  map.panInsideBounds(bounds, { animate: false });
}
