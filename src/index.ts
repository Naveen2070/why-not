//Namespace Imports
import * as ArrayFunctions from './array/index';
import * as MathFunctions from './math/index';
import * as DateFunctions from './date-and-time/index';
import * as StringFunctions from './string/index';

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
  sum,
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
import { DateFormatter, FormatTimeStamp } from './date-and-time/index';
import {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toTitleCase,
} from './string/index';

//Mutators Imports
import { ArrayMutator } from './mutators/main';
import { MathMutator } from './mutators/main';
import { StringMutator } from './mutators/main';

//All exports
export {
  //Array Exports
  ArrayFunctions,
  ArrayMutator,
  toUnique,
  reproduceTo,
  filterBy,
  mapBy,
  groupBy,
  partitionBy,
  pluck,
  compact,
  sum,

  //Math Exports
  MathFunctions,
  MathMutator,
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

  //Date and Time Exports
  DateFunctions,
  DateFormatter,
  FormatTimeStamp,

  //String Exports
  StringFunctions,
  StringMutator,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toTitleCase,
};
