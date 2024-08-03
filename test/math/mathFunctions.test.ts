// @ts-nocheck
import {
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
} from '../../src/index';

import { MathMutator } from '../../src/index';

describe('MathMutator', () => {
  const numbers = [1, 2, 2, 3, 1, 4, 5];
  const mathMutNumbers = new MathMutator(numbers);

  test('gcd should calculate the greatest common divisor', () => {
    expect(mathMutNumbers.gcd(8, 12)).toBe(4);
  });

  test('gcd should throw TypeError for non-number inputs', () => {
    expect(() => mathMutNumbers.gcd('8', 12)).toThrow(TypeError);
    expect(() => mathMutNumbers.gcd(8, '12')).toThrow(TypeError);
  });

  test('gcd show return 0 for gcd of 0 and 0', () => {
    expect(mathMutNumbers.gcd(0, 0)).toBe(0);
  });

  test('gcd should throw RangeError for non-finite numbers', () => {
    expect(() => mathMutNumbers.gcd(Infinity, 12)).toThrow(RangeError);
    expect(() => mathMutNumbers.gcd(8, NaN)).toThrow(RangeError);
  });

  test('lcm should calculate the least common multiple', () => {
    expect(mathMutNumbers.lcm(4, 5)).toBe(20);
  });

  test('lcm should throw TypeError for non-number inputs', () => {
    expect(() => mathMutNumbers.lcm('4', 5)).toThrow(TypeError);
    expect(() => mathMutNumbers.lcm(4, '5')).toThrow(TypeError);
  });

  test('lcm show return 0 for lcm of 0 and 0', () => {
    expect(mathMutNumbers.lcm(0, 0)).toBe(0);
  });

  test('lcm should throw RangeError for non-finite numbers', () => {
    expect(() => mathMutNumbers.lcm(Infinity, 5)).toThrow(RangeError);
    expect(() => mathMutNumbers.lcm(4, NaN)).toThrow(RangeError);
  });

  test('isPrime should throw a TypeError if n is null', () => {
    expect(() => mathMutNumbers.isPrime(null)).toThrow(TypeError);
  });

  test('isPrime should throw a TypeError if n is undefined', () => {
    expect(() => mathMutNumbers.isPrime(undefined)).toThrow(TypeError);
  });

  test('isPrime should throw a TypeError if n is not a number', () => {
    expect(() => mathMutNumbers.isPrime('a' as any)).toThrow(TypeError);
  });

  test('isPrime should throw a RangeError if n is not finite', () => {
    expect(() => mathMutNumbers.isPrime(Infinity)).toThrow(RangeError);
  });

  test('isPrime should return false for numbers less than or equal to 1', () => {
    expect(mathMutNumbers.isPrime(-1)).toBe(false);
    expect(mathMutNumbers.isPrime(0)).toBe(false);
    expect(mathMutNumbers.isPrime(1)).toBe(false);
  });

  test('isPrime should return true for isPrime numbers 2 and 3', () => {
    expect(mathMutNumbers.isPrime(2)).toBe(true);
    expect(mathMutNumbers.isPrime(3)).toBe(true);
  });

  test('isPrime should return false for numbers divisible by 2 or 3', () => {
    expect(mathMutNumbers.isPrime(4)).toBe(false);
    expect(mathMutNumbers.isPrime(6)).toBe(false);
    expect(mathMutNumbers.isPrime(9)).toBe(false);
  });

  test('isPrime should return true for a isPrime number larger than 3', () => {
    expect(mathMutNumbers.isPrime(5)).toBe(true);
    expect(mathMutNumbers.isPrime(7)).toBe(true);
    expect(mathMutNumbers.isPrime(11)).toBe(true);
    expect(mathMutNumbers.isPrime(13)).toBe(true);
    expect(mathMutNumbers.isPrime(17)).toBe(true);
  });

  test('isPrime should return false for a non-isPrime number larger than 3', () => {
    expect(mathMutNumbers.isPrime(15)).toBe(false);
    expect(mathMutNumbers.isPrime(25)).toBe(false);
    expect(mathMutNumbers.isPrime(49)).toBe(false);
    expect(mathMutNumbers.isPrime(121)).toBe(false);
  });

  test('isPrime should return true for large isPrime numbers', () => {
    expect(mathMutNumbers.isPrime(97)).toBe(true);
    expect(mathMutNumbers.isPrime(101)).toBe(true);
    expect(mathMutNumbers.isPrime(103)).toBe(true);
  });

  test('isPrime should return false for large non-isPrime numbers', () => {
    expect(mathMutNumbers.isPrime(100)).toBe(false);
    expect(mathMutNumbers.isPrime(102)).toBe(false);
    expect(mathMutNumbers.isPrime(104)).toBe(false);
  });

  test('factorial should calculate the factorial of a number', () => {
    expect(mathMutNumbers.factorial(5)).toBe(120);
  });

  test('factorial should return 1 for factorial of 0', () => {
    expect(mathMutNumbers.factorial(0)).toBe(1);
  });

  test('factorial should throw TypeError for non-integer or negative inputs', () => {
    expect(() => mathMutNumbers.factorial(5.5)).toThrow(TypeError);
    expect(() => mathMutNumbers.factorial(-1)).toThrow(TypeError);
  });

  test('fibonacci should generate the nth Fibonacci number', () => {
    expect(mathMutNumbers.fibonacci(5)).toBe(5);
    expect(mathMutNumbers.fibonacci(10)).toBe(55);
  });

  test('fibonacci should throw TypeError for non-integer or negative inputs', () => {
    expect(() => mathMutNumbers.fibonacci(5.5)).toThrow(TypeError);
    expect(() => mathMutNumbers.fibonacci(-1)).toThrow(TypeError);
  });

  test('mean should calculate the mean of the array', () => {
    expect(mathMutNumbers.mean()).toBeCloseTo(2.571, 3);
  });

  test('mean should throw TypeError for empty array', () => {
    const emptyMathMut = new MathMutator([]);
    expect(() => emptyMathMut.mean()).toThrow(TypeError);
  });

  test('median should calculate the median of the array', () => {
    expect(mathMutNumbers.median()).toBe(2);
  });

  test('median should throw TypeError for empty array', () => {
    const emptyMathMut = new MathMutator([]);
    expect(() => emptyMathMut.median()).toThrow(TypeError);
  });

  test('median should calculate the median for even-length arrays', () => {
    const mathMutEven = new MathMutator([1, 3, 5, 7]);
    const mathMutEven2 = new MathMutator([2, 4, 6, 8]);
    expect(mathMutEven.median()).toBe(4);
    expect(mathMutEven2.median()).toBe(5);
  });

  test('mode should find the mode(s) of the array', () => {
    expect(mathMutNumbers.mode()).toEqual([1, 2]);
  });

  test('mode should throw TypeError for empty array', () => {
    const emptyMathMut = new MathMutator([]);
    expect(() => emptyMathMut.mode()).toThrow(TypeError);
  });

  test('standardDeviation should calculate the standard deviation of the array', () => {
    expect(mathMutNumbers.standardDeviation()).toBeCloseTo(1.3997, 3);
  });

  test('standardDeviation should throw TypeError for empty array', () => {
    const emptyMathMut = new MathMutator([]);
    expect(() => emptyMathMut.standardDeviation()).toThrow(TypeError);
  });

  test('standardDeviation should throw TypeError for non-numeric array', () => {
    const emptyMathMut = new MathMutator([1, 2, '2', 3, '1', 4, '5']);
    expect(() => emptyMathMut.standardDeviation()).toThrow(TypeError);
  });

  test('range should calculate the range of the array', () => {
    expect(mathMutNumbers.range()).toBe(4);
  });

  test('range should throw TypeError for empty array', () => {
    const emptyMathMut = new MathMutator([]);
    expect(() => emptyMathMut.range()).toThrow(TypeError);
  });

  test('range should throw TypeError for non-numeric array', () => {
    const nonNumMathMut = new MathMutator([1, 2, '2', 3, '1', 4, '5']);
    expect(() => nonNumMathMut.range()).toThrow(TypeError);
  });

  test('range should throw TypeError for non array input', () => {
    const nonNumMathMut = new MathMutator(1);
    expect(() => nonNumMathMut.range()).toThrow(TypeError);
  });

  test('roundTo should round a number to a specified decimal place', () => {
    expect(mathMutNumbers.roundTo(1.2345, 2)).toBe(1.23);
    expect(mathMutNumbers.roundTo(1.2345, 3)).toBe(1.235);
  });

  test('roundTo should throw TypeError for null or undefined inputs', () => {
    expect(() => mathMutNumbers.roundTo(null, 2)).toThrow(TypeError);
    expect(() => mathMutNumbers.roundTo(1.2345, null)).toThrow(TypeError);
  });
});

describe('Standalone Functions', () => {
  const numbers = [1, 2, 2, 3, 1, 4, 5];

  test('gcd should calculate the greatest common divisor', () => {
    expect(gcd(8, 12)).toBe(4);
  });

  test('gcd should throw TypeError for non-number inputs', () => {
    expect(() => gcd('8', 12)).toThrow(TypeError);
    expect(() => gcd(8, '12')).toThrow(TypeError);
  });

  test('gcd show return 0 for gcd of 0 and 0', () => {
    expect(gcd(0, 0)).toBe(0);
  });

  test('gcd should throw RangeError for non-finite numbers', () => {
    expect(() => gcd(Infinity, 12)).toThrow(RangeError);
    expect(() => gcd(8, NaN)).toThrow(RangeError);
  });

  test('lcm should calculate the least common multiple', () => {
    expect(lcm(4, 5)).toBe(20);
  });

  test('lcm should throw TypeError for non-number inputs', () => {
    expect(() => lcm('4', 5)).toThrow(TypeError);
    expect(() => lcm(4, '5')).toThrow(TypeError);
  });

  test('lcm show return 0 for lcm of 0 and 0', () => {
    expect(lcm(0, 0)).toBe(0);
  });

  test('lcm should throw RangeError for non-finite numbers', () => {
    expect(() => lcm(Infinity, 5)).toThrow(RangeError);
    expect(() => lcm(4, NaN)).toThrow(RangeError);
  });

  test('isPrime should throw a TypeError if n is null', () => {
    expect(() => isPrime(null)).toThrow(TypeError);
  });

  test('isPrime should throw a TypeError if n is undefined', () => {
    expect(() => isPrime(undefined)).toThrow(TypeError);
  });

  test('isPrime should throw a TypeError if n is not a number', () => {
    expect(() => isPrime('a' as any)).toThrow(TypeError);
  });

  test('isPrime should throw a RangeError if n is not finite', () => {
    expect(() => isPrime(Infinity)).toThrow(RangeError);
  });

  test('isPrime should return false for numbers less than or equal to 1', () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  test('isPrime should return true for isPrime numbers 2 and 3', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(3)).toBe(true);
  });

  test('isPrime should return false for numbers divisible by 2 or 3', () => {
    expect(isPrime(4)).toBe(false);
    expect(isPrime(6)).toBe(false);
    expect(isPrime(9)).toBe(false);
  });

  test('isPrime should return true for a isPrime number larger than 3', () => {
    expect(isPrime(5)).toBe(true);
    expect(isPrime(7)).toBe(true);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(17)).toBe(true);
  });

  test('isPrime should return false for a non-isPrime number larger than 3', () => {
    expect(isPrime(15)).toBe(false);
    expect(isPrime(25)).toBe(false);
    expect(isPrime(49)).toBe(false);
    expect(isPrime(121)).toBe(false);
  });

  test('isPrime should return true for large isPrime numbers', () => {
    expect(isPrime(97)).toBe(true);
    expect(isPrime(101)).toBe(true);
    expect(isPrime(103)).toBe(true);
  });

  test('isPrime should return false for large non-isPrime numbers', () => {
    expect(isPrime(100)).toBe(false);
    expect(isPrime(102)).toBe(false);
    expect(isPrime(104)).toBe(false);
  });

  test('factorial should calculate the factorial of a number', () => {
    expect(factorial(5)).toBe(120);
  });

  test('factorial should return 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial should throw TypeError for non-integer or negative inputs', () => {
    expect(() => factorial(5.5)).toThrow(TypeError);
    expect(() => factorial(-1)).toThrow(TypeError);
  });

  test('fibonacci should generate the nth Fibonacci number', () => {
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });

  test('fibonacci should throw TypeError for non-integer or negative inputs', () => {
    expect(() => fibonacci(5.5)).toThrow(TypeError);
    expect(() => fibonacci(-1)).toThrow(TypeError);
  });

  test('mean should calculate the mean of the array', () => {
    expect(mean(numbers)).toBeCloseTo(2.571, 3);
  });

  test('mean should throw TypeError for empty array', () => {
    expect(() => mean([])).toThrow(TypeError);
  });

  test('median should calculate the median of the array', () => {
    expect(median(numbers)).toBe(2);
  });

  test('median should throw TypeError for empty array', () => {
    expect(() => median([])).toThrow(TypeError);
  });

  test('median should calculate the median for even-length arrays', () => {
    const evenNumbers = [1, 3, 5, 7];
    const evenNumbers2 = [2, 4, 6, 8];
    expect(median(evenNumbers)).toBe(4);
    expect(median(evenNumbers2)).toBe(5);
  });

  test('mode should find the mode(s) of the array', () => {
    expect(mode(numbers)).toEqual([1, 2]);
  });

  test('mode should throw TypeError for empty array', () => {
    expect(() => mode([])).toThrow(TypeError);
  });

  test('standardDeviation should calculate the standard deviation of the array', () => {
    expect(standardDeviation(numbers)).toBeCloseTo(1.3997, 3);
  });

  test('standardDeviation should throw TypeError for empty array', () => {
    expect(() => standardDeviation([])).toThrow(TypeError);
  });

  test('standardDeviation should throw TypeError for non-numeric array', () => {
    expect(() => standardDeviation([1, 2, '2', 3, '1', 4, '5'])).toThrow(
      TypeError
    );
  });

  test('range should calculate the range of the array', () => {
    expect(range(numbers)).toBe(4);
  });

  test('range should throw TypeError for empty array', () => {
    expect(() => range([])).toThrow(TypeError);
  });

  test('range should throw TypeError for non-numeric array', () => {
    expect(() => range([1, 2, '2', 3, '1', 4, '5'])).toThrow(TypeError);
  });

  test('range should throw TypeError for non array input', () => {
    expect(() => range(1)).toThrow(TypeError);
  });

  test('roundTo should round a number to a specified decimal place', () => {
    expect(roundTo(1.2345, 2)).toBe(1.23);
    expect(roundTo(1.2345, 3)).toBe(1.235);
  });

  test('roundTo should throw TypeError for null or undefined inputs', () => {
    expect(() => roundTo(null, 2)).toThrow(TypeError);
    expect(() => roundTo(1.2345, null)).toThrow(TypeError);
  });
});
