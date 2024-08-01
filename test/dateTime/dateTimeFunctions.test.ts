// @ts-nocheck
import { formatDate, parseDate } from '../../src/date-and-time/utils/helpers';
import { DateFormatter, FormatTimeStamp } from '../../src/index'; // Adjust the import path accordingly

describe('DateFormatter without timeZone', () => {
  // Test cases for different date formats using the DateFormatter function
  it('should format date to specified format', () => {
    const dateStr = '2023-07-30T15:30:00.000Z';
    const formattedDate = DateFormatter(dateStr, { format: 'dd/MM/yyyy' });
    expect(formattedDate).toBe('30/07/2023');
  });

  it('should parse date from specified format and convert to another format', () => {
    const dateStr = '30-07-2023 15:30:00';
    const formattedDate = DateFormatter(dateStr, {
      from: 'dd-MM-yyyy HH:mm:ss',
      to: 'yyyy-MM-dd',
    });
    expect(formattedDate).toBe('2023-07-30');
  });

  it('should return ISO string if no format is provided', () => {
    const dateStr = '2023-07-30T15:30:00.000Z';
    const formattedDate = DateFormatter(dateStr);
    expect(formattedDate).toBe('2023-07-30T15:30:00.000Z');
  });

  it('should handle custom parsing format', () => {
    const dateStr = '30-07-2023 15:30:00';
    const formattedDate = DateFormatter(dateStr, {
      from: 'dd-MM-yyyy HH:mm:ss',
      to: 'yyyy/MM/dd HH:mm:ss',
    });
    expect(formattedDate).toBe('2023/07/30 15:30:00');
  });

  it('should handle default format if from and to are not provided', () => {
    const dateStr = '2023-07-30T15:30:00.000Z';
    const formattedDate = DateFormatter(dateStr, { format: 'yyyy-MM-dd' });
    expect(formattedDate).toBe('2023-07-30');
  });

  it('should handle invalid date string gracefully', () => {
    const dateStr = 'invalid-date-string';
    const formattedDate = DateFormatter(dateStr, { format: 'yyyy-MM-dd' });
    expect(formattedDate).toBe('Invalid Date');
  });
});

describe('FormatTimeStamp', () => {
  it('should format the timestamp correctly from one timezone to another', () => {
    const timestamp = '2023-07-30T02:00:00Z';

    const options = {
      from: 'UTC',
      to: 'IST',
      format: 'yyyy-MM-dd HH:mm:ss',
    };
    const optionswithoutForm = {
      to: 'GMT',
      format: 'yyyy-MM-dd HH:mm:ss',
    };

    const formattedTimestamp = FormatTimeStamp(timestamp, options);
    const timeStampWithoutForm = FormatTimeStamp(timestamp, optionswithoutForm);
    expect(formattedTimestamp).toBe('2023-07-30 07:30:00');
    expect(timeStampWithoutForm).toBe('2023-07-30 02:00:00');
  });

  it('should format to iso string if no format is provided', () => {
    const timestamp = '2023-07-30T02:00:00Z';
    const formattedTimestamp = FormatTimeStamp(timestamp);
    expect(formattedTimestamp).toBe('2023-07-30T02:00:00.000Z');
  });

  it('should handle invalid from timezone gracefully', () => {
    const timestamp = '2023-07-30T02:00:00Z';

    const optionsWithoutValidFrom = {
      from: 'Invalid_Timezone',
      to: 'IST',
      format: 'yyyy-MM-dd HH:mm:ss',
    };
    const optionsWithoutValidTo = {
      from: 'UTC',
      to: 'Invalid_Timezone',
      format: 'yyyy-MM-dd HH:mm:ss',
    };

    const timeStampWithoutFrom = FormatTimeStamp(
      timestamp,
      optionsWithoutValidFrom
    );
    const timeStampWithoutTo = FormatTimeStamp(
      timestamp,
      optionsWithoutValidTo
    );

    expect(timeStampWithoutFrom).toBe('Invalid Timezone');
    expect(timeStampWithoutTo).toBe('Invalid Timezone');
  });

  it('should return "Invalid Date" for an invalid date string', () => {
    const invalidTimestamp = 'invalid-date-string';
    const options: FormatterOptions = {
      from: 'UTC',
      to: 'UTC',
      format: 'yyyy-MM-dd HH:mm:ss',
    };

    const result = FormatTimeStamp(invalidTimestamp, options);

    expect(result).toBe('Invalid Date');
  });

  it('should return "Invalid Date" for an invalid date format', () => {
    const invalidTimestamp = '2023-07-32'; // Invalid date (32nd day)
    const options: FormatterOptions = {
      from: 'UTC',
      to: 'UTC',
      format: 'yyyy-MM-dd',
    };

    const result = FormatTimeStamp(invalidTimestamp, options);

    expect(result).toBe('Invalid Date');
  });

  it('should return "Invalid Date" for an empty date string', () => {
    const emptyTimestamp = '';
    const options: FormatterOptions = {
      from: 'UTC',
      to: 'UTC',
      format: 'yyyy-MM-dd',
    };

    const result = FormatTimeStamp(emptyTimestamp, options);

    expect(result).toBe('Invalid Date');
  });
});

describe('Helper functions for date parsing and formatting', () => {
  // New test cases for specific conditions
  it('parseDate should return null if format parts length does not match date parts length', () => {
    const dateStr = '2023-07-30T15:30:00.000Z';
    const parsedDate = parseDate(dateStr, 'dd-MM-yyyy');
    expect(parsedDate).toBeNull();
  });

  it('parseDate should return null if date components include NaN due to parsing', () => {
    const dateStr = '30-XX-2023 15:30:00';
    const parsedDate = parseDate(dateStr, 'dd-MM-yyyy HH:mm:ss');
    expect(parsedDate).toBeNull();
  });

  it('parseDate should return null if final parsed date includes NaN values', () => {
    const dateStr = '30-invalid-2023 15:30:00';
    const parsedDate = parseDate(dateStr, 'dd-MM-yyyy HH:mm:ss');
    expect(parsedDate).toBeNull();
  });

  // Test cases for NaN value check in date components
  it('parseDate should return null if a component value is NaN', () => {
    const dateStr = '30-07-XXXX 15:30:00';
    const parsedDate = parseDate(dateStr, 'dd-MM-yyyy HH:mm:ss');
    expect(parsedDate).toBeNull();
  });

  it('parseDate should return null if date string contains non-numeric values', () => {
    const dateStr = 'date-07-2023 15:30:00';
    const parsedDate = parseDate(dateStr, 'dd-MM-yyyy HH:mm:ss');
    expect(parsedDate).toBeNull();
  });

  it('parseDate should return null if date string or format are not provided', () => {
    const dateStr = '2023-07-30T15:30:00.000Z';
    const parsedDate1 = parseDate(dateStr, '');
    expect(parsedDate1).toBeNull();
    const parsedDate2 = parseDate('', 'dd-MM-yyyy HH:mm:ss');
    expect(parsedDate2).toBeNull();
    const parsedDate3 = parseDate('', '');
    expect(parsedDate3).toBeNull();
  });

  // Test cases for error handling in formatDate function
  it('formatDate throws a TypeError for an invalid date', () => {
    expect(() => formatDate(new Date('invalid'), 'yyyy-MM-dd')).toThrow(
      TypeError
    );
  });

  it('formatDate throws an Error for an invalid format', () => {
    expect(() => formatDate(new Date(), '')).toThrow(Error);
    expect(() => formatDate(new Date(), 123 as any)).toThrow(Error);
  });

  it('formatDate returns the format string as is for unrecognized tokens', () => {
    const date = new Date(Date.UTC(2023, 6, 30, 15, 30, 0));
    const formatStr = 'yyyy-MM-dd HH:mm:ss foo';
    const formattedDate = formatDate(date, formatStr);
    expect(formattedDate).toBe('2023-07-30 15:30:00 foo');
  });
});
