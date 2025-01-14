function createEventEmitter() {
  const events = new Map();

  return {
    on(event, listener) {
      if (!events.has(event)) {
        events.set(event, []);
      }
      events.get(event).push(listener);
    },

    off(event, listener) {
      if (!events.has(event)) return;
      const listeners = events.get(event).filter((l) => l !== listener);
      if (listeners.length > 0) {
        events.set(event, listeners);
      } else {
        events.delete(event);
      }
    },

    emit(event, data) {
      if (!events.has(event)) return;
      for (const listener of events.get(event)) {
        listener(data);
      }
    },

    clear(event) {
      if (event) {
        events.delete(event);
      } else {
        events.clear();
      }
    },
  };
}

export const eventBus = createEventEmitter();
