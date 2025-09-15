function getUrlParams(url) {
    const searchParams = new URL(url).searchParams;
    const params = {};

    for (const [key, value] of searchParams.entries()) {
        // searchParams.entries()是 URLSearchParams对象提供的一个方法，用于​​以迭代器形式返回所有查询参数的键值对​​。
        params[key] = value;
    }

    return params;
}

const url = 'https://example.com?name=John&age=30&city=New+York';
console.log(getUrlParams(url));