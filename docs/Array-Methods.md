# Array Methods Documentation

## Overview

This document provides a guide on using array utility functions from the **Why Not** library. You can use these utilities either directly via function imports or through the `ArrayMutator` class.

## Table of Contents

1. [Overview](#overview)
2. [Available Methods](#available-methods)
   1. [toUnique](#1.tounique)
   2. [reproduceTo](#reproduceto)
   3. [filterBy](#filterby)
   4. [mapBy](#mapby)
   5. [groupBy](#groupby)
   6. [partitionBy](#partitionby)
   7. [pluck](#pluck)
   8. [compact](#compact)
   9. [sum](#sum)
3. [ArrayMutator Class](#arrayMutator-class)
4. [License](#license)

## Available Methods

### 1. `toUnique`

**Description**: Returns an array with unique values. Uses `JSON.stringify` for object comparison and `Set` for primitive types.

**Direct Function Usage**:

```js
import { toUnique } from 'why-not';

const numbers = [1, 2, 2, 3, 1];
const uniqueNumbers = toUnique(numbers); // [1, 2, 3]

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const uniqueObjects = toUnique(objects); // [{ id: 1 }, { id: 2 }, { id: 3 }]
```

**ArrayMutator Class Usage**:

```js
import { ArrayMutator } from 'why-not';

const arrayMutator = new ArrayMutator(numbers);
const uniqueNumbers = arrayMutator.toUnique(); // [1, 2, 3]

const objectMutator = new ArrayMutator(objects);
const uniqueObjects = objectMutator.toUnique(); // [{ id: 1 }, { id: 2 }, { id: 3 }]
```

### 2. `reproduceTo`

**Description**: Applies an operation to each element of the array with a given value. Can be used with arrays of primitives or objects.

**Direct Function Usage**:

```js
import { reproduceTo } from 'why-not';

const numbers = [1, 2, 2, 3, 1];
const updatedNumbers = reproduceTo(numbers, 2, (a, b) => a + b); // [3, 4, 4, 5, 3]

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const updatedObjects = reproduceTo(objects, 1, (a, b) => a + b, 'id'); // [{ id: 2 }, { id: 3 }, { id: 3 }, { id: 4 }, { id: 2 }]
```

**ArrayMutator Class Usage**:

```js
import { ArrayMutator } from 'why-not';

const arrayMutator = new ArrayMutator(numbers);
const updatedNumbers = arrayMutator.reproduceTo(2, (a, b) => a + b); // [3, 4, 4, 5, 3]

const objectMutator = new ArrayMutator(objects);
const updatedObjects = objectMutator.reproduceTo(1, (a, b) => a + b, 'id'); // [{ id: 2 }, { id: 3 }, { id: 3 }, { id: 4 }, { id: 2 }]
```

### 3. `filterBy`

**Description**: Filters the array based on a predicate function.

**Direct Function Usage**:

```js
import { filterBy } from 'why-not';

const numbers = [1, 2, 2, 3, 1];
const filteredNumbers = filterBy(numbers, (n) => n > 1); // [2, 2, 3]

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const filteredObjects = filterBy(objects, (o) => o.id > 1); // [{ id: 2 }, { id: 2 }, { id: 3 }]
```

**ArrayMutator Class Usage**:

```js
import { ArrayMutator } from 'why-not';

const arrayMutator = new ArrayMutator(numbers);
const filteredNumbers = arrayMutator.filterBy((n) => n > 1); // [2, 2, 3]

const objectMutator = new ArrayMutator(objects);
const filteredObjects = objectMutator.filterBy((o) => o.id > 1); // [{ id: 2 }, { id: 2 }, { id: 3 }]
```

### 4. `mapBy`

**Description**: Maps each element in the array using a callback function.

**Direct Function Usage**:

```js
import { mapBy } from 'why-not';

const numbers = [1, 2, 2, 3, 1];
const doubledNumbers = mapBy(numbers, (n) => n * 2); // [2, 4, 4, 6, 2]

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const mappedObjects = mapBy(objects, (o) => ({ ...o, id: o.id * 2 })); // [{ id: 2 }, { id: 4 }, { id: 4 }, { id: 6 }, { id: 2 }]
```

**ArrayMutator Class Usage**:

```js
import { ArrayMutator } from 'why-not';

const arrayMutator = new ArrayMutator(numbers);
const doubledNumbers = arrayMutator.mapBy((n) => n * 2); // [2, 4, 4, 6, 2]

const objectMutator = new ArrayMutator(objects);
const mappedObjects = objectMutator.mapBy((o) => ({ ...o, id: o.id * 2 })); // [{ id: 2 }, { id: 4 }, { id: 4 }, { id: 6 }, { id: 2 }]
```

### 5. `groupBy`

**Description**: Groups the array elements based on a key.

**Direct Function Usage**:

```js
import { groupBy } from 'why-not';

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const groupedObjects = groupBy(objects, 'id');
// {
//   '1': [{ id: 1 }, { id: 1 }],
//   '2': [{ id: 2 }, { id: 2 }],
//   '3': [{ id: 3 }]
// }
```

**ArrayMutator Class Usage**:

```js
import { ArrayMutator } from 'why-not';

const objectMutator = new ArrayMutator(objects);
const groupedObjects = objectMutator.groupBy('id');
// {
//   '1': [{ id: 1 }, { id: 1 }],
//   '2': [{ id: 2 }, { id: 2 }],
//   '3': [{ id: 3 }]
// }
```

### 6. `partitionBy`

**Description**: Partitions the array into two arrays based on a predicate function.

**Direct Function Usage**:

```js
import { partitionBy } from 'why-not';

const numbers = [1, 2, 2, 3, 1];
const [evens, odds] = partitionBy(numbers, (n) => n % 2 === 0);
// evens: [2, 2]
// odds: [1, 3, 1]
```

**ArrayMutator Class Usage**:

```js
import { ArrayMutator } from 'why-not';

const arrayMutator = new ArrayMutator(numbers);
const [evens, odds] = arrayMutator.partitionBy((n) => n % 2 === 0);
// evens: [2, 2]
// odds: [1, 3, 1]
```

### 7. `pluck`

**Description**: Extracts values from objects based on a key.

**Direct Function Usage**:

```js
import { pluck } from 'why-not';

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const ids = pluck(objects, 'id'); // [1, 2, 2, 3, 1]
```

**ArrayMutator Class Usage**:

```js
import { ArrayMutator } from 'why-not';

const objectMutator = new ArrayMutator(objects);
const ids = objectMutator.pluck('id'); // [1, 2, 2, 3, 1]
```

### 8. `compact`

**Description**: Removes falsy values from arrays. Can also handle objects by removing entries where a specified key is falsy.

**Direct Function Usage**:

```js
import { compact } from 'why-not';

const arrayWithFalsy = [1, 0, 2, false, 3, null, undefined, 'a'];
const compactedArray = compact(arrayWithFalsy);
// [1, 2, 3, 'a']

const objectsWithFalsy = [
  { id: 1 },
  { id: 2 },
  { id: null },
  { id: 3 },
  { id: undefined },
];
const compactedObjects = compact(objectsWithFalsy, 'id');
// [{ id: 1 }, { id: 2 }, { id: 3 }]
```

**ArrayMutator Class Usage**:

```js
import { ArrayMutator } from 'why-not';

const arrayMutator = new ArrayMutator(arrayWithFalsy);
const compactedArray = arrayMutator.compact(); // [1, 2, 3, 'a']

const objectMutator = new ArrayMutator(objectsWithFalsy);
const compactedObjects = objectMutator.compact('id'); // [{ id: 1 }, { id: 2 }, { id: 3 }]
```

### 9. `sum`

**Description**: Computes the sum of values in an array. Can handle both numbers and arrays of numbers.

**Direct Function Usage**:

```js
import { sum } from 'why-not';

const numbers = [1, 2, 3, 4, 5];
const total = sum(numbers); // 15

const arrays = [[1, 2], [3, 4], [5]];
const totalSum = sum(arrays); // 15
```

## ArrayMutator Class

The `ArrayMutator` class is designed to provide utility methods for manipulating arrays. Once an instance of `ArrayMutator` is created, you can use its methods to perform various operations on the array.

**Importing the ArrayMutator Class**

To use the `ArrayMutator` class, you need to import it from the `why-not` package:

```js
import { ArrayMutator } from 'why-not';
```

### Methods

#### 1. `compact`

**Description**: The `compact` method removes all falsy values from the array. For objects, you can specify a key to remove objects where the value associated with that key is falsy.

**Usage**:

1. **For Arrays with Primitive Values**:

   - Create an instance of `ArrayMutator` with your array.
   - Call the `compact` method to remove falsy values.

   ```js
   import { ArrayMutator } from 'why-not';

   const arrayWithFalsy = [1, 2, null, 3, undefined, 'a'];
   const arrayMutator = new ArrayMutator(arrayWithFalsy);
   const compactedArray = arrayMutator.compact(); // [1, 2, 3, 'a']
   ```

2. **For Arrays of Objects**:

   - Specify the key to check for falsy values.
   - The `compact` method will filter out objects where the specified key has a falsy value.

   ```js
   import { ArrayMutator } from 'why-not';

   const objectsWithFalsy = [{ id: 1 }, { id: 2 }, { id: null }, { id: 3 }];
   const objectMutator = new ArrayMutator(objectsWithFalsy);
   const compactedObjects = objectMutator.compact('id'); // [{ id: 1 }, { id: 2 }, { id: 3 }]
   ```

#### 2. `sum`

**Description**: The `sum` method calculates the sum of values in an array. It can handle arrays of numbers or arrays of arrays of numbers.

**Usage**:

1. **For Arrays of Numbers**:

   - Create an instance of `ArrayMutator` with your array of numbers.
   - Call the `sum` method to get the total sum.

   ```js
   import { ArrayMutator } from 'why-not';

   const numbers = [1, 2, 3, 4, 5];
   const arrayMutator = new ArrayMutator(numbers);
   const totalSum = arrayMutator.sum(); // 15
   ```

2. **For Arrays of Arrays of Numbers**:

   - The `sum` method can also handle nested arrays. It will sum up all the numbers across the nested arrays.

   ```js
   import { ArrayMutator } from 'why-not';

   const arrays = [[1, 2], [3, 4], [5]];
   const arrayOfArraysMutator = new ArrayMutator(arrays);
   const totalSum = arrayOfArraysMutator.sum(); // 15
   ```

---

Feel free to let me know if you need more details or have any specific questions!

## License

**Why Not** is licensed under the MIT License. See [LICENSE](LICENSE) for more details.
