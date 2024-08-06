import type { FormatterOptions } from '../definitions/interfaces';
/**
 * Formats a date string based on provided formatter options or by default in ISO format.
 *
 * @param {string} dateString - The date string to format.
 * @param {FormatterOptions} [options] - Optional formatter options.
 * @return {string} The formatted date string.
 */
declare function DateFormatter(dateString: string, options?: FormatterOptions): string;
export { DateFormatter };
/**
 * Formats a timestamp based on provided formatter options including timezones.
 *
 * @param {string} timestamp - The timestamp to format.
 * @param {FormatterOptions} [options] - Optional formatter options including timezones.
 * @return {string} The formatted timestamp string.
 */
export declare function FormatTimeStamp(timestamp: string, options?: FormatterOptions): string;
//# sourceMappingURL=dateTimeMutation.d.ts.map