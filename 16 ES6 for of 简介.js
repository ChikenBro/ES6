Array.prototype.first = () => {
  return this[0];
}
const fruits = ['apple', 'bnanan', 'orange', 'mango'];
fruits.attr = "okok";

for (let i = 0; i < fruits.length; i++)
  console.log(fruits[i]);

// ES6 forEach
fruits.forEach(fruit => {
  // if (fruit === 'orange') break; 
  // 会报错 forEach无法终止或跳过
  console.log(fruit);
})

//ES6 for in
//得到的是属性名
//原型对象的属性也会被遍历
for (let index in fruits)
  console.log(fruits[index]);

//ES6 for of
//得到的是属性值
//原型对象的属性和方法不会访问
//支持循环中止和跳过
for (let fruit of fruits)
  console.log(fruit);