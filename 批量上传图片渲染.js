// 场景题 有一个接口，上传图片返回url，实现等用户批量上传所有图片后，渲染到页面上

// 模拟上传图片接口
const mockUploadImage = (imageFile) => {
    return new Promise((resolve) => {
        const delay = 500 + Math.random() * 1500;

        setTimeout(() => {
            const imageUrl = `https://example.com/uploads/${imageFile.name}_${Date.now()}`;
            resolve(imageUrl);
        }, delay);
    });
};

// DOM元素
const fileInput = document.getElementById('image-upload');
const uploadButton = document.getElementById('upload-button');
const imageContainer = document.getElementById('image-container');
const statusText = document.getElementById('status-text');

// 渲染图片到页面
function renderImages(urls) {
    urls.forEach(url => {
        const imgElement = document.createElement('img');
        imgElement.src = url;
        imgElement.alt = '上传的图片';
        imgElement.style.maxWidth = '200px';
        imgElement.style.margin = '10px';
        imageContainer.appendChild(imgElement);
    });
}

// 处理上传按钮点击事件
uploadButton.addEventListener('click', async () => {
    // 检查是否选择了文件
    if (!fileInput.files || fileInput.files.length === 0) {
        statusText.textContent = '请先选择图片文件';
        return;
    }

    // 重置状态
    statusText.textContent = '上传中...';
    imageContainer.innerHTML = ''; // 清空之前的图片

    try {
        // 获取所有选中的图片文件
        const imageFiles = Array.from(fileInput.files);
        
        // 1. 批量上传所有图片（并行上传）
        const uploadPromises = imageFiles.map(file => mockUploadImage(file));
        
        // 2. 等待所有上传完成
        const imageUrls = await Promise.all(uploadPromises);
        
        // 3. 所有上传完成后，渲染图片到页面
        renderImages(imageUrls);
        
        // 更新状态
        statusText.textContent = `成功上传 ${imageUrls.length} 张图片`;
    } catch (error) {
        console.error('上传出错:', error);
        statusText.textContent = '上传失败，请重试';
    }
});