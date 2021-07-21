const fruits = ['apple', 'banana', 'pear'];
const newFruits = ['orange', 'mongo'];

// fruits.push.apply(fruits, newFruits);
fruits.push(...newFruits);
console.log(fruits);

const dataFields = [2021, 6, 8];
// const data = new Date(dataFields[0], dataFields[1], dataFields[2]);
const data = new Date(...dataFields);
console.log(data);