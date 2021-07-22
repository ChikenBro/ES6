const phonerHandler = {
  set(target, key, value) {
    target[key] = value.match(/[0-9]/g).join('');
  },
  get(target, key) {
    return target[key].replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  }
};
const phoneNumber = new Proxy({}, phonerHandler);
phoneNumber.one = '123 456 78901';
phoneNumber.two = '123 4567 8901';
console.log(phoneNumber.one, phoneNumber.two);


const person = {
  id: 2
};
const safeHandler = {
  set(target, key, value) {
    const likeKey = Object.keys(target).find(k => k.toLowerCase() === key.toLowerCase());
    if (!(key in target) && likeKey) {
      throw new Error(`有相似的属性${key}和${likeKey}`);
    }
    target[key] = value;
  }
}
const safetyProxy = new Proxy(person, safeHandler);
safetyProxy.ID = 2;
safetyProxy.iD = 2;
safetyProxy.Id = 2;