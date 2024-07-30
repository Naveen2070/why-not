/**
 * Parses a date string based on a given format.
 *
 * @param {string} dateString - The date string to parse.
 * @param {string} format - The format to parse the date string.
 * @return {Date} The parsed date.
 */
/**
 * Parses a date string based on a given format.
 *
 * @param {string} dateString - The date string to parse.
 * @param {string} format - The format to parse the date string.
 * @return {Date} The parsed date.
 */
export function parseDate(dateString: string, format: string): Date {
  const formatParts = format.split(/[^A-Za-z]/);
  const dateParts = dateString.split(/[^0-9]/);

  if (formatParts.length !== dateParts.length) {
    return new Date(NaN);
  }

  const dateComponents: any = {
    yyyy: 0,
    MM: 1,
    dd: 1,
    HH: 0,
    mm: 0,
    ss: 0,
  };

  formatParts.forEach((part, index) => {
    const value = parseInt(dateParts[index], 10);
    if (isNaN(value)) {
      dateComponents[part] = NaN;
    } else {
      if (part === 'yyyy') dateComponents.yyyy = value;
      if (part === 'MM') dateComponents.MM = value - 1; // Months are 0-based
      if (part === 'dd') dateComponents.dd = value;
      if (part === 'HH') dateComponents.HH = value;
      if (part === 'mm') dateComponents.mm = value;
      if (part === 'ss') dateComponents.ss = value;
    }
  });

  const parsedDate = new Date(
    Date.UTC(
      dateComponents.yyyy,
      dateComponents.MM,
      dateComponents.dd,
      dateComponents.HH,
      dateComponents.mm,
      dateComponents.ss
    )
  );

  if (Object.values(dateComponents).includes(NaN)) {
    return new Date(NaN);
  }

  return parsedDate;
}

/**
 * Formats a date based on a given format.
 *
 * @param {Date} date - The date to format.
 * @param {string} format - The format to format the date.
 * @return {string} The formatted date string.
 */
export function formatDate(date: Date, format: string): string {
  const pad = (num: number) => (num < 10 ? '0' + num : num);

  const replacements: { [key: string]: string } = {
    yyyy: date.getUTCFullYear().toString(),
    MM: pad(date.getUTCMonth() + 1) as any,
    dd: pad(date.getUTCDate()) as any,
    HH: pad(date.getUTCHours()) as any,
    mm: pad(date.getUTCMinutes()) as any,
    ss: pad(date.getUTCSeconds()) as any,
  };

  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (match) => replacements[match]);
}
