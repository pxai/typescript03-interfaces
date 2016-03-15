var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        return 'Hello, my name is ' + this.name;
    };
    return Person;
}());
var person = new Person('Eugene');
console.log(person.greet());
