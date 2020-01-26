
const source = {
  a: 1,
  b: 2,
};
const copy = Object.assign(source, { c: 3 }); // 这样修改了source



const str = 'ewre'; // String类型
const obj = new Set([1, 2, 3]); // Set类型
const items = document.querySelectorAll('.item');
let arrayLike6 = {
  1: 'b',
  length: 1,
};

typeof str[Symbol.iterator];
typeof obj[Symbol.iterator];
typeof items[Symbol.iterator];
typeof arrayLike6[Symbol.iterator]; // expression of type 'symbol' can't be used to index type '{ 1: string; length: number; }'

