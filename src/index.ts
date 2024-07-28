//Namespace Imports
import * as ArrayFunctions from './array/index';
import * as MathFunctions from './math/index';

//Individual Imports
import {
  toUnique,
  reproduceTo,
  filterBy,
  mapBy,
  groupBy,
  partitionBy,
  pluck,
  compact,
} from './array/index';
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
} from './math/index';

//Mutators Imports
import { ArrayMutator } from './mutators/main';
import { MathMutator } from './mutators/main';

//All exports
export {
  ArrayFunctions,
  MathFunctions,
  ArrayMutator,
  MathMutator,
  toUnique,
  reproduceTo,
  filterBy,
  mapBy,
  groupBy,
  partitionBy,
  pluck,
  compact,
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
};
