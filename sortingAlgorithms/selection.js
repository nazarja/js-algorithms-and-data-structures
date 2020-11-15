
// add lowest to start of array
function selection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }

        if (min !== arr[i]) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}

console.log(
    selection([5, 3, 4, 1, 2]),
    selection([34,22,10,19,17])
)