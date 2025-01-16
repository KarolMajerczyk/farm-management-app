import { setActiveObject } from "../contentModel.js";
import {
  renderContentItems,
  showContentListAddButton,
} from "../contentView.js";

export function handleContentListRender(obj) {
  setActiveObject(obj);

  const type = document.querySelector(".content").dataset.type;
  showContentListAddButton();

  if (type === "fields") {
    return;
  }

  renderContentItems(type, obj);
}
