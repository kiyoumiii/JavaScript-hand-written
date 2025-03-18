function parseURL(url) {
    // 创建一个对象存储解析结果
    const result = {};
  
    // 使用 URL 对象解析 URL
    const urlObj = new URL(url);
  
    // 提取协议
    result.protocol = urlObj.protocol.replace(':', ''); // 去掉冒号
  
    // 提取域名
    result.hostname = urlObj.hostname;
  
    // 提取端口
    result.port = urlObj.port || (result.protocol === 'https' ? '443' : '80'); // 默认端口
  
    // 提取路径
    result.path = urlObj.pathname;
  
    // 提取参数
    result.params = {};
    urlObj.searchParams.forEach((value, key) => {
      result.params[key] = value;
    });
  
    // 提取哈希值
    result.hash = urlObj.hash.replace('#', ''); // 去掉井号
  
    return result;
  }
  
  // 示例用法
  const url = 'https://www.example.com:8080/path/to/resource?param1=value1&param2=value2#section1';
  const parsedURL = parseURL(url);
  
  console.log(parsedURL);