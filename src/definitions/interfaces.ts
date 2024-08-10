/**
 * Defines the options for formatting dates and timestamps.
 * @interface FormatterOptions
 * @property {string} [format] - The format string for the output date.
 * @property {string} [from] - The format or timezone of the input date or timestamp.
 * @property {string} [to] - The format to which the date should be converted.
 * If not provided, the date will be returned in the specified format or ISO string.
 */
interface FormatterOptions {
  /**
   * The format string for the output date.
   */
  format?: string;
  /**
   * The format or timezone of the input date or timestamp.
   * If provided, the date string will be parsed using this format.
   */
  from?: string;
  /**
   * The format to which the date should be converted.
   * If not provided, the date will be returned in the specified format or ISO string.
   */
  to?: string;
}

/**
 * Defines the options for comparing strings.
 * @interface CompareOptions
 * @property {boolean} [ignoreCase] - Whether to ignore case differences when comparing strings.
 * @property {boolean} [startsWith] - Whether to check if the first string starts with the second string.
 * @property {boolean} [endsWith] - Whether to check if the first string ends with the second string.
 * @property {boolean} [has] - Whether to check if the first string contains the second string.
 * @property {string | RegExp} [ofPattern] - A pattern to match the first string against.
 */
interface CompareOptions {
  /**
   * Whether to ignore case differences when comparing strings.
   */
  ignoreCase?: boolean;
  /**
   * Whether to check if the first string starts with the second string.
   */
  startsWith?: boolean;
  /**
   * Whether to check if the first string ends with the second string.
   */
  endsWith?: boolean;
  /**
   * Whether to check if the first string contains the second string.
   */
  has?: boolean;
  /**
   * A pattern to match the first string against.
   */
  ofPattern?: string | RegExp;
}

/**
 * Defines the options for masking a portion of a string.
 * @interface MaskOptions
 * @property {number} [start] - The index of the first character to mask.
 * If not provided, the default value is 0.
 * @property {number} [end] - The index of the last character to mask.
 * If not provided, the default value is the length of the string minus 1.
 * @property {string} [maskChar] - The character to use for masking.
 * If not provided, the default value is '*'.
 */
interface MaskOptions {
  /**
   * The index of the first character to mask.
   * If not provided, the default value is 0.
   */
  start?: number;
  /**
   * The index of the last character to mask.
   * If not provided, the default value is the length of the string minus 1.
   */
  end?: number;
  /**
   * The character to use for masking.
   * If not provided, the default value is '*'.
   */
  maskChar?: string;
}

export type { FormatterOptions, CompareOptions, MaskOptions };
