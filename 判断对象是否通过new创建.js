// 方法1：检查构造函数与 instanceof
function isNewInstance(obj, Constructor) {
  return obj.constructor === Constructor && obj instanceof Constructor;
}

// 测试
const p = new Person('Alice');
console.log(isNewInstance(p, Person)); // true


// 方法2: 利用 new.target（ES6+）​
function Person(name) {
  if (!new.target) {
    throw '必须使用 new 调用！';
  }
  this.name = name;
}

Person('Bob'); // 报错
new Person('Alice'); // 正常


// 方法3: 检查原型链​
function isNewInstance(obj) {
  return Object.getPrototypeOf(obj) === Person.prototype;
}