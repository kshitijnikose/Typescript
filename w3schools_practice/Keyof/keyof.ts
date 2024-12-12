interface User {
  id: number;
  name: string;
  age: number;
}

type UserKeys = keyof User;

const key1: UserKeys = "id";
const key2: UserKeys = "name";
