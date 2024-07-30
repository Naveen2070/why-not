import { DateFormatter } from './date-and-time/dateTimeMutation';

// Example usage
const dateStr = '2023-07-30T15:30:00.000Z';

const formattedDate1 = DateFormatter(dateStr, { format: 'dd/MM/yyyy' });
console.log(formattedDate1); // Output: 30/07/2023

const formattedDate2 = DateFormatter(dateStr, {
  from: "yyyy-MM-dd'T'HH:mm:ss.SSSX",
  to: 'dd-MM-yyyy',
});
console.log(formattedDate2); // Output: 30/07/2023

const formattedDate3 = DateFormatter(dateStr);
console.log(formattedDate3); // Output: 2023-07-30T15:30:00.000Z (ISO format)
