
function reverse(value) {
    if (value.length <= 1) return value;
    return reverse(value.slice(1)) + value[0]
}

console.log(
    reverse('sean')
)