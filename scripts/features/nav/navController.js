import { setCurrentState } from "../../shared/state.js";

export function initNavController() {
  handleMainNavLoad();
}

function handleMainNavLoad() {
  const currentPage = document.querySelector("#main-nav .active").dataset.page;
  setCurrentState({ page: currentPage });
}
