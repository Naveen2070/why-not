# Usage Guide

The **Why-not** library provides utility functions for working with arrays, strings, dates, and more. This guide will walk you through the usage of the library's core features, including array methods and other utilities.

## Array Methods

The **Why-not** library includes a variety of methods to simplify common operations on arrays. Below are examples of how to use these methods.

### `toUnique`

Returns an array with unique values.

```js
import { toUnique } from 'why-not';

const numbers = [1, 2, 2, 3, 1];
const uniqueNumbers = toUnique(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3]

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const uniqueObjects = toUnique(objects);
console.log(uniqueObjects); // Output: [{ id: 1 }, { id: 2 }, { id: 3 }]
```

### `reproduceTo`

Applies an operation to array elements, using a specified value.

```js
import { reproduceTo } from 'why-not';

const numbers = [1, 2, 2, 3, 1];
const updatedNumbers = reproduceTo(numbers, 2, (a, b) => a + b);
console.log(updatedNumbers); // Output: [3, 4, 4, 5, 3]

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const updatedObjects = reproduceTo(objects, 1, (a, b) => a + b, 'id');
console.log(updatedObjects); // Output: [{ id: 2 }, { id: 3 }, { id: 3 }, { id: 4 }, { id: 2 }]
```

### `filterBy`

Filters array elements based on a predicate function.

```js
import { filterBy } from 'why-not';

const numbers = [1, 2, 2, 3, 1];
const filteredNumbers = filterBy(numbers, (n) => n > 1);
console.log(filteredNumbers); // Output: [2, 2, 3]

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const filteredObjects = filterBy(objects, (o) => o.id > 1);
console.log(filteredObjects); // Output: [{ id: 2 }, { id: 2 }, { id: 3 }]
```

### `mapBy`

Transforms array elements based on a callback function.

```js
import { mapBy } from 'why-not';

const numbers = [1, 2, 2, 3, 1];
const mappedNumbers = mapBy(numbers, (n) => n * 2);
console.log(mappedNumbers); // Output: [2, 4, 4, 6, 2]

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const mappedObjects = mapBy(objects, (o) => ({ ...o, id: o.id * 2 }));
console.log(mappedObjects); // Output: [{ id: 2 }, { id: 4 }, { id: 4 }, { id: 6 }, { id: 2 }]
```

### `groupBy`

Groups array elements by a specified key.

```js
import { groupBy } from 'why-not';

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const groupedObjects = groupBy(objects, 'id');
console.log(groupedObjects);
// Output: {
//   '1': [{ id: 1 }, { id: 1 }],
//   '2': [{ id: 2 }, { id: 2 }],
//   '3': [{ id: 3 }]
// }
```

### `partitionBy`

Partitions array elements based on a predicate function.

```js
import { partitionBy } from 'why-not';

const numbers = [1, 2, 2, 3, 1];
const [evens, odds] = partitionBy(numbers, (n) => n % 2 === 0);
console.log(evens); // Output: [2, 2]
console.log(odds); // Output: [1, 3, 1]

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const [greaterThanOne, lessOrEqualOne] = partitionBy(objects, (o) => o.id > 1);
console.log(greaterThanOne); // Output: [{ id: 2 }, { id: 2 }, { id: 3 }]
console.log(lessOrEqualOne); // Output: [{ id: 1 }, { id: 1 }]
```

### `pluck`

Extracts values from an array of objects based on a key.

```js
import { pluck } from 'why-not';

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const ids = pluck(objects, 'id');
console.log(ids); // Output: [1, 2, 2, 3, 1]
```

### `compact`

Removes falsy values from an array or an array of objects based on a key.

```js
import { compact } from 'why-not';

const numbers = [1, 0, 2, false, 3, null, undefined, 'a'];
const compactedNumbers = compact(numbers);
console.log(compactedNumbers); // Output: [1, 2, 3, 'a']

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

In addition to array methods, the **Why-not** library provides utilities for working with strings, dates, and more. Refer to the [documentation](introduction.md) for details on these features.

## Additional Information

For further details on each method and more examples, please visit the following documentation files:

- [Array Methods](Array-Methods.md)
- [String Methods](String-Methods.md) (Coming Soon)
- [Date Methods](Date-Methods.md) (Coming Soon)

Feel free to explore these resources to get the most out of the **Why-not** library.
