import { getFields } from "../db/fieldsDB.js";
import { renderFieldOnMap } from "../services/renderFieldOnMap.js";
import { renderFieldsList } from "../services/renderFieldsList.js";

export async function handleMapLoad() {
  const fields = await getFields();

  fields.forEach((field) => {
    renderFieldOnMap(field.polygon);
  });

  renderFieldsList();
}
