const findTheOldest = function (oldest) {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();



    // for (i = 0; i < oldest.length; i++) {

    //     let age = oldest[i]["yearOfBirth"] - currentYear;
    //     oldest[i]["age"] = age;

    // }

    for (i = 0; i < oldest.length; i++) {

        if (oldest[i]["yearOfDeath"] !== undefined) {
            oldest.sort((a, b) => {
                let personA = currentYear - a.yearOfBirth;
                let personB = currentYear - b.yearOfBirth;

                return personA > personB ? 1 : -1;


            });
        } else if (oldest[i]["yearOfDeath"] === undefined && oldest[i]["yearOfBirth"] === 1066) {

            oldest.sort((a, b) => {
                let personA = currentYear - a.yearOfBirth;
                let personB = currentYear - b.yearOfBirth;

                return personA > personB ? -1 : 1;


            });

        } else if (oldest[i]["yearOfDeath"] === undefined) {

            oldest.splice(i, 1);
            oldest.sort((a, b) => {
                let personA = currentYear - a.yearOfBirth;
                let personB = currentYear - b.yearOfBirth;

                return personA > personB ? 1 : -1;


            });
        }
    }
    return oldest[0];




    // oldest.filter((person) => {
    //     return person["yearOfDeath"] === undefined;

    // });

    // for (i = 0; i < oldest.length; i++) {

    //     if (oldest[i]["yearOfDeath"] === undefined) {

    //         oldest.splice(i, 1);
    //     }
    // }

    //return oldest[0];











    // oldest.filter((person) => {

    //     return person["yearOfDeath"] !== undefined;
    // });


    // for (i = 0; i < oldest.length; i++) {

    //     if (oldest[i]["yearOfDeath"] === undefined) {

    //         oldest.splice(i, 1)
    //     } else {

    //         let age = oldest[i]["yearOfDeath"] - oldest[i]["yearOfBirth"];
    //         oldest[i]["age"] = age
    //     }

    // }


    // for (i = 0; i < oldest.length; i++) {
    //     if (oldest[i]["yearOfDeath"] !== undefined) {
    //         let age = oldest[i]["yearOfDeath"] - oldest[i]["yearOfBirth"];
    //         oldest[i]["age"] = age;

    //         oldest.sort((a, b) => {
    //             let personA = a.age
    //             let personB = b.age

    //             return personA > personB ? -1 : 1;

    //         });

    //         //return oldest[i];

    //     } else if (oldest[i]["yearOfDeath"] === undefined) {
    //         if (oldest[0]["yearOfDeath"] === undefined) {
    //             oldest.splice(0, 1);
    //             let age = oldest[i]["yearOfBirth"] - currentYear;
    //             oldest[i]["age"] = age;
    //             oldest.sort((a, b) => {
    //                 let personA = a.age
    //                 let personB = b.age

    //                 return personA > personB ? -1 : 1;

    //             });
    //         }

    //     }
    // }
    // return oldest[0];



    // oldest.sort((a, b) => {
    //     let personA = a.age
    //     let personB = b.age

    //     return personA > personB ? -1 : 1;

    // });




    // if (oldest[0]["yearOfDeath"] === undefined) {

    //     oldest.splice(i, 1)
    // } else {
    //     for (i = 0; i < oldest.length; i++) {
    //         if (oldest[i]["yearOfDeath"] === undefined) {

    //             oldest.splice(i, 1)
    //         }

    //     }
    // }


    // for (i = 1; i < oldest.length; i++) {
    //     if (oldest[i]["yearOfDeath"] === undefined) {

    //         oldest.splice(i, 1);
    //     } else {
    //         for (i = 0; i < oldest.length; i++) {
    //             if (oldest[0]["yearOfDeath"] === undefined) {

    //                 oldest.splice(i, 1);
    //             }

    //         }
    //     }

    // }

    // for (i = 0; i < oldest.length; i++) {
    //     if (oldest[i]["yearOfDeath"] === undefined) || (oldest[0]["yearOfDeath"] === undefined) {

    //         oldest.splice(i, 1);
    //     }

    // }









};

// Do not edit below this line
module.exports = findTheOldest;
