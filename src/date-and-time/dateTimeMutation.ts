import type { FormatterOptions } from '../definitions/interfaces';
import { formatDate, parseDate } from './utils/helpers';

/**
 * Formats a date string based on provided formatter options or by default in ISO format.
 *
 * @param {string} dateString - The date string to format.
 * @param {FormatterOptions} [options] - Optional formatter options.
 * @return {string} The formatted date string.
 */
function DateFormatter(dateString: string, options?: FormatterOptions): string {
  const { format, from, to } = options || {};

  let date: Date;

  // Parse the date string based on the 'from' format if provided
  if (from) {
    date = parseDate(dateString, from);
  } else {
    date = new Date(dateString);
  }

  // Check if the date is invalid
  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  // Format the date based on the 'to' format if provided
  if (to) {
    return formatDate(date, to);
  }

  // Return the date in the specified 'format' or ISO string if no format is provided
  return format ? formatDate(date, format) : date.toISOString();
}

export { DateFormatter };
