/** Array.prototype.concat
 * USE: merge two or more arrays, or single values. 
 * 
 * Input: two or more arrays, or single values
 * Output: Array with merged values from all 
 * 
 */

//Input
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];
let numb = 7;
const obj = {
  name: "Francesco",
  job: "DEV"
}

const CONCAT = arr1.concat(arr2, numb, obj); //Output

console.log(CONCAT); //[ 'a', 'b', 'c', 'd', 7, { name: 'Francesco', job: 'DEV' } ]

//Modify some values...
obj.job = "GIF creator";
numb = 8;

//Log the array again..
console.log(CONCAT); //[ 'a', 'b', 'c', 'd', 7, { name: 'Francesco', job: 'GIF creator' } ]
console.log(numb); //8

//WHY the object was 'modified' and the number not? Is Javascript "buggy" ?