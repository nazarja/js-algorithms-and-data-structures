

class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) this.keyMap[index] = [];

        this.keyMap[index].push([key, value])
        return index;
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i of this.keyMap[index]) {
                if (i[0] === key) {
                    return i[1];
                }
            }
        }

        return undefined;
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keysArr.push(this.keyMap[i][j][0])
                }
            }
        }

        return keysArr;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    valuesArr.push(this.keyMap[i][j][1])
                }
            }
        }

        return valuesArr;
    }
}

const ht = new HashTable();
ht.set('hello world', 'goodbye!!')
ht.set('dogs', 'are cool')
ht.set('cats', 'are fine')

console.log(
    ht
)