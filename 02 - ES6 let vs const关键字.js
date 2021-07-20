var price = 100;
// var price = 200; 不会报错 会覆盖
let count = 10;
// let count = 20; 会报错
let discount = 0.9; //全局变量
if (count > 5) {
  let discount = 0.6; //只属于if块级作用域
}
const key = 'ac123';
// key = '123'; 报错
const person = {
  name: 'zrf',
  age: 22,
}; //属性可以改变
// person = { name: 'me' }; 报错
person.name = 'me';
const newPeople = Object.freeze(person); //ES5 属性也无法修改