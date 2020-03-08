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