import type { Primitive, PrimitiveRecord } from '../definitions/types';
/**
 * Returns a new array with all duplicate elements removed, based on the value returned by the `JSON.stringify` function.
 * If the first element of the array is an object, it uses the `JSON.stringify` function to compare objects.
 * If the first element is not an object, it uses the `Set` constructor to remove duplicates.
 *
 * @param {T[]} array - The input array.
 * @return {T[]} A new array with duplicate elements removed.
 */
declare function toUnique<T>(array: T[]): T[];
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
declare function reproduceTo<T extends Primitive, U extends PrimitiveRecord>(array: (T | U)[], value: Primitive, operation: (a: any, b: any) => Primitive, key?: keyof U): (T | U)[];
/**
 * Filters an array based on a given predicate function.
 *
 * @param {T[]} array - The array to filter.
 * @param {(value: T) => boolean} predicate - The function used to test each element of the array.
 * @return {T[]} A new array containing only the elements that pass the test.
 */
declare function filterBy<T>(array: T[], predicate: (value: T) => boolean): T[];
/**
 * Applies a callback function to each element of an array and returns a new array with the results.
 *
 * @param {T[]} array - The input array.
 * @param {(value: T, index: number, array: T[]) => U} callback - The function to apply to each element of the array.
 * @return {U[]} A new array with the results of applying the callback function to each element of the input array.
 */
declare function mapBy<T, U>(array: T[], callback: (value: T, index: number, array: T[]) => U): U[];
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
declare function groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]> | T[];
/**
 * Splits an array into two arrays based on a predicate function.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The input array to be partitioned.
 * @param {(value: T) => boolean} predicate - The function used to determine which array an element belongs to.
 * @return {([T[], T[]] | T[])} An array containing two arrays: one with elements that pass the predicate, and the other with elements that fail the predicate. If the input array is empty, returns an empty array.
 */
declare function partitionBy<T>(array: T[], predicate: (value: T) => boolean): [T[], T[]] | T[];
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
declare function pluck<T, K extends keyof T>(array: T[], key: K): T[K][];
/**
 * Returns a new array with all falsy values removed. If a key is provided,
 * only removes objects from the array where the specified key is falsy.
 *
 * @param {T[]} array - The input array to be compacted.
 * @param {keyof T} [key] - (Optional) The key of the property to check for falsiness.
 * @return {T[]} A new array with all falsy values removed.
 */
declare function compact<T>(array: T[], key?: keyof T): T[];
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
declare function sum<T>(array: T[], key?: keyof T): number;
/**
 * The ArrayMutator class provides a set of array mutation functions wrapped
 * in a class for chaining.
 *
 * @template T - The type of the elements in the array.
 */
declare class ArrayMutator<T extends Primitive | PrimitiveRecord> {
    /**
     * The array being mutated.
     */
    private array;
    /**
     * The result of the mutation.
     */
    private _result;
    /**
     * Creates an instance of ArrayMutator.
     *
     * @param {T[]} array - The array to be mutated.
     */
    constructor(array: T[]);
    /**
     * Returns a new array with only unique values.
     *
     * @return {T[]} The new array with only unique values.
     */
    toUnique(): T[];
    /**
     * Applies a function to each element of the array and returns a new array.
     *
     * @param {Primitive} value - The value to be applied to the elements.
     * @param {(a: any, b: any) => Primitive} operation - The function to be applied.
     * @param {(keyof T & string) | undefined} [key] - (Optional) The key of the property to be operated on.
     * @return {(Primitive | PrimitiveRecord)[]} The new array with the applied function.
     */
    reproduceTo(value: Primitive, operation: (a: any, b: any) => Primitive, key?: (keyof T & string) | undefined): (Primitive | PrimitiveRecord)[];
    /**
     * Filters the array based on a provided predicate function.
     *
     * @param {(value: T) => boolean} predicate - The predicate function used to filter the array.
     * @return {T[]} The new array with the filtered elements.
     */
    filterBy(predicate: (value: T) => boolean): T[];
    /**
     * Maps the array to a new array with the results of calling a provided function
     * on every element in the array.
     *
     * @param {(value: T, index: number, array: T[]) => U} callback - The function to be applied to each element.
     * @return {U[]} The new array with the mapped elements.
     */
    mapBy<U>(callback: (value: T, index: number, array: T[]) => U): U[];
    /**
     * Groups the array of objects based on a provided key. If the array is empty or
     * not an array of objects, an error is thrown.
     *
     * @template K - The key of the property to group by.
     * @param {K} key - The key of the property to group by.
     * @return {Record<string, T[]> | T[]} The new array with the grouped elements.
     * @throws {Error} If the array is empty or not an array of objects.
     */
    groupBy<K extends keyof T>(key: K): Record<string, T[]> | T[];
    /**
     * Partitions the array into two arrays based on a provided predicate function.
     *
     * @param {(value: T) => boolean} predicate - The predicate function used to partition the array.
     * @return {[T[], T[]] | T[]} The new array with the partitioned elements.
     */
    partitionBy(predicate: (value: T) => boolean): [T[], T[]] | T[];
    /**
     * Retrieves the values of a specified property from an array of objects.
     *
     * @template K - The key of the property to pluck.
     * @param {K} key - The key of the property to pluck.
     * @return {T[K][]} An array containing the values of the specified property from each object in the array.
     * @throws {Error} If the array is empty or not an array of objects.
     */
    pluck<K extends keyof T>(key: K): T[K][];
    /**
     * Returns a new array with all falsy values removed. If a key is provided,
     * only removes objects from the array where the specified key is falsy.
     *
     * @param {keyof T} [key] - (Optional) The key of the property to check for falsiness.
     * @return {T[]} A new array with all falsy values removed.
     */
    compact(key?: keyof T): T[];
    /**
     * Calculates the sum of all numbers in the array.
     *
     * If a key is provided, calculates the sum of the values of the specified property
     * in each object in the array.
     *
     * @param {keyof T} [key] - (Optional) The key of the property containing the numbers.
     * @return {number} The sum of all numbers in the array.
     */
    sum(key?: keyof T): number;
}
export { toUnique, reproduceTo, filterBy, mapBy, groupBy, partitionBy, pluck, compact, sum, ArrayMutator, };
//# sourceMappingURL=arrayMutation.d.ts.map