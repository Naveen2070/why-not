/**
 * Converts a string to camel case.
 *
 * @param {string} str - The input string to be converted.
 * @return {string} The converted camel case string.
 */
declare function toCamelCase(str: string): string;
/**
 * Converts a string to Pascal case.
 *
 * @param {string} str - The input string to be converted.
 * @return {string} The converted Pascal case string.
 */
declare function toPascalCase(str: string): string;
/**
 * Converts a string to snake case.
 *
 * @param {string} str - The input string to be converted.
 * @return {string} The converted snake case string.
 */
declare function toSnakeCase(str: string): string;
/**
 * Converts a string to kebab case.
 *
 * @param {string} str - The input string to be converted.
 * @return {string} The converted kebab case string.
 */
declare function toKebabCase(str: string): string;
/**
 * Converts a string to Title Case.
 *
 * @param {string} str - The input string to be converted.
 * @return {string} The converted Title Case string.
 */
declare function toTitleCase(str: string): string;
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
declare function replaceAt(str: string, index: number, replacement: string): string;
/**
 * Escapes special HTML characters in a string.
 *
 * @param {string} str - The input string.
 * @return {string} The string with HTML characters escaped.
 */
declare function escapeHTML(str: string): string;
/**
 * Unescapes special HTML characters in a string.
 *
 * @param {string} str - The input string.
 * @return {string} The string with HTML characters unescaped.
 */
declare function unescapeHTML(str: string): string;
/**
 * Checks if a string is a valid number.
 *
 * @param {string} str - The input string to check.
 * @return {boolean} `true` if the string is a valid number, `false` otherwise.
 */
declare function isNumeric(str: string): boolean;
/**
 * Checks if a string is a valid email address.
 *
 * @param {string} str - The input string to check.
 * @return {boolean} `true` if the string is a valid email address, `false` otherwise.
 */
declare function isEmail(str: string): boolean;
/**
 * Checks if a string is a valid URL.
 *
 * @param {string} str - The input string to check.
 * @return {boolean} `true` if the string is a valid URL, `false` otherwise.
 */
declare function isURL(str: string): boolean;
/**
 * Checks if a string contains only alphabetic characters.
 *
 * @param {string} str - The input string to check.
 * @return {boolean} `true` if the string contains only alphabetic characters, `false` otherwise.
 */
declare function isAlpha(str: string): boolean;
/**
 * Checks if a string contains only alphanumeric characters.
 *
 * @param {string} str - The input string to check.
 * @return {boolean} `true` if the string contains only alphanumeric characters, `false` otherwise.
 */
declare function isAlphanumeric(str: string): boolean;
/**
 * Class for mutating a string in various ways.
 */
export declare class StringMutator {
    /**
     * The string being mutated.
     */
    private str;
    /**
     * Constructs a new StringMutator instance.
     * @param str - The string to mutate.
     */
    constructor(str: string);
    /**
     * Converts the string to camel case.
     * @return The mutated string.
     */
    toCamelCase(): string;
    /**
     * Converts the string to Pascal case.
     * @return The mutated string.
     */
    toPascalCase(): string;
    /**
     * Converts the string to snake case.
     * @return The mutated string.
     */
    toSnakeCase(): string;
    /**
     * Converts the string to kebab case.
     * @return The mutated string.
     */
    toKebabCase(): string;
    /**
     * Converts the string to title case.
     * @return The mutated string.
     */
    toTitleCase(): string;
    /**
     * Replaces a single character in the string at the specified index with the
     * given replacement character.
     * @param index - The index of the character to replace.
     * @param replacement - The character to replace with.
     * @return The mutated string.
     * @throws RangeError - If the index is out of bounds.
     * @throws Error - If the replacement is not a single character.
     */
    replaceAt(index: number, replacement: string): string;
    /**
     * Escapes special HTML characters in the string.
     * @return The mutated string.
     */
    escapeHTML(): string;
    /**
     * Unescapes special HTML characters in the string.
     * @return The mutated string.
     */
    unescapeHTML(): string;
    /**
     * Checks if the string contains only numeric characters.
     *
     * @return {boolean} Returns true if the string contains only numeric characters, otherwise false.
     */
    isNumeric(): boolean;
    /**
     * Checks if the string is a valid email address.
     * @return `true` if the string is a valid email address, `false` otherwise.
     *  @throws Error - If the string is not a valid email address.
     */
    isEmail(): boolean;
    /**
     * Checks if the string is a valid URL.
     * @return `true` if the string is a valid URL, `false` otherwise.
     * @throws Error - If the string is not a valid URL.
     */
    isURL(): boolean;
    /**
     * Checks if the string contains only alphabetic characters.
     * @return `true` if the string contains only alphabetic characters, `false` otherwise.
     */
    isAlpha(): boolean;
    /**
     * Checks if the string contains only alphanumeric characters.
     *  @return `true` if the string contains only alphanumeric characters, `false` otherwise.
     */
    isAlphanumeric(): boolean;
}
export { toCamelCase, toPascalCase, toSnakeCase, toKebabCase, toTitleCase, replaceAt, escapeHTML, unescapeHTML, isNumeric, isEmail, isURL, isAlpha, isAlphanumeric, };
//# sourceMappingURL=stringMutation.d.ts.map