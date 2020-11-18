
class Node {
    constuctor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(value, priority) {
        const node = new Node(value, priority);
        this.queue.push(node);
        this.bubble();
    }

    bubble() {
        let index = this.queue.length - 1;
        let element = this.queue[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.queue[parentIndex];
            if (element.priority >= parent.priority) break;
            else {
                this.queue[parentIndex] = element;
                this.queue[index] = parent;
                index = parentIndex;
            }
        }

        return this;
    }

    dequeue() {
        const min = this.queue[0];


        if (this.queue.length > 0) {
            this.queue[0] = this.queue.pop();
            this.sinkDown();
        }

        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.queue.length;
        const element = this.queue[0]

        while (true) {
            let leftIndex = (2 * index) + 1;
            let rightIndex = (2 * index) + 2;

            let leftChild, rightChild;
            let swap = null;

            if (leftIndex < length) {
                leftChild = this.queue[leftIndex];
                if (leftChild.priority < element.priority) swap = leftIndex;
            }

            if (rightIndex < length) {
                rightChild = this.queue[rightIndex];
                if (
                    (swap == null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) swap = rightIndex;
            }

            if (swap === null) break;
            this.queue[index] = this.queue[swap];
            this.queue[swap] = element;
            index = swap;
        }
    }
}


const pq = new PriorityQueue();
pq.enqueue('cold', 5);
pq.enqueue('gunshot', 1);
pq.enqueue('fever', 4);
