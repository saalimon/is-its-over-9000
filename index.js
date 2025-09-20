'use strict';

module.exports = (num) => {
    let isNumber = false;
    if (typeof num === 'number') {
        isNumber = !Number.isNaN(num);
    }
    if (typeof num === 'string' && num.trim() !== '') {
        isNumber = Number.isFinite(+num);
    }
    if (!isNumber) {
        throw new TypeError('Expected a finite number or numeric string');
    }
    if (!Number.isSafeInteger(+num)) {
        throw new Error('value exceeds maximum safe integer');
    }
    return Number(num) > 9000;
}