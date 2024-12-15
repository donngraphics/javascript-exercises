const palindromes = function (str) {

    //str.split('').reverse().join('');


    let exPoints = [".", "!"];

    let RevStrArr = str.split('').reverse();
    let strSplit = str.split('');

    for (i = 0; i < exPoints.length; i++) {
        if (RevStrArr[0] == exPoints[i]) {
            RevStrArr.shift();
        }
        if (strSplit[strSplit.length - 1] == exPoints[i]) {
            strSplit.pop();
        }

    }

    let RevStr = RevStrArr.join('').replaceAll(",", "").replaceAll(" ", "").toLowerCase();
    let strJoin = strSplit.join('').replaceAll(",", "").replaceAll(" ", "").toLowerCase();

    if (strJoin === RevStr) {

        return true;
    } else {
        return false;
    }



};

// Do not edit below this line
module.exports = palindromes;
