// call
Function.prototype.myCall = function(context, ...args) {
    context = context || window;
    const fnKey = Symbol('fn');
    context[fnKey] = this;
    const result = context[fnKey](...args);
    delete context[fnKey];
    return result;
}

// apply
Function.prototype.myApply = function(context, argsArray) {
    context = context || window;
    const fnKey = Symbol('fn');
    context[fnKey] = this;
    const result = context[fnKey](...argsArray);
    delete context[fnKey];
    return result;
}