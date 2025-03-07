// 方法一是用set

const nums = [0,9,8,0,9,6,5,5];

var quchong = function(nums) {
    return [...new Set(nums)];
}


// 方法二是用filter

var quchong2 = function(nums) {
    return nums.filter((item, index) => nums.indexOf(item) === index);
}