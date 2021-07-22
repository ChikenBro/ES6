// 类是一个特殊的函数,他没有函数提升
//类的声明
let methodName = 'info';
class User {
  constructor(name, email) { //构造函数
    this.name = name;
    this.email = email;
  }
  // 可以通过计算属性
  [methodName]() {
    console.log(`Hi I'am ${this.name} and my email is ${this.email}`);
  }
  // 静态方法只能在原型对象上调用 实例无法调用
  static description() {
    console.log('i am l User');
  }
  set gitHub(value) {
    this.gitHubName = value;
  }
  get gitHub() {
    return `https://github.com/${this.gitHubName}`;
  }
}
const codecasts = new User('codecasts', 'i@codecasts.com');
console.log(codecasts.info());
console.log(User.description());

codecasts.gitHub = 'ChikenBro';
console.log(codecasts.gitHub);

//类的表达式
const User2 = class {

}