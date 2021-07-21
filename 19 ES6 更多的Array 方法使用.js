const inventory = [{
    name: 'apples',
    quantity: 2
  },
  {
    name: 'bananas',
    quantity: 0
  },
  {
    name: 'cherries',
    quantity: 5
  },
];

//.find() 返回第一个元素
const bananas = inventory.find(fruit => fruit.name === 'bnanans');

//.findIndex() 返回第一个元素的下标
const bananasIndex = inventory.findIndex(fruit => fruit.name === 'bnanans');

//.some() 至少有个满足就返回true;
const isEnough = inventory.some(fruit => fruit.quantity > 0);
console.log(isEnough);

//.every() 所有满足才返回true;
const isAllEnough = inventory.every(fruit => fruit.quantity > 0);
console.log(isAllEnough);