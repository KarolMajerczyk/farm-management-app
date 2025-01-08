import { getItems, deleteItem } from "../db/db.js";
import { renderCardsList } from "../services/renderCardsList.js";

export async function handleItemsPanelClick(e) {
  e.stopPropagation();

  if (e.target.dataset.action === "delete") {
    const objType = e.target.parentElement.dataset.type;
    const objId = e.target.parentElement.dataset.id;

    await deleteItem(objType + "s", objId);

    const objArr = await getItems(objType + "s");

    renderCardsList(objArr, objType);
  }
}
