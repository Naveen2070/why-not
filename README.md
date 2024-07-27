# Why Not

# Notice: Still not deployed as a npm package. In development stage

**Why Not** is a utility library designed to streamline development by providing a collection of reusable methods. It helps reduce redundant code and enhance code readability. This library offers utilities not only for array manipulation but also for operations involving math, dates, strings, and more.

## Features

- **Array Utilities**: Methods for unique values, filtering, mapping, grouping, and more.
- **Math Utilities**: Functions to simplify common mathematical operations.
- **Date Utilities**: Helpful functions for date manipulation and formatting.
- **String Utilities**: Methods for string manipulation and formatting.

## Installation

You can install **Why Not** via npm:

```bash
npm install why-not
```

## Usage

Here are some examples of how to use **Why Not**:

### Array Utilities

```js
import { toUnique, filterBy, mapBy, groupBy, compact } from 'why-not';

const numbers = [1, 2, 2, 3, 1];
const uniqueNumbers = toUnique(numbers); // [1, 2, 3]

const filtered = filterBy(numbers, (n) => n > 1); // [2, 2, 3]
const doubled = mapBy(numbers, (n) => n * 2); // [2, 4, 4, 6, 2]

const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
const grouped = groupBy(objects, 'id'); // { '1': [{ id: 1 }, { id: 1 }], '2': [{ id: 2 }, { id: 2 }], '3': [{ id: 3 }] }

const compacted = compact([1, 0, 2, false, 3, null, undefined, '']); // [1, 2, 3]
```

### Math Utilities

(To be included soon...)

### Date Utilities

(To be included soon...)

### String Utilities

(To be included soon...)

## API

For detailed API documentation, refer to the [docs](./docs/Introduction.md).

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Author

This project is maintained by [Naveen](https://github.com/Naveen2070).
