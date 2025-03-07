// 在 JavaScript 里，只有函数对象才拥有 prototype 属性。
function myInstanceOf(object, constructor) {
    let objectProto = Object.getPrototypeOf(object);
    let constructorPrototype = constructor.prototype;

    while(true) { // 一直循环找

        // objectPrototype是null说明已经到原型链的尽头了，还没找到，返回false
        if (!objectProto) {
            return false;
        }

        // 终于找到了，就返回true
        if(objectProto === constructorPrototype) {
            return true;
        }

        // 循环的推动语句就是object沿着原型链向上找
        objectProto = Object.getPrototypeOf(objectProto);
    }
}

// 二刷

function myInstanceOf(object, constructor) {
    let objectproto = object.__proto__; // AI说这是可以的，和getPrototypeOf方法都可以，兼容性不太一样
    let constructorPrototype = constructor.prototype;

    while(true) {
        if (!objectproto) {
            return false;
        }

        if (objectproto === constructorPrototype) {
            return true;
        }

        objectproto = objectproto.__proto__;
    }

}