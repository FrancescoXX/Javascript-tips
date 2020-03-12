/** Array.prototype.join
 * USE:  We want a new string, concatenating the elements in an array (or an array-like object), with a given separator
 * 
 * Input: array (or an array-like object)
 * Output: String  of concatenated elements with the defined separator
 */
const ANIMALS = ['dog', 'cat', 'bird'];
console.log(ANIMALS.join('-')); // Separator: -

//Question 1 : What is the output?
console.log("Answer1: ", ['dog', undefined, 'bird'].join('-')); 

//Question 2 : What is the output? 
console.log("Answer2:", [].join('-'));

//Question 3: What does this function does?
(function () {
  console.log(`Answer3: ${Array.prototype.join.call(arguments)} is a ${typeof(Array.prototype.join.call(arguments))}`);
})('i','f','e','e');