// Problem Statement
// Create a custom filter function, which works as Array.filter

// Example
// [1,2,3,4].filter((elm) => elm %2 == 0) 
// Result => [2,4]

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


