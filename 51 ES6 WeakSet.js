let zrf = {
  name: 'zrf',
  age: 22
};
let zjx = {
  name: 'zjx',
  age: 22
};
// 它的元素只能是对象 无法通过for of 循环 也没有forEach方法 没有clear()方法
// 他能自己清除引用为空的对象 防止内存泄漏
const people = new WeakSet([zrf, zjx]);
const people2 = new Set([zrf, zjx]);
zrf = null;
console.log(people); //要过一会 zrf就不在这个set里了
console.log(people2);