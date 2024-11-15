const sumAll = function (num1, num2) {

    let total = 0;

    if ((num1 < 0 || num2 < 0) || (typeof num1 === "string" || typeof num2 === "string") || (num1 % 1 != 0 || num2 % 1 != 0)) {
        return "ERROR"
    }

    if (num1 < num2) {
        for (add = num1; add <= num2; add++) {
            total += add;

        }
    } else if (num2 < num1) {

        for (add = num2; add <= num1; add++) {
            total += add;
        }

    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
