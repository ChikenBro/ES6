function sum(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}
console.log(sum(1, 2, 3));

function convertCurrency(rate, ...args) {
  return args.map(amount => amount * rate);
}
const amounts = convertCurrency(0.8, 100, 200, 300, 400);
console.log(amounts);

const player = ['zrf', 9527, 5, 7, 8, 9, 10];
const [myname, id, ...scores] = player;
console.log(myname, id, scores);