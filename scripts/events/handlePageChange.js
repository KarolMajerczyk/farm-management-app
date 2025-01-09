import { getItems } from "../db/db.js";
import { DOM } from "../dom/domElements.js";
import { renderCardsList } from "../services/renderCardsList.js";

export async function handlePageChange(e) {
  const objType = DOM.mainNav.querySelector(".active").dataset.page;

  const objArr = await getItems(objType);

  renderCardsList(objArr, objType);
}
