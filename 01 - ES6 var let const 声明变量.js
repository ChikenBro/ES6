var price = 100;
var count = 100;
if (count > 5) {
  var discount = price * 0.6;
  console.log('The discount is', discount);
}
console.log('The discount is', discount); //没有块级作用域 所以同样能使用变量discount

if (count > 5) {
  let discount2 = price * 0.6;  //const也一个道理
  console.log('The discount2 is', discount2);
}
console.log('The discount2 is', discount2); //let存在块级作用域 所以访问不了discount2;

let age = 20;
const id = 'abcd2';