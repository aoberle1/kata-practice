"use strict";
// Can you find the needle in the haystack?
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNeedle = void 0;
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
function findNeedle(haystack) {
    // Good luck!
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return "found the needle at position ".concat([i]);
        }
    }
    return "didn't find the needle";
}
exports.findNeedle = findNeedle;
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
