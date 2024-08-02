//String Case Conversions
function toCamelCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/([-_\s][a-z])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', '').replace(' ', '')
    );
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
    .split(/([_\s-])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

export class StringMutator {
  constructor(private str: string) {
    this.str = str;
  }

  toCamelCase() {
    this.str = toCamelCase(this.str);
    return this.str;
  }

  toPascalCase() {
    this.str = toPascalCase(this.str);
    return this.str;
  }

  toSnakeCase() {
    this.str = toSnakeCase(this.str);
    return this.str;
  }

  toKebabCase() {
    this.str = toKebabCase(this.str);
    return this.str;
  }

  toTitleCase() {
    this.str = toTitleCase(this.str);
    return this.str;
  }
}

export { toCamelCase, toPascalCase, toSnakeCase, toKebabCase, toTitleCase };
