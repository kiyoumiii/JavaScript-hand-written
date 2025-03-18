function isPalindrome(str) {
    // 移除字符串中的非字母数字字符，并转换为小写
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // 将字符串反转
    const reversedStr = cleanedStr.split('').reverse().join('');
    // 判断反转后的字符串是否与原字符串相等
    return cleanedStr === reversedStr;
}

// 示例使用
const testStr1 = "A man, a plan, a canal: Panama";
const testStr2 = "race a car";

console.log(isPalindrome(testStr1)); // 输出: true
console.log(isPalindrome(testStr2)); // 输出: false


// 不使用api

function isPalindrome(str) {
    // 清理字符串：移除非字母数字字符，并转换为小写
    let cleanedStr = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (/[a-zA-Z0-9]/.test(char)) {
            cleanedStr += char.toLowerCase();
        }
    }

    // 使用双指针法判断是否是回文串
    let left = 0;
    let right = cleanedStr.length - 1;
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// 示例使用
const testStr3 = "A man, a plan, a canal: Panama";
const testStr4 = "race a car";

console.log(isPalindrome(testStr3)); // 输出: true
console.log(isPalindrome(testStr4)); // 输出: false