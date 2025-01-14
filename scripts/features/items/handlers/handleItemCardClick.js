import { eventBus } from "../../../shared/eventBus.js";
import { getItemById } from "../itemsModel.js";

export function handleItemCardClick(e) {
  const type = e.target.dataset.type;
  const id = e.target.dataset.id;

  const obj = getItemById(type, id);

  if (type === "fields") {
    eventBus.emit("fieldCardSelected", obj.location);
  } else {
    // renderContentList(obj, type);
  }
}
