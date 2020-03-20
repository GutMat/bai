console.log("Excercise 7 - Random Maths \n\n")
const rndGenerator = (bottomRange, upperRange, number) => {
    let rndArr = [];
    for(i = 0; i < number; i++){
        min = Math.ceil(bottomRange);
        max = Math.floor(upperRange);
        rndArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return rndArr;
}

console.log(rndGenerator(5, 20, 10));

const displayRnd = arr => {
    arr.map(num => console.log(num));
}

displayRnd(rndGenerator(5, 20, 10));
