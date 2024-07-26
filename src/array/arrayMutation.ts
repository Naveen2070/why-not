function toUnique<T>(array: T[]): T[] {
  if (array.length === 0) return [];

  if (typeof array[0] === 'object' && array[0] !== null) {
    // Handling arrays of objects
    const seen = new Set<string>();
    return array.filter((item) => {
      const key = JSON.stringify(item);
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  } else {
    // Handling arrays of primitive values
    return Array.from(new Set(array));
  }
}

export const ArrayMutations = {
  toUnique,
};

export { toUnique };
