// Problem Statement
// Create a custom every function, which works as Array.every

// Example
// [1,2,3,4].every((elm) => elm %2 == 0) 
// Result => false

let arr = [1,2,3,4];

Array.prototype.customFilter = function(cb){
  let result = []
  this.forEach((elm, index) =>{
    if(cb(elm, index)){
      result.push(elm)
    }
  })
  return result
}

console.log(arr.filter((elm) => elm %2 === 0)) // [2,4];
console.log(arr.customFilter((elm) => elm %2 === 0)) // [2,4];


