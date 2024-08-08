# Math Methods Documentation

## Overview

This document provides a guide on using mathematical utility functions from the **Why Not** library. You can use these utilities either directly via function imports or through the `MathMutator` class.

---

1. [Overview](#overview)
2. [Available Methods](#available-methods)
   1. [gcd](#gcd)
   2. [lcm](#lcm)
   3. [isPrime](#isprime)
   4. [factorial](#factorial)
   5. [fibonacci](#fibonacci)
   6. [mean](#mean)
   7. [median](#median)
   8. [mode](#mode)
   9. [standardDeviation](#standarddeviation)
   10. [range](#range)
   11. [roundTo](#roundto)
3. [MathMutator Class](#mathmutator-class)
4. [License](#license)

## Available Methods

### 1. `gcd`

**Description**: Calculates the greatest common divisor (GCD) of two numbers.

**Direct Function Usage**:

```js
import { gcd } from 'why-not-utils';

const result = gcd(48, 18); // 6
```

**Throws**:

- `TypeError` if either argument is not a number.
- `RangeError` if either argument is not finite.

### 2. `lcm`

**Description**: Calculates the least common multiple (LCM) of two numbers.

**Direct Function Usage**:

```js
import { lcm } from 'why-not-utils';

const result = lcm(12, 15); // 60
```

**Throws**:

- `TypeError` if either argument is not a number.
- `RangeError` if either argument is not finite.

### 3. `isPrime`

**Description**: Checks if a number is prime.

**Direct Function Usage**:

```js
import { isPrime } from 'why-not-utils';

const result = isPrime(7); // true
```

**Throws**:

- `TypeError` if the argument is not a number.
- `RangeError` if the argument is not finite.

### 4. `factorial`

**Description**: Calculates the factorial of a given number.

**Direct Function Usage**:

```js
import { factorial } from 'why-not-utils';

const result = factorial(5); // 120
```

**Throws**:

- `TypeError` if the argument is not a non-negative integer.

### 5. `fibonacci`

**Description**: Calculates the nth Fibonacci number.

**Direct Function Usage**:

```js
import { fibonacci } from 'why-not-utils';

const result = fibonacci(6); // 8
```

**Throws**:

- `TypeError` if the argument is not a non-negative integer.

### 6. `mean`

**Description**: Calculates the mean (average) of an array of numbers.

**Direct Function Usage**:

```js
import { mean } from 'why-not-utils';

const result = mean([1, 2, 3, 4, 5]); // 3
```

**Throws**:

- `TypeError` if the input is not a non-empty array.

### 7. `median`

**Description**: Calculates the median of an array of numbers.

**Direct Function Usage**:

```js
import { median } from 'why-not-utils';

const result = median([1, 2, 3, 4, 5]); // 3
```

**Throws**:

- `TypeError` if the input is not a non-empty array.
- `Error` if the array is invalid.

### 8. `mode`

**Description**: Calculates the mode(s) of an array of numbers.

**Direct Function Usage**:

```js
import { mode } from 'why-not-utils';

const result = mode([1, 2, 2, 3, 3, 3]); // [3]
```

**Throws**:

- `TypeError` if the input is not a non-empty array.

### 9. `standardDeviation`

**Description**: Calculates the standard deviation of an array of numbers.

**Direct Function Usage**:

```js
import { standardDeviation } from 'why-not-utils';

const result = standardDeviation([1, 2, 3, 4, 5]); // 1.5811
```

**Throws**:

- `TypeError` if the input is not a non-empty array or contains non-number values.

### 10. `range`

**Description**: Calculates the range of a given array of numbers.

**Direct Function Usage**:

```js
import { range } from 'why-not-utils';

const result = range([1, 2, 3, 4, 5]); // 4
```

**Throws**:

- `TypeError` if the input is not an array or is empty.
- `Error` if the array contains non-number values.

### 11. `roundTo`

**Description**: Rounds a number to a specified decimal place.

**Direct Function Usage**:

```js
import { roundTo } from 'why-not-utils';

const result = roundTo(3.14159, 2); // 3.14
```

**Throws**:

- `TypeError` if `value` or `decimalPlaces` is null or undefined.

## MathMutator Class

The `MathMutator` class provides a set of math functions wrapped in a class for chaining.

### Methods

- **`gcd(a: number, b: number): number`**: Calculates the GCD of two numbers.
- **`lcm(a: number, b: number): number`**: Calculates the LCM of two numbers.
- **`isPrime(n: number): boolean`**: Checks if a number is prime.
- **`factorial(n: number): number`**: Calculates the factorial of a number.
- **`fibonacci(n: number): number`**: Generates the nth Fibonacci number.
- **`mean(): number`**: Calculates the mean of the array.
- **`median(): number`**: Calculates the median of the array.
- **`mode(): number[]`**: Finds the mode(s) of the array.
- **`standardDeviation(): number`**: Calculates the standard deviation of the array.
- **`range(): number`**: Calculates the range of the array.
- **`roundTo(number: number, decimalPlaces: number): number`**: Rounds a number to a specified decimal place.

**Example Usage**:

```js
import { MathMutator } from 'why-not-utils';

const mathMutator = new MathMutator([1, 2, 3, 4, 5]);

const mean = mathMutator.mean(); // 3
const stdDev = mathMutator.standardDeviation(); // 1.5811
```

## License

This documentation and the **Why Not** library are licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.
