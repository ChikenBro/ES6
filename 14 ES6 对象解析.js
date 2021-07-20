const Tom = {
  uname: 'Tom Janes',
  age: 25,
  family: {
    mother: 'Norah Jones',
    father: 'Richard Jones',
    brother: 'Howard Jones',
  },
}
//es5写法
// const name = Tom.name;
// const age = Tom.agr;

// es6写法 对象结构语法
// 将同名属性分别赋值给变量
const {uname, age } = Tom; 
console.log(uname, age);

// 如果想要先声明后赋值
// let uname;
// ({
//   uname,
//   age
// } = Tom);
// console.log(uname, age);

// 可以嵌套
// 他是将family中father的属性赋值给f变量, 如果是undefined的话 可以给默认值
const { father:f, mother, brother, sister = 'no sister'} = Tom.family;
console.log(f,mother,brother,sister);