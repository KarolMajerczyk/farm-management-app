const state = {
  page: null,
  id: null,
};

export function setCurrentState({ page, id }) {
  if (page) {
    state.page = page;
  }

  if (id) {
    state.id = id;
  }
}

export function getCurrentState() {
  return state;
}

export function resetCurrentState(key) {
  state[key] = null;
}
