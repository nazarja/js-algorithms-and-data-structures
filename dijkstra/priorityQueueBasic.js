
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort()
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
};

const queue = new PriorityQueue();
queue.enqueue('B', 3);
queue.enqueue('C', 5);
queue.enqueue('D', 2);
queue.enqueue('Q', 20);

console.log(
    queue,
    queue.dequeue()
)