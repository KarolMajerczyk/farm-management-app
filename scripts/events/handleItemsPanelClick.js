import { DOM } from "../dom/domElements.js";

import { renderCardsList } from "../services/renderCardsList.js";

import {
  getActiveLayer,
  getMapLayer,
  removeFieldFromMap,
  removeMapLayer,
  resetActiveLayer,
  saveMapLayer,
} from "../services/renderFieldOnMap.js";

import { addItem, getItems, getFieldData, deleteItem } from "../db/db.js";

import { toggleElementActive } from "../services/toggleElementActive.js";
import { toggleElementVisibility } from "../services/toggleElementVisibility.js";
import { renderOverview } from "../services/renderOverview.js";
import { renderContentList } from "../services/renderContentList.js";

import { createFieldItem } from "../models/createFieldItem.js";
import { createHerdItem } from "../models/createHerdItem.js";
import { createMachineItem } from "../models/createMachineItem.js";

export async function handleItemsPanelClick(e) {
  e.stopPropagation();

  const action = e.target.dataset.action;

  switch (action) {
    case "add":
      handleAddClick(e);
      break;
    case "delete":
      handleDeleteClick(e);
      break;
  }
}

async function handleAddClick(e) {
  const objType = e.target.dataset.type;
  let obj;

  if (objType === "fields") {
    const terytValue = DOM.terytInput.value;
    const fieldData = await getFieldData({
      id: terytValue,
    });

    obj = createFieldItem(fieldData);

    saveMapLayer(obj.id, getActiveLayer());
    resetActiveLayer();
  } else if (objType === "herds") {
    obj = createHerdItem();
  } else if (objType === "machines") {
    obj = createMachineItem();
  }

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

async function handleDeleteClick(e) {
  const objType = e.target.parentElement.dataset.type;
  const objId = e.target.parentElement.dataset.id;

  const id = await deleteItem(objType, objId);

  if (objType === "fields") {
    removeFieldFromMap(getMapLayer(id));
    removeMapLayer(id);
  }

  const objArr = await getItems(objType);

  renderCardsList(objArr, objType);
  toggleElementVisibility(DOM.sidePanel, false);

  return;
}
