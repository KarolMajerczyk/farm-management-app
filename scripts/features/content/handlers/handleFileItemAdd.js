import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";
import { createFileItem } from "../contentModel.js";
import { renderContentList } from "../contentView.js";

export function handleFileItemAdd(e) {
  const { page, id } = getCurrentState();

  const item = getItemById(page, id);

  const files = Array.from(e.dataTransfer.files);

  files.forEach((file) => {
    const reader = new FileReader();

    reader.onload = () => {
      const fileData = createFileItem(file, reader);
      item.files.push(fileData);
    };

    reader.readAsDataURL(file);
  });

  console.log(item.files);

  updateItem(page, item);
  renderContentList(page, item.files);
}
