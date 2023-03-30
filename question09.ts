function sum(numbers: number[]): number {
  let sumNumber: number = 0;

  for (const number of numbers) {
    sumNumber += number;
  }

  return sumNumber;
}

console.log(sum([1, 2, 3, 4, 5])); // 15

function sum2(numbers: number[]): number {
  return numbers.reduce((sumVal: number, val: number): number => sumVal + val);
}

console.log(sum2([1, 2, 3, 4, 5])); // 15
