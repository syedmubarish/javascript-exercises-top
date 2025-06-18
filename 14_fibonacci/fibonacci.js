const fibonacci = function(term) {
    if(term<0) return "OOPS"
    else if(term==0)return 0
    else if(term==1||term==2)return 1
    else{
        return fibonacci(term - 1) + fibonacci(term - 2)
    }
};

// Do not edit below this line
module.exports = fibonacci;
