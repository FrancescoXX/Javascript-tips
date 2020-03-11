/** Array.of
 * USE: creates a new Array from a some arguments
 */

//Using Array.of
const array1 = Array.of(1, 2, 3);
const array2 = Array.of("dev");
const array3 = Array.of(4);

//Using the Array Constructor
const array4 = Array(1, 2, 3);
const array5 = Array("dev");
const array6 = Array(4); 

//Logs
console.log(array1); // [1, 2, 3]
console.log(array2); // [ 'dev' ]
console.log(array3); // [4] 
console.log(array4); // [1, 2, 3]
console.log(array5); // [ 'dev' ]
console.log(array6); // [ <4 empty items> ] // What happened here? 
