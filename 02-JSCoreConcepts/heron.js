// boki trójkąta
const a = 3;
const b = 4;
const c = 5;
const h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .
console.log("Excercise 2 - Herons formula \n\n")

let countSurfaceArea = (a,b,c) => {
    let halfOfPerimeter = (a+b+c)/2
    let surfaceArea = Math.sqrt(halfOfPerimeter*(halfOfPerimeter-a)*(halfOfPerimeter-b)*(halfOfPerimeter-c))
    console.log(`Pole trókąta o bokach ${a}, ${b}, ${c} wynosi: ${surfaceArea}`)
};

countSurfaceArea(a,b,c);
