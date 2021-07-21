const myname = 'zrf';
const age = '2';
const birthday = '2021-7-21';

const zrf1 = {
  myname,
  age,
  birthday,
  greet() {
    console.log('hello');
  }
}
console.log(zrf1);

let id = 0;
const userIds = {
  // 计算属性
  [`user-${++id}`]: id,
  [`user-${++id}`]: id,
  [`user-${++id}`]: id,
}
// 以前写法
userIds[`user-${++id}`] = id;
userIds[`user-${++id}`] = id;
userIds[`user-${++id}`] = id;

console.log(userIds);

const keys = ['name', 'age', 'birthday'];
const values = ['zrf', '22', '2021-7-21'];

const zrf = {
  //在[]里面写表达式
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
  [keys.shift()]: values.shift(),
}
console.log(zrf);