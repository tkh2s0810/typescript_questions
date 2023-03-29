interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin; // ①Personの型を定義する

const persons: Person[] = [
  //②User型をPerson型に変更する
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

function logPerson(user: Person) {
  //③User型をPerson型に変更する
  console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson); //Person型配列のpersonsを正しく出力する
