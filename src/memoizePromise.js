function memoize(func){
  let results = {};
  return function(...args){
    let context = this;
    let key = JSON.stringify(...args)
    if(key in results){
      return results[key]
    } else{
      func.call(context,...args).then((res) =>{
        results[key] = res;
        return res;
      })
    }
  }
}


function fetchDataFromApi(a,b){
  console.log('Calling Apis with arguments', a,b)
  return new Promise((res, rej) =>{
    // Mocking API call
    setTimeout(() =>{
      res(a+b)
    },300)
  })
}


let memoizedCallApi = memoize(fetchDataFromApi)


// Catch here => This will work only when all these memoizedCallApi are not thrown at once.
// because we are calling all these memoized function all together so 
// this will not work
// because => when the second (0,0) argument call got hit, we did not had the response for the first one, 
// so we tried to fetch apiResponse for this as well

memoizedCallApi(0,0)
memoizedCallApi(3,2)
memoizedCallApi(0,0) // should not make API call
memoizedCallApi(4,2)
memoizedCallApi(2,3)
memoizedCallApi(3,2) // should not make API call

