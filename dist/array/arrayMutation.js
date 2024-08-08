"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayMutator = void 0;
exports.toUnique = toUnique;
exports.reproduceTo = reproduceTo;
exports.filterBy = filterBy;
exports.mapBy = mapBy;
exports.groupBy = groupBy;
exports.partitionBy = partitionBy;
exports.pluck = pluck;
exports.compact = compact;
exports.sum = sum;
/**
 * Returns a new array with all duplicate elements removed, based on the value returned by the `JSON.stringify` function.
 * If the first element of the array is an object, it uses the `JSON.stringify` function to compare objects.
 * If the first element is not an object, it uses the `Set` constructor to remove duplicates.
 *
 * @param {T[]} array - The input array.
 * @return {T[]} A new array with duplicate elements removed.
 */
function toUnique(array) {
    if (array.length === 0)
        return [];
    if (typeof array[0] === 'object' && array[0] !== null) {
        const seen = new Set();
        return array.filter((item) => {
            const key = JSON.stringify(item);
            if (seen.has(key)) {
                return false;
            }
            seen.add(key);
            return true;
        });
    }
    else {
        return Array.from(new Set(array));
    }
}
/**
 * Returns a new array where each element is transformed by applying the given operation to the specified key of each object in the array.
 * If no key is specified, the operation is applied to each element of the array.
 *
 * @param {(T | U)[]} array - The input array.
 * @param {Primitive} value - The value to be passed as the second argument to the operation function.
 * @param {(a: any, b: any) => Primitive} operation - The function that takes two arguments and returns a Primitive.
 * @param {keyof U} [key] - The key of the object in the array to be transformed.
 * @return {(T | U)[]} A new array where each element is transformed by applying the given operation.
 * @throws {Error} If the key is not defined in the object.
 */
function reproduceTo(array, value, operation, key) {
    if (array.length === 0)
        return [];
    if (key !== undefined) {
        return array.map((item) => {
            if (typeof item === 'object' && item !== null && key in item) {
                const itemCopy = { ...item };
                itemCopy[key] = operation(itemCopy[key], value);
                return itemCopy;
            }
            throw new Error('key not defined');
        });
    }
    else {
        return array.map((item) => operation(item, value));
    }
}
/**
 * Filters an array based on a given predicate function.
 *
 * @param {T[]} array - The array to filter.
 * @param {(value: T) => boolean} predicate - The function used to test each element of the array.
 * @return {T[]} A new array containing only the elements that pass the test.
 */
function filterBy(array, predicate) {
    if (array.length === 0)
        return [];
    return array.filter(predicate);
}
/**
 * Applies a callback function to each element of an array and returns a new array with the results.
 *
 * @param {T[]} array - The input array.
 * @param {(value: T, index: number, array: T[]) => U} callback - The function to apply to each element of the array.
 * @return {U[]} A new array with the results of applying the callback function to each element of the input array.
 */
function mapBy(array, callback) {
    if (array.length === 0)
        return [];
    return array.map(callback);
}
/**
 * Groups the elements of an array based on the value of a specified key.
 *
 * @template T - The type of the elements in the array.
 * @template K - The type of the key used for grouping.
 * @param {T[]} array - The array to group.
 * @param {K} key - The key used for grouping.
 * @returns {Record<string, T[]> | T[]} - The grouped elements, or an empty array if the input array is empty.
 * @throws {Error} - If the array is not an array of objects.
 */
function groupBy(array, key) {
    if (array.length === 0)
        return [];
    if (typeof array[0] !== 'object' || array[0] === null) {
        throw new Error('groupBy can only be used with arrays of objects');
    }
    return array.reduce((acc, item) => {
        const keyValue = item[key];
        if (!acc[keyValue]) {
            acc[keyValue] = [];
        }
        acc[keyValue].push(item);
        return acc;
    }, {});
}
/**
 * Splits an array into two arrays based on a predicate function.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The input array to be partitioned.
 * @param {(value: T) => boolean} predicate - The function used to determine which array an element belongs to.
 * @return {([T[], T[]] | T[])} An array containing two arrays: one with elements that pass the predicate, and the other with elements that fail the predicate. If the input array is empty, returns an empty array.
 */
function partitionBy(array, predicate) {
    if (array.length === 0)
        return [[], []];
    return array.reduce(([pass, fail], elem) => predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]);
}
/**
 * Retrieves the values of a specified property from an array of objects.
 *
 * @template T - The type of the objects in the array.
 * @template K - The key of the property to pluck.
 * @param {T[]} array - The array of objects.
 * @param {K} key - The key of the property to pluck.
 * @return {T[K][]} An array containing the values of the specified property from each object in the array.
 * @throws {Error} If the array is empty or not an array of objects.
 */
function pluck(array, key) {
    if (array.length === 0)
        return [];
    if (typeof array[0] !== 'object' || array[0] === null) {
        throw new Error('pluck can only be used with arrays of objects');
    }
    return array.map((item) => item[key]);
}
/**
 * Returns a new array with all falsy values removed. If a key is provided,
 * only removes objects from the array where the specified key is falsy.
 *
 * @param {T[]} array - The input array to be compacted.
 * @param {keyof T} [key] - (Optional) The key of the property to check for falsiness.
 * @return {T[]} A new array with all falsy values removed.
 */
function compact(array, key) {
    if (array.length === 0)
        return [];
    if (key === undefined) {
        // For arrays of primitives
        return array.filter(Boolean);
    }
    else {
        // For arrays of objects
        return array.filter((item) => Boolean(item[key]));
    }
}
/**
 * Calculates the sum of all numbers in the array.
 *
 * If a key is provided, calculates the sum of the values of the specified property
 * in each object in the array.
 *
 * @template T - The type of the elements in the array.
 * @param {T[]} array - The array containing the numbers.
 * @param {keyof T} [key] - (Optional) The key of the property containing the numbers.
 * @return {number} The sum of all numbers in the array.
 * @throws {TypeError} If the key is provided and the value of the specified property is not a number.
 * @throws {Error} If the array is empty or not an array of objects.
 */
function sum(array, key) {
    if (array.length === 0) {
        return 0;
    }
    if (key === undefined) {
        // Ensure the array is of number type
        if (!array.every((item) => typeof item === 'number')) {
            throw new Error('The array should only contain numbers when no key is provided.');
        }
        return array.reduce((acc, item) => acc + item, 0);
    }
    else {
        // Ensure the array is of object type
        if (typeof array[0] !== 'object' || array[0] === null) {
            throw new Error('The array should only contain objects when a key is provided.');
        }
        // For arrays of objects with numeric properties
        return array.reduce((acc, item) => {
            const value = item[key];
            if (typeof value !== 'number') {
                throw new Error(`The property '${String(key)}' must be a number.`);
            }
            return acc + value;
        }, 0);
    }
}
/**
 * The ArrayMutator class provides a set of array mutation functions wrapped
 * in a class for chaining.
 *
 * @template T - The type of the elements in the array.
 */
class ArrayMutator {
    /**
     * The array being mutated.
     */
    array;
    /**
     * The result of the mutation.
     */
    _result = null;
    /**
     * Creates an instance of ArrayMutator.
     *
     * @param {T[]} array - The array to be mutated.
     */
    constructor(array) {
        this.array = array;
    }
    /**
     * Returns a new array with only unique values.
     *
     * @return {T[]} The new array with only unique values.
     */
    toUnique() {
        return toUnique(this.array);
    }
    /**
     * Applies a function to each element of the array and returns a new array.
     *
     * @param {Primitive} value - The value to be applied to the elements.
     * @param {(a: any, b: any) => Primitive} operation - The function to be applied.
     * @param {(keyof T & string) | undefined} [key] - (Optional) The key of the property to be operated on.
     * @return {(Primitive | PrimitiveRecord)[]} The new array with the applied function.
     */
    reproduceTo(value, operation, key) {
        return reproduceTo(this.array, value, operation, key);
    }
    /**
     * Filters the array based on a provided predicate function.
     *
     * @param {(value: T) => boolean} predicate - The predicate function used to filter the array.
     * @return {T[]} The new array with the filtered elements.
     */
    filterBy(predicate) {
        return filterBy(this.array, predicate);
    }
    /**
     * Maps the array to a new array with the results of calling a provided function
     * on every element in the array.
     *
     * @param {(value: T, index: number, array: T[]) => U} callback - The function to be applied to each element.
     * @return {U[]} The new array with the mapped elements.
     */
    mapBy(callback) {
        return mapBy(this.array, callback);
    }
    /**
     * Groups the array of objects based on a provided key. If the array is empty or
     * not an array of objects, an error is thrown.
     *
     * @template K - The key of the property to group by.
     * @param {K} key - The key of the property to group by.
     * @return {Record<string, T[]> | T[]} The new array with the grouped elements.
     * @throws {Error} If the array is empty or not an array of objects.
     */
    groupBy(key) {
        return groupBy(this.array, key);
    }
    /**
     * Partitions the array into two arrays based on a provided predicate function.
     *
     * @param {(value: T) => boolean} predicate - The predicate function used to partition the array.
     * @return {[T[], T[]] | T[]} The new array with the partitioned elements.
     */
    partitionBy(predicate) {
        return partitionBy(this.array, predicate);
    }
    /**
     * Retrieves the values of a specified property from an array of objects.
     *
     * @template K - The key of the property to pluck.
     * @param {K} key - The key of the property to pluck.
     * @return {T[K][]} An array containing the values of the specified property from each object in the array.
     * @throws {Error} If the array is empty or not an array of objects.
     */
    pluck(key) {
        return pluck(this.array, key);
    }
    /**
     * Returns a new array with all falsy values removed. If a key is provided,
     * only removes objects from the array where the specified key is falsy.
     *
     * @param {keyof T} [key] - (Optional) The key of the property to check for falsiness.
     * @return {T[]} A new array with all falsy values removed.
     */
    compact(key) {
        return compact(this.array, key);
    }
    /**
     * Calculates the sum of all numbers in the array.
     *
     * If a key is provided, calculates the sum of the values of the specified property
     * in each object in the array.
     *
     * @param {keyof T} [key] - (Optional) The key of the property containing the numbers.
     * @return {number} The sum of all numbers in the array.
     */
    sum(key) {
        return sum(this.array, key);
    }
}
exports.ArrayMutator = ArrayMutator;
//# sourceMappingURL=arrayMutation.js.map