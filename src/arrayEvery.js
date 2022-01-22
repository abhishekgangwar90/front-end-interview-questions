// Problem Statement
// Create a custom every function, which works as Array.every

// Example
// [1,2,3,4].every((elm) => elm %2 == 0) 
// Result => false

let arr = [1,2,3,4];

Array.prototype.customEvery = function(cb){
  let arr = this;
  for(let i=0; i<arr.length; i++){
    if(!cb(arr[i])){
      return false
    }
  }
  return true
}

console.log(arr.every((elm) => elm %2 === 0)) // false;
console.log(arr.customEvery((elm) => elm %2 === 0)) // false;


