"use strict";
// This kata is about multiplying a given number by eight if it is an even number 
// and by nine otherwise.
Object.defineProperty(exports, "__esModule", { value: true });
exports.simpleMultiplication = void 0;
function simpleMultiplication(num) {
    if (num % 2 === 0) {
        return num * 8;
    }
    else {
        return num * 9;
    }
}
exports.simpleMultiplication = simpleMultiplication;
console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));
console.log(simpleMultiplication(8));
console.log(simpleMultiplication(4));
console.log(simpleMultiplication(5));
