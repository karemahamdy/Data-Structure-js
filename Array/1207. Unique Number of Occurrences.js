var uniqueOccurrences = function (arr) {
  let current = new Map();

  for (let key of arr) {
    current.set(key, (current.get(key) || 0) + 1);
  }

  let unique = new Set();

  for (let count of current.values()) {
    if (unique.has(count)) {
      return false;
    }
    unique.add(count);
  }

  return true;
};
