const youngest = ['aa', 'bb', 'cc'];
const olders = ['xx', 'yy', 'zz'];

// es5
let members = [];
members = members.concat(youngest);
members.push('hhh');
members = members.concat(olders);
console.log(members);
// es6
const string = 'zengrf';
const char = [...string];
console.log(char);

const members2 = [...youngest, 'hhh', ...olders];
//复制数组 这只是复制了索引 改变了元素 原数组也会改变
const currentMember = members2; //传统写法[].concat(members2)
// 该数组是独立的
const currentMember2 = [...members];
console.log(members2);