const findTheOldest = function(arr) {
    return arr.reduce((a,b)=>{
        if(!a.yearOfDeath){
            a.yearOfDeath = new Date().getFullYear()
        }
        
        if(!b.yearOfDeath){
            b.yearOfDeath = new Date().getFullYear()

        }

        const ageOfA=a.yearOfDeath-a.yearOfBirth
        const ageOfB=b.yearOfDeath-b.yearOfBirth
        if(ageOfA>ageOfB)return a
        else return b
    },{})
};

// Do not edit below this line
module.exports = findTheOldest;
