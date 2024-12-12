interface User {
  id: number;
  name: string;
  age: number;
}

const update = (user: Partial<User>) => {
  console.log("User updated:", user);
};

update({ name: "Rahul" });
