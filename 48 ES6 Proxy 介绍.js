const person = {
  name: 'zrf',
  age: '11'
}
// 重新定义一些默认方法
const personProxy = new Proxy(person, {
  get(target, key) {
    return target[key].toUpperCase();
  },
  set(target, key, value) {
    if (typeof value === 'string')
      target[key] = value.trim();
  }
})
console.log(personProxy.name); //ZRF
personProxy.name = "      zhaojinxuan  ";
console.log(personProxy.name); //ZHAOJINXUAN