// Problem Statement
// Implement custom Bind Function, which works as function.bind()

let x = { firstName : 'Abhishek'}

function printFullName(lastName, city){
  return `${this.firstName} ${lastName} from ${city}`
}

Function.prototype.customBind = function(...args){
  let func = this;
  return function(...args2){
    return func.call(...args, ...args2);
  }
}

let originalBindFunc = printFullName.bind(x, 'Gangwar');
console.log(originalBindFunc('Bangalore')) // 'Abhishek Gangwar from Bangalore'



let customBindFunc = printFullName.customBind(x, 'Gangwar');
console.log(customBindFunc('Bangalore')) // 'Abhishek Gangwar from Bangalore'

