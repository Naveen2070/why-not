import { Primitive } from '../definitions/types';

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

function reproduceTo<T extends Primitive, U extends Record<string, Primitive>>(
  array: (T | U)[],
  value: Primitive,
  operation: (a: any, b: any) => Primitive,
  key?: keyof U
): (T | U)[] {
  if (key !== undefined) {
    // Handling arrays of objects
    return array.map((item) => {
      if (typeof item === 'object' && item !== null && key in item) {
        const itemCopy = { ...item };
        itemCopy[key] = operation(itemCopy[key] as Primitive, value) as any;
        return itemCopy;
      }
      return item;
    }) as U[];
  } else {
    // Handling arrays of primitive values
    return array.map((item) => operation(item as Primitive, value) as T);
  }
}

export const ArrayMutations = {
  toUnique,
  reproduceTo,
};

export { toUnique, reproduceTo };
