function reverseWordsInString(str) {
    // 使用 split(' ') 方法将字符串按空格分割成单词数组
    let words = str.split(' ');
    // 使用 reverse() 方法反转数组中的元素
    let reversedWords = words.reverse();
    // 使用 join(' ') 方法将反转后的数组元素用空格连接成字符串
    let result = reversedWords.join(' ');
    return result;
}

// 示例用法
let inputString = "Hello world this is a test";
let outputString = reverseWordsInString(inputString);
console.log(outputString); 