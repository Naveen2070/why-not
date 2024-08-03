import type { FormatterOptions } from '../definitions/interfaces';
import { TimezoneOffsets } from '../definitions/types';
import { convertTimezone, formatDate, parseDate } from './utils/helpers';
import timezones from './utils/timezoneOffsets.json';

const timezoneOffsets: TimezoneOffsets = timezones;

/**
 * Formats a date string based on provided formatter options or by default in ISO format.
 *
 * @param {string} dateString - The date string to format.
 * @param {FormatterOptions} [options] - Optional formatter options.
 * @return {string} The formatted date string.
 */
function DateFormatter(dateString: string, options?: FormatterOptions): string {
  const { format, from, to } = options || {};

  let date: Date | null;

  // Parse the date string based on the 'from' format if provided
  if (from) {
    date = parseDate(dateString, from);
  } else {
    date = new Date(dateString);
  }

  // Check if the date is invalid
  if (!date || isNaN(date.getTime())) {
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

/**
 * Formats a timestamp based on provided formatter options including timezones.
 *
 * @param {string} timestamp - The timestamp to format.
 * @param {FormatterOptions} [options] - Optional formatter options including timezones.
 * @return {string} The formatted timestamp string.
 */
export function FormatTimeStamp(
  timestamp: string,
  options?: FormatterOptions
): string {
  const { format, from, to } = options || {};

  let date: Date | null;

  // Parse the timestamp based on the 'from' timezone if provided
  if (from) {
    const fromOffset = timezoneOffsets[from];
    if (fromOffset === undefined) {
      return 'Invalid Timezone';
    }
    date = new Date(new Date(timestamp).getTime() + fromOffset.offset * 60000);
  } else {
    date = new Date(timestamp);
  }

  // Check if the date is invalid
  if (!date || isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  // Convert the date to the 'to' timezone if provided
  if (to) {
    const toOffset = timezoneOffsets[to];
    if (toOffset === undefined) {
      return 'Invalid Timezone';
    }
    date = convertTimezone(date, toOffset.offset - date.getTimezoneOffset());
  }

  // Format the date based on the 'format' if provided
  return format ? formatDate(date, format) : date.toISOString();
}
