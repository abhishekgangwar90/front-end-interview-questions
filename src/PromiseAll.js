let promise1 = Promise.reject('40');
let promise2 = new Promise((res) => {
  console.log('got called')
  setTimeout(res, 100, 'hello')
})


function customPromiseAll(promiseArr){
  let results = [];
  let completedPromises = 0;
  return new Promise((resolve, reject) =>{
    promiseArr.forEach((promise, index) => {
        promise.then((res) =>{
          results[index] = res;
          completedPromises++;
          if(completedPromises === promiseArr.length){
            resolve(results)
          }
        }).catch((err) =>{
          reject(err)
        })
    });
  })
}

customPromiseAll([promise1, promise2])
.then((res) => {
  console.log('Promise All Response', res)
}).catch((err) => console.log('Promise All Error', err))