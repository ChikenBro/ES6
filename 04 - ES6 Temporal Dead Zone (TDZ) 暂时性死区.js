console.log(color); //undefined
var color = 'yellow';

console.log(myname); //变量这时候在临时性死区 会报错 cosnt同理
let myname = 'zrf';

// 默认用const
// 如果要修改用let
// ES6不用var