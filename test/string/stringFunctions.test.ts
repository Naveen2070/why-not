import {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toTitleCase,
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
});
