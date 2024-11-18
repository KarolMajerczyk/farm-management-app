import { fetchFieldData } from "../api/fetchFieldData.js";
import { addField } from "../db/fieldsDB.js";
import { createField } from "../models/fieldFactory.js";
import { renderFieldOnMap } from "../services/renderFieldOnMap.js";
import { renderFieldsList } from "../services/renderFieldsList.js";
import { convertWKTToGeoJSON } from "../utils/converter.js";

const myFields = [
  "120709_2.0007.4719",
  "120709_2.0007.4902",
  "120709_2.0007.4893",
  "120709_2.0007.4165",
  "120709_2.0007.4182",
  "120709_2.0007.4184/1",
  "120709_2.0007.4184/2",
  "120709_2.0007.4187",
  "120709_2.0007.4875",
  "120709_2.0007.4881",
  "120709_2.0007.4915",
  "120709_2.0007.4916",
  "120709_2.0007.4919",
  "120709_2.0007.4940",
  "120709_2.0007.4982",
  "120709_2.0007.4994",
  "120709_2.0007.4995",
  "120709_2.0007.4999",
  "120709_2.0007.5813",
  "120709_2.0007.5815",
];

export function handleMapLoad() {
  myFields.forEach(async (id) => {
    const { fieldId, fieldGeometry, fieldData } = await fetchFieldData({ id });

    const fieldPolygon = convertWKTToGeoJSON(fieldGeometry);
    renderFieldOnMap(fieldPolygon);

    const field = createField(fieldId, fieldGeometry, fieldData);
    addField(field);

    renderFieldsList();
  });
}
