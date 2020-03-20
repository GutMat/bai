console.log("Excercise 3 - loops \n\n")
// Display natural nums
let natural = [2,6,10,14]
console.log("Display with map")
natural.map((num) => {
    return console.log(num);
});

function naturalDisplayForEach(arr){
    arr.forEach(function(num) {
        console.log(num);
    }); 
}

function naturalDisplayFor(arr){
    for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
}

function naturalDisplayWhile(arr){
    let count = 0
    while(arr[count]){
        console.log(arr[count]);
        count++;
    }
}

console.log("Display with forEach")
naturalDisplayForEach(natural);
console.log("Display with for")
naturalDisplayFor(natural);
console.log("Display with while")
naturalDisplayWhile(natural);
