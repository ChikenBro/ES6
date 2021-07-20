function mutiply(a, b) {
  a = a || 5;
  b = b || 6;
  return a * b;
}
console.log(mutiply());

// ES6写法
const mtp = (a = 5, b = 6) => a * b;
console.log(mtp());
//只想给后面的给定值 前面的要显示用undefined
console.log(undefined,7);