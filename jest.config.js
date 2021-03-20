module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir/src>'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
