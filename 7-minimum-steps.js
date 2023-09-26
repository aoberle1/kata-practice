"use strict";
// Task
// Given an array of N integers, you have to find how many times you have to add up the smallest numbers 
// in the array until their Sum becomes greater or equal to K.
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimumSteps = void 0;
// Notes:
// List size is at least 3.
// All numbers will be positive.
// Numbers could occur more than once , (Duplications may exist).
// Threshold K will always be reachable.
// Input >> Output Examples
// minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
// Explanation:
// We add two smallest elements (1 + 2), their sum is 3 .
// Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .
// Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) 
// operations are required to do this .
// minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
// Explanation:
// We add two smallest elements (4 + 2), their sum is 6 .
// Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .
// Now we add the next smallest number (14 + 9) , so the sum becomes 23 .
// Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) 
// operations are required to do this .
// minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
// Explanation:
// We add two smallest elements (19 + 17), their sum is 36 .
// Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .
// We need to keep doing this until the sum becomes greater or equal to K (464 in this case), 
// which will require 8 Steps .
function minimumSteps(nums, threshold) {
    // your code here
    // setting up tracker variable to keep track of steps
    var stepTracker = 0;
    // setting up sum variable to track sum
    var sumTracker = 0;
    // find smallest number in array, add to next smallest number
    nums.sort((function (a, b) { return a - b; }));
    console.log('sorted array is:', nums);
    // checking if sumTracker is equal to or greater than threshold in while loop
    for (var i = 0; i < nums.length; i++) {
        sumTracker + nums[i];
        if (sumTracker > threshold) {
            return sumTracker;
        }
    }
    return sumTracker;
}
exports.minimumSteps = minimumSteps;
console.log(minimumSteps([1, 10, 12, 9, 2, 3], 6));
