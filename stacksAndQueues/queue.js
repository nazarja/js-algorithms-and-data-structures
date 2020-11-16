// fifo (first in, first out)
// adds to end, removes from beginning
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const node = new Node(value);

        if (this.size === 0) {
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }

        this.size++;
        return this.size;
    }

    dequeue() {
        if (this.size === 0) return null;
        if (this.size === 1) this.last = null;
        
        const old = this.first;
        this.first = old.next;
        this.size--;

        return old.value;
    }
}

const queue = new Queue();
