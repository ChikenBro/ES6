const number = [5, 6, 13, 0, 1, 18, 23];

const double = number.map(function (number) {
  return number * 2;
})
console.log(double);

//箭头函数
//参数只有一个的话 可以省略括号
//没有参数的话也要保留括号
const double2 = number.map((number,i) => {  
  return i + ' ' + number * 2;
})
console.log(double2);

//不带大括号是隐式返回
const double3 = number.map((number) => number * 2);
console.log(double3);