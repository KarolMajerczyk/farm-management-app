import { eventBus } from "../../shared/eventBus.js";

export function initItemsController() {
  handleItemsLoad();

  if (type === "fields") {
    eventBus.emit("fieldsListLoaded", data);
  }

  eventBus.on("fieldPolygonClicked", (id) => handleItemCardState(id));

  document.querySelector("#items-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("card-tile")) {
      handleItemCardClick(e);
      return;
    }

    if (e.target.classList.contains("card-tile")) {
      handleDeleteItemClick(e);
      return;
    }
  });

  document
    .querySelector("#add-item")
    .addEventListener("click", (e) => handleAddItemClick(e));
}
