"use strict";
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitize = void 0;
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
var digitize = function (n) {
    // TODO
    var digits = String(n).split('').map(Number).reverse();
    console.log('digits are:', digits);
    return digits;
};
exports.digitize = digitize;
console.log((0, exports.digitize)(35231));
