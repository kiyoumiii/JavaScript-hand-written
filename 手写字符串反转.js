// 重点就是加在String的原型链上

String.prototype._reverse = function(a) {
    return a.split('').reverse().join('');
} 