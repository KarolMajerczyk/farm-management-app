import { DOM } from "../dom/domElements.js";

export const setMapSearchFormValue = (data) => {
  DOM.terytInput.value = data[1];
};
