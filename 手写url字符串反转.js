function reverseDomain(domain) {
    // 将字符串按 '.' 分割成数组
    const parts = domain.split('.');
    // 反转数组
    parts.reverse();
    // 将反转后的数组用 '.' 连接成字符串
    const reversedDomain = parts.join('.');
    return reversedDomain;
}

// 示例使用
const domain = "www.a.com.cn";
const reversedDomain = reverseDomain(domain);
console.log(reversedDomain); // 输出: cn.com.a.www