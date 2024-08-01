//String Case Conversions
function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/([-_\s][a-z])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', '').replace(' ', '')
    )
    .replace(/^[A-Z]/, (group) => group.toLowerCase());
}

function toPascalCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/([-_\s][a-z])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', '').replace(' ', '')
    )
    .replace(/(^[a-z])/g, (group) => group.toUpperCase());
}

function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[-\s]/g, '_')
    .toLowerCase();
}

function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[_\s]/g, '-')
    .toLowerCase();
}

function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/([-_\s]?[a-z])/g, (group) => group.toUpperCase());
}

export class StringMutator {
  constructor(str: string) {
    this.str = str;
  }

  str: string;

  toCamelCase() {
    return toCamelCase(this.str);
  }

  toPascalCase() {
    return toPascalCase(this.str);
  }

  toSnakeCase() {
    return toSnakeCase(this.str);
  }

  toKebabCase() {
    return toKebabCase(this.str);
  }

  toTitleCase() {
    return toTitleCase(this.str);
  }
}

export { toCamelCase, toPascalCase, toSnakeCase, toKebabCase, toTitleCase };
