function maxSubArraySum(arr, n) {
    let maxSum = 0;

    for (let i = 0; i < arr.length - n; i ++) {
        const window = arr.slice(i, i+n);
        const max = window.reduce((a,b) => a+b);
        if (max > maxSum) maxSum = max; 
    }

    return maxSum;
}


console.log(
    maxSubArraySum([1,2,5,2,8,1,5], 2),
    maxSubArraySum([1,2,5,2,8,1,5], 4),
)