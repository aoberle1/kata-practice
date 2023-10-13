"use strict";
// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.highAndLow = function (numbers) {
        var numbersArray = numbers.split(" ").map(Number);
        var highNumber = numbersArray[0];
        var lowNumber = numbersArray[0];
        console.log('numbersArray is:', numbersArray);
        for (var i = 0; i < numbersArray.length; i++) {
            if (highNumber < numbersArray[i]) {
                highNumber = numbersArray[i];
            }
            else if (numbersArray[i] < lowNumber) {
                lowNumber = numbersArray[i];
            }
        }
        return "\"".concat(highNumber, " ").concat(lowNumber, "\"");
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.highAndLow("1 2 -3 4 5"));
