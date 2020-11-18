
class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }

    insert(value) {
        this.values.push(value);

        let index = this.values.length - 1;
        let element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (element <= parent) break;
            else {
                this.values[parentIndex] = element;
                this.values[index] = parent;
                index = parentIndex;
            }
        }

        return this;
    }

    extractMax() {
        const max = this.values[0];
        this.values[0] = this.values.pop();

        let index = 0;
        const length = this.values.length;
        const element = this.values[0]

        while (true) {
            let leftIndex = (2 * index) + 1;
            let rightIndex = (2 * index) + 2;

            let leftChild, rightChild;
            let swap = null;

            if (leftIndex < length) {
                leftChild = this.values[leftIndex];
                if (leftChild > element) swap = leftIndex;
            }

            if (rightIndex < length) {
                rightChild = this.values[rightIndex];
                if (
                    (swap == null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) swap = rightIndex;
            }

            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }

        return max;
    }
}

const mbh = new MaxBinaryHeap();
mbh.insert(55);
mbh.extractMax();
console.log(mbh);