type Student = {
  name: string;
  score: number;
};

const data: Student[] = [
  { name: "太郎", score: 75 },
  { name: "花子", score: 62 },
  { name: "John", score: 59 },
];

// map
const scoreList: number[] = data.map((d: Student): number => {
  return d.score;
});

console.log(scoreList);

// filter
const under65List: Student[] = data.filter((d: Student): boolean => {
  return d.score < 65;
});

console.log(under65List); // --> [{ name: '花子', score: 62 }, { name: 'John', score: 59 }];

// find
const taro = data.find((d: Student): boolean => {
  return d.name === "太郎";
});

console.log(taro); // --> { name: '太郎', score: 75 }

// some
const someOver70: boolean = data.some((d: Student): boolean => {
  return d.score > 70;
});

console.log(someOver70); // --> true

// every
const everyOver70: boolean = data.every((d: Student): boolean => {
  return d.score > 70;
});

console.log(everyOver70); // --> false
