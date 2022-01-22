// Problem Statement
// Create a custom reduce function, which works as Array.reduce using map

// Example
// [1,2,3,4].reduce((acc, curr) => acc + curr) 
// Result => 10

// [1,2,3,4].reduce((acc, curr) => acc + curr, 5) 
// Result => 15

// [{key: 1}, {key: 5}].reduce((acc, curr) => ({key: acc.key + curr: key}))
// result => 6


Array.prototype.customReduce = function(func, initialVal){
  let arr = this;
  let acc = initialVal === undefined ? undefined : initialVal
  // don't do acc = initialVal || undefined because it will fail for falsy initial Value like 0 

  arr.map((elm, index) => {
   acc = acc === undefined ? elm : func(acc, elm, index, this)
  })

  return acc;
}

let x = [1,2,3,4];
let arrOfObj = [{key: 1}, {key: 5}]

console.log(x.reduce((acc, curr) => acc + curr));
console.log(x.reduce((acc, curr) => acc + curr, 5));
console.log(arrOfObj.reduce((acc, curr) => acc + curr.key,0));


console.log(x.customReduce((acc, curr) => acc + curr));
console.log(x.customReduce((acc, curr) => acc + curr, 5));
console.log(arrOfObj.customReduce((acc, curr) => acc + curr.key,0));


