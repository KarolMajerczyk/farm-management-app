import { getCurrentState } from "../../../shared/state.js";
import { getItemById, updateItem } from "../../../shared/storage.js";
import { createFileItem } from "../contentModel.js";
import { renderContentList } from "../contentView.js";

export function handleFileItemAdd(e) {
  const { page, id } = getCurrentState();
  const item = getItemById(page, id);

  const files = Array.from(e.dataTransfer.files);

  const promises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const fileData = createFileItem(file, reader);
        resolve(fileData);
      };

      reader.onerror = () => {
        reject(new Error(`Failed to read file: ${file.name}`));
      };

      reader.readAsDataURL(file);
    });
  });

  Promise.all(promises)
    .then((fileDataArray) => {
      const updatedFiles = [...item.files, ...fileDataArray];

      updateItem(page, { ...item, files: updatedFiles });
      renderContentList(page, updatedFiles);
    })
    .catch((error) => {
      console.error(error.message);
    });
}
