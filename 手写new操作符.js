// 使用apply方法和instanceOf方法
// new内部干的事情，一个就是把构造函数的原型对象赋给obj新对象的对象原型
// 另一个就是this指向，让构造函数的this指向这个对象
// 根据new的语义，如若result是一个对象，那么就返回这个对象，如果不是那么就返回新创建的对象obj

function myNew(constructor, ...args) {
    const obj = {};

    obj.__proto__ = constructor.prototype;

    const result = constructor.apply(obj, args);

    return result instanceof Object ? result : obj;
}