const add = function(...args) {
	return args.reduce((acc,curr)=>{
    acc+=curr
    return acc
  },0)
};

const subtract = function(...args) {
	return args.reduce((a,b)=>{
    return a-b
  })
};

const sum = function(arr) {
	return arr.reduce((acc,curr)=>{
    acc+=curr
    return acc
  },0)
};

const multiply = function(arr) {
  return arr.reduce((a,b)=>{
    return a*b
  })
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	if(a==0){

    return 1
  }else{

    return a * factorial(a - 1) 
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
