import { generateRandomId } from "../../utils/generateRandomId.js";

export function createAnimalItem() {
  return {
    id: generateRandomId(),
    name: "",
    plate: "",
    age: 0,
  };
}

export function createFileItem(file, reader) {
  return {
    id: generateRandomId(),
    name: file.name,
    type: file.type,
    data: reader.result,
  };
}
