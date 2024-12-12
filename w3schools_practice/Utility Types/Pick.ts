interface User {
  id: number;
  name: string;
  age: number;
}

type UserSummary = Pick<User, "id" | "name">;

const user: UserSummary = { id: 1, name: "Rahul" };
console.log(user);
