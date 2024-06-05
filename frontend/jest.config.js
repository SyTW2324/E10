module.exports = {
      transformIgnorePatterns: [
        'node_modules/(?!(axios)/)'
      ],
    setupFiles: ['./setupfile.js'],
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/styleMock.js',
    },
    verbose: true,
    testEnvironment: "jsdom"
    
};