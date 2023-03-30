const array = [1, 2, 3, 4, 5];

// 逃げてmapでやったやつ
function square(numbers: number[]) {
  // 配列の数値を 2 乗する処理を実装する
  const hoge = numbers.map((num: number): number => {
    return num ** 2;
  });

  return hoge;
}

console.log(square(array)); //

// 答え
function square2(numbers: number[]) {
  // 配列の数値を 2 乗する処理を実装する
  return numbers.reduce((accumulator: number[], currentValue: number) => {
    accumulator.push(currentValue * currentValue);
    return accumulator;
  }, []);
}

// https://js.studio-kingdom.com/javascript/array/reduce
function square3(numbers: number[]) {
  // 配列の数値を 2 乗する処理を実装する
  return numbers.reduce((acc: number[], cur: number) => {
    acc.push(cur ** 2);
    return acc;
  }, []);
}

console.log(square(array)); //  [1, 4, 9, 16, 25]
