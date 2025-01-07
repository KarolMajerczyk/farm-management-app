import { map, bounds } from "../map/handleLeafletMapInitialization.js";

export function handleMapDrag() {
  map.panInsideBounds(bounds, { animate: false });
}
