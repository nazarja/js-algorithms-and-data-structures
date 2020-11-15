
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let middle = arr.length / 2;
    let left = arr.slice(0,middle);
    let right = arr.slice(middle,);

    let lsorted = mergeSort(left);
    let rsorted = mergeSort(right);

    return merge(lsorted, rsorted);
}

function merge(left, right) {

    let arr = [];
    
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left[0]);
            left.shift();
        }
        else {
            arr.push(right[0]);
            right.shift();
        };
    };

    if (left.length > 0) arr = arr.concat(left)
    if (right.length > 0) arr = arr.concat(right)
    
    return arr;
}


console.log(
    mergeSort([3,5,8,1,2,9,4,7,6,2])
)