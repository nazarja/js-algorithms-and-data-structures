
function radix(arr) {
    const iters = mostDigits(arr);
    
    for (let i = 0; i < iters; i++) {
        const newArr = Array.from({length: 10}, () => []);
        
        for (let j = 0; j < arr.length; j++) {
            const pos = getDigit(arr[j], i);
            newArr[pos].push(arr[j])
        }

       arr = [].concat(...newArr);
    }

    return arr;

}

function mostDigits(arr) {
    let max = 0;
    arr.forEach(num => max = Math.max(max, digitCount(num)))
    return max;
}

function digitCount(num) {
    if (num === 0) return 1;
    else return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, pos) {
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

console.log(
    radix([1556,4,3556,593,408,4386,902,7,8157,86,9637,29])
)