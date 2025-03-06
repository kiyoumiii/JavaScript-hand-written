// 深拷贝会递归的拷贝嵌套的对象，拷贝后的对象与原对象完全独立，修改拷贝后的对象不会影响原对象
// 如果遇到属性值为引用类型的时候，它新建一个引用类型并将对应的值复制给它，因此对象获得的一个新的引用类型而不是一个原有类型的引用.

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // 处理一下特殊对象：时间对象和正则表达式对象
    if (obj instanceof Date) {
        return new Date(obj);
    }

    if (obj instanceof RegExp) {
        return new RegExp(obj.source, ogj.flags);
    }

    let newObj = Array.isArray(obj) ? [] : {};

    for(let key in obj) {
        if(obj.hasOwnProperty(key)) { // 不考虑继承属性，因为拷贝它们会导致新对象与原对象共享原型链，违背初衷
            newObj[key] = deepCopy(obj[key]);
        }
    }

    return newObj;

}