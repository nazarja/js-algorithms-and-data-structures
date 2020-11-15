function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]]
        }
        else if (sum > 0) right--;
        else left--;
    }
}
sumZero([-3, -2, -1, 0, 1, 2, 3, 4])


function countUniqueValues(arr) {
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            arr[i] = arr[j]
            i++;
        }
    }

    return i;
}

console.log(
    countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
);