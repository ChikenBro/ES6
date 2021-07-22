class MyArray extends Array {
  constructor() {
    super();
  }
}
const colors = new MyArray();
colors[0] = 'red';
console.log(colors.length);

colors.length = 0;
console.log(colors[0]);

class movieCollection extends Array {
  constructor(name, ...items) { //这里叫剩余参数 下面是扩展运算符
    super(...items); //=> new Array()
    this.name = name;
  }
  add(movie) {
    this.push(movie);
  }
  topRated(limit = 10) {
    return this.sort((a, b) => a.scores > b.scores ? -1 : 1).slice(0, limit);
  }
}
const movies = new movieCollection('favorite movies', {
  name: 'a',
  scores: 1
}, {
  name: 'b',
  scores: 100
}, {
  name: 'c',
  scores: 3
}, {
  name: 'd',
  scores: 4
});
movies.add({
  name: 'e',
  scores: 15
});
console.log(movies);
console.table(movies.topRated(10));
for (let obj of movies) console.log(obj);