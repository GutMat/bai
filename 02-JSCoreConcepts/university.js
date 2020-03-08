let names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {

    constructor(names) {
        this.names = names
    }

    startWith(letter){
        let letterArray = []
        this.names.map(name => name.charAt(0) === letter ? letterArray.push(name) : null)
        return letterArray;
    }

    sort() {
        let sortedNames = this.names.sort();
        return sortedNames;
    }

    get() {
        return this.names;
    }

    getFirst(n) {
        return this.names.slice(0,n)
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.getFirst(3));
console.log(students.startWith('M').sort());
console.log(students.sort().slice(0,4));
console.log(students.startWith('M').sort().slice(0,2));
console.log(students.get());



