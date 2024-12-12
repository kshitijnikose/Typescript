interface User {
  id: number;
  name: string;
  age: number;
}

type UserWithoutAge = Omit<User, "age">;

const userN: UserWithoutAge = { id: 1, name: "Alice" };
console.log(userN);
