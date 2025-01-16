import { eventBus } from "../../../shared/eventBus.js";
import {
  addContentItem,
  createAnimalItem,
  createFileItem,
  getActiveObject,
} from "../contentModel.js";

import { renderContentItems } from "../contentView.js";

export async function handleContentItemAdd(e) {
  const type = e.target.dataset.type;
  let obj;

  if (type === "animals") {
    obj = createAnimalItem();
  } else if (type === "files") {
    obj = createFileItem();
  }

  const content = addContentItem(type, obj);

  renderContentItems(type, content);
  eventBus.emit("itemUpdated", getActiveObject());
}
