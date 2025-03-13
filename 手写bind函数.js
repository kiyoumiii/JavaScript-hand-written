// 看到的题解都用到了apply或者call
// bind方法和apply以及call的区别在于，后两者是立即执行的，返回函数执行结果
// 而bind是延迟执行的，返回绑定后的函数


Function.prototype.myBind = function(context) {
    const fn = this;
    const args = [...arguments].slice(1);
    return function newFn () {
        if (this instanceof newFn) {
            return new fn(...args, ...arguments); // 构造函数调用
            // 当 newFn 被用作构造函数时，this 指向新创建的对象，而不是 bind 时指定的 context
        }
        return fn.call(context, ...args, ...arguments);
        // return fn.apply(context, [...args,...arguments]);
        // 当 newFn 被普通调用时，this 指向全局对象（非严格模式）或 undefined（严格模式）
    }
}

// 自己写
Function.prototype.myBind = function(context) {
    const fn = this;
    const args = [...arguments].slice(1);
    return function newFn () {
        if (this instanceof newFn) {
            return new fn(...args, ...arguments);
        }
        return new fn.call(context, ...args, ...arguments);
    }
}