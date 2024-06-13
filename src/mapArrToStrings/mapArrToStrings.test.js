const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('validate value', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    });

    test('mixed types and values', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'asfaffa'])).toEqual(['1', '2', '3']);
    });

    test('empty array', () => {
        expect(mapArrToStrings([])).toEqual([]);
    });

    test('negative', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    });
});
