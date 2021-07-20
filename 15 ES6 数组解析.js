const numbers = ['one', 'two', 'three', 'four'];

const [one, two] = numbers;
console.log(one, two);

const [, , three] = numbers;
console.log(three);

const [first, ...others] = numbers;
console.log(first, others);

const detail = ['Tom', 'Bob'];
const [Tom, Bob, Cindy = 'Cindy'] = detail;
console.log(Tom, Bob, Cindy);

//交换变量
let a = 1,
  b = 2;
[a, b] = [b, a];
console.log(c, b);