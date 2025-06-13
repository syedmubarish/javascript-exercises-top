const removeFromArray = function(arr,...args) {
    // const newArr = []
    // arr.forEach(item => {
    //     if(!args.includes(item)){
    //         newArr.push(item)
    //     }
    // })
    // return newArr

    return arr.filter(item =>{
        return( !args.includes(item))
    })

};

// Do not edit below this line
module.exports = removeFromArray;
