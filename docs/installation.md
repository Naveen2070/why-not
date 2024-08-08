# Installation Guide

## Installing Why-not

To use the **Why-not** library in your project, you need to install it via npm (Node Package Manager). Below are the steps to install and set up the library.

### Prerequisites

- **Node.js**: Ensure that Node.js is installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: npm is included with Node.js. Verify its installation by running `npm -v` in your terminal.

### Installation Steps

1. **Initialize Your Project**:
   If you haven't already initialized your project with npm, run the following command in your project directory:

   ```sh
   npm init -y
   ```

   This creates a `package.json` file where your dependencies will be listed.

2. **Install the Why-not Library**:
   Use the following command to install the **Why-not** library:
   ```sh
   npm install why-not-utils
   ```
   This will add **Why-not** as a dependency in your `package.json` file and install it in the `node_modules` directory.

### Verifying the Installation

To verify that **Why-not** has been installed correctly, you can check the `node_modules` directory or inspect your `package.json` file for the **Why-not** entry under dependencies.

### Importing Why-not

After installation, you can import the functions and classes from **Why-not** into your project. Here's an example of how to import and use some functions:

```js
import { toUnique, filterBy, mapBy } from 'why-not-utils';

// Example usage
const numbers = [1, 2, 2, 3, 1];
const uniqueNumbers = toUnique(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3]

const filteredNumbers = filterBy(numbers, (n) => n > 1);
console.log(filteredNumbers); // Output: [2, 2, 3]

const mappedNumbers = mapBy(numbers, (n) => n * 2);
console.log(mappedNumbers); // Output: [2, 4, 4, 6, 2]
```

### Upgrading Why-not

To upgrade to the latest version of **Why-not**, run:

```sh
npm update why-not-utils
```

### Uninstalling Why-not

If you need to remove **Why-not** from your project, you can uninstall it using:

```sh
npm uninstall why-not-utils
```

For further details and troubleshooting, refer to the [Why-not documentation](introduction.md) or visit the [GitHub repository](https://github.com/Naveen2070/why-not-utils).
