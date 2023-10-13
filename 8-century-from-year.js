"use strict";
// Introduction
// The first century spans from the year 1 up to and including the year 100, 
// the second century - from the year 101 up to and including the year 200, etc.
Object.defineProperty(exports, "__esModule", { value: true });
exports.centuryFromYear = void 0;
// Task
// Given a year, return the century it is in.
// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples, 
// you can read more about it here
var centuryFromYear = function (year) {
    return Math.ceil(year / 100);
};
exports.centuryFromYear = centuryFromYear;
console.log((0, exports.centuryFromYear)(1705));
