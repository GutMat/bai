const title = "dr";
const name = "Mateusz";
const surname = 'Kubicki';
const street = 'Długa 15';
const city = 'Kraków';
const zip = '30-781';
const country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/


console.log("Excercise 1 - Strings \n\n")
console.log(title +
            " " + name +
            " " + surname + "\n" +
            "ul. " + street + "\n" +
            city +
            " " + zip + "\n" +
            country)

console.log(`${title} ${name} ${surname}\nul. ${street}\n${city} ${zip}\n${country}`)