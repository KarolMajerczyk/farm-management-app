import { getItems } from "../db/db.js";
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
