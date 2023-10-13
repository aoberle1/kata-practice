// This kata is about multiplying a given number by eight if it is an even number 
// and by nine otherwise.

export function simpleMultiplication(num: number): number {
    if (num % 2 === 0) {
        return num * 8;
    }
    else {
        return num * 9;
    }
}

console.log(simpleMultiplication(2));
console.log(simpleMultiplication(1));
console.log(simpleMultiplication(8));
console.log(simpleMultiplication(4));
console.log(simpleMultiplication(5));

// codewars better solution

// export function simpleMultiplication(num: number): number{
//     return num * (num % 2 === 0 ? 8 : 9);
//   }