function recursiveRange(n) {
    if (n === 0) return n;
    return n + recursiveRange(n-1)
}

console.log(
    recursiveRange(6)
)

