/**
 * Parses a date string based on a given format.
 *
 * @param {string} dateString - The date string to parse.
 * @param {string} format - The format to parse the date string.
 * @return {Date | null} The parsed date or null if parsing fails.
 */
export declare function parseDate(dateString: string, format: string): Date | null;
/**
 * Formats a date based on a given format.
 *
 * @param {Date} date - The date to format.
 * @param {string} format - The format to format the date.
 * @return {string} The formatted date string.
 * @throws {TypeError} If date is null or not an instance of Date.
 * @throws {Error} If format is falsy or not a string.
 */
export declare function formatDate(date: Date, format: string): string;
/**
 * Converts a date to a specified timezone offset.
 *
 * @param {Date} date - The date to convert.
 * @param {number} offset - The timezone offset in minutes.
 * @return {Date} The converted date.
 */
export declare function convertTimezone(date: Date, offset: number): Date;
//# sourceMappingURL=helpers.d.ts.map