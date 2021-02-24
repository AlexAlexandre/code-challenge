// Given an array of integers, replace every element with its neighbouring numbers (integers next to it),
// then find the duplicate numbers and sum them up. It is guaranteed that provided integers are unique,
// which means they will not repeat.
//
// For example for the input: -3,5,8,-1,6,11
// * given that neighbouring numbers for -3 are -4 and -2
// * resulting array after replacement with neighbouring numbers would be: -4,-2,4,6,7,9,-2,0,5,7,10,12
// * duplicate numbers are -2,7
// * the result will be 5.

exports.overlappingSpreads = function(data) {
    let newNumbers = [];
    let duplicates;

    data.map(value => {
        newNumbers.push(value - 1);
        newNumbers.push(value + 1);
    })

    duplicates = newNumbers.reduce(function(acc, el, i, arr) {
        if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
    }, []);

    return  duplicates.reduce((a, b) => {return a + b});
}
