import { map, bounds } from "../map/map.js";

export function handleMapDrag() {
  map.panInsideBounds(bounds, { animate: false });
}
