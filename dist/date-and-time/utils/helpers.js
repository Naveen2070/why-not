"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = parseDate;
exports.formatDate = formatDate;
exports.convertTimezone = convertTimezone;
/**
 * Parses a date string based on a given format.
 *
 * @param {string} dateString - The date string to parse.
 * @param {string} format - The format to parse the date string.
 * @return {Date | null} The parsed date or null if parsing fails.
 */
function parseDate(dateString, format) {
    if (!dateString || !format) {
        return null;
    }
    const formatParts = format.split(/[^A-Za-z]/);
    const dateParts = dateString.split(/[^0-9]/);
    if (formatParts.length !== dateParts.length) {
        return null;
    }
    const dateComponents = {
        yyyy: 0,
        MM: 1,
        dd: 1,
        HH: 0,
        mm: 0,
        ss: 0,
    };
    for (let i = 0; i < formatParts.length; i++) {
        const part = formatParts[i];
        const value = parseInt(dateParts[i], 10);
        if (part === 'yyyy') {
            dateComponents.yyyy = value;
        }
        else if (part === 'MM') {
            dateComponents.MM = value - 1; // Months are 0-based
        }
        else if (part === 'dd') {
            dateComponents.dd = value;
        }
        else if (part === 'HH') {
            dateComponents.HH = value;
        }
        else if (part === 'mm') {
            dateComponents.mm = value;
        }
        else if (part === 'ss') {
            dateComponents.ss = value;
        }
    }
    const parsedDate = new Date(Date.UTC(dateComponents.yyyy, dateComponents.MM, dateComponents.dd, dateComponents.HH, dateComponents.mm, dateComponents.ss));
    return parsedDate;
}
/**
 * Formats a date based on a given format.
 *
 * @param {Date} date - The date to format.
 * @param {string} format - The format to format the date.
 * @return {string} The formatted date string.
 * @throws {TypeError} If date is null or not an instance of Date.
 * @throws {Error} If format is falsy or not a string.
 */
function formatDate(date, format) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new TypeError('Invalid date');
    }
    if (!format || typeof format !== 'string') {
        throw new Error('Invalid format');
    }
    const pad = (num) => (num < 10 ? '0' + num : num);
    const replacements = {
        yyyy: date.getUTCFullYear().toString(),
        MM: pad(date.getUTCMonth() + 1).toString(),
        dd: pad(date.getUTCDate()).toString(),
        HH: pad(date.getUTCHours()).toString(),
        mm: pad(date.getUTCMinutes()).toString(),
        ss: pad(date.getUTCSeconds()).toString(),
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (match) => replacements[match]);
}
/**
 * Converts a date to a specified timezone offset.
 *
 * @param {Date} date - The date to convert.
 * @param {number} offset - The timezone offset in minutes.
 * @return {Date} The converted date.
 */
function convertTimezone(date, offset) {
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const converted = new Date(utc + offset * 60000);
    return converted;
}
//# sourceMappingURL=helpers.js.map