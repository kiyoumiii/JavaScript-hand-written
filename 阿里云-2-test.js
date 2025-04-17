// 2.给定一个字符串，判断是否对称数，如对称数符合定义返回true，否则返回false。 举例：12321或121返回true，122或aba返回false。 */}

function isSymmetricNumber(str) {

    if (typeof str !== 'string') {
        return false;
    }

    // const numericStr = str.replace(/[^0-9]/g, '');

    // 检查输入是否完全由数字组成
    if (!/^\d+$/.test(str)) {
        return false;
    }

    // return numericStr === numericStr.split('').reverse().join('');

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

// 测试用例
console.log(isSymmetricNumber("12321")); 
console.log(isSymmetricNumber("121"));   
console.log(isSymmetricNumber("122"));   
console.log(isSymmetricNumber("aba"));   
console.log(isSymmetricNumber("123a321")); 

