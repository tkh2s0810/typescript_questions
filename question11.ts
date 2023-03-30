type Product = {
  name: string;
  price: number;
};

const array: Product[] = [
  { name: "item1", price: 100 },
  { name: "item2", price: 200 },
  { name: "item3", price: 300 },
];

// あくまでruduceは配列を返すことを忘れずに
function minPrice(array: Product[]) {
  return array.reduce((acc: Product, cur: Product) => {
    return cur.price < acc.price ? cur : acc;
  });
}

console.log(minPrice(array)); // {"name": "item1","price": 100}
