class Person {
    name: string;
    
    constructor (name: string) {
        this.name = name;
    }
    
    greet () : string {
        return 'Hello, my name is ' + this.name;
    }
}

var person : Person = new Person('Eugene');
console.log(person.greet());