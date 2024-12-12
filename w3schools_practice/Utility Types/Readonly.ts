interface User {
  id: number;
  name: string;
}

const userName: Readonly<User> = {
  id: 1,
  name: "Sumit",
  age: 0,
};
