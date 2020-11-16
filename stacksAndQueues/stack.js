// lifo (last in, first out)
// constant time, requires adding and removing from the front of list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);

        if (!this.first && !this.last) {
            this.first = node;
            this.last = node;
        }
        else {
            let old = this.first;
            this.first = node;
            this.first.next = old;
        }

        this.size++;
        return this.size;
    }

    pop() {
        if (!this.first && !this.last) return null;
        
        const old = this.first;
        
        if (this.first === this.last)  this.last = null;
        this.first = this.first.next;

        this.size--;
        return old.value;
    }
}

const stack = new Stack();
