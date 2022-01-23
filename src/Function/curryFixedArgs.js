// Problem Statement
// add(1)(2)(3)
// add(1,2)(3)
// add(1)(2,3)
// add(1,2,3)


function add(maxArgsLength=3, ...args){
  function returnFunc(...args2){
    args = [...args, ...args2];
    if(args.length >= maxArgsLength){
      return args.slice(0,maxArgsLength).reduce((acc, curr) => acc + curr);
    }
  }
  return returnFunc()
}