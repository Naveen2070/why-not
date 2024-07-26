import { toUnique } from './index';

// Array of strings
const strings = ['a', 'b', 'a', 'c'];
console.log(toUnique(strings)); // ['a', 'b', 'c']

// Array of numbers
const numbers = [1, 2, 2, 3, 1];
console.log(toUnique(numbers)); // [1, 2, 3]

// Array of objects
const objects = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
];
console.log(toUnique(objects)); // [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
