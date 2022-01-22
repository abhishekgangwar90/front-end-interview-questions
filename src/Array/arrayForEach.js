// Problem Statement
// Create a custom ForEach function, which works as Array.ForEach
// Run callback on each Element of Array

// Example
// [1,2,3,4].ForEach((elm) => console.log(elm)) 
// Result => 1,2,3,4

let arr = [1,2,3,4];

Array.prototype.customForEach = function(cb){
  let arr = this;
  for(let i=0; i<arr.length; i++){
    cb(arr[i])
  }
}

console.log(arr.filter((elm) => console.log(elm))) // [1,2,3,4];
console.log(arr.customForEach((elm) => console.log(elm))) // [1,2,3,4];


// Extras - using this customForEach to Write CustomMap, CustomFilter