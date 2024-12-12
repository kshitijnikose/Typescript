class Person {
  getName(): any {
      throw new Error("Method not implemented.");
  }
  name: string;
}

const  person = new Person();
person.name = "Jane";

console.log(person);
