# Why Not

**Why Not** is a utility library designed to streamline development by providing a collection of reusable methods. It helps reduce redundant code and enhance code readability. This library offers utilities not only for array manipulation but also for operations involving math, dates, strings, and more.

## Features

- **Array Utilities**: Methods for unique values, filtering, mapping, grouping, and more.
- **Math Utilities**: Functions to simplify common mathematical operations.
- **Date Utilities**: Helpful functions for date manipulation and formatting.
- **String Utilities**: Methods for string manipulation and formatting (Coming Soon).

## Installation

You can install **Why Not** via npm (not available yet):

```bash
npm install why-not-utils
```

## Usage

Here are some examples of how to use **Why Not**:

### Array Utilities

```js
import { toUnique, filterBy, mapBy, groupBy, compact } from 'why-not-utils';

const numbers = [1, 2, 2, 3, 1];
const uniqueNumbers = toUnique(numbers); // [1, 2, 3]

const filtered = filterBy(numbers, (n) => n > 1); // [2, 2, 3]
const doubled = mapBy(numbers, (n) => n * 2); // [2, 4, 4, 6, 2]

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const grouped = groupBy(objects, 'id'); // { '1': [{ id: 1 }, { id: 1 }], '2': [{ id: 2 }, { id: 2 }], '3': [{ id: 3 }] }

const compacted = compact([1, 0, 2, false, 3, null, undefined, '']); // [1, 2, 3]
```

### Math Utilities

```js
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
  MathMutator,
} from 'why-not-utils';

const a = 12;
const b = 15;

console.log(gcd(a, b)); // 3
console.log(lcm(a, b)); // 60
console.log(isPrime(17)); // true
console.log(factorial(5)); // 120
console.log(fibonacci(7)); // 13

const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

console.log(mean(array)); // 3
console.log(median(array)); // 3
console.log(mode(array)); // [4]
console.log(standardDeviation(array)); // 1.0954
console.log(range(array)); // 3
console.log(roundTo(1.23456789, 4)); // 1.2346

const mathMutator = new MathMutator(array);
console.log(mathMutator.mean()); // 3
console.log(mathMutator.median()); // 3
console.log(mathMutator.mode()); // [4]
console.log(mathMutator.standardDeviation()); // 1.0954
console.log(mathMutator.range()); // 3
console.log(mathMutator.roundTo(1.23456789, 4)); // 1.2346
```

### Date Utilities

```js
import { DateFormatter } from 'why-not-utils';
const formattedDate = DateFormatter(dateStr, { format: 'dd/MM/yyyy' });
console.log(formattedDate); // 30/07/2023
```

Refer to the [docs](./docs/Introduction.md) for more information.

## API

For detailed API documentation, refer to the [docs](./docs/Introduction.md).

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Author

This project is maintained by [Naveen](https://github.com/Naveen2070).
