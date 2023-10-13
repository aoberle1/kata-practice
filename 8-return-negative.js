"use strict";
// In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNegative = void 0;
// Examples
// makeNegative(1);  // return -1
// makeNegative(-5); // return -5
// makeNegative(0);  // return 0
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
var makeNegative = function (num) {
    // TODO
    return Math.sign(num) == 1 ? -num : num;
    // if (Math.sign(num) === 1) {
    //     return -num;
    // } else {
    //     return num;
    // }
};
exports.makeNegative = makeNegative;
console.log((0, exports.makeNegative)(1));
console.log((0, exports.makeNegative)(-5));
console.log((0, exports.makeNegative)(0));
