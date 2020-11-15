
function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
       let current = arr[i];
       let j;

       for (j = i - 1; j >= 0 && arr[j] > current; j--) {
           if (arr[j] > current) {
               arr[j+1] = arr[j]
           }
       }

       arr[j+1] = current
    }

    return arr;
}

console.log(
    insertion([2, 1, 9, 76, 4]),
    insertion([5, 3, 4, 1, 2]),
    insertion([34,22,10,19,17])
)