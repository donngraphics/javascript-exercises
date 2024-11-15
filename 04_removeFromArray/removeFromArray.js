// const removeFromArray = function (arr, remove, remove2 = null) {

//     // for (item in arr) {
//     //     if (arr[item] == remove) {

//     //     }

//     // }

//     let newArr = arr.filter(item => item != remove && item != remove2 && item != remove3);

//     return newArr;
// };

const removeFromArray = function (arr, ...args) {

    let newArr = [];

    for (let item = 0; item < arr.length; item++) {
        let addItem = true;
        // console.log(arr[item]);

        for (let arg = 0; arg < args.length; arg++) {

            if (arr[item] === args[arg]) {
                addItem = false;
                break;
            }

        }
        if (addItem) {
            newArr.push(arr[item]);
        }
    }


    return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
