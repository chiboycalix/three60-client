module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>src/setupTests.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    '^@App/(.*)$': '<rootDir>/src/$1',
    '^@Views/(.*)$': '<rootDir>/src/Views/$1',
    '^@Components/(.*)$': '<rootDir>/src/Components/$1',
    '^@Mui/(.*)$': '<rootDir>/src/Mui/$1',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'json',
    'lcov',
    'text',
  ],
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: false,
};
