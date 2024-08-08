# Why-not Library Introduction

Welcome to the **Why-not** library! **Why-not** is a versatile utility library designed to reduce redundant code and simplify your development process. It offers a comprehensive collection of utility functions that enhance common operations, making it easier to work with arrays, perform mathematical calculations, handle dates, and manipulate strings.

## Why Use Why-not?

In modern development, efficiency is key. **Why-not** streamlines your codebase by providing a suite of methods that handle frequent tasks with minimal boilerplate. Whether you're dealing with arrays or need utilities for other data types, **Why-not** ensures that you write less repetitive code and focus more on solving complex problems.

## Features

- **Array Methods**: Simplify common array operations such as ensuring uniqueness, filtering, mapping, grouping, partitioning, and extracting values.
- **Mathematical Utilities**: Perform complex mathematical operations with ease, including mutating values and managing mathematical data.
- **Date Utilities**: Handle date manipulations effectively.
- **String Utilities**: Perform various string transformations and validations.

## Documentation

To get started with the **Why-not** library, explore the following sections of our documentation:

- [Array Methods](array-methods.md): Detailed information on utility functions available for arrays.

  - [toUnique](array-methods.md#tounique): Ensure array elements are unique.
  - [reproduceTo](array-methods.md#reproduceto): Apply an operation to array elements.
  - [filterBy](array-methods.md#filterby): Filter elements based on a predicate.
  - [mapBy](array-methods.md#mapby): Transform array elements using a callback function.
  - [groupBy](array-methods.md#groupby): Group array elements by a key.
  - [partitionBy](array-methods.md#partitionby): Partition array elements based on a predicate.
  - [pluck](array-methods.md#pluck): Extract values from array elements by key.
  - [compact](array-methods.md#compact): Remove falsy values from an array.
  - [ArrayMutator](array-methods.md#arraymutator-class): A class for performing various array operations and transformations.

- [Mathematical Utilities](mathematical-utilities.md): Information on mathematical functions and how to use them.

  - [gcd](mathematical-utilities.md#gcd): Find the greatest common divisor of two numbers.
  - [lcm](mathematical-utilities.md#lcm): Find the least common multiple of two numbers.
  - [isPrime](mathematical-utilities.md#isprime): Check if a number is a prime number.
  - [factorial](mathematical-utilities.md#factorial): Calculate the factorial of a number.
  - [fibonacci](mathematical-utilities.md#fibonacci): Calculate the nth Fibonacci number.
  - [mean](mathematical-utilities.md#mean): Calculate the mean of an array of numbers.
  - [median](mathematical-utilities.md#median): Calculate the median of an array of numbers.
  - [mode](mathematical-utilities.md#mode): Calculate the mode of an array of numbers.
  - [standardDeviation](mathematical-utilities.md#standarddeviation): Calculate the standard deviation of an array of numbers.
  - [range](mathematical-utilities.md#range): Calculate the range of an array of numbers.
  - [roundTo](mathematical-utilities.md#roundto): Round a number to a specified number of decimal places.
  - [MathMutator](mathematical-utilities.md#mathmutator-class): A class for performing various mathematical operations and transformations.

- [Date Utilities](date-utilities.md): Details on functions available for handling date manipulations.

  - [DateFormatter](date-utilities.md#dateformatter-class): A function for formatting dates.
  - [FormatTimeStamp](date-utilities.md#formattimestamp): A function for formatting timestamps.

- [String Utilities](string-utilities.md): Guide to string transformation and validation functions.
  - [toCamelCase](string-utilities.md#tocamelcase): Convert a string to camel case.
  - [toPascalCase](string-utilities.md#topascalcase): Convert a string to Pascal case.
  - [toSnakeCase](string-utilities.md#tosnakecase): Convert a string to snake case.
  - [toKebabCase](string-utilities.md#tokebabcase): Convert a string to kebab case.
  - [toTitleCase](string-utilities.md#totitlecase): Convert a string to title case.
  - [replaceAt](string-utilities.md#replaceat): Replace a character at a specified index in a string.
  - [escapeHTML](string-utilities.md#escapehtml): Escape HTML characters in a string.
  - [unescapeHTML](string-utilities.md#unescapehtml): Unescape HTML characters in a string.
  - [isNumeric](string-utilities.md#isnumeric): Check if a string is numeric.
  - [isAlphaNumeric](string-utilities.md#isalphanumeric): Check if a string is alphanumeric.
  - [isAlpha](string-utilities.md#isalpha): Check if a string is alphabetic.
  - [isEmail](string-utilities.md#isemail): Check if a string is an email address.
  - [isURL](string-utilities.md#isurl): Check if a string is a URL.
  - [splitWords](string-utilities.md#splitwords): Split a string into an array of words.
  - [splitByLength](string-utilities.md#splitbylength): Split a string into an array of substrings of a specified length.
  - [isEqual](string-utilities.md#isequal): Check if two strings are equal based on a specified option.
  - [StringMutator](string-utilities.md#stringMutator-class): A class for string manipulations such as case conversions, replacements, and validations.

For additional details, consult the specific documentation files for each category.

## Getting Started

To integrate **Why-not** into your project, follow the [installation instructions](installation.md) and refer to the [usage guide](usage.md) for example code and best practices.

We hope **Why-not** makes your development process smoother and more efficient. Happy coding!
