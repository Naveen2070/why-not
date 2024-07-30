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
    if (part === 'yyyy') dateComponents.yyyy = value;
    if (part === 'MM') dateComponents.MM = value - 1; // Months are 0-based
    if (part === 'dd') dateComponents.dd = value;
    if (part === 'HH') dateComponents.HH = value;
    if (part === 'mm') dateComponents.mm = value;
    if (part === 'ss') dateComponents.ss = value;
  });

  return new Date(
    dateComponents.yyyy,
    dateComponents.MM,
    dateComponents.dd,
    dateComponents.HH,
    dateComponents.mm,
    dateComponents.ss
  );
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
    yyyy: date.getFullYear().toString(),
    MM: pad(date.getMonth() + 1) as string,
    dd: pad(date.getDate()) as string,
    HH: pad(date.getHours()) as string,
    mm: pad(date.getMinutes()) as string,
    ss: pad(date.getSeconds()) as string,
  };

  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (match) => replacements[match]);
}
