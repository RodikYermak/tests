const validateValue = require('./validateValue');

test('validate value', () => {
    expect(validateValue(50)).toBe(true);
});

describe('validate value', () => {
    test('validate value', () => {
        expect(validateValue(50)).toBe(true);
    });

    test('value is less than 0', () => {
        expect(validateValue(-1)).toBe(false);
    });

    test('value is greater than 100', () => {
        expect(validateValue(101)).toBe(false);
    });

    test('value is 0', () => {
        expect(validateValue(0)).toBe(true);
    });

    test('value is 100', () => {
        expect(validateValue(100)).toBe(true);
    });
});
