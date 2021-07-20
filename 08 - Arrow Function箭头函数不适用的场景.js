//1、无法作为构造函数
// const Person = (name, age) => {
//   this.name = name;
//     this.age = age;
// }

const Person = function (name, age) {
  this.name = name;
  this.age = age;
}
const Jelly = Person('Jelly', 18);
//一个方法需要绑定到对象
Person.prototype.updateAge = () => {  //应该使用function函数
  // this指向的是window
  this.age++;
  console.log(this.age);
}

// 2.当你想为Node结点绑定事件的时候也不适用
const div = document.querySelector('div');
div.addEventListener('click', () => { //这里应该改用function函数
  //this指向的还是window
  this.classList.add('in');
  setTimeout(() => { //如果这里使用function函数 this就会指向window/
    // 这里的this是指向div
    this.classList.remove('in');
  }, 2000)
})

// 3.需要使用arguments对象
const sum = () => {  
  return Array.from(arguments).reduce(
    (preSum,value) => presum + value,0
  )
}
const sum = (...args) => {
  return args.reduce( 
    (preSum, value) => presum + value, 0
  )
}
//redece((累加器,当前值,当前索引,原数组) => {},累加器的初始值,没写的话默认数组第一个值)
//但可以使用...args

