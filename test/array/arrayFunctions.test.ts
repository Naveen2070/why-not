// @ts-nocheck
import {
  compact,
  filterBy,
  groupBy,
  mapBy,
  partitionBy,
  pluck,
  reproduceTo,
  toUnique,
  sum,
} from '../../src/index';
import { ArrayMutator } from '../../src/index';

describe('ArrayMutator', () => {
  const numbers = [1, 2, 2, 3, 1];
  const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
  const arrayWithFalsy = [1, 0, 2, false, 3, null, undefined, 'a'];
  const objectsWithFalsy = [
    { id: 1 },
    { id: 0 },
    { id: 2 },
    { id: null },
    { id: 3 },
    { id: 'a' },
  ];
  const emptyArray: any[] = [];

  const arrayMutNumbers = new ArrayMutator(numbers);
  const arrayMutObjects = new ArrayMutator(objects);
  const arrayMutFalsy = new ArrayMutator(arrayWithFalsy);
  const arrayMutObjectsWithFalsy = new ArrayMutator(objectsWithFalsy);
  const arrayMutEmpty = new ArrayMutator(emptyArray);

  test('toUnique should return unique values', () => {
    expect(arrayMutNumbers.toUnique()).toEqual([1, 2, 3]);
    expect(arrayMutObjects.toUnique()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });

  test('toUnique should return an empty array for empty input', () => {
    expect(arrayMutEmpty.toUnique()).toEqual([]);
  });

  test('reproduceTo should apply operation to primitive values', () => {
    expect(arrayMutNumbers.reproduceTo(2, (a, b) => a + b)).toEqual([
      3, 4, 4, 5, 3,
    ]);
  });

  test('reproduceTo should apply operation to object values', () => {
    expect(arrayMutObjects.reproduceTo(1, (a, b) => a + b, 'id')).toEqual([
      { id: 2 },
      { id: 3 },
      { id: 3 },
      { id: 4 },
      { id: 2 },
    ]);
  });

  test('reproduceTo should throw error if key is not defined in object', () => {
    expect(() =>
      arrayMutObjects.reproduceTo(1, (a, b) => a + b, 'invalidKey' as any)
    ).toThrow('key not defined');
  });

  test('reproduceTo should return an empty array for empty input', () => {
    expect(arrayMutEmpty.reproduceTo(1, (a, b) => a + b)).toEqual([]);
  });

  test('filterBy should filter elements by predicate', () => {
    expect(arrayMutNumbers.filterBy((n) => n > 1)).toEqual([2, 2, 3]);
    expect(arrayMutObjects.filterBy((o) => o.id > 1)).toEqual([
      { id: 2 },
      { id: 2 },
      { id: 3 },
    ]);
    expect(arrayMutEmpty.filterBy(() => true)).toEqual([]);
  });

  test('mapBy should map elements by callback', () => {
    expect(arrayMutNumbers.mapBy((n) => n * 2)).toEqual([2, 4, 4, 6, 2]);
    expect(arrayMutObjects.mapBy((o) => ({ ...o, id: o.id * 2 }))).toEqual([
      { id: 2 },
      { id: 4 },
      { id: 4 },
      { id: 6 },
      { id: 2 },
    ]);
    expect(arrayMutEmpty.mapBy(() => 1)).toEqual([]);
  });

  test('groupBy should group elements by key', () => {
    expect(arrayMutObjects.groupBy('id')).toEqual({
      '1': [{ id: 1 }, { id: 1 }],
      '2': [{ id: 2 }, { id: 2 }],
      '3': [{ id: 3 }],
    });
  });

  test('groupBy should throw error if array elements are not objects', () => {
    const arrayMutNumbers = new ArrayMutator(numbers);
    expect(() => arrayMutNumbers.groupBy('id' as any)).toThrow(
      'groupBy can only be used with arrays of objects'
    );
  });

  test('groupBy should return an empty object for empty input', () => {
    expect(arrayMutEmpty.groupBy('id')).toEqual([]);
  });

  test('partitionBy should partition elements by predicate', () => {
    const [evens, odds] = arrayMutNumbers.partitionBy((n) => n % 2 === 0);
    expect(evens).toEqual([2, 2]);
    expect(odds).toEqual([1, 3, 1]);

    const [idGreaterThanOne, idLessOrEqualOne] = arrayMutObjects.partitionBy(
      (o) => o.id > 1
    );
    expect(idGreaterThanOne).toEqual([{ id: 2 }, { id: 2 }, { id: 3 }]);
    expect(idLessOrEqualOne).toEqual([{ id: 1 }, { id: 1 }]);
  });

  test('partitionBy should return an empty array for empty input', () => {
    const [evens, odds] = arrayMutEmpty.partitionBy((n) => n % 2 === 0);
    expect(evens).toEqual([]);
    expect(odds).toEqual([]);
  });

  test('pluck should extract values by key', () => {
    expect(arrayMutObjects.pluck('id')).toEqual([1, 2, 2, 3, 1]);
  });

  test('pluck should throw error if array elements are not objects', () => {
    const arrayMutNumbers = new ArrayMutator(numbers);
    expect(() => arrayMutNumbers.pluck('id' as any)).toThrow(
      'pluck can only be used with arrays of objects'
    );
  });

  test('pluck should return an empty array for empty input', () => {
    expect(arrayMutEmpty.pluck('id')).toEqual([]);
  });

  test('compact should remove falsy values', () => {
    expect(arrayMutFalsy.compact()).toEqual([1, 2, 3, 'a']);

    expect(arrayMutObjectsWithFalsy.compact('id')).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 'a' },
    ]);
  });

  test('compact should return an empty array for empty input', () => {
    expect(arrayMutEmpty.compact()).toEqual([]);
  });

  it('sum should return 0 for an empty array', () => {
    expect(arrayMutEmpty.sum()).toBe(0);
  });

  it('sum should calculate the sum of an array of numbers', () => {
    expect(arrayMutNumbers.sum()).toBe(9);
  });

  it('sum should throw an error for an array with non-numeric values', () => {
    const arrayMutNonNumeric = new ArrayMutator(['1', '2', '3']);
    expect(() => arrayMutNonNumeric.sum()).toThrow(
      'The array should only contain numbers when no key is provided.'
    );
  });

  it('sum should calculate the sum of a specified numeric property in an array of objects', () => {
    expect(arrayMutObjects.sum('id')).toBe(9);
  });

  it('sum should throw an error if the specified property is not a number', () => {
    const array = [{ value: 1 }, { value: '2' }, { value: 3 }];
    const objectsWithNonNumeric = new ArrayMutator(array);
    expect(() => objectsWithNonNumeric.sum('id')).toThrow(
      "The property 'id' must be a number."
    );
  });

  it('sum should throw an error if the array is not an array of objects and a key is provided', () => {
    expect(() => arrayMutNumbers.sum('value')).toThrow(
      'The array should only contain objects when a key is provided.'
    );
  });

  it('sum should handle an array of objects with mixed numeric and non-numeric properties', () => {
    expect(() => arrayMutObjectsWithFalsy.sum('id')).toThrow(
      "The property 'id' must be a number."
    );
  });
});

describe('Standalone Functions', () => {
  const numbers = [1, 2, 2, 3, 1];
  const objects = [{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }, { id: 1 }];
  const arrayWithFalsy = [1, 0, 2, false, 3, null, undefined, 'a'];
  const objectsWithFalsy = [
    { id: 1 },
    { id: 0 },
    { id: 2 },
    { id: null },
    { id: 3 },
    { id: 'a' },
  ];
  const emptyArray: any[] = [];

  test('toUnique should return an empty array for empty input', () => {
    expect(toUnique([])).toEqual([]);
  });

  test('toUnique should return an empty array for empty input', () => {
    expect(toUnique(emptyArray)).toEqual([]);
  });

  test('toUnique should return unique values', () => {
    expect(toUnique(numbers)).toEqual([1, 2, 3]);
    expect(toUnique(objects)).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  test('reproduceTo should return an empty array for empty input', () => {
    expect(reproduceTo(emptyArray, 1, (a, b) => a + b)).toEqual([]);
  });

  test('reproduceTo should apply operation to primitive values', () => {
    expect(reproduceTo(numbers, 2, (a, b) => a + b)).toEqual([3, 4, 4, 5, 3]);
  });

  test('reproduceTo should apply operation to object values', () => {
    expect(reproduceTo(objects, 1, (a, b) => a + b, 'id')).toEqual([
      { id: 2 },
      { id: 3 },
      { id: 3 },
      { id: 4 },
      { id: 2 },
    ]);
  });

  test('reproduceTo should throw error if key is not defined in object', () => {
    expect(() =>
      reproduceTo(objects, 1, (a, b) => a + b, 'invalidKey' as any)
    ).toThrow('key not defined');
  });

  test('filterBy should return an empty array for empty input', () => {
    expect(filterBy(emptyArray, () => true)).toEqual([]);
  });

  test('filterBy should filter elements by predicate', () => {
    expect(filterBy(numbers, (n) => n > 1)).toEqual([2, 2, 3]);
    expect(filterBy(objects, (o) => o.id > 1)).toEqual([
      { id: 2 },
      { id: 2 },
      { id: 3 },
    ]);
  });

  test('mapBy should return an empty array for empty input', () => {
    expect(mapBy(emptyArray, (n) => n * 2)).toEqual([]);
  });

  test('mapBy should map elements by callback', () => {
    expect(mapBy(numbers, (n) => n * 2)).toEqual([2, 4, 4, 6, 2]);
    expect(mapBy(objects, (o) => ({ ...o, id: o.id * 2 }))).toEqual([
      { id: 2 },
      { id: 4 },
      { id: 4 },
      { id: 6 },
      { id: 2 },
    ]);
  });

  test('groupBy should return an empty array for empty input', () => {
    expect(groupBy(emptyArray, 'id')).toEqual([]);
  });

  test('groupBy should group elements by key', () => {
    expect(groupBy(objects, 'id')).toEqual({
      '1': [{ id: 1 }, { id: 1 }],
      '2': [{ id: 2 }, { id: 2 }],
      '3': [{ id: 3 }],
    });
  });

  test('groupBy should throw error if array elements are not objects', () => {
    expect(() => groupBy(numbers, 'id' as any)).toThrow(
      'groupBy can only be used with arrays of objects'
    );
  });

  test('partitionBy should return an empty array for empty input', () => {
    const [evens, odds] = partitionBy(emptyArray, (n) => n % 2 === 0);
    expect(evens).toEqual([]);
    expect(odds).toEqual([]);
  });

  test('partitionBy should partition elements by predicate', () => {
    const [evens, odds] = partitionBy(numbers, (n) => n % 2 === 0);
    expect(evens).toEqual([2, 2]);
    expect(odds).toEqual([1, 3, 1]);

    const [idGreaterThanOne, idLessOrEqualOne] = partitionBy(
      objects,
      (o) => o.id > 1
    );
    expect(idGreaterThanOne).toEqual([{ id: 2 }, { id: 2 }, { id: 3 }]);
    expect(idLessOrEqualOne).toEqual([{ id: 1 }, { id: 1 }]);
  });

  test('pluck should return an empty array for empty input', () => {
    expect(pluck(emptyArray, 'id')).toEqual([]);
  });

  test('pluck should extract values by key', () => {
    expect(pluck(objects, 'id')).toEqual([1, 2, 2, 3, 1]);
  });

  test('pluck should throw error if array elements are not objects', () => {
    expect(() => pluck(numbers, 'id' as any)).toThrow(
      'pluck can only be used with arrays of objects'
    );
  });

  test('compact should return an empty array for empty input', () => {
    expect(compact(emptyArray)).toEqual([]);
  });

  test('compact should remove falsy values', () => {
    expect(compact(arrayWithFalsy)).toEqual([1, 2, 3, 'a']);

    expect(compact(objectsWithFalsy, 'id')).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 'a' },
    ]);
  });

  it('should return 0 for an empty array', () => {
    expect(sum([])).toBe(0);
  });

  it('should calculate the sum of an array of numbers', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });

  it('should throw an error for an array with non-numeric values', () => {
    expect(() => sum([1, '2', 3])).toThrow(
      'The array should only contain numbers when no key is provided.'
    );
  });

  it('should calculate the sum of a specified numeric property in an array of objects', () => {
    const array = [{ value: 1 }, { value: 2 }, { value: 3 }];
    expect(sum(array, 'value')).toBe(6);
  });

  it('should throw an error if the specified property is not a number', () => {
    const array = [{ value: 1 }, { value: '2' }, { value: 3 }];
    expect(() => sum(array, 'value')).toThrow(
      "The property 'value' must be a number."
    );
  });

  it('should throw an error if the array is not an array of objects and a key is provided', () => {
    expect(() => sum([1, 2, 3], 'value')).toThrow(
      'The array should only contain objects when a key is provided.'
    );
  });

  it('should handle an array of objects with mixed numeric and non-numeric properties', () => {
    const array = [
      { value: 1 },
      { value: '2' },
      { value: 3 },
      { value: null },
      { value: undefined },
    ];
    expect(() => sum(array, 'value')).toThrow(
      "The property 'value' must be a number."
    );
  });
});
