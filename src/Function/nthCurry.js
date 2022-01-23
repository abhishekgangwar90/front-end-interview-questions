// add(2)(2)()
// add(3)(3)(3)()
// add(1)(2)(3)(4)()
// add(1)(3)(4)(3)(5).........()


function add(a){
  return function(b){
    return b ? add(a+b) : a
  }
}
