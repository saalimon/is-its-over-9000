const { test } = require('node:test');
const assert = require('node:assert');
const isItsOver9000 = require('./index.js');

test('should return true for numbers over 9000', () => {
    assert.strictEqual(isItsOver9000(9001), true);
    assert.strictEqual(isItsOver9000(10000), true);
    assert.strictEqual(isItsOver9000(999999), true);
});

test('should return false for numbers equal to or under 9000', () => {
    assert.strictEqual(isItsOver9000(9000), false);
    assert.strictEqual(isItsOver9000(8999), false);
    assert.strictEqual(isItsOver9000(1), false);
    assert.strictEqual(isItsOver9000(0), false);
    assert.strictEqual(isItsOver9000(-1), false);
});

test('should handle numeric strings correctly', () => {
    assert.strictEqual(isItsOver9000('9001'), true);
    assert.strictEqual(isItsOver9000('10000'), true);
    assert.strictEqual(isItsOver9000('9000'), false);
    assert.strictEqual(isItsOver9000('8999'), false);
    assert.strictEqual(isItsOver9000('0'), false);
});

test('should throw Error for decimal numbers (not safe integers)', () => {
    // Decimal numbers are not safe integers, so they should throw an error
    assert.throws(() => isItsOver9000(9000.1), Error);
    assert.throws(() => isItsOver9000(8999.9), Error);
    assert.throws(() => isItsOver9000(9000.9), Error);
});

test('should throw TypeError for invalid inputs', () => {
    assert.throws(() => isItsOver9000('invalid'), TypeError);
    assert.throws(() => isItsOver9000(''), TypeError);
    assert.throws(() => isItsOver9000('   '), TypeError);
    assert.throws(() => isItsOver9000(null), TypeError);
    assert.throws(() => isItsOver9000(undefined), TypeError);
    assert.throws(() => isItsOver9000({}), TypeError);
    assert.throws(() => isItsOver9000([]), TypeError);
    assert.throws(() => isItsOver9000(NaN), TypeError);
});

test('should throw Error for numbers exceeding safe integer range', () => {
    const largeNumber = Number.MAX_SAFE_INTEGER + 1;
    assert.throws(() => isItsOver9000(largeNumber), Error);
    assert.throws(() => isItsOver9000(-Number.MAX_SAFE_INTEGER - 1), Error);
});

test('should handle edge cases within safe integer range', () => {
    // Test numbers within safe integer range
    assert.strictEqual(isItsOver9000(9007199254740991), true); // Number.MAX_SAFE_INTEGER
    assert.strictEqual(isItsOver9000(-9007199254740991), false); // -Number.MAX_SAFE_INTEGER
});

test('should throw Error for Infinity values', () => {
    assert.throws(() => isItsOver9000(Infinity), Error);
    assert.throws(() => isItsOver9000(-Infinity), Error);
});
