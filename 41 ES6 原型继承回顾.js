function User(name, email) {
  this.name = name;
  this.email = email;
  // 因为是公用的 所以建议添加到原型对象中
  // this.info = function () { 
  //   console.log(`Hi I'am ${this.name}`);
  // }
}
User.prototype.info = function () {
  console.log(`Hi I'am ${this.name} `);
}

const codecasts = new User('codecasts', 'i@codecasts.com');
console.log(codecasts.info());
// 可以重写
User.prototype.info = function () {
  console.log(`Hi I'am ${this.name} and my email is ${this.email}`);
}
const laravist = new User('laravist', 'i@laravist.com');
console.log(laravist.info());