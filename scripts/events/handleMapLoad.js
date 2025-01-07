import { getItems } from "../api/getItems.js";
import {
  renderFieldOnMap,
  resetActiveLayer,
} from "../services/renderFieldOnMap.js";

export async function handleMapLoad() {
  const fields = await getItems("fields");

  fields.forEach((field) => {
    renderFieldOnMap(field.location);
  });

  resetActiveLayer();
}
