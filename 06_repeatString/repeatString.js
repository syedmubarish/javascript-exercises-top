const repeatString = function(str,n) {
    let newStr = ""
    if(n<0) newStr = "ERROR"
    else if(n==0) newStr = ""
    else{
        while(newStr.length != str.length*n){
            newStr+=str
        }
    }
    
    return newStr
};

// Do not edit below this line
module.exports = repeatString;
