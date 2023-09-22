// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

export function unluckyDays(year: number): number {
    // Implement me! :)

    let tracker = 0

    for (let i = 1; i < 10; i++) {
        let date: Date = new Date(`${year}-0${i}-14`)
        if (date.getDay() === 5) {
            tracker++
        }
    }
    for (let i = 10; i < 13; i++) {
        let date: Date = new Date(`${year}-${i}-14`)
        if (date.getDay() === 5) {
            tracker++
        }
    }
    return tracker
}

let date: Date = new Date("2019-01-15");
console.log("Date = " + date.getDay()); //Date = Wed Jan 16 2019 05:30:00 GMT+0530 (IST)
console.log(unluckyDays(2015));
console.log(unluckyDays(1986)); 