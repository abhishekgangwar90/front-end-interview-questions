// Problem Statement
// implement Filter like Array.filter using Array.reduce

Array.prototype.filterFromReduce = function(func){
  let arr = this;
  let result = []
  arr.reduce((acc, curr, index) => {
    if(acc && func(acc, index)) result.push(acc)
    if(func(curr, index))result.push(curr)
  })

  return result
}