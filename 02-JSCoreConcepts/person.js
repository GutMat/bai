class Person {
    name;
    surname;

    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }

    displayPersonalDetails = () => {
        console.log(this.name + " " + this.surname.toUpperCase());
        console.log(this.name.substring(0,1) + "." + this.surname.substring(0,1))
    }
}

console.log("Excercise 8 - Person class \n\n");

let personOne = new Person("Jan", "Nowak");
personOne.displayPersonalDetails();
let personTwo = new Person("Mateusz", "Gut");
personTwo.displayPersonalDetails();