const nums = [0,3,5,2,9,3];
const res = nums.reduce((prev, cur) => {
    prev+cur;
}, 0);

console.log(res);