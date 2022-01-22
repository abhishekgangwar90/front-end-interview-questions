// Problem Statement
// Create a custom find function, which works as Array.find

// Example
// [3,1,2,4,5,6].find((elm) => elm > 3) 
// Result => 4

let arr = [1,2,3,4];

Array.prototype.customFind = function(cb){
  let arr = this;
  for(let i=0; i<arr.length; i++){
    if(cb(arr[i])){
      return arr[i]
    }
  }
  return undefined
}

console.log(arr.find((elm) => elm >3)) // 4;
console.log(arr.customFind((elm) => elm >3)) // 4;


