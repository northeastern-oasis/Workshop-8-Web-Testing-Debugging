const timesThree = require('../src/util/timesThree')

// Describes what the test is checking for
test('multiplies a number by 3', () => {
    expect(timesThree(10)).toBe(10)
});
