import { DOM } from "../dom/domElements.js";

import { renderCardsList } from "../services/renderCardsList.js";

import { resetActiveLayer } from "../services/renderFieldOnMap.js";

import { addItem, getItems, getFieldData, deleteItem } from "../db/db.js";

import { toggleElementActive } from "../services/toggleElementActive.js";
import { toggleElementVisibility } from "../services/toggleElementVisibility.js";
import { renderOverview } from "../services/renderOverview.js";
import { renderContentList } from "../services/renderContentList.js";
import { createObject } from "../models/createObject.js";

export async function handleItemsPanelClick(e) {
  e.stopPropagation();

  if (e.target.dataset.action === "add") {
    const objType = e.target.dataset.type;
    let obj;

    if (objType === "fields") {
      resetActiveLayer();

      const terytValue = DOM.terytInput.value;
      const fieldData = await getFieldData({
        id: terytValue,
      });

      obj = createObject(objType, fieldData);
    } else {
      obj = createObject(objType);
    }

    console.log(obj);

    await addItem(objType, obj);

    const objArr = await getItems(objType);

    renderCardsList(objArr, objType);

    const objCard = document.querySelector(`[data-id="${obj.id}"]`);

    toggleElementActive(objCard, true);
    toggleElementVisibility(DOM.sidePanel, true);
    renderOverview(obj, objType);

    if (objType !== "fields") {
      renderContentList(obj, objType);
    }

    return;
  }

  if (e.target.dataset.action === "delete") {
    const objType = e.target.parentElement.dataset.type;
    const objId = e.target.parentElement.dataset.id;

    await deleteItem(objType, objId);

    const objArr = await getItems(objType);

    renderCardsList(objArr, objType);

    return;
  }
}
