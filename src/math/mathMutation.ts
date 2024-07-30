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
function gcd(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('a and b must be numbers');
  }
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new RangeError('a and b must be finite numbers');
  }
  if (a === 0 || b === 0) {
    return 0;
  }
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

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
function lcm(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('a and b must be numbers');
  }
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new RangeError('a and b must be finite numbers');
  }

  if (a === 0 || b === 0) {
    return 0;
  }
  const result = (a * b) / gcd(a, b);
  return result;
}

/**
 * Checks if a number is prime.
 *
 * @param {number|null|undefined} n - The number to check.
 * @return {boolean} True if the number is prime, false otherwise.
 * @throws {TypeError} If n is not a number.
 * @throws {RangeError} If n is not finite.
 */
function isPrime(n: number | null | undefined): boolean {
  if (n === null || n === undefined || typeof n !== 'number') {
    throw new TypeError('n must be a number');
  }

  if (!Number.isFinite(n)) {
    throw new RangeError('n must be finite');
  }
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    return n % i === 0 || n % (i + 2) === 0 ? false : true;
  }
  return true;
}

/**
 * Calculates the factorial of a given number.
 *
 * @param {number} n - The number to calculate the factorial of.
 * @return {number} The factorial of the given number.
 * @throws {TypeError} If n is not a non-negative integer.
 */
function factorial(n: number): number {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new TypeError('n must be a non-negative integer');
  }
  if (n === 0) return 1;
  let result = n;
  for (let i = n - 1; i > 0; i--) {
    result *= i;
  }
  return result;
}

/**
 * Calculates the nth Fibonacci number.
 *
 * @param {number} n - The index of the Fibonacci number to calculate.
 * @return {number} The nth Fibonacci number.
 * @throws {TypeError} If n is not a non-negative integer.
 */
function fibonacci(n: number): number {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 0) {
    throw new TypeError('n must be a non-negative integer');
  }
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

/**
 * Calculates the mean of an array of numbers.
 *
 * @param {NumArray} array - The array of numbers.
 * @return {number} The mean of the array.
 * @throws {TypeError} If the input is not an array or is empty.
 */
function mean(array: NumArray): number {
  if (!Array.isArray(array) || array.length === 0) {
    throw new TypeError('array must be a non-empty array');
  }
  const total = array.reduce((acc, val) => acc + val, 0);
  return total / array.length;
}

/**
 * Calculates the median of an array of numbers.
 *
 * @param {NumArray} array - The array of numbers.
 * @return {number} The median of the array.
 * @throws {TypeError} If the input is not an array or is empty.
 * @throws {Error} If the input array is invalid.
 */
function median(array: NumArray): number {
  if (!Array.isArray(array) || array.length === 0) {
    throw new TypeError('array must be a non-empty array');
  }
  const sortedArray = [...array].sort((a, b) => a - b);
  const middle = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 0) {
    const median1 = sortedArray[middle - 1];
    const median2 = sortedArray[middle];
    if (median1 !== undefined && median2 !== undefined) {
      return (median1 + median2) / 2;
    }
  }
  return sortedArray[middle];
}

/**
 * Calculates the mode of an array of numbers.
 *
 * @param {NumArray} array - The array of numbers.
 * @return {NumArray} The array of modes.
 * @throws {TypeError} If the input is not an array or is empty.
 */
function mode(array: NumArray): NumArray {
  if (!Array.isArray(array) || array.length === 0) {
    throw new TypeError('array must be a non-empty array');
  }

  const frequency: { [key: number]: number } = {};
  array.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  let maxFreq = 0;
  const modes: NumArray = [];

  Object.keys(frequency).forEach((num: any) => {
    const freq = frequency[num];
    if (freq > maxFreq) {
      maxFreq = freq;
      modes.length = 0; // Clear the modes array before adding new modes
    }
    if (freq === maxFreq) {
      modes.push(Number(num));
    }
  });

  return modes;
}

/**
 * Calculates the standard deviation of an array of numbers.
 *
 * @param {number[] | null | undefined} array - The array of numbers.
 * @return {number} The standard deviation of the array.
 * @throws {TypeError} If the input is not an array or is empty.
 * @throws {TypeError} If the array contains non-number values.
 */
function standardDeviation(array: number[] | null | undefined): number {
  if (!Array.isArray(array) || array.length === 0) {
    throw new TypeError('array must be a non-empty array');
  }

  const avg = mean(array);
  const squareDiffs = array.map((num) => {
    if (typeof num !== 'number') {
      throw new TypeError('array must contain numbers');
    }
    return Math.pow(num - avg, 2);
  });

  const avgSquareDiff = mean(squareDiffs);
  return roundTo(Math.sqrt(avgSquareDiff), 4);
}

/**
 * Calculates the range of a given array of numbers.
 *
 * @param {number[] | null | undefined} array - The array of numbers.
 * @return {number} The range of the array.
 * @throws {TypeError} If the input is not an array or is empty.
 * @throws {Error} If the array contains non-number values.
 */
function range(array: number[] | null | undefined): number {
  if (!Array.isArray(array)) {
    throw new TypeError('array must be an array');
  }
  if (array.length === 0) {
    throw new TypeError('array must not be empty');
  }
  const isNumberArray = array.every((num) => typeof num === 'number');
  if (!isNumberArray) {
    throw new TypeError('array must contain numbers');
  }

  const min = Math.min(...array);
  const max = Math.max(...array);
  return max - min;
}

/**
 * Rounds a number to a specified decimal place.
 *
 * @param {number | null | undefined} value - The number to be rounded.
 * @param {number | null | undefined} decimalPlaces - The number of decimal places to round to.
 * @throws {TypeError} If value or decimalPlaces is null or undefined.
 * @return {number} The rounded number.
 */
function roundTo(
  value: number | null | undefined,
  decimalPlaces: number | null | undefined
): number {
  if (
    value === null ||
    value === undefined ||
    decimalPlaces === null ||
    decimalPlaces === undefined
  ) {
    throw new TypeError('value and decimalPlaces must be non-null numbers');
  }

  const factor = Math.pow(10, decimalPlaces);
  return Math.round(value * factor) / factor;
}

/**
 * The MathMutator class provides a set of math mutation functions wrapped
 * in a class for chaining.
 *
 * @template T - The type of the elements in the array.
 */
class MathMutator {
  /**
   * The array being mutated.
   */
  private array: number[];

  /**
   * Creates an instance of MathMutator.
   *
   * @param {number[]} array - The array to be mutated.
   */
  constructor(array: number[]) {
    this.array = array;
  }

  /**
   * Calculates the greatest common divisor (GCD) of two numbers.
   *
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @return {number} The greatest common divisor of a and b.
   */
  gcd(a: number, b: number): number {
    return gcd(a, b);
  }

  /**
   * Calculates the least common multiple (LCM) of two numbers.
   *
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @return {number} The least common multiple of a and b.
   */
  lcm(a: number, b: number): number {
    return lcm(a, b);
  }

  /**
   * Checks if a number is prime.
   *
   * @param {number} n - The number to check.
   * @return {boolean} True if the number is prime, false otherwise.
   */
  isPrime(n: number): boolean {
    return isPrime(n);
  }

  /**
   * Calculates the factorial of a number.
   *
   * @param {number} n - The number to calculate the factorial of.
   * @return {number} The factorial of n.
   */
  factorial(n: number): number {
    return factorial(n);
  }

  /**
   * Generates the nth Fibonacci number.
   *
   * @param {number} n - The position in the Fibonacci sequence.
   * @return {number} The nth Fibonacci number.
   */
  fibonacci(n: number): number {
    return fibonacci(n);
  }

  /**
   * Calculates the mean (average) of the array.
   *
   * @return {number} The mean of the array.
   */
  mean(): number {
    return mean(this.array);
  }

  /**
   * Calculates the median of the array.
   *
   * @return {number} The median of the array.
   */
  median(): number {
    return median(this.array);
  }

  /**
   * Finds the mode of the array.
   *
   * @return {number[]} The mode(s) of the array.
   */
  mode(): number[] {
    return mode(this.array);
  }

  /**
   * Calculates the standard deviation of the array.
   *
   * @return {number} The standard deviation of the array.
   */
  standardDeviation(): number {
    return standardDeviation(this.array);
  }

  /**
   * Calculates the range of the array.
   *
   * @return {number} The range of the array.
   */
  range(): number {
    return range(this.array);
  }

  /**
   * Rounds a number to a specified decimal place.
   *
   * @param {number} value - The number to be rounded.
   * @param {number} decimalPlaces - The number of decimal places to round to.
   * @return {number} The rounded number.
   */
  roundTo(number: number, decimalPlaces: number): number {
    return roundTo(number, decimalPlaces);
  }
}

export {
  MathMutator,
  gcd,
  lcm,
  isPrime,
  factorial,
  fibonacci,
  mean,
  median,
  mode,
  standardDeviation,
  range,
  roundTo,
};
