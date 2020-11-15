
function binary(arr, elem) {
    
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (left < right) {
        if (elem < arr[middle]) right = middle - 1; 
        else if (elem > arr[middle]) left = middle + 1;

        middle = Math.floor((left + right) / 2);
    }
   
    if (arr[middle] === elem) return middle;
    else return -1
}

console.log(
    binary([2,5,6,9,13,15,28,30], 13),
);