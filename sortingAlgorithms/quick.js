
function quickSort(arr, left=0, right=arr.length-1) {

    if (left < right) {
        let index = pivot(arr, left, right)
    
        quickSort(arr, left, index-1);
        quickSort(arr, index+1, right);
    }

    return arr;
}

function pivot(arr, start=0, end=arr.length-1) {
    let pivot = arr[start];
    let index = start;
    
    for (let i = start+1; i <= end; i++) {
        if (pivot > arr[i]) {
            index++;
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
    }

    [arr[start], arr[index]] = [arr[index], arr[start]];
    return index;
}

console.log(
    quickSort([4,6,9,1,2,5,3])
)