import {
  addItem,
  createFieldItem,
  getItemById,
  getItems,
} from "./itemsModel.js";
import { renderItemsList } from "./itemsView.js";
import { eventBus } from "../../shared/eventBus.js";
import { getFieldData } from "../../shared/getFieldData.js";

export function initItemsController() {
  handleItemsLoad();
}

function handleItemsLoad() {
  const type = document.querySelector("#items-list").dataset.type;
  const data = getItems(type);
  renderItemsList(type, data);

  if (type === "fields") {
    eventBus.emit("fieldsListLoaded", data);
  }

  eventBus.on("fieldPolygonClicked", (id) => {
    const field = getItemById("fields", id);

    if (field) {
      const fieldCard = document.querySelector(`[data-id="${field.id}"]`);
      toggleElementVisibility(DOM.sidePanel, true);

      toggleElementActive(fieldCard, true);
      toggleElementVisibility(DOM.addFieldButton, false);
    }
  });

  document
    .querySelector("#items-list")
    .addEventListener("click", (e) => handleItemCardClick(e));

  document
    .querySelector("#add-item")
    .addEventListener("click", (e) => handleAddItemClick(e));
  // handleDeleteItemClick();
}

function handleItemCardClick(e) {
  const el = e.target;
  const type = el.dataset.type;
  const id = el.dataset.id;

  if (!el.classList.contains("card-tile")) {
    return;
  }

  const obj = getItemById(type, id);

  // toggleElementActive(el, true);

  if (type === "fields") {
    // toggleElementVisibility(DOM.addFieldButton, false);
    eventBus.emit("fieldCardClicked", { id, location: obj.location });
  } else {
    renderContentList(obj, type);
  }

  // toggleElementVisibility(DOM.sidePanel, true);
  // renderOverview(obj, objType);
}

async function handleAddItemClick(e) {
  const el = e.target;
  const type = el.dataset.type;
  let obj;

  if (type === "fields") {
    const id = document.querySelector("#teryt-input").value;
    const data = await getFieldData({ id });

    obj = createFieldItem(data);
    eventBus.emit("newFieldAdded", { id, location: obj.location });
  } else {
    // herds or machines
  }

  addItem(type, obj);
  const items = getItems(type);

  renderItemsList(type, items);

  // const objCard = document.querySelector(`[data-id="${obj.id}"]`);

  // toggleElementActive(objCard, true);
  // toggleElementVisibility(DOM.sidePanel, true);
  // renderOverview(obj, objType);

  // if (objType !== "fields") {
  //   renderContentList(obj, objType);
  // }

  // return;
}

function handleDeleteItemClick(e) {
  const objType = e.target.parentElement.dataset.type;
  const objId = e.target.parentElement.dataset.id;

  const id = deleteItem(objType, objId);

  if (objType === "fields") {
    removeFieldFromMap(getMapLayer(id));
    removeMapLayer(id);
  }

  const objArr = getItems(objType);

  renderCardsList(objArr, objType);
  toggleElementVisibility(DOM.sidePanel, false);

  return;
}
