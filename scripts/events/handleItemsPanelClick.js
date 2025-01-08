import { deleteItem } from "../api/deleteItem.js";
import { getItems } from "../api/getItems.js";
import { renderCardsList } from "../services/renderCardsList.js";

export async function handleItemsPanelClick(e) {
  e.stopPropagation();

  if (e.target.dataset.action === "delete") {
    const objType = e.target.parentElement.dataset.type;
    const objId = e.target.parentElement.dataset.id;

    await deleteItem(objType, objId);

    const objArr = await getItems(objType + "s");
    console.log(objArr);

    renderCardsList(objArr, objType);
  }
}
