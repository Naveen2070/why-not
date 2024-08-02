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
} from '../../src/index';
import { StringMutator } from '../../src/index';

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
});
