// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

export const digitize = (n: number): number[] => {
    // TODO
    let digits = String(n).split('').map(Number).reverse();

    console.log('digits are:', digits);
    return digits;

};

console.log(digitize(35231));
