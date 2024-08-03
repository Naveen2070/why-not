import type { NumArray } from '../definitions/types';
/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} The greatest common divisor of a and b.
 * @throws {TypeError} If either a or b is not a number.
 * @throws {RangeError} If either a or b is not finite.
 */
declare function gcd(a: number, b: number): number;
/**
 * Calculates the least common multiple (LCM) of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} The least common multiple of a and b.
 * @throws {TypeError} If either a or b is not a number.
 * @throws {RangeError} If either a or b is not finite.
 * @throws {TypeError} If the result of the LCM calculation is NaN.
 */
declare function lcm(a: number, b: number): number;
/**
 * Checks if a number is prime.
 *
 * @param {number|null|undefined} n - The number to check.
 * @return {boolean} True if the number is prime, false otherwise.
 * @throws {TypeError} If n is not a number.
 * @throws {RangeError} If n is not finite.
 */
declare function isPrime(n: number | null | undefined): boolean;
/**
 * Calculates the factorial of a given number.
 *
 * @param {number} n - The number to calculate the factorial of.
 * @return {number} The factorial of the given number.
 * @throws {TypeError} If n is not a non-negative integer.
 */
declare function factorial(n: number): number;
/**
 * Calculates the nth Fibonacci number.
 *
 * @param {number} n - The index of the Fibonacci number to calculate.
 * @return {number} The nth Fibonacci number.
 * @throws {TypeError} If n is not a non-negative integer.
 */
declare function fibonacci(n: number): number;
/**
 * Calculates the mean of an array of numbers.
 *
 * @param {NumArray} array - The array of numbers.
 * @return {number} The mean of the array.
 * @throws {TypeError} If the input is not an array or is empty.
 */
declare function mean(array: NumArray): number;
/**
 * Calculates the median of an array of numbers.
 *
 * @param {NumArray} array - The array of numbers.
 * @return {number} The median of the array.
 * @throws {TypeError} If the input is not an array or is empty.
 * @throws {Error} If the input array is invalid.
 */
declare function median(array: NumArray): number;
/**
 * Calculates the mode of an array of numbers.
 *
 * @param {NumArray} array - The array of numbers.
 * @return {NumArray} The array of modes.
 * @throws {TypeError} If the input is not an array or is empty.
 */
declare function mode(array: NumArray): NumArray;
/**
 * Calculates the standard deviation of an array of numbers.
 *
 * @param {number[] | null | undefined} array - The array of numbers.
 * @return {number} The standard deviation of the array.
 * @throws {TypeError} If the input is not an array or is empty.
 * @throws {TypeError} If the array contains non-number values.
 */
declare function standardDeviation(array: number[] | null | undefined): number;
/**
 * Calculates the range of a given array of numbers.
 *
 * @param {number[] | null | undefined} array - The array of numbers.
 * @return {number} The range of the array.
 * @throws {TypeError} If the input is not an array or is empty.
 * @throws {Error} If the array contains non-number values.
 */
declare function range(array: number[] | null | undefined): number;
/**
 * Rounds a number to a specified decimal place.
 *
 * @param {number | null | undefined} value - The number to be rounded.
 * @param {number | null | undefined} decimalPlaces - The number of decimal places to round to.
 * @throws {TypeError} If value or decimalPlaces is null or undefined.
 * @return {number} The rounded number.
 */
declare function roundTo(value: number | null | undefined, decimalPlaces: number | null | undefined): number;
/**
 * The MathMutator class provides a set of math mutation functions wrapped
 * in a class for chaining.
 *
 * @template T - The type of the elements in the array.
 */
declare class MathMutator {
    /**
     * The array being mutated.
     */
    private array;
    /**
     * Creates an instance of MathMutator.
     *
     * @param {number[]} array - The array to be mutated.
     */
    constructor(array: number[]);
    /**
     * Calculates the greatest common divisor (GCD) of two numbers.
     *
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @return {number} The greatest common divisor of a and b.
     */
    gcd(a: number, b: number): number;
    /**
     * Calculates the least common multiple (LCM) of two numbers.
     *
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @return {number} The least common multiple of a and b.
     */
    lcm(a: number, b: number): number;
    /**
     * Checks if a number is prime.
     *
     * @param {number} n - The number to check.
     * @return {boolean} True if the number is prime, false otherwise.
     */
    isPrime(n: number): boolean;
    /**
     * Calculates the factorial of a number.
     *
     * @param {number} n - The number to calculate the factorial of.
     * @return {number} The factorial of n.
     */
    factorial(n: number): number;
    /**
     * Generates the nth Fibonacci number.
     *
     * @param {number} n - The position in the Fibonacci sequence.
     * @return {number} The nth Fibonacci number.
     */
    fibonacci(n: number): number;
    /**
     * Calculates the mean (average) of the array.
     *
     * @return {number} The mean of the array.
     */
    mean(): number;
    /**
     * Calculates the median of the array.
     *
     * @return {number} The median of the array.
     */
    median(): number;
    /**
     * Finds the mode of the array.
     *
     * @return {number[]} The mode(s) of the array.
     */
    mode(): number[];
    /**
     * Calculates the standard deviation of the array.
     *
     * @return {number} The standard deviation of the array.
     */
    standardDeviation(): number;
    /**
     * Calculates the range of the array.
     *
     * @return {number} The range of the array.
     */
    range(): number;
    /**
     * Rounds a number to a specified decimal place.
     *
     * @param {number} value - The number to be rounded.
     * @param {number} decimalPlaces - The number of decimal places to round to.
     * @return {number} The rounded number.
     */
    roundTo(number: number, decimalPlaces: number): number;
}
export { MathMutator, gcd, lcm, isPrime, factorial, fibonacci, mean, median, mode, standardDeviation, range, roundTo, };
//# sourceMappingURL=mathMutation.d.ts.map