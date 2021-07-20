const Jelly = {
  name: 'Jelly',
  hobbies: ['Coding', 'Sleeping', 'Reading'],
  printHobbies: function (hobby) {
    // 此处的this指向的是Jelly对象
    var self = this; //以前写法
    this.hobbies.map(function (hobby) {
      // 此次指向了window对象 
      console.log(self.name, 'like', hobby);
    })
  },
  printHobbies2: function (hobby) {
    this.hobbies.map(hobby => {
      // 他的this值继承他的父作用域
      console.log(this.name, 'like', hobby);
    })
  }
}
Jelly.printHobbies();
Jelly.printHobbies2();
