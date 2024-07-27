module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/test/**/*.test.(ts|js)'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
