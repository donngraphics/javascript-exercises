const reverseString = function (text) {

    let text2array = [];
    text2array = [...text];
    let text2arrayReverse = text2array.reverse();
    let text2arrayReverse2string = text2arrayReverse.join("");

    return text2arrayReverse2string;


};

// Do not edit below this line
module.exports = reverseString;
