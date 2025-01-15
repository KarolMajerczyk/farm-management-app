export function showSidePanel() {
  document.querySelector(".side-panel").classList.add("visible");
}

export function hideSidePanel() {
  document.querySelector(".side-panel").classList.remove("visible");
}

export function togglePanelSectionVisibility(page) {
  if (document.querySelector(".side-panel .visible")) {
    document.querySelector(".side-panel .visible").classList.remove("visible");
  }

  if (page) {
    document.querySelector(`.side-panel .${page}`).classList.add("visible");
  }
}
