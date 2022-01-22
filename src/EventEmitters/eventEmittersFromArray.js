// function EventedArray(handler) {
//    this.stack = [];
//    this.mutationHandler = handler || function() {};

//    this.setHandler = function(f) {
//       this.mutationHandler = f;
//    };

//    this.callHandler = function() { 
//       if(typeof this.mutationHandler === 'function') {
//          this.mutationHandler();
//       }
//    };

//    this.push = function(obj) {
//       this.stack.push(obj);
//       this.callHandler();
//    };
//    this.pop = function() {
//       this.callHandler();
//       return this.stack.pop();
//    };
//    this.getArray = function() {
//       return this.stack;
//    }
// }

// var handler = function() {
//    console.log('something changed');
// };

// var arr = new EventedArray(handler);

// //or 

// var arr = new EventedArray();
// arr.setHandler(handler);


// arr.push('something interesting'); //logs 'something changed'


class EventArray{

  constructor(handler){
    this.array = [];
    this.eventHandler = handler;
  }

  push(value){
    this.array.push(value);
    this.eventHandler(this.array)
  }  

  pop(){
    this.array.pop();
    this.eventHandler(this.array)
  }

  getArray(){
    return this.array
  }
}


function handler(arr){
  console.log('Event Handler Triggered',arr);
}

let arr = new EventArray(handler);

arr.push(1)
arr.push(2)
arr.push(3)
arr.pop()
