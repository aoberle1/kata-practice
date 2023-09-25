// The vowel substrings in the word codewarriors are o,e,a,io. 
// The longest of these has a length of 2. 
// Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, 
// return the length of the longest vowel substring. Vowels are any of aeiou.

export function solve(s: string) {
    // setting up test string for loop to iterate through
    let testString: string = "ahaaa";
    // setting up variable to track current number of sequential vowels in string
    let tempTracker: number = 0;
    // setting up variable to track highest number of sequential vowels in string
    let highScore: number = 0;

    // looping through letters of string
    for (let i = 0; i < testString.length; i++) {
        // if statement to determine if each letter in string is a vowel
        if (testString[i] === 'a' ||
            testString[i] === 'e' ||
            testString[i] === 'i' ||
            testString[i] === 'o' ||
            testString[i] === 'u') {
            tempTracker++
            if (tempTracker > highScore) {
                highScore = tempTracker
            }
        }
        // else that resets tracker to 0 if a consonant is encountered
        else {
            if (tempTracker > highScore) {
                highScore = tempTracker
            }
            tempTracker = 0;
        } 
    }
    return highScore;

}

console.log(solve('ahaa'));

