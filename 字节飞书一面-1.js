function canFormSentence(wordList, s) {
    const wordSet = new Set(wordList);
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; // 空字符串可以被组成
    
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[n];
}

// 使用示例
const wordList = ["hello", "world", "leetcode"];
const s1 = "helloworld";
const s2 = "helloleetcode";
const s3 = "helloworldleetcode";
const s4 = "helloworldleetcod";

console.log(canFormSentence(wordList, s1)); // true
console.log(canFormSentence(wordList, s2)); // true
console.log(canFormSentence(wordList, s3)); // true
console.log(canFormSentence(wordList, s4)); // false