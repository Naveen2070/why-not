# String Utilities Documentation

## Table of Contents

1. [Overview](#overview)
2. [Available Methods](#available-methods)
   - [toCamelCase](#toCamelCase)
   - [toPascalCase](#toPascalCase)
   - [toSnakeCase](#toSnakeCase)
   - [toKebabCase](#toKebabCase)
   - [toTitleCase](#toTitleCase)
   - [replaceAt](#replaceAt)
   - [escapeHTML](#escapeHTML)
   - [unescapeHTML](#unescapeHTML)
   - [isNumeric](#isNumeric)
   - [isEmail](#isEmail)
   - [isURL](#isURL)
   - [isAlpha](#isAlpha)
   - [isAlphanumeric](#isAlphanumeric)
   - [splitWords](#splitWords)
   - [splitByLength](#splitByLength)
   - [isEqual](#isEqual)
3. [StringMutator Class](#stringMutator-class)
   - [Class Definition](#class-definition)
   - [Methods](#methods)
4. [CompareOptions Interface](#compareoptions-interface)
5. [Conclusion](#conclusion)

## Overview

This document provides a guide on using the string utility functions and the `StringMutator` class available in the library. The functions cover various operations such as case conversions, replacements, validation, and comparisons.

## Available Methods

### 1. `toCamelCase`

Converts a string to camel case.

#### Parameters

- **`str`**: _string_  
  The input string to be converted.

#### Returns

- _string_  
  The converted camel case string.

#### Example Usage

```js
import { toCamelCase } from 'why-not-utils';

const camelCaseStr = toCamelCase('example-string');
console.log(camelCaseStr); // Outputs: 'exampleString'
```

### 2. `toPascalCase`

Converts a string to Pascal case.

#### Parameters

- **`str`**: _string_
  The input string to be converted.

#### Returns

- _string_
  The converted Pascal case string.

#### Example Usage

```js
import { toPascalCase } from 'why-not-utils';

const pascalCaseStr = toPascalCase('example-string');
console.log(pascalCaseStr); // Outputs: 'ExampleString'
```

### 3. `toSnakeCase`

Converts a string to snake case.

#### Parameters

- **`str`**: _string_
  The input string to be converted.

#### Returns

- _string_
  The converted snake case string.

#### Example Usage

```js
import { toSnakeCase } from 'why-not-utils';

const snakeCaseStr = toSnakeCase('exampleString');
console.log(snakeCaseStr); // Outputs: 'example_string'
```

### 4. `toKebabCase`

Converts a string to kebab case.

#### Parameters

- **`str`**: _string_
  The input string to be converted.

#### Returns

- _string_
  The converted kebab case string.

#### Example Usage

```js
import { toKebabCase } from 'why-not-utils';

const kebabCaseStr = toKebabCase('exampleString');
console.log(kebabCaseStr); // Outputs: 'example-string'
```

### 5. `toTitleCase`

Converts a string to Title Case.

#### Parameters

- **`str`**: _string_
  The input string to be converted.

#### Returns

- _string_
  The converted Title Case string.

#### Example Usage

```js
import { toTitleCase } from 'why-not-utils';

const titleCaseStr = toTitleCase('example string');
console.log(titleCaseStr); // Outputs: 'Example String'
```

### 6. `replaceAt`

Replaces a single character in a string at the specified index with a replacement character.

#### Parameters

- **`str`**: _string_
  The input string.

- **`index`**: _number_
  The index of the character to replace.

- **`replacement`**: _string_
  The replacement character.

#### Returns

- _string_
  The new string with the replacement character.

#### Example Usage

```js
import { replaceAt } from 'why-not-utils';

const replacedStr = replaceAt('example', 3, 'z');
console.log(replacedStr); // Outputs: 'exazmple'
```

### 7. `escapeHTML`

Escapes special HTML characters in a string.

#### Parameters

- **`str`**: _string_
  The input string.

#### Returns

- _string_
  The string with HTML characters escaped.

#### Example Usage

```js
import { escapeHTML } from 'why-not-utils';

const escapedStr = escapeHTML('<div>example</div>');
console.log(escapedStr); // Outputs: '&lt;div&gt;example&lt;/div&gt;'
```

### 8. `unescapeHTML`

Unescapes special HTML characters in a string.

#### Parameters

- **`str`**: _string_
  The input string.

#### Returns

- _string_
  The string with HTML characters unescaped.

#### Example Usage

```js
import { unescapeHTML } from 'why-not-utils';

const unescapedStr = unescapeHTML('&lt;div&gt;example&lt;/div&gt;');
console.log(unescapedStr); // Outputs: '<div>example</div>'
```

### 9. `isNumeric`

Checks if a string is a valid number.

#### Parameters

- **`str`**: _string_
  The input string to check.

#### Returns

- _boolean_
  `true` if the string is a valid number, `false` otherwise.

#### Example Usage

```js
import { isNumeric } from 'why-not-utils';

const isNum = isNumeric('12345');
console.log(isNum); // Outputs: true
```

### 10. `isEmail`

Checks if a string is a valid email address.

#### Parameters

- **`str`**: _string_
  The input string to check.

#### Returns

- _boolean_
  `true` if the string is a valid email address, `false` otherwise.

#### Example Usage

```js
import { isEmail } from 'why-not-utils';

const isValidEmail = isEmail('example@example.com');
console.log(isValidEmail); // Outputs: true
```

### 11. `isURL`

Checks if a string is a valid URL.

#### Parameters

- **`str`**: _string_
  The input string to check.

#### Returns

- _boolean_
  `true` if the string is a valid URL, `false` otherwise.

#### Example Usage

```js
import { isURL } from 'why-not-utils';

const isValidURL = isURL('https://www.example.com');
console.log(isValidURL); // Outputs: true
```

### 12. `isAlpha`

Checks if a string contains only alphabetic characters.

#### Parameters

- **`str`**: _string_
  The input string to check.

#### Returns

- _boolean_
  `true` if the string contains only alphabetic characters, `false` otherwise.

#### Example Usage

```js
import { isAlpha } from 'why-not-utils';

const isOnlyAlpha = isAlpha('example');
console.log(isOnlyAlpha); // Outputs: true
```

### 13. `isAlphanumeric`

Checks if a string contains only alphanumeric characters.

#### Parameters

- **`str`**: _string_
  The input string to check.

#### Returns

- _boolean_
  `true` if the string contains only alphanumeric characters, `false` otherwise.

#### Example Usage

```js
import { isAlphanumeric } from 'why-not-utils';

const isOnlyAlphanumeric = isAlphanumeric('example123');
console.log(isOnlyAlphanumeric); // Outputs: true
```

### 14. `splitWords`

Splits a string into an array of words.

#### Parameters

- **`str`**: _string_
  The string to split.

#### Returns

- _string[]_
  An array of words.

#### Example Usage

```js
import { splitWords } from 'why-not-utils';

const words = splitWords('This is an example string');
console.log(words); // Outputs: ['This', 'is', 'an', 'example', 'string']
```

### 15. `splitByLength`

Splits a string into an array of substrings of a specified length.

#### Parameters

- **`str`**: _string_
  The string to split.

- **`length`**: _number_
  The length of each substring.

#### Returns

- _string[]_
  An array of substrings.

#### Example Usage

```js
import { splitByLength } from 'why-not-utils';

const substrings = splitByLength('exampleString', 3);
console.log(substrings); // Outputs: ['exa', 'mpl', 'eSt', 'rin', 'g']
```

### 16. `isEqual`

Compares two strings based on provided options.

#### Parameters

- **`str1`**: _string_
  The first string to compare.

- **`str2`**: _string_
  The second string to compare.

- **`options`**: _CompareOptions_ (optional)  
  Options to customize the comparison.

#### Returns

- _boolean_  
  `true` if the strings are equal based on the provided options; `false` otherwise.

#### Example Usage

```js
import { isEqual } from 'why-not-utils';

const areEqual = isEqual('example', 'Example', { ignoreCase: true });
console.log(areEqual); // Outputs: true

const startsWith = isEqual('example', 'ex', { startsWith: true });
console.log(startsWith); // Outputs: true

const endsWith = isEqual('example', 'ample', { endsWith: true });
console.log(endsWith); // Outputs: true

const hasPattern = isEqual('example', 'ex', { has: true });
console.log(hasPattern); // Outputs: true

const matchesPattern = isEqual('example', 'ex.*', { ofPattern: /^ex.*/ });
console.log(matchesPattern); // Outputs: true
```

## StringMutator Class

The `StringMutator` class provides methods for mutating a string in various ways.

### Class Definition

#### Constructor

- **`constructor(str: string)`**  
  Constructs a new `StringMutator` instance with the given string.

#### Methods

- **`toCamelCase()`**: Converts the string to camel case.
- **`toPascalCase()`**: Converts the string to Pascal case.
- **`toSnakeCase()`**: Converts the string to snake case.
- **`toKebabCase()`**: Converts the string to kebab case.
- **`toTitleCase()`**: Converts the string to title case.
- **`replaceAt(index: number, replacement: string)`**: Replaces a single character at the specified index with the given replacement character.
- **`escapeHTML()`**: Escapes special HTML characters in the string.
- **`unescapeHTML()`**: Unescapes special HTML characters in the string.
- **`isNumeric()`**: Checks if the string contains only numeric characters.
- **`isEmail()`**: Checks if the string is a valid email address.
- **`isURL()`**: Checks if the string is a valid URL.
- **`isAlpha()`**: Checks if the string contains only alphabetic characters.
- **`isAlphanumeric()`**: Checks if the string contains only alphanumeric characters.
- **`isEqual(otherStr: string, options?: CompareOptions)`**: Compares the string to another string based on provided options.
- **`splitWords()`**: Splits the string into an array of words.
- **`splitByLength(length: number)`**: Splits the string into an array of substrings of the specified length.

### Example Usage

```js
import { StringMutator } from 'why-not-utils';

const mutator = new StringMutator('example-string');

console.log(mutator.toCamelCase()); // Outputs: 'exampleString'
console.log(mutator.toPascalCase()); // Outputs: 'ExampleString'
console.log(mutator.replaceAt(3, 'z')); // Outputs: 'exaZple-string'
console.log(mutator.escapeHTML()); // Outputs: 'example-string'
console.log(mutator.isAlpha()); // Outputs: false
console.log(mutator.splitWords()); // Outputs: ['example', 'string']
console.log(mutator.splitByLength(3)); // Outputs: ['exa', 'mpl', 'e-s', 'tri', 'ng']
console.log(mutator.isEqual('Example-String', { ignoreCase: true })); // Outputs: true
```

## CompareOptions Interface

Defines the options for comparing strings.

- **`ignoreCase`**: _boolean_ (optional)  
  Whether to ignore case differences when comparing strings.

- **`startsWith`**: _boolean_ (optional)  
  Whether to check if the first string starts with the second string.

- **`endsWith`**: _boolean_ (optional)  
  Whether to check if the first string ends with the second string.

- **`has`**: _boolean_ (optional)  
  Whether to check if the first string contains the second string.

- **`ofPattern`**: _string_ | _RegExp_ (optional)  
  A pattern to match the first string against.

## Conclusion

These string utilities provide a range of functions for manipulating and validating strings. You can use these functions individually or combine them with the `StringMutator` class to handle various string-related tasks efficiently.
