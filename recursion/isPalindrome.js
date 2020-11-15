
function isPalindrome(value) {
    if (value.length === 1) return true;
    if (value.length === 2) return value[0] === value[1]
    
    if (value[0] === value.slice(-1)) return isPalindrome(value.slice(1,-1));
    return false;
}

console.log(
    isPalindrome('amanaplanacanalpanama')
)