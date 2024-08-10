//@ts-nocheck
import {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toTitleCase,
  escapeHTML,
  replaceAt,
  unescapeHTML,
  isNumeric,
  isEmail,
  isURL,
  isAlpha,
  isAlphanumeric,
  isEqual,
  splitWords,
  splitByLength,
} from '../../src/index';
import { StringMutator } from '../../src/index';

// 1. String case conversion functions
describe('String Case Conversion Functions', () => {
  it('should convert to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
    expect(toCamelCase('Hello World')).toBe('helloWorld');
    expect(toCamelCase('hello_world')).toBe('helloWorld');
    expect(toCamelCase('HELLO_WORLD')).toBe('helloWorld');
    expect(toCamelCase('hello world')).toBe('helloWorld');
  });

  it('should convert to PascalCase', () => {
    expect(toPascalCase('hello-world')).toBe('HelloWorld');
    expect(toPascalCase('Hello World')).toBe('HelloWorld');
    expect(toPascalCase('hello_world')).toBe('HelloWorld');
    expect(toPascalCase('HELLO_WORLD')).toBe('HelloWorld');
    expect(toPascalCase('hello world')).toBe('HelloWorld');
  });

  it('should convert to snake_case', () => {
    expect(toSnakeCase('helloWorld')).toBe('hello_world');
    expect(toSnakeCase('Hello World')).toBe('hello_world');
    expect(toSnakeCase('hello-world')).toBe('hello_world');
    expect(toSnakeCase('HELLO_WORLD')).toBe('hello_world');
    expect(toSnakeCase('hello world')).toBe('hello_world');
  });

  it('should convert to kebab-case', () => {
    expect(toKebabCase('helloWorld')).toBe('hello-world');
    expect(toKebabCase('Hello World')).toBe('hello-world');
    expect(toKebabCase('hello_world')).toBe('hello-world');
    expect(toKebabCase('HELLO_WORLD')).toBe('hello-world');
    expect(toKebabCase('hello world')).toBe('hello-world');
  });

  it('should convert to Title Case', () => {
    expect(toTitleCase('hello-world')).toBe('Hello-World');
    expect(toTitleCase('Hello World')).toBe('Hello World');
    expect(toTitleCase('hello_world')).toBe('Hello_World');
    expect(toTitleCase('HELLO_WORLD')).toBe('Hello_World');
    expect(toTitleCase('hello world')).toBe('Hello World');
  });
});

// 2. String manipulation functions
describe('String Manipulation Functions', () => {
  it('should replace a character at a specific position', () => {
    expect(replaceAt('hello world', 6, 'W')).toBe('hello World');
    expect(() => replaceAt('hello', 11, 'W')).toThrow(RangeError);
    expect(() => replaceAt('hello', 2, 'Hello')).toThrow(Error);
  });

  it('should escape HTML special characters', () => {
    expect(escapeHTML('<div class="example">Hello & "World"</div>')).toBe(
      '&lt;div class=&quot;example&quot;&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;'
    );
    expect(escapeHTML('This & that')).toBe('This &amp; that');
    expect(escapeHTML('')).toBe('');
  });

  it('should unescape HTML special characters', () => {
    expect(
      unescapeHTML(
        '&lt;div class=&quot;example&quot;&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;'
      )
    ).toBe('<div class="example">Hello & "World"</div>');
    expect(unescapeHTML('This &amp; that')).toBe('This & that');
    expect(unescapeHTML('')).toBe('');
  });
});

// 3. String validation functions
describe('String Validation Functions', () => {
  it('should validate numeric strings', () => {
    expect(isNumeric('123')).toBe(true);
    expect(isNumeric('123.45')).toBe(true);
    expect(isNumeric('-123')).toBe(true);
    expect(isNumeric('123a')).toBe(false);
    expect(isNumeric('abc')).toBe(false);
  });

  it('should validate email addresses', () => {
    expect(isEmail('test@example.com')).toBe(true);
    expect(isEmail('user.name+tag+sorting@example.com')).toBe(true);
    expect(isEmail('invalid-email')).toBe(false);
    expect(isEmail('invalid@')).toBe(false);
    expect(isEmail('invalid@example')).toBe(false);
  });

  it('should validate URLs', () => {
    expect(isURL('http://example.com')).toBe(true);
    expect(isURL('https://example.com')).toBe(true);
    expect(isURL('ftp://example.com')).toBe(true);
    expect(isURL('http://www.example.com')).toBe(true);
    expect(isURL('https://www.example.com')).toBe(true);
    expect(isURL('ftp://www.example.com')).toBe(true);
    expect(isURL('www.example.com')).toBe(true);
    expect(isURL('example.com')).toBe(true);
    expect(isURL('http://localhost')).toBe(true);
    expect(isURL('http://192.168.0.1')).toBe(true);
    expect(isURL('http://[2001:db8::1]')).toBe(true);
    expect(isURL('http://example.com:8080')).toBe(true);
    expect(isURL('http://example.com/path/to/resource')).toBe(true);
    expect(isURL('http://example.com?query=string')).toBe(true);
    expect(isURL('http://example.com#fragment')).toBe(true);
    expect(isURL('ftp://example.com:21/path/to/resource')).toBe(true);
    expect(isURL('ftp://example.com?query=string')).toBe(true);
    expect(isURL('ftp://example.com#fragment')).toBe(true);
    expect(isURL('invalid-url')).toBe(false);
    expect(isURL('http:/example.com')).toBe(false);
  });

  it('should validate alphabetic strings', () => {
    expect(isAlpha('abcdef')).toBe(true);
    expect(isAlpha('ABCDEF')).toBe(true);
    expect(isAlpha('abc123')).toBe(false);
    expect(isAlpha('abc def')).toBe(false);
    expect(isAlpha('abc-def')).toBe(false);
  });

  it('should validate alphanumeric strings', () => {
    expect(isAlphanumeric('abcdef123')).toBe(true);
    expect(isAlphanumeric('ABCDEF123')).toBe(true);
    expect(isAlphanumeric('abc123')).toBe(true);
    expect(isAlphanumeric('abc 123')).toBe(false);
    expect(isAlphanumeric('abc-123')).toBe(false);
  });
});

// 4. String comparison functions
describe('String Comparison Functions', () => {
  it('should compare strings with case sensitivity', () => {
    expect(isEqual('Hello', 'Hello')).toBe(true);
    expect(isEqual('Hello', 'hello')).toBe(false);
    expect(isEqual('hello', 'hello')).toBe(true);
    expect(isEqual('HELLO', 'HELLO')).toBe(true);
    expect(isEqual('Hello', 'World')).toBe(false);
  });

  it('should compare strings ignoring case', () => {
    expect(isEqual('Hello', 'Hello', { ignoreCase: true })).toBe(true);
    expect(isEqual('Hello', 'hello', { ignoreCase: true })).toBe(true);
    expect(isEqual('hello', 'hello', { ignoreCase: true })).toBe(true);
    expect(isEqual('HELLO', 'HELLO', { ignoreCase: true })).toBe(true);
    expect(isEqual('Hello', 'World', { ignoreCase: true })).toBe(false);
    expect(isEqual('HeLLo', 'heLLo', { ignoreCase: true })).toBe(true);
  });

  it('should check if a string starts with another string', () => {
    expect(isEqual('Hello', 'He', { startsWith: true })).toBe(true);
    expect(isEqual('Hello', 'he', { startsWith: true })).toBe(false);
    expect(isEqual('Hello', 'hello', { startsWith: true })).toBe(false);
    expect(
      isEqual('Hello', 'hello', { startsWith: true, ignoreCase: true })
    ).toBe(true);
    expect(isEqual('Hello', 'Hell', { startsWith: true })).toBe(true);
    expect(isEqual('Hello', 'World', { startsWith: true })).toBe(false);
  });

  it('should check if a string ends with another string', () => {
    expect(isEqual('Hello', 'lo', { endsWith: true })).toBe(true);
    expect(isEqual('Hello', 'LO', { endsWith: true })).toBe(false);
    expect(isEqual('Hello', 'LO', { endsWith: true, ignoreCase: true })).toBe(
      true
    );
    expect(isEqual('Hello', 'o', { endsWith: true })).toBe(true);
    expect(isEqual('Hello', 'Hello', { endsWith: true })).toBe(true);
    expect(isEqual('Hello', 'World', { endsWith: true })).toBe(false);
  });

  it('should check if a string contains another string', () => {
    expect(isEqual('Hello', 'ell', { has: true })).toBe(true);
    expect(isEqual('Hello', 'ELL', { has: true })).toBe(false);
    expect(isEqual('Hello', 'ELL', { has: true, ignoreCase: true })).toBe(true);
    expect(isEqual('Hello', 'lo', { has: true })).toBe(true);
    expect(isEqual('Hello', 'Hello', { has: true })).toBe(true);
    expect(isEqual('Hello', 'World', { has: true })).toBe(false);
  });

  it('should match a string against a pattern', () => {
    expect(isEqual('Hello', 'He', { ofPattern: 'He' })).toBe(true);
    expect(isEqual('Hello', 'He', { ofPattern: 'he' })).toBe(false);
    expect(isEqual('Hello', 'He', { ofPattern: 'he', ignoreCase: true })).toBe(
      true
    );
    expect(isEqual('Hello', '.*llo', { ofPattern: '.*llo' })).toBe(true);
    expect(isEqual('Hello', '^H.*o$', { ofPattern: '^H.*o$' })).toBe(true);
    expect(isEqual('Hello', '^h.*o$', { ofPattern: '^h.*o$' })).toBe(false);
    expect(
      isEqual('Hello', '^h.*o$', { ofPattern: '^h.*o$', ignoreCase: true })
    ).toBe(true);
  });

  it('should throw TypeError if input arguments are missing', () => {
    expect(() => isEqual()).toThrow(Error);
    expect(() => isEqual('a')).toThrow(Error);
  });

  it('should throw TypeError if input arguments are not strings', () => {
    expect(() => isEqual(1, 2)).toThrow(TypeError);
    expect(() => isEqual('a', 1)).toThrow(TypeError);
    expect(() => isEqual(1, 'b')).toThrow(TypeError);
  });

  it('should throw TypeError if options is not an object', () => {
    expect(() => isEqual('a', 'b', 'c')).toThrow(TypeError);
  });

  it('should throw TypeError if options is not an object with ignoreCase, startsWith, and endsWith properties as booleans and ofPattern as a string', () => {
    expect(() => isEqual('a', 'b', { ignoreCase: 'a' })).toThrow(TypeError);
    expect(() => isEqual('a', 'b', { startsWith: 'a' })).toThrow(TypeError);
    expect(() => isEqual('a', 'b', { endsWith: 'a' })).toThrow(TypeError);
    expect(() => isEqual('a', 'b', { has: 'a' })).toThrow(TypeError);
    expect(() => isEqual('a', 'b', { ofPattern: 2 })).toThrow(TypeError);
  });
});

//5. String Splitting Functions
describe('String Splitting Functions', () => {
  it('should split a string into words', () => {
    expect(splitWords('hello world')).toEqual(['hello', 'world']);
    expect(splitWords('  hello   world  ')).toEqual(['hello', 'world']);
    expect(splitWords('hello')).toEqual(['hello']);
    expect(splitWords('')).toEqual([]);
  });

  it('should split a string into substrings of a specified length', () => {
    expect(splitByLength('hello', 2)).toEqual(['he', 'll', 'o']);
    expect(splitByLength('hello', 3)).toEqual(['hel', 'lo']);
    expect(splitByLength('hello', 5)).toEqual(['hello']);
    expect(splitByLength('hello', 6)).toEqual(['hello']);
    expect(() => splitByLength('hello', 0)).toThrow(TypeError);
    expect(() => splitByLength('hello', -1)).toThrow(TypeError);
  });
});

//6. Miscellaneous String Function
describe('maskString Function', () => {
  it('should mask the entire string with default options', () => {
    expect(maskString('Hello, World!')).toBe('*************');
  });

  it('should mask a portion of the string with the specified start and end indices', () => {
    expect(maskString('Hello, World!', { start: 7, end: 11 })).toBe(
      'Hello, *****!'
    );
    expect(maskString('Hello, World!', { start: 0, end: 4 })).toBe(
      '***** World!'
    );
    expect(maskString('Hello, World!', { start: 6, end: 6 })).toBe(
      'Hello,*World!'
    );
  });

  it('should mask a portion of the string with a custom mask character', () => {
    expect(
      maskString('Hello, World!', { start: 7, end: 11, maskChar: '#' })
    ).toBe('Hello, #####!');
    expect(
      maskString('Hello, World!', { start: 0, end: 4, maskChar: '#' })
    ).toBe('##### World!');
  });

  it('should throw a TypeError if the input string is not a string', () => {
    expect(() => maskString(12345 as unknown as string)).toThrow(TypeError);
  });

  it('should throw a TypeError if start or end are not numbers', () => {
    expect(() =>
      maskString('Hello, World!', { start: '7' as unknown as number })
    ).toThrow(TypeError);
    expect(() =>
      maskString('Hello, World!', { end: '11' as unknown as number })
    ).toThrow(TypeError);
  });

  it('should throw a TypeError if maskChar is not a string', () => {
    expect(() =>
      maskString('Hello, World!', { maskChar: 123 as unknown as string })
    ).toThrow(TypeError);
  });

  it('should throw a RangeError if start or end are out of bounds', () => {
    expect(() => maskString('Hello, World!', { start: -1 })).toThrow(
      RangeError
    );
    expect(() => maskString('Hello, World!', { end: 20 })).toThrow(RangeError);
    expect(() => maskString('Hello, World!', { start: 10, end: 5 })).toThrow(
      RangeError
    );
  });

  it('should return the original string if start and end are out of bounds but equal', () => {
    expect(maskString('Hello, World!', { start: 6, end: 6 })).toBe(
      'Hello,*World!'
    );
  });
});

// StringMutator Class Tests
describe('StringMutator Class', () => {
  it('should convert to camelCase', () => {
    const mutator = new StringMutator('hello-world');
    expect(mutator.toCamelCase()).toBe('helloWorld');
  });

  it('should convert to PascalCase', () => {
    const mutator = new StringMutator('hello-world');
    expect(mutator.toPascalCase()).toBe('HelloWorld');
  });

  it('should convert to snake_case', () => {
    const mutator = new StringMutator('helloWorld');
    expect(mutator.toSnakeCase()).toBe('hello_world');
  });

  it('should convert to kebab-case', () => {
    const mutator = new StringMutator('helloWorld');
    expect(mutator.toKebabCase()).toBe('hello-world');
  });

  it('should convert to Title Case', () => {
    const mutator = new StringMutator('hello-world');
    expect(mutator.toTitleCase()).toBe('Hello-World');
  });

  it('should replace a character at a specific position', () => {
    const mutator = new StringMutator('hello world');
    expect(mutator.replaceAt(6, 'W')).toBe('hello World');
    expect(() => mutator.replaceAt(11, 'W')).toThrow(RangeError);
    expect(() => mutator.replaceAt(2, 'Hello')).toThrow(Error);
  });

  it('should escape HTML special characters', () => {
    const mutator = new StringMutator(
      '<div class="example">Hello & "World"</div>'
    );
    expect(mutator.escapeHTML()).toBe(
      '&lt;div class=&quot;example&quot;&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;'
    );
    expect(new StringMutator('This & that').escapeHTML()).toBe(
      'This &amp; that'
    );
    expect(new StringMutator('').escapeHTML()).toBe('');
  });

  it('should unescape HTML special characters', () => {
    const mutator = new StringMutator(
      '&lt;div class=&quot;example&quot;&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;'
    );
    expect(mutator.unescapeHTML()).toBe(
      '<div class="example">Hello & "World"</div>'
    );
    expect(new StringMutator('This &amp; that').unescapeHTML()).toBe(
      'This & that'
    );
    expect(new StringMutator('').unescapeHTML()).toBe('');
  });

  it('should validate numeric strings', () => {
    const mutator = new StringMutator('123');
    expect(mutator.isNumeric()).toBe(true);
    expect(new StringMutator('123.45').isNumeric()).toBe(true);
    expect(new StringMutator('-123').isNumeric()).toBe(true);
    expect(new StringMutator('123a').isNumeric()).toBe(false);
    expect(new StringMutator('abc').isNumeric()).toBe(false);
  });

  it('should validate emails', () => {
    const mutator = new StringMutator('bKUeh@example.com');
    expect(mutator.isEmail()).toBe(true);
    expect(new StringMutator('example.com').isEmail()).toBe(false);
    expect(new StringMutator('example@.com').isEmail()).toBe(false);
  });

  it('should validate URLs', () => {
    const mutator = new StringMutator('https://example.com');
    expect(mutator.isURL()).toBe(true);
    expect(new StringMutator('example.com').isURL()).toBe(true);
    expect(new StringMutator('example@.com').isURL()).toBe(false);
  });

  it('should validate alpha strings', () => {
    const mutator = new StringMutator('abcAbc');
    expect(mutator.isAlpha()).toBe(true);
    expect(new StringMutator('abc def').isAlpha()).toBe(false);
    expect(new StringMutator('abc-def').isAlpha()).toBe(false);
  });

  it('should validate alphanumeric strings', () => {
    const mutator = new StringMutator('abc123');
    expect(mutator.isAlphanumeric()).toBe(true);
    expect(new StringMutator('abc def').isAlphanumeric()).toBe(false);
    expect(new StringMutator('abc-def').isAlphanumeric()).toBe(false);
  });

  it('should compare strings', () => {
    expect(new StringMutator('abc').isEqual('abc')).toBe(true);
    expect(new StringMutator('abc').isEqual('def')).toBe(false);
    expect(new StringMutator('abc').isEqual('ABC', { ignoreCase: true })).toBe(
      true
    );
    expect(new StringMutator('abc').isEqual('ABC', { ignoreCase: false })).toBe(
      false
    );
    expect(new StringMutator('abc').isEqual('a', { startsWith: true })).toBe(
      true
    );
    expect(new StringMutator('abc').isEqual('c', { endsWith: true })).toBe(
      true
    );
    expect(
      new StringMutator('abc').isEqual('A', {
        ignoreCase: true,
        startsWith: true,
      })
    ).toBe(true);
    expect(
      new StringMutator('abc').isEqual('C', {
        ignoreCase: true,
        endsWith: true,
      })
    ).toBe(true);
    expect(new StringMutator('abc').isEqual('c', { startsWith: false })).toBe(
      false
    );
    expect(new StringMutator('abc').isEqual('d', { endsWith: true })).toBe(
      false
    );
    expect(new StringMutator('abc').isEqual('b', { has: true })).toBe(true);
    expect(new StringMutator('abc').isEqual('d', { has: false })).toBe(false);
    expect(new StringMutator('abc').isEqual('a.c', { ofPattern: 'a.c' })).toBe(
      true
    );
    expect(new StringMutator('abc').isEqual('a', { ofPattern: '^a' })).toBe(
      true
    );
    expect(new StringMutator('abc').isEqual('b', { ofPattern: '^b' })).toBe(
      false
    );
    expect(
      new StringMutator('abc').isEqual('ABC', {
        ofPattern: 'abc',
        ignoreCase: true,
      })
    ).toBe(true);
    expect(() => new StringMutator('abc').isEqual()).toThrow(Error);
    expect(() => new StringMutator('abc').isEqual(12)).toThrow(TypeError);
    expect(() => new StringMutator('abc').isEqual('def', '12')).toThrow(
      TypeError
    );
    expect(() =>
      new StringMutator('abc').isEqual('def', {
        ignoreCase: 12 as unknown as boolean,
      })
    ).toThrow(TypeError);
    expect(() =>
      new StringMutator('abc').isEqual('def', {
        startsWith: 12 as unknown as boolean,
      })
    ).toThrow(TypeError);
    expect(() =>
      new StringMutator('abc').isEqual('def', {
        endsWith: 12 as unknown as boolean,
      })
    ).toThrow(TypeError);
    expect(() =>
      new StringMutator('abc').isEqual('def', { has: 12 as unknown as boolean })
    ).toThrow(TypeError);
    expect(() =>
      new StringMutator('abc').isEqual('def', {
        ofPattern: 12 as unknown as string,
      })
    ).toThrow(TypeError);
  });
});
