// 构造函数本身是一个函数对象，因此它既有 prototype 属性，也有 __proto__ 属性。
// prototype 是函数对象的属性，用于为通过该函数创建的对象提供共享的属性和方法。
// __proto__ 是实例对象的属性，指向它的原型对象。

// function F() {}
// console.log(F.prototype); // 输出: F {} (一个空对象)
// console.log(F.__proto__); // 输出: [Function] (指向 Function.prototype)

// 思路是定义一个空的构造函数，把构造函数的原型设置为传入的对象，然后返回一个新对象，该对象的原型是obj.
function create(obj) {
    function F() {};
    F.prototype = obj;
    return new F();
}