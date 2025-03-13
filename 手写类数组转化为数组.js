// 通过 call 将 arrayLike 作为 this 值传递给 slice
function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
}