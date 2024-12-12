var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getName = function () {
        throw new Error("Method not implemented.");
    };
    return Person;
}());
var person = new Person();
person.name = "Jane";
console.log(person);
