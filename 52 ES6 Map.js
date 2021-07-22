const people = new Map([
  ['key', 'value'],
  ['键', '值']
]);
// key可以是任意类型
people.set('zrf', 22);
people.set('zjx', 22);
people.set('zkx', 0);

people.forEach((value, key, map) => {
  console.log(key, value, map);
})
//person是数字 person[0]是键 person[1]是值
for (let person of people)
  console.log(person);
// 所以一般可以这样写
for (let [key, value] of people) {
  console.log(key, value);
}
people.get('zrf'); //22
people.size() //3
people.has('zjx') //true;
people.delete('zkx');
people.clear();