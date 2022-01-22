// Problem Statement
// implement Map like Array.map using Array.reduce

Array.prototype.mapFromReduce = function(func){
  let arr = this;
  let result = []
  arr.reduce((acc, curr, index) => {
    if(acc) result.push(func(acc, index))
    result.push(func(curr, index))
  })

  return result
}