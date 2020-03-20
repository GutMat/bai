console.log("Excercise 6 - Ordering \n\n")
let numbers = [8,3,2,1,5,4,6];
const reverse = function(arr) {
    arrReversed = [];
    arr.forEach(item => arrReversed.push(item));
    arrReversed.reverse();
    return arrReversed;
}

const sort = function(arr) {
    arrSorted = arr.sort();
    return arrSorted;
}

const even = function(arr) {
    let arrEven = [];
    arr.map(num => num % 2 == 0 ? arrEven.push(num) : null )
    return arrEven;
}

console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
