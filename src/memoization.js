function memoize(func){
  let results = {};
  return function(...args){
    let key = JSON.stringify(...args)
    let context = this;
    if(key in results){
      return results[key]
    } else{
     let apiResponse = func.call(context, ...args)
      results[key] = apiResponse;
      return apiResponse;
    }
  }
}

function fetchDataFromApi(a,b){
  // you can make an api call;
  console.log('Calling Apis with arguments', a,b)
  return a+b;
}


let memoizedCallApi = memoize(fetchDataFromApi)


memoizedCallApi(0,0)
memoizedCallApi(3,2)
memoizedCallApi(0,0) // should not make API call
memoizedCallApi(4,2)
memoizedCallApi(2,3)
memoizedCallApi(3,2) // should not make API call

