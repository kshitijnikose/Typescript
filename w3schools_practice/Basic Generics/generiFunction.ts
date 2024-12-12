function identity<T>(value: T): T {
  return value;
}

const numberResult = identity<number>(42);
const stringResult = identity<string>("Hello, Generics!"); // Works with string

console.log(numberResult);
console.log(stringResult);
