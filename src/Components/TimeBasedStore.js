// src/Components/TimeBasedStore.js
class TimeBasedStore {
  constructor() {
    this.store = {};
  }

  // Store a value with a time-based expiration
  set(key, value, expirationTimeInSeconds) {
    const expirationDate = new Date().getTime() + expirationTimeInSeconds * 1000;
    this.store[key] = { value, expirationDate };
  }

  // Get a value if it's still valid, otherwise return null
  get(key) {
    const entry = this.store[key];
    if (!entry) return null;

    const now = new Date().getTime();
    if (now > entry.expirationDate) {
      delete this.store[key]; // Delete expired key
      return null;
    }

    return entry.value;
  }

  // Clear all expired keys
  cleanup() {
    const now = new Date().getTime();
    for (const key in this.store) {
      if (now > this.store[key].expirationDate) {
        delete this.store[key];
      }
    }
  }
}

export default TimeBasedStore;
