function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstNumber = getFirstElement<number>([1, 2, 3]);
const firstString = getFirstElement<string>(["apple", "banana", "cherry"]);

console.log(firstNumber);
console.log(firstString);
