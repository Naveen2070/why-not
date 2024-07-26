import { toUnique, reproduceTo } from './index';

function main() {
  unique();
  reproduce();
}

main();
function unique() {
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
}

function reproduce() {
  const numbers = [1, 2, 3, 4];
  const result = reproduceTo(numbers, 2, (a, b) => a * b);
  console.log(result); // [3, 4, 5, 6]

  // Example usage with object array
  const objects = [{ count: 1 }, { count: 2 }];
  const resultObjects = reproduceTo(objects, 2, (a, b) => a * b, 'count');
  console.log(resultObjects); // [{ count: 3 }, { count: 4 }]
}
