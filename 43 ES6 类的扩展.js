class Animal {
  constructor(name) {
    this.name = name;
    this.belly = [];
  }
  eat(food) {
    this.belly.push(food);
  }
  speak() {
    console.log(" i am animal");
  }
}
// es5继承
// function Dog(name, age) {
//   Animal.call(this, name, age);
//   this.name = name;
//   this.age = age;
// }
// Dog.prototype = new Animal();
// Dog.prototype.constructor = Dog;

// ES6继承
class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  bark() {
    console.log('Bark bark');
  }
  //可以重载
  speak() {
    console.log('i am dog');
  }
}

const lucky = new Dog('lucky', 2);
console.log(lucky);
lucky.bark();
lucky.speak();