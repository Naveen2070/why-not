# Usage Guide

The **Why-not** library provides utility functions to simplify operations on arrays, strings, dates, and more. This guide will walk you through how to use the core features of the library, focusing primarily on array methods.

## Array Methods

The **Why-not** library offers several methods to perform common operations on arrays efficiently. Here’s how you can use these methods:

### `toUnique`

This method returns an array with only unique values, removing duplicates.

```js
import { toUnique } from 'why-not';

// Example with numbers
const numbers = [1, 2, 2, 3, 1];
const uniqueNumbers = toUnique(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3]

// Example with objects
const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const uniqueObjects = toUnique(objects);
console.log(uniqueObjects); // Output: [{ id: 1 }, { id: 2 }, { id: 3 }]
```

### `reproduceTo`

This method applies a specified operation to array elements and uses a provided value to determine the operation.

```js
import { reproduceTo } from 'why-not';

// Example with numbers
const numbers = [1, 2, 2, 3, 1];
const updatedNumbers = reproduceTo(numbers, 2, (a, b) => a + b);
console.log(updatedNumbers); // Output: [3, 4, 4, 5, 3]

// Example with objects
const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const updatedObjects = reproduceTo(objects, 1, (a, b) => a + b, 'id');
console.log(updatedObjects); // Output: [{ id: 2 }, { id: 3 }, { id: 3 }, { id: 4 }, { id: 2 }]
```

### `filterBy`

Filters elements of an array based on a provided predicate function.

```js
import { filterBy } from 'why-not';

// Example with numbers
const numbers = [1, 2, 2, 3, 1];
const filteredNumbers = filterBy(numbers, (n) => n > 1);
console.log(filteredNumbers); // Output: [2, 2, 3]

// Example with objects
const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const filteredObjects = filterBy(objects, (o) => o.id > 1);
console.log(filteredObjects); // Output: [{ id: 2 }, { id: 2 }, { id: 3 }]
```

### `mapBy`

Transforms each element of an array according to a provided callback function.

```js
import { mapBy } from 'why-not';

// Example with numbers
const numbers = [1, 2, 2, 3, 1];
const mappedNumbers = mapBy(numbers, (n) => n * 2);
console.log(mappedNumbers); // Output: [2, 4, 4, 6, 2]

// Example with objects
const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const mappedObjects = mapBy(objects, (o) => ({ ...o, id: o.id * 2 }));
console.log(mappedObjects); // Output: [{ id: 2 }, { id: 4 }, { id: 4 }, { id: 6 }, { id: 2 }]
```

### `groupBy`

Groups elements of an array by a specified key or property.

```js
import { groupBy } from 'why-not';

// Example with objects
const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const groupedObjects = groupBy(objects, 'id');
console.log(groupedObjects);
// Output:
// {
//   '1': [{ id: 1 }, { id: 1 }],
//   '2': [{ id: 2 }, { id: 2 }],
//   '3': [{ id: 3 }]
// }
```

### `partitionBy`

Partitions elements of an array into two groups based on a predicate function.

```js
import { partitionBy } from 'why-not';

// Example with numbers
const numbers = [1, 2, 2, 3, 1];
const [evens, odds] = partitionBy(numbers, (n) => n % 2 === 0);
console.log(evens); // Output: [2, 2]
console.log(odds); // Output: [1, 3, 1]

// Example with objects
const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const [greaterThanOne, lessOrEqualOne] = partitionBy(objects, (o) => o.id > 1);
console.log(greaterThanOne); // Output: [{ id: 2 }, { id: 2 }, { id: 3 }]
console.log(lessOrEqualOne); // Output: [{ id: 1 }, { id: 1 }]
```

### `pluck`

Extracts values from an array of objects based on a specified key.

```js
import { pluck } from 'why-not';

// Example with objects
const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const ids = pluck(objects, 'id');
console.log(ids); // Output: [1, 2, 2, 3, 1]
```

### `compact`

Removes falsy values from an array, or from an array of objects based on a key.

```js
import { compact } from 'why-not';

// Example with numbers
const numbers = [1, 0, 2, false, 3, null, undefined, 'a'];
const compactedNumbers = compact(numbers);
console.log(compactedNumbers); // Output: [1, 2, 3, 'a']

// Example with objects
const objects = [
  { id: 1 },
  { id: 0 },
  { id: 2 },
  { id: null },
  { id: 3 },
  { id: 'a' },
];
const compactedObjects = compact(objects, 'id');
console.log(compactedObjects); // Output: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 'a' }]
```

## Other Features

In addition to array methods, the **Why-not** library includes utilities for strings, dates, and more. For detailed documentation on these features, please refer to the following resources:

- [Array Methods](Array-Methods.md)
- [Math Methods](mathematical-utilities.md)
- [String Methods](string-utilities.md)
- [Date Methods](date-utilities.md)

Feel free to explore these resources to fully leverage the **Why-not** library in your projects.
