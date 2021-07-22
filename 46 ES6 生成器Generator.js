function* listColors() {
  // yield相当于return 每次调用返回一个值
  let i = 0;
  yield ++i + ' red';
  yield ++i + ' green';
  yield ++i + ' blue';
}
const colors = listColors(); //返回迭代器
console.log(colors.next().value);
console.log(colors.next().value);
console.log(colors.next().value);