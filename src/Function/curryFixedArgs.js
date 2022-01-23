// Problem Statement
// add(1)(2)(3)
// add(1,2)(3)
// add(1)(2,3)
// add(1,2,3)


function add(...args){
  function returnFunc(...args2){
    args = [...args, ...args2];
    if(args.length >= 3){
      return args.slice(0,3).reduce((acc, curr) => acc + curr);
    }
    return returnFunc
  }

  return returnFunc()
}