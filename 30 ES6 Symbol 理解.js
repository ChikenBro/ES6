const peter = Symbol();
const classRoom = {
  // 解决命名冲突 不支持根据属性遍历 eg for in
  'wadiaw': 2,
  wda: 3,
  [Symbol('lily')]: {
    grade: 80,
    gender: 'female'
  },
  [Symbol('nina')]: {
    grade: 60,
    gender: 'female'
  },
  [Symbol('nina')]: {
    grade: 80,
    gender: 'female'
  }, //直接命名会覆盖前面的Nina
}
// 必须使用[sym]去访问而不能用.sym 因为sym是字符串 而classRoom里没有sym这个字符串的属性
const syms = Object.getOwnPropertySymbols(classRoom).map(sym => classRoom[sym]);
console.log(syms);
console.log(classRoom.wadiaw);
console.log(classRoom.wda);

console.log(classRoom['wadiaw']);
let wda = 'wda';
console.log(classRoom[wda]); //报错 []里面是字符串