// Problem Statement
// Create a custom map function, which works as Array.map

// Example
// [1,2,3,4].map((elm) => elm*2) 
// Result => [2,4,6,8]

let arr = [1,2,3,4];

Array.prototype.customMap = function(cb){
  let result = []
  this.forEach((elm, index) =>{
    result.push(cb(elm, index))
  })
  return result
}

console.log(arr.map((elm) => elm *2)) // [2,4,6,8];
console.log(arr.customMap((elm) => elm *2)) // [2,4,6,8];


