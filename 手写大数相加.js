// 第一个写法就是直接用BigInt

const bignum1 = BigInt(9000298018992787922134);
const bignum2 = BigInt(8967967647890096789034);

const sum = bignum1 + bignum2;

console.log(sum);

// 第二个写法
let n = 9007199254740992;
let m = 71542122;

function add(x,y) {
    let res = 0;
    let carry = 0;
    let ans = '';
    x = x.toString();
    y = y.toString();
    let maxLength = Math.max(x,length, y.length);
    for (let i = 1; i <= maxLength; i++) {
        let a = parseInt(x[x.length-i] || 0); // 从后往前加
        let b = parseInt(y[y.length-i] || 0); // 其中一个不存在的话补0
        res = a + b + carry; // carry是进位
        carry = Math.floor(res/10); // 进位是地板除法
        ans = (res%10) + ans; // 本位是取余
    }
    if (carry>0) ans += carry; // 循环结束了，刚好处理完length-length也就是index=0这一位了，直接加好进位和ans，这里是如果有carry就加上进位
    return ans;// 处理完毕后把ans直接返回
}
