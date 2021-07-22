const colors = ['red', 'yellow', 'blue', 'green'];
const it = colors[Symbol.iterator]();
const iterator = colors.entries(); //返回迭代器 属性和值
const iterator2 = colors.keys(); //属性(索引值)
const iterator3 = colors.values(); //属性值(元素值)

//手写values方法
Array.prototype.myValues = function () {
  let i = 0;
  let items = this;
  return {
    next() {
      const done = i >= items.length;
      const value = done ? undefined : items[i++];
      return {
        value,
        done
      }
    }
  }
}