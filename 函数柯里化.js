// 将多参数函数转换为一系列单参数函数，直到收集到足够的参数后才执行原始函数。
// 返回一个柯里化后的函数
// 检查当前收集到的参数数量是否已经满足原始函数的参数数量要求，如果足够就调用原始函数，不足1就继续收集参数

function curry (fn) {
    if (typeof fn !== 'function') {
        return new Error('curry() need a function');
    }

    return function curried(...args) {
        if (args.length >= fn.length) { // 参数的数量收集足够
            return fn.apply(this, args);
        }
        else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2)); // 继续收集
            }
        }
    }
}


// 二刷
function curry(fn) {
    if (typeof fn !== 'function') {
        return new Error('curry() need a function');
    }

    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args);
        }
        else if (args.length < fn.length) {
            return function(...args2) {
                return curried.apply(this, args.concat(args2)); // concat的参数就是args而不是...args2
            }
        }
    }
}

// 9.13
function curry(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args);
        }
        else if (args.length < fn.length) {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}