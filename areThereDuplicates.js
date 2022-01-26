/*
Frequency Counter / Multiple Pointer - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in. You can solve this
using the the frequency counter pattern OR the multiple pointer paterns
 */

function areThereDuplicates(){
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

//OR

function areThereDuplicatesP(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}

//OR
function areThereDuplicatesS() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a','b','c','a')) // false

//Solution with Pointes
console.log('Whith Multiple Pointers Pattern')
console.log(areThereDuplicatesP(1,2,3)) // false
console.log(areThereDuplicatesP(1,2,2)) // true
console.log(areThereDuplicatesP('a','b','c','a')) // false

//Solution with a Set transformation
console.log('Whith a Set convertion')
console.log(areThereDuplicatesS(1,2,3)) // false
console.log(areThereDuplicatesS(1,2,2)) // true
console.log(areThereDuplicatesS('a','b','c','a')) // false