// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

export function noSpace(x:string):string {
    // Your Code
    // split takes the string and splits it into an array where each value is a letter in the string
    // join takes the array of letters and joins them into one word with a seperator of an empty string
    return x.split(" ").join("");
  }

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// code wars better answer

// export function noSpace(x:string):string {
    // /\s/g is regular expression for space
//     return x.replace(/\s/g, '');
//   }