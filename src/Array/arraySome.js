// Problem Statement
// Create a custom some function, which works as Array.some

// Example
// [1,2,3,4].some((elm) => elm %2 == 0) 
// Result => true

let arr = [1,2,3,4];

Array.prototype.customSome = function(cb){
  let arr = this;
  for(let i=0; i<arr.length; i++){
    if(cb(arr[i])){
      return true
    }
  }
  return false
}

console.log(arr.some((elm) => elm %2 === 0)) // true;
console.log(arr.customSome((elm) => elm %2 === 0)) // true;


