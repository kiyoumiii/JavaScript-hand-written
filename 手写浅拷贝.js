// 浅拷贝只会拷贝第一层属性，不会递归的拷贝嵌套对象
// 如果要拷贝的对象是基本数据类型，则只拷贝值；如果要拷贝的对象是引用数据类型，则只拷贝引用（内存地址）；
// 浅拷贝可以用扩展运算符或者Object.assign方法实现哦，简单时可以记忆一个好记的：assign方法实现的；第二个与深拷贝写法很对应；
// typeof返回的是一个表示数据类型的字符串哦！

function shallowCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    return Object.assign({}, obj);
    // return {...obj};
}

function shallowCopy(obj) {
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }
    let newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = obj[key];
        }
    }
}

// 和深拷贝相比，无需递归（自己调用自己）