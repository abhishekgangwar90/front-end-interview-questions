// Problem Statement
// Write a custom call function which works like Function.prototype.call

let x = { firstName : 'Abhishek'}

function printName(lastName){
  return `${this.firstName} ${lastName}`
}


Function.prototype.customCall = function(obj, ...args){
  // creating a new Function in passed Obj
  // here this will refer to the method customCall is called with
  obj.func = this;
  return obj.func(...args)
}


console.log(printName.call(x, 'Gangwar')); // Abhishek Gangwar
console.log(printName.customCall(x, 'Gangwar')); // Abhishek Gangwar

