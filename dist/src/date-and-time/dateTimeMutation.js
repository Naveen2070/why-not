"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatter = DateFormatter;
exports.FormatTimeStamp = FormatTimeStamp;
const helpers_1 = require("./utils/helpers");
const timezoneOffsets_json_1 = __importDefault(require("./utils/timezoneOffsets.json"));
const timezoneOffsets = timezoneOffsets_json_1.default;
/**
 * Formats a date string based on provided formatter options or by default in ISO format.
 *
 * @param {string} dateString - The date string to format.
 * @param {FormatterOptions} [options] - Optional formatter options.
 * @return {string} The formatted date string.
 */
function DateFormatter(dateString, options) {
    const { format, from, to } = options || {};
    let date;
    // Parse the date string based on the 'from' format if provided
    if (from) {
        date = (0, helpers_1.parseDate)(dateString, from);
    }
    else {
        date = new Date(dateString);
    }
    // Check if the date is invalid
    if (!date || isNaN(date.getTime())) {
        return 'Invalid Date';
    }
    // Format the date based on the 'to' format if provided
    if (to) {
        return (0, helpers_1.formatDate)(date, to);
    }
    // Return the date in the specified 'format' or ISO string if no format is provided
    return format ? (0, helpers_1.formatDate)(date, format) : date.toISOString();
}
/**
 * Formats a timestamp based on provided formatter options including timezones.
 *
 * @param {string} timestamp - The timestamp to format.
 * @param {FormatterOptions} [options] - Optional formatter options including timezones.
 * @return {string} The formatted timestamp string.
 */
function FormatTimeStamp(timestamp, options) {
    const { format, from, to } = options || {};
    let date;
    // Parse the timestamp based on the 'from' timezone if provided
    if (from) {
        const fromOffset = timezoneOffsets[from];
        if (fromOffset === undefined) {
            return 'Invalid Timezone';
        }
        date = new Date(new Date(timestamp).getTime() + fromOffset.offset * 60000);
    }
    else {
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
        date = (0, helpers_1.convertTimezone)(date, toOffset.offset - date.getTimezoneOffset());
    }
    // Format the date based on the 'format' if provided
    return format ? (0, helpers_1.formatDate)(date, format) : date.toISOString();
}
//# sourceMappingURL=dateTimeMutation.js.map