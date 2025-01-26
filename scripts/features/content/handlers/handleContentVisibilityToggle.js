import { hideContentContainer, showContentContainer } from "../contentView.js";

export function handleContentVisibilityToggle(state) {
  if (state) {
    showContentContainer();
  } else {
    hideContentContainer();
  }
}
