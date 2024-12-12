function identity(value) {
    return value;
}
var numberResult = identity(42);
var stringResult = identity("Hello, Generics!"); // Works with string
console.log(numberResult);
console.log(stringResult);
