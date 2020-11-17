
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node;
            return this;
        }
        else {
            let current = this.root;

            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = node;
                        return this;
                    }
                    else {
                        current = current.left;
                    }
                }
                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        return this;
                    }
                    else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        if (this.root === null) return undefined;

        let current = this.root;
        let found = false;

        while (current && !found) {
            if (value < current.value) current = current.left;
            else if (value > current.value) current = current.right;
            else found = true;
        }

        if (!found) return undefined;
        return current;
    }
};

const bst = new BinarySearchTree();

console.log(
    bst
)

