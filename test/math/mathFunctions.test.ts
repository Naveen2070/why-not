import {
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
} from '../../src/index';

describe('MathMutator', () => {
  const numbers = [1, 2, 2, 3, 1, 4, 5];

  const mathMutNumbers = new MathMutator(numbers);

  test('gcd should calculate the greatest common divisor', () => {
    expect(mathMutNumbers.gcd(8, 12)).toBe(4);
  });

  test('lcm should calculate the least common multiple', () => {
    expect(mathMutNumbers.lcm(4, 5)).toBe(20);
  });

  test('isPrime should correctly identify prime numbers', () => {
    expect(mathMutNumbers.isPrime(2)).toBe(true);
    expect(mathMutNumbers.isPrime(4)).toBe(false);
  });

  test('factorial should calculate the factorial of a number', () => {
    expect(mathMutNumbers.factorial(5)).toBe(120);
  });

  test('fibonacci should generate the nth Fibonacci number', () => {
    expect(mathMutNumbers.fibonacci(5)).toBe(5);
    expect(mathMutNumbers.fibonacci(10)).toBe(55);
  });

  test('mean should calculate the mean of the array', () => {
    expect(mathMutNumbers.mean()).toBeCloseTo(2.571, 3);
  });

  test('median should calculate the median of the array', () => {
    expect(mathMutNumbers.median()).toBe(2);
  });

  test('mode should find the mode(s) of the array', () => {
    expect(mathMutNumbers.mode()).toEqual([1, 2]);
  });

  test('standardDeviation should calculate the standard deviation of the array', () => {
    expect(mathMutNumbers.standardDeviation()).toBeCloseTo(1.399, 3);
  });

  test('range should calculate the range of the array', () => {
    expect(mathMutNumbers.range()).toBe(4);
  });
});

describe('Standalone Functions', () => {
  const numbers = [1, 2, 2, 3, 1, 4, 5];

  test('gcd should calculate the greatest common divisor', () => {
    expect(gcd(8, 12)).toBe(4);
  });

  test('lcm should calculate the least common multiple', () => {
    expect(lcm(4, 5)).toBe(20);
  });

  test('isPrime should correctly identify prime numbers', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(4)).toBe(false);
  });

  test('factorial should calculate the factorial of a number', () => {
    expect(factorial(5)).toBe(120);
  });

  test('fibonacci should generate the nth Fibonacci number', () => {
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });

  test('mean should calculate the mean of an array', () => {
    expect(mean(numbers)).toBeCloseTo(2.571, 3);
  });

  test('median should calculate the median of an array', () => {
    expect(median(numbers)).toBe(2);
  });

  test('mode should find the mode(s) of an array', () => {
    expect(mode(numbers)).toEqual([1, 2]);
  });

  test('standardDeviation should calculate the standard deviation of an array', () => {
    expect(standardDeviation(numbers)).toBeCloseTo(1.399, 3);
  });

  test('range should calculate the range of an array', () => {
    expect(range(numbers)).toBe(4);
  });
});
