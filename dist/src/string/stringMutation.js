"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringMutator = void 0;
exports.toCamelCase = toCamelCase;
exports.toPascalCase = toPascalCase;
exports.toSnakeCase = toSnakeCase;
exports.toKebabCase = toKebabCase;
exports.toTitleCase = toTitleCase;
exports.replaceAt = replaceAt;
exports.escapeHTML = escapeHTML;
exports.unescapeHTML = unescapeHTML;
exports.isNumeric = isNumeric;
exports.isEmail = isEmail;
exports.isURL = isURL;
exports.isAlpha = isAlpha;
exports.isAlphanumeric = isAlphanumeric;
exports.isEqual = isEqual;
//1.String Case Conversions
/**
 * Converts a string to camel case.
 *
 * @param {string} str - The input string to be converted.
 * @return {string} The converted camel case string.
 */
function toCamelCase(str) {
    // Convert the input string to lowercase
    const lowerCaseStr = str.toLowerCase();
    // Replace hyphens, underscores, and spaces with an uppercase letter
    // and remove the special characters
    return lowerCaseStr.replace(/([-_\s][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', '').replace(' ', ''));
}
/**
 * Converts a string to Pascal case.
 *
 * @param {string} str - The input string to be converted.
 * @return {string} The converted Pascal case string.
 */
function toPascalCase(str) {
    // Convert the input string to lowercase
    // and replace hyphens, underscores, and spaces with an uppercase letter
    // and remove the special characters.
    const lowerCaseStr = str
        .toLowerCase()
        .replace(/([-_\s][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', '').replace(' ', ''));
    // Capitalize the first letter of the converted string.
    return lowerCaseStr.replace(/(^[a-z])/g, (group) => group.toUpperCase());
}
/**
 * Converts a string to snake case.
 *
 * @param {string} str - The input string to be converted.
 * @return {string} The converted snake case string.
 */
function toSnakeCase(str) {
    // Replace uppercase letters that are followed by lowercase letters with the
    // lowercase letter preceded by an underscore.
    // Replace hyphens and spaces with underscores.
    // Convert the resulting string to lowercase.
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2') // Replace 'axB' with 'ax_B'
        .replace(/[-\s]/g, '_') // Replace '-' and ' ' with '_'
        .toLowerCase(); // Convert to lowercase
}
/**
 * Converts a string to kebab case.
 *
 * @param {string} str - The input string to be converted.
 * @return {string} The converted kebab case string.
 */
function toKebabCase(str) {
    // Replace uppercase letters that are followed by lowercase letters with the
    // lowercase letter preceded by a hyphen.
    // Replace underscores and spaces with hyphens.
    // Convert the resulting string to lowercase.
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Replace 'axB' with 'ax-B'
        .replace(/[_\s]/g, '-') // Replace '_' and ' ' with '-'
        .toLowerCase(); // Convert to lowercase
}
/**
 * Converts a string to Title Case.
 *
 * @param {string} str - The input string to be converted.
 * @return {string} The converted Title Case string.
 */
function toTitleCase(str) {
    // Split the string into an array of words, using a regular expression to match
    // word boundaries (i.e., underscores, spaces, and hyphens).
    // Each word is then mapped to a new word with the first character capitalized
    // and the rest of the word lowercased.
    // Finally, the array of words is joined back into a string.
    return str
        .split(/([_\s-])/) // Split the string at word boundaries
        .map((word) => {
        // Capitalize the first character of each word
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
        .join(''); // Join the words back into a string
}
//2.String replacement functions
/**
 * Replaces a single character in a string at the specified index with a
 * replacement character.
 *
 * @param {string} str - The input string.
 * @param {number} index - The index of the character to replace.
 * @param {string} replacement - The replacement character.
 * @return {string} The new string with the replacement character.
 * @throws {RangeError} If the index is out of bounds.
 * @throws {Error} If the replacement is not a single character.
 */
function replaceAt(str, index, replacement) {
    if (index < 0 || index >= str.length) {
        throw new RangeError('Index out of range');
    }
    if (replacement.length !== 1) {
        throw new Error('Replacement must be a single character');
    }
    return str.substring(0, index) + replacement + str.substring(index + 1);
}
/**
 * Escapes special HTML characters in a string.
 *
 * @param {string} str - The input string.
 * @return {string} The string with HTML characters escaped.
 */
function escapeHTML(str) {
    // Replace '&' with '&amp;'
    // Replace '<' with '&lt;'
    // Replace '>' with '&gt;'
    // Replace '"' with '&quot;'
    // Replace "'" with '&#39;'
    return str
        .replace(/&/g, '&amp;') // Escape '&'
        .replace(/</g, '&lt;') // Escape '<'
        .replace(/>/g, '&gt;') // Escape '>'
        .replace(/"/g, '&quot;') // Escape '"'
        .replace(/'/g, '&#39;'); // Escape "'"
}
/**
 * Unescapes special HTML characters in a string.
 *
 * @param {string} str - The input string.
 * @return {string} The string with HTML characters unescaped.
 */
function unescapeHTML(str) {
    // Replace '&amp;' with '&'
    // Replace '&lt;' with '<'
    // Replace '&gt;' with '>'
    // Replace '&quot;' with '"'
    // Replace '&#39;' with "'"
    return str
        .replace(/&amp;/g, '&') // Unescape '&'
        .replace(/&lt;/g, '<') // Unescape '<'
        .replace(/&gt;/g, '>') // Unescape '>'
        .replace(/&quot;/g, '"') // Unescape '"'
        .replace(/&#39;/g, "'"); // Unescape "'"
}
/**
 * Checks if a string is a valid number.
 *
 * @param {string} str - The input string to check.
 * @return {boolean} `true` if the string is a valid number, `false` otherwise.
 */
function isNumeric(str) {
    return !isNaN(Number(str)) && !isNaN(parseFloat(str));
}
/**
 * Checks if a string is a valid email address.
 *
 * @param {string} str - The input string to check.
 * @return {boolean} `true` if the string is a valid email address, `false` otherwise.
 */
function isEmail(str) {
    // A simple regex for validating email addresses
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
}
/**
 * Checks if a string is a valid URL.
 *
 * @param {string} str - The input string to check.
 * @return {boolean} `true` if the string is a valid URL, `false` otherwise.
 */
function isURL(str) {
    // A comprehensive regex for validating URLs
    const urlRegex = /^(https?:\/\/|ftp:\/\/)?(www\.)?((([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})|localhost|(\d{1,3}\.){3}\d{1,3}|(\[[0-9a-fA-F:]+\]))(:\d{2,5})?(\/[^\s]*)?(\?[^\s]*)?(\#[^\s]*)?$/i;
    return urlRegex.test(str);
}
/**
 * Checks if a string contains only alphabetic characters.
 *
 * @param {string} str - The input string to check.
 * @return {boolean} `true` if the string contains only alphabetic characters, `false` otherwise.
 */
function isAlpha(str) {
    // Checks if the string contains only alphabetic characters (letters)
    const alphaRegex = /^[a-zA-Z]+$/;
    return alphaRegex.test(str);
}
/**
 * Checks if a string contains only alphanumeric characters.
 *
 * @param {string} str - The input string to check.
 * @return {boolean} `true` if the string contains only alphanumeric characters, `false` otherwise.
 */
function isAlphanumeric(str) {
    // Checks if the string contains only alphanumeric characters (letters and numbers)
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(str);
}
/**
 * Compares two strings for equality or checks if one starts/ends/contains the other,
 * with optional ignore case option.
 *
 * @param {string} str1 - The first string to compare.
 * @param {string} str2 - The second string to compare.
 * @param {CompareOptions} [options] - Optional comparison options.
 * @return {boolean} - True if the strings match the criteria, false otherwise.
 * @throws {TypeError} - If any of the options are not booleans.
 */
function isEqual(str1, str2, options) {
    // Check if the input strings are non-empty
    if (!str1 || !str2) {
        throw new Error('Input arguments must be non-empty strings');
    }
    // Check if the input arguments are strings
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw new TypeError('Input arguments must be strings');
    }
    // Check if options is an object
    if (options !== undefined && typeof options !== 'object') {
        throw new TypeError('Options must be an object');
    }
    // Check if the options object has valid properties
    if (options) {
        const { ignoreCase, startsWith, endsWith, has } = options;
        if ((ignoreCase !== undefined && typeof ignoreCase !== 'boolean') ||
            (startsWith !== undefined && typeof startsWith !== 'boolean') ||
            (endsWith !== undefined && typeof endsWith !== 'boolean') ||
            (has !== undefined && typeof has !== 'boolean')) {
            throw new TypeError('Options must be an object with ignoreCase, startsWith, endsWith, and has properties as booleans');
        }
    }
    // Convert the strings to lowercase if ignoreCase is true
    if (options?.ignoreCase) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
    }
    // Check if str1 starts with str2 if startsWith is true
    if (options?.startsWith) {
        return str1.startsWith(str2);
    }
    // Check if str1 includes str2 if has is true
    if (options?.has) {
        return str1.includes(str2);
    }
    // Check if str1 ends with str2 if endsWith is true
    if (options?.endsWith) {
        return str1.endsWith(str2);
    }
    // Return true if the strings are equal (case sensitive)
    return str1 === str2;
}
//StringMutator Class
/**
 * Class for mutating a string in various ways.
 */
class StringMutator {
    /**
     * The string being mutated.
     */
    str;
    /**
     * Constructs a new StringMutator instance.
     * @param str - The string to mutate.
     */
    constructor(str) {
        this.str = str;
    }
    // 1. String case conversions
    /**
     * Converts the string to camel case.
     * @return The mutated string.
     */
    toCamelCase() {
        this.str = toCamelCase(this.str);
        return this.str;
    }
    /**
     * Converts the string to Pascal case.
     * @return The mutated string.
     */
    toPascalCase() {
        this.str = toPascalCase(this.str);
        return this.str;
    }
    /**
     * Converts the string to snake case.
     * @return The mutated string.
     */
    toSnakeCase() {
        this.str = toSnakeCase(this.str);
        return this.str;
    }
    /**
     * Converts the string to kebab case.
     * @return The mutated string.
     */
    toKebabCase() {
        this.str = toKebabCase(this.str);
        return this.str;
    }
    /**
     * Converts the string to title case.
     * @return The mutated string.
     */
    toTitleCase() {
        this.str = toTitleCase(this.str);
        return this.str;
    }
    // 2. String replacement functions
    /**
     * Replaces a single character in the string at the specified index with the
     * given replacement character.
     * @param index - The index of the character to replace.
     * @param replacement - The character to replace with.
     * @return The mutated string.
     * @throws RangeError - If the index is out of bounds.
     * @throws Error - If the replacement is not a single character.
     */
    replaceAt(index, replacement) {
        this.str = replaceAt(this.str, index, replacement);
        return this.str;
    }
    /**
     * Escapes special HTML characters in the string.
     * @return The mutated string.
     */
    escapeHTML() {
        this.str = escapeHTML(this.str);
        return this.str;
    }
    /**
     * Unescapes special HTML characters in the string.
     * @return The mutated string.
     */
    unescapeHTML() {
        this.str = unescapeHTML(this.str);
        return this.str;
    }
    // 3. String validation functions
    /**
     * Checks if the string contains only numeric characters.
     *
     * @return {boolean} Returns true if the string contains only numeric characters, otherwise false.
     */
    isNumeric() {
        return isNumeric(this.str);
    }
    /**
     * Checks if the string is a valid email address.
     * @return `true` if the string is a valid email address, `false` otherwise.
     *  @throws Error - If the string is not a valid email address.
     */
    isEmail() {
        return isEmail(this.str);
    }
    /**
     * Checks if the string is a valid URL.
     * @return `true` if the string is a valid URL, `false` otherwise.
     * @throws Error - If the string is not a valid URL.
     */
    isURL() {
        return isURL(this.str);
    }
    /**
     * Checks if the string contains only alphabetic characters.
     * @return `true` if the string contains only alphabetic characters, `false` otherwise.
     */
    isAlpha() {
        return isAlpha(this.str);
    }
    /**
     * Checks if the string contains only alphanumeric characters.
     *  @return `true` if the string contains only alphanumeric characters, `false` otherwise.
     */
    isAlphanumeric() {
        return isAlphanumeric(this.str);
    }
    // 4. String comparison functions
    /**
     * Compares two strings for equality or checks if one starts/ends with the other,
     * with optional ignore case option.
     *
     * @param {string} str1 - The first string to compare.
     * @param {string} str2 - The second string to compare.
     * @param {CompareOptions} [options] - Optional comparison options.
     * @return {boolean} - True if the strings match the criteria, false otherwise.
     */
    isEqual(str2, options) {
        // Use the isEqual function to compare the strings
        return isEqual(this.str, str2, options);
    }
}
exports.StringMutator = StringMutator;
//# sourceMappingURL=stringMutation.js.map