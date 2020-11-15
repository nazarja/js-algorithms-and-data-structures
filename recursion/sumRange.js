
function sumRange(n) {
    if (n === 1) return n;
    return n + sumRange(n-1);
}

console.log(
    sumRange(4)
)
