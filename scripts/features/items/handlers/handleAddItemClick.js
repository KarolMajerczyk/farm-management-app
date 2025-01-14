import { eventBus } from "../../../shared/eventBus.js";
import { getFieldData } from "../../../shared/getFieldData.js";

import {
  addItem,
  createFieldItem,
  createHerdItem,
  createMachineItem,
  getItems,
} from "../itemsModel.js";

import { renderItemsList } from "../itemsView.js";

export async function handleAddItemClick(e) {
  const type = e.target.dataset.type;
  let obj;

  if (type === "fields") {
    const id = document.querySelector("#map-search input").value;
    const data = await getFieldData({ id });

    obj = createFieldItem(data);
    eventBus.emit("fieldAdded", { id, location: obj.location });
  } else if (type === "herds") {
    obj = createHerdItem();
  } else if (type === "machines") {
    obj = createMachineItem();
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
}
