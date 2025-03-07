const nums = [1,9,10,[1,89,0],[[1],0,9]];

// 直接用es10的flat方法

console.log(nums.flat(Infinity)); //传入的参数是展开几层，直接传入极大值就是无尽展开到一维

// 使用递归

var flatArray = function(nums) {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if(Array.isArray(nums[i])) {
            res = res.concat(flatArray(nums[i])); // 前面一定要用res把递归的内容接住，不然res没更新
        }
        else {
            res.push(nums[i]);
        }
    }

    return res;
}