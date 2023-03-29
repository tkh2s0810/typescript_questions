type User = {
  name: string;
  age: number;
};

const users: User[] = [
  {
    name: "Jhon",
    age: 25,
  },
  {
    name: "Taro",
    age: 23,
  },
];

function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`); // 型が定義されていないためエラーが発生しています
}

console.log("Users:");
users.forEach(logPerson);
