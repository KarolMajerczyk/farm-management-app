import { map, bounds } from "./handleMapLoad.js";

export function handleMapDrag() {
  map.panInsideBounds(bounds, { animate: false });
}
