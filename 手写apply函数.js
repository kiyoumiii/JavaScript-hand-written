Function.prototype.myApply = function(context = window) {
    context = Object(context) || window;

    const fn = Symbol('fn');
    context[fn] = this;
    const args = arguments[1] || [];
    const res = context[fn](...args);
    delete context[fn];
    return res;
}

// 自己写

Function.prototype.myApply = function(context = window) {
    context = Object(context) || window;

    const fn = Symbol('fn');
    context[fn] = this;
    const args = arguments[1] || [];
    const res = context[fn](...args);
    delete context[fn];
    return res;
}