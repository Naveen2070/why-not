import { DateFormatter } from '../../src/index'; // Adjust the import path accordingly

describe('DateFormatter', () => {
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
    const dateStr = '2023-07-30';
    const formattedDate = DateFormatter(dateStr);
    expect(formattedDate).toBe('2023-07-30T00:00:00.000Z');
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
