let zrf = {
  name: 'zrf',
  age: 22
};
let zjx = {
  name: 'zjx',
  age: 22
};

const strong = new Map();
strong.set(zrf, 'handsome man');
//WeakMap没有size属性 不能for of循环  没有clear()方法 元素必须是对象
// 最大区别 能自我清空没有引用的对象
const weak = new WeakMap();
weak.set(zjx, 'beautiful woman');
console.log(weak);
zjx = null;
console.log(weak);