var name = 'jelly' //会覆盖window对象总的name属性
  (function () {
    var name = "jelly";
  })(); //这样不会覆盖
{
  const name = 'jelly'; //这样也不会覆盖,let同理
}
for (var i = 0; i < 9; i++){
  setTimeout(function () {
    console.log(i); //输出10个10  把var改成let 就可以输出0~9
  })
}
console.log(10) //输出10