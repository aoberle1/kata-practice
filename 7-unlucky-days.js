"use strict";
// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
Object.defineProperty(exports, "__esModule", { value: true });
exports.unluckyDays = void 0;
// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.
// Examples:
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1
function unluckyDays(year) {
    // Implement me! :)
    var tracker = 0;
    for (var i = 1; i < 10; i++) {
        var date_1 = new Date("".concat(year, "-0").concat(i, "-14"));
        if (date_1.getDay() === 5) {
            tracker++;
        }
    }
    for (var i = 10; i < 13; i++) {
        var date_2 = new Date("".concat(year, "-").concat(i, "-14"));
        if (date_2.getDay() === 5) {
            tracker++;
        }
    }
    return tracker;
}
exports.unluckyDays = unluckyDays;
var date = new Date("2019-01-15");
console.log("Date = " + date.getDay()); //Date = Wed Jan 16 2019 05:30:00 GMT+0530 (IST)
console.log(unluckyDays(2015));
console.log(unluckyDays(1986));
