# Date And Time Formatter Documentation

## Overview

This document provides a guide on using the date formatting functions in the library. The functions available are `DateFormatter` and `FormatTimeStamp`.
Here's a table of contents for the **Date and Time Formatter** documentation:

## Table of Contents

1. [Overview](#overview)
2. [Available Methods](#available-methods)
   - [DateFormatter](#dateformatter)
   - [FormatTimeStamp](#formattimestamp)
3. [Types](#types)
   - [FormatterOptions](#formatteroptions)
4. [License](#license)

## Available Methods

### 1. `DateFormatter`

Formats a date string based on provided formatter options or defaults to ISO format.

#### Parameters

- **`dateString`**: _string_  
  The date string to format.

- **`options`**: _FormatterOptions_ (optional)  
  Optional formatter options.

  - **`format`**: _string_ (optional)  
    The format string to use for formatting the date.

  - **`from`**: _string_ (optional)  
    The format of the input date string. If provided, the date string will be parsed using this format.

  - **`to`**: _string_ (optional)  
    The format to which the date should be converted. If not provided, the date will be returned in the specified format or ISO string.

#### Returns

- _string_  
  The formatted date string. If the date is invalid, returns `"Invalid Date"`.

#### Example Usage

```js
import { DateFormatter } from 'why-not';

// Format a date string to a specific format
const formattedDate = DateFormatter('2024-08-08T14:30:00Z', {
  format: 'MM/DD/YYYY',
});
console.log(formattedDate); // Outputs: '08/08/2024'

// Format a date string from a specific format
const formattedDateFrom = DateFormatter('08-08-2024', {
  from: 'DD-MM-YYYY',
  to: 'YYYY/MM/DD',
});
console.log(formattedDateFrom); // Outputs: '2024/08/08'
```

### 2. `FormatTimeStamp`

Formats a timestamp based on provided formatter options including timezones.

#### Parameters

- **`timestamp`**: _string_  
  The timestamp to format.

- **`options`**: _FormatterOptions_ (optional)  
  Optional formatter options, including timezones.

  - **`format`**: _string_ (optional)  
    The format string to use for formatting the date.

  - **`from`**: _string_ (optional)  
    The timezone of the input timestamp. If provided, the timestamp will be adjusted to this timezone.

  - **`to`**: _string_ (optional)  
    The timezone to which the timestamp should be converted. If not provided, the timestamp will be formatted in the local timezone.

#### Returns

- _string_  
  The formatted timestamp string. If the timestamp is invalid or the timezone is unknown, returns `"Invalid Date"` or `"Invalid Timezone"`.

#### Example Usage

```js
import { FormatTimeStamp } from 'why-not';

// Format a timestamp to a specific format
const formattedTimestamp = FormatTimeStamp('2024-08-08T14:30:00Z', {
  format: 'MM/DD/YYYY HH:mm:ss',
});
console.log(formattedTimestamp); // Outputs: '08/08/2024 14:30:00'

// Format a timestamp from one timezone to another
const formattedTimestampWithTimezone = FormatTimeStamp('2024-08-08T14:30:00Z', {
  from: 'UTC',
  to: 'America/New_York',
  format: 'MM/DD/YYYY HH:mm:ss',
});
console.log(formattedTimestampWithTimezone); // Outputs: '08/08/2024 10:30:00'
```

## Types

### FormatterOptions

Defines the options for formatting dates and timestamps.

- **`format`**: _string_ (optional)  
  The format string for the output date.

- **`from`**: _string_ (optional)  
  The format or timezone of the input date or timestamp.

- **`to`**: _string_ (optional)  
  The format or timezone to convert the date or timestamp to.

## License

This documentation and the library are licensed under the MIT License. See the [LICENSE](../LICENSE) file for details.
